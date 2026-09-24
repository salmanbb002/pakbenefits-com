import { chromium } from 'playwright-core';
import path from 'path';
import fs from 'fs';

async function generateBanners() {
  console.log('Launching browser to render banners...');
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage({
    viewport: { width: 1200, height: 675 }
  });

  const banners = [
    {
      filename: 'benazir-nashonuma-program.jpg',
      theme: 'linear-gradient(135deg, #064e3b 0%, #047857 40%, #0f172a 100%)',
      badgeColor: '#10b981',
      badgeText: 'Benazir Nashonuma Program',
      yearBadge: 'Nutrition CCT 2026',
      title: 'Benazir Nashonuma Program Online Check CNIC & Registration',
      desc: 'Quarterly Nutrition Cash Grant (Rs 2,500–3,500), Wawa Mum / Maamta Supplements & Hospital Facilitation Desks',
      stats: [
        { label: 'Boy Child / Mother', val: 'Rs. 2,500 / Qtr' },
        { label: 'Girl Child Grant', val: 'Rs. 3,000–3,500' },
        { label: 'First 1,000 Days', val: '0–23 Months' },
        { label: 'Verification', val: '8171 + Hospital Desk' }
      ]
    },
    {
      filename: 'cm-punjab-free-laptop-scheme.jpg',
      theme: 'linear-gradient(135deg, #1e1b4b 0%, #4338ca 40%, #0f172a 100%)',
      badgeColor: '#818cf8',
      badgeText: 'CM Punjab Laptop Scheme',
      yearBadge: 'Phase 2 (2026)',
      title: 'CM Maryam Nawaz Free Laptop Scheme 2026 Online Apply',
      desc: 'Merit-Based Distribution of Core i7 13th Gen Laptops for Public University & Medical College Students',
      stats: [
        { label: 'Hardware Specs', val: 'Core i7 13th Gen' },
        { label: 'Memory / SSD', val: '16GB RAM / 512GB' },
        { label: 'BS Intermediate', val: '65% / 3.0 CGPA' },
        { label: 'Medical Cutoff', val: '80% F.Sc Pre-Med' }
      ]
    },
    {
      filename: 'sindh-hari-card-scheme.jpg',
      theme: 'linear-gradient(135deg, #78350f 0%, #b45309 40%, #0f172a 100%)',
      badgeColor: '#f59e0b',
      badgeText: 'Sindh Benazir Hari Card',
      yearBadge: 'Farmer Relief 2026',
      title: 'Sindh Hari Card Scheme 2026 Online Apply & Registration',
      desc: 'Direct Cash Subsidies for DAP Fertilizer, Certified Seeds, 80% Solar Tube Well Subsidy & Crop Takaful Insurance',
      stats: [
        { label: 'Land Limit', val: '1 to 25 Acres' },
        { label: 'Tenant Haris', val: 'Eligible with Batai' },
        { label: 'Disbursement', val: 'Sindh Bank Biometric' },
        { label: 'Solar Subsidy', val: 'Up to 80% Grant' }
      ]
    }
  ];

  for (const b of banners) {
    const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
    body {
      width: 1200px;
      height: 675px;
      background: ${b.theme};
      color: #ffffff;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 60px 70px;
      position: relative;
      overflow: hidden;
    }
    .grid-pattern {
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background-image: radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px);
      background-size: 24px 24px;
      pointer-events: none;
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      z-index: 10;
    }
    .badge {
      background: rgba(255, 255, 255, 0.12);
      border: 1px solid rgba(255, 255, 255, 0.25);
      backdrop-filter: blur(8px);
      padding: 10px 20px;
      border-radius: 9999px;
      font-size: 16px;
      font-weight: 700;
      letter-spacing: 0.5px;
      display: inline-flex;
      align-items: center;
      gap: 10px;
      color: #ffffff;
    }
    .badge-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: ${b.badgeColor};
      box-shadow: 0 0 10px ${b.badgeColor};
    }
    .year-badge {
      background: ${b.badgeColor};
      color: #0f172a;
      font-weight: 800;
      font-size: 15px;
      padding: 8px 18px;
      border-radius: 8px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    .content {
      position: relative;
      z-index: 10;
      margin-top: -10px;
    }
    .title {
      font-size: 42px;
      font-weight: 800;
      line-height: 1.22;
      margin-bottom: 16px;
      color: #ffffff;
      text-shadow: 0 4px 12px rgba(0,0,0,0.3);
    }
    .desc {
      font-size: 20px;
      line-height: 1.5;
      color: #cbd5e1;
      max-width: 980px;
    }
    .stats-row {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 18px;
      position: relative;
      z-index: 10;
    }
    .stat-card {
      background: rgba(15, 23, 42, 0.55);
      border: 1px solid rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(12px);
      padding: 18px 20px;
      border-radius: 14px;
    }
    .stat-val {
      font-size: 22px;
      font-weight: 800;
      color: #ffffff;
      margin-bottom: 4px;
    }
    .stat-lbl {
      font-size: 13px;
      color: #94a3b8;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .watermark {
      position: absolute;
      right: -40px;
      bottom: -60px;
      font-size: 220px;
      font-weight: 900;
      color: rgba(255,255,255,0.03);
      pointer-events: none;
      user-select: none;
      z-index: 1;
    }
  </style>
</head>
<body>
  <div class="grid-pattern"></div>
  <div class="watermark">PAK</div>

  <div class="header">
    <div class="badge">
      <div class="badge-dot"></div>
      ${b.badgeText}
    </div>
    <div class="year-badge">${b.yearBadge}</div>
  </div>

  <div class="content">
    <h1 class="title">${b.title}</h1>
    <p class="desc">${b.desc}</p>
  </div>

  <div class="stats-row">
    ${b.stats.map(s => `
      <div class="stat-card">
        <div class="stat-val">${s.val}</div>
        <div class="stat-lbl">${s.label}</div>
      </div>
    `).join('')}
  </div>
</body>
</html>
    `;

    await page.setContent(html);
    const outputPath = path.resolve('public/images', b.filename);
    await page.screenshot({ path: outputPath, type: 'jpeg', quality: 90 });
    console.log(`✅ Generated banner: ${outputPath}`);
  }

  await browser.close();
  console.log('All banners generated successfully!');
}

generateBanners().catch(err => {
  console.error('Error rendering banners:', err);
  process.exit(1);
});
