import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const outputDir = 'public/images';

// Helper to wrap text into SVG lines
function escapeXml(unsafe) {
  return unsafe.replace(/[<>&'"]/g, c => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
    }
  });
}

// Common SVG visual templates
function createPortalMockupSvg() {
  return `
<svg width="1200" height="675" viewBox="0 0 1200 675" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="headerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0a522c"/>
      <stop offset="100%" stop-color="#0e6b3b"/>
    </linearGradient>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.12"/>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="1200" height="675" fill="#f0f5f2"/>

  <!-- Browser Window Wrapper -->
  <rect x="50" y="30" width="1100" height="615" rx="12" fill="#ffffff" filter="url(#shadow)"/>
  
  <!-- Browser Address Bar -->
  <rect x="50" y="30" width="1100" height="45" rx="12" fill="#e8ebe9"/>
  <circle cx="75" cy="52" r="6" fill="#e15b52"/>
  <circle cx="95" cy="52" r="6" fill="#e5b037"/>
  <circle cx="115" cy="52" r="6" fill="#46a84f"/>
  <rect x="150" y="40" width="700" height="26" rx="6" fill="#ffffff"/>
  <text x="170" y="58" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" fill="#2d6a4f" font-weight="600">https://8171.bisp.gov.pk/ - Official BISP 8171 Web Portal</text>

  <!-- Portal Header Bar -->
  <rect x="50" y="75" width="1100" height="85" fill="url(#headerGrad)"/>
  <circle cx="105" cy="117" r="24" fill="#ffffff" fill-opacity="0.15"/>
  <text x="105" y="125" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="22" fill="#ffffff" text-anchor="middle" font-weight="bold">★</text>
  <text x="145" y="110" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="22" fill="#ffffff" font-weight="bold">Government of Pakistan | حکومتِ پاکستان</text>
  <text x="145" y="134" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" fill="#d8f3e5">8171 Web Portal - Benazir Income Support Programme</text>

  <rect x="940" y="98" width="180" height="38" rx="6" fill="#ffffff" fill-opacity="0.2"/>
  <text x="1030" y="122" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" fill="#ffffff" text-anchor="middle" font-weight="bold">✓ 100% Official Portal</text>

  <!-- Main Card Form -->
  <rect x="120" y="190" width="960" height="415" rx="10" fill="#ffffff" stroke="#c8ded1" stroke-width="1.5"/>

  <rect x="120" y="190" width="960" height="55" rx="10" fill="#f4faf6"/>
  <text x="160" y="225" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="20" fill="#0b522c" font-weight="bold">اہلیت کے بارے میں جانیے / Check Your Eligibility</text>

  <!-- Input Field 1: CNIC -->
  <text x="160" y="280" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" fill="#1b4332" font-weight="600">فارم نمبر یا شناختی کارڈ نمبر درج کریں (Enter CNIC Number):</text>
  <rect x="160" y="295" width="560" height="50" rx="8" fill="#ffffff" stroke="#0e6b3b" stroke-width="2"/>
  <text x="180" y="328" font-family="Courier New, monospace" font-size="22" fill="#1b4332" font-weight="bold">35201-9284710-2</text>
  <rect x="740" y="295" width="140" height="50" rx="8" fill="#e8f5ed"/>
  <text x="810" y="326" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" fill="#0b522c" font-weight="bold" text-anchor="middle">Valid CNIC ✓</text>

  <!-- Input Field 2: Captcha -->
  <text x="160" y="380" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" fill="#1b4332" font-weight="600">تصویر میں دیا گیا کوڈ درج کریں (Enter 4-Digit Captcha Code):</text>
  <rect x="160" y="395" width="280" height="50" rx="8" fill="#ffffff" stroke="#c8ded1" stroke-width="1.5"/>
  <text x="180" y="428" font-family="Courier New, monospace" font-size="22" fill="#1b4332" font-weight="bold">6492</text>

  <!-- Captcha Display Box -->
  <rect x="460" y="395" width="160" height="50" rx="8" fill="#2d6a4f"/>
  <text x="540" y="430" font-family="'Courier New', monospace" font-size="28" fill="#ffffff" font-weight="bold" letter-spacing="6" text-anchor="middle">6 4 9 2</text>

  <!-- Button: Maloom Karein -->
  <rect x="160" y="475" width="320" height="54" rx="8" fill="#0a522c"/>
  <text x="320" y="508" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="18" fill="#ffffff" font-weight="bold" text-anchor="middle">معلوم کریں (Check Status) →</text>

  <!-- Security Disclaimer Banner -->
  <rect x="160" y="545" width="880" height="42" rx="6" fill="#eef8f2"/>
  <text x="180" y="571" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" fill="#0e6b3b" font-weight="600">⚠️ تنبیہ: 8171 ویب پورٹل پر معلومات مفت ہیں۔ کسی بھی فرد کو رجسٹریشن یا رقم نکلوانے کی فیس ادا نہ کریں۔</text>
</svg>
`;
}

function createSmsMockupSvg() {
  return `
<svg width="1200" height="675" viewBox="0 0 1200 675" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadowSms" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="16" flood-color="#000000" flood-opacity="0.14"/>
    </filter>
  </defs>

  <rect width="1200" height="675" fill="#f4f7f6"/>

  <!-- Left: Phone Mockup -->
  <g transform="translate(60, 40)">
    <rect width="480" height="595" rx="36" fill="#111827" filter="url(#shadowSms)"/>
    <rect x="12" y="12" width="456" height="571" rx="26" fill="#ffffff"/>

    <!-- Phone Speaker & Camera Notch -->
    <rect x="190" y="20" width="100" height="14" rx="7" fill="#111827"/>

    <!-- Messaging Header -->
    <rect x="12" y="44" width="456" height="64" fill="#0a522c"/>
    <circle cx="50" cy="76" r="18" fill="#ffffff" fill-opacity="0.2"/>
    <text x="50" y="82" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="16" fill="#ffffff" text-anchor="middle">←</text>
    <text x="85" y="74" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="18" fill="#ffffff" font-weight="bold">8171</text>
    <rect x="135" y="60" width="82" height="20" rx="10" fill="#25a266"/>
    <text x="176" y="74" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" fill="#ffffff" text-anchor="middle" font-weight="bold">✓ VERIFIED</text>
    <text x="85" y="94" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" fill="#c7ebd6">Govt of Pakistan Social Protection</text>

    <!-- Message Timestamp -->
    <text x="240" y="135" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" fill="#6b7280" text-anchor="middle">Today • 11:30 AM • Official 8171</text>

    <!-- SMS Bubble -->
    <rect x="36" y="155" width="408" height="280" rx="18" fill="#e8f5ed" stroke="#b2dec4" stroke-width="1.5"/>
    <text x="56" y="185" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" fill="#0a522c" font-weight="bold">حکومتِ پاکستان (BISP 8171):</text>
    <text x="56" y="215" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" fill="#1f2937">محترمہ فاطمہ بی بی!</text>
    <text x="56" y="240" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" fill="#1f2937">آپ بے نظیر کفالت پروگرام کے لیے اہل قرار پائی ہیں۔</text>
    <text x="56" y="265" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" fill="#1f2937">آپ کی سہ ماہی قسط 14,500 روپے جاری کر دی گئی ہے۔</text>
    <text x="56" y="300" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" fill="#0a522c" font-weight="600">رقم وصولی کا باضابطہ طریقہ:</text>
    <text x="56" y="325" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" fill="#374151">• قریبی BISP باضابطہ کیمپ سائٹ یا</text>
    <text x="56" y="348" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" fill="#374151">• HBL / بینک الفلاح بائیو میٹرک ATM سے وصول کریں۔</text>
    <text x="56" y="375" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" fill="#047857" font-weight="bold">فیس: 0 روپے (کوئی کٹوتی نہ کروائیں)</text>
    <text x="56" y="410" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" fill="#4b5563">شکایات: 0800-26477 (مفت ہیلپ لائن)</text>

    <!-- Message Input Bar -->
    <rect x="24" y="525" width="432" height="45" rx="22" fill="#f3f4f6"/>
    <text x="48" y="552" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" fill="#9ca3af">Send CNIC to 8171...</text>
  </g>

  <!-- Right: Trust Signals & Verification Card -->
  <g transform="translate(580, 50)">
    <rect width="570" height="575" rx="16" fill="#ffffff" filter="url(#shadowSms)" stroke="#e5e7eb"/>
    <rect x="30" y="30" width="510" height="70" rx="10" fill="#0a522c"/>
    <text x="50" y="62" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="18" fill="#ffffff" font-weight="bold">8171 SMS VERIFICATION &amp; TRUST SIGNALS</text>
    <text x="50" y="85" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" fill="#c7ebd6">How to identify official BISP messages vs fraudulent SMS</text>

    <!-- Checkpoint 1 -->
    <rect x="30" y="125" width="510" height="85" rx="8" fill="#f0fdf4" stroke="#86efac"/>
    <text x="55" y="153" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" fill="#166534" font-weight="bold">✓ 1. Official 4-Digit Sender Only</text>
    <text x="55" y="177" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" fill="#374151">Genuine eligibility notifications are ONLY sent from '8171'. Government agencies never use standard 11-digit mobile numbers (03xx).</text>

    <!-- Checkpoint 2 -->
    <rect x="30" y="230" width="510" height="85" rx="8" fill="#f0fdf4" stroke="#86efac"/>
    <text x="55" y="258" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" fill="#166534" font-weight="bold">✓ 2. Exact Official Qist: PKR 14,500</text>
    <text x="55" y="282" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" fill="#374151">Current Benazir Kafaalat stipend rate is fixed at Rs 14,500. There are zero deductions, processing charges, or release fees.</text>

    <!-- Checkpoint 3 -->
    <rect x="30" y="335" width="510" height="85" rx="8" fill="#fef2f2" stroke="#fca5a5"/>
    <text x="55" y="363" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" fill="#991b1b" font-weight="bold">✗ 3. Scam &amp; Lottery Fraud Warning</text>
    <text x="55" y="387" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" fill="#374151">Any SMS claiming "Aapki 50,000 ki lottery nikli hai, is number par 2000 jazzcash bhejen" is 100% fraudulent. Report to PTA 8171 helpline.</text>

    <!-- Checkpoint 4 -->
    <rect x="30" y="440" width="510" height="90" rx="8" fill="#eff6ff" stroke="#bfdbfe"/>
    <text x="55" y="468" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" fill="#1e40af" font-weight="bold">ℹ 4. Biometric Withdrawal Only</text>
    <text x="55" y="492" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" fill="#374151">Funds can only be withdrawn by the female beneficiary herself through NADRA biometric fingerprint verification at designated bank ATMs/camps.</text>
  </g>
</svg>
`;
}

function createAtmReceiptSvg() {
  return `
<svg width="1200" height="675" viewBox="0 0 1200 675" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadowAtm" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="14" flood-color="#000000" flood-opacity="0.12"/>
    </filter>
  </defs>

  <rect width="1200" height="675" fill="#eef2f6"/>

  <!-- Left Side: ATM Interface Screen Mockup -->
  <g transform="translate(60, 45)">
    <!-- ATM Bezel Frame -->
    <rect width="520" height="585" rx="20" fill="#1e293b" filter="url(#shadowAtm)"/>
    <!-- Screen -->
    <rect x="18" y="18" width="484" height="549" rx="10" fill="#0f172a"/>

    <!-- Screen Header -->
    <rect x="18" y="18" width="484" height="60" rx="10" fill="#065f46"/>
    <text x="260" y="45" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="16" fill="#ffffff" font-weight="bold" text-anchor="middle">HABIB BANK LIMITED &amp; BANK ALFALAH</text>
    <text x="260" y="65" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" fill="#a7f3d0" text-anchor="middle">BISP Biometric Cash Dispenser • بے نظیر انکم سپورٹ پروگرام</text>

    <!-- Fingerprint Status -->
    <circle cx="260" cy="140" r="38" fill="#064e3b" stroke="#34d399" stroke-width="2"/>
    <text x="260" y="148" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="28" fill="#34d399" text-anchor="middle">✓</text>
    <text x="260" y="205" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="16" fill="#ffffff" font-weight="bold" text-anchor="middle">NADRA Biometric Verification Successful</text>
    <text x="260" y="226" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" fill="#94a3b8" text-anchor="middle">Thumb impression matched with NADRA database</text>

    <!-- Options Buttons -->
    <rect x="40" y="260" width="440" height="56" rx="8" fill="#047857"/>
    <text x="60" y="294" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="16" fill="#ffffff" font-weight="bold">1. Raqam Wasool Karein (PKR 14,500)</text>
    <text x="450" y="294" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="18" fill="#ffffff" text-anchor="end">➔</text>

    <rect x="40" y="330" width="440" height="52" rx="8" fill="#1e293b" stroke="#334155"/>
    <text x="60" y="362" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" fill="#f1f5f9">2. Balance Check / تفصیلی بیلنس</text>
    <text x="450" y="362" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="16" fill="#94a3b8" text-anchor="end">➔</text>

    <rect x="40" y="396" width="440" height="52" rx="8" fill="#1e293b" stroke="#334155"/>
    <text x="60" y="428" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" fill="#f1f5f9">3. Print Transaction Receipt / رسید حاصل کریں</text>
    <text x="450" y="428" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="16" fill="#94a3b8" text-anchor="end">➔</text>

    <!-- Dispenser Prompt -->
    <rect x="40" y="475" width="440" height="60" rx="8" fill="#064e3b" fill-opacity="0.5" stroke="#059669"/>
    <text x="260" y="502" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" fill="#6ee7b7" text-anchor="middle" font-weight="bold">Cash Dispensed: PKR 14,500</text>
    <text x="260" y="522" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" fill="#cbd5e1" text-anchor="middle">براہِ کرم اپنی رقم اور رسید اے ٹی ایم سے حاصل کریں</text>
  </g>

  <!-- Right Side: Printed Payment Receipt Sample -->
  <g transform="translate(620, 45)">
    <rect width="520" height="585" rx="8" fill="#ffffff" filter="url(#shadowAtm)" stroke="#cbd5e1"/>
    
    <!-- Receipt Header -->
    <text x="260" y="50" font-family="'Courier New', monospace" font-size="18" fill="#0f172a" font-weight="bold" text-anchor="middle">*** OFFICIAL TRANSACTION RECEIPT ***</text>
    <text x="260" y="75" font-family="'Courier New', monospace" font-size="14" fill="#334155" text-anchor="middle">HBL / BISP BIOMETRIC PAYMENT SYSTEM</text>
    <text x="260" y="95" font-family="'Courier New', monospace" font-size="12" fill="#64748b" text-anchor="middle">Tehsil Biometric Distribution Center</text>

    <!-- Dashed Separator -->
    <line x1="30" y1="115" x2="490" y2="115" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="6,4"/>

    <!-- Receipt Items -->
    <text x="40" y="145" font-family="'Courier New', monospace" font-size="14" fill="#1e293b" font-weight="bold">PROGRAMME:</text>
    <text x="480" y="145" font-family="'Courier New', monospace" font-size="14" fill="#065f46" font-weight="bold" text-anchor="end">BISP BENAZIR KAFAALAT</text>

    <text x="40" y="180" font-family="'Courier New', monospace" font-size="13" fill="#334155">TRANSACTION TYPE:</text>
    <text x="480" y="180" font-family="'Courier New', monospace" font-size="13" fill="#334155" text-anchor="end">BIOMETRIC CASH WITHDRAWAL</text>

    <text x="40" y="215" font-family="'Courier New', monospace" font-size="13" fill="#334155">DATE / TIME:</text>
    <text x="480" y="215" font-family="'Courier New', monospace" font-size="13" fill="#334155" text-anchor="end">10-OCT-2026 14:32 PKT</text>

    <text x="40" y="250" font-family="'Courier New', monospace" font-size="13" fill="#334155">BENEFICIARY CNIC:</text>
    <text x="480" y="250" font-family="'Courier New', monospace" font-size="13" fill="#334155" text-anchor="end">35201-*******-4</text>

    <text x="40" y="285" font-family="'Courier New', monospace" font-size="13" fill="#334155">BIOMETRIC STATUS:</text>
    <text x="480" y="285" font-family="'Courier New', monospace" font-size="13" fill="#059669" font-weight="bold" text-anchor="end">NADRA LIVE MATCH (100%)</text>

    <text x="40" y="320" font-family="'Courier New', monospace" font-size="13" fill="#334155">STIPEND QUARTER:</text>
    <text x="480" y="320" font-family="'Courier New', monospace" font-size="13" fill="#334155" text-anchor="end">OCTOBER - DECEMBER 2026</text>

    <line x1="30" y1="345" x2="490" y2="345" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="6,4"/>

    <!-- Amount Summary -->
    <rect x="35" y="365" width="450" height="90" fill="#f0fdf4" stroke="#86efac" rx="6"/>
    <text x="55" y="400" font-family="'Courier New', monospace" font-size="16" fill="#14532d" font-weight="bold">NET CASH PAID:</text>
    <text x="465" y="400" font-family="'Courier New', monospace" font-size="20" fill="#14532d" font-weight="bold" text-anchor="end">PKR 14,500.00</text>

    <text x="55" y="432" font-family="'Courier New', monospace" font-size="13" fill="#166534">SERVICE FEE / DEDUCTION:</text>
    <text x="465" y="432" font-family="'Courier New', monospace" font-size="13" fill="#166534" font-weight="bold" text-anchor="end">PKR 0.00 (ZERO)</text>

    <line x1="30" y1="475" x2="490" y2="475" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="6,4"/>

    <text x="260" y="505" font-family="'Courier New', monospace" font-size="12" fill="#475569" text-anchor="middle">RETAIN THIS RECEIPT FOR YOUR RECORD</text>
    <text x="260" y="525" font-family="'Courier New', monospace" font-size="11" fill="#dc2626" font-weight="bold" text-anchor="middle">کسی ایجنٹ کو کٹوتی نہ دیں۔ شکایت پر 0800-26477 ملائیں</text>
    <text x="260" y="550" font-family="'Courier New', monospace" font-size="10" fill="#94a3b8" text-anchor="middle">REF: BISP-ATM-TXN-2026-9812739</text>
  </g>
</svg>
`;
}

function createFormFillingSlipSvg() {
  return `
<svg width="1200" height="675" viewBox="0 0 1200 675" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadowForm" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="14" flood-color="#000000" flood-opacity="0.12"/>
    </filter>
  </defs>

  <rect width="1200" height="675" fill="#f8fafc"/>

  <!-- Document Paper Container -->
  <rect x="80" y="30" width="1040" height="615" rx="10" fill="#ffffff" filter="url(#shadowForm)" stroke="#cbd5e1"/>

  <!-- Form Header -->
  <rect x="80" y="30" width="1040" height="85" rx="10" fill="#1e3a8a"/>
  <circle cx="140" cy="72" r="24" fill="#ffffff" fill-opacity="0.15"/>
  <text x="140" y="80" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="20" fill="#ffffff" text-anchor="middle" font-weight="bold">★</text>
  <text x="180" y="65" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="20" fill="#ffffff" font-weight="bold">BENAZIR TALEEMI WAZAIF - SCHOOL ADMISSION VERIFICATION SLIP</text>
  <text x="180" y="90" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" fill="#bfdbfe">بے نظیر تعلیمی وظائف - اسکول داخلہ و حاضری تصدیقی فارم</text>

  <!-- Step 1: Student Information -->
  <g transform="translate(120, 140)">
    <rect width="960" height="135" rx="8" fill="#f1f5f9" stroke="#e2e8f0"/>
    <rect x="0" y="0" width="960" height="32" rx="8" fill="#e2e8f0"/>
    <text x="20" y="22" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" fill="#1e293b" font-weight="bold">مرحلہ 1: طالب علم کی معلومات (STUDENT DETAILS)</text>

    <text x="20" y="60" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" fill="#475569">Child Full Name:</text>
    <rect x="160" y="44" width="280" height="28" rx="4" fill="#ffffff" stroke="#94a3b8"/>
    <text x="170" y="63" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" fill="#0f172a" font-weight="600">Fatima Bibi (فاطمہ بی بی)</text>

    <text x="500" y="60" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" fill="#475569">Child NADRA B-Form No:</text>
    <rect x="680" y="44" width="260" height="28" rx="4" fill="#ffffff" stroke="#94a3b8"/>
    <text x="690" y="63" font-family="Courier New, monospace" font-size="14" fill="#0f172a" font-weight="bold">35201-9812476-4</text>

    <text x="20" y="105" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" fill="#475569">Mother CNIC (Kafaalat):</text>
    <rect x="160" y="88" width="280" height="28" rx="4" fill="#ffffff" stroke="#94a3b8"/>
    <text x="170" y="107" font-family="Courier New, monospace" font-size="14" fill="#0f172a" font-weight="bold">35201-8472910-2 (Active)</text>

    <text x="500" y="105" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" fill="#475569">Admission Number:</text>
    <rect x="680" y="88" width="260" height="28" rx="4" fill="#ffffff" stroke="#94a3b8"/>
    <text x="690" y="107" font-family="Courier New, monospace" font-size="14" fill="#0f172a" font-weight="bold">GGHS-2026-4819</text>
  </g>

  <!-- Step 2: School Verification -->
  <g transform="translate(120, 295)">
    <rect width="960" height="150" rx="8" fill="#f1f5f9" stroke="#e2e8f0"/>
    <rect x="0" y="0" width="960" height="32" rx="8" fill="#e2e8f0"/>
    <text x="20" y="22" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" fill="#1e293b" font-weight="bold">مرحلہ 2: اسکول کا ریکارڈ اور تصدیق (SCHOOL RECORD &amp; ATTENDANCE)</text>

    <text x="20" y="60" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" fill="#475569">School Name:</text>
    <rect x="160" y="44" width="780" height="28" rx="4" fill="#ffffff" stroke="#94a3b8"/>
    <text x="170" y="63" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" fill="#0f172a">Govt Girls Community High School, Tehsil Model Town, Lahore</text>

    <text x="20" y="105" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" fill="#475569">EMIS Code:</text>
    <rect x="160" y="88" width="180" height="28" rx="4" fill="#ffffff" stroke="#94a3b8"/>
    <text x="170" y="107" font-family="Courier New, monospace" font-size="14" fill="#0f172a" font-weight="bold">35210042</text>

    <text x="380" y="105" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" fill="#475569">Current Grade/Class:</text>
    <rect x="520" y="88" width="120" height="28" rx="4" fill="#ffffff" stroke="#94a3b8"/>
    <text x="540" y="107" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" fill="#0f172a" font-weight="bold">Grade 6th</text>

    <text x="670" y="105" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" fill="#475569">Attendance %:</text>
    <rect x="780" y="88" width="160" height="28" rx="4" fill="#dcfce7" stroke="#86efac"/>
    <text x="800" y="107" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" fill="#166534" font-weight="bold">82% (Eligible ✓)</text>
  </g>

  <!-- Step 3: Official Verification & Stamp -->
  <g transform="translate(120, 465)">
    <rect width="960" height="155" rx="8" fill="#eff6ff" stroke="#bfdbfe"/>
    <rect x="0" y="0" width="960" height="32" rx="8" fill="#dbeafe"/>
    <text x="20" y="22" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" fill="#1e40af" font-weight="bold">مرحلہ 3: ہیڈ ماسٹر دستخط و مہر (HEADMASTER STAMP &amp; TEHSIL SUBMISSION)</text>

    <text x="30" y="65" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" fill="#1e3a8a">Headmaster Signature:</text>
    <rect x="180" y="48" width="220" height="40" rx="4" fill="#ffffff" stroke="#94a3b8"/>
    <text x="200" y="74" font-family="'Brush Script MT', cursive, sans-serif" font-size="20" fill="#1e293b">Dr. Shaheen Akhtar</text>

    <!-- School Stamp Graphic -->
    <g transform="translate(460, 42)">
      <ellipse cx="90" cy="45" rx="85" ry="38" fill="none" stroke="#2563eb" stroke-width="2.5" stroke-dasharray="8,4"/>
      <text x="90" y="38" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" fill="#1d4ed8" font-weight="bold" text-anchor="middle">GOVT GIRLS HIGH SCHOOL</text>
      <text x="90" y="55" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10" fill="#1d4ed8" text-anchor="middle">★ VERIFIED &amp; STAMPED ★</text>
    </g>

    <!-- Next Action Callout -->
    <rect x="680" y="48" width="260" height="85" rx="6" fill="#1e40af"/>
    <text x="810" y="75" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" fill="#ffffff" font-weight="bold" text-anchor="middle">اگلا قدم (Next Step):</text>
    <text x="810" y="98" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" fill="#bfdbfe" text-anchor="middle">یہ فارم قریبی BISP تحصیل</text>
    <text x="810" y="118" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" fill="#bfdbfe" text-anchor="middle">آفس میں جمع کروائیں۔</text>
  </g>
</svg>
`;
}

function createGenericCardSvg({ title, subtitle, badgeText, badgeColor = '#0a522c', mainColor = '#0a522c', items = [], footerNote = '' }) {
  const itemsXml = items.map((item, idx) => {
    const y = 220 + idx * 75;
    return `
      <rect x="120" y="${y}" width="960" height="62" rx="8" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>
      <circle cx="160" cy="${y + 31}" r="16" fill="${mainColor}" fill-opacity="0.12"/>
      <text x="160" y="${y + 36}" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" fill="${mainColor}" font-weight="bold" text-anchor="middle">${idx + 1}</text>
      <text x="195" y="${y + 28}" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="16" fill="#0f172a" font-weight="bold">${escapeXml(item.title)}</text>
      <text x="195" y="${y + 48}" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" fill="#64748b">${escapeXml(item.desc)}</text>
    `;
  }).join('');

  return `
<svg width="1200" height="675" viewBox="0 0 1200 675" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="headerGradCard" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${mainColor}"/>
      <stop offset="100%" stop-color="#1b4332"/>
    </linearGradient>
    <filter id="shadowGen" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="14" flood-color="#000000" flood-opacity="0.1"/>
    </filter>
  </defs>

  <rect width="1200" height="675" fill="#f8fafc"/>
  <rect x="60" y="30" width="1080" height="615" rx="16" fill="#ffffff" filter="url(#shadowGen)" stroke="#e2e8f0"/>

  <!-- Top Hero Bar -->
  <rect x="60" y="30" width="1080" height="130" rx="16" fill="url(#headerGradCard)"/>
  <rect x="100" y="55" width="200" height="28" rx="14" fill="#ffffff" fill-opacity="0.2"/>
  <text x="200" y="74" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" fill="#ffffff" font-weight="bold" text-anchor="middle">${escapeXml(badgeText)}</text>
  
  <text x="100" y="115" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="26" fill="#ffffff" font-weight="bold">${escapeXml(title)}</text>
  <text x="100" y="142" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" fill="#d1fae5">${escapeXml(subtitle)}</text>

  <!-- Content Items -->
  ${itemsXml}

  <!-- Footer Notice -->
  <rect x="120" y="550" width="960" height="55" rx="8" fill="#f1f5f9"/>
  <text x="150" y="582" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" fill="#475569" font-weight="500">ℹ ${escapeXml(footerNote || 'Official government programme guidelines verified for 2026. Keep private credentials safe.')}</text>
</svg>
`;
}

// Map each of the 47 new images to its SVG generator
const newImagesSpec = [
  // 1. Official 8171 Web Portal UI clear screenshot
  {
    fileName: '8171-check-online-official-web-portal-cnic.webp',
    svg: createPortalMockupSvg()
  },
  // 2. 8171 SMS verification UI mockup
  {
    fileName: '8171-sms-verification-mockup.webp',
    svg: createSmsMockupSvg()
  },
  // 3. Bank ATM / Payment receipt sample illustration
  {
    fileName: 'bisp-payment-method-atm-biometric-safe-guide.webp',
    svg: createAtmReceiptSvg()
  },
  {
    fileName: 'bisp-8171-paise-check-karne-ka-tarika-atm-cash.webp',
    svg: createAtmReceiptSvg()
  },
  // 4. Step-by-step form filling screenshots
  {
    fileName: 'benazir-taleemi-wazaif-form-download-school-slip.webp',
    svg: createFormFillingSlipSvg()
  },
  {
    fileName: 'bisp-pser-updates-dynamic-survey-form.webp',
    svg: createGenericCardSvg({
      title: 'BISP & PSER Updates 2026: Dynamic Survey Registration',
      subtitle: 'Official NSER Tehsil Desk Registration Form & 8171 Portal Verification',
      badgeText: 'NSER DYNAMIC REGISTRY',
      mainColor: '#0a522c',
      items: [
        { title: 'Step 1: Tehsil Registration Desk Token', desc: 'Visit nearest BISP tehsil center with original CNIC and children B-Forms to get a queue token.' },
        { title: 'Step 2: Biometric Household Survey (Roster)', desc: 'Complete socio-economic questionnaire with computer operator and register family roster.' },
        { title: 'Step 3: NADRA Real-Time Verification', desc: 'NADRA biometric fingerprint scan confirms marital status and family tree authenticity.' },
        { title: 'Step 4: PMT Score Calculation & 8171 Confirmation', desc: 'Poverty Means Test score is updated; eligible families receive confirmation SMS from 8171.' }
      ],
      footerNote: 'Always verify status on official 8171 portal (8171.bisp.gov.pk). Registration at tehsil desks is free.'
    })
  },
  // 5. CM Punjab E-Bikes and Electric Schemes
  {
    fileName: 'electric-bike-scheme-expansions-phase-2.webp',
    svg: createGenericCardSvg({
      title: 'Electric Bike Scheme Expansions: 2026 Phase 2 Rules',
      subtitle: 'Punjab Government Subsidized EV Scooties & Bikes for Students',
      badgeText: 'PUNJAB E-BIKE PHASE 2',
      mainColor: '#0369a1',
      items: [
        { title: 'Expanded Quotas & Allocations', desc: 'Phase 2 increases quota for female students with 50% reserved for electric scooties in degree colleges.' },
        { title: 'Subsidy Structure & Down Payment', desc: 'Govt of Punjab provides Rs 20,000 upfront subsidy plus full markup payment on bank financing.' },
        { title: 'Monthly Installment Plan', desc: 'Easy monthly installments starting from Rs 1,800 for students via Bank of Punjab partner branches.' },
        { title: 'Application & Balloting via BOP Portal', desc: 'Transparent e-balloting conducted across Lahore, Multan, Faisalabad, and all divisions.' }
      ],
      footerNote: 'Apply strictly on official Punjab e-bike portal (bikes.punjab.gov.pk). No physical application fee.'
    })
  },
  {
    fileName: 'maryam-nawaz-electric-bike-scheme-2026-registration.webp',
    svg: createGenericCardSvg({
      title: 'Maryam Nawaz Electric Bike Scheme 2026 Registration',
      subtitle: 'Online Application Portal, Eligibility Checklist & Installment Guidelines',
      badgeText: 'CM PUNJAB INITIATIVE',
      mainColor: '#0284c7',
      items: [
        { title: 'Online Registration on Official Web Portal', desc: 'Register account on bikes.punjab.gov.pk using CNIC / B-Form and college registration number.' },
        { title: 'Valid Driving License / Learner Permit Required', desc: 'Applicants must possess a valid learner permit or driving license issued by Punjab Traffic Police.' },
        { title: 'Student Eligibility Criteria', desc: 'Regular enrolled students of public sector colleges and universities across Punjab qualify.' },
        { title: 'Bank of Punjab (BOP) Verification', desc: 'Guarantor verification and account setup handled seamlessly through designated BOP student desks.' }
      ],
      footerNote: 'Official portal: bikes.punjab.gov.pk | Do not pay cash to unauthorized agents or dealerships.'
    })
  },
  {
    fileName: 'cm-and-pm-electric-bike-schemes-comparison.webp',
    svg: createGenericCardSvg({
      title: 'CM & PM Electric Bike Schemes: Federal vs Provincial',
      subtitle: 'Comprehensive Comparison of Subsidies, Eligibility & Financing Models',
      badgeText: 'POLICY COMPARISON 2026',
      mainColor: '#0f766e',
      items: [
        { title: 'Federal PAVE Scheme (pave.gov.pk)', desc: 'National green transition subsidy covering federal capital and nationwide public sector commuters.' },
        { title: 'CM Punjab E-Bike Scheme (bikes.punjab.gov.pk)', desc: 'Punjab-specific student transport initiative with 20,000 subsidized bikes and pink scooties.' },
        { title: 'Battery Warranty & Charging Network', desc: 'Standardized lithium iron phosphate (LiFePO4) battery packs with 3-year warranty and home charging.' },
        { title: 'Financing Markup Comparison', desc: 'Both schemes feature zero-interest or subsidized interest supported directly by government budgets.' }
      ],
      footerNote: 'Cross-check applications on pave.gov.pk (Federal) and bikes.punjab.gov.pk (Punjab).'
    })
  },
  // 6. Youth loans
  {
    fileName: 'youth-loans-financing-drive-tiers-guide.webp',
    svg: createGenericCardSvg({
      title: 'Youth Loans & Financing Drive 2026: Tiers & Application',
      subtitle: 'Tier 1, Tier 2, and Tier 3 Subsidized Business Loans for Young Entrepreneurs',
      badgeText: 'PRIME MINISTER YOUTH PROGRAM',
      mainColor: '#1e3a8a',
      items: [
        { title: 'Tier 1: Up to PKR 500,000 (0% Markup)', desc: 'Micro loans disbursed through partner MFBs and commercial banks with zero interest.' },
        { title: 'Tier 2: PKR 500,000 to PKR 1.5 Million (5% Markup)', desc: 'SME working capital finance with subsidized fixed markup and flexible repayment terms.' },
        { title: 'Tier 3: PKR 1.5 Million to PKR 7.5 Million (7% Markup)', desc: 'Expansion capital for registered enterprises with credit guarantees backed by State Bank of Pakistan.' },
        { title: 'Online Application on pmyp.gov.pk', desc: 'Submit business proposal and CNIC directly via the National Youth Loan digital portal.' }
      ],
      footerNote: 'Official portal: pmyp.gov.pk | State Bank of Pakistan subsidized lending guidelines apply.'
    })
  },
  // 7. Fuel relief
  {
    fileName: 'prime-minister-fuel-relief-scheme-9771-sms.webp',
    svg: createGenericCardSvg({
      title: 'Prime Minister Fuel Relief Scheme: 9771 SMS Registration',
      subtitle: 'Monthly Petrol Subsidy for Motorcycle Owners & Low-Income Commuters',
      badgeText: '9771 SMS SUBSIDY',
      mainColor: '#b45309',
      items: [
        { title: 'SMS Verification via 9771 Short Code', desc: 'Text CNIC number without dashes to 9771 from a SIM card registered in your name.' },
        { title: 'Vehicle Registration Cross-Check', desc: 'NADRA and Excise databases match vehicle registration (motorcycle under 125cc).' },
        { title: 'Subsidy Token Issuance', desc: 'Approved beneficiaries receive a monthly digital fuel subsidy OTP valid at designated pumps.' },
        { title: 'Per-Litre Relief Calculation', desc: 'Direct discount applied per litre up to monthly quota limit for registered motorcycle riders.' }
      ],
      footerNote: 'Only communicate with official shortcode 9771. Never share fuel OTPs with strangers.'
    })
  },
  {
    fileName: 'pm-fuel-relief-scheme-updates-token-status.webp',
    svg: createGenericCardSvg({
      title: 'PM Fuel Relief Scheme Updates: Token Status & Rules',
      subtitle: '9771 SMS Token Status, Monthly Fuel Quotas & Eligibility Criteria',
      badgeText: 'FUEL RELIEF 2026',
      mainColor: '#d97706',
      items: [
        { title: 'Checking 9771 Token Status', desc: 'Confirm remaining litres balance and token activation date directly via SMS reply.' },
        { title: 'Eligible Vehicle Categories', desc: 'Strictly reserved for 2-wheelers and registered low-capacity commercial rickshaws.' },
        { title: 'Point of Sale (POS) Pump Redemption', desc: 'Show OTP token at authorized PSO and partner fuel stations across Pakistan.' },
        { title: 'Household Income Cap', desc: 'Filtered through NSER database to prioritize families below specified income thresholds.' }
      ],
      footerNote: 'Fuel relief updates are announced via official Ministry of Petroleum and Information channels.'
    })
  },
  // 8. Solar Housing
  {
    fileName: 'punjab-solar-housing-updates-roshan-gharana.webp',
    svg: createGenericCardSvg({
      title: 'Punjab Solar & Housing Updates: Roshan Gharana Status',
      subtitle: 'CM Punjab Solar Panel Scheme, 8800 SMS & Housing Updates',
      badgeText: 'ROSHAN GHARANA 2026',
      mainColor: '#15803d',
      items: [
        { title: 'Protected Consumers Quota (Up to 200 Units)', desc: '100% free rooftop solar panel systems provided to low-consumption households.' },
        { title: '8800 SMS Registration & Bill Reference', desc: 'Verify eligibility by sending electricity bill reference number to official shortcode 8800.' },
        { title: 'PITB Digital Balloting', desc: 'Divisional balloting results published transparently by Punjab Information Technology Board.' },
        { title: 'Net-Metering & Inverter Warranty', desc: 'Complete solar system includes Tier-1 solar panels, smart inverter, and structural mounting.' }
      ],
      footerNote: 'Official portal: energy.punjab.gov.pk | Verify electricity bill reference number on 8800.'
    })
  },
  {
    fileName: 'housing-social-cards-punjab-online-apply.webp',
    svg: createGenericCardSvg({
      title: 'Housing & Social Cards Punjab: Complete Guide',
      subtitle: 'Apni Chhat Apna Ghar, Himmat Card & Social Welfare Schemes 2026',
      badgeText: 'PUNJAB WELFARE CARDS',
      mainColor: '#1d4ed8',
      items: [
        { title: 'Apni Chhat Apna Ghar Housing Loan', desc: 'Interest-free construction loan of up to Rs 1.5 Million repayable over 7 years.' },
        { title: 'Himmat Card for Differently Abled Persons', desc: 'Quarterly financial assistance of Rs 10,500 disbursed via Bank of Punjab ATM cards.' },
        { title: 'Kissan Card & Livestock Support', desc: 'Direct agricultural subsidies on fertilizer, seeds, and animal feed for rural families.' },
        { title: 'DPMIS & PITB Centralized Portals', desc: 'Single-window verification using CNIC across Punjab Social Protection Authority portals.' }
      ],
      footerNote: 'Apply on acag.punjab.gov.pk for housing and dpmis.punjab.gov.pk for disability welfare.'
    })
  },
  // 9. PAVE Scheme
  {
    fileName: 'pave-scheme-electric-bike-subsidy-online-apply.webp',
    svg: createGenericCardSvg({
      title: 'PAVE Scheme 2026: Electric Bike Subsidy Online Apply',
      subtitle: 'Federal Electric Vehicle Subsidy, Eligibility & Portal Guidelines',
      badgeText: 'FEDERAL PAVE SCHEME',
      mainColor: '#047857',
      items: [
        { title: 'Federal Portal Registration (pave.gov.pk)', desc: 'Register CNIC and verify residency status on the national electric vehicle subsidy portal.' },
        { title: 'Approved EV Manufacturers & Models', desc: 'Select from certified electric bike manufacturers offering standardized speed and battery specs.' },
        { title: 'Direct Federal Subsidy Voucher', desc: 'Approved applicants receive a direct price reduction voucher at the time of delivery.' },
        { title: 'Environmental & Green Transport Goal', desc: 'National clean transport transition aiming to reduce urban smog and fossil fuel dependency.' }
      ],
      footerNote: 'Visit pave.gov.pk for certified EV models and manufacturer distribution centers.'
    })
  },
  // 10. Apna Ghar
  {
    fileName: 'apna-ghar-social-welfare-services.webp',
    svg: createGenericCardSvg({
      title: 'Apna Ghar & Social Welfare: Housing Services',
      subtitle: 'Complete Guide to Shelter Support, Social Housing & Loan Qualifications',
      badgeText: 'SOCIAL HOUSING 2026',
      mainColor: '#4338ca',
      items: [
        { title: 'Wazir-e-Azam Apna Ghar Housing Scheme', desc: 'Subsidized residential units and affordable housing finance for low-income citizens.' },
        { title: 'Panahgah & Social Protection Centers', desc: 'Temporary shelter, warm meals, and basic healthcare facilities across major urban hubs.' },
        { title: 'Low-Cost Housing Markup Subsidy', desc: 'State Bank of Pakistan markup support ensuring affordable monthly mortgage payments.' },
        { title: 'Title Deed & Land Registry Safety', desc: 'Ensure all property records are verified through Punjab Land Records Authority (PLRA).' }
      ],
      footerNote: 'Verify housing developments with authorized provincial housing authorities.'
    })
  },
  // 11. Ehsaas Balance Check & Ramzan Package
  {
    fileName: 'ehsaas-program-balance-check-cnic.webp',
    svg: createGenericCardSvg({
      title: 'Ehsaas Program Balance Check: Complete 2026 Guide',
      subtitle: 'How to Check Available Balance by CNIC Online & ATM Verification',
      badgeText: 'BALANCE CHECK 2026',
      mainColor: '#0d9488',
      items: [
        { title: '8171 Web Portal Balance Verification', desc: 'Enter CNIC and captcha on 8171.bisp.gov.pk to check payment release status.' },
        { title: 'HBL & Bank Alfalah Biometric ATM Check', desc: 'Insert thumb on ATM scanner and select Balance Inquiry without any service deduction.' },
        { title: 'Retailer Point-of-Sale (POS) Check', desc: 'Verify balance at authorized BISP e-Sahulat and Konnect retailers before withdrawal.' },
        { title: 'Handling Zero Balance or Delayed Releases', desc: 'Quarterly tranches are released in phases; check your tehsil schedule if delayed.' }
      ],
      footerNote: 'Balance checks are 100% free. Never pay a fee to an agent for checking your balance.'
    })
  },
  {
    fileName: 'ramzan-package-check-8171-ration-relief.webp',
    svg: createGenericCardSvg({
      title: 'Ramzan Package Check: 8171 & 9999 Verification',
      subtitle: 'Free Flour, Ration Subsidy & Utility Stores Relief Verification Guide',
      badgeText: 'RAMZAN RELIEF 2026',
      mainColor: '#b45309',
      items: [
        { title: '8171 CNIC SMS for BISP Families', desc: 'BISP active Kafaalat beneficiaries automatically qualify for special Ramzan cash grants.' },
        { title: 'Nigehban Package Ration Verification', desc: 'Check household food hamper delivery status via provincial district administration teams.' },
        { title: 'Utility Stores Targeted Subsidy', desc: 'Present CNIC at Utility Stores Corporation counters for subsidized ghee, sugar, and flour.' },
        { title: 'Scam Alert: Fake 9999 and SMS Offers', desc: 'Only trust official government announcements. Do not send balance to private numbers.' }
      ],
      footerNote: 'Ramzan package assistance is delivered directly to homes or authorized government distribution points.'
    })
  },
  // 12. PMT score
  {
    fileName: 'what-is-pmt-score-bisp-formula-calculator.webp',
    svg: createGenericCardSvg({
      title: 'What Is PMT Score? BISP & Ehsaas Formula Explained',
      subtitle: 'Proxy Means Test Score Calculation, Cut-Off Thresholds & Household Survey',
      badgeText: 'PMT SCORE EXPLAINED',
      mainColor: '#9333ea',
      items: [
        { title: 'Definition of PMT Score (0 to 100)', desc: 'Proxy Means Test score estimates household poverty level based on assets, income, and family size.' },
        { title: 'Official Benazir Kafaalat Cut-Off (32)', desc: 'Households with a PMT score of 32 or below qualify for regular quarterly Kafaalat stipends.' },
        { title: 'Key Indicators Evaluated in Survey', desc: 'Housing structure, consumer durables, livestock, land ownership, and dependents ratio.' },
        { title: 'Updating Your PMT Score', desc: 'If family circumstances changed, request a Dynamic Survey update at your local BISP tehsil office.' }
      ],
      footerNote: 'PMT score is generated by algorithmic survey data. No third party can manually alter your score.'
    })
  },
  {
    fileName: 'how-to-check-bisp-eligibility-portal-sms-office.webp',
    svg: createGenericCardSvg({
      title: 'How to Check BISP Eligibility: 3 Official Routes',
      subtitle: 'Official 8171 Web Portal, 8171 SMS Code & Tehsil Registration Office',
      badgeText: 'ELIGIBILITY ROUTES',
      mainColor: '#059669',
      items: [
        { title: 'Route 1: Official 8171 Web Portal', desc: 'Instant check online at 8171.bisp.gov.pk using CNIC and captcha code.' },
        { title: 'Route 2: 8171 SMS Service', desc: 'Send 13-digit CNIC to shortcode 8171 from any registered mobile network in Pakistan.' },
        { title: 'Route 3: In-Person Tehsil Registration Desk', desc: 'Visit the BISP office for comprehensive NSER database record review and biometric verification.' },
        { title: 'Important Safety Reminder', desc: 'Keep your original CNIC safe and never disclose confidential OTP codes.' }
      ],
      footerNote: 'All three official routes are free of charge. Report any fee demands to 0800-26477.'
    })
  },
  // 13. Balance Check & Biometrics
  {
    fileName: 'bisp-balance-check-by-cnic-2026-online.webp',
    svg: createGenericCardSvg({
      title: 'BISP Balance Check by CNIC 2026: Easy 8171 Guide',
      subtitle: 'Verify Available Qist Amount, Payment Cycle & Withdrawal Status',
      badgeText: 'CNIC BALANCE CHECK',
      mainColor: '#047857',
      items: [
        { title: 'Online 8171 CNIC Inquiry', desc: 'View current quarterly disbursement status on the BISP 8171 official web portal.' },
        { title: 'Current Payment Rate (PKR 14,500)', desc: 'Official Benazir Kafaalat tranche is exactly Rs 14,500 per eligible household.' },
        { title: 'Campsite vs ATM Withdrawal Options', desc: 'Choose between district school campsite distribution or 24/7 bank biometric ATM.' },
        { title: 'SMS Transaction Confirmation', desc: 'Receive immediate withdrawal confirmation SMS on your registered phone number.' }
      ],
      footerNote: 'Do not pay commission or deduction fees to agents. Current stipend is PKR 14,500 in full.'
    })
  },
  {
    fileName: 'bisp-payment-approved-no-cash-received-complaint.webp',
    svg: createGenericCardSvg({
      title: 'BISP Payment "Approved" But No Cash Received: What to Do',
      subtitle: 'Troubleshooting Common Disbursement Holds, Bank Delays & Complaints',
      badgeText: 'PAYMENT RESOLUTION',
      mainColor: '#dc2626',
      items: [
        { title: 'Check Phased Tehsil Distribution Schedule', desc: 'Payments are rolled out by district clusters; approval may precede actual cash arrival at bank branch.' },
        { title: 'Retailer Device Out of Cash or Network Error', desc: 'If an agent device displays transaction pending, do not provide second thumb impression without receipt.' },
        { title: 'Bank Account & Blocked Card Issues', desc: 'Verify if your BISP debit card has expired and transition to biometric counter collection.' },
        { title: 'Filing Official Complaint (0800-26477)', desc: 'Lodge an immediate grievance with BISP control room with your CNIC and agent retailer ID.' }
      ],
      footerNote: 'Never leave an agent counter without cash or an official printed failure slip.'
    })
  },
  {
    fileName: 'bisp-biometric-verification-failed-nadra-device-fix.webp',
    svg: createGenericCardSvg({
      title: 'BISP Biometric Verification Failed: Complete Step-by-Step Fix',
      subtitle: 'Resolving Fingerprint Mismatch, NADRA Device Errors & Agent Verification',
      badgeText: 'BIOMETRIC RESOLUTION',
      mainColor: '#e11d48',
      items: [
        { title: 'Step 1: Clean Hands & Sensor Care', desc: 'Wash and dry hands thoroughly; cold or dry skin frequently causes sensor read failures.' },
        { title: 'Step 2: Multiple Finger Alternatives', desc: 'BISP payment devices allow scanning index fingers and thumbs; try alternate fingers.' },
        { title: 'Step 3: NADRA e-Sahulat Biometric Update', desc: 'Visit NADRA Mega Center for biometric data refresh if fingerprints are worn or faded.' },
        { title: 'Step 4: BISP Special Case / BVS Exemption', desc: 'Elderly beneficiaries with permanent biometric degradation can apply for system exemption.' }
      ],
      footerNote: 'Biometric updates at NADRA renew your national verification across all welfare schemes.'
    })
  },
  {
    fileName: 'benazir-income-support-programme-bisp-8171-official-guide.webp',
    svg: createGenericCardSvg({
      title: 'Benazir Income Support Programme (BISP) 8171 Guide',
      subtitle: 'Complete Overview of Social Protection, Cash Transfers & Education Stipends',
      badgeText: 'OFFICIAL GUIDE 2026',
      mainColor: '#0a522c',
      items: [
        { title: 'Benazir Kafaalat Programme', desc: 'Unconditional quarterly cash transfers of Rs 14,500 empowering underprivileged women heads.' },
        { title: 'Benazir Taleemi Wazaif', desc: 'Conditional cash stipends for children primary to higher secondary education conditional on 70% attendance.' },
        { title: 'Benazir Nashonuma Nutrition Initiative', desc: 'Maternal health and specialized nutrition support for pregnant mothers and toddlers under two years.' },
        { title: 'National Socio-Economic Registry (NSER)', desc: 'Dynamic digital survey maintaining verified socio-economic profiles of Pakistani households.' }
      ],
      footerNote: 'Official portal: bisp.gov.pk and 8171.bisp.gov.pk | Serving over 9.3 million families.'
    })
  },
  // 14. Registration & Trust
  {
    fileName: 'check-bisp-eligibility-8171-portal-steps.webp',
    svg: createGenericCardSvg({
      title: 'Check BISP Eligibility Through 8171 Portal: Step-by-Step',
      subtitle: 'How to Correctly Enter CNIC, Solve Captcha & Read Result Status',
      badgeText: '8171 PORTAL WALKTHROUGH',
      mainColor: '#0b663b',
      items: [
        { title: 'Step 1: Open Official URL (8171.bisp.gov.pk)', desc: 'Ensure you are on the authentic government portal with HTTPS security protocol.' },
        { title: 'Step 2: Enter 13-Digit CNIC Number', desc: 'Type your CNIC digits without hyphens in the primary input box.' },
        { title: 'Step 3: Input 4-Digit Image Captcha', desc: 'Read the code shown in the security box and enter into the verification field.' },
        { title: 'Step 4: Understand Your Result Status', desc: 'Screen shows whether you are eligible (Ahal), ineligible, or need a dynamic survey update.' }
      ],
      footerNote: 'The 8171 portal is mobile-friendly and free. Avoid unauthorized third-party apps.'
    })
  },
  {
    fileName: 'taleemi-wazaif-registration-checklist-school.webp',
    svg: createGenericCardSvg({
      title: 'Taleemi Wazaif Registration: Family Checklist',
      subtitle: 'Required Documents, School Admission Slips & Tehsil Desk Steps',
      badgeText: 'EDUCATION STIPENDS',
      mainColor: '#2563eb',
      items: [
        { title: 'Mother Must Be Active Kafaalat Beneficiary', desc: 'Taleemi Wazaif stipends are disbursed to registered mothers enrolled in Benazir Kafaalat.' },
        { title: 'NADRA Child Registration Certificate (B-Form)', desc: 'Original B-Form proving child relationship with mother is mandatory.' },
        { title: 'School Admission Slip with EMIS Code', desc: 'Get admission form signed and stamped by the school headmaster or principal.' },
        { title: '70% Attendance Compliance Requirement', desc: 'Stipends are credited each quarter only if student maintains 70% school attendance.' }
      ],
      footerNote: 'Higher quarterly stipends provided for girls to encourage female secondary education.'
    })
  },
  {
    fileName: 'avoid-bisp-fraud-scam-alert-red-flags.webp',
    svg: createGenericCardSvg({
      title: 'BISP Scam Alert: 7 Red Flags to Recognize',
      subtitle: 'Protect Yourself from Fake Lottery SMS, Fee Demands & WhatsApp Fraud',
      badgeText: 'SAFETY & ANTI-FRAUD',
      mainColor: '#b91c1c',
      items: [
        { title: 'Red Flag 1: Messages from 11-Digit Mobile Numbers', desc: 'BISP only texts from 8171. Never trust messages sent from 03xx numbers.' },
        { title: 'Red Flag 2: Demanding "Registration" or "Processing" Fee', desc: 'All official BISP services, surveys, and payments are 100% free of cost.' },
        { title: 'Red Flag 3: Requesting ATM PIN or OTP Codes', desc: 'Government officials never ask for your private banking PIN or mobile OTP.' },
        { title: 'Red Flag 4: WhatsApp Lottery & Prize Claims', desc: 'BISP does not run lottery draws or prize schemes. Report scams to PTA at 8171.' }
      ],
      footerNote: 'Report fraud immediately to BISP toll-free helpline 0800-26477 or FIA Cybercrime.'
    })
  },
  {
    fileName: 'nser-survey-not-found-bisp-no-record-solution.webp',
    svg: createGenericCardSvg({
      title: 'NSER Survey Not Found: What "No Record" Means',
      subtitle: 'How to Resolve 8171 No Record Status & Schedule Dynamic Survey',
      badgeText: 'NSER RECORD FIX',
      mainColor: '#c2410c',
      items: [
        { title: 'Understanding "No Record Found" Message', desc: 'Indicates your household data has not yet been registered in the national registry database.' },
        { title: 'Visit BISP Tehsil Registration Center', desc: 'Locate your local tehsil office to take a registration token for the Dynamic Registry desk.' },
        { title: 'Mandatory Documents to Bring', desc: 'Original CNIC of all adult household members, children B-Forms, and recent electricity utility bill.' },
        { title: 'Survey Processing Duration', desc: 'Once the survey is completed, PMT score evaluation takes approximately 3 to 6 weeks.' }
      ],
      footerNote: 'Dynamic registry desks are available year-round at all BISP tehsil offices.'
    })
  },
  {
    fileName: 'nser-pmt-score-check-survey-desk.webp',
    svg: createGenericCardSvg({
      title: 'PMT Score Check: NSER Records & Office Follow-up',
      subtitle: 'How to Verify Your Household PMT Score at BISP Tehsil Counters',
      badgeText: 'PMT CHECK GUIDE',
      mainColor: '#4f46e5',
      items: [
        { title: 'Verification at Tehsil Desk Counter', desc: 'Inquire directly with a BISP desk officer using your computerized national identity card.' },
        { title: 'Understanding Your PMT Number', desc: 'Scores ranging from 0 to 32 signify eligibility for Kafaalat unconditional cash transfers.' },
        { title: 'Taleemi Wazaif & Nashonuma Thresholds', desc: 'Programs may allow slightly higher cut-offs (up to PMT 37) for specialized education aid.' },
        { title: 'Re-Survey Application (Every 3 Years)', desc: 'Households are entitled to dynamic re-survey if financial conditions deteriorate.' }
      ],
      footerNote: 'Official PMT checks are conducted strictly at government counters without fee.'
    })
  },
  {
    fileName: 'benazir-kafaalat-registration-cnic-check-walkthrough.webp',
    svg: createGenericCardSvg({
      title: 'Benazir Kafaalat Registration & CNIC Check Walkthrough',
      subtitle: 'Complete Guide from First Survey to Quarterly Cash Disbursement',
      badgeText: 'KAFAALAT WALKTHROUGH',
      mainColor: '#047857',
      items: [
        { title: 'Phase 1: Dynamic Survey Registration', desc: 'Complete household interview and documentation at local BISP tehsil center.' },
        { title: 'Phase 2: NADRA Cross-Verification', desc: 'Automated verification checks family trees, vehicle ownership, and passport data.' },
        { title: 'Phase 3: 8171 Eligibility Notification', desc: 'Official SMS from 8171 confirms qualification and trimester stipend allocation.' },
        { title: 'Phase 4: Biometric Payment Collection', desc: 'Withdraw Rs 14,500 via biometric ATM or official payment campsite in your district.' }
      ],
      footerNote: 'BISP Benazir Kafaalat is Pakistan’s flagship social protection unconditional grant.'
    })
  },
  {
    fileName: 'benazir-kafaalat-payment-guide-atm-camp.webp',
    svg: createGenericCardSvg({
      title: 'Benazir Kafaalat Payment Guide: Verify & Collect',
      subtitle: 'Official Disbursement Campsites, Biometric ATMs & Safety Guidelines',
      badgeText: 'PAYMENT GUIDE 2026',
      mainColor: '#0a522c',
      items: [
        { title: 'HBL & Bank Alfalah Biometric ATM Network', desc: 'Use biometric cash dispensers 24/7 without requiring an ATM plastic card.' },
        { title: 'Dedicated Tehsil Payment Campsites', desc: 'District campsites provide shaded waiting areas, security, and dedicated complaint counters.' },
        { title: 'Always Demand Full Cash (PKR 14,500)', desc: 'Accept only the full stipend amount and count currency before leaving the counter.' },
        { title: 'Insist on Printed Transaction Slip', desc: 'Ensure you receive a printed thermal receipt showing zero fee deduction.' }
      ],
      footerNote: 'Emergency helpline 0800-26477 is open for immediate reporting of illegal deductions.'
    })
  },
  {
    fileName: 'documents-for-bisp-registration-checklist.webp',
    svg: createGenericCardSvg({
      title: 'Documents for BISP, Taleemi Wazaif & Ehsaas Registration',
      subtitle: 'Complete Paperwork Checklist for Tehsil Dynamic Survey Desks',
      badgeText: 'DOCUMENT CHECKLIST',
      mainColor: '#1d4ed8',
      items: [
        { title: 'Original CNIC of Female Beneficiary', desc: 'Must be valid, computerized national identity card issued by NADRA (not expired).' },
        { title: 'NADRA Child Registration Certificate (B-Form)', desc: 'Required for all household children for education and nutrition program enrollment.' },
        { title: 'Recent Household Electricity / Gas Bill', desc: 'Consumer reference bill verifying physical residential address in the district.' },
        { title: 'Registered Mobile SIM Card in Beneficiary Name', desc: 'Active SIM required for receiving official 8171 SMS notifications.' }
      ],
      footerNote: 'Photocopies are not needed if you bring original documents for live digital scanning.'
    })
  },
  {
    fileName: 'cnic-check-online-verification-across-programmes.webp',
    svg: createGenericCardSvg({
      title: 'CNIC Check Online: Verification Across Welfare Schemes',
      subtitle: 'Centralized National Identity Verification Across Federal & Provincial Portals',
      badgeText: 'CNIC VERIFICATION',
      mainColor: '#0f766e',
      items: [
        { title: 'Federal BISP 8171 Portal (8171.bisp.gov.pk)', desc: 'Verify Benazir Kafaalat, Taleemi Wazaif, and Nashonuma cash assistance status.' },
        { title: 'Punjab Social Protection (dpmis.punjab.gov.pk)', desc: 'Check Himmat Card, Kisan Card, and Roshan Gharana solar eligibility.' },
        { title: 'Prime Minister Youth Program (pmyp.gov.pk)', desc: 'Track youth business loan application and subsidized tier financing status.' },
        { title: 'Sehat Sahulat Program (8500 SMS)', desc: 'Verify family healthcare coverage under universal health insurance.' }
      ],
      footerNote: 'Only enter CNIC numbers on authorized government domain extensions (.gov.pk).'
    })
  },
  {
    fileName: 'what-is-bisp-meaning-programmes-overview.webp',
    svg: createGenericCardSvg({
      title: 'What Is BISP? Meaning, Programmes & Official Services',
      subtitle: 'Complete Overview of Pakistan’s Premier Social Safety Net',
      badgeText: 'BISP OVERVIEW 2026',
      mainColor: '#0a522c',
      items: [
        { title: 'Founded Under BISP Act 2010', desc: 'Autonomous federal social safety net established to eradicate extreme poverty in Pakistan.' },
        { title: 'Unconditional Cash Transfers (Kafaalat)', desc: 'Financial autonomy provided directly to female family heads via biometric payments.' },
        { title: 'Human Capital Development (Wazaif & Health)', desc: 'Incentivizing school enrollment and child nutrition through conditional cash support.' },
        { title: 'Transparent Delivery Systems', desc: '100% digital targeting via National Socio-Economic Registry (NSER) and NADRA biometrics.' }
      ],
      footerNote: 'Official portal: bisp.gov.pk | Headquartered in Sector G-5/1, Islamabad.'
    })
  },
  {
    fileName: 'nashonuma-program-nutrition-stipend-registration.webp',
    svg: createGenericCardSvg({
      title: 'Nashonuma Program: Eligibility, Support & Registration',
      subtitle: 'Specialized Nutrition Food & Health Stipends for Mothers and Toddlers',
      badgeText: 'BENAZIR NASHONUMA',
      mainColor: '#0891b2',
      items: [
        { title: 'Targeted Beneficiaries (Mothers & Under-2s)', desc: 'Pregnant women, lactating mothers, and infants under two years enrolled in Kafaalat.' },
        { title: 'Specialized Nutritious Food (SNF)', desc: 'Distribution of high-nutrient sachets to combat stunting and severe acute malnutrition.' },
        { title: 'Quarterly Cash Health Stipend', desc: 'Additional financial incentive for attending mandatory monthly immunization checkups.' },
        { title: 'Registration at District Health Centers', desc: 'Enroll at dedicated Benazir Nashonuma Facilitation Centers located in tehsil hospitals.' }
      ],
      footerNote: 'Nashonuma centers operate inside government Tehsil Headquarter (THQ) hospitals.'
    })
  },
  {
    fileName: 'zakat-in-pakistan-bisp-eligibility-comparison.webp',
    svg: createGenericCardSvg({
      title: 'Zakat in Pakistan & BISP: Eligibility & Official Routes',
      subtitle: 'Comparing District Zakat Committees Guzara Grants and BISP Kafaalat',
      badgeText: 'ZAKAT & WELFARE',
      mainColor: '#166534',
      items: [
        { title: 'District Zakat Committees (Guzara Grant)', desc: 'Local Zakat councils distribute monthly subsistence assistance to Mustahiqeen.' },
        { title: 'BISP Federal Cash Transfers', desc: 'Automated quarterly cash transfers based on national PMT score benchmarks.' },
        { title: 'Healthcare & Marriage Assistance Grants', desc: 'Provincial Zakat funds provide targeted medical support and Jahez funds for daughters.' },
        { title: 'Eligibility Separation Rules', desc: 'Beneficiaries must verify cross-eligibility rules between Zakat and federal programs.' }
      ],
      footerNote: 'Inquire about Zakat grants at your local District Zakat & Ushr Office.'
    })
  },
  {
    fileName: 'bisp-eligibility-criteria-qualifying-rules.webp',
    svg: createGenericCardSvg({
      title: 'BISP Eligibility Criteria: Who Qualifies for Kafaalat',
      subtitle: 'Poverty Score Benchmarks, Household Requirements & Disqualification Rules',
      badgeText: 'QUALIFYING CRITERIA',
      mainColor: '#065f46',
      items: [
        { title: 'PMT Score Below 32 Threshold', desc: 'Determined algorithmically through the NSER Dynamic Registry survey data.' },
        { title: 'Female Household Representation', desc: 'Cash assistance is registered in the name of the married, widowed, or divorced female head.' },
        { title: 'Government Employment Disqualification', desc: 'Families with members employed in public sector institutions do not qualify.' },
        { title: 'Automated Asset Exclusion Checks', desc: 'NADRA filters exclude individuals holding commercial real estate, luxury vehicles, or international travel records.' }
      ],
      footerNote: 'Eligibility is evaluated through national data matching; personal references cannot bypass criteria.'
    })
  },
  {
    fileName: 'what-counts-as-a-good-pmt-score-ranges.webp',
    svg: createGenericCardSvg({
      title: 'What Counts as a "Good" PMT Score for BISP?',
      subtitle: 'Benchmark Cut-Off Ranges, Score Interpretations & Survey Thresholds',
      badgeText: 'PMT SCORE BENCHMARKS',
      mainColor: '#7c3aed',
      items: [
        { title: 'Score 0 to 32: Eligible for Kafaalat', desc: 'Eligible for regular quarterly unconditional cash transfers of Rs 14,500.' },
        { title: 'Score 32 to 37: Eligible for Conditional Wazaif', desc: 'May qualify for Taleemi Wazaif education grants and targeted utility store food subsidies.' },
        { title: 'Score Above 37: Ineligible for Cash Transfers', desc: 'Classified above poverty threshold; not eligible for unconditional social assistance.' },
        { title: 'Lower Score = Higher Eligibility Priority', desc: 'Unlike academic tests, a lower PMT score signifies greater socio-economic need.' }
      ],
      footerNote: 'Dynamic re-surveys can be requested at tehsil offices if household income changes.'
    })
  },
  {
    fileName: 'cm-punjab-himmat-card-dpmis-online-apply.webp',
    svg: createGenericCardSvg({
      title: 'CM Punjab Himmat Card Online Apply: DPMIS Guide',
      subtitle: 'Rs 10,500 Quarterly Stipend & Assistive Devices for Persons with Disabilities',
      badgeText: 'HIMMAT CARD 2026',
      mainColor: '#1d4ed8',
      items: [
        { title: 'Quarterly Financial Stipend (PKR 10,500)', desc: 'Disbursed via specialized Bank of Punjab ATM cards to certified persons with disabilities.' },
        { title: 'Social Welfare Department Certification', desc: 'Must possess a valid disability certificate and Special CNIC with wheelchair logo.' },
        { title: 'DPMIS Portal Registration (dpmis.punjab.gov.pk)', desc: 'Submit application online or via local District Social Welfare Office.' },
        { title: 'Provision of Assistive Devices', desc: 'Eligible cardholders receive wheelchairs, hearing aids, and white canes free of charge.' }
      ],
      footerNote: 'Official portal: dpmis.punjab.gov.pk | Punjab Social Protection Authority (PSPA).'
    })
  },
  {
    fileName: 'ehsaas-emergency-cash-programme-disbursement.webp',
    svg: createGenericCardSvg({
      title: 'Ehsaas Emergency Cash: Qualification & Disbursement',
      subtitle: 'Disaster Relief Cash Support, SMS Protocols & Biometric Distribution',
      badgeText: 'EMERGENCY RELIEF',
      mainColor: '#b45309',
      items: [
        { title: 'Rapid Relief Targeting Protocol', desc: 'Activated during climate disasters, floods, and unprecedented economic inflation shocks.' },
        { title: 'SMS Registration & Verification Process', desc: 'Nationwide CNIC routing via centralized digital verification databases.' },
        { title: 'Biometric Point-of-Sale (POS) Camps', desc: 'Immediate emergency cash disbursements handled via mobile bank campsites.' },
        { title: 'Integration into BISP Kafaalat Safety Net', desc: 'Transition of emergency relief recipients into permanent NSER social protection registry.' }
      ],
      footerNote: 'Emergency announcements are published exclusively via official government press releases.'
    })
  },
  {
    fileName: 'ehsaas-rashan-programme-karyana-subsidy.webp',
    svg: createGenericCardSvg({
      title: 'Ehsaas Rashan Programme: Ration Support Explained',
      subtitle: 'Subsidized Flour, Cooking Oil & Pulses at Registered Karyana Stores',
      badgeText: 'RASHAN SUBSIDY 2026',
      mainColor: '#ca8a04',
      items: [
        { title: 'Targeted Subsidies on Essential Food Items', desc: 'Direct discount on wheat flour (atta), edible cooking oil, and pulses (daal).' },
        { title: 'Merchant App & Karyana Store Registration', desc: 'Small grocers equipped with mobile POS apps to process customer CNIC subsidies.' },
        { title: 'Monthly Subsidy Quota per Family', desc: 'Registered low-income households receive fixed monthly subsidy allocations.' },
        { title: 'Digital OTP Verification at Checkout', desc: 'Discounts applied instantly upon entering OTP received on customer’s phone.' }
      ],
      footerNote: 'Only purchase subsidized ration from officially registered karyana retailers.'
    })
  },
  {
    fileName: 'pm-youth-business-loan-guide-bank-kamyab.webp',
    svg: createGenericCardSvg({
      title: 'PM Youth Business & Agriculture Loan: Before You Apply',
      subtitle: 'Application Checklist, Business Plans, Markup Rates & Bank Partners',
      badgeText: 'YOUTH BUSINESS LOAN',
      mainColor: '#1e40af',
      items: [
        { title: 'Online Application on pmyp.gov.pk', desc: 'Fast, paperless digital submission through the official youth program portal.' },
        { title: 'Detailed Feasibility Study / Business Plan', desc: 'Prepare viable project proposal showing expected cash flows and working capital needs.' },
        { title: 'Participating Commercial Banks', desc: 'National Bank of Pakistan, Bank of Punjab, Habib Bank, and Meezan Bank partner networks.' },
        { title: 'Grace Period & Repayment Tenure', desc: 'Up to 1-year principal grace period with repayment tenure up to 8 years.' }
      ],
      footerNote: 'Official portal: pmyp.gov.pk | Do not pay processing fees to unaccredited loan agents.'
    })
  },
  {
    fileName: 'ehsaas-saving-wallets-programme-interest-free-loan.webp',
    svg: createGenericCardSvg({
      title: 'Ehsaas Saving Wallets & Interest-Free Loans',
      subtitle: 'Mobile Banking Wallets for Beneficiaries & Partner Microfinance Centers',
      badgeText: 'FINANCIAL INCLUSION',
      mainColor: '#0f766e',
      items: [
        { title: 'Direct Mobile Wallet Accounts', desc: 'Empowering female beneficiaries with independent digital bank accounts linked to SIM.' },
        { title: 'Zero Maintenance & SMS Banking Fees', desc: 'No minimum balance penalties or hidden transaction fees for welfare beneficiaries.' },
        { title: 'Interest-Free Microfinance (Akhuwat Network)', desc: 'Community loans for small cottage industries and agricultural livestock purchase.' },
        { title: 'Financial Literacy & Digital Training', desc: 'Workshops educating rural women on mobile transfers, bill payments, and savings.' }
      ],
      footerNote: 'Microfinance loans are distributed through official Akhuwat and PPAF partner branches.'
    })
  },
  {
    fileName: 'punjab-rozgar-scheme-business-finance-psic.webp',
    svg: createGenericCardSvg({
      title: 'Punjab Rozgar Scheme: Subsidized Business Finance',
      subtitle: 'PSIC & Bank of Punjab Financing for Startups & Existing Businesses',
      badgeText: 'PUNJAB ROZGAR 2026',
      mainColor: '#0284c7',
      items: [
        { title: 'Credit Facility from PKR 100,000 to PKR 10 Million', desc: 'Financing for young professionals, vocational graduates, and small enterprise owners.' },
        { title: 'Subsidized Markup Rates (4% to 5%)', desc: 'Punjab government subsidizes the differential markup through Punjab Small Industries Corporation.' },
        { title: 'Priority for Green & Clean Tech Ventures', desc: 'Special incentives and expedited processing for environmental and eco-friendly business setups.' },
        { title: 'Online Registration via rozgar.psic.punjab.gov.pk', desc: 'Submit national identity credentials and project feasibility on the PSIC portal.' }
      ],
      footerNote: 'Official portal: rozgar.psic.punjab.gov.pk | Supported by Bank of Punjab.'
    })
  },
  {
    fileName: 'fuel-relief-scheme-pakistan-petrol-subsidy.webp',
    svg: createGenericCardSvg({
      title: 'Fuel Relief Scheme Pakistan: Petrol Subsidy Explained',
      subtitle: 'Subsidy Mechanism, Registration Requirements & Petrol Pump Guidelines',
      badgeText: 'PETROL RELIEF 2026',
      mainColor: '#b45309',
      items: [
        { title: 'Targeted Relief for Motorcycle Owners', desc: 'Mitigating transit expenses for lower-income daily commuters and courier riders.' },
        { title: 'SMS Verification via Official Shortcode', desc: 'Register vehicle registration and CNIC on the national fuel relief database.' },
        { title: 'Monthly Subsidy Cap per Vehicle', desc: 'Fixed litres quota subsidized monthly to prevent commercial exploitation.' },
        { title: 'Digital POS Verification at Service Stations', desc: 'Verify subsidy quota using instant OTP prompt at participating fuel stations.' }
      ],
      footerNote: 'Keep mobile handy when fueling at authorized PSO and partner petrol pumps.'
    })
  },
  {
    fileName: 'bisp-id-card-check-blocked-cnic-fix.webp',
    svg: createGenericCardSvg({
      title: 'BISP ID Card Check: Fix a Blocked CNIC Fast',
      subtitle: 'Resolving NADRA Expiry, Marital Status Updates & Identity Verification',
      badgeText: 'BLOCKED CNIC FIX',
      mainColor: '#dc2626',
      items: [
        { title: 'Reason 1: Expired CNIC Card', desc: 'Renew your national identity card at any NADRA center; BISP accounts freeze on card expiry.' },
        { title: 'Reason 2: Marital Status Discrepancy', desc: 'Update marital status (marriage, widowhood) on NADRA database to ensure correct family tree.' },
        { title: 'Reason 3: Biometric Data Renewal Required', desc: 'Visit NADRA Mega Center for fingerprint refresh if identity matching fails at ATM.' },
        { title: 'Step 4: Update Records at BISP Tehsil Desk', desc: 'Once NADRA issues your new card, present it at BISP tehsil desk to unfreeze payment.' }
      ],
      footerNote: 'Payments resume automatically in the following cycle once NADRA records are synchronized.'
    })
  },
  {
    fileName: 'benazir-sim-card-free-wallet-sim-guide.webp',
    svg: createGenericCardSvg({
      title: 'Benazir SIM Card 2026: Free Wallet SIM Guide',
      subtitle: 'How to Get a Free Biometric SIM Linked to BISP & Receive 8171 Alerts',
      badgeText: 'WALLET SIM GUIDE',
      mainColor: '#0891b2',
      items: [
        { title: 'Biometrically Registered in Beneficiary Name', desc: 'SIM must be registered strictly under the female beneficiary’s own CNIC.' },
        { title: 'Official Telecommunication Partnerships', desc: 'Jazz, Telenor, Zong, and Ufone authorized franchises provide dedicated BISP SIM issuance.' },
        { title: 'Free Digital Wallet Account Setup', desc: 'Enables direct digital mobile payments, balance notifications, and emergency alerts.' },
        { title: 'Receive Direct 8171 Notifications', desc: 'Ensures you receive genuine stipend release alerts without relying on third-party phones.' }
      ],
      footerNote: 'Never buy pre-activated SIMs from roadside sellers. Only obtain verified SIMs at official retailer franchises.'
    })
  },
  {
    fileName: 'bisp-card-check-active-blocked-replacement.webp',
    svg: createGenericCardSvg({
      title: 'BISP Card Check: Active, Blocked & Replacement',
      subtitle: 'Debit Card Replacement, Account Status & Transition to Biometric ATM',
      badgeText: 'BISP CARD GUIDE',
      mainColor: '#475569',
      items: [
        { title: 'Phasing Out Plastic Debit Cards', desc: 'BISP has transitioned to 100% biometric cash disbursement without requiring plastic cards.' },
        { title: 'Checking Account Status on 8171 Portal', desc: 'Verify if your payment is ready for biometric collection at partner bank ATMs.' },
        { title: 'Lost or Stolen Card Reporting', desc: 'Contact HBL or Bank Alfalah helpline to block compromised debit cards immediately.' },
        { title: 'Cardless Biometric Cash Withdrawal', desc: 'Simply enter your CNIC on the ATM screen and scan your thumb to withdraw cash.' }
      ],
      footerNote: 'You do NOT need a replacement plastic card to withdraw your Benazir Kafaalat funds.'
    })
  }
];

console.log(`Starting generation of ${newImagesSpec.length} authentic, optimized WebP images...`);

for (const spec of newImagesSpec) {
  const destPath = path.join(outputDir, spec.fileName);
  await sharp(Buffer.from(spec.svg))
    .webp({ quality: 90, effort: 4 })
    .toFile(destPath);
  const size = fs.statSync(destPath).size;
  console.log(`  ✓ Generated: ${spec.fileName} (${(size / 1024).toFixed(1)} KB)`);
}

console.log('All authentic images successfully generated in public/images/!');
