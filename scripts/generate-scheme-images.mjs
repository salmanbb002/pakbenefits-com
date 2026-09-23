import { chromium } from 'playwright-core';
import path from 'path';

async function generateBanners() {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage({
    viewport: { width: 1200, height: 675 }
  });

  // Banner 1: KPK Sehat Sahulat Card Plus
  const sehatCardHtml = `
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
        padding: 48px 56px;
        position: relative;
        overflow: hidden;
      }
      .bg-circle1 {
        position: absolute;
        width: 600px;
        height: 600px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(16, 185, 129, 0.25) 0%, rgba(0,0,0,0) 70%);
        top: -150px;
        right: -100px;
        pointer-events: none;
      }
      .bg-circle2 {
        position: absolute;
        width: 450px;
        height: 450px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(52, 211, 153, 0.15) 0%, rgba(0,0,0,0) 70%);
        bottom: -100px;
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
        background: rgba(255, 255, 255, 0.12);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
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
        color: #78350f;
        font-size: 15px;
        font-weight: 800;
        padding: 8px 18px;
        border-radius: 8px;
        letter-spacing: 0.5px;
      }
      .main-content {
        z-index: 2;
        display: grid;
        grid-template-columns: 1.2fr 0.8fr;
        gap: 40px;
        align-items: center;
      }
      .title-area h1 {
        font-size: 42px;
        line-height: 1.15;
        font-weight: 900;
        margin-bottom: 16px;
        color: #ffffff;
        text-shadow: 0 2px 10px rgba(0,0,0,0.3);
      }
      .title-area h1 span.highlight {
        color: #34d399;
      }
      .title-area p {
        font-size: 19px;
        line-height: 1.45;
        color: #e2e8f0;
        margin-bottom: 24px;
        max-width: 580px;
      }
      .pill-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
      }
      .pill {
        display: flex;
        align-items: center;
        gap: 8px;
        background: rgba(15, 23, 42, 0.6);
        border: 1px solid rgba(52, 211, 153, 0.3);
        padding: 8px 16px;
        border-radius: 8px;
        font-size: 14px;
        font-weight: 600;
        color: #f1f5f9;
      }
      .card-mockup {
        background: linear-gradient(135deg, #065f46 0%, #047857 50%, #022c22 100%);
        border: 2px solid rgba(52, 211, 153, 0.5);
        border-radius: 20px;
        padding: 28px;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.45);
        position: relative;
      }
      .card-mockup .chip {
        width: 48px;
        height: 36px;
        background: linear-gradient(135deg, #fbbf24 0%, #d97706 100%);
        border-radius: 6px;
        margin-bottom: 20px;
      }
      .card-mockup .card-title {
        font-size: 20px;
        font-weight: 800;
        letter-spacing: 0.5px;
        color: #ffffff;
        margin-bottom: 4px;
      }
      .card-mockup .card-subtitle {
        font-size: 13px;
        font-weight: 600;
        color: #a7f3d0;
        margin-bottom: 20px;
        text-transform: uppercase;
      }
      .card-mockup .benefit-amount {
        font-size: 28px;
        font-weight: 900;
        color: #fef08a;
        margin-bottom: 6px;
      }
      .card-mockup .benefit-desc {
        font-size: 13px;
        color: #cbd5e1;
      }
      .footer-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top: 1px solid rgba(255, 255, 255, 0.15);
        padding-top: 18px;
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
        Govt of Khyber Pakhtunkhwa • Sehat Sahulat Program
      </div>
      <div class="year-badge">UPDATED 2026</div>
    </div>

    <div class="main-content">
      <div class="title-area">
        <h1>KPK Sehat Card Plus <span class="highlight">Check Online by CNIC</span></h1>
        <p>Complete guide to Rs. 10 Lakh free hospital treatment, 8500 SMS status verification, and 1,000+ empaneled panel hospitals.</p>
        <div class="pill-grid">
          <div class="pill">🏥 1,000+ Panel Hospitals</div>
          <div class="pill">💳 100% Cashless Inpatient</div>
          <div class="pill">📱 8500 SMS CNIC Check</div>
          <div class="pill">🩺 Free Surgeries & Dialysis</div>
        </div>
      </div>

      <div class="card-mockup">
        <div class="chip"></div>
        <div class="card-title">SEHAT CARD PLUS KP</div>
        <div class="card-subtitle">Universal Health Insurance</div>
        <div class="benefit-amount">Rs. 1,000,000 / Year</div>
        <div class="benefit-desc">Annual cashless inpatient & surgery coverage per family via State Life Insurance.</div>
      </div>
    </div>

    <div class="footer-row">
      <div class="portal-info">Official Portal: <strong>sehatcardplus.gov.pk</strong></div>
      <div class="verification-step">⚡ Send 13-Digit CNIC to 8500 for Instant Verification</div>
    </div>
  </body>
  </html>
  `;

  await page.setContent(sehatCardHtml);
  await page.screenshot({ path: path.resolve('public/images/sehat-card-plus-kpk.jpg'), type: 'jpeg', quality: 90 });
  console.log('Generated: public/images/sehat-card-plus-kpk.jpg');

  // Banner 2: HEC Ehsaas Undergraduate Scholarship
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
        background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 45%, #064e3b 100%);
        color: #ffffff;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 48px 56px;
        position: relative;
        overflow: hidden;
      }
      .bg-circle1 {
        position: absolute;
        width: 600px;
        height: 600px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(99, 102, 241, 0.25) 0%, rgba(0,0,0,0) 70%);
        top: -150px;
        right: -100px;
        pointer-events: none;
      }
      .bg-circle2 {
        position: absolute;
        width: 450px;
        height: 450px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, rgba(0,0,0,0) 70%);
        bottom: -100px;
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
        background: rgba(255, 255, 255, 0.12);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
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
        background-color: #38bdf8;
        border-radius: 50%;
        box-shadow: 0 0 10px #38bdf8;
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
        grid-template-columns: 1.2fr 0.8fr;
        gap: 40px;
        align-items: center;
      }
      .title-area h1 {
        font-size: 40px;
        line-height: 1.15;
        font-weight: 900;
        margin-bottom: 16px;
        color: #ffffff;
        text-shadow: 0 2px 10px rgba(0,0,0,0.3);
      }
      .title-area h1 span.highlight {
        color: #60a5fa;
      }
      .title-area p {
        font-size: 19px;
        line-height: 1.45;
        color: #e2e8f0;
        margin-bottom: 24px;
        max-width: 580px;
      }
      .pill-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
      }
      .pill {
        display: flex;
        align-items: center;
        gap: 8px;
        background: rgba(15, 23, 42, 0.7);
        border: 1px solid rgba(96, 165, 250, 0.3);
        padding: 8px 16px;
        border-radius: 8px;
        font-size: 14px;
        font-weight: 600;
        color: #f1f5f9;
      }
      .card-mockup {
        background: linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #0f172a 100%);
        border: 2px solid rgba(96, 165, 250, 0.5);
        border-radius: 20px;
        padding: 28px;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.45);
        position: relative;
      }
      .card-mockup .scholarship-tag {
        display: inline-block;
        background: #3b82f6;
        color: #ffffff;
        font-size: 12px;
        font-weight: 800;
        padding: 4px 12px;
        border-radius: 6px;
        margin-bottom: 16px;
        text-transform: uppercase;
      }
      .card-mockup .card-title {
        font-size: 22px;
        font-weight: 800;
        letter-spacing: 0.5px;
        color: #ffffff;
        margin-bottom: 6px;
      }
      .card-mockup .card-subtitle {
        font-size: 13px;
        font-weight: 600;
        color: #93c5fd;
        margin-bottom: 18px;
      }
      .card-mockup .benefit-amount {
        font-size: 26px;
        font-weight: 900;
        color: #34d399;
        margin-bottom: 4px;
      }
      .card-mockup .benefit-desc {
        font-size: 13px;
        color: #cbd5e1;
        line-height: 1.4;
      }
      .footer-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top: 1px solid rgba(255, 255, 255, 0.15);
        padding-top: 18px;
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
        Higher Education Commission • HEC Pakistan
      </div>
      <div class="year-badge">2026 SESSION</div>
    </div>

    <div class="main-content">
      <div class="title-area">
        <h1>HEC Ehsaas Undergraduate <span class="highlight">Scholarship 2026</span></h1>
        <p>Complete guide to 100% full tuition fee waiver, Rs. 4,000 monthly living stipend, university FAO verification, and ISAC interview prep.</p>
        <div class="pill-grid">
          <div class="pill">🎓 50,000 Annual Scholarships</div>
          <div class="pill">👩‍🎓 50% Female Quota</div>
          <div class="pill">🏛️ 135+ Public Universities</div>
          <div class="pill">💵 Rs. 4,000 / Month Stipend</div>
        </div>
      </div>

      <div class="card-mockup">
        <div class="scholarship-tag">Undergraduate Grant</div>
        <div class="card-title">100% TUITION COVERAGE</div>
        <div class="card-subtitle">4-Year / 5-Year BS Degree Programs</div>
        <div class="benefit-amount">+ Rs 4,000 / Mo Stipend</div>
        <div class="benefit-desc">Full institutional fees reimbursed directly to university + living allowance to student bank account.</div>
      </div>
    </div>

    <div class="footer-row">
      <div class="portal-info">Online Application Portal: <strong>ehsaas.hec.gov.pk</strong></div>
      <div class="verification-step">📝 Apply in 1st/2nd Semester at University Financial Aid Office</div>
    </div>
  </body>
  </html>
  `;

  await page.setContent(scholarshipHtml);
  await page.screenshot({ path: path.resolve('public/images/ehsaas-undergraduate-scholarship.jpg'), type: 'jpeg', quality: 90 });
  console.log('Generated: public/images/ehsaas-undergraduate-scholarship.jpg');

  await browser.close();
}

generateBanners().catch(console.error);
