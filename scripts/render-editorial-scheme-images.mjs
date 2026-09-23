import { chromium } from 'playwright-core';
import path from 'path';

async function renderImages() {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage({
    viewport: { width: 1200, height: 675 }
  });

  // 1. KPK Sehat Card Plus Editorial Image
  const sehatHtml = `
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
        filter: brightness(0.65) contrast(1.1);
      }
      .gradient-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(180deg, rgba(6, 78, 59, 0.4) 0%, rgba(15, 23, 42, 0.85) 75%, rgba(15, 23, 42, 0.98) 100%);
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
        background: rgba(16, 185, 129, 0.9);
        color: #022c22;
        font-size: 14px;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.75px;
        padding: 8px 18px;
        border-radius: 9999px;
        box-shadow: 0 4px 15px rgba(16, 185, 129, 0.35);
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
        max-width: 860px;
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
        font-size: 46px;
        line-height: 1.15;
        font-weight: 900;
        color: #ffffff;
        margin-bottom: 16px;
        text-shadow: 0 3px 12px rgba(0,0,0,0.6);
      }
      h1 span {
        color: #a7f3d0;
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
        background: rgba(15, 23, 42, 0.8);
        border: 1px solid rgba(52, 211, 153, 0.4);
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
        color: #fbbf24;
        font-weight: 700;
      }
    </style>
  </head>
  <body>
    <img class="bg-img" src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop" />
    <div class="gradient-overlay"></div>
    <div class="content-wrapper">
      <div class="top-badge-row">
        <div class="badge-gov">Govt of Khyber Pakhtunkhwa • Sehat Sahulat Program</div>
        <div class="badge-year">OFFICIAL 2026 GUIDE</div>
      </div>
      <div class="middle-content">
        <div class="category-tag">Universal Health Coverage</div>
        <h1>Sehat Card Plus KPK <span>Check Online by CNIC</span></h1>
        <p class="sub-title">Rs. 10 Lakh Free Treatment Coverage • 8500 SMS Verification • 1,000+ Empaneled Panel Hospitals List</p>
        <div class="chips-row">
          <div class="chip">🏥 1,000+ Panel Hospitals</div>
          <div class="chip">💳 Rs. 10 Lakh Health Cover</div>
          <div class="chip">📱 8500 SMS CNIC Check</div>
          <div class="chip">🩺 100% Cashless Inpatient & Surgeries</div>
        </div>
      </div>
      <div class="bottom-bar">
        <div>Official Portal: <strong>sehatcardplus.gov.pk</strong></div>
        <div class="alert-text">⚡ Universal Healthcare for All Permanent KP Residents</div>
      </div>
    </div>
  </body>
  </html>
  `;

  await page.setContent(sehatHtml);
  await page.waitForTimeout(1000);
  await page.screenshot({ path: path.resolve('public/images/sehat-card-plus-kpk.jpg'), type: 'jpeg', quality: 92 });
  console.log('Successfully generated photographic editorial: public/images/sehat-card-plus-kpk.jpg');

  // 2. HEC Ehsaas Undergraduate Scholarship Editorial Image
  const scholarshipHtml = `
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
        filter: brightness(0.65) contrast(1.1);
      }
      .gradient-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(180deg, rgba(30, 27, 75, 0.45) 0%, rgba(15, 23, 42, 0.85) 75%, rgba(15, 23, 42, 0.98) 100%);
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
        background: rgba(59, 130, 246, 0.9);
        color: #ffffff;
        font-size: 14px;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.75px;
        padding: 8px 18px;
        border-radius: 9999px;
        box-shadow: 0 4px 15px rgba(59, 130, 246, 0.35);
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
        background: rgba(15, 23, 42, 0.8);
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
    <img class="bg-img" src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop" />
    <div class="gradient-overlay"></div>
    <div class="content-wrapper">
      <div class="top-badge-row">
        <div class="badge-gov">Higher Education Commission • HEC Pakistan</div>
        <div class="badge-year">2026 ACADEMIC SESSION</div>
      </div>
      <div class="middle-content">
        <div class="category-tag">Undergraduate Higher Education Grant</div>
        <h1>HEC Ehsaas Undergraduate <span>Scholarship 2026</span></h1>
        <p class="sub-title">100% Full University Tuition Fee Waiver • Rs. 4,000 / Month Living Stipend • 50,000 Scholarships</p>
        <div class="chips-row">
          <div class="chip">🎓 100% Tuition Fee Covered</div>
          <div class="chip">💵 Rs. 4,000 / Mo Living Stipend</div>
          <div class="chip">👩‍🎓 50% Quota for Females</div>
          <div class="chip">🏛️ 135+ HEC Public Universities</div>
        </div>
      </div>
      <div class="bottom-bar">
        <div>Online Application Portal: <strong>ehsaas.hec.gov.pk</strong></div>
        <div class="alert-text">📝 Apply via University Financial Aid Office (FAO) & ISAC</div>
      </div>
    </div>
  </body>
  </html>
  `;

  await page.setContent(scholarshipHtml);
  await page.waitForTimeout(1000);
  await page.screenshot({ path: path.resolve('public/images/ehsaas-undergraduate-scholarship.jpg'), type: 'jpeg', quality: 92 });
  console.log('Successfully generated photographic editorial: public/images/ehsaas-undergraduate-scholarship.jpg');

  await browser.close();
}

renderImages().catch(console.error);
