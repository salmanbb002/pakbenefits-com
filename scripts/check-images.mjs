import fs from 'fs';
const content = fs.readFileSync('src/data/content.ts', 'utf8');
const matches = [...content.matchAll(/slug:\s*"([^"]+)"[\s\S]*?image:\s*"([^"]+)"/g)];
matches.forEach(m => console.log(m[1], '-->', m[2]));
