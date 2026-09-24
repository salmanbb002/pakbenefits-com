import { chromium } from 'playwright-core';
import path from 'path';

async function generateBanners() {
  console.log('Launching browser to render banners...');
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage({
    viewport: { width: 1200, height: 675 }
  });

  const banners = [
    {
      filename: 'bisp-direct-bank-account-transfer.jpg',
      theme: 'linear-gradient(135deg, #064e3b 0%, #047857 40%, #0f172a 100%)',
      badgeColor: '#10b981',
      badgeText: 'BISP 8171 Direct Bank Transfer',
      yearBadge: '2026 Shift',
      title: 'BISP New Direct Bank Transfer System (HBL, Alfalah, BOP)',
      desc: 'Shifting from Cash Camps to Commercial Bank Accounts & Digital Wallets with 0% Middleman Deductions',
      stats: [
        { label: 'Quarterly Tranche', val: 'Rs. 13,500' },
        { label: 'Partner Banks', val: '6 Banks Consortium' },
        { label: 'Account Type', val: 'BISP Sahulat Account' },
        { label: 'Deductions', val: '0% Zero Fees' }
      ]
    },
    {
      filename: 'bisp-tehsil-office-faisalabad.jpg',
      theme: 'linear-gradient(135deg, #083344 0%, #0e7490 40%, #0f172a 100%)',
      badgeColor: '#06b6d4',
      badgeText: 'Faisalabad Tehsil Directory',
      yearBadge: 'Verified 2026',
      title: 'BISP Tehsil Offices Faisalabad: All Dynamic Survey Centers',
      desc: 'City (Al Fateh Complex), Saddar (Dhudiwala), Jaranwala, Samundri, Tandlianwala & Chak Jhumra Desks',
      stats: [
        { label: 'Tehsils Covered', val: '6 Tehsils + HQ' },
        { label: 'Operating Hours', val: '8:00 AM – 4:00 PM' },
        { label: 'Registration Fee', val: '100% Free' },
        { label: 'Key Service', val: 'NSER Dynamic Survey' }
      ]
    },
    {
      filename: 'bisp-tehsil-office-multan.jpg',
      theme: 'linear-gradient(135deg, #1e1b4b 0%, #4338ca 40%, #0f172a 100%)',
      badgeColor: '#818cf8',
      badgeText: 'Multan & South Punjab Directory',
      yearBadge: 'Verified 2026',
      title: 'BISP Tehsil Offices Multan: City, Saddar & Shujabad Desks',
      desc: 'Multan City, Saddar / Cantt (Bosan Rd Metro Stop 18), Shujabad & Jalalpur Pirwala Registration Centers',
      stats: [
        { label: 'Regional Hub', val: 'South Punjab' },
        { label: 'Metro Access', val: 'Bahadarpur Station' },
        { label: 'Helpline', val: '0800-26477' },
        { label: 'Verification', val: 'NADRA Biometrics' }
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
        * { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }
        body {
          width: 1200px;
          height: 675px;
          background: ${b.theme};
          color: #ffffff;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 48px 56px;
          position: relative;
          overflow: hidden;
        }
        .bg-circle1 {
          position: absolute;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, rgba(0,0,0,0) 70%);
          top: -150px;
          right: -100px;
          pointer-events: none;
        }
        .bg-circle2 {
          position: absolute;
          width: 450px;
          height: 450px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(0,0,0,0) 70%);
          bottom: -100px;
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
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 10px 22px;
          border-radius: 9999px;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          color: #ffffff;
        }
        .brand-badge span.dot {
          width: 10px;
          height: 10px;
          background-color: ${b.badgeColor};
          border-radius: 50%;
          box-shadow: 0 0 10px ${b.badgeColor};
        }
        .year-badge {
          background: #f59e0b;
          color: #78350f;
          font-size: 15px;
          font-weight: 800;
          padding: 8px 18px;
          border-radius: 8px;
          letter-spacing: 0.5px;
        }
        .main-content {
          z-index: 2;
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 40px;
          align-items: center;
        }
        .title-area h1 {
          font-size: 38px;
          line-height: 1.2;
          font-weight: 900;
          margin-bottom: 16px;
          color: #ffffff;
          text-shadow: 0 2px 10px rgba(0,0,0,0.3);
        }
        .title-area p {
          font-size: 17px;
          line-height: 1.45;
          color: #e2e8f0;
          font-weight: 400;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        .stat-card {
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(12px);
          padding: 16px;
          border-radius: 12px;
        }
        .stat-label {
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: #cbd5e1;
          font-weight: 600;
          margin-bottom: 4px;
        }
        .stat-val {
          font-size: 18px;
          font-weight: 800;
          color: #ffffff;
        }
        .footer-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid rgba(255, 255, 255, 0.15);
          padding-top: 16px;
          z-index: 2;
        }
        .site-name {
          font-size: 18px;
          font-weight: 800;
          letter-spacing: 1px;
          color: #ffffff;
        }
        .verified-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #94a3b8;
        }
      </style>
    </head>
    <body>
      <div class="bg-circle1"></div>
      <div class="bg-circle2"></div>
      
      <div class="header-row">
        <div class="brand-badge">
          <span class="dot"></span>
          ${b.badgeText}
        </div>
        <div class="year-badge">${b.yearBadge}</div>
      </div>
      
      <div class="main-content">
        <div class="title-area">
          <h1>${b.title}</h1>
          <p>${b.desc}</p>
        </div>
        <div class="stats-grid">
          ${b.stats.map(s => `
            <div class="stat-card">
              <div class="stat-label">${s.label}</div>
              <div class="stat-val">${s.val}</div>
            </div>
          `).join('')}
        </div>
      </div>
      
      <div class="footer-row">
        <div class="site-name">PakBenefits.com</div>
        <div class="verified-badge">
          <span>✓ Official 8171 & NADRA Government Guidelines</span>
        </div>
      </div>
    </body>
    </html>
    `;

    await page.setContent(html);
    const destPath = path.resolve('public/images', b.filename);
    await page.screenshot({ path: destPath, quality: 90, type: 'jpeg' });
    console.log(`Saved: public/images/${b.filename}`);
  }

  await browser.close();
  console.log('All 3 banner images generated successfully!');
}

generateBanners().catch(console.error);
