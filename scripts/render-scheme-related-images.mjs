import { chromium } from 'playwright-core';
import path from 'path';

async function renderSchemeRelatedImages() {
  console.log('Rendering scheme-related photo editorial images...');
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage({
    viewport: { width: 1200, height: 675 }
  });

  // Image 1: CM Balochistan Youth Skills Scheme 2026
  const balochistanHtml = `
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
        background: #064e3b;
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
        background: linear-gradient(180deg, rgba(6, 78, 59, 0.45) 0%, rgba(4, 47, 46, 0.88) 70%, rgba(15, 23, 42, 0.98) 100%);
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
      .badge-year {
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
        max-width: 900px;
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
        font-size: 44px;
        font-weight: 900;
        line-height: 1.18;
        letter-spacing: -0.5px;
        margin-bottom: 14px;
        text-shadow: 0 4px 20px rgba(0,0,0,0.5);
      }
      p {
        font-size: 19px;
        line-height: 1.45;
        color: #cbd5e1;
        max-width: 820px;
        font-weight: 400;
      }
      .bottom-bar {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 16px;
        background: rgba(15, 23, 42, 0.7);
        backdrop-filter: blur(12px);
        border-radius: 16px;
        padding: 18px 24px;
        border: 1px solid rgba(255, 255, 255, 0.12);
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
    <img class="bg-img" src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop" alt="Balochistan Youth Skills Technical Training" />
    <div class="gradient-overlay"></div>
    <div class="content-wrapper">
      <div class="top-badge-row">
        <div class="badge-gov">Government of Balochistan • B-TEVTA</div>
        <div class="badge-year">Phase 2026 Batch</div>
      </div>
      <div class="middle-content">
        <div class="category-tag">Youth Rozgar & Technical Education Scheme</div>
        <h1>CM Balochistan Youth Skills Scheme 2026 Online Apply</h1>
        <p>Official registration portal at btevta.gob.pk. Fully funded technical training, monthly stipend & target of 30,000 overseas job placements.</p>
      </div>
      <div class="bottom-bar">
        <div class="info-box">
          <span class="info-label">Foreign Placement</span>
          <span class="info-val">30,000 Jobs</span>
        </div>
        <div class="info-box">
          <span class="info-label">Official Portal</span>
          <span class="info-val">btevta.gob.pk</span>
        </div>
        <div class="info-box">
          <span class="info-label">Female Quota</span>
          <span class="info-val">25% Reserved</span>
        </div>
        <div class="info-box">
          <span class="info-label">Training Fee</span>
          <span class="info-val">100% Free</span>
        </div>
      </div>
    </div>
  </body>
  </html>
  `;

  // Image 2: Fake 8171 SMS Check & BISP Fraud Alert
  const fakeSmsHtml = `
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
        background: #7f1d1d;
      }
      .bg-img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: brightness(0.45) contrast(1.2);
      }
      .gradient-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(180deg, rgba(153, 27, 27, 0.5) 0%, rgba(127, 29, 29, 0.9) 70%, rgba(15, 23, 42, 0.98) 100%);
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
        background: #ef4444;
        color: #ffffff;
        font-size: 14px;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.75px;
        padding: 8px 20px;
        border-radius: 9999px;
        box-shadow: 0 4px 15px rgba(239, 68, 68, 0.4);
      }
      .badge-year {
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
        max-width: 900px;
      }
      .category-tag {
        color: #fca5a5;
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
        background: #ef4444;
        border-radius: 50%;
      }
      h1 {
        font-size: 44px;
        font-weight: 900;
        line-height: 1.18;
        letter-spacing: -0.5px;
        margin-bottom: 14px;
        text-shadow: 0 4px 20px rgba(0,0,0,0.5);
      }
      p {
        font-size: 19px;
        line-height: 1.45;
        color: #e2e8f0;
        max-width: 820px;
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
        border: 1px solid rgba(255, 255, 255, 0.12);
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
    <img class="bg-img" src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop" alt="Fake 8171 SMS Scam Alert Security" />
    <div class="gradient-overlay"></div>
    <div class="content-wrapper">
      <div class="top-badge-row">
        <div class="badge-gov">BISP Public Security & Fraud Warning</div>
        <div class="badge-year">Official 8171 Alert</div>
      </div>
      <div class="middle-content">
        <div class="category-tag">Public Safety & Scam Prevention</div>
        <h1>Fake 8171 SMS Check & BISP Lottery Scam Complaint Guide</h1>
        <p>Identify fake SMS sent from 11-digit mobile numbers. Report scams to PTA 9000, BISP Helpline 0800-26477, Police 15 & FIA Cybercrime 1991.</p>
      </div>
      <div class="bottom-bar">
        <div class="info-box">
          <span class="info-label">Official Shortcode</span>
          <span class="info-val">8171 Only</span>
        </div>
        <div class="info-box">
          <span class="info-label">BISP Helpline</span>
          <span class="info-val">0800-26477</span>
        </div>
        <div class="info-box">
          <span class="info-label">PTA Spam Reporting</span>
          <span class="info-val">SMS to 9000</span>
        </div>
        <div class="info-box">
          <span class="info-label">FIA Cybercrime</span>
          <span class="info-val">Helpline 1991</span>
        </div>
      </div>
    </div>
  </body>
  </html>
  `;

  // Render Image 1
  await page.setContent(balochistanHtml, { waitUntil: 'networkidle' });
  const path1 = path.join(process.cwd(), 'public', 'images', 'cm-balochistan-youth-skills-scheme-2026-online-apply.jpg');
  await page.screenshot({ path: path1, type: 'jpeg', quality: 92 });
  console.log(`Rendered photo editorial banner to ${path1}`);

  // Render Image 2
  await page.setContent(fakeSmsHtml, { waitUntil: 'networkidle' });
  const path2 = path.join(process.cwd(), 'public', 'images', 'fake-8171-sms-check-complaint-pta-bisp-lottery-fraud-alert.jpg');
  await page.screenshot({ path: path2, type: 'jpeg', quality: 92 });
  console.log(`Rendered photo editorial banner to ${path2}`);

  await browser.close();
  console.log('Finished rendering scheme-related editorial images!');
}

renderSchemeRelatedImages().catch(console.error);
