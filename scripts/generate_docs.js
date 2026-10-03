const fs = require('fs');
const path = require('path');
const { articles } = require('./parse_content.js');
const fullAuditData = JSON.parse(fs.readFileSync('scripts/full_audit_data.json', 'utf8'));

// Ensure docs directory exists
if (!fs.existsSync('docs')) {
  fs.mkdirSync('docs', { recursive: true });
}

// -------------------------------------------------------------
// 1. BUILD docs/image-audit.md
// -------------------------------------------------------------
let auditMd = `# Website Image Audit Report (Phase 1)

## Executive Summary
This document provides a complete, read-only audit of every image on **Live Govt Schemes & Ehsaas Programs** (\`https://pakbenefits.com\`).

- **Total Images in \`public/images/\`**: 83 files (81 JPG/JPEG, 2 WEBP)
- **Total Images in \`content-drafts/\`**: 39 files (\`featured-image.jpg\`)
- **Total Images in \`public/\`**: 1 vector icon (\`icon.svg\`)
- **Images Over 200 KB**: 39 files (Largest: \`cm-punjab-solar-panel-scheme.jpg\` & \`punjab-solar-tube-well-scheme.jpg\` at **5,739.47 KB / 5.7 MB**)
- **Unused Images**: 11 files (located in \`public/images/\` but not referenced in code or content)
- **Reused / Duplicate Images Across Articles**: 10 images shared across 20 articles (violates GEMINI.md / AGENTS.md "no generic placeholders" rule)
- **Non-16:9 Aspect Ratio Featured Images**: 4 files (\`cm-punjab-livestock-card-scheme.jpg\` 640x430, \`cm-punjab-solar-panel-scheme.jpg\` 4096x3072, \`punjab-solar-tube-well-scheme.jpg\` 4096x3072, \`sehat-card-plus-kpk.jpg\` 1600x1000)
- **Referenced-but-Missing Images**: 0 (all 82 article images in \`src/data/content.ts\` exist in \`public/images/\`)

---

## Homepage Hero & Key Page Images

### 1. Homepage Hero Image
- **Target Filename**: \`hero-support.jpg\`
- **Component**: \`src/app/page.tsx\` (\`<section className="hero-section">\`)
- **Current Dimensions**: 1600x1000 (Ratio 1.6 / 16:10)
- **Current File Size**: 236.32 KB (> 200 KB flag)
- **Usage**:
  - Hero visual on \`/\` via Next.js \`<Image fill priority sizes="(max-width: 900px) 100vw, 52vw" />\`
  - Default \`og:image\` (OpenGraph) for homepage and fallback for category/info pages
  - Default \`twitter:image\` for homepage and fallback for category/info pages
- **Current Alt Text**: *"A Pakistani mother and daughter receiving public service guidance"*
- **Priority / Fetchpriority**: \`priority\` set on \`<Image>\` (no lazy loading).

### 2. Homepage Trust Section Image
- **Target Filename**: \`registration-guide.jpg\`
- **Component**: \`src/app/page.tsx\` (\`<section className="trust-section">\`)
- **Current Dimensions**: 1600x1000
- **Current File Size**: 261.93 KB (> 200 KB flag)
- **Usage**: Trust section banner via \`<Image fill sizes="(max-width: 900px) 100vw, 48vw" />\`
- **Current Alt Text**: *"A Pakistani woman checking a registration guide safely"*

### 3. Homepage 6 Latest-Guide Card Images
The latest-guide section on the homepage (\`src/app/page.tsx\` lines 191-200) renders cards for the first 6 articles in \`src/data/content.ts\`:
1. \`bisp-8171-balance-check-online.jpg\` (Article: \`bisp-8171-balance-check-online-kaise-karein\`, 321.34 KB - OVER 200KB)
2. \`cm-punjab-e-bikes-scheme-phase-2.jpg\` (Article: \`cm-punjab-e-bikes-scheme-phase-2-2026-online-apply\`, 84.24 KB)
3. \`how-to-apply-cm-punjab-e-bike-scheme-2026.jpg\` (Article: \`how-to-apply-cm-punjab-e-bike-scheme-2026\`, 94.09 KB)
4. \`wazir-e-azam-apna-ghar-program.jpg\` (Article: \`wazir-e-azam-apna-ghar-program-online-apply-2026\`, 107.98 KB)
5. \`national-savings-profit-rates.webp\` (Article: \`national-savings-profit-rates-2026-chart-tables\`, 45.04 KB)
6. \`bisp-tehsil-office-peshawar-kpk.jpg\` (Article: \`bisp-tehsil-office-peshawar-kpk-addresses-guide\`, 87.49 KB)

---

## Detailed Image Audit Inventory Table

| Image File | Page / Component / Route | Alt / imageAlt Text | Width/Height Set? | Loading / Priority | Used in OG / Twitter / JSON-LD? | Audit Flags |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
`;

fullAuditData.forEach(item => {
  const fileClean = item.filename;
  const pageClean = item.pageComponentRoute.replace(/<br>/g, '; ');
  const altClean = item.altText.replace(/<br>/g, '; ').replace(/\|/g, '\\|');
  const flagsClean = item.flags.length > 0 ? item.flags.join(', ') : 'OK';
  auditMd += `| \`${fileClean}\` | ${pageClean} | "${altClean}" | ${item.widthHeightSet} | ${item.loadingPriority} | ${item.ogTwitterJsonLd} | **${flagsClean}** |\n`;
});

auditMd += `
---

## Summary of Key Audit Flags & Issues Identified

### 1. File Size Violations (> 200 KB) - 39 Images
The following images exceed 200 KB and require WebP/JPG compression optimization in Phase 2:
- \`cm-punjab-solar-panel-scheme.jpg\` (**5,739.47 KB**)
- \`punjab-solar-tube-well-scheme.jpg\` (**5,739.47 KB**)
- \`cm-punjab-green-credit-program-2026.jpg\` (**940.77 KB**)
- \`apni-chhat-apna-ghar-scheme.jpg\` (**989.51 KB**)
- \`ehsaas-undergraduate-scholarship.jpg\` (**928.89 KB**)
- \`taleemi-wazaif.jpg\` (**928.89 KB**)
- \`cm-punjab-honhaar-scholarship.jpg\` (**918.12 KB**)
- \`fuel-relief-scheme.jpg\` (**882.57 KB**)
- \`bisp-online-registration-mistakes.jpg\` (**858.10 KB**)
- \`benazir-kafaalat.jpg\` (**856.55 KB**)
- \`cm-punjab-youth-games-2026.jpg\` (**837.84 KB**)
- \`benazir-kafaalat-case-paused.jpg\` (**822.29 KB**)
- \`cm-punjab-kisan-card.jpg\` (**821.41 KB**)
- \`kisan-card-8070-pin-verification.jpg\` (**821.41 KB**)
- \`bisp-and-ehsaas-difference.jpg\` (**817.94 KB**)
- \`bisp-dynamic-survey-documents.jpg\` (**817.94 KB**)
- \`bisp-dynamic-survey-token-required-documents-guide.jpg\` (**817.94 KB**)
- \`bisp-registration.jpg\` (**817.94 KB**)
- \`ehsaas-kafalat-invalid-cnic-nser-update.jpg\` (**817.94 KB**)
- \`pmt-score-above-32-bisp-re-survey.jpg\` (**817.94 KB**)
- \`cm-punjab-electric-bike-scheme.jpg\` (**346.88 KB**)
- \`cm-punjab-green-tractor-scheme.jpg\` (**347.05 KB**)
- \`farmer-support.jpg\` (**347.05 KB**)
- \`cm-punjab-e-bike-scheme-updates.jpg\` (**424.61 KB**)
- \`bisp-8171-balance-check-online.jpg\` (**321.34 KB**)
- \`bisp-atm-se-paise-nikalwane-ka-tarika.jpg\` (**321.34 KB**)
- \`bisp-atm-withdrawal.jpg\` (**321.34 KB**)
- \`ehsaas-payment-tracking.jpg\` (**321.34 KB**)
- \`bisp-cnic-status-check.jpg\` (**319.89 KB**)
- \`bisp-registration-check-by-cnic.jpg\` (**319.89 KB**)
- \`8171-number-verification.jpg\` (**312.23 KB**)
- \`scholarship-guide.jpg\` (**309.55 KB**)
- \`bisp-agent-deduction-complaint.jpg\` (**285.54 KB**)
- \`bisp-helpline-complaint.jpg\` (**285.54 KB**)
- \`registration-guide.jpg\` (**261.93 KB**)
- \`cm-punjab-dhee-rani-program.jpg\` (**261.93 KB**)
- \`8171-portal-troubleshooting.jpg\` (**257.66 KB**)
- \`hero-support.jpg\` (**236.32 KB**)
- \`sehat-card-plus-kpk.jpg\` (**236.32 KB**)

### 2. Unused Images (11 Files)
The following 11 images exist in \`public/images/\` but are not referenced anywhere in \`src/data/content.ts\` or pages:
1. \`bisp-atm-se-paise-nikalwane-ka-tarika.jpg\` (Duplicate of \`bisp-atm-withdrawal.jpg\`)
2. \`bisp-cnic-status-check.jpg\` (Duplicate of \`bisp-registration-check-by-cnic.jpg\`)
3. \`bisp-dynamic-survey-token-required-documents-guide.jpg\` (Duplicate of \`bisp-dynamic-survey-documents.jpg\`)
4. \`bisp-online-registration-mistakes.jpg\`
5. \`cm-punjab-rehmat-card-2026.jpg\`
6. \`e-bike-guide.jpg\`
7. \`ehsaas-payment-tracking.jpg\`
8. \`himmat-card-eligibility-check-guide.jpg\`
9. \`national-savings-profit-rates.jpg\` (Superseded by \`national-savings-profit-rates.webp\`)
10. \`nigehban-card-check-guide.jpg\`
11. \`punjab-land-record-check-guide.jpg\`

### 3. Reused / Duplicate Images Across Articles (10 Images)
Violates AGENTS.md Section 1 ("No Generic Placeholders: Never reuse unrelated or generic placeholder images for new scheme guides"):
1. \`8171-number-verification.jpg\` (Used by 2 articles)
2. \`8171-register.jpg\` (Used by 2 articles)
3. \`benazir-form.jpg\` (Used by 2 articles)
4. \`bisp-8171-balance-check-online.jpg\` (Used by 2 articles)
5. \`check-bisp-account-status.jpg\` (Used by 2 articles)
6. \`cm-punjab-e-bikes-scheme-phase-2.jpg\` (Used by 2 articles)
7. \`farmer-support.jpg\` (Used by 2 articles)
8. \`hero-support.jpg\` (Used on Homepage Hero AND Himmat Card article)
9. \`taleemi-wazaif.jpg\` (Used by 2 articles)
10. \`wazir-e-azam-apna-ghar-program.jpg\` (Used by 2 articles)

### 4. Non-16:9 Aspect Ratio Featured Images (4 Files)
Article featured images must be strictly **16:9** (e.g., 1280x720 or 1600x900) per AGENTS.md:
1. \`cm-punjab-livestock-card-scheme.jpg\` (640x430, aspect ratio 1.49)
2. \`cm-punjab-solar-panel-scheme.jpg\` (4096x3072, aspect ratio 1.33 / 4:3)
3. \`punjab-solar-tube-well-scheme.jpg\` (4096x3072, aspect ratio 1.33 / 4:3)
4. \`sehat-card-plus-kpk.jpg\` (1600x1000, aspect ratio 1.6 / 16:10)

---
*End of Image Audit Report.*
`;

fs.writeFileSync('docs/image-audit.md', auditMd);
console.log('Saved docs/image-audit.md');
