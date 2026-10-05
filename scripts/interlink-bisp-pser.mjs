import fs from 'fs';
import path from 'path';

const contentFilePath = path.resolve('src/data/content.ts');
let content = fs.readFileSync(contentFilePath, 'utf8');

const targetSlug = "bisp-pser-updates";
const targetHref = "/bisp-pser-updates";
const targetLabel = "BISP & PSER Updates 2026: Online Registration, 8171 Status Check & Dynamic Survey Guide";

// List of target articles to link WITH bisp-pser-updates
const relatedTargetSlugs = [
  'bisp-benazir-kafaalat-8171-check',
  'cm-punjab-solar-panel-scheme-2026-online-apply',
  'cm-punjab-himmat-card-online-apply-2026',
  'cm-punjab-kisan-card-online-apply-2026',
  'pmt-score-above-32-bisp-re-survey-guide',
  '8171-web-portal-not-working',
  'bisp-dynamic-survey-token-required-documents-guide',
  'ehsaas-kafalat-invalid-cnic-nser-update'
];

let linksInjectedCount = 0;
let relatedSlugsAddedCount = 0;

relatedTargetSlugs.forEach(slug => {
  const slugMarker = `slug: "${slug}"`;
  const slugIndex = content.indexOf(slugMarker);

  if (slugIndex === -1) {
    console.log(`Warning: ${slug} not found in content.ts`);
    return;
  }

  // Find article chunk boundaries
  const nextSlugIndex = content.indexOf('slug: "', slugIndex + slugMarker.length);
  const chunkEnd = nextSlugIndex !== -1 ? nextSlugIndex : content.length;
  let articleChunk = content.slice(slugIndex, chunkEnd);

  // 1. Add targetSlug to relatedSlugs if not present
  if (articleChunk.includes('relatedSlugs: [')) {
    if (!articleChunk.includes(`"${targetSlug}"`)) {
      const relPos = articleChunk.indexOf('relatedSlugs: [') + 'relatedSlugs: ['.length;
      articleChunk = articleChunk.slice(0, relPos) + `\n    "${targetSlug}",` + articleChunk.slice(relPos);
      relatedSlugsAddedCount++;
    }
  }

  // 2. Inject section link into existing links array if not already present
  if (!articleChunk.includes(targetHref)) {
    const linksRegex = /(links\s*:\s*\[)/;
    const linksMatch = linksRegex.exec(articleChunk);

    if (linksMatch) {
      const insertPos = linksMatch.index + linksMatch[0].length;
      const linkEntry = `\n          { label: "${targetLabel}", href: "${targetHref}" },`;
      articleChunk = articleChunk.slice(0, insertPos) + linkEntry + articleChunk.slice(insertPos);
      linksInjectedCount++;
    } else {
      // Find first paragraphs array end and create links array
      const paraRegex = /(paragraphs\s*:\s*\[[\s\S]*?\])/;
      const paraMatch = paraRegex.exec(articleChunk);
      if (paraMatch) {
        const insertPos = paraMatch.index + paraMatch[0].length;
        const linksBlock = `,\n        links: [\n          { label: "${targetLabel}", href: "${targetHref}" }\n        ]`;
        articleChunk = articleChunk.slice(0, insertPos) + linksBlock + articleChunk.slice(insertPos);
        linksInjectedCount++;
      }
    }
  }

  content = content.slice(0, slugIndex) + articleChunk + content.slice(chunkEnd);
});

fs.writeFileSync(contentFilePath, content, 'utf8');

console.log(`Successfully interlinked! ${relatedSlugsAddedCount} relatedSlugs updated, ${linksInjectedCount} links injected.`);
