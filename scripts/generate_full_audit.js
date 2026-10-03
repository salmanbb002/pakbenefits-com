const fs = require('fs');
const path = require('path');

function getDimensions(filePath) {
  const buffer = fs.readFileSync(filePath);
  const ext = path.extname(filePath).toLowerCase();

  if (ext === '.png') {
    if (buffer.length >= 24 && buffer.toString('ascii', 12, 16) === 'IHDR') {
      return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) };
    }
  } else if (ext === '.jpg' || ext === '.jpeg') {
    let offset = 2;
    while (offset < buffer.length) {
      if (buffer[offset] !== 0xFF) break;
      const marker = buffer[offset + 1];
      if (marker === 0xC0 || marker === 0xC2) {
        const height = buffer.readUInt16BE(offset + 5);
        const width = buffer.readUInt16BE(offset + 7);
        return { width, height };
      }
      const length = buffer.readUInt16BE(offset + 2);
      offset += 2 + length;
    }
  } else if (ext === '.webp') {
    if (buffer.length >= 30 && buffer.toString('ascii', 0, 4) === 'RIFF') {
      if (buffer.toString('ascii', 12, 16) === 'VP8 ') {
        const width = buffer.readUInt16LE(26) & 0x3FFF;
        const height = buffer.readUInt16LE(28) & 0x3FFF;
        return { width, height };
      } else if (buffer.toString('ascii', 12, 16) === 'VP8L') {
        const b0 = buffer[21], b1 = buffer[22], b2 = buffer[23], b3 = buffer[24];
        const width = 1 + (((b1 & 0x3F) << 8) | b0);
        const height = 1 + (((b3 & 0xF) << 10) | (b2 << 2) | ((b1 & 0xC0) >> 6));
        return { width, height };
      } else if (buffer.toString('ascii', 12, 16) === 'VP8X') {
        const width = 1 + (buffer[24] | (buffer[25] << 8) | (buffer[26] << 16));
        const height = 1 + (buffer[27] | (buffer[28] << 8) | (buffer[29] << 16));
        return { width, height };
      }
    }
  } else if (ext === '.svg') {
    const str = buffer.toString('utf8');
    const widthMatch = str.match(/width=["'](\d+(?:\.\d+)?)(?:px)?["']/i);
    const heightMatch = str.match(/height=["'](\d+(?:\.\d+)?)(?:px)?["']/i);
    const viewBoxMatch = str.match(/viewBox=["']\d+\s+\d+\s+(\d+(?:\.\d+)?)\s+(\d+(?:\.\d+)?)/i);
    let w = widthMatch ? widthMatch[1] : (viewBoxMatch ? viewBoxMatch[1] : 'vector');
    let h = heightMatch ? heightMatch[1] : (viewBoxMatch ? viewBoxMatch[2] : 'vector');
    return { width: w, height: h };
  }
  return { width: 'unknown', height: 'unknown' };
}

function scanDir(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      if (!['node_modules', '.next', 'out', 'images-backup', 'new-images', '.git'].includes(file)) {
        scanDir(filePath, fileList);
      }
    } else {
      const ext = path.extname(file).toLowerCase();
      if (['.jpg', '.jpeg', '.png', '.webp', '.svg', '.ico'].includes(ext)) {
        fileList.push(filePath);
      }
    }
  }
  return fileList;
}

function getAllCodeFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      if (!['node_modules', '.next', 'out', 'images-backup', 'new-images', '.git'].includes(file)) {
        getAllCodeFiles(filePath, fileList);
      }
    } else {
      const ext = path.extname(file).toLowerCase();
      if (['.ts', '.tsx', '.js', '.jsx', '.json', '.md', '.mdx', '.jsonld', '.html', '.css'].includes(ext)) {
        fileList.push(filePath);
      }
    }
  }
  return fileList;
}

const allImageFiles = scanDir('public').concat(scanDir('content-drafts'));
const codeFiles = getAllCodeFiles('src').concat(getAllCodeFiles('content-drafts')).concat(getAllCodeFiles('public'));

console.log(`Found ${allImageFiles.length} image files and ${codeFiles.length} code/content files.`);

const imageDetails = allImageFiles.map(filePath => {
  const stat = fs.statSync(filePath);
  const dims = getDimensions(filePath);
  return {
    path: filePath.replace(/\\/g, '/'),
    filename: path.basename(filePath),
    format: path.extname(filePath).replace('.', '').toLowerCase(),
    width: dims.width,
    height: dims.height,
    dimensions: `${dims.width}x${dims.height}`,
    sizeBytes: stat.size,
    sizeKB: parseFloat((stat.size / 1024).toFixed(2))
  };
});

fs.writeFileSync('scripts/image_details.json', JSON.stringify(imageDetails, null, 2));
console.log('Saved scripts/image_details.json');
