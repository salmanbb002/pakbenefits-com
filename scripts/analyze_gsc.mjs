import fs from 'fs';
import path from 'path';

function findCsv(filename) {
  const paths = [
    path.resolve('docs/gsc-data', filename),
    path.resolve('docs', filename),
    path.resolve(process.env.USERPROFILE || 'C:/Users/salma', 'Downloads', filename)
  ];
  for (const p of paths) {
    if (fs.existsSync(p)) return p;
  }
  return null;
}

function parseCsv(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split(/\r?\n/).filter(line => line.trim().length > 0);
  if (lines.length < 2) return [];
  
  const headers = lines[0].split(',').map(h => h.trim().replace(/^"|"$/g, ''));
  const rows = [];
  
  for (let i = 1; i < lines.length; i++) {
    // Basic regex CSV row splitter handling quotes
    const regex = /(?:^|,)(?:"([^"]*(?:""[^"]*)*)"|([^",]*))/g;
    const values = [];
    let match;
    while ((match = regex.exec(lines[i])) !== null) {
      if (match.index === regex.lastIndex) regex.lastIndex++;
      values.push((match[1] !== undefined ? match[1].replace(/""/g, '"') : match[2] || '').trim());
    }
    if (values.length >= headers.length) {
      const obj = {};
      headers.forEach((h, idx) => {
        obj[h] = values[idx];
      });
      rows.push(obj);
    }
  }
  return rows;
}

console.log('--- Google Search Console Data Check ---');
const queriesPath = findCsv('Queries.csv');
const pagesPath = findCsv('Pages.csv');

if (!queriesPath || !pagesPath) {
  console.log('Queries.csv found:', queriesPath ? 'YES (' + queriesPath + ')' : 'NO');
  console.log('Pages.csv found:', pagesPath ? 'YES (' + pagesPath + ')' : 'NO');
  console.log('\nPlease place Queries.csv and Pages.csv in docs/gsc-data/ or docs/ to run full audit.');
  process.exit(0);
}

console.log(`Loaded Queries: ${queriesPath}`);
console.log(`Loaded Pages: ${pagesPath}`);

const queries = parseCsv(queriesPath);
const pages = parseCsv(pagesPath);

console.log(`Total Queries: ${queries.length}`);
console.log(`Total Pages: ${pages.length}`);

// Sort pages by impressions descending
pages.sort((a, b) => {
  const impA = parseFloat(a['Impressions'] || a['impressions'] || 0);
  const impB = parseFloat(b['Impressions'] || b['impressions'] || 0);
  return impB - impA;
});

console.log('\nTop 10 Pages by Impressions:');
pages.slice(0, 10).forEach((p, idx) => {
  const url = p['Top pages'] || p['Page'] || p['URL'] || Object.values(p)[0];
  const clicks = p['Clicks'] || p['clicks'] || 0;
  const imp = p['Impressions'] || p['impressions'] || 0;
  const pos = p['Position'] || p['position'] || '-';
  console.log(`${idx + 1}. ${url} | Impr: ${imp} | Clicks: ${clicks} | Pos: ${pos}`);
});
