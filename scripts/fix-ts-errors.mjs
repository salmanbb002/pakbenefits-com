import fs from 'fs';
import path from 'path';

// 1. Update src/data/content.ts
const contentPath = path.resolve('src/data/content.ts');
let contentStr = fs.readFileSync(contentPath, 'utf8');

// Update ContentSection type
const oldType = `export type ContentSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
  subsections?: {
    title: string;
    paragraphs: string[];
    bullets?: string[];
    table?: {
      caption?: string;
      headers: string[];
      rows: string[][];
    };
  }[];
  table?: {
    caption?: string;
    headers: string[];
    rows: string[][];
  };
  links?: { label: string; href: string }[];
};`;

const newType = `export type ContentSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
  subsections?: {
    title: string;
    paragraphs: string[];
    bullets?: string[];
    links?: { label: string; href: string }[];
    table?: {
      caption?: string;
      headers: string[];
      rows: string[][];
    };
  }[];
  table?: {
    caption?: string;
    headers: string[];
    rows: string[][];
  };
  links?: { label: string; href: string }[];
};`;

contentStr = contentStr.replace(oldType, newType);
fs.writeFileSync(contentPath, contentStr, 'utf8');
console.log('Fixed ContentSection type definition');

// 2. Update src/components/templates.tsx
const tmplPath = path.resolve('src/components/templates.tsx');
let tmplStr = fs.readFileSync(tmplPath, 'utf8');

tmplStr = tmplStr.replace(
  '{!!subsection.links?.length && <div className="article-context-links" aria-label="Related guides">{subsection.links.map((link) => <Link href={link.href} key={link.href}>{link.label}<ArrowUpRight size={15} /></Link>)}</div>}',
  '{!!subsection.links?.length && <div className="article-context-links" aria-label="Related guides">{subsection.links.map((link: { label: string; href: string }) => <Link href={link.href} key={link.href}>{link.label}<ArrowUpRight size={15} /></Link>)}</div>}'
);

fs.writeFileSync(tmplPath, tmplStr, 'utf8');
console.log('Fixed templates.tsx link parameter type');
