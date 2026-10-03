const fs = require('fs');
const path = require('path');
const { articles } = require('./parse_content.js');
const imageDetails = JSON.parse(fs.readFileSync('scripts/image_details.json', 'utf8'));

// Create detailed map of image filename to all article usages
const usageMap = {};
articles.forEach(art => {
  const filename = path.basename(art.image);
  if (!usageMap[filename]) usageMap[filename] = [];
  usageMap[filename].push(art);
});

const publicImages = imageDetails.filter(img => img.path.startsWith('public/images/'));

const fullAudit = publicImages.map(img => {
  const filename = img.filename;
  const articlesUsing = usageMap[filename] || [];
  
  let pageComponentRoute = [];
  let altText = [];
  let isOgTwitter = false;
  let isJsonLd = false;

  if (filename === 'hero-support.jpg') {
    pageComponentRoute.push('Homepage Hero (`src/app/page.tsx`)');
    pageComponentRoute.push('Default OG/Twitter Meta (`src/app/page.tsx`, `src/app/[slug]/page.tsx`)');
    altText.push('A Pakistani mother and daughter receiving public service guidance');
    isOgTwitter = true;
  }
  if (filename === 'registration-guide.jpg') {
    pageComponentRoute.push('Homepage Trust Section (`src/app/page.tsx`)');
    altText.push('A Pakistani woman checking a registration guide safely');
  }

  articlesUsing.forEach(art => {
    pageComponentRoute.push(`Article: \`/${art.slug}/\` (${art.title})`);
    if (art.imageAlt) altText.push(art.imageAlt);
    isOgTwitter = true;
    isJsonLd = true;
  });

  // Aspect ratio calculation
  const ratioVal = img.width / img.height;
  const ratioStr = ratioVal.toFixed(2);
  const is169 = Math.abs(ratioVal - (16/9)) < 0.05;

  // Check content-drafts sync
  const draftFolderMatches = fs.readdirSync('content-drafts').filter(dir => {
    const featPath = path.join('content-drafts', dir, 'featured-image.jpg');
    return fs.existsSync(featPath);
  });

  // Flags
  const flags = [];
  if (pageComponentRoute.length === 0) flags.push('UNUSED');
  if (articlesUsing.length > 1) flags.push(`REUSED (${articlesUsing.length} articles)`);
  if (img.sizeKB > 200) flags.push(`OVER 200 KB (${img.sizeKB} KB)`);
  if (!is169 && filename !== 'hero-support.jpg') flags.push(`NON-16:9 (${img.width}x${img.height}, ratio ${ratioStr})`);
  if (altText.length === 0 || altText.some(a => a.length < 15)) flags.push('WEAK/MISSING ALT');

  return {
    filename,
    format: img.format,
    dimensions: img.dimensions,
    width: img.width,
    height: img.height,
    sizeKB: img.sizeKB,
    pageComponentRoute: pageComponentRoute.join('<br>') || 'Unused',
    altText: Array.from(new Set(altText)).join('<br>') || 'N/A',
    widthHeightSet: filename === 'hero-support.jpg' ? '1600x1000 (Meta) / fill (Hero)' : 'fill (Responsive Aspect Box)',
    loadingPriority: filename === 'hero-support.jpg' ? 'priority / fetchpriority="high"' : 'loading="lazy"',
    ogTwitterJsonLd: [
      isOgTwitter ? 'og:image, twitter:image' : null,
      isJsonLd ? 'JSON-LD Article' : null
    ].filter(Boolean).join(', ') || 'No',
    flags,
    articlesUsing
  };
});

fs.writeFileSync('scripts/full_audit_data.json', JSON.stringify(fullAudit, null, 2));
console.log(`Generated full_audit_data.json with ${fullAudit.length} items.`);
