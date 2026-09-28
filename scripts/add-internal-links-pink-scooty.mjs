import fs from 'fs';
import path from 'path';

const contentFilePath = path.resolve('src/data/content.ts');
let content = fs.readFileSync(contentFilePath, 'utf8');

const targetSlug = "pink-scooty-scheme-2026-registration-eligibility-documents-balloting";
const newLink = {
  label: "Pink Scooty Scheme 2026: Registration & Balloting",
  href: `/${targetSlug}`
};

// Check if links already exist in related articles
if (content.includes(`href: "/${targetSlug}"`) || content.includes(`href: "/${targetSlug}/"`)) {
  console.log("Internal links already present in content.ts");
} else {
  // Add link inside electric-bike related articles or sections
  let modifiedCount = 0;

  // Let's add link to pave-scheme or laptop scheme or e-bike guide if found
  const replaceTargets = [
    {
      find: 'slug: "cm-punjab-free-laptop-scheme-2026-online-apply"',
      linkText: `\n        links: [\n          { label: "Pink Scooty Scheme 2026 Registration & Balloting", href: "/${targetSlug}" }\n        ],`
    },
    {
      find: 'slug: "pave-scheme-2026-eligibility-electric-bike-subsidy"',
      linkText: `\n        links: [\n          { label: "Pink Scooty Scheme 2026 Eligibility & Online Apply", href: "/${targetSlug}" }\n        ],`
    },
    {
      find: 'slug: "cm-punjab-honhaar-scholarship-program-2026"',
      linkText: `\n        links: [\n          { label: "Pink Scooty Scheme 2026 Details", href: "/${targetSlug}" }\n        ],`
    }
  ];

  for (const target of replaceTargets) {
    const pos = content.indexOf(target.find);
    if (pos !== -1) {
      // Find the end of first section in that article or sections array
      const sectionPos = content.indexOf('paragraphs: [', pos);
      if (sectionPos !== -1) {
        const insertAfterPara = content.indexOf(']', sectionPos) + 1;
        content = content.slice(0, insertAfterPara) + `,` + target.linkText + content.slice(insertAfterPara);
        modifiedCount++;
      }
    }
  }

  fs.writeFileSync(contentFilePath, content, 'utf8');
  console.log(`Successfully added internal links in ${modifiedCount} related articles!`);
}
