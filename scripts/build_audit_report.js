const fs = require('fs');
const path = require('path');

const imageDetails = JSON.parse(fs.readFileSync('scripts/image_details.json', 'utf8'));

// Read key codebase files
const contentTs = fs.readFileSync('src/data/content.ts', 'utf8');
const pageTsx = fs.readFileSync('src/app/page.tsx', 'utf8');
const slugPageTsx = fs.readFileSync('src/app/[slug]/page.tsx', 'utf8');
const templatesTsx = fs.readFileSync('src/components/templates.tsx', 'utf8');
const articleCardTsx = fs.readFileSync('src/components/article-card.tsx', 'utf8');

// Parse articles from src/data/content.ts
// We will extract article objects using regex / parsing
const { articles } = require('./parse_content.js');

console.log(`Parsed ${articles.length} articles from src/data/content.ts.`);

// Build detailed map for each image in public/images
const publicImages = imageDetails.filter(img => img.path.startsWith('public/images/'));
const contentDraftImages = imageDetails.filter(img => img.path.includes('content-drafts/'));
const otherPublicImages = imageDetails.filter(img => img.path.startsWith('public/') && !img.path.startsWith('public/images/'));

console.log(`public/images count: ${publicImages.length}`);
console.log(`content-drafts images count: ${contentDraftImages.length}`);
console.log(`other public images count: ${otherPublicImages.length}`);

// Map of image filename -> article references
const auditRows = [];

// Track image usage frequencies
const imageUsageMap = {};

articles.forEach(art => {
  const imgPath = art.image; // e.g. "/images/foo.jpg"
  const imgFilename = path.basename(imgPath);
  if (!imageUsageMap[imgFilename]) {
    imageUsageMap[imgFilename] = [];
  }
  imageUsageMap[imgFilename].push(art);
});

// Check all public/images
publicImages.forEach(img => {
  const filename = img.filename;
  const usedArticles = imageUsageMap[filename] || [];
  
  // Usage location(s)
  let pagesUsing = [];
  let altTexts = [];
  let isHero = false;
  let isTrustSection = false;
  let isOgTwitter = false;
  let isJsonLd = false;
  let loadingPriority = 'loading="lazy" (Next.js default)';
  let widthHeightSet = 'fill (CSS layout responsive)';

  if (filename === 'hero-support.jpg') {
    isHero = true;
    pagesUsing.push('Homepage Hero Section (`/`)');
    altTexts.push('A Pakistani mother and daughter receiving public service guidance');
    isOgTwitter = true;
    loadingPriority = 'priority / fetchpriority="high"';
    widthHeightSet = '1600x1000 in OG/Twitter; fill in Hero';
  }

  if (filename === 'registration-guide.jpg') {
    isTrustSection = true;
    pagesUsing.push('Homepage Trust Section (`/`)');
    altTexts.push('A Pakistani woman checking a registration guide safely');
    loadingPriority = 'loading="lazy"';
  }

  usedArticles.forEach(art => {
    pagesUsing.push(`Article: \`/${art.slug}/\` (${art.title})`);
    if (art.imageAlt) altTexts.push(art.imageAlt);
    isJsonLd = true; // ArticleTemplate sets articleSchema.image = siteUrl + article.image
    isOgTwitter = true; // generateMetadata sets OG & Twitter image to article.image
  });

  // Check if used elsewhere in codebase
  if (pageTsx.includes(filename) && filename !== 'hero-support.jpg' && filename !== 'registration-guide.jpg') {
    pagesUsing.push('src/app/page.tsx');
  }

  const isUnused = pagesUsing.length === 0;
  const isDuplicated = usedArticles.length > 1;
  const isOver200KB = img.sizeKB > 200;
  const ratio = (img.width / img.height).toFixed(2);
  const isNot169 = Math.abs(img.width / img.height - 16/9) > 0.08;
  const weakAlt = altTexts.some(a => !a || a.length < 15 || a.toLowerCase().includes('placeholder'));

  // Collect flags
  const flags = [];
  if (isUnused) flags.push('UNUSED IMAGE');
  if (isDuplicated) flags.push(`REUSED across ${usedArticles.length} articles`);
  if (isOver200KB) flags.push(`OVER 200 KB (${img.sizeKB} KB)`);
  if (isNot169 && filename !== 'hero-support.jpg') flags.push(`NON-16:9 ratio (${img.width}x${img.height}, ratio ${ratio})`);
  if (weakAlt) flags.push('WEAK/SHORT ALT TEXT');

  auditRows.push({
    filename,
    path: img.path,
    format: img.format,
    dimensions: img.dimensions,
    width: img.width,
    height: img.height,
    sizeKB: img.sizeKB,
    pagesUsing: pagesUsing.length > 0 ? pagesUsing.join('<br>') : 'Unused',
    altText: altTexts.length > 0 ? Array.from(new Set(altTexts)).join('<br>') : 'N/A',
    widthHeightSet,
    loadingPriority,
    ogTwitterJsonLd: [
      isOgTwitter ? 'og:image, twitter:image' : null,
      isJsonLd ? 'JSON-LD Article schema' : null
    ].filter(Boolean).join(', ') || 'No',
    flags,
    usedArticles
  });
});

fs.writeFileSync('scripts/audit_rows.json', JSON.stringify(auditRows, null, 2));
console.log(`Processed ${auditRows.length} audit rows.`);
