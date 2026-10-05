import fs from 'fs';

const content = fs.readFileSync('src/data/content.ts', 'utf8');
const regex = /slug:\s*"([^"]+)"/g;
const slugs = [];
let match;
while ((match = regex.exec(content)) !== null) {
  slugs.push(match[1]);
}

console.log(`Total articles found: ${slugs.length}`);
const relevant = slugs.filter(s => 
  s.includes('bisp') || 
  s.includes('8171') || 
  s.includes('pser') || 
  s.includes('solar') || 
  s.includes('kafaalat') || 
  s.includes('himmat') || 
  s.includes('kisan') ||
  s.includes('pmt') ||
  s.includes('nser')
);

console.log('Relevant Slugs:', relevant);
