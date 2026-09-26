import fs from 'fs';
import path from 'path';

const contentFilePath = path.resolve('src/data/content.ts');
const content = fs.readFileSync(contentFilePath, 'utf8');

const regex = /slug:\s*["']([^"']+)["']/g;
let match;
const slugs = [];
while ((match = regex.exec(content)) !== null) {
  slugs.push(match[1]);
}

console.log('Total articles in content.ts:', slugs.length);
console.log('First 20 slugs:', slugs.slice(0, 20));

const k1 = 'bisp-biometric-verification-failed';
const k2 = 'bisp-tehsil-office-peshawar';
const k3 = 'cm-punjab-apni-chhat-apna-ghar';

console.log('k1 matching slugs:', slugs.filter(s => s.includes(k1)));
console.log('k2 matching slugs:', slugs.filter(s => s.includes(k2)));
console.log('k3 matching slugs:', slugs.filter(s => s.includes(k3)));
