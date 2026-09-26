import { chromium } from 'playwright-core';
import path from 'path';

async function renderThreeEditorialImages() {
  console.log('Launching browser to render high-quality photo-editorial banners for 3 new blogs...');
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage({
    viewport: { width: 1200, height: 675 }
  });

  // 1. Taleemi Wazaif 70% Attendance Rule
  const taleemiHtml = `
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
        filter: brightness(0.6) contrast(1.1);
      }
      .gradient-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(180deg, rgba(30, 58, 138, 0.45) 0%, rgba(15, 23, 42, 0.88) 75%, rgba(15, 23, 42, 0.98) 100%);
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
        background: rgba(37, 99, 235, 0.9);
        color: #ffffff;
        font-size: 14px;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.75px;
        padding: 8px 18px;
        border-radius: 9999px;
        box-shadow: 0 4px 15px rgba(37, 99, 235, 0.35);
      }
      .badge-year {
        background: rgba(255, 255, 255, 0.15);
        backdrop-filter: blur(8px);
        border: 1px solid rgba(255, 255, 255, 0.3);
        color: #f8fafc;
        font-size: 14px;
        font-weight: 700;
        padding: 8px 16px;
        border-radius: 8px;
      }
      .middle-content {
        max-width: 880px;
      }
      .category-tag {
        color: #60a5fa;
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
        background: #60a5fa;
        border-radius: 50%;
      }
      h1 {
        font-size: 44px;
        line-height: 1.15;
        font-weight: 900;
        color: #ffffff;
        margin-bottom: 16px;
        text-shadow: 0 3px 12px rgba(0,0,0,0.6);
      }
      h1 span {
        color: #93c5fd;
      }
      p.sub-title {
        font-size: 20px;
        line-height: 1.4;
        color: #e2e8f0;
        margin-bottom: 24px;
        text-shadow: 0 2px 8px rgba(0,0,0,0.5);
      }
      .chips-row {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
      }
      .chip {
        background: rgba(15, 23, 42, 0.85);
        border: 1px solid rgba(96, 165, 250, 0.4);
        backdrop-filter: blur(6px);
        padding: 8px 18px;
        border-radius: 8px;
        font-size: 15px;
        font-weight: 600;
        color: #f8fafc;
      }
      .bottom-bar {
        border-top: 1px solid rgba(255, 255, 255, 0.18);
        padding-top: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 15px;
        color: #94a3b8;
      }
      .bottom-bar strong {
        color: #38bdf8;
      }
      .bottom-bar .alert-text {
        color: #facc15;
        font-weight: 700;
      }
    </style>
  </head>
  <body>
    <img class="bg-img" src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop" />
    <div class="gradient-overlay"></div>
    <div class="content-wrapper">
      <div class="top-badge-row">
        <div class="badge-gov">Benazir Income Support Programme • Taleemi Wazaif</div>
        <div class="badge-year">2026 COMPLIANCE GUIDE</div>
      </div>
      <div class="middle-content">
        <div class="category-tag">Education Stipends Compliance</div>
        <h1>BISP Taleemi Wazaif <span>70% Attendance Rule Verification</span></h1>
        <p class="sub-title">School Verification Slip Submission • Headmaster Endorsement • BISP Tehsil Office Blocked Stipend Restoration</p>
        <div class="chips-row">
          <div class="chip">📚 70% Minimum School Attendance</div>
          <div class="chip">🏫 Headmaster Verification Slip</div>
          <div class="chip">💵 Rs 1,500 – Rs 4,000 Stipend</div>
          <div class="chip">🏛️ BISP Tehsil Office Clearance</div>
        </div>
      </div>
      <div class="bottom-bar">
        <div>Official Status Portal: <strong>8171.bisp.gov.pk</strong></div>
        <div class="alert-text">⚡ Vacations & Official Holidays Excluded From Calculation</div>
      </div>
    </div>
  </body>
  </html>
  `;

  await page.setContent(taleemiHtml);
  await page.waitForTimeout(1000);
  await page.screenshot({ path: path.resolve('public/images/bisp-taleemi-wazaif-70-attendance-rule-verification.jpg'), type: 'jpeg', quality: 92 });
  console.log('Rendered photo-editorial: public/images/bisp-taleemi-wazaif-70-attendance-rule-verification.jpg');


  // 2. Benazir Mazdoor Card Sindh 2026
  const mazdoorHtml = `
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
        filter: brightness(0.6) contrast(1.1);
      }
      .gradient-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(180deg, rgba(124, 45, 18, 0.45) 0%, rgba(15, 23, 42, 0.88) 75%, rgba(15, 23, 42, 0.98) 100%);
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
        background: rgba(234, 88, 12, 0.9);
        color: #ffffff;
        font-size: 14px;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.75px;
        padding: 8px 18px;
        border-radius: 9999px;
        box-shadow: 0 4px 15px rgba(234, 88, 12, 0.35);
      }
      .badge-year {
        background: rgba(255, 255, 255, 0.15);
        backdrop-filter: blur(8px);
        border: 1px solid rgba(255, 255, 255, 0.3);
        color: #f8fafc;
        font-size: 14px;
        font-weight: 700;
        padding: 8px 16px;
        border-radius: 8px;
      }
      .middle-content {
        max-width: 880px;
      }
      .category-tag {
        color: #fb923c;
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
        background: #fb923c;
        border-radius: 50%;
      }
      h1 {
        font-size: 44px;
        line-height: 1.15;
        font-weight: 900;
        color: #ffffff;
        margin-bottom: 16px;
        text-shadow: 0 3px 12px rgba(0,0,0,0.6);
      }
      h1 span {
        color: #fdba74;
      }
      p.sub-title {
        font-size: 20px;
        line-height: 1.4;
        color: #e2e8f0;
        margin-bottom: 24px;
        text-shadow: 0 2px 8px rgba(0,0,0,0.5);
      }
      .chips-row {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
      }
      .chip {
        background: rgba(15, 23, 42, 0.85);
        border: 1px solid rgba(251, 146, 60, 0.4);
        backdrop-filter: blur(6px);
        padding: 8px 18px;
        border-radius: 8px;
        font-size: 15px;
        font-weight: 600;
        color: #f8fafc;
      }
      .bottom-bar {
        border-top: 1px solid rgba(255, 255, 255, 0.18);
        padding-top: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 15px;
        color: #94a3b8;
      }
      .bottom-bar strong {
        color: #38bdf8;
      }
      .bottom-bar .alert-text {
        color: #facc15;
        font-weight: 700;
      }
    </style>
  </head>
  <body>
    <img class="bg-img" src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop" />
    <div class="gradient-overlay"></div>
    <div class="content-wrapper">
      <div class="top-badge-row">
        <div class="badge-gov">Government of Sindh • Labour Department</div>
        <div class="badge-year">SESSI 2026 REGISTRATION</div>
      </div>
      <div class="middle-content">
        <div class="category-tag">Sindh Industrial & Labour Welfare</div>
        <h1>Benazir Mazdoor Card <span>Registration Online 2026</span></h1>
        <p class="sub-title">Free SESSI Hospital Healthcare • Rs. 400,000 Marriage Grant • Rs. 700,000 Death Compensation • Biometric Verification</p>
        <div class="chips-row">
          <div class="chip">🏥 Cashless SESSI Medical Care</div>
          <div class="chip">💍 Rs. 400,000 Daughter Marriage Grant</div>
          <div class="chip">🛡️ Rs. 700,000 Family Death Aid</div>
          <div class="chip">📲 Online Portal sessi.gov.pk</div>
        </div>
      </div>
      <div class="bottom-bar">
        <div>Official SESSI Portal: <strong>sessi.gov.pk</strong></div>
        <div class="alert-text">📋 Industrial, Factory & Commercial Worker Social Security</div>
      </div>
    </div>
  </body>
  </html>
  `;

  await page.setContent(mazdoorHtml);
  await page.waitForTimeout(1000);
  await page.screenshot({ path: path.resolve('public/images/benazir-mazdoor-card-registration-online-2026.jpg'), type: 'jpeg', quality: 92 });
  console.log('Rendered photo-editorial: public/images/benazir-mazdoor-card-registration-online-2026.jpg');


  // 3. BISP Deceased Beneficiary Payment Transfer Procedure
  const deceasedHtml = `
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
        filter: brightness(0.6) contrast(1.1);
      }
      .gradient-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(180deg, rgba(49, 46, 129, 0.45) 0%, rgba(15, 23, 42, 0.88) 75%, rgba(15, 23, 42, 0.98) 100%);
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
        background: rgba(99, 102, 241, 0.9);
        color: #ffffff;
        font-size: 14px;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.75px;
        padding: 8px 18px;
        border-radius: 9999px;
        box-shadow: 0 4px 15px rgba(99, 102, 241, 0.35);
      }
      .badge-year {
        background: rgba(255, 255, 255, 0.15);
        backdrop-filter: blur(8px);
        border: 1px solid rgba(255, 255, 255, 0.3);
        color: #f8fafc;
        font-size: 14px;
        font-weight: 700;
        padding: 8px 16px;
        border-radius: 8px;
      }
      .middle-content {
        max-width: 880px;
      }
      .category-tag {
        color: #a5b4fc;
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
        background: #a5b4fc;
        border-radius: 50%;
      }
      h1 {
        font-size: 44px;
        line-height: 1.15;
        font-weight: 900;
        color: #ffffff;
        margin-bottom: 16px;
        text-shadow: 0 3px 12px rgba(0,0,0,0.6);
      }
      h1 span {
        color: #c7d2fe;
      }
      p.sub-title {
        font-size: 20px;
        line-height: 1.4;
        color: #e2e8f0;
        margin-bottom: 24px;
        text-shadow: 0 2px 8px rgba(0,0,0,0.5);
      }
      .chips-row {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
      }
      .chip {
        background: rgba(15, 23, 42, 0.85);
        border: 1px solid rgba(165, 180, 252, 0.4);
        backdrop-filter: blur(6px);
        padding: 8px 18px;
        border-radius: 8px;
        font-size: 15px;
        font-weight: 600;
        color: #f8fafc;
      }
      .bottom-bar {
        border-top: 1px solid rgba(255, 255, 255, 0.18);
        padding-top: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 15px;
        color: #94a3b8;
      }
      .bottom-bar strong {
        color: #38bdf8;
      }
      .bottom-bar .alert-text {
        color: #facc15;
        font-weight: 700;
      }
    </style>
  </head>
  <body>
    <img class="bg-img" src="https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=1200&auto=format&fit=crop" />
    <div class="gradient-overlay"></div>
    <div class="content-wrapper">
      <div class="top-badge-row">
        <div class="badge-gov">BISP Kafaalat • Household Entitlement Protocol</div>
        <div class="badge-year">OFFICIAL 2026 PROCEDURE</div>
      </div>
      <div class="middle-content">
        <div class="category-tag">Deceased Beneficiary Case Protocol</div>
        <h1>BISP Deceased Beneficiary <span>Payment Transfer Procedure</span></h1>
        <p class="sub-title">NADRA Death Certificate • CNIC Cancellation Certificate • BISP Tehsil Office Reporting & Dynamic NSER Re-Survey</p>
        <div class="chips-row">
          <div class="chip">📜 NADRA Death Certificate</div>
          <div class="chip">💳 CNIC Cancellation Certificate</div>
          <div class="chip">📑 Dynamic NSER Re-Survey</div>
          <div class="chip">👩‍👦 Transfer to Surviving Female Heir</div>
        </div>
      </div>
      <div class="bottom-bar">
        <div>Official Helpdesk & Toll-Free Line: <strong>0800-26477</strong></div>
        <div class="alert-text">🔒 Protects Deceased Accounts from Unauthorized SIM Withdrawals</div>
      </div>
    </div>
  </body>
  </html>
  `;

  await page.setContent(deceasedHtml);
  await page.waitForTimeout(1000);
  await page.screenshot({ path: path.resolve('public/images/bisp-deceased-beneficiary-payment-transfer-procedure.jpg'), type: 'jpeg', quality: 92 });
  console.log('Rendered photo-editorial: public/images/bisp-deceased-beneficiary-payment-transfer-procedure.jpg');

  await browser.close();
  console.log('All 3 photo-editorial images rendered successfully!');
}

renderThreeEditorialImages().catch(console.error);
