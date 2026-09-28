import fs from 'fs';
import path from 'path';

const contentFilePath = path.resolve('src/data/content.ts');
let content = fs.readFileSync(contentFilePath, 'utf8');

const targetSlug = "apni-zameen-apna-ghar-balloting-result-2026";

if (content.includes(`href: "/${targetSlug}"`)) {
  console.log("Internal links already present in content.ts");
} else {
  let modifiedCount = 0;

  const replaceTargets = [
    {
      find: 'slug: "cm-punjab-apni-chhat-apna-ghar-loan-scheme-2026"',
      linkText: `\n        links: [\n          { label: "Apni Zameen Apna Ghar Balloting Result 2026 (Free Plot Check)", href: "/${targetSlug}" }\n        ],`
    },
    {
      find: 'slug: "pser-online-registration-2026"',
      linkText: `\n        links: [\n          { label: "Apni Zameen Apna Ghar Balloting Result 2026", href: "/${targetSlug}" }\n        ],`
    }
  ];

  for (const target of replaceTargets) {
    const pos = content.indexOf(target.find);
    if (pos !== -1) {
      const sectionPos = content.indexOf('paragraphs: [', pos);
      if (sectionPos !== -1) {
        const insertAfterPara = content.indexOf(']', sectionPos) + 1;
        content = content.slice(0, insertAfterPara) + `,` + target.linkText + content.slice(insertAfterPara);
        modifiedCount++;
      }
    }
  }

  // Also add internal link from apni-zameen-apna-ghar article section 4 to cm-punjab-apni-chhat-apna-ghar-loan-scheme-2026
  const azagPos = content.indexOf(`slug: "${targetSlug}"`);
  if (azagPos !== -1) {
    const section4Pos = content.indexOf('title: "Can AZAG Plot Winners Apply for the Apni Chhat Apna Ghar (ACAG) Construction Loan?"', azagPos);
    if (section4Pos !== -1) {
      const insertAfterPara = content.indexOf(']', section4Pos) + 1;
      const acagLink = `,\n        links: [\n          { label: "Apni Chhat Apna Ghar Loan Scheme 2026 Complete Guide", href: "/cm-punjab-apni-chhat-apna-ghar-loan-scheme-2026" }\n        ]`;
      content = content.slice(0, insertAfterPara) + acagLink + content.slice(insertAfterPara);
      modifiedCount++;
    }
  }

  fs.writeFileSync(contentFilePath, content, 'utf8');
  console.log(`Successfully added internal links in ${modifiedCount} locations!`);
}
