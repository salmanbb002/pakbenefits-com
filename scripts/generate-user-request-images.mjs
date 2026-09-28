import { chromium } from 'playwright-core';
import path from 'path';
import fs from 'fs';

async function generateImages() {
  console.log('Launching browser (msedge)...');
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage({
    viewport: { width: 1200, height: 675 }
  });

  const outDir = path.resolve('public/images');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }
  const staticOutDir = path.resolve('out/images');
  if (!fs.existsSync(staticOutDir)) {
    fs.mkdirSync(staticOutDir, { recursive: true });
  }

  // -------------------------------------------------------------
  // 1. Apna Khet Apna Rozgar Scheme 2026
  // -------------------------------------------------------------
  const apnaKhetHtml = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <style>
      * { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }
      body {
        width: 1200px;
        height: 675px;
        background: linear-gradient(135deg, #064e3b 0%, #047857 40%, #0f172a 100%);
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
        background: radial-gradient(circle, rgba(16, 185, 129, 0.28) 0%, rgba(0,0,0,0) 70%);
        top: -180px;
        right: -120px;
        pointer-events: none;
      }
      .bg-circle2 {
        position: absolute;
        width: 480px;
        height: 480px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(234, 179, 8, 0.18) 0%, rgba(0,0,0,0) 70%);
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
        color: #a7f3d0;
      }
      .brand-badge span.dot {
        width: 10px;
        height: 10px;
        background-color: #10b981;
        border-radius: 50%;
        box-shadow: 0 0 10px #10b981;
      }
      .year-badge {
        background: #f59e0b;
        color: #451a03;
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
        color: #34d399;
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
        border: 1px solid rgba(52, 211, 153, 0.35);
        padding: 8px 14px;
        border-radius: 8px;
        font-size: 14px;
        font-weight: 600;
        color: #f1f5f9;
      }
      .card-mockup {
        background: linear-gradient(135deg, #065f46 0%, #047857 50%, #022c22 100%);
        border: 2px solid rgba(52, 211, 153, 0.55);
        border-radius: 20px;
        padding: 26px;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.45);
        position: relative;
      }
      .card-mockup .tag {
        display: inline-block;
        background: #f59e0b;
        color: #451a03;
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
        color: #a7f3d0;
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
        font-size: 26px;
        font-weight: 900;
        color: #fef08a;
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
        color: #fbbf24;
      }
    </style>
  </head>
  <body>
    <div class="bg-circle1"></div>
    <div class="bg-circle2"></div>

    <div class="header-row">
      <div class="brand-badge">
        <span class="dot"></span>
        Govt of Punjab • Landless Farmers Agriculture Scheme
      </div>
      <div class="year-badge">UPDATED 2026</div>
    </div>

    <div class="main-content">
      <div class="title-area">
        <h1>Apna Khet Apna Rozgar <span class="highlight">Scheme Apply Online 2026</span></h1>
        <p>Surveyed agricultural state land allocation for landless farmers in Punjab. Get 2 to 5 acres state farmland on 10-year lease with cultivation grant.</p>
        <div class="pill-grid">
          <div class="pill">🌾 2 - 5 Acres Cultivable Land</div>
          <div class="pill">📜 10-Year Lease (Rs. 100/Yr)</div>
          <div class="pill">💰 Rs. 200,000 Cultivation Grant</div>
          <div class="pill">👨‍🌾 Landless Farmers (Aged 18-50)</div>
        </div>
      </div>

      <div class="card-mockup">
        <div class="tag">State Land Allotment</div>
        <div class="card-title">APNA KHET APNA ROZGAR</div>
        <div class="card-subtitle">PULSE Punjab Land Survey Portal</div>
        <div class="grant-box">
          <div class="grant-amount">2 - 5 Acres + Rs. 200k</div>
          <div class="grant-label">10-Year Lease Fee: Rs. 100 / Year • Zero Interest Support</div>
        </div>
        <div class="card-footer-note">Official online registration by CNIC for landless rural farmers across all Punjab districts.</div>
      </div>
    </div>

    <div class="footer-row">
      <div class="portal-info">Official Portal: <strong>akar.pulse.gop.pk</strong></div>
      <div class="verification-step">⚡ Verified CNIC Online Registration & Computerized Ballot</div>
    </div>
  </body>
  </html>
  `;
  await page.setContent(apnaKhetHtml);
  await page.screenshot({ path: path.join(outDir, 'apna-khet-apna-rozgar-scheme.jpg'), type: 'jpeg', quality: 90 });
  await page.screenshot({ path: path.join(staticOutDir, 'apna-khet-apna-rozgar-scheme.jpg'), type: 'jpeg', quality: 90 });
  console.log('✅ Generated: apna-khet-apna-rozgar-scheme.jpg');

  // -------------------------------------------------------------
  // 2. Apni Zameen Apna Ghar Balloting Result 2026
  // -------------------------------------------------------------
  const zameenGharHtml = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <style>
      * { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }
      body {
        width: 1200px;
        height: 675px;
        background: linear-gradient(135deg, #1e3a8a 0%, #1e1b4b 45%, #0f172a 100%);
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
        background: radial-gradient(circle, rgba(59, 130, 246, 0.28) 0%, rgba(0,0,0,0) 70%);
        top: -180px;
        right: -120px;
        pointer-events: none;
      }
      .bg-circle2 {
        position: absolute;
        width: 480px;
        height: 480px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(16, 185, 129, 0.18) 0%, rgba(0,0,0,0) 70%);
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
        color: #93c5fd;
      }
      .brand-badge span.dot {
        width: 10px;
        height: 10px;
        background-color: #3b82f6;
        border-radius: 50%;
        box-shadow: 0 0 10px #3b82f6;
      }
      .year-badge {
        background: #10b981;
        color: #064e3b;
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
        color: #60a5fa;
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
        border: 1px solid rgba(96, 165, 250, 0.35);
        padding: 8px 14px;
        border-radius: 8px;
        font-size: 14px;
        font-weight: 600;
        color: #f1f5f9;
      }
      .card-mockup {
        background: linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 50%, #0f172a 100%);
        border: 2px solid rgba(96, 165, 250, 0.55);
        border-radius: 20px;
        padding: 26px;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.45);
        position: relative;
      }
      .card-mockup .tag {
        display: inline-block;
        background: #3b82f6;
        color: #ffffff;
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
        color: #93c5fd;
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
        font-size: 26px;
        font-weight: 900;
        color: #fde047;
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
        color: #facc15;
      }
    </style>
  </head>
  <body>
    <div class="bg-circle1"></div>
    <div class="bg-circle2"></div>

    <div class="header-row">
      <div class="brand-badge">
        <span class="dot"></span>
        Govt of Punjab • PHATA Housing Scheme
      </div>
      <div class="year-badge">BALLOTING 2026</div>
    </div>

    <div class="main-content">
      <div class="title-area">
        <h1>Apni Zameen Apna Ghar <span class="highlight">Balloting Result 2026</span></h1>
        <p>Check computerised balloting status online by CNIC. Complete guide on 3-Marla plot allocation winner list, Phase 1 winner status, and plot rules.</p>
        <div class="pill-grid">
          <div class="pill">🏡 3-Marla Residential Plots</div>
          <div class="pill">🔍 Check Result by CNIC Online</div>
          <div class="pill">📜 Phase 1 Allotment List</div>
          <div class="pill">🚫 5-Year Ownership Sale Ban</div>
        </div>
      </div>

      <div class="card-mockup">
        <div class="tag">Computerized Ballot</div>
        <div class="card-title">APNI ZAMEEN APNA GHAR</div>
        <div class="card-subtitle">PHATA Plot Allocation Portal</div>
        <div class="grant-box">
          <div class="grant-amount">3-Marla Free Plot</div>
          <div class="grant-label">Instant Winner Status & CNIC Online Verification</div>
        </div>
        <div class="card-footer-note">Punjab Housing and Town Planning Agency (PHATA) official balloting results.</div>
      </div>
    </div>

    <div class="footer-row">
      <div class="portal-info">Official Portal: <strong>azag.punjab.gov.pk</strong></div>
      <div class="verification-step">⚡ Enter 13-Digit CNIC for Instant Balloting Result</div>
    </div>
  </body>
  </html>
  `;
  await page.setContent(zameenGharHtml);
  await page.screenshot({ path: path.join(outDir, 'apni-zameen-apna-ghar-balloting-result-2026.jpg'), type: 'jpeg', quality: 90 });
  await page.screenshot({ path: path.join(staticOutDir, 'apni-zameen-apna-ghar-balloting-result-2026.jpg'), type: 'jpeg', quality: 90 });
  console.log('✅ Generated: apni-zameen-apna-ghar-balloting-result-2026.jpg');

  // -------------------------------------------------------------
  // 3. Pink Scooty Scheme 2026
  // -------------------------------------------------------------
  const pinkScootyHtml = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <style>
      * { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }
      body {
        width: 1200px;
        height: 675px;
        background: linear-gradient(135deg, #831843 0%, #9d174d 45%, #0f172a 100%);
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
        background: radial-gradient(circle, rgba(244, 114, 182, 0.28) 0%, rgba(0,0,0,0) 70%);
        top: -180px;
        right: -120px;
        pointer-events: none;
      }
      .bg-circle2 {
        position: absolute;
        width: 480px;
        height: 480px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(236, 72, 153, 0.2) 0%, rgba(0,0,0,0) 70%);
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
        color: #fbcfe8;
      }
      .brand-badge span.dot {
        width: 10px;
        height: 10px;
        background-color: #f472b6;
        border-radius: 50%;
        box-shadow: 0 0 10px #f472b6;
      }
      .year-badge {
        background: #f43f5e;
        color: #ffffff;
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
        color: #f472b6;
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
        border: 1px solid rgba(244, 114, 182, 0.35);
        padding: 8px 14px;
        border-radius: 8px;
        font-size: 14px;
        font-weight: 600;
        color: #f1f5f9;
      }
      .card-mockup {
        background: linear-gradient(135deg, #831843 0%, #be185d 50%, #0f172a 100%);
        border: 2px solid rgba(244, 114, 182, 0.55);
        border-radius: 20px;
        padding: 26px;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.45);
        position: relative;
      }
      .card-mockup .tag {
        display: inline-block;
        background: #f472b6;
        color: #831843;
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
        color: #fbcfe8;
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
        font-size: 26px;
        font-weight: 900;
        color: #fef08a;
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
        color: #fbbf24;
      }
    </style>
  </head>
  <body>
    <div class="bg-circle1"></div>
    <div class="bg-circle2"></div>

    <div class="header-row">
      <div class="brand-badge">
        <span class="dot"></span>
        Govt of Punjab & Sindh • Women Mobility Scheme
      </div>
      <div class="year-badge">GUIDE 2026</div>
    </div>

    <div class="main-content">
      <div class="title-area">
        <h1>Pink Scooty Scheme 2026 <span class="highlight">Registration & Balloting</span></h1>
        <p>Complete guide to Pink Scooty Scheme in Punjab (bikes.punjab.gov.pk) and Sindh (smta.gos.pk). Registration steps, eligibility, 0% markup terms, and winner list.</p>
        <div class="pill-grid">
          <div class="pill">🛵 Electric & Petrol Scooties</div>
          <div class="pill">👩‍🎓 Female Students & Working Women</div>
          <div class="pill">💳 0% Interest Installment Plan</div>
          <div class="pill">🎲 Computerized Ballot Result</div>
        </div>
      </div>

      <div class="card-mockup">
        <div class="tag">Women Empowerment</div>
        <div class="card-title">PINK SCOOTY SCHEME</div>
        <div class="card-subtitle">Punjab & Sindh Transport Portals</div>
        <div class="grant-box">
          <div class="grant-amount">0% Markup Lease</div>
          <div class="grant-label">Easy Monthly Installments & Govt Subsidy</div>
        </div>
        <div class="card-footer-note">Apply online at bikes.punjab.gov.pk or smta.gos.pk using CNIC and driving license/permit.</div>
      </div>
    </div>

    <div class="footer-row">
      <div class="portal-info">Official Portals: <strong>bikes.punjab.gov.pk / smta.gos.pk</strong></div>
      <div class="verification-step">⚡ Online Portal Registration & Balloting Status</div>
    </div>
  </body>
  </html>
  `;
  await page.setContent(pinkScootyHtml);
  await page.screenshot({ path: path.join(outDir, 'pink-scooty-scheme-2026.jpg'), type: 'jpeg', quality: 90 });
  await page.screenshot({ path: path.join(staticOutDir, 'pink-scooty-scheme-2026.jpg'), type: 'jpeg', quality: 90 });
  console.log('✅ Generated: pink-scooty-scheme-2026.jpg');

  // -------------------------------------------------------------
  // 4. Apni Chhat Apna Ghar Loan Installment Tracking
  // -------------------------------------------------------------
  const chhatGharLoanHtml = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <style>
      * { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }
      body {
        width: 1200px;
        height: 675px;
        background: linear-gradient(135deg, #065f46 0%, #047857 45%, #0f172a 100%);
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
        background: radial-gradient(circle, rgba(16, 185, 129, 0.28) 0%, rgba(0,0,0,0) 70%);
        top: -180px;
        right: -120px;
        pointer-events: none;
      }
      .bg-circle2 {
        position: absolute;
        width: 480px;
        height: 480px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(56, 189, 248, 0.18) 0%, rgba(0,0,0,0) 70%);
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
        color: #a7f3d0;
      }
      .brand-badge span.dot {
        width: 10px;
        height: 10px;
        background-color: #10b981;
        border-radius: 50%;
        box-shadow: 0 0 10px #10b981;
      }
      .year-badge {
        background: #38bdf8;
        color: #0c4a6e;
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
        color: #34d399;
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
        border: 1px solid rgba(52, 211, 153, 0.35);
        padding: 8px 14px;
        border-radius: 8px;
        font-size: 14px;
        font-weight: 600;
        color: #f1f5f9;
      }
      .card-mockup {
        background: linear-gradient(135deg, #065f46 0%, #047857 50%, #0f172a 100%);
        border: 2px solid rgba(52, 211, 153, 0.55);
        border-radius: 20px;
        padding: 26px;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.45);
        position: relative;
      }
      .card-mockup .tag {
        display: inline-block;
        background: #34d399;
        color: #064e3b;
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
        color: #a7f3d0;
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
        font-size: 26px;
        font-weight: 900;
        color: #fde047;
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
        color: #facc15;
      }
    </style>
  </head>
  <body>
    <div class="bg-circle1"></div>
    <div class="bg-circle2"></div>

    <div class="header-row">
      <div class="brand-badge">
        <span class="dot"></span>
        Govt of Punjab • PITB Housing Loan Portal
      </div>
      <div class="year-badge">TRACKING 2026</div>
    </div>

    <div class="main-content">
      <div class="title-area">
        <h1>Apni Chhat Apna Ghar Loan <span class="highlight">Instant Qist Tracking</span></h1>
        <p>PITB portal par 15 lakh bila-sood loan ki approval check karne aur pehli qist (installment) track karne ka mukammal step-by-step tariqa.</p>
        <div class="pill-grid">
          <div class="pill">🏠 Rs. 15 Lakh Interest-Free Loan</div>
          <div class="pill">📱 PITB Portal Live Tracking</div>
          <div class="pill">💵 1st Qist Payment Status</div>
          <div class="pill">🔑 CNIC Verification Online</div>
        </div>
      </div>

      <div class="card-mockup">
        <div class="tag">Bila-Sood Loan</div>
        <div class="card-title">APNI CHHAT APNA GHAR</div>
        <div class="card-subtitle">PITB Qist Tracking Portal</div>
        <div class="grant-box">
          <div class="grant-amount">Rs. 15,000,00 Loan</div>
          <div class="grant-label">Zero Interest • Easy Monthly Qist Breakdown</div>
        </div>
        <div class="card-footer-note">Track approval status and 1st installment release at acag.punjab.gov.pk.</div>
      </div>
    </div>

    <div class="footer-row">
      <div class="portal-info">Official Portal: <strong>acag.punjab.gov.pk</strong></div>
      <div class="verification-step">⚡ Check Qist Release Status by CNIC</div>
    </div>
  </body>
  </html>
  `;
  await page.setContent(chhatGharLoanHtml);
  await page.screenshot({ path: path.join(outDir, 'cm-punjab-apni-chhat-apna-ghar-loan.jpg'), type: 'jpeg', quality: 90 });
  await page.screenshot({ path: path.join(staticOutDir, 'cm-punjab-apni-chhat-apna-ghar-loan.jpg'), type: 'jpeg', quality: 90 });
  console.log('✅ Generated: cm-punjab-apni-chhat-apna-ghar-loan.jpg');

  await browser.close();
  console.log('\n🎉 ALL 4 IMAGES GENERATED & SAVED SUCCESSFULLY!');
}

generateImages().catch(console.error);
