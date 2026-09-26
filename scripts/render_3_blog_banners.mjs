import { chromium } from 'playwright-core';
import path from 'path';

async function generateBanners() {
  console.log('Rendering 1200x675 editorial banners for the 3 user blogs...');
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage({
    viewport: { width: 1200, height: 675 }
  });

  const banners = [
    {
      filename: 'bisp-biometric-verification-failed.jpg',
      theme: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 40%, #0f172a 100%)',
      badgeColor: '#3b82f6',
      badgeText: 'BISP Biometric Verification Guide 2026',
      yearBadge: 'Form B Manual Fix',
      title: 'BISP Biometric Failed? Guaranteed Rs 13,500 Fix',
      desc: 'POS machine & ATM fingerprint matching solution, Form B application approval & NADRA verification guide',
      stats: [
        { label: 'Standard Qist', val: 'Rs 13,500' },
        { label: 'Manual Form', val: 'Form B Exemption' },
        { label: 'NADRA Update', val: '24-48 Hours' },
        { label: 'Application Fee', val: '100% Free' }
      ]
    },
    {
      filename: 'bisp-tehsil-office-peshawar-kpk.jpg',
      theme: 'linear-gradient(135deg, #065f46 0%, #059669 40%, #0f172a 100%)',
      badgeColor: '#10b981',
      badgeText: 'KPK & Peshawar Directory 2026',
      yearBadge: 'Verified Addresses',
      title: 'Verified BISP Tehsil Offices KPK & Peshawar List',
      desc: 'Complete directory of BISP offices in Peshawar, Mardan, Swat, Abbottabad with exact addresses, landlines & timings',
      stats: [
        { label: 'Regional Headquarter', val: 'University Town' },
        { label: 'Official Helpline', val: '0800-26471' },
        { label: 'Office Hours', val: '8 AM - 4 PM' },
        { label: 'Registration Desk', val: 'NSER Dynamic' }
      ]
    },
    {
      filename: 'cm-punjab-apni-chhat-apna-ghar-loan.jpg',
      theme: 'linear-gradient(135deg, #7c2d12 0%, #ea580c 40%, #0f172a 100%)',
      badgeColor: '#f97316',
      badgeText: 'CM Punjab Housing Scheme 2026',
      yearBadge: '15 Lakh Loan Tracking',
      title: 'Apni Chhat Apna Ghar Loan: Instant Qist Tracking',
      desc: 'Track your 15 Lakh interest-free loan approval status and 1st installment disbursement date on PITB portal',
      stats: [
        { label: 'Max Loan Amount', val: '15 Lakh PKR' },
        { label: 'Interest Rate', val: '0% (Bila-Sood)' },
        { label: 'Tenure', val: '9 Years (108 Mo)' },
        { label: 'Tracking Portal', val: 'acag.punjab.gov.pk' }
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
          background: radial-gradient(circle, rgba(255, 255, 255, 0.12) 0%, rgba(0,0,0,0) 70%);
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
          <span>PakBenefits Official Guide</span>
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
    await page.screenshot({ path: outputPath, type: 'jpeg', quality: 92 });
    console.log(`Successfully generated image: ${outputPath}`);
  }

  await browser.close();
  console.log('All 3 blog hero banners rendered successfully!');
}

generateBanners().catch(console.error);
