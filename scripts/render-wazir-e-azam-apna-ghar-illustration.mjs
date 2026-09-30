import { chromium } from 'playwright-core';
import path from 'path';
import fs from 'fs';

// Original, scheme-specific editorial illustration (no stock photos).
// Directly depicts the Wazir-e-Azam Apna Ghar Program: a first home + loan terms.

const SVG = `
  <svg viewBox="0 0 560 440" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
    <defs>
      <linearGradient id="ghRoof" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#34d399"/><stop offset="1" stop-color="#059669"/>
      </linearGradient>
      <linearGradient id="ghWall" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#e2e8f0"/><stop offset="1" stop-color="#94a3b8"/>
      </linearGradient>
      <linearGradient id="ghDoor" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#0ea5e9"/><stop offset="1" stop-color="#0369a1"/>
      </linearGradient>
    </defs>
    <!-- ground -->
    <rect x="40" y="360" width="480" height="16" rx="8" fill="#134e4a"/>
    <!-- house body -->
    <rect x="150" y="170" width="260" height="190" rx="10" fill="url(#ghWall)" stroke="#0f172a" stroke-opacity="0.2" stroke-width="2"/>
    <!-- roof -->
    <path d="M128 172 L280 70 L432 172 Z" fill="url(#ghRoof)"/>
    <path d="M128 172 L280 70 L432 172" stroke="#052e16" stroke-opacity="0.3" stroke-width="2"/>
    <!-- chimney -->
    <rect x="350" y="92" width="26" height="44" rx="4" fill="#475569"/>
    <!-- door -->
    <rect x="252" y="250" width="60" height="110" rx="8" fill="url(#ghDoor)"/>
    <circle cx="302" cy="308" r="4" fill="#fbbf24"/>
    <!-- windows -->
    <rect x="176" y="206" width="48" height="44" rx="6" fill="#0f172a" opacity="0.85"/>
    <line x1="200" y1="206" x2="200" y2="250" stroke="#e2e8f0" stroke-width="2"/>
    <line x1="176" y1="228" x2="224" y2="228" stroke="#e2e8f0" stroke-width="2"/>
    <rect x="336" y="206" width="48" height="44" rx="6" fill="#0f172a" opacity="0.85"/>
    <line x1="360" y1="206" x2="360" y2="250" stroke="#e2e8f0" stroke-width="2"/>
    <line x1="336" y1="228" x2="384" y2="228" stroke="#e2e8f0" stroke-width="2"/>
    <!-- price coin -->
    <circle cx="100" cy="230" r="46" fill="#fbbf24" stroke="#fef3c7" stroke-width="5"/>
    <text x="100" y="225" text-anchor="middle" font-family="Segoe UI, Arial" font-size="19" font-weight="900" fill="#78350f">Rs 10M</text>
    <text x="100" y="248" text-anchor="middle" font-family="Segoe UI, Arial" font-size="13" font-weight="800" fill="#78350f">Home Loan</text>
    <!-- markup badge -->
    <rect x="436" y="150" width="96" height="44" rx="12" fill="#22c55e"/>
    <text x="484" y="178" text-anchor="middle" font-family="Segoe UI, Arial" font-size="20" font-weight="900" fill="#052e16">5%</text>
    <!-- tenure badge -->
    <rect x="436" y="206" width="96" height="44" rx="12" fill="#0f172a" stroke="#34d399" stroke-width="2"/>
    <text x="484" y="234" text-anchor="middle" font-family="Segoe UI, Arial" font-size="16" font-weight="800" fill="#6ee7b7">20 Years</text>
    <!-- key -->
    <circle cx="200" cy="330" r="20" stroke="#fbbf24" stroke-width="7" fill="none"/>
    <line x1="214" y1="344" x2="250" y2="380" stroke="#fbbf24" stroke-width="7" stroke-linecap="round"/>
    <line x1="236" y1="366" x2="252" y2="382" stroke="#fbbf24" stroke-width="5" stroke-linecap="round"/>
    <text x="330" y="420" font-family="Segoe UI, Arial" font-size="16" font-weight="800" fill="#94a3b8">apnaghar.gov.pk</text>
  </svg>
`;

const img = {
  filename: 'wazir-e-azam-apna-ghar-program.jpg',
  theme: 'linear-gradient(135deg, #0c2b57 0%, #0e6e4f 55%, #0a3d2e 100%)',
  accent: '#34d399',
  accentSoft: '#6ee7b7',
  art: SVG,
  badgeGov: 'Wazir-e-Azam Apna Ghar Program',
  yearBadge: '2026 Guide',
  categoryTag: 'Federal Housing Finance',
  title: 'Wazir-e-Azam Apna Ghar Program',
  highlight: 'Loan, Eligibility & Apply',
  desc: 'First-time buyers: Rs 10 million federal home loans at a 5% fixed markup for 10 years, repayable over 20 years via partner banks.',
  stats: [
    { label: 'Max Loan', val: 'Rs 10 Million' },
    { label: 'Markup', val: '5% for 10 yrs' },
    { label: 'Tenure', val: 'Up to 20 Years' },
    { label: 'Financing', val: '90% Bank' }
  ]
};

function buildHtml() {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <style>
      * { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }
      body {
        width: 1200px;
        height: 675px;
        position: relative;
        overflow: hidden;
        background: ${img.theme};
        color: #ffffff;
      }
      .grid-decor {
        position: absolute;
        inset: 0;
        background-image: linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
        background-size: 44px 44px;
        mask-image: radial-gradient(circle at 30% 40%, rgba(0,0,0,0.9), transparent 75%);
      }
      .glow {
        position: absolute;
        width: 620px;
        height: 620px;
        border-radius: 50%;
        background: radial-gradient(circle, ${img.accent}33 0%, transparent 70%);
        top: -180px;
        right: -160px;
        pointer-events: none;
      }
      .content {
        position: relative;
        z-index: 10;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 40px 50px;
      }
      .top-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .badge-gov {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        background: rgba(15, 23, 42, 0.55);
        backdrop-filter: blur(8px);
        border: 1px solid rgba(255,255,255,0.22);
        color: #f8fafc;
        font-size: 14px;
        font-weight: 700;
        letter-spacing: 0.5px;
        text-transform: uppercase;
        padding: 9px 20px;
        border-radius: 9999px;
      }
      .badge-gov::before {
        content: "";
        width: 9px;
        height: 9px;
        background: ${img.accent};
        border-radius: 50%;
        box-shadow: 0 0 10px ${img.accent};
      }
      .badge-year {
        background: ${img.accent};
        color: #0f172a;
        font-size: 14px;
        font-weight: 800;
        padding: 8px 18px;
        border-radius: 8px;
        letter-spacing: 0.5px;
        text-transform: uppercase;
      }
      .main {
        display: flex;
        gap: 34px;
        align-items: center;
      }
      .copy {
        flex: 1;
        max-width: 640px;
      }
      .category-tag {
        color: ${img.accent};
        font-size: 15px;
        font-weight: 700;
        letter-spacing: 1px;
        text-transform: uppercase;
        margin-bottom: 12px;
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .category-tag::before {
        content: "";
        width: 8px;
        height: 8px;
        background: ${img.accent};
        border-radius: 50%;
      }
      h1 {
        font-size: 44px;
        font-weight: 900;
        line-height: 1.12;
        letter-spacing: -1px;
        margin-bottom: 14px;
        text-shadow: 0 4px 20px rgba(0,0,0,0.5);
        color: #ffffff;
      }
      h1 span.highlight { color: ${img.accent}; }
      .desc {
        font-size: 17px;
        line-height: 1.42;
        color: #e2e8f0;
        margin-bottom: 22px;
      }
      .stats {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 12px;
      }
      .stat {
        background: rgba(15,23,42,0.6);
        border: 1px solid rgba(255,255,255,0.1);
        border-radius: 12px;
        padding: 12px 14px;
      }
      .stat-val { font-size: 17px; font-weight: 800; color: ${img.accentSoft}; }
      .stat-label { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; color: #94a3b8; }
      .art {
        flex: 0 0 430px;
        width: 430px;
        height: 360px;
        background: rgba(15,23,42,0.45);
        border: 1px solid rgba(255,255,255,0.12);
        border-radius: 20px;
        padding: 18px;
        backdrop-filter: blur(6px);
      }
    </style>
  </head>
  <body>
    <div class="grid-decor"></div>
    <div class="glow"></div>
    <div class="content">
      <div class="top-row">
        <div class="badge-gov">${img.badgeGov}</div>
        <div class="badge-year">${img.yearBadge}</div>
      </div>
      <div class="main">
        <div class="copy">
          <div class="category-tag">${img.categoryTag}</div>
          <h1>${img.title} <span class="highlight">${img.highlight}</span></h1>
          <p class="desc">${img.desc}</p>
          <div class="stats">
            ${img.stats.map((s) => `<div class="stat"><div class="stat-val">${s.val}</div><div class="stat-label">${s.label}</div></div>`).join('')}
          </div>
        </div>
        <div class="art">${img.art}</div>
      </div>
    </div>
  </body>
  </html>
  `;
}

async function render() {
  console.log('Rendering original scheme-specific editorial illustration for Wazir-e-Azam Apna Ghar...');
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage({ viewport: { width: 1200, height: 675 } });

  await page.setContent(buildHtml(), { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(250);

  const dest = path.resolve('public/images', img.filename);
  await page.screenshot({ path: dest, type: 'jpeg', quality: 92 });
  console.log('Saved: ' + dest);

  const outDir = path.resolve('out/images');
  if (fs.existsSync(outDir)) {
    fs.copyFileSync(dest, path.join(outDir, img.filename));
    console.log('Copied to out/images: ' + img.filename);
  }

  const draftDir = path.resolve('content-drafts/wazir-e-azam-apna-ghar-program-2026-09-30');
  fs.mkdirSync(draftDir, { recursive: true });
  fs.copyFileSync(dest, path.join(draftDir, 'featured-image.jpg'));
  console.log('Copied to draft: featured-image.jpg');

  await browser.close();
  console.log('Done.');
}

render().catch((err) => {
  console.error(err);
  process.exit(1);
});
