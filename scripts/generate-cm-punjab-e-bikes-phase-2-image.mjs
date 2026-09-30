import { chromium } from 'playwright-core';
import path from 'path';
import fs from 'fs';

async function generatePhase2Image() {
  console.log('Rendering 1200x675 editorial banner for CM Punjab E-Bikes Scheme Phase 2...');
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage({ viewport: { width: 1200, height: 675 } });

  const b = {
    filename: 'cm-punjab-e-bikes-scheme-phase-2.jpg',
    theme: 'linear-gradient(135deg, #065f46 0%, #0d9488 40%, #022c22 100%)',
    badgeColor: '#34d399',
    badgeText: 'Chief Minister Youth Initiative',
    yearBadge: 'Phase 2: Apply Now',
    title: 'CM Punjab E-Bikes Scheme Phase 2 2026',
    desc: 'What Changed, Eligibility & How to Apply: PKR 199,000 Scooty, Rs 90,000 Subsidy, 0% Interest & ~Rs 3,000/month',
    stats: [
      { label: 'E-Bike Price', val: 'PKR 199,000' },
      { label: 'Govt Subsidy', val: 'Rs 90,000 Grant' },
      { label: 'Monthly Installment', val: '~Rs 3,000 (0%)' },
      { label: 'Last Date to Apply', val: 'October 4, 2026' }
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
        background: radial-gradient(circle, rgba(52, 211, 153, 0.28) 0%, rgba(0,0,0,0) 70%);
        top: -200px;
        right: -150px;
        pointer-events: none;
      }
      .bg-circle2 {
        position: absolute;
        width: 500px;
        height: 500px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(13, 148, 136, 0.28) 0%, rgba(0,0,0,0) 70%);
        bottom: -150px;
        left: -100px;
        pointer-events: none;
      }
      .header-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        z-index: 2;
      }
      .brand-badge {
        display: inline-flex;
        align-items: center;
        gap: 12px;
        background: rgba(255, 255, 255, 0.15);
        backdrop-filter: blur(12px);
        padding: 10px 20px;
        border-radius: 9999px;
        border: 1px solid rgba(255, 255, 255, 0.25);
        font-weight: 700;
        font-size: 16px;
        letter-spacing: 0.5px;
      }
      .dot {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: ${b.badgeColor};
        box-shadow: 0 0 12px ${b.badgeColor};
      }
      .year-badge {
        background: ${b.badgeColor};
        color: #03301f;
        font-weight: 800;
        font-size: 15px;
        padding: 8px 18px;
        border-radius: 12px;
        letter-spacing: 0.5px;
      }
      .main-content {
        z-index: 2;
        max-width: 1020px;
      }
      .main-title {
        font-size: 50px;
        font-weight: 800;
        line-height: 1.15;
        letter-spacing: -1px;
        margin-bottom: 20px;
        text-shadow: 0 4px 20px rgba(0,0,0,0.5);
      }
      .main-desc {
        font-size: 21px;
        line-height: 1.45;
        color: #d1fae5;
        font-weight: 400;
      }
      .footer-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
        z-index: 2;
        background: rgba(2, 44, 34, 0.7);
        backdrop-filter: blur(16px);
        padding: 22px 28px;
        border-radius: 20px;
        border: 1px solid rgba(255, 255, 255, 0.15);
      }
      .stat-card {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }
      .stat-label {
        font-size: 13px;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: #6ee7b7;
        font-weight: 600;
      }
      .stat-val {
        font-size: 20px;
        font-weight: 800;
        color: #ffffff;
      }
    </style>
  </head>
  <body>
    <div class="bg-circle1"></div>
    <div class="bg-circle2"></div>

    <div class="header-row">
      <div class="brand-badge">
        <span class="dot"></span>
        <span>${b.badgeText}</span>
      </div>
      <div class="year-badge">${b.yearBadge}</div>
    </div>

    <div class="main-content">
      <h1 class="main-title">${b.title}</h1>
      <p class="main-desc">${b.desc}</p>
    </div>

    <div class="footer-grid">
      ${b.stats.map(s => `
        <div class="stat-card">
          <span class="stat-label">${s.label}</span>
          <span class="stat-val">${s.val}</span>
        </div>
      `).join('')}
    </div>
  </body>
  </html>
  `;

  await page.setContent(html);
  const publicPath = path.join(process.cwd(), 'public', 'images', b.filename);
  await page.screenshot({ path: publicPath, type: 'jpeg', quality: 92 });
  console.log(`Saved public image: ${publicPath}`);

  const draftDir = path.join(process.cwd(), 'content-drafts', 'cm-punjab-e-bikes-scheme-phase-2-2026-09-30');
  fs.mkdirSync(draftDir, { recursive: true });
  const draftPath = path.join(draftDir, 'featured-image.jpg');
  fs.copyFileSync(publicPath, draftPath);
  console.log(`Copied image to draft: ${draftPath}`);

  await browser.close();
}

generatePhase2Image().catch((error) => { console.error(error); process.exit(1); });
