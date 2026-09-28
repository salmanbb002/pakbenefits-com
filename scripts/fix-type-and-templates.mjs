import fs from 'fs';
import path from 'path';

const contentPath = path.resolve('src/data/content.ts');
let contentStr = fs.readFileSync(contentPath, 'utf8');

contentStr = contentStr.replace(
  '    bullets?: string[];\n    table?: {',
  '    bullets?: string[];\n    links?: { label: string; href: string }[];\n    table?: {'
);

fs.writeFileSync(contentPath, contentStr, 'utf8');
console.log('Successfully updated ContentSection type definition in src/data/content.ts');

const tmplPath = path.resolve('src/components/templates.tsx');
let tmplStr = fs.readFileSync(tmplPath, 'utf8');

if (!tmplStr.includes('subsection.links')) {
  tmplStr = tmplStr.replace(
    '{subsection.bullets && <ul>{subsection.bullets.map((bullet) => <li key={bullet}><CheckCircle2 size={19} /><span>{bullet}</span></li>)}</ul>}',
    '{subsection.bullets && <ul>{subsection.bullets.map((bullet) => <li key={bullet}><CheckCircle2 size={19} /><span>{bullet}</span></li>)}</ul>}\n        {!!subsection.links?.length && <div className="article-context-links" aria-label="Related guides">{subsection.links.map((link) => <Link href={link.href} key={link.href}>{link.label}<ArrowUpRight size={15} /></Link>)}</div>}'
  );
  fs.writeFileSync(tmplPath, tmplStr, 'utf8');
  console.log('Successfully updated ContentSections in templates.tsx to render subsection links');
}
