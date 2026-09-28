import { chromium } from 'playwright-core';
import path from 'path';

async function renderSectionSchemeImages() {
  console.log('Rendering government scheme editorial banners for Ehsaas Loan vs Saving Wallet and its Related Guides...');
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage({
    viewport: { width: 1200, height: 675 }
  });

  const items = [
    {
      filename: 'ehsaas-loan-vs-saving-wallet.jpg',
      bgImg: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop',
      themeGradient: 'linear-gradient(180deg, rgba(6, 78, 59, 0.5) 0%, rgba(4, 47, 46, 0.88) 70%, rgba(15, 23, 42, 0.98) 100%)',
      badgeGov: 'Ehsaas Programme • PPAF & Akhuwat',
      badgeTag: 'Interest-Free Loan vs Digital Wallet',
      catTag: 'Financial Inclusion & Micro-Enterprise',
      title: 'Ehsaas Interest-Free Loan vs. Saving Wallet',
      desc: 'Rs 20k-75k bila-sood loan via Akhuwat vs zero-balance digital saving account for women. Complete comparative guide.',
      stats: [
        { label: 'Loan Limit', val: 'Rs 20k - 75k' },
        { label: 'Markup Rate', val: '0% (Bila-Sood)' },
        { label: 'Saving Wallet', val: 'Zero Balance' },
        { label: 'Partner Orgs', val: 'Akhuwat / PPAF' }
      ]
    },
    {
      filename: 'cm-punjab-apni-chhat-apna-ghar-loan.jpg',
      bgImg: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop',
      themeGradient: 'linear-gradient(180deg, rgba(124, 45, 18, 0.5) 0%, rgba(154, 52, 18, 0.88) 70%, rgba(15, 23, 42, 0.98) 100%)',
      badgeGov: 'Government of Punjab • PHATA & PITB',
      badgeTag: '15 Lakh Housing Loan',
      catTag: 'CM Punjab Housing Scheme 2026',
      title: 'Apni Chhat Apna Ghar Loan: Instant Qist Tracking',
      desc: 'Track 15 lakh bila-sood loan approval & 1st installment disbursement date step-by-step on official PITB portal.',
      stats: [
        { label: 'Max Loan', val: '15 Lakh PKR' },
        { label: 'Markup', val: '0% Interest' },
        { label: 'Tenure', val: '9 Years' },
        { label: 'Portal', val: 'acag.punjab.gov.pk' }
      ]
    },
    {
      filename: 'cm-balochistan-youth-skills-scheme-2026-online-apply.jpg',
      bgImg: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop',
      themeGradient: 'linear-gradient(180deg, rgba(6, 78, 59, 0.5) 0%, rgba(4, 47, 46, 0.88) 70%, rgba(15, 23, 42, 0.98) 100%)',
      badgeGov: 'Government of Balochistan • B-TEVTA',
      badgeTag: '30,000 Foreign Jobs',
      catTag: 'Youth Rozgar & Technical Training',
      title: 'CM Balochistan Youth Skills Scheme 2026',
      desc: 'Online registration portal at btevta.gob.pk. Fully funded technical education, monthly stipend & overseas job placement.',
      stats: [
        { label: 'Foreign Jobs', val: '30,000 Target' },
        { label: 'Official Portal', val: 'btevta.gob.pk' },
        { label: 'Female Quota', val: '25% Reserved' },
        { label: 'Course Fee', val: '100% Free' }
      ]
    },
    {
      filename: 'fake-8171-sms-check-complaint-pta-bisp-lottery-fraud-alert.jpg',
      bgImg: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop',
      themeGradient: 'linear-gradient(180deg, rgba(153, 27, 27, 0.5) 0%, rgba(127, 29, 29, 0.9) 70%, rgba(15, 23, 42, 0.98) 100%)',
      badgeGov: 'BISP Public Security & Fraud Alert',
      badgeTag: 'Official 8171 Warning',
      catTag: 'Public Safety & Anti-Scam Guide',
      title: 'Fake 8171 SMS Check & BISP Fraud Complaint Guide',
      desc: 'Spot fake SMS from 11-digit numbers. Report scammers to PTA 9000, BISP Helpline 0800-26477 & FIA Cybercrime 1991.',
      stats: [
        { label: 'Shortcode', val: '8171 Only' },
        { label: 'BISP Helpline', val: '0800-26477' },
        { label: 'PTA Spam SMS', val: 'SMS to 9000' },
        { label: 'FIA Cybercrime', val: 'Helpline 1991' }
      ]
    }
  ];

  for (const item of items) {
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
          position: relative;
          overflow: hidden;
          background: #0f172a;
        }
        .bg-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.5) contrast(1.15);
        }
        .gradient-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: ${item.themeGradient};
        }
        .content-wrapper {
          position: relative;
          z-index: 10;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 44px 54px;
          color: #ffffff;
        }
        .top-badge-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .badge-gov {
          background: #10b981;
          color: #022c22;
          font-size: 14px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.75px;
          padding: 8px 20px;
          border-radius: 9999px;
          box-shadow: 0 4px 15px rgba(16, 185, 129, 0.4);
        }
        .badge-tag {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: #f8fafc;
          font-size: 14px;
          font-weight: 700;
          padding: 8px 18px;
          border-radius: 9999px;
        }
        .middle-content {
          max-width: 920px;
        }
        .category-tag {
          color: #34d399;
          font-size: 16px;
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
          display: inline-block;
          width: 8px;
          height: 8px;
          background: #34d399;
          border-radius: 50%;
        }
        h1 {
          font-size: 42px;
          font-weight: 900;
          line-height: 1.18;
          letter-spacing: -0.5px;
          margin-bottom: 14px;
          text-shadow: 0 4px 20px rgba(0,0,0,0.6);
        }
        p {
          font-size: 19px;
          line-height: 1.45;
          color: #cbd5e1;
          max-width: 850px;
          font-weight: 400;
        }
        .bottom-bar {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          background: rgba(15, 23, 42, 0.75);
          backdrop-filter: blur(12px);
          border-radius: 16px;
          padding: 18px 24px;
          border: 1px solid rgba(255, 255, 255, 0.14);
        }
        .info-box {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .info-label {
          font-size: 12px;
          text-transform: uppercase;
          color: #94a3b8;
          letter-spacing: 0.5px;
          font-weight: 600;
        }
        .info-val {
          font-size: 18px;
          font-weight: 800;
          color: #ffffff;
        }
      </style>
    </head>
    <body>
      <img class="bg-img" src="${item.bgImg}" alt="${item.title}" />
      <div class="gradient-overlay"></div>
      <div class="content-wrapper">
        <div class="top-badge-row">
          <div class="badge-gov">${item.badgeGov}</div>
          <div class="badge-tag">${item.badgeTag}</div>
        </div>
        <div class="middle-content">
          <div class="category-tag">${item.catTag}</div>
          <h1>${item.title}</h1>
          <p>${item.desc}</p>
        </div>
        <div class="bottom-bar">
          ${item.stats.map(s => `
            <div class="info-box">
              <span class="info-label">${s.label}</span>
              <span class="info-val">${s.val}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </body>
    </html>
    `;

    await page.setContent(html, { waitUntil: 'networkidle' });
    const targetPath = path.join(process.cwd(), 'public', 'images', item.filename);
    await page.screenshot({ path: targetPath, type: 'jpeg', quality: 92 });
    console.log(`Rendered scheme banner: ${item.filename}`);
  }

  await browser.close();
  console.log('All 4 government scheme banners rendered successfully!');
}

renderSectionSchemeImages().catch(console.error);
