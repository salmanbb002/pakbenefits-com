import { chromium } from 'playwright-core';
import path from 'path';

// Renders topic-relevant, unique electric-scooty editorial banners for the
// CM Punjab Electric Bike Scheme page (hero + the 5 "Related guides" cards).
// Every image uses a custom inline SVG electric scooty so it is directly
// scheme-relevant and never a generic placeholder.

function scootySvg({ accent, hub = '#0b1220', rider = false, emblem = '' }) {
  return `
  <svg viewBox="0 0 520 360" width="520" height="360" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <linearGradient id="bodyGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${accent}" />
        <stop offset="1" stop-color="${hub}" />
      </linearGradient>
    </defs>

    <!-- ground shadows -->
    <ellipse cx="150" cy="302" rx="60" ry="12" fill="rgba(0,0,0,0.20)"/>
    <ellipse cx="380" cy="302" rx="60" ry="12" fill="rgba(0,0,0,0.20)"/>

    <!-- rear wheel -->
    <circle cx="150" cy="262" r="48" fill="#0b1220"/>
    <circle cx="150" cy="262" r="31" fill="#1e293b"/>
    <circle cx="150" cy="262" r="19" fill="#cbd5e1"/>
    <circle cx="150" cy="262" r="8" fill="${accent}"/>

    <!-- front wheel -->
    <circle cx="380" cy="262" r="48" fill="#0b1220"/>
    <circle cx="380" cy="262" r="31" fill="#1e293b"/>
    <circle cx="380" cy="262" r="19" fill="#cbd5e1"/>
    <circle cx="380" cy="262" r="8" fill="${accent}"/>

    <!-- rear fender -->
    <path d="M108 218 A 50 50 0 0 1 192 218" stroke="url(#bodyGrad)" stroke-width="13" fill="none" stroke-linecap="round"/>

    <!-- floorboard -->
    <rect x="168" y="220" width="192" height="15" rx="7" fill="#334155"/>

    <!-- body shell (battery / motor compartment) -->
    <path d="M114 152 Q114 108 162 108 L258 108 Q282 108 291 129 L301 160 Q304 170 295 174 L172 174 Q142 174 133 160 Z" fill="url(#bodyGrad)"/>
    <!-- battery cell -->
    <rect x="168" y="120" width="92" height="34" rx="10" fill="rgba(255,255,255,0.20)"/>
    <!-- lightning bolt -->
    <path d="M210 126 L199 140 L207 140 L201 154 L216 138 L208 138 Z" fill="#ffffff"/>

    <!-- seat -->
    <rect x="98" y="92" width="122" height="22" rx="11" fill="#0f172a"/>
    <!-- taillight -->
    <rect x="100" y="98" width="15" height="10" rx="4" fill="#f43f5e"/>

    <!-- leg shield -->
    <path d="M272 152 L272 92 Q272 58 302 58 L340 58 Q354 58 354 76 L354 152 Z" fill="url(#bodyGrad)"/>
    <!-- headlight -->
    <circle cx="337" cy="96" r="12" fill="#fef9c3"/>
    <circle cx="337" cy="96" r="7" fill="#ffffff"/>

    <!-- front fender -->
    <path d="M330 216 A 52 52 0 0 1 430 216" stroke="url(#bodyGrad)" stroke-width="13" fill="none" stroke-linecap="round"/>

    <!-- handlebar -->
    <path d="M260 54 Q300 42 344 54" stroke="#0f172a" stroke-width="10" stroke-linecap="round" fill="none"/>
    <rect x="332" y="46" width="20" height="15" rx="7" fill="#0f172a"/>
    <!-- mirror -->
    <line x1="272" y1="54" x2="265" y2="30" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>
    <circle cx="262" cy="27" r="8" fill="#cbd5e1"/>

    ${rider ? `
    <!-- rider silhouette -->
    <g fill="#1e293b">
      <circle cx="196" cy="62" r="17"/>
      <path d="M184 74 Q150 100 150 122 L176 128 L198 94 Z"/>
      <path d="M188 84 L324 56" stroke="#1e293b" stroke-width="13" stroke-linecap="round" fill="none"/>
      <path d="M158 118 L210 152 L244 212" stroke="#1e293b" stroke-width="16" stroke-linecap="round" fill="none"/>
      <circle cx="244" cy="212" r="9"/>
    </g>` : ''}

    ${emblem}
  </svg>`;
}

const checkEmblem = (bg, fg = '#0f172a') => `
  <g>
    <circle cx="70" cy="70" r="34" fill="${bg}"/>
    <path d="M55 70 L66 81 L86 57" stroke="${fg}" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  </g>`;

const phoneEmblem = (bg) => `
  <g>
    <circle cx="70" cy="70" r="36" fill="${bg}"/>
    <rect x="58" y="52" width="24" height="36" rx="5" fill="#ffffff"/>
    <rect x="63" y="58" width="14" height="20" rx="2" fill="#0f172a"/>
    <circle cx="70" cy="82" r="2" fill="#0f172a"/>
  </g>`;

const magnifierEmblem = (bg) => `
  <g>
    <circle cx="70" cy="70" r="36" fill="${bg}"/>
    <circle cx="64" cy="64" r="16" fill="none" stroke="#ffffff" stroke-width="7"/>
    <line x1="76" y1="76" x2="88" y2="88" stroke="#ffffff" stroke-width="7" stroke-linecap="round"/>
  </g>`;

const heartEmblem = (bg) => `
  <g>
    <circle cx="70" cy="70" r="36" fill="${bg}"/>
    <path d="M70 84 C 56 74 48 66 48 57 C 48 50 53 45 59 45 C 63 45 66 47 70 51 C 74 47 77 45 81 45 C 87 45 92 50 92 57 C 92 66 84 74 70 84 Z" fill="#ffffff"/>
  </g>`;

const fuelEmblem = (bg) => `
  <g>
    <circle cx="70" cy="70" r="36" fill="${bg}"/>
    <rect x="52" y="46" width="30" height="34" rx="5" fill="#ffffff"/>
    <rect x="58" y="52" width="18" height="22" rx="2" fill="#0f172a"/>
    <rect x="80" y="52" width="8" height="14" rx="2" fill="#0f172a"/>
    <path d="M70 82 L62 62 L70 66 L66 50 L82 72 L70 68 Z" fill="#f59e0b"/>
  </g>`;

const banners = [
  {
    filename: 'cm-punjab-electric-bike-scheme.jpg',
    theme: 'linear-gradient(135deg, #0b2a6b 0%, #1d4ed8 45%, #0f172a 100%)',
    glow: 'rgba(59, 130, 246, 0.35)',
    badgeColor: '#38bdf8',
    badgeText: 'Chief Minister Youth Initiative',
    yearBadge: 'Phase 2: 100k Scooties',
    title: 'CM Punjab Electric Bike Scheme 2026',
    desc: 'Apply online for a PKR 199,000 electric scooty with a Rs 90,000 Punjab subsidy, 0% interest and ~Rs 3,000 monthly installments.',
    stats: [
      { label: 'Scooty Price', val: 'PKR 199,000' },
      { label: 'Govt Subsidy', val: 'Rs 90,000 Grant' },
      { label: 'Monthly Installment', val: '~Rs 3,000 (0%)' },
      { label: 'Apply By', val: 'October 4, 2026' },
    ],
    accent: '#3b82f6',
    rider: true,
    emblem: '',
  },
  {
    filename: 'cm-punjab-e-bike-scheme-updates.jpg',
    theme: 'linear-gradient(135deg, #064e3b 0%, #059669 45%, #0f172a 100%)',
    glow: 'rgba(16, 185, 129, 0.35)',
    badgeColor: '#34d399',
    badgeText: 'Phase 2 Rollout',
    yearBadge: 'Balloting & BOP Plan',
    title: 'CM Punjab E-Bike Scheme Updates 2026',
    desc: 'Verified Phase 2 updates: 100,000 e-bike quota, Rs 90,000 subsidy, zero down payment and the Rs 3,028 Bank of Punjab installment.',
    stats: [
      { label: 'E-Bike Quota', val: '100,000 Units' },
      { label: 'Down Payment', val: 'Zero' },
      { label: 'BOP Installment', val: 'Rs 3,028/month' },
      { label: 'Portal', val: 'bikes.punjab.gov.pk' },
    ],
    accent: '#10b981',
    rider: false,
    emblem: checkEmblem('#22c55e'),
  },
  {
    filename: 'pave-electric-bike-scheme.jpg',
    theme: 'linear-gradient(135deg, #0e2f4a 0%, #0ea5e9 45%, #0f172a 100%)',
    glow: 'rgba(14, 165, 233, 0.35)',
    badgeColor: '#7dd3fc',
    badgeText: 'Federal EV Programme',
    yearBadge: 'PAVE 2026',
    title: 'PAVE Scheme 2026 Electric Bike Subsidy',
    desc: 'Up to Rs 80,000 subsidy on electric bikes and Rs 400,000 on rickshaws. Apply online at pave.gov.pk on a first-come, first-served basis.',
    stats: [
      { label: 'E-Bike Subsidy', val: 'Up to Rs 80,000' },
      { label: 'Rickshaw Subsidy', val: 'Rs 400,000' },
      { label: 'Apply At', val: 'pave.gov.pk' },
      { label: 'Basis', val: 'First-come, first-served' },
    ],
    accent: '#0ea5e9',
    rider: false,
    emblem: phoneEmblem('#0284c7'),
  },
  {
    filename: 'e-bike-guide.jpg',
    theme: 'linear-gradient(135deg, #1e1b4b 0%, #6d28d9 45%, #0f172a 100%)',
    glow: 'rgba(124, 58, 237, 0.35)',
    badgeColor: '#c4b5fd',
    badgeText: 'Independent Guide',
    yearBadge: 'Eligibility & Costs',
    title: 'Electric Bike Scheme: Eligibility & Costs',
    desc: 'A safe method for comparing electric bike eligibility, financing terms, and application details before you respond to any notice.',
    stats: [
      { label: 'Check', val: 'Eligibility' },
      { label: 'Compare', val: 'Financing Terms' },
      { label: 'Confirm', val: 'Application Notice' },
      { label: 'Avoid', val: 'Unofficial Forms' },
    ],
    accent: '#8b5cf6',
    rider: false,
    emblem: magnifierEmblem('#7c3aed'),
  },
  {
    filename: 'pink-scooty-scheme-2026.jpg',
    theme: 'linear-gradient(135deg, #500724 0%, #db2777 45%, #0f172a 100%)',
    glow: 'rgba(236, 72, 153, 0.35)',
    badgeColor: '#f9a8d4',
    badgeText: 'Women Mobility Initiative',
    yearBadge: 'Pink Scooty 2026',
    title: 'Pink Scooty Scheme 2026',
    desc: 'Subsidised electric scooties for female students and working women in Punjab (bikes.punjab.gov.pk) and Sindh (smta.gos.pk).',
    stats: [
      { label: 'For', val: 'Female Students & Workers' },
      { label: 'Markup', val: '0% Interest' },
      { label: 'Punjab Portal', val: 'bikes.punjab.gov.pk' },
      { label: 'Sindh Portal', val: 'smta.gos.pk' },
    ],
    accent: '#ec4899',
    rider: false,
    emblem: heartEmblem('#f472b6'),
  },
  {
    filename: 'transport-fuel-relief-options.jpg',
    theme: 'linear-gradient(135deg, #431407 0%, #f59e0b 45%, #0f172a 100%)',
    glow: 'rgba(245, 158, 11, 0.35)',
    badgeColor: '#fcd34d',
    badgeText: '2026 Side-by-Side Comparison',
    yearBadge: 'Transport & Fuel Relief',
    title: 'Transport & Fuel Relief Options 2026',
    desc: 'Compare the PM Rs 100/litre petrol discount, provincial biker subsidies, free public transport and electric bike schemes at a glance.',
    stats: [
      { label: 'Petrol Discount', val: 'Rs 100/Litre' },
      { label: 'Bike Fuel Quota', val: '20L / Month' },
      { label: 'E-Bike Subsidy', val: 'Rs 90,000' },
      { label: 'Fit For', val: 'Bikes, Cars & EVs' },
    ],
    accent: '#f59e0b',
    rider: false,
    emblem: fuelEmblem('#fbbf24'),
  },
];

async function render() {
  console.log('Rendering electric-scooty topic-relevant editorial images...');
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage({ viewport: { width: 1200, height: 675 } });

  for (const b of banners) {
    const scooter = scootySvg({ accent: b.accent, rider: b.rider, emblem: b.emblem });

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
          position: relative;
          overflow: hidden;
        }
        .bg-circle1 {
          position: absolute;
          width: 640px;
          height: 640px;
          border-radius: 50%;
          background: radial-gradient(circle, ${b.glow} 0%, rgba(0,0,0,0) 70%);
          top: -200px;
          right: -120px;
        }
        .bg-circle2 {
          position: absolute;
          width: 460px;
          height: 460px;
          border-radius: 50%;
          background: radial-gradient(circle, ${b.glow} 0%, rgba(0,0,0,0) 70%);
          bottom: -160px;
          left: -80px;
        }
        .content-left {
          position: absolute;
          left: 64px;
          top: 0;
          bottom: 0;
          width: 660px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 54px 0;
          z-index: 3;
        }
        .header-row { display: flex; align-items: center; gap: 14px; }
        .brand-badge {
          display: inline-flex;
          align-items: center;
          gap: 11px;
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(12px);
          padding: 10px 20px;
          border-radius: 9999px;
          border: 1px solid rgba(255,255,255,0.25);
          font-weight: 700;
          font-size: 15px;
          letter-spacing: 0.5px;
        }
        .dot { width: 12px; height: 12px; border-radius: 50%; background-color: ${b.badgeColor}; box-shadow: 0 0 12px ${b.badgeColor}; }
        .main-title {
          font-size: 46px;
          font-weight: 800;
          line-height: 1.14;
          letter-spacing: -1px;
          margin-bottom: 18px;
          text-shadow: 0 4px 20px rgba(0,0,0,0.5);
        }
        .main-desc { font-size: 20px; line-height: 1.45; color: #e2e8f0; font-weight: 400; max-width: 600px; }
        .footer-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
          background: rgba(15, 23, 42, 0.7);
          backdrop-filter: blur(16px);
          padding: 18px 22px;
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,0.15);
          max-width: 600px;
        }
        .stat-card { display: flex; flex-direction: column; gap: 3px; }
        .stat-label { font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #cbd5e1; font-weight: 600; }
        .stat-val { font-size: 19px; font-weight: 800; color: #ffffff; }
        .scooter-wrap {
          position: absolute;
          right: 30px;
          bottom: 22px;
          width: 500px;
          z-index: 2;
        }
        .scooter-wrap svg { width: 100%; height: auto; display: block; filter: drop-shadow(0 18px 30px rgba(0,0,0,0.45)); }
        .year-badge {
          position: absolute;
          top: 54px;
          right: 60px;
          z-index: 3;
          background: ${b.badgeColor};
          color: #0c2b57;
          font-weight: 800;
          font-size: 15px;
          padding: 9px 20px;
          border-radius: 12px;
          letter-spacing: 0.5px;
        }
      </style>
    </head>
    <body>
      <div class="bg-circle1"></div>
      <div class="bg-circle2"></div>
      <div class="year-badge">${b.yearBadge}</div>
      <div class="content-left">
        <div class="header-row">
          <div class="brand-badge"><span class="dot"></span><span>${b.badgeText}</span></div>
        </div>
        <div>
          <h1 class="main-title">${b.title}</h1>
          <p class="main-desc">${b.desc}</p>
        </div>
        <div class="footer-grid">
          ${b.stats.map((s) => `
            <div class="stat-card">
              <span class="stat-label">${s.label}</span>
              <span class="stat-val">${s.val}</span>
            </div>
          `).join('')}
        </div>
      </div>
      <div class="scooter-wrap">${scooter}</div>
    </body>
    </html>`;

    await page.setContent(html, { waitUntil: 'networkidle' });
    await page.waitForTimeout(150);
    const outPath = path.join(process.cwd(), 'public', 'images', b.filename);
    await page.screenshot({ path: outPath, type: 'jpeg', quality: 92 });
    console.log(`Saved ${outPath}`);
  }

  await browser.close();
  console.log('Done rendering electric-scooty topic-relevant images.');
}

render().catch((error) => { console.error(error); process.exit(1); });
