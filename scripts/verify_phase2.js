const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Load parsed articles
const { articles, categories, informationPages } = require('./parse_content.js');

console.log('====================================================');
console.log('           READ-ONLY PHASE 2 VERIFICATION           ');
console.log('====================================================\n');

// -----------------------------------------------------------------
// CHECK 1 & 2: Image Relevance & Hero Image Relevance
// -----------------------------------------------------------------
console.log('--- CHECK 1 & 2: Image Relevance & Hero Relevance ---');
let totalImagesChecked = 0;
let irrelevantImages = [];
let reusedImagesMap = {};

articles.forEach(art => {
  totalImagesChecked++;
  const imgPath = art.image;
  const filename = path.basename(imgPath);
  const alt = art.imageAlt || '';

  if (!reusedImagesMap[filename]) reusedImagesMap[filename] = [];
  reusedImagesMap[filename].push(art.slug);

  // Check relevance: Does alt or image filename relate to article title / focus keyword?
  const slugKeywords = art.slug.split('-');
  const altLower = alt.toLowerCase();
  const filenameLower = filename.toLowerCase();

  // Basic check for obvious mismatch (e.g. tractor image on scholarship article, or solar image on tractor article)
  if (filenameLower.includes('tractor') && !slugKeywords.includes('tractor') && !art.title.toLowerCase().includes('tractor')) {
    irrelevantImages.push({ slug: art.slug, title: art.title, image: filename, reason: 'Tractor image assigned to non-tractor article' });
  }
  if (filenameLower.includes('solar') && !slugKeywords.includes('solar') && !art.title.toLowerCase().includes('solar')) {
    irrelevantImages.push({ slug: art.slug, title: art.title, image: filename, reason: 'Solar image assigned to non-solar article' });
  }
  if (filenameLower.includes('laptop') && !slugKeywords.includes('laptop') && !art.title.toLowerCase().includes('laptop')) {
    irrelevantImages.push({ slug: art.slug, title: art.title, image: filename, reason: 'Laptop image assigned to non-laptop article' });
  }
  if (filenameLower.includes('bike') && !slugKeywords.includes('bike') && !slugKeywords.includes('scooty') && !art.title.toLowerCase().includes('bike') && !art.title.toLowerCase().includes('scooty')) {
    irrelevantImages.push({ slug: art.slug, title: art.title, image: filename, reason: 'Bike image assigned to non-bike article' });
  }
});

const reusedList = Object.entries(reusedImagesMap).filter(([fn, list]) => list.length > 1);

console.log(`Total Article Images Checked: ${totalImagesChecked}`);
console.log(`Incorrect / Unrelated Images Found: ${irrelevantImages.length}`);
if (irrelevantImages.length > 0) {
  console.log('Details:', irrelevantImages);
}
console.log(`Reused Images Across Multiple Articles: ${reusedList.length}`);
reusedList.forEach(([fn, list]) => {
  console.log(`  - ${fn} used by ${list.length} articles: ${list.join(', ')}`);
});

// -----------------------------------------------------------------
// CHECK 3: Internal Image Paths
// -----------------------------------------------------------------
console.log('\n--- CHECK 3: Internal Image Paths & Extensions ---');
let brokenPaths = [];
const publicImagesDir = 'public/images';
const existingFiles = new Set(fs.readdirSync(publicImagesDir));

// Check homepage hero & trust images
['hero-support.jpg', 'registration-guide.jpg'].forEach(fn => {
  if (!existingFiles.has(fn)) {
    brokenPaths.push({ source: 'Homepage', path: `/images/${fn}` });
  }
});

// Check article images
articles.forEach(art => {
  const relPath = art.image.replace(/^\/images\//, '');
  if (!existingFiles.has(relPath)) {
    brokenPaths.push({ source: `Article ${art.slug}`, path: art.image });
  }
});

console.log(`Broken / Missing Image Paths: ${brokenPaths.length}`);
if (brokenPaths.length > 0) {
  console.log('Details:', brokenPaths);
}

// -----------------------------------------------------------------
// CHECK 4: Backup Safety
// -----------------------------------------------------------------
console.log('\n--- CHECK 4: Backup Safety ---');
const backupExists = fs.existsSync('images-backup');
const backupFiles = backupExists ? fs.readdirSync('images-backup') : [];
const gitignoreText = fs.readFileSync('.gitignore', 'utf8');
const isIgnored = gitignoreText.split('\n').some(line => line.trim() === 'images-backup');

let backupStatus = 'FAIL';
if (backupExists && backupFiles.length >= 83 && isIgnored) {
  backupStatus = 'PASS';
}
console.log(`Backup Folder Exists: ${backupExists} (${backupFiles.length} files)`);
console.log(`Added to .gitignore: ${isIgnored}`);
console.log(`Backup Status: ${backupStatus}`);

// -----------------------------------------------------------------
// CHECK 5: Git Diff & Status
// -----------------------------------------------------------------
console.log('\n--- CHECK 5: Git Diff & Status ---');
try {
  const gitStatus = execSync('git status --porcelain', { encoding: 'utf8' }).trim();
  const gitDiffStat = execSync('git diff --stat', { encoding: 'utf8' }).trim();
  
  console.log('Git Status Output:');
  console.log(gitStatus || '(Clean output - untracked helper scripts only)');
  console.log('\nGit Diff Stat Summary:');
  console.log(gitDiffStat || '(No staged/committed diffs)');

  // Analyze files changed
  const lines = gitStatus.split('\n').filter(Boolean);
  const modifiedCodeFiles = lines.filter(l => l.includes('.tsx') || l.includes('.ts') || l.includes('.css') || l.includes('.js'));
  console.log(`\nModified Code Files (${modifiedCodeFiles.length}):`);
  modifiedCodeFiles.forEach(f => console.log('  ' + f));
} catch (e) {
  console.error('Git execution error:', e.message);
}

console.log('\n====================================================');
