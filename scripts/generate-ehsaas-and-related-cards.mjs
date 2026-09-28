import { chromium } from 'playwright-core';
import path from 'path';
import fs from 'fs';

async function generateCards() {
  console.log('Rendering 4 branded cards with Playwright...');
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage({
    viewport: { width: 1200, height: 675 }
  });

  const outDir = path.join(process.cwd(), 'public', 'images');
  const staticOutDir = path.join(process.cwd(), 'out', 'images');

  const cards = [
    {
      filename: 'ehsaas-loan-vs-saving-wallet.jpg',
      theme: 'linear-gradient(135deg, #064e3b 0%, #0d9488 45%, #0f172a 100%)',
      circle1: 'rgba(20, 184, 166, 0.28)',
      circle2: 'rgba(16, 185, 129, 0.2)',
      brandBadge: 'Govt of Pakistan • Ehsaas Financial Inclusion & Microfinance',
      brandColor: '#5eead4',
      dotColor: '#14b8a6',
      yearBadge: 'COMPARISON 2026',
      yearBadgeBg: '#059669',
      yearBadgeColor: '#ffffff',
      title: 'Ehsaas Interest-Free Loan',
      titleHighlight: 'vs. Saving Wallet',
      highlightColor: '#5eead4',
      desc: 'Compare Rs 20,000–Rs 75,000 microfinance loan at 0% markup via Akhuwat & PPAF against zero-balance digital saving account for women.',
      pills: [
        '💼 Rs 20k - Rs 75k Bila-Sood Loan',
        '💳 Zero-Balance Bachat Account',
        '📈 0% Markup (Pure Qarz-e-Hasna)',
        '🏧 Biometric Cash Transfers'
      ],
      pillBorder: 'rgba(45, 212, 191, 0.35)',
      cardBg: 'linear-gradient(135deg, #0f766e 0%, #0d9488 50%, #064e3b 100%)',
      cardBorder: 'rgba(45, 212, 191, 0.55)',
      tag: 'Financial Inclusion',
      tagBg: '#f59e0b',
      tagColor: '#451a03',
      cardTitle: 'EHSAAS LOAN & BACHAT WALLET',
      cardSubtitle: 'PPAF, Akhuwat & Digital Banking Desks',
      cardSubColor: '#ccfbf1',
      grantAmount: 'Rs 20k-75k | Bachat Wallet',
      grantAmountColor: '#fef08a',
      grantLabel: '0% Markup Business Capital vs Secure Grant Storage',
      cardNote: 'Choose loan for micro-enterprise with repayment plan; choose saving wallet to safeguard quarterly stipends.',
      portalInfo: 'Official Portals: <strong>ppaf.org.pk / akhuwat.org.pk / bisp.gov.pk</strong>',
      stepText: '⚡ Verified 0% Markup Financing & Digital Banking Inclusion',
      stepColor: '#facc15'
    },
    {
      filename: 'cm-punjab-apni-chhat-apna-ghar-loan.jpg',
      theme: 'linear-gradient(135deg, #7c2d12 0%, #ea580c 45%, #0f172a 100%)',
      circle1: 'rgba(249, 115, 22, 0.28)',
      circle2: 'rgba(234, 88, 12, 0.2)',
      brandBadge: 'Govt of Punjab • PITB Housing Loan Portal',
      brandColor: '#fdba74',
      dotColor: '#f97316',
      yearBadge: 'TRACKING 2026',
      yearBadgeBg: '#c2410c',
      yearBadgeColor: '#ffffff',
      title: 'Apni Chhat Apna Ghar Loan',
      titleHighlight: 'Instant Qist Tracking',
      highlightColor: '#fdba74',
      desc: 'PITB portal par 15 lakh bila-sood loan ki approval check karne aur pehli qist (installment) track karne ka mukammal step-by-step tariqa.',
      pills: [
        '🏠 Rs. 15 Lakh Interest-Free Loan',
        '📱 PITB Portal Live Tracking',
        '💵 1st Qist Payment Status',
        '🔑 CNIC Verification Online'
      ],
      pillBorder: 'rgba(251, 146, 60, 0.35)',
      cardBg: 'linear-gradient(135deg, #9a3412 0%, #c2410c 50%, #431407 100%)',
      cardBorder: 'rgba(251, 146, 60, 0.55)',
      tag: 'Bila-Sood Housing Loan',
      tagBg: '#f97316',
      tagColor: '#ffffff',
      cardTitle: 'APNI CHHAT APNA GHAR',
      cardSubtitle: 'PITB Qist Tracking Portal',
      cardSubColor: '#ffedd5',
      grantAmount: 'Rs. 15 Lakh Loan',
      grantAmountColor: '#fde047',
      grantLabel: '0% Interest • Easy 9-Year Monthly Installments',
      cardNote: 'Track loan sanction status, balloting approval, and 1st installment release at acag.punjab.gov.pk.',
      portalInfo: 'Official Portal: <strong>acag.punjab.gov.pk</strong>',
      stepText: '⚡ Check Qist Release Status by 13-Digit CNIC',
      stepColor: '#facc15'
    },
    {
      filename: 'cm-balochistan-youth-skills-scheme-2026-online-apply.jpg',
      theme: 'linear-gradient(135deg, #065f46 0%, #059669 45%, #0f172a 100%)',
      circle1: 'rgba(16, 185, 129, 0.28)',
      circle2: 'rgba(5, 150, 105, 0.2)',
      brandBadge: 'Govt of Balochistan • B-TEVTA Technical Education',
      brandColor: '#a7f3d0',
      dotColor: '#10b981',
      yearBadge: 'OFFICIAL 2026',
      yearBadgeBg: '#047857',
      yearBadgeColor: '#ffffff',
      title: 'CM Balochistan Youth Skills',
      titleHighlight: 'Scheme 2026 Online Apply',
      highlightColor: '#34d399',
      desc: 'Complete B-TEVTA online registration guide. Fully funded technical courses, monthly stipend allowance, and target of 30,000 overseas job placements.',
      pills: [
        '🌐 30,000 Overseas Jobs',
        '🛠️ 100% Free Technical Courses',
        '💵 Monthly Stipend Allowance',
        '👩 25% Female Quota Reserved'
      ],
      pillBorder: 'rgba(52, 211, 153, 0.35)',
      cardBg: 'linear-gradient(135deg, #047857 0%, #059669 50%, #064e3b 100%)',
      cardBorder: 'rgba(52, 211, 153, 0.55)',
      tag: 'Youth Rozgar & Skills',
      tagBg: '#10b981',
      tagColor: '#022c22',
      cardTitle: 'BALOCHISTAN YOUTH SKILLS',
      cardSubtitle: 'B-TEVTA Online Registration Portal',
      cardSubColor: '#a7f3d0',
      grantAmount: '30,000 Foreign Jobs',
      grantAmountColor: '#fef08a',
      grantLabel: 'Free Training, Certification & Monthly Stipend',
      cardNote: 'Register online at btevta.gob.pk with CNIC and educational certificates for domestic & international placement.',
      portalInfo: 'Official Portal: <strong>btevta.gob.pk</strong>',
      stepText: '⚡ Verified B-TEVTA Technical Training & Overseas Rozgar',
      stepColor: '#facc15'
    },
    {
      filename: 'fake-8171-sms-check-complaint-pta-bisp-lottery-fraud-alert.jpg',
      theme: 'linear-gradient(135deg, #991b1b 0%, #dc2626 45%, #0f172a 100%)',
      circle1: 'rgba(239, 68, 68, 0.28)',
      circle2: 'rgba(220, 38, 38, 0.2)',
      brandBadge: 'BISP & PTA Public Security • Anti-Fraud Alert',
      brandColor: '#fca5a5',
      dotColor: '#ef4444',
      yearBadge: 'SAFETY GUIDE 2026',
      yearBadgeBg: '#b91c1c',
      yearBadgeColor: '#ffffff',
      title: 'Fake 8171 SMS Check &',
      titleHighlight: 'BISP Fraud Alert Guide',
      highlightColor: '#fca5a5',
      desc: 'Spot fake SMS from 11-digit mobile numbers. Step-by-step guide to reporting scammers on PTA 9000, BISP Helpline 0800-26477, Police 15, and FIA Cybercrime.',
      pills: [
        '📱 Official Shortcode 8171 Only',
        '🚫 11-Digit Numbers are 100% Fake',
        '📞 BISP Helpline: 0800-26477',
        '⚖️ FIA Cybercrime Helpline: 1991'
      ],
      pillBorder: 'rgba(248, 113, 113, 0.35)',
      cardBg: 'linear-gradient(135deg, #b91c1c 0%, #ef4444 50%, #7f1d1d 100%)',
      cardBorder: 'rgba(248, 113, 113, 0.55)',
      tag: 'Public Fraud Alert',
      tagBg: '#ef4444',
      tagColor: '#ffffff',
      cardTitle: 'FAKE 8171 SMS WARNING',
      cardSubtitle: 'PTA, BISP & FIA Redressal Desks',
      cardSubColor: '#fee2e2',
      grantAmount: 'Shortcode 8171 Only',
      grantAmountColor: '#fef08a',
      grantLabel: 'Any personal mobile number claiming BISP funds is a scam',
      cardNote: 'Forward suspicious SMS to PTA 9000. Report fraud or cash deductions to BISP Helpline 0800-26477 & FIA 1991.',
      portalInfo: 'Official Portals: <strong>bisp.gov.pk / pta.gov.pk</strong>',
      stepText: '⚡ Never Share CNIC, OTP or Pay Cash to Unauthorized Agents',
      stepColor: '#facc15'
    }
  ];

  for (const c of cards) {
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
          background: ${c.theme};
          color: #ffffff;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 44px 52px;
          position: relative;
          overflow: hidden;
        }
        .bg-circle1 {
          position: absolute;
          width: 650px;
          height: 650px;
          border-radius: 50%;
          background: radial-gradient(circle, ${c.circle1} 0%, rgba(0,0,0,0) 70%);
          top: -180px;
          right: -120px;
          pointer-events: none;
        }
        .bg-circle2 {
          position: absolute;
          width: 480px;
          height: 480px;
          border-radius: 50%;
          background: radial-gradient(circle, ${c.circle2} 0%, rgba(0,0,0,0) 70%);
          bottom: -120px;
          left: -120px;
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
          background: rgba(255, 255, 255, 0.14);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.25);
          padding: 10px 22px;
          border-radius: 9999px;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          color: ${c.brandColor};
        }
        .brand-badge span.dot {
          width: 10px;
          height: 10px;
          background-color: ${c.dotColor};
          border-radius: 50%;
          box-shadow: 0 0 10px ${c.dotColor};
        }
        .year-badge {
          background: ${c.yearBadgeBg};
          color: ${c.yearBadgeColor};
          font-size: 15px;
          font-weight: 800;
          padding: 8px 18px;
          border-radius: 8px;
          letter-spacing: 0.5px;
        }
        .main-content {
          z-index: 2;
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 36px;
          align-items: center;
        }
        .title-area h1 {
          font-size: 40px;
          line-height: 1.18;
          font-weight: 900;
          margin-bottom: 14px;
          color: #ffffff;
          text-shadow: 0 2px 10px rgba(0,0,0,0.3);
        }
        .title-area h1 span.highlight {
          color: ${c.highlightColor};
        }
        .title-area p {
          font-size: 18px;
          line-height: 1.45;
          color: #e2e8f0;
          margin-bottom: 22px;
          max-width: 580px;
        }
        .pill-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .pill {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(15, 23, 42, 0.65);
          border: 1px solid ${c.pillBorder};
          padding: 8px 14px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          color: #f1f5f9;
        }
        .card-mockup {
          background: ${c.cardBg};
          border: 2px solid ${c.cardBorder};
          border-radius: 20px;
          padding: 26px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.45);
          position: relative;
        }
        .card-mockup .tag {
          display: inline-block;
          background: ${c.tagBg};
          color: ${c.tagColor};
          font-size: 12px;
          font-weight: 800;
          padding: 4px 12px;
          border-radius: 6px;
          margin-bottom: 14px;
          text-transform: uppercase;
        }
        .card-mockup .card-title {
          font-size: 22px;
          font-weight: 900;
          color: #ffffff;
          margin-bottom: 4px;
        }
        .card-mockup .card-subtitle {
          font-size: 13px;
          font-weight: 700;
          color: ${c.cardSubColor};
          margin-bottom: 16px;
          text-transform: uppercase;
        }
        .card-mockup .grant-box {
          background: rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 12px;
          padding: 14px 18px;
          margin-bottom: 12px;
        }
        .card-mockup .grant-amount {
          font-size: 24px;
          font-weight: 900;
          color: ${c.grantAmountColor};
        }
        .card-mockup .grant-label {
          font-size: 12px;
          color: #cbd5e1;
        }
        .card-mockup .card-footer-note {
          font-size: 12px;
          color: #94a3b8;
          line-height: 1.35;
        }
        .footer-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid rgba(255, 255, 255, 0.18);
          padding-top: 16px;
          z-index: 2;
        }
        .portal-info {
          font-size: 15px;
          color: #94a3b8;
        }
        .portal-info strong {
          color: #38bdf8;
        }
        .verification-step {
          font-size: 15px;
          font-weight: 700;
          color: ${c.stepColor};
        }
      </style>
    </head>
    <body>
      <div class="bg-circle1"></div>
      <div class="bg-circle2"></div>

      <div class="header-row">
        <div class="brand-badge">
          <span class="dot"></span>
          ${c.brandBadge}
        </div>
        <div class="year-badge">${c.yearBadge}</div>
      </div>

      <div class="main-content">
        <div class="title-area">
          <h1>${c.title} <span class="highlight">${c.titleHighlight}</span></h1>
          <p>${c.desc}</p>
          <div class="pill-grid">
            ${c.pills.map(p => `<div class="pill">${p}</div>`).join('')}
          </div>
        </div>

        <div class="card-mockup">
          <div class="tag">${c.tag}</div>
          <div class="card-title">${c.cardTitle}</div>
          <div class="card-subtitle">${c.cardSubtitle}</div>
          <div class="grant-box">
            <div class="grant-amount">${c.grantAmount}</div>
            <div class="grant-label">${c.grantLabel}</div>
          </div>
          <div class="card-footer-note">${c.cardNote}</div>
        </div>
      </div>

      <div class="footer-row">
        <div class="portal-info">${c.portalInfo}</div>
        <div class="verification-step">${c.stepText}</div>
      </div>
    </body>
    </html>
    `;

    await page.setContent(html);
    const dest1 = path.join(outDir, c.filename);
    await page.screenshot({ path: dest1, type: 'jpeg', quality: 90 });
    console.log(`✅ Saved ${dest1}`);

    if (fs.existsSync(staticOutDir)) {
      const dest2 = path.join(staticOutDir, c.filename);
      await page.screenshot({ path: dest2, type: 'jpeg', quality: 90 });
      console.log(`✅ Saved ${dest2}`);
    }
  }

  await browser.close();
  console.log('\n🎉 ALL 4 REQUESTED CARDS GENERATED SUCCESSFULLY!');
}

generateCards().catch(console.error);
