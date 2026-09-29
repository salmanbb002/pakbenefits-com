import fs from 'fs';

let content = fs.readFileSync('src/data/content.ts', 'utf8');

const targetSlug = "cm-punjab-youth-games-2026-online-registration";
const targetHref = "/cm-punjab-youth-games-2026-online-registration/";
const targetLabel = "CM Punjab Youth Games 2026: Online Apply & Sports Guide";

// Helper to inject link into an article by slug
function addInternalLinkToArticle(slug, sectionKeyword) {
  const slugRegex = new RegExp(`slug:\\s*"${slug}"`);
  const match = slugRegex.exec(content);
  if (!match) {
    console.log(`Slug ${slug} not found`);
    return;
  }
  const startIndex = match.index;
  // find end of this article object (next article starts with '{\n    slug:' or '{\n  slug:')
  const nextArticleMatch = /\{\s*slug:\s*"/g;
  nextArticleMatch.lastIndex = startIndex + 50;
  const nextMatch = nextArticleMatch.exec(content);
  const endIndex = nextMatch ? nextMatch.index : content.length;

  const articleChunk = content.slice(startIndex, endIndex);

  if (articleChunk.includes(targetHref)) {
    console.log(`Article ${slug} already has link to youth games.`);
    return;
  }

  // Find a links: [ or "links": [ block
  const linksRegex = /(["']?links["']?\s*:\s*\[)/g;
  const linkMatch = linksRegex.exec(articleChunk);

  if (linkMatch) {
    const insertPos = startIndex + linkMatch.index + linkMatch[0].length;
    const linkEntry = `\n            {\n              label: "${targetLabel}",\n              href: "${targetHref}"\n            },`;
    content = content.slice(0, insertPos) + linkEntry + content.slice(insertPos);
    console.log(`Successfully injected link into existing links array of ${slug}`);
  } else {
    // If no links array, find the first paragraphs array and inject links block right after it
    const paraRegex = /(paragraphs\s*:\s*\[[\s\S]*?\])/;
    const paraMatch = paraRegex.exec(articleChunk);
    if (paraMatch) {
      const insertPos = startIndex + paraMatch.index + paraMatch[0].length;
      const linksBlock = `,\n          links: [\n            {\n              label: "${targetLabel}",\n              href: "${targetHref}"\n            }\n          ]`;
      content = content.slice(0, insertPos) + linksBlock + content.slice(insertPos);
      console.log(`Successfully created links array and injected link into ${slug}`);
    } else {
      console.log(`Could not find insertion spot in ${slug}`);
    }
  }
}

// Interlink key student & youth schemes
addInternalLinkToArticle('cm-punjab-honhaar-scholarship-program-2026');
addInternalLinkToArticle('cm-punjab-free-laptop-scheme-2026-online-apply');
addInternalLinkToArticle('pink-scooty-scheme-2026-registration-eligibility-documents-balloting');
addInternalLinkToArticle('cm-punjab-himmat-card-online-apply-2026');
addInternalLinkToArticle('prime-minister-youth-loan-scheme-2026');

fs.writeFileSync('src/data/content.ts', content, 'utf8');
console.log("Link builder finished successfully!");
