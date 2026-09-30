import { chromium } from 'playwright-core';
import path from 'path';
import fs from 'fs';

// Original, scheme-specific editorial illustrations (no stock photos).
// Each image directly depicts the scheme it belongs to.

const SVGS = {
  pension: `
    <svg viewBox="0 0 560 440" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
      <defs>
        <linearGradient id="pgPot" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#34d399"/><stop offset="1" stop-color="#059669"/>
        </linearGradient>
        <linearGradient id="pgBar" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stop-color="#10b981"/><stop offset="1" stop-color="#6ee7b7"/>
        </linearGradient>
      </defs>
      <!-- employee arrow -->
      <path d="M70 96 L200 158" stroke="#38bdf8" stroke-width="5" stroke-linecap="round"/>
      <path d="M188 140 L206 158 L184 172" stroke="#38bdf8" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <rect x="34" y="52" width="132" height="40" rx="20" fill="#0ea5e9"/>
      <text x="100" y="77" text-anchor="middle" font-family="Segoe UI, Arial" font-size="19" font-weight="800" fill="#052e16">Employee 10%</text>
      <!-- government arrow -->
      <path d="M490 96 L360 158" stroke="#fbbf24" stroke-width="5" stroke-linecap="round"/>
      <path d="M372 140 L354 158 L376 172" stroke="#fbbf24" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <rect x="394" y="52" width="150" height="40" rx="20" fill="#f59e0b"/>
      <text x="469" y="77" text-anchor="middle" font-family="Segoe UI, Arial" font-size="19" font-weight="800" fill="#052e16">Government 12%</text>
      <!-- fund pot -->
      <circle cx="280" cy="230" r="118" fill="url(#pgPot)" opacity="0.18"/>
      <circle cx="280" cy="230" r="96" fill="url(#pgPot)"/>
      <circle cx="280" cy="230" r="96" stroke="#052e16" stroke-opacity="0.25" stroke-width="2"/>
      <text x="280" y="215" text-anchor="middle" font-family="Segoe UI, Arial" font-size="56" font-weight="900" fill="#052e16">22%</text>
      <text x="280" y="252" text-anchor="middle" font-family="Segoe UI, Arial" font-size="20" font-weight="800" fill="#052e16" letter-spacing="2">FGDC FUND</text>
      <!-- growth bars -->
      <rect x="60" y="380" width="40" height="26" rx="5" fill="url(#pgBar)"/>
      <rect x="116" y="366" width="40" height="40" rx="5" fill="url(#pgBar)"/>
      <rect x="172" y="348" width="40" height="58" rx="5" fill="url(#pgBar)"/>
      <rect x="228" y="326" width="40" height="80" rx="5" fill="url(#pgBar)"/>
      <rect x="284" y="300" width="40" height="106" rx="5" fill="url(#pgBar)"/>
      <path d="M60 372 L324 314" stroke="#ffffff" stroke-width="3" stroke-linecap="round" opacity="0.85"/>
      <circle cx="324" cy="314" r="7" fill="#ffffff"/>
      <text x="324" y="296" text-anchor="middle" font-family="Segoe UI, Arial" font-size="17" font-weight="800" fill="#e2e8f0">Retirement</text>
      <!-- seed coin -->
      <circle cx="470" cy="330" r="40" fill="#fbbf24" stroke="#fef3c7" stroke-width="4"/>
      <text x="470" y="337" text-anchor="middle" font-family="Segoe UI, Arial" font-size="17" font-weight="900" fill="#78350f">Rs 10B</text>
    </svg>
  `,
  youthLoan: `
    <svg viewBox="0 0 560 440" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
      <defs>
        <linearGradient id="ylAwning" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#38bdf8"/><stop offset="1" stop-color="#0284c7"/>
        </linearGradient>
        <linearGradient id="ylArrow" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stop-color="#22c55e"/><stop offset="1" stop-color="#86efac"/>
        </linearGradient>
      </defs>
      <!-- storefront -->
      <rect x="60" y="120" width="220" height="230" rx="14" fill="#1e293b"/>
      <path d="M48 120 L60 72 L280 72 L292 120 Z" fill="url(#ylAwning)"/>
      <path d="M74 96 L92 120 M120 96 L120 120 M168 96 L168 120 M216 96 L244 120" stroke="#082f49" stroke-width="3"/>
      <rect x="96" y="180" width="148" height="170" rx="8" fill="#0ea5e9" opacity="0.85"/>
      <rect x="150" y="180" width="40" height="170" fill="#082f49" opacity="0.6"/>
      <text x="170" y="330" text-anchor="middle" font-family="Segoe UI, Arial" font-size="22" font-weight="900" fill="#e2e8f0">SHOP</text>
      <circle cx="120" cy="210" r="6" fill="#fbbf24"/><circle cx="120" cy="260" r="6" fill="#fbbf24"/>
      <!-- entrepreneur -->
      <circle cx="360" cy="140" r="34" fill="#f1f5f9"/>
      <path d="M318 350 Q360 250 402 350 Z" fill="#38bdf8"/>
      <rect x="352" y="60" width="16" height="28" rx="4" fill="#334155"/>
      <!-- growth arrow -->
      <path d="M420 330 L496 250" stroke="url(#ylArrow)" stroke-width="14" stroke-linecap="round"/>
      <path d="M482 258 L500 246 L470 240" stroke="#22c55e" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <text x="486" y="236" text-anchor="middle" font-family="Segoe UI, Arial" font-size="20" font-weight="900" fill="#e2e8f0">Rs 7.5M</text>
      <!-- tier chips -->
      <rect x="52" y="392" width="72" height="36" rx="10" fill="#22c55e"/><text x="88" y="416" text-anchor="middle" font-family="Segoe UI, Arial" font-size="18" font-weight="900" fill="#052e16">0%</text>
      <rect x="134" y="392" width="72" height="36" rx="10" fill="#f59e0b"/><text x="170" y="416" text-anchor="middle" font-family="Segoe UI, Arial" font-size="18" font-weight="900" fill="#052e16">5%</text>
      <rect x="216" y="392" width="72" height="36" rx="10" fill="#ef4444"/><text x="252" y="416" text-anchor="middle" font-family="Segoe UI, Arial" font-size="18" font-weight="900" fill="#ffffff">7%</text>
      <text x="340" y="416" font-family="Segoe UI, Arial" font-size="19" font-weight="800" fill="#94a3b8">3 Markup Tiers</text>
    </svg>
  `,
  ehsaas: `
    <svg viewBox="0 0 560 440" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
      <defs>
        <linearGradient id="ehLoan" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#34d399"/><stop offset="1" stop-color="#047857"/>
        </linearGradient>
        <linearGradient id="ehWallet" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#5eead4"/><stop offset="1" stop-color="#0f766e"/>
        </linearGradient>
      </defs>
      <!-- left: loan notes -->
      <rect x="30" y="70" width="210" height="300" rx="16" fill="#0f172a" stroke="#34d399" stroke-width="2"/>
      <text x="135" y="112" text-anchor="middle" font-family="Segoe UI, Arial" font-size="19" font-weight="800" fill="#34d399">INTEREST-FREE LOAN</text>
      <rect x="62" y="140" width="146" height="72" rx="10" fill="url(#ehLoan)"/>
      <text x="135" y="168" text-anchor="middle" font-family="Segoe UI, Arial" font-size="20" font-weight="900" fill="#052e16">Rs 20,000</text>
      <text x="135" y="196" text-anchor="middle" font-family="Segoe UI, Arial" font-size="15" font-weight="800" fill="#052e16">to Rs 75,000</text>
      <rect x="62" y="228" width="146" height="44" rx="10" fill="#134e4a"/>
      <text x="135" y="256" text-anchor="middle" font-family="Segoe UI, Arial" font-size="17" font-weight="900" fill="#5eead4">0% Markup</text>
      <rect x="62" y="288" width="146" height="44" rx="10" fill="#134e4a"/>
      <text x="135" y="316" text-anchor="middle" font-family="Segoe UI, Arial" font-size="15" font-weight="800" fill="#94a3b8">PPAF & Akhuwat</text>
      <!-- VS badge -->
      <circle cx="280" cy="220" r="34" fill="#fbbf24"/>
      <text x="280" y="228" text-anchor="middle" font-family="Segoe UI, Arial" font-size="20" font-weight="900" fill="#78350f">VS</text>
      <!-- right: wallet phone -->
      <rect x="320" y="70" width="210" height="300" rx="16" fill="#0f172a" stroke="#5eead4" stroke-width="2"/>
      <text x="425" y="112" text-anchor="middle" font-family="Segoe UI, Arial" font-size="19" font-weight="800" fill="#5eead4">SAVING WALLET</text>
      <rect x="352" y="140" width="146" height="72" rx="10" fill="url(#ehWallet)"/>
      <text x="425" y="168" text-anchor="middle" font-family="Segoe UI, Arial" font-size="18" font-weight="900" fill="#022c22">Zero-Balance</text>
      <text x="425" y="196" text-anchor="middle" font-family="Segoe UI, Arial" font-size="15" font-weight="800" fill="#022c22">Digital Account</text>
      <rect x="352" y="228" width="146" height="44" rx="10" fill="#134e4a"/>
      <text x="425" y="256" text-anchor="middle" font-family="Segoe UI, Arial" font-size="17" font-weight="900" fill="#5eead4">Safe Stipend</text>
      <rect x="352" y="288" width="146" height="44" rx="10" fill="#134e4a"/>
      <text x="425" y="316" text-anchor="middle" font-family="Segoe UI, Arial" font-size="15" font-weight="800" fill="#94a3b8">No Debt Burden</text>
    </svg>
  `,
  bisp: `
    <svg viewBox="0 0 560 440" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
      <defs>
        <linearGradient id="bpBank" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#38bdf8"/><stop offset="1" stop-color="#0369a1"/>
        </linearGradient>
        <linearGradient id="bpCard" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#0ea5e9"/><stop offset="1" stop-color="#0c4a6e"/>
        </linearGradient>
      </defs>
      <!-- cash camp (crossed) -->
      <path d="M40 130 L120 60 L200 130 Z" fill="#475569"/>
      <rect x="44" y="130" width="152" height="150" fill="#334155"/>
      <line x1="54" y1="70" x2="186" y2="220" stroke="#ef4444" stroke-width="8" stroke-linecap="round"/>
      <text x="120" y="322" text-anchor="middle" font-family="Segoe UI, Arial" font-size="16" font-weight="800" fill="#94a3b8">Cash Camps</text>
      <!-- arrow -->
      <path d="M230 210 L300 210" stroke="#22c55e" stroke-width="6" stroke-linecap="round"/>
      <path d="M288 196 L302 210 L288 224" stroke="#22c55e" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <!-- bank -->
      <rect x="330" y="130" width="150" height="190" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
      <path d="M330 130 L405 70 L480 130 Z" fill="url(#bpBank)"/>
      <text x="405" y="180" text-anchor="middle" font-family="Segoe UI, Arial" font-size="20" font-weight="900" fill="#ffffff">BANK</text>
      <rect x="348" y="200" width="114" height="34" rx="8" fill="#075985"/>
      <text x="405" y="223" text-anchor="middle" font-family="Segoe UI, Arial" font-size="15" font-weight="800" fill="#e0f2fe">Direct Transfer</text>
      <!-- card + sms + biometric -->
      <rect x="330" y="252" width="150" height="62" rx="10" fill="url(#bpCard)"/>
      <text x="405" y="280" text-anchor="middle" font-family="Segoe UI, Arial" font-size="14" font-weight="900" fill="#ffffff">BISP Sahulat</text>
      <text x="405" y="300" text-anchor="middle" font-family="Segoe UI, Arial" font-size="13" font-weight="800" fill="#bae6fd">Account</text>
      <!-- fingerprint -->
      <circle cx="70" cy="380" r="26" stroke="#5eead4" stroke-width="5" fill="none"/>
      <circle cx="70" cy="380" r="14" stroke="#5eead4" stroke-width="5" fill="none"/>
      <circle cx="70" cy="380" r="4" fill="#5eead4"/>
      <text x="70" y="424" text-anchor="middle" font-family="Segoe UI, Arial" font-size="14" font-weight="800" fill="#94a3b8">Biometric</text>
      <!-- sms -->
      <rect x="150" y="354" width="150" height="52" rx="26" fill="#22c55e"/>
      <text x="225" y="385" text-anchor="middle" font-family="Segoe UI, Arial" font-size="16" font-weight="900" fill="#052e16">8171 SMS OK</text>
    </svg>
  `
};

const images = [
  {
    filename: 'federal-contributory-pension-scheme.jpg',
    theme: 'linear-gradient(135deg, #0f172a 0%, #123a34 55%, #0b3a2e 100%)',
    accent: '#34d399',
    accentSoft: '#6ee7b7',
    art: SVGS.pension,
    badgeGov: 'Ministry of Finance',
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
    theme: 'linear-gradient(135deg, #0f172a 0%, #0c4a6e 55%, #082f49 100%)',
    accent: '#38bdf8',
    accentSoft: '#7dd3fc',
    art: SVGS.youthLoan,
    badgeGov: "PM's Youth Business & Agriculture Loan",
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
    theme: 'linear-gradient(135deg, #042f2e 0%, #064e3b 55%, #022c22 100%)',
    accent: '#5eead4',
    accentSoft: '#99f6e4',
    art: SVGS.ehsaas,
    badgeGov: 'Ehsaas • PPAF & Akhuwat',
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
    theme: 'linear-gradient(135deg, #082f49 0%, #083344 55%, #02222e 100%)',
    accent: '#38bdf8',
    accentSoft: '#7dd3fc',
    art: SVGS.bisp,
    badgeGov: 'BISP • Direct Bank Transfer',
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

function buildHtml(img) {
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
  console.log('Rendering 4 original scheme-specific editorial illustrations...');
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage({ viewport: { width: 1200, height: 675 } });

  for (const img of images) {
    await page.setContent(buildHtml(img), { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(250);

    const dest = path.resolve('public/images', img.filename);
    await page.screenshot({ path: dest, type: 'jpeg', quality: 92 });
    console.log('Saved: ' + dest);

    const outDir = path.resolve('out/images');
    if (fs.existsSync(outDir)) {
      fs.copyFileSync(dest, path.join(outDir, img.filename));
      console.log('Copied to out/images: ' + img.filename);
    }
  }

  await browser.close();
  console.log('Done.');
}

render().catch((err) => {
  console.error(err);
  process.exit(1);
});
