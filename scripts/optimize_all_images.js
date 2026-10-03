const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function optimizeImages() {
  const imagesDir = 'public/images';
  const files = fs.readdirSync(imagesDir);

  console.log(`Starting optimization of ${files.length} images in ${imagesDir}...`);

  let optimizedCount = 0;
  let totalSavedBytes = 0;

  for (const filename of files) {
    const filePath = path.join(imagesDir, filename);
    if (!fs.statSync(filePath).isFile()) continue;

    const ext = path.extname(filename).toLowerCase();
    if (!['.jpg', '.jpeg', '.webp', '.png'].includes(ext)) continue;

    const fileBuffer = fs.readFileSync(filePath);
    const originalSize = fileBuffer.length;
    const metadata = await sharp(fileBuffer).metadata();

    let targetWidth = metadata.width;
    let targetHeight = metadata.height;
    let targetQuality = 82;

    if (filename === 'hero-support.jpg' || filename === 'registration-guide.jpg') {
      targetWidth = 1600;
      targetHeight = 1000;
      targetQuality = 80;
    } else {
      // Article featured image: ensure 16:9 aspect ratio (1280x720 or 1600x900)
      if (metadata.width > 1600) {
        targetWidth = 1280;
        targetHeight = 720;
      } else if (metadata.width < 800) {
        targetWidth = 1280;
        targetHeight = 720;
      } else {
        // Fit to 16:9 aspect ratio (1280x720)
        targetWidth = 1280;
        targetHeight = 720;
      }
      targetQuality = 78;
    }

    const tempBuffer = await sharp(fileBuffer)
      .resize(targetWidth, targetHeight, {
        fit: 'cover',
        position: 'center'
      })
      .toFormat(ext === '.webp' ? 'webp' : 'jpeg', {
        quality: targetQuality,
        progressive: true,
        mozjpeg: ext !== '.webp'
      })
      .toBuffer();

    const newSize = tempBuffer.length;
    if (newSize < originalSize || filename === 'hero-support.jpg' || filename === 'registration-guide.jpg' || metadata.width > 1600) {
      fs.writeFileSync(filePath, tempBuffer);
      optimizedCount++;
      totalSavedBytes += (originalSize - newSize);
      console.log(`[Optimized] ${filename}: ${(originalSize/1024).toFixed(1)} KB -> ${(newSize/1024).toFixed(1)} KB (${targetWidth}x${targetHeight})`);
    } else {
      console.log(`[Skipped] ${filename}: already optimal at ${(originalSize/1024).toFixed(1)} KB`);
    }
  }

  console.log(`\nOptimization Complete! ${optimizedCount} files optimized. Total space saved: ${(totalSavedBytes / (1024*1024)).toFixed(2)} MB`);

  // Re-sync optimized images to content-drafts
  const drafts = fs.readdirSync('content-drafts').filter(f => fs.statSync(path.join('content-drafts', f)).isDirectory());
  const { articles } = require('./parse_content.js');
  let draftSyncCount = 0;
  for (const article of articles) {
    const imgFilename = path.basename(article.image);
    const srcPath = path.join(imagesDir, imgFilename);
    if (!fs.existsSync(srcPath)) continue;

    const matchingDraft = drafts.find(d => d.startsWith(article.slug));
    if (matchingDraft) {
      const destPath = path.join('content-drafts', matchingDraft, 'featured-image.jpg');
      fs.copyFileSync(srcPath, destPath);
      draftSyncCount++;
    }
  }
  console.log(`Re-synced ${draftSyncCount} optimized images to content-drafts/`);
}

optimizeImages().catch(err => console.error('Error optimizing images:', err));
