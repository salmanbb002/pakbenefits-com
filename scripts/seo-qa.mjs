import { createServer } from 'node:http';
import { readFile, stat, mkdir, writeFile } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
import { chromium } from 'playwright';
import ts from 'typescript';

const root = resolve(import.meta.dirname, '..');
const live = process.argv.includes('--live');
const output = resolve(root, 'out');
const config = JSON.parse(await readFile(resolve(root, 'vercel.json'), 'utf8'));
const compiled = ts.transpileModule(await readFile(resolve(root, 'src/data/content.ts'), 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
const contentModule = { exports: {} };
new Function('exports', 'module', compiled)(contentModule.exports, contentModule);
const { articles, categories, informationPages } = contentModule.exports;
const sourceBySlug = new Map([...articles, ...categories, ...informationPages].map(item => [item.slug, item]));
const retained = '/bisp-balance-check-by-cnic-2026/';
const retired = ['/bisp-payment-check-guide/', '/bisp-8171-payment-balance-check-guide/'];
const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.xml': 'application/xml', '.jpg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp', '.woff2': 'font/woff2' };
const server = createServer(async (req, res) => {
  try {
    const url = new URL(req.url, 'http://localhost');
    const rule = config.redirects.find(rule => rule.statusCode === 301 && url.pathname === rule.source);
    if (rule) { res.writeHead(301, { Location: rule.destination }); res.end(); return; }
    let file = resolve(output, '.' + decodeURIComponent(url.pathname));
    if (file !== output && !file.startsWith(output + sep)) { res.writeHead(403); res.end(); return; }
    if ((await stat(file)).isDirectory()) file = resolve(file, 'index.html');
    res.writeHead(200, { 'Content-Type': types[extname(file)] || 'application/octet-stream' });
    res.end(await readFile(file));
  } catch { res.writeHead(404, { 'Content-Type': 'text/html' }); res.end(await readFile(resolve(output, '404.html'))); }
});
if (!live) await new Promise((done, reject) => { server.once('error', reject); server.listen(0, '127.0.0.1', done); });
const base = live ? 'https://pakbenefits.com' : `http://127.0.0.1:${server.address().port}`;
const failures = [];
const pending = [];
const check = (condition, message) => { if (!condition) failures.push(message); };
const rows = [];
let browser;
try {
  const sitemap = await (await fetch(base + '/sitemap.xml')).text();
  const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => new URL(match[1]).pathname);
  check(new Set(urls).size === urls.length, 'Duplicate sitemap URL');
  check(urls.length === sourceBySlug.size + 1, 'Sitemap/source route count mismatch');
  const mime404 = await fetch(base + '/nonexistent-seo-qa-page/');
  check(mime404.status === 404, 'Nonexistent URL did not return 404');
  for (const path of retired) {
    check(!urls.includes(path), `${path}: retired URL in sitemap`);
    for (const variant of [path, path.slice(0, -1)]) {
      check(config.redirects.some(rule => rule.source === variant && rule.destination === retained && rule.statusCode === 301), `${variant}: missing explicit Vercel 301`);
      const response = await fetch(base + variant, { redirect: 'manual' });
      const destination = new URL(response.headers.get('location') || '/', base).pathname;
      check(response.status === 301 && destination === retained, `${variant}: ${live ? 'live' : 'local modeled'} redirect failed (${response.status})`);
    }
    try { await stat(resolve(output, '.' + path, 'index.html')); failures.push(`${path}: retired HTML remains exported`); } catch { /* Expected absent export. */ }
  }
  browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
  const page = await context.newPage();
  const browserErrors = [];
  page.on('pageerror', error => browserErrors.push(error.message));
  for (const path of urls) {
    const response = await page.goto(base + path, { waitUntil: 'load' });
    check(response.status() === 200, `${path}: HTTP ${response.status()}`);
    await page.locator('img').evaluateAll(images => Promise.all(images.map(image => { image.loading = 'eager'; return image.decode().catch(() => null); })));
    const result = await page.evaluate(() => {
      const text = node => { const clone = node.cloneNode(true); clone.querySelectorAll('script,style,svg,[aria-hidden="true"]').forEach(n => n.remove()); return clone.textContent.trim().replace(/\s+/g, ' '); };
      const main = document.querySelector('main');
      const editorial = main.querySelector('[data-editorial-content]');
      const elements = editorial ? [...editorial.querySelectorAll('h2,h3,p,li,td,th,summary')].filter(n => !n.closest('.official-links')) : [];
      const prose = elements.map(text).join(' ');
      return {
        title: document.title,
        description: document.querySelector('meta[name="description"]')?.content,
        canonical: document.querySelector('link[rel="canonical"]')?.href,
        h1: main.querySelectorAll('h1').length,
        editorialWords: prose ? prose.split(/\s+/).length : null,
        editorialText: prose,
        mainText: text(main),
        faqVisible: [...main.querySelectorAll('.faq-list details')].map(n => ({ question: text(n.querySelector('summary')), answer: text(n.querySelector('p')) })),
        schemas: [...document.querySelectorAll('script[type="application/ld+json"]')].map(n => JSON.parse(n.textContent)),
        links: [...document.querySelectorAll('a[href]')].map(a => a.getAttribute('href')),
        editorialLinks: [...main.querySelectorAll('[data-editorial-content] a[href]')].map(a => ({ href: a.getAttribute('href'), label: text(a) })),
        images: [...document.querySelectorAll('img')].map(n => ({ alt: n.alt, loaded: n.complete && n.naturalWidth > 0, src: n.getAttribute('src') })),
        duplicateIds: [...document.querySelectorAll('[id]')].map(n => n.id).filter((id, i, ids) => ids.indexOf(id) !== i),
      };
    });
    check(result.h1 === 1, `${path}: expected one H1`);
    check(result.description?.length > 0, `${path}: missing description`);
    check(result.canonical === 'https://pakbenefits.com' + path, `${path}: wrong canonical ${result.canonical}`);
    check(result.duplicateIds.length === 0, `${path}: duplicate IDs ${result.duplicateIds}`);
    check(result.images.every(image => image.alt && image.loaded), `${path}: missing image or alt`);
    const faqSchemas = result.schemas.filter(s => s['@type'] === 'FAQPage');
    const source = sourceBySlug.get(path.slice(1, -1));
    if (source?.faqs?.length || path === '/') {
      check(faqSchemas.length === 1, `${path}: expected exactly one FAQPage`);
      const schemaPairs = faqSchemas.flatMap(s => s.mainEntity.map(q => ({ question: q.name, answer: q.acceptedAnswer.text })));
      check(JSON.stringify(schemaPairs) === JSON.stringify(result.faqVisible), `${path}: visible FAQ/schema text mismatch`);
      if (source?.faqs) check(JSON.stringify(source.faqs) === JSON.stringify(result.faqVisible), `${path}: FAQ source/render mismatch`);
    }
    if (categories.some(c => c.slug === source?.slug)) {
      check(source.faqs.length >= 4 && source.faqs.length <= 6, `${path}: category needs 4–6 FAQs`);
      check(result.schemas.some(s => s['@type'] === 'CollectionPage'), `${path}: missing CollectionPage`);
    }
    const articleSchema = result.schemas.find(s => s['@type'] === 'Article');
    if (articles.some(a => a.slug === source?.slug)) {
      check(!!articleSchema, `${path}: missing Article schema`);
      check(articleSchema?.author?.name === source.author.name, `${path}: author mismatch`);
      check(articleSchema?.datePublished === new Date(`${source.publishedDate || source.date} UTC`).toISOString(), `${path}: publication date changed`);
      check(articleSchema?.dateModified === new Date(`${source.date} UTC`).toISOString(), `${path}: modified date mismatch`);
    }
    for (const link of result.links) {
      if (!link.startsWith('/') || link.startsWith('//')) continue;
      const target = new URL(link, base).pathname;
      check(!retired.includes(target), `${path}: link to retired page ${target}`);
      if (!extname(target)) check(urls.includes(target), `${path}: broken internal route ${target}`);
    }
    rows.push({ path, ...result });
  }
  for (const field of ['title', 'description']) {
    const seen = new Map();
    for (const row of rows) { check(!seen.has(row[field]), `${row.path}: duplicate ${field} with ${seen.get(row[field])}`); seen.set(row[field], row.path); }
  }
  const minimum = { '8171': 1500, 'benazir-kafaalat': 800, 'taleemi-wazaif': 800, 'other-schemes': 1000, 'bisp-registration': 600, 'nser-pmt-score': 600, 'punjab-schemes': 1000, 'cnic-verification-guide': 800, 'what-is-bisp': 1000, 'nashonuma-program': 800, 'zakat-and-bisp-eligibility': 600, 'pm-youth-business-loan-guide': 800, 'electric-bike-scheme-guide': 800, 'farmer-support-card-guide': 800, 'avoid-bisp-fraud': 800, 'documents-for-bisp-registration': 900, 'ehsaas-interest-free-loan-saving-wallets-guide': 1200, 'how-to-register-bisp-online-guide': 1500, 'nser-pmt-score-check-guide': 2000, 'bisp-balance-check-by-cnic-2026': 1200 };
  for (const [slug, min] of Object.entries(minimum)) {
    const row = rows.find(r => r.path === `/${slug}/`);
    check(row?.editorialWords >= min, `${slug}: ${row?.editorialWords} words, needs ${min}`);
    if (['bisp-registration', 'nser-pmt-score'].includes(slug)) check(row.editorialWords <= 800, `${slug}: overview exceeds 800 words`);
  }
  for (const slug of ['benazir-kafaalat', 'payment-check', 'ehsaas-programs', 'nser-pmt-score']) {
    const row = rows.find(r => r.path === `/${slug}/`);
    check(row.description.length >= 150 && row.description.length <= 160, `${slug}: description has ${row.description.length} characters`);
  }
  const newSlugs = ['punjab-schemes', 'cnic-verification-guide', 'what-is-bisp', 'nashonuma-program', 'zakat-and-bisp-eligibility'];
  for (const slug of newSlugs) {
    check(urls.includes(`/${slug}/`), `${slug}: missing from sitemap`);
    check(rows.some(row => !newSlugs.includes(row.path.slice(1, -1)) && row.editorialLinks.some(link => link.href === `/${slug}/`)), `${slug}: no editorial link from an existing page`);
  }
  check(rows.filter(row => row.path !== '/ehsaas-tracking-check-payment-status/' && row.editorialLinks.some(link => link.href === '/ehsaas-tracking-check-payment-status/' && link.label === 'ehsaas tracking')).length >= 3, 'Tracking guide needs exact-anchor inbound links');
  check(!rows.find(r => r.path === '/bisp-registration/').editorialText.toLowerCase().includes('ehsaas tracking'), 'Registration hub targets tracking');
  check(!rows.find(r => r.path === '/nser-pmt-score/').editorialText.toLowerCase().includes('nser survey'), 'NSER hub retains survey targeting');
  const primaries = [...articles, ...categories].map(a => a.focusKeyword).filter(Boolean);
  check(new Set(primaries).size === primaries.length, 'Duplicate primary keyword assignments');
  const contact = rows.find(r => r.path === '/contact-us/');
  check(contact.links.includes('mailto:salmanb0022@gmail.com') && contact.mainText.includes('salmanb0022@gmail.com'), 'Owner-supplied contact email is missing or incorrect');
  if (!contact.links.some(link => link.startsWith('mailto:')) || /temporary public demo|does not operate a live support inbox/.test(contact.mainText)) pending.push('Contact page requires the owner’s monitored editorial email; no address has been invented.');
  check(browserErrors.length === 0, `Browser errors: ${browserErrors.join('; ')}`);
  const screenshots = live ? '.vercel/seo-live-screenshots' : 'docs/seo/screenshots';
  await mkdir(resolve(root, screenshots), { recursive: true });
  for (const [name, path, width] of [['punjab-desktop', '/punjab-schemes/', 1440], ['taleemi-mobile', '/taleemi-wazaif/', 390], ['cnic-mobile', '/cnic-verification-guide/', 390]]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto(base + path);
    check(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), `${path} ${width}px: horizontal overflow`);
    await page.locator('img').evaluateAll(images => Promise.all(images.map(image => { image.loading = 'eager'; return image.decode().catch(() => null); })));
    await page.screenshot({ path: resolve(root, `${screenshots}/${name}.png`), fullPage: true });
    await page.screenshot({ path: resolve(root, `${screenshots}/${name}-viewport.png`) });
    const firstFaq = page.locator('.faq-list details').first();
    await firstFaq.locator('summary').click();
    check(await firstFaq.getAttribute('open') !== null, `${path}: FAQ does not open`);
  }
  const report = {
    checkedAt: new Date().toISOString(), environment: live ? 'Live production: https://pakbenefits.com; actual HTTP redirects verified' : 'Local production export; Vercel redirect rules modeled locally, not a live deployment check',
    routeCount: urls.length, failures, pending,
    pages: rows.map(({ path, title, description, editorialWords, schemas }) => ({ path, title, descriptionLength: description.length, editorialWords, schemaTypes: schemas.map(s => s['@type']) })),
  };
  const reportFile = live ? 'docs/seo/live-verification.json' : 'docs/seo/verification.json';
  await writeFile(resolve(root, reportFile), JSON.stringify(report, null, 2) + '\n');
  console.log(JSON.stringify({ routes: urls.length, failures, pending, report: reportFile }, null, 2));
  if (failures.length || pending.length) process.exitCode = 1;
} finally {
  await browser?.close();
  if (server.listening) await new Promise(done => server.close(done));
}
