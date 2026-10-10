import fs from 'fs';
import path from 'path';

function parseCsv(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split(/\r?\n/).filter(line => line.trim().length > 0);
  if (lines.length < 2) return [];
  
  const headers = lines[0].split(',').map(h => h.trim().replace(/^"|"$/g, ''));
  const rows = [];
  
  for (let i = 1; i < lines.length; i++) {
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

const pages = parseCsv('docs/gsc-data/Pages.csv');
const queries = parseCsv('docs/gsc-data/Queries.csv');

let totalClicks = 0;
let totalImpressions = 0;

pages.forEach(p => {
  totalClicks += parseFloat(p['Clicks'] || 0);
  totalImpressions += parseFloat(p['Impressions'] || 0);
});

console.log('=== GSC DATA AUDIT (PHASE 1) ===');
console.log(`Total Pages Ranked: ${pages.length}`);
console.log(`Total Ranking Queries: ${queries.length}`);
console.log(`Total Recorded Clicks: ${totalClicks}`);
console.log(`Total Recorded Impressions: ${totalImpressions}`);
console.log(`Sitewide Avg CTR: ${((totalClicks / totalImpressions) * 100).toFixed(2)}%`);

// Top 5 Pages by Clicks
pages.sort((a, b) => parseFloat(b['Clicks'] || 0) - parseFloat(a['Clicks'] || 0));
console.log('\n--- TOP 5 PAGES BY CLICKS ---');
pages.slice(0, 5).forEach((p, i) => {
  console.log(`${i+1}. ${p['Top pages']} | Clicks: ${p['Clicks']} | Impr: ${p['Impressions']} | Pos: ${p['Position']}`);
});

// Top 5 Pages by Impressions
pages.sort((a, b) => parseFloat(b['Impressions'] || 0) - parseFloat(a['Impressions'] || 0));
console.log('\n--- TOP 5 PAGES BY IMPRESSIONS ---');
pages.slice(0, 5).forEach((p, i) => {
  console.log(`${i+1}. ${p['Top pages']} | Impr: ${p['Impressions']} | Clicks: ${p['Clicks']} | Pos: ${p['Position']}`);
});

// Bike / Scooty cluster pages in GSC
const bikePages = pages.filter(p => /bike|scooty|pave/i.test(p['Top pages']));
console.log(`\n--- E-BIKE / SCOOTY CLUSTER PAGES (${bikePages.length} active) ---`);
bikePages.forEach(p => {
  console.log(`- ${p['Top pages']} | Impr: ${p['Impressions']} | Clicks: ${p['Clicks']} | Pos: ${p['Position']}`);
});
