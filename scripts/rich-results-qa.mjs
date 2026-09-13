import { chromium } from 'playwright';
import { mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const slugs = ['8171', 'benazir-kafaalat', 'bisp-registration', 'other-schemes', 'taleemi-wazaif', 'news', 'payment-check', 'ehsaas-programs', 'nser-pmt-score'];
const browser = await chromium.launch({ headless: true });
const results = [];
await mkdir(resolve(root, '.vercel/rich-results'), { recursive: true });
try {
  for (const slug of slugs) {
    const url = `https://pakbenefits.com/${slug}/`;
    const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
    let status = 'unavailable';
    let resultText = '';
    let testUrl;
    try {
      await page.goto(`https://search.google.com/test/rich-results?url=${encodeURIComponent(url)}`, { waitUntil: 'domcontentloaded', timeout: 45000 });
      const consent = page.getByRole('button', { name: /reject all/i });
      if (await consent.isVisible().catch(() => false)) await consent.click();
      const start = page.getByRole('button', { name: /test url/i });
      if (await start.isVisible().catch(() => false)) await start.click();
      await page.waitForFunction(() => /valid items? detected|no items detected|invalid items? detected|unable to test|test failed|unusual traffic|not a robot|captcha|log in and try again/i.test(document.body.innerText), null, { timeout: 45000 }).catch(() => {});
      resultText = await page.locator('body').innerText();
      testUrl = page.url();
      if (/\binvalid items? detected/i.test(resultText)) status = 'invalid';
      else if (/\bvalid items? detected/i.test(resultText)) status = 'valid';
      else if (/no items detected/i.test(resultText)) status = 'no-items';
      else if (/unusual traffic|not a robot|captcha/i.test(resultText)) status = 'blocked';
      await page.screenshot({ path: resolve(root, `.vercel/rich-results/${slug}.png`), fullPage: true });
    } catch (error) { resultText = error.message; }
    results.push({ url, status, testUrl, resultText });
    console.log(JSON.stringify({ url, status, resultText: resultText.slice(0, 1000) }));
    await page.close();
    if (status === 'blocked' || status === 'unavailable') break;
  }
} finally {
  await browser.close();
  const report = { checkedAt: new Date().toISOString(), expectedPages: slugs.length, testedPages: results.length, results };
  await writeFile(resolve(root, 'docs/seo/rich-results-verification.json'), JSON.stringify(report, null, 2) + '\n');
  if (results.length !== slugs.length || results.some(result => result.status !== 'valid')) process.exitCode = 1;
}
