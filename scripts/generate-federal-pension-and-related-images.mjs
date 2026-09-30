import { chromium } from 'playwright-core';
import path from 'path';
import fs from 'fs';

async function generateImages() {
  console.log('Rendering 4 topic-relevant photo-editorial images...');
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage({ viewport: { width: 1200, height: 675 } });

  const images = [
    {
      filename: 'federal-contributory-pension-scheme.jpg',
      photo: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop',
      altPhoto: 'Financial planning documents and charts for the Federal Contributory Pension Scheme',
      theme: '#0f172a',
      overlay: 'linear-gradient(180deg, rgba(15, 23, 42, 0.55) 0%, rgba(15, 23, 42, 0.82) 70%, rgba(15, 23, 42, 0.97) 100%)',
      accent: '#4ade80',
      badgeGov: 'Ministry of Finance • FGDC Pension Fund',
      yearBadge: 'Effective 1 July 2024',
      categoryTag: 'Defined-Contribution Retirement System',
      title: 'Federal Contributory Pension Scheme',
      highlight: 'Rules, Contributions & Benefits',
      desc: 'The 2024 FGDC Pension Fund Scheme for federal employees: 10% employee + 12% government (22% total) into an individually invested fund.',
      stats: [
        { label: 'Employee Share', val: '10% of Pay' },
        { label: 'Government Share', val: '12% of Pay' },
        { label: 'Combined Total', val: '22% Monthly' },
        { label: 'Effective From', val: '1 July 2024' }
      ]
    },
    {
      filename: 'pm-youth-loan-scheme.jpg',
      photo: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
      altPhoto: 'Young Pakistani entrepreneurs reviewing loan application in a modern office',
      theme: '#0f172a',
      overlay: 'linear-gradient(180deg, rgba(30, 41, 59, 0.5) 0%, rgba(15, 23, 42, 0.82) 70%, rgba(15, 23, 42, 0.97) 100%)',
      accent: '#38bdf8',
      badgeGov: "PM's Youth Business & Agriculture Loan Scheme",
      yearBadge: 'Tiered 2026',
      categoryTag: 'Subsidized Business Financing',
      title: 'Prime Minister Youth Loan Scheme 2026',
      highlight: 'Application, Eligibility & Tiers',
      desc: 'Subsidized business financing up to Rs 7.5 million for citizens aged 21-45 across 0%, 5% and 7% markup tiers. Apply via pmyp.gov.pk.',
      stats: [
        { label: 'Max Loan', val: 'Rs 7.5 Million' },
        { label: 'Age Bracket', val: '21 - 45 Years' },
        { label: 'Markup Tiers', val: '0% / 5% / 7%' },
        { label: 'Portal', val: 'pmyp.gov.pk' }
      ]
    },
    {
      filename: 'ehsaas-loan-vs-saving-wallet.jpg',
      photo: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=1200&auto=format&fit=crop',
      altPhoto: 'Microfinance cash and digital wallet savings for Ehsaas financial inclusion',
      theme: '#064e3b',
      overlay: 'linear-gradient(180deg, rgba(6, 78, 59, 0.5) 0%, rgba(4, 47, 46, 0.85) 70%, rgba(15, 23, 42, 0.97) 100%)',
      accent: '#5eead4',
      badgeGov: 'Ehsaas • PPAF & Akhuwat Microfinance',
      yearBadge: 'Comparison 2026',
      categoryTag: 'Financial Inclusion',
      title: 'Ehsaas Interest-Free Loan',
      highlight: 'vs. Saving Wallet',
      desc: 'Compare Rs 20,000-Rs 75,000 0% markup microfinance loans against a zero-balance digital saving account for women.',
      stats: [
        { label: 'Loan Range', val: 'Rs 20k - 75k' },
        { label: 'Markup', val: '0% Interest-Free' },
        { label: 'Wallet', val: 'Zero-Balance' },
        { label: 'Partners', val: 'PPAF / Akhuwat' }
      ]
    },
    {
      filename: 'bisp-direct-bank-account-transfer.jpg',
      photo: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop',
      altPhoto: 'Biometric card payment for BISP Sahulat commercial bank account',
      theme: '#083344',
      overlay: 'linear-gradient(180deg, rgba(8, 51, 68, 0.5) 0%, rgba(15, 23, 42, 0.85) 70%, rgba(15, 23, 42, 0.97) 100%)',
      accent: '#38bdf8',
      badgeGov: 'BISP • Direct Bank Transfer System',
      yearBadge: '2026 Shift',
      categoryTag: 'Cash Camps to Bank Accounts',
      title: 'BISP New Direct Bank Transfer',
      highlight: 'Commercial Bank Accounts',
      desc: 'BISP Sahulat accounts across HBL, Bank Alfalah, BOP and digital wallets with 0% agent deductions and biometric verification.',
      stats: [
        { label: 'Account', val: 'BISP Sahulat' },
        { label: 'Partner Banks', val: 'HBL / Alfalah / BOP' },
        { label: 'Deductions', val: '0% Fee' },
        { label: 'Verification', val: 'NADRA Biometric' }
      ]
    }
  ];

  for (const img of images) {
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
          background: ${img.theme};
          color: #ffffff;
        }
        .bg-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.55) contrast(1.1);
        }
        .gradient-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: ${img.overlay};
        }
        .content-wrapper {
          position: relative;
          z-index: 10;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 44px 54px;
        }
        .top-badge-row {
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
          border: 1px solid rgba(255, 255, 255, 0.25);
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
        .middle-content {
          max-width: 930px;
        }
        .category-tag {
          color: ${img.accent};
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
          background: ${img.accent};
          border-radius: 50%;
        }
        h1 {
          font-size: 46px;
          font-weight: 900;
          line-height: 1.14;
          letter-spacing: -1px;
          margin-bottom: 14px;
          text-shadow: 0 4px 20px rgba(0,0,0,0.55);
          color: #ffffff;
        }
        h1 span.highlight {
          color: ${img.accent};
        }
        .desc {
          font-size: 19px;
          line-height: 1.45;
          color: #e2e8f0;
          max-width: 860px;
          font-weight: 400;
        }
        .bottom-bar {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          background: rgba(15, 23, 42, 0.72);
          backdrop-filter: blur(12px);
          border-radius: 16px;
          padding: 18px 24px;
          border: 1px solid rgba(255, 255, 255, 0.12);
        }
        .info-box {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }
        .info-label {
          font-size: 12px;
          text-transform: uppercase;
          color: #94a3b8;
          letter-spacing: 0.5px;
          font-weight: 600;
        }
        .info-val {
          font-size: 19px;
          font-weight: 800;
          color: #ffffff;
        }
      </style>
    </head>
    <body>
      <img class="bg-img" src="${img.photo}" alt="${img.altPhoto}" />
      <div class="gradient-overlay"></div>
      <div class="content-wrapper">
        <div class="top-badge-row">
          <div class="badge-gov">${img.badgeGov}</div>
          <div class="badge-year">${img.yearBadge}</div>
        </div>
        <div class="middle-content">
          <div class="category-tag">${img.categoryTag}</div>
          <h1>${img.title} <span class="highlight">${img.highlight}</span></h1>
          <p class="desc">${img.desc}</p>
        </div>
        <div class="bottom-bar">
          ${img.stats.map((s) => `
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

    await page.setContent(html, { waitUntil: 'domcontentloaded' });
    await page.waitForFunction(() => {
      const im = document.querySelector('.bg-img');
      return im && im.complete && im.naturalWidth > 0;
    }, { timeout: 30000 }).catch(() => console.log(`  (warn) bg photo slow/absent for ${img.filename}, using gradient fallback`));

    const dest = path.resolve('public/images', img.filename);
    await page.screenshot({ path: dest, type: 'jpeg', quality: 90 });
    console.log(`Saved: ${dest}`);

    const staticDest = path.resolve('out/images', img.filename);
    if (fs.existsSync(path.resolve('out/images'))) {
      fs.copyFileSync(dest, staticDest);
      console.log(`Copied: ${staticDest}`);
    }
  }

  await browser.close();
  console.log('\nAll 4 topic-relevant images regenerated successfully.');
}

generateImages().catch((err) => {
  console.error(err);
  process.exit(1);
});
