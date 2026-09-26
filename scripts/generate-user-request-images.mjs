import { chromium } from 'playwright-core';
import path from 'path';

async function generateBanners() {
  console.log('Launching browser to render banners for new blogs...');
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage({
    viewport: { width: 1200, height: 675 }
  });

  const banners = [
    {
      filename: 'cm-balochistan-youth-skills-scheme-2026-online-apply.jpg',
      theme: 'linear-gradient(135deg, #065f46 0%, #047857 40%, #0f172a 100%)',
      badgeColor: '#10b981',
      badgeText: 'Balochistan Youth Skills 2026',
      yearBadge: '30k Foreign Jobs',
      title: 'CM Balochistan Youth Skills Scheme 2026 Online Apply',
      desc: 'B-TEVTA online registration, free technical training, monthly stipend & overseas job placement guide',
      stats: [
        { label: 'Target Overseas Jobs', val: '30,000 Seats' },
        { label: 'Executing Body', val: 'B-TEVTA' },
        { label: 'Female Quota', val: '25% Reserved' },
        { label: 'Registration Fee', val: '100% Free' }
      ]
    },
    {
      filename: 'fake-8171-sms-check-complaint-pta-bisp-lottery-fraud-alert.jpg',
      theme: 'linear-gradient(135deg, #991b1b 0%, #dc2626 40%, #0f172a 100%)',
      badgeColor: '#ef4444',
      badgeText: 'Public Safety Alert',
      yearBadge: 'Official 8171 Alert',
      title: 'Fake 8171 SMS Check & BISP Scam Complaint Guide',
      desc: 'Spot fraudulent messages, report scammers to PTA 9000, BISP Helpline 0800-26477, Police 15 & FIA 1991',
      stats: [
        { label: 'Official Sender ID', val: 'Shortcode 8171 Only' },
        { label: 'BISP Helpline', val: '0800-26477' },
        { label: 'PTA Spam Reporting', val: 'SMS to 9000' },
        { label: 'FIA Cybercrime', val: 'Helpline 1991' }
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
          padding: 56px 64px;
          position: relative;
          overflow: hidden;
        }
        .bg-circle1 {
          position: absolute;
          width: 650px;
          height: 650px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(0,0,0,0) 70%);
          top: -200px;
          right: -150px;
          pointer-events: none;
        }
        .bg-circle2 {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, rgba(0,0,0,0) 70%);
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
          color: #ffffff;
          font-weight: 800;
          font-size: 15px;
          padding: 8px 18px;
          border-radius: 9999px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .main-content {
          z-index: 2;
          margin-top: 10px;
        }
        .main-title {
          font-size: 46px;
          font-weight: 900;
          line-height: 1.2;
          margin-bottom: 16px;
          letter-spacing: -0.5px;
          max-width: 1050px;
          text-shadow: 0 4px 16px rgba(0,0,0,0.3);
        }
        .main-desc {
          font-size: 20px;
          line-height: 1.5;
          color: #e2e8f0;
          max-width: 980px;
          font-weight: 400;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          z-index: 2;
          background: rgba(15, 23, 42, 0.6);
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
          color: #94a3b8;
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
          <span>PakBenefits Verification Guide</span>
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
    const outputPath = path.join(process.cwd(), 'public', 'images', b.filename);
    await page.screenshot({ path: outputPath, type: 'jpeg', quality: 90 });
    console.log(`Saved banner to ${outputPath}`);
  }

  await browser.close();
  console.log('Banner generation complete!');
}

generateBanners().catch(console.error);
