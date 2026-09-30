import { chromium } from 'playwright-core';
import path from 'path';
import fs from 'fs';

async function generateRehmatCardImage() {
  console.log('Rendering 1200x675 editorial banner for CM Punjab Rehmat Card 2026...');
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage({
    viewport: { width: 1200, height: 675 }
  });

  const b = {
    filename: 'cm-punjab-rehmat-card-2026.jpg',
    theme: 'linear-gradient(135deg, #064e3b 0%, #065f46 40%, #0f172a 100%)',
    badgeColor: '#10b981',
    badgeText: 'Punjab Zakat & Ushr Department 2026',
    yearBadge: 'Rs 100,000 Unconditional Grant',
    title: 'CM Punjab Rehmat Card 2026',
    desc: 'Financial Assistance for Deserving Widows & Double-Parent Orphans: PSER Verification, JazzCash Digital Wallet & Status Tracking',
    stats: [
      { label: 'One-Time Grant', val: 'Rs 100,000' },
      { label: 'Total Budget Pool', val: 'Rs 5 Billion' },
      { label: 'Target Families', val: '50,000+ Households' },
      { label: 'Helpline Assistance', val: '1077 Toll-Free' }
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
        background: radial-gradient(circle, rgba(16, 185, 129, 0.25) 0%, rgba(0,0,0,0) 70%);
        top: -200px;
        right: -150px;
        pointer-events: none;
      }
      .bg-circle2 {
        position: absolute;
        width: 500px;
        height: 500px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(5, 150, 105, 0.2) 0%, rgba(0,0,0,0) 70%);
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
        background: #10b981;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 900;
        font-size: 24px;
        color: #064e3b;
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
        background: rgba(16, 185, 129, 0.2);
        color: #34d399;
        border: 1px solid rgba(16, 185, 129, 0.4);
      }
      .badge-year {
        background: rgba(255, 255, 255, 0.1);
        color: #e2e8f0;
        border: 1px solid rgba(255, 255, 255, 0.15);
      }
      .content {
        z-index: 10;
        max-width: 950px;
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
        color: #34d399;
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
        <div class="brand-icon">✓</div>
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

  const outPathPublic = path.resolve('public/images/cm-punjab-rehmat-card-2026.jpg');
  const outPathDraft = path.resolve('content-drafts/cm-punjab-rehmat-card-2026-2026-09-29/featured-image.jpg');

  await page.screenshot({ path: outPathPublic, quality: 90, type: 'jpeg' });
  fs.copyFileSync(outPathPublic, outPathDraft);

  console.log(`Saved image to ${outPathPublic} and ${outPathDraft}`);
  await browser.close();
}

generateRehmatCardImage().catch(err => {
  console.error(err);
  process.exit(1);
});
