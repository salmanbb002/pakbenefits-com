import fs from 'fs';
import path from 'path';

const root = process.cwd();
const contentFilePath = path.resolve(root, 'src/data/content.ts');
let content = fs.readFileSync(contentFilePath, 'utf8');

const slug = 'wazir-e-azam-apna-ghar-program';

if (content.includes(`slug: "${slug}"`)) {
  console.log('Article already exists in content.ts!');
  process.exit(0);
}

// Extract the article object from the content-entry.md reference artifact.
const entryPath = path.resolve(root, 'content-drafts', `${slug}-2026-09-30`, 'content-entry.md');
const entryText = fs.readFileSync(entryPath, 'utf8');
const match = entryText.match(/```ts\n([\s\S]*?)\n```/);
if (!match) {
  console.error('No ts block found in content-entry.md');
  process.exit(1);
}
let articleObjectString = match[1].trimEnd();
if (!articleObjectString.endsWith(',')) articleObjectString += ',';
articleObjectString += '\n';

const articlesMarker = 'export const articles: Article[] = [';
const insertPos = content.indexOf(articlesMarker);
if (insertPos === -1) {
  console.error('Could not find articles marker in content.ts');
  process.exit(1);
}

content = content.slice(0, insertPos + articlesMarker.length) + '\n' + articleObjectString + content.slice(insertPos + articlesMarker.length);

// Bidirectional internal links: append this slug to each related article's relatedSlugs array.
const relatedTargets = [
  'apni-chhat-apna-ghar-scheme-online-apply-2026',
  'apni-zameen-apna-ghar-balloting-result-2026',
  'federal-contributory-pension-scheme',
  'prime-minister-youth-loan-scheme-2026'
];

let linkedCount = 0;
for (const target of relatedTargets) {
  const slugIdx = content.indexOf(`slug: "${target}"`);
  if (slugIdx === -1) continue;
  const rsIdx = content.indexOf('relatedSlugs: [', slugIdx);
  if (rsIdx === -1) continue;
  const closeIdx = content.indexOf(']', rsIdx);
  if (closeIdx === -1) continue;
  if (content.slice(rsIdx, closeIdx).includes(`"${slug}"`)) continue;
  content = content.slice(0, closeIdx) + `,\n      "${slug}"` + content.slice(closeIdx);
  linkedCount++;
}

fs.writeFileSync(contentFilePath, content, 'utf8');
console.log(`Successfully published ${slug} into content.ts and added incoming links in ${linkedCount} related articles.`);
