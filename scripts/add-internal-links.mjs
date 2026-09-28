import fs from 'fs';

const filePath = 'D:/Work ~ SEO-Projects/pakbenefits-com/src/data/content.ts';
let content = fs.readFileSync(filePath, 'utf8');

const target = `href: "/cm-punjab-kisan-card-online-apply-2026/"
          }`;

const replacement = `href: "/cm-punjab-kisan-card-online-apply-2026/"
          },
          {
            label: "Apni Zameen Apna Ghar Balloting Result 2026 guide",
            href: "/apni-zameen-apna-ghar-balloting-result-2026/"
          },
          {
            label: "Pink Scooty Scheme 2026 registration & balloting guide",
            href: "/pink-scooty-scheme-2026-registration-eligibility-documents-balloting/"
          }`;

if (content.includes(target)) {
  content = content.replace(target, replacement);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Successfully added internal links (LF)!');
} else {
  const targetCRLF = target.replace(/\n/g, '\r\n');
  const replacementCRLF = replacement.replace(/\n/g, '\r\n');
  if (content.includes(targetCRLF)) {
    content = content.replace(targetCRLF, replacementCRLF);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Successfully added internal links (CRLF)!');
  } else {
    console.log('Target string not found');
  }
}
