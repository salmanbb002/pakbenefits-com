import { chromium } from 'playwright-core';
import path from 'path';
import fs from 'fs';

async function generatePensionImage() {
  console.log('Rendering 1200x675 editorial banner for Federal Contributory Pension Scheme...');
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage({
    viewport: { width: 1200, height: 675 }
  });

  const b = {
    filename: 'federal-contributory-pension-scheme.jpg',
    theme: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 45%, #14532d 100%)',
    badgeColor: '#22c55e',
    badgeText: 'Ministry of Finance 2026',
    yearBadge: 'FGDC Pension Fund Scheme',
    title: 'Federal Contributory Pension Scheme',
    desc: 'The 2024 Defined-Contribution Retirement System for Federal Employees: 10% Employee + 12% Government (22% Total) into an Individually Invested Fund',
    stats: [
      { label: 'Employee Share', val: '10% of Pay' },
      { label: 'Government Share', val: '12% of Pay' },
      { label: 'Combined Total', val: '22% Monthly' },
      { label: 'Effective From', val: '1 July 2024' }
    ]
  };

  const html = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <style>
      * { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }
      body {
        width: 1200px;
        height: 675px;
        background: ${b.theme};
        color: #ffffff;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 56px 64px;
        position: relative;
        overflow: hidden;
      }
      .bg-circle1 {
        position: absolute;
        width: 650px;
        height: 650px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(34, 197, 94, 0.22) 0%, rgba(0,0,0,0) 70%);
        top: -200px;
        right: -150px;
        pointer-events: none;
      }
      .bg-circle2 {
        position: absolute;
        width: 500px;
        height: 500px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(14, 165, 233, 0.18) 0%, rgba(0,0,0,0) 70%);
        bottom: -150px;
        left: -100px;
        pointer-events: none;
      }
      .header-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 10;
      }
      .brand {
        display: flex;
        align-items: center;
        gap: 12px;
      }
      .brand-icon {
        width: 42px;
        height: 42px;
        border-radius: 10px;
        background: #22c55e;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 900;
        font-size: 24px;
        color: #052e16;
      }
      .brand-name {
        font-size: 20px;
        font-weight: 700;
        letter-spacing: -0.5px;
        color: #f1f5f9;
      }
      .badges {
        display: flex;
        gap: 12px;
      }
      .badge {
        padding: 8px 16px;
        border-radius: 9999px;
        font-size: 13px;
        font-weight: 700;
        letter-spacing: 0.5px;
        text-transform: uppercase;
      }
      .badge-category {
        background: rgba(34, 197, 94, 0.2);
        color: #4ade80;
        border: 1px solid rgba(34, 197, 94, 0.4);
      }
      .badge-year {
        background: rgba(255, 255, 255, 0.1);
        color: #e2e8f0;
        border: 1px solid rgba(255, 255, 255, 0.15);
      }
      .content {
        z-index: 10;
        max-width: 980px;
        margin-top: 10px;
      }
      .title {
        font-size: 52px;
        line-height: 1.15;
        font-weight: 900;
        letter-spacing: -1.5px;
        color: #ffffff;
        margin-bottom: 18px;
        text-shadow: 0 4px 12px rgba(0,0,0,0.4);
      }
      .desc {
        font-size: 21px;
        line-height: 1.45;
        color: #cbd5e1;
        font-weight: 400;
      }
      .stats-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 18px;
        z-index: 10;
      }
      .stat-card {
        background: rgba(15, 23, 42, 0.6);
        backdrop-filter: blur(12px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 14px;
        padding: 16px 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .stat-val {
        font-size: 22px;
        font-weight: 800;
        color: #4ade80;
        margin-bottom: 4px;
      }
      .stat-label {
        font-size: 13px;
        font-weight: 500;
        color: #94a3b8;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
    </style>
  </head>
  <body>
    <div class="bg-circle1"></div>
    <div class="bg-circle2"></div>

    <div class="header-row">
      <div class="brand">
        <div class="brand-icon">&#10003;</div>
        <div class="brand-name">PakBenefits.com</div>
      </div>
      <div class="badges">
        <div class="badge badge-category">${b.badgeText}</div>
        <div class="badge badge-year">${b.yearBadge}</div>
      </div>
    </div>

    <div class="content">
      <h1 class="title">${b.title}</h1>
      <p class="desc">${b.desc}</p>
    </div>

    <div class="stats-grid">
      ${b.stats.map(s => `
        <div class="stat-card">
          <div class="stat-val">${s.val}</div>
          <div class="stat-label">${s.label}</div>
        </div>
      `).join('')}
    </div>
  </body>
  </html>
  `;

  await page.setContent(html);
  await page.waitForTimeout(500);

  const outPathPublic = path.resolve('public/images/federal-contributory-pension-scheme.jpg');
  const outPathDraft = path.resolve('content-drafts/federal-contributory-pension-scheme-2026-09-30/featured-image.jpg');

  await page.screenshot({ path: outPathPublic, quality: 90, type: 'jpeg' });
  fs.copyFileSync(outPathPublic, outPathDraft);

  console.log(`Saved image to ${outPathPublic} and ${outPathDraft}`);
  await browser.close();
}

generatePensionImage().catch(err => {
  console.error(err);
  process.exit(1);
});
