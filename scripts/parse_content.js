const fs = require('fs');

const contentTs = fs.readFileSync('src/data/content.ts', 'utf8');

// We can compile or extract the articles array by using ts-node or transpiling with esbuild / eval / regex
// Let's parse articles using ts-node or basic string evaluation via node since it's valid JS/TS data
const evalCode = contentTs
  .replace(/import type .*?;/g, '')
  .replace(/export interface .*?\{[\s\S]*?\}/g, '')
  .replace(/export type .*?;/g, '')
  .replace(/export const categories: Category\[\] =/, 'const categories =')
  .replace(/export const articles: Article\[\] =/, 'const articles =')
  .replace(/export const informationPages: InformationPage\[\] =/, 'const informationPages =')
  .replace(/export const allInternalSlugs =[\s\S]*?;/, '')
  .replace(/export function getArticlesForCategory[\s\S]*?\}/g, '')
  .concat('\nmodule.exports = { articles, categories, informationPages };');

let parsedData;
try {
  const m = { exports: {} };
  const fn = new Function('module', 'exports', evalCode);
  fn(m, m.exports);
  parsedData = m.exports;
} catch (e) {
  console.error('Failed to parse content.ts via eval:', e.message);
  // fallback using regex match
  const articleBlocks = contentTs.match(/\{\s*slug:\s*"[^"]+"[\s\S]*?imageAlt:\s*"[^"]*"/g) || [];
  const articles = articleBlocks.map(block => {
    const slug = (block.match(/slug:\s*"([^"]+)"/) || [])[1];
    const title = (block.match(/title:\s*"([^"]+)"/) || [])[1];
    const image = (block.match(/image:\s*"([^"]+)"/) || [])[1];
    const imageAlt = (block.match(/imageAlt:\s*"([^"]+)"/) || [])[1];
    const primaryCategory = (block.match(/primaryCategory:\s*"([^"]+)"/) || [])[1];
    return { slug, title, image, imageAlt, primaryCategory };
  });
  parsedData = { articles, categories: [], informationPages: [] };
}

module.exports = parsedData;
