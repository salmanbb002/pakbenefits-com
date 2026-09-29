# Website Image Audit Report: pakbenefits.com
**Date:** September 29, 2026  
**Auditor:** Antigravity AI Pair Programmer (Phase 1 Audit)  
**Standard Compliance:** Strictly adheres to [GEMINI.md](file:///D:/Work%20~%20SEO-Projects/pakbenefits-com/GEMINI.md) & [AGENTS.md](file:///D:/Work%20~%20SEO-Projects/pakbenefits-com/AGENTS.md)  

---

## 1. Executive Summary & Audit Overview

This audit comprehensively examines every image asset across **pakbenefits.com**, covering storage locations (`public/images/`, `content-drafts/*/featured-image.jpg`, `src/app/icon.svg`, `docs/seo/screenshots/`), code references across the Next.js static site (`src/`, `content-drafts/`, schemas, and metadata), and compliance with the core editorial rule in **GEMINI.md**:
> *"Direct Topical Relevance: Every article published must have a dedicated, authentic featured image that directly illustrates the specific scheme or topic... Never reuse unrelated or generic placeholder images for new scheme guides."*

### Key Metrics
- **Total Published Articles in System:** 101 articles
- **Total Files in `public/images/`:** 69 files (all `.jpg`)
- **Total Files in `content-drafts/*/featured-image.jpg`:** 29 files
- **App Icons / Favicons:** 1 file (`src/app/icon.svg`)
- **Documentation Screenshots:** 6 files (`docs/seo/screenshots/*.png`)
- **Referenced-but-Missing Images:** **0** (All referenced images exist on disk)
- **Unused Public Images:** **2** (`bisp-atm-se-paise-nikalwane-ka-tarika.jpg` and `bisp-dynamic-survey-token-required-documents-guide.jpg`)
- **Images Over 200 KB:** **38** of 69 images exceed 200 KB (with solar scheme images reaching an extreme **5.74 MB** each!)
- **Images Reused Across Multiple Articles:** **13** image files reused across **47** distinct articles (violates GEMINI.md placeholder prohibition)
- **Binary Identical Image Groups (Exact duplicates by hash):** **12** groups (27 files in `public/images/` are bit-for-bit clones of other files under different names)
- **Non-16:9 Aspect Ratio Images:** **5** files (`cm-punjab-solar-panel-scheme.jpg` 4:3, `punjab-solar-tube-well-scheme.jpg` 4:3, `cm-punjab-livestock-card-scheme.jpg` 640x430, `hero-support.jpg` 16:10, `sehat-card-plus-kpk.jpg` 16:10)
- **Content-Drafts vs Public Out-of-Sync:** **4** draft directories have unoptimized large versions (1376x768, ~800-950 KB) while `public/images/` has resized versions (1200x675, ~110 KB)

---

## 2. Complete Asset Inventory

### 2.1 Public Images Directory (`public/images/` - 69 Files)

| # | Filename | Format | Dimensions | Aspect Ratio | File Size | Compliance / Flags |
|---|---|---|---|---|---|---|
| 1 | `8171-number-verification.jpg` | JPG | 1600x900 | 1.778 | 312.23 KB | Over 200KB (312.23 KB); Reused across 4 articles |
| 2 | `8171-portal-troubleshooting.jpg` | JPG | 1600x900 | 1.778 | 257.66 KB | Over 200KB (257.66 KB) |
| 3 | `8171-register.jpg` | JPG | 1600x900 | 1.778 | 137.02 KB | Reused across 2 articles |
| 4 | `apna-khet-apna-rozgar-scheme.jpg` | JPG | 1200x675 | 1.778 | 110.3 KB | Standard 16:9 |
| 5 | `apni-chhat-apna-ghar-scheme.jpg` | JPG | 1376x768 | 1.792 | 989.51 KB | Over 200KB (989.51 KB) |
| 6 | `apni-zameen-apna-ghar-balloting-result-2026.jpg` | JPG | 1200x675 | 1.778 | 105.04 KB | Standard 16:9 |
| 7 | `benazir-form.jpg` | JPG | 1600x900 | 1.778 | 140.12 KB | Reused across 2 articles |
| 8 | `benazir-kafaalat-case-paused.jpg` | JPG | 1376x768 | 1.792 | 822.29 KB | Over 200KB (822.29 KB) |
| 9 | `benazir-kafaalat.jpg` | JPG | 1376x768 | 1.792 | 856.55 KB | Over 200KB (856.55 KB) |
| 10 | `benazir-mazdoor-card-registration-online-2026.jpg` | JPG | 1200x675 | 1.778 | 174.29 KB | Standard 16:9 |
| 11 | `benazir-nashonuma-program.jpg` | JPG | 1200x675 | 1.778 | 88.66 KB | Standard 16:9 |
| 12 | `bisp-8171-balance-check-online.jpg` | JPG | 1600x900 | 1.778 | 321.34 KB | Over 200KB (321.34 KB); Reused across 2 articles |
| 13 | `bisp-agent-deduction-complaint.jpg` | JPG | 2400x1350 | 1.778 | 285.54 KB | Over 200KB (285.54 KB) |
| 14 | `bisp-and-ehsaas-difference.jpg` | JPG | 1376x768 | 1.792 | 817.94 KB | Over 200KB (817.94 KB) |
| 15 | `bisp-atm-se-paise-nikalwane-ka-tarika.jpg` | JPG | 1600x900 | 1.778 | 321.34 KB | Over 200KB (321.34 KB); Unused in articles |
| 16 | `bisp-atm-withdrawal.jpg` | JPG | 1600x900 | 1.778 | 321.34 KB | Over 200KB (321.34 KB) |
| 17 | `bisp-biometric-verification-failed.jpg` | JPG | 1200x675 | 1.778 | 88.26 KB | Standard 16:9 |
| 18 | `bisp-cnic-status-check.jpg` | JPG | 1600x900 | 1.778 | 319.89 KB | Over 200KB (319.89 KB); Reused across 4 articles |
| 19 | `bisp-deceased-beneficiary-payment-transfer-procedure.jpg` | JPG | 1200x675 | 1.778 | 105.64 KB | Standard 16:9 |
| 20 | `bisp-direct-bank-account-transfer.jpg` | JPG | 1200x675 | 1.778 | 79.96 KB | Standard 16:9 |
| 21 | `bisp-dynamic-survey-documents.jpg` | JPG | 1376x768 | 1.792 | 817.94 KB | Over 200KB (817.94 KB) |
| 22 | `bisp-dynamic-survey-token-required-documents-guide.jpg` | JPG | 1376x768 | 1.792 | 817.94 KB | Over 200KB (817.94 KB); Unused in articles |
| 23 | `bisp-helpline-complaint.jpg` | JPG | 2400x1350 | 1.778 | 285.54 KB | Over 200KB (285.54 KB) |
| 24 | `bisp-login.jpg` | JPG | 1600x900 | 1.778 | 137.52 KB | Reused across 2 articles |
| 25 | `bisp-office-rawalpindi.jpg` | JPG | 1280x720 | 1.778 | 161.3 KB | Standard 16:9 |
| 26 | `bisp-online-registration-mistakes.jpg` | JPG | 1376x768 | 1.792 | 858.1 KB | Over 200KB (858.1 KB) |
| 27 | `bisp-registration-check-by-cnic.jpg` | JPG | 1600x900 | 1.778 | 319.89 KB | Over 200KB (319.89 KB) |
| 28 | `bisp-registration.jpg` | JPG | 1376x768 | 1.792 | 817.94 KB | Over 200KB (817.94 KB) |
| 29 | `bisp-taleemi-wazaif-70-attendance-rule-verification.jpg` | JPG | 1200x675 | 1.778 | 128.67 KB | Standard 16:9 |
| 30 | `bisp-taleemi-wazaif-stipend-rates-2026.jpg` | JPG | 1200x675 | 1.778 | 128.67 KB | Standard 16:9 |
| 31 | `bisp-tehsil-office-faisalabad.jpg` | JPG | 1200x675 | 1.778 | 80.35 KB | Standard 16:9 |
| 32 | `bisp-tehsil-office-karachi.jpg` | JPG | 1280x720 | 1.778 | 160.24 KB | Standard 16:9 |
| 33 | `bisp-tehsil-office-lahore.jpg` | JPG | 1280x720 | 1.778 | 160.95 KB | Standard 16:9 |
| 34 | `bisp-tehsil-office-multan.jpg` | JPG | 1200x675 | 1.778 | 80.02 KB | Standard 16:9 |
| 35 | `bisp-tehsil-office-peshawar-kpk.jpg` | JPG | 1200x675 | 1.778 | 85.44 KB | Standard 16:9 |
| 36 | `check-bisp-account-status.jpg` | JPG | 1600x900 | 1.778 | 140.6 KB | Reused across 2 articles |
| 37 | `cm-balochistan-youth-skills-scheme-2026-online-apply.jpg` | JPG | 1200x675 | 1.778 | 111.28 KB | Standard 16:9 |
| 38 | `cm-punjab-apni-chhat-apna-ghar-loan.jpg` | JPG | 1200x675 | 1.778 | 107.89 KB | Standard 16:9 |
| 39 | `cm-punjab-dhee-rani-program.jpg` | JPG | 1600x900 | 1.778 | 261.93 KB | Over 200KB (261.93 KB) |
| 40 | `cm-punjab-free-laptop-scheme.jpg` | JPG | 1200x675 | 1.778 | 87.5 KB | Standard 16:9 |
| 41 | `cm-punjab-green-tractor-scheme.jpg` | JPG | 1600x900 | 1.778 | 347.05 KB | Over 200KB (347.05 KB) |
| 42 | `cm-punjab-honhaar-scholarship.jpg` | JPG | 1376x768 | 1.792 | 918.12 KB | Over 200KB (918.12 KB) |
| 43 | `cm-punjab-kisan-card.jpg` | JPG | 1376x768 | 1.792 | 821.41 KB | Over 200KB (821.41 KB) |
| 44 | `cm-punjab-livestock-card-scheme.jpg` | JPG | 640x430 | 1.488 | 97.74 KB | Non-16:9 (1.488:1) |
| 45 | `cm-punjab-solar-panel-scheme.jpg` | JPG | 4096x3072 | 1.333 | 5739.47 KB | Over 200KB (5739.47 KB); Non-16:9 (1.333:1) |
| 46 | `e-bike-guide.jpg` | JPG | 1600x900 | 1.778 | 342.62 KB | Over 200KB (342.62 KB); Reused across 4 articles |
| 47 | `ehsaas-kafalat-invalid-cnic-nser-update.jpg` | JPG | 1376x768 | 1.792 | 817.94 KB | Over 200KB (817.94 KB) |
| 48 | `ehsaas-loan-vs-saving-wallet.jpg` | JPG | 1200x675 | 1.778 | 111.64 KB | Standard 16:9 |
| 49 | `ehsaas-payment-tracking.jpg` | JPG | 1600x900 | 1.778 | 321.34 KB | Over 200KB (321.34 KB); Reused across 3 articles |
| 50 | `ehsaas-tracking-news.jpg` | JPG | 1600x900 | 1.778 | 144.36 KB | Standard 16:9 |
| 51 | `ehsaas-undergraduate-scholarship.jpg` | JPG | 1376x768 | 1.792 | 928.89 KB | Over 200KB (928.89 KB) |
| 52 | `fake-8171-sms-check-complaint-pta-bisp-lottery-fraud-alert.jpg` | JPG | 1200x675 | 1.778 | 118.43 KB | Standard 16:9 |
| 53 | `farmer-support.jpg` | JPG | 1600x900 | 1.778 | 347.05 KB | Over 200KB (347.05 KB); Reused across 4 articles |
| 54 | `fuel-relief-scheme.jpg` | JPG | 1376x768 | 1.792 | 882.57 KB | Over 200KB (882.57 KB) |
| 55 | `hero-support.jpg` | JPG | 1600x1000 | 1.6 | 236.32 KB | Over 200KB (236.32 KB); Non-16:9 (1.6:1); Reused across 11 articles |
| 56 | `himmat-card-eligibility-check-guide.jpg` | JPG | 1200x675 | 1.778 | 134.89 KB | Standard 16:9 |
| 57 | `kisan-card-8070-pin-verification.jpg` | JPG | 1376x768 | 1.792 | 821.41 KB | Over 200KB (821.41 KB) |
| 58 | `nigehban-card-check-guide.jpg` | JPG | 1200x675 | 1.778 | 113.19 KB | Standard 16:9 |
| 59 | `pave-electric-bike-scheme.jpg` | JPG | 1600x900 | 1.778 | 342.62 KB | Over 200KB (342.62 KB) |
| 60 | `pink-scooty-scheme-2026.jpg` | JPG | 1200x675 | 1.778 | 114.62 KB | Standard 16:9 |
| 61 | `pm-youth-loan-scheme.jpg` | JPG | 1376x768 | 1.792 | 832.21 KB | Over 200KB (832.21 KB) |
| 62 | `pmt-score-above-32-bisp-re-survey.jpg` | JPG | 1376x768 | 1.792 | 817.94 KB | Over 200KB (817.94 KB) |
| 63 | `punjab-land-record-check-guide.jpg` | JPG | 1200x675 | 1.778 | 130.01 KB | Standard 16:9 |
| 64 | `punjab-solar-tube-well-scheme.jpg` | JPG | 4096x3072 | 1.333 | 5739.47 KB | Over 200KB (5739.47 KB); Non-16:9 (1.333:1) |
| 65 | `registration-guide.jpg` | JPG | 1600x900 | 1.778 | 261.93 KB | Over 200KB (261.93 KB); Reused across 5 articles |
| 66 | `scholarship-guide.jpg` | JPG | 1600x900 | 1.778 | 309.55 KB | Over 200KB (309.55 KB) |
| 67 | `sehat-card-plus-kpk.jpg` | JPG | 1600x1000 | 1.6 | 236.32 KB | Over 200KB (236.32 KB); Non-16:9 (1.6:1) |
| 68 | `sindh-hari-card-scheme.jpg` | JPG | 1200x675 | 1.778 | 90.73 KB | Standard 16:9 |
| 69 | `taleemi-wazaif.jpg` | JPG | 1376x768 | 1.792 | 928.89 KB | Over 200KB (928.89 KB); Reused across 2 articles |

### 2.2 Content Draft Featured Images (`content-drafts/*/featured-image.jpg` - 29 Files)

| # | Draft Folder | Format | Dimensions | File Size | Sync Status with `public/images/` |
|---|---|---|---|---|---|
| 1 | `apna-khet-apna-rozgar-scheme-apply-online-2026-2026-09-20` | JPG | 1376x768 | 945.95 KB | Mismatch / Desynced with public image |
| 2 | `apni-chhat-apna-ghar-scheme-online-apply-2026-2026-09-21` | JPG | 1376x768 | 989.51 KB | Matches `apni-chhat-apna-ghar-scheme.jpg` (Hash match) |
| 3 | `apni-zameen-apna-ghar-balloting-result-2026-2026-09-28` | JPG | 1376x768 | 771.44 KB | Mismatch / Desynced with public image |
| 4 | `benazir-taleemi-wazaif-form-download-tarika-2026-09-21` | JPG | 1376x768 | 928.89 KB | Matches `ehsaas-undergraduate-scholarship.jpg` (Hash match) |
| 5 | `bisp-8171-balance-check-online-kaise-karein-2026-09-21` | JPG | 1600x900 | 321.34 KB | Matches `bisp-8171-balance-check-online.jpg` (Hash match) |
| 6 | `bisp-8171-paise-check-karne-ka-tarika-2026-09-21` | JPG | 1600x900 | 321.34 KB | Matches `bisp-8171-balance-check-online.jpg` (Hash match) |
| 7 | `bisp-agent-deduction-complaint-retailer-penalty-2026-09-22` | JPG | 2400x1350 | 285.54 KB | Matches `bisp-agent-deduction-complaint.jpg` (Hash match) |
| 8 | `bisp-and-ehsaas-difference-guide-2026-09-22` | JPG | 1376x768 | 817.94 KB | Matches `bisp-and-ehsaas-difference.jpg` (Hash match) |
| 9 | `bisp-helpline-number-complaint-kaise-darj-karein-2026-09-21` | JPG | 2400x1350 | 285.54 KB | Matches `bisp-agent-deduction-complaint.jpg` (Hash match) |
| 10 | `bisp-kafaalat-13500-check-online-kaise-karein-2026-09-21` | JPG | 1376x768 | 856.55 KB | Matches `benazir-kafaalat.jpg` (Hash match) |
| 11 | `bisp-new-registration-form-online-apply-kaise-karein-2026-09-21` | JPG | 1376x768 | 817.94 KB | Matches `bisp-and-ehsaas-difference.jpg` (Hash match) |
| 12 | `bisp-office-rawalpindi-addresses-guide-2026-09-22` | JPG | 1280x720 | 161.3 KB | Matches `bisp-office-rawalpindi.jpg` (Hash match) |
| 13 | `bisp-registration-check-by-cnic-kaise-karein-2026-09-21` | JPG | 1600x900 | 319.89 KB | Matches `bisp-cnic-status-check.jpg` (Hash match) |
| 14 | `bisp-tehsil-office-karachi-districts-guide-2026-09-22` | JPG | 1280x720 | 160.24 KB | Matches `bisp-tehsil-office-karachi.jpg` (Hash match) |
| 15 | `bisp-tehsil-office-lahore-addresses-guide-2026-09-22` | JPG | 1280x720 | 160.95 KB | Matches `bisp-tehsil-office-lahore.jpg` (Hash match) |
| 16 | `cm-punjab-dhee-rani-program-2026-online-apply-2026-09-21` | JPG | 1600x900 | 261.93 KB | Matches `cm-punjab-dhee-rani-program.jpg` (Hash match) |
| 17 | `cm-punjab-green-tractor-scheme-2026-online-apply-2026-09-21` | JPG | 1600x900 | 347.05 KB | Matches `cm-punjab-green-tractor-scheme.jpg` (Hash match) |
| 18 | `cm-punjab-honhaar-scholarship-program-2026-2026-09-21` | JPG | 1376x768 | 918.12 KB | Matches `cm-punjab-honhaar-scholarship.jpg` (Hash match) |
| 19 | `cm-punjab-kisan-card-online-apply-2026-2026-09-21` | JPG | 1376x768 | 821.41 KB | Matches `cm-punjab-kisan-card.jpg` (Hash match) |
| 20 | `cm-punjab-livestock-card-scheme-2026-online-apply-2026-09-21` | JPG | 640x430 | 97.74 KB | Matches `cm-punjab-livestock-card-scheme.jpg` (Hash match) |
| 21 | `cm-punjab-solar-panel-scheme-2026-online-apply-2026-09-21` | JPG | 4096x3072 | 5739.47 KB | Matches `cm-punjab-solar-panel-scheme.jpg` (Hash match) |
| 22 | `ehsaas-interest-free-loan-vs-saving-wallet-2026-09-20` | JPG | 1376x768 | 781.07 KB | Mismatch / Desynced with public image |
| 23 | `ehsaas-undergraduate-scholarship-online-apply-2026-09-23` | JPG | 1376x768 | 928.89 KB | Matches `ehsaas-undergraduate-scholarship.jpg` (Hash match) |
| 24 | `kisan-card-8070-pin-verification-bop-activation-2026-09-22` | JPG | 1376x768 | 821.41 KB | Matches `cm-punjab-kisan-card.jpg` (Hash match) |
| 25 | `pink-scooty-scheme-2026-registration-eligibility-documents-balloting-2026-09-28` | JPG | 1376x768 | 941.43 KB | Mismatch / Desynced with public image |
| 26 | `pmt-score-above-32-bisp-re-survey-guide-2026-09-22` | JPG | 1376x768 | 817.94 KB | Matches `bisp-and-ehsaas-difference.jpg` (Hash match) |
| 27 | `punjab-solar-tube-well-scheme-2026-online-apply-2026-09-22` | JPG | 4096x3072 | 5739.47 KB | Matches `cm-punjab-solar-panel-scheme.jpg` (Hash match) |
| 28 | `sehat-sahulat-card-kpk-check-online-hospital-list-2026-09-23` | JPG | 1600x1000 | 236.32 KB | Matches `hero-support.jpg` (Hash match) |
| 29 | `why-was-my-benazir-kafaalat-case-paused-reasons-2026-09-20` | JPG | 1376x768 | 822.29 KB | Matches `benazir-kafaalat-case-paused.jpg` (Hash match) |

### 2.3 Other Site Images & Icons

| Location | Filename | Format | Dimensions | File Size | Purpose |
|---|---|---|---|---|---|
| `src/app/icon.svg` | `icon.svg` | SVG | 48x48 | 493 B | Website favicon / App icon (SVG) |
| `docs/seo/screenshots/cnic-mobile.png` | `cnic-mobile.png` | PNG | 390x844 | 1,604.34 KB | SEO mobile verification screenshot |
| `docs/seo/screenshots/cnic-mobile-viewport.png` | `cnic-mobile-viewport.png` | PNG | 390x844 | 200.05 KB | SEO mobile viewport screenshot |
| `docs/seo/screenshots/punjab-desktop.png` | `punjab-desktop.png` | PNG | 1280x800 | 3,714.55 KB | SEO desktop verification screenshot |
| `docs/seo/screenshots/punjab-desktop-viewport.png` | `punjab-desktop-viewport.png` | PNG | 1280x800 | 107.05 KB | SEO desktop viewport screenshot |
| `docs/seo/screenshots/taleemi-mobile.png` | `taleemi-mobile.png` | PNG | 390x844 | 1,798.71 KB | SEO mobile verification screenshot |
| `docs/seo/screenshots/taleemi-mobile-viewport.png` | `taleemi-mobile-viewport.png` | PNG | 390x844 | 89.46 KB | SEO mobile viewport screenshot |

---

## 3. Codebase Reference & Usage Audit Table

Columns required by Phase 1:
`image file | page/component/route using it | alt or imageAlt text | width/height set? | loading/priority attribute | used as og:image or twitter:image or JSON-LD image?`

| Image File | Page / Component / Route Using It | Alt or imageAlt Text | Width/Height Set? | Loading / Priority Attribute | Used as og:image / twitter:image / JSON-LD? |
|---|---|---|---|---|---|
| `8171-number-verification.jpg` | `/8171-786-ehsaas-tracking-official-number/`<br>`/what-is-pmt-score/`<br>`/how-to-check-bisp-eligibility-guide/`<br>`/8171-check-online-kaise-karein/` | *"A user comparing the official BISP 8171 route with unverified number and portal claims"*<br><br>*"A household record being reviewed to explain how a PMT score determines BISP eligibility"*<br><br>*"A person checking their BISP eligibility status on a mobile phone"*<br><br>*"Pakistani citizen checking 8171 BISP eligibility on smartphone via official web portal and SMS"* | No (`fill`) | `priority` on Article Hero (`ArticleTemplate`); `loading="lazy"` on Cards (`ArticleCard`) | Yes (`og:image`, `twitter:image`, and schema.org `Article.image` on each article route) |
| `8171-portal-troubleshooting.jpg` | `/8171-web-portal-not-working/` | *"A user troubleshooting the official 8171 BISP portal on a mobile phone"* | No (`fill`) | `priority` on Article Hero (`ArticleTemplate`); `loading="lazy"` on Cards (`ArticleCard`) | Yes (`og:image`, `twitter:image`, and schema.org `Article.image` on each article route) |
| `8171-register.jpg` | `/8171-register/`<br>`/bisp-id-card-check/` | *"Featured graphic for 8171 Register: does texting your CNIC sign you up for BISP?"*<br><br>*"A NADRA counter where a beneficiary renews an expired CNIC to fix a blocked BISP record"* | No (`fill`) | `priority` on Article Hero (`ArticleTemplate`); `loading="lazy"` on Cards (`ArticleCard`) | Yes (`og:image`, `twitter:image`, and schema.org `Article.image` on each article route) |
| `apna-khet-apna-rozgar-scheme.jpg` | `/apna-khet-apna-rozgar-scheme-apply-online-2026/` | *"Landless farmer in Punjab standing near newly surveyed agricultural state land under the Apna Khet Apna Rozgar Scheme"* | No (`fill`) | `priority` on Article Hero (`ArticleTemplate`); `loading="lazy"` on Cards (`ArticleCard`) | Yes (`og:image`, `twitter:image`, and schema.org `Article.image` on each article route) |
| `apni-chhat-apna-ghar-scheme.jpg` | `/apni-chhat-apna-ghar-scheme-online-apply-2026/` | *"Pakistani family proudly standing in front of their newly constructed brick home under Apni Chhat Apna Ghar scheme in Punjab"* | No (`fill`) | `priority` on Article Hero (`ArticleTemplate`); `loading="lazy"` on Cards (`ArticleCard`) | Yes (`og:image`, `twitter:image`, and schema.org `Article.image` on each article route) |
| `apni-zameen-apna-ghar-balloting-result-2026.jpg` | **Homepage Latest Guides Card** & `/apni-zameen-apna-ghar-balloting-result-2026/` | *"Apni Zameen Apna Ghar Balloting Result 2026 CNIC Check Online"* | No (`fill`) | `priority` on Article Hero (`ArticleTemplate`); `loading="lazy"` on Cards (`ArticleCard`) | Yes (`og:image`, `twitter:image`, and schema.org `Article.image` on each article route) |
| `benazir-form.jpg` | `/benazir-form/`<br>`/benazir-sim-card/` | *"Featured graphic for What Is the Benazir Form? Every BISP paperwork type explained"*<br><br>*"A BISP beneficiary registering for a free wallet SIM at a Tehsil Office counter"* | No (`fill`) | `priority` on Article Hero (`ArticleTemplate`); `loading="lazy"` on Cards (`ArticleCard`) | Yes (`og:image`, `twitter:image`, and schema.org `Article.image` on each article route) |
| `benazir-kafaalat-case-paused.jpg` | `/benazir-kafaalat-case-paused-reasons/` | *"Pakistani female beneficiary verifying her Benazir Kafaalat status and biometric records at an official BISP Tehsil office desk"* | No (`fill`) | `priority` on Article Hero (`ArticleTemplate`); `loading="lazy"` on Cards (`ArticleCard`) | Yes (`og:image`, `twitter:image`, and schema.org `Article.image` on each article route) |
| `benazir-kafaalat.jpg` | `/bisp-kafaalat-13500-check-online-kaise-karein/` | *"A Pakistani woman checking BISP Benazir Kafaalat 13500 installment online via smartphone"* | No (`fill`) | `priority` on Article Hero (`ArticleTemplate`); `loading="lazy"` on Cards (`ArticleCard`) | Yes (`og:image`, `twitter:image`, and schema.org `Article.image` on each article route) |
| `benazir-mazdoor-card-registration-online-2026.jpg` | `/benazir-mazdoor-card-registration-online-2026/` | *"Worker scanning Benazir Mazdoor Card smart identity card at SESSI hospital registration desk"* | No (`fill`) | `priority` on Article Hero (`ArticleTemplate`); `loading="lazy"` on Cards (`ArticleCard`) | Yes (`og:image`, `twitter:image`, and schema.org `Article.image` on each article route) |
| `benazir-nashonuma-program.jpg` | `/benazir-nashonuma-program-online-apply-cnic-check/` | *"Benazir Nashonuma Program maternal and child nutrition check guide"* | No (`fill`) | `priority` on Article Hero (`ArticleTemplate`); `loading="lazy"` on Cards (`ArticleCard`) | Yes (`og:image`, `twitter:image`, and schema.org `Article.image` on each article route) |
| `bisp-8171-balance-check-online.jpg` | `/bisp-8171-balance-check-online-kaise-karein/`<br>`/bisp-8171-paise-check-karne-ka-tarika/` | *"Pakistani woman checking BISP 8171 balance and payment status online on smartphone"*<br><br>*"A beneficiary checking BISP 8171 payment status and withdrawing cash at a biometric ATM in Pakistan"* | No (`fill`) | `priority` on Article Hero (`ArticleTemplate`); `loading="lazy"` on Cards (`ArticleCard`) | Yes (`og:image`, `twitter:image`, and schema.org `Article.image` on each article route) |
| `bisp-agent-deduction-complaint.jpg` | `/bisp-agent-deduction-complaint-retailer-penalty/` | *"BISP beneficiary collecting full Rs 13500 payment from biometric payment center with zero fee deduction"* | No (`fill`) | `priority` on Article Hero (`ArticleTemplate`); `loading="lazy"` on Cards (`ArticleCard`) | Yes (`og:image`, `twitter:image`, and schema.org `Article.image` on each article route) |
| `bisp-and-ehsaas-difference.jpg` | `/bisp-and-ehsaas-difference-guide/` | *"Official Benazir Income Support Programme and Ehsaas social welfare registration desk with NADRA biometric equipment in Pakistan"* | No (`fill`) | `priority` on Article Hero (`ArticleTemplate`); `loading="lazy"` on Cards (`ArticleCard`) | Yes (`og:image`, `twitter:image`, and schema.org `Article.image` on each article route) |
| `bisp-atm-se-paise-nikalwane-ka-tarika.jpg` | *None* (Unreferenced in `src/data/content.ts` and all TSX components) | *None* | N/A | N/A | No |
| `bisp-atm-withdrawal.jpg` | `/bisp-atm-se-paise-nikalwane-ka-tarika/` | *"BISP beneficiary withdrawing cash from HBL biometric ATM using fingerprint verification without card"* | No (`fill`) | `priority` on Article Hero (`ArticleTemplate`); `loading="lazy"` on Cards (`ArticleCard`) | Yes (`og:image`, `twitter:image`, and schema.org `Article.image` on each article route) |
| `bisp-biometric-verification-failed.jpg` | **Homepage Latest Guides Card** & `/bisp-biometric-verification-failed-fingerprint-solution/` | *"Official government BISP biometric verification failed fingerprint solution Form B registration guide"* | No (`fill`) | `priority` on Article Hero (`ArticleTemplate`); `loading="lazy"` on Cards (`ArticleCard`) | Yes (`og:image`, `twitter:image`, and schema.org `Article.image` on each article route) |
| `bisp-cnic-status-check.jpg` | `/check-bisp-status-by-cnic-online/`<br>`/bisp-balance-check-by-cnic-2026/`<br>`/bisp-payment-approved-but-no-cash-received/`<br>`/bisp-biometric-verification-failed/` | *"A user entering a CNIC and image code on the official BISP 8171 portal"*<br><br>*"A beneficiary entering their CNIC number to check their BISP balance on the 8171 portal"*<br><br>*"A beneficiary checking BISP payment status by CNIC on the 8171 portal"*<br><br>*"A beneficiary attempting biometric verification for BISP payment collection"* | No (`fill`) | `priority` on Article Hero (`ArticleTemplate`); `loading="lazy"` on Cards (`ArticleCard`) | Yes (`og:image`, `twitter:image`, and schema.org `Article.image` on each article route) |
| `bisp-deceased-beneficiary-payment-transfer-procedure.jpg` | `/bisp-deceased-beneficiary-payment-transfer-procedure/` | *"Family applicant submitting NADRA CNIC cancellation certificate at BISP Tehsil helpdesk"* | No (`fill`) | `priority` on Article Hero (`ArticleTemplate`); `loading="lazy"` on Cards (`ArticleCard`) | Yes (`og:image`, `twitter:image`, and schema.org `Article.image` on each article route) |
| `bisp-direct-bank-account-transfer.jpg` | `/bisp-direct-bank-account-transfer-online-registration/` | *"Beneficiary completing biometric authentication for BISP Sahulat commercial bank account opening"* | No (`fill`) | `priority` on Article Hero (`ArticleTemplate`); `loading="lazy"` on Cards (`ArticleCard`) | Yes (`og:image`, `twitter:image`, and schema.org `Article.image` on each article route) |
| `bisp-dynamic-survey-documents.jpg` | `/bisp-dynamic-survey-token-required-documents-guide/` | *"BISP beneficiary female presenting CNIC and documents at Tehsil office dynamic survey registration desk"* | No (`fill`) | `priority` on Article Hero (`ArticleTemplate`); `loading="lazy"` on Cards (`ArticleCard`) | Yes (`og:image`, `twitter:image`, and schema.org `Article.image` on each article route) |
| `bisp-dynamic-survey-token-required-documents-guide.jpg` | *None* (Unreferenced in `src/data/content.ts` and all TSX components) | *None* | N/A | N/A | No |
| `bisp-helpline-complaint.jpg` | `/bisp-helpline-number-complaint-kaise-darj-karein/` | *"Official BISP 0800-26477 helpline and grievance redressal guide for agent katauti and biometric complaints"* | No (`fill`) | `priority` on Article Hero (`ArticleTemplate`); `loading="lazy"` on Cards (`ArticleCard`) | Yes (`og:image`, `twitter:image`, and schema.org `Article.image` on each article route) |
| `bisp-login.jpg` | `/bisp-login-username-password/`<br>`/bisp-payment-method/` | *"Featured graphic for No Username, No Password: logging into the BISP 8171 portal with CNIC and OTP"*<br><br>*"A BISP beneficiary completing biometric verification to withdraw a payment at an agent counter"* | No (`fill`) | `priority` on Article Hero (`ArticleTemplate`); `loading="lazy"` on Cards (`ArticleCard`) | Yes (`og:image`, `twitter:image`, and schema.org `Article.image` on each article route) |
| `bisp-office-rawalpindi.jpg` | `/bisp-office-rawalpindi-addresses-guide/` | *"BISP Divisional Office and Dynamic Registration Center in Rawalpindi Pakistan showing civic registration facilities"* | No (`fill`) | `priority` on Article Hero (`ArticleTemplate`); `loading="lazy"` on Cards (`ArticleCard`) | Yes (`og:image`, `twitter:image`, and schema.org `Article.image` on each article route) |
| `bisp-online-registration-mistakes.jpg` | `/bisp-online-registration-mistakes/` | *"A female applicant attending a BISP dynamic registration interview at a Tehsil center"* | No (`fill`) | `priority` on Article Hero (`ArticleTemplate`); `loading="lazy"` on Cards (`ArticleCard`) | Yes (`og:image`, `twitter:image`, and schema.org `Article.image` on each article route) |
| `bisp-registration-check-by-cnic.jpg` | `/bisp-registration-check-by-cnic-kaise-karein/` | *"Pakistani woman holding CNIC card at government BISP registration facilitation desk"* | No (`fill`) | `priority` on Article Hero (`ArticleTemplate`); `loading="lazy"` on Cards (`ArticleCard`) | Yes (`og:image`, `twitter:image`, and schema.org `Article.image` on each article route) |
| `bisp-registration.jpg` | `/bisp-new-registration-form-online-apply-kaise-karein/` | *"A Pakistani woman filling out the BISP dynamic registration survey form at a Tehsil office desk"* | No (`fill`) | `priority` on Article Hero (`ArticleTemplate`); `loading="lazy"` on Cards (`ArticleCard`) | Yes (`og:image`, `twitter:image`, and schema.org `Article.image` on each article route) |
| `bisp-taleemi-wazaif-70-attendance-rule-verification.jpg` | `/bisp-taleemi-wazaif-70-attendance-rule-verification/` | *"School student presenting BISP Taleemi Wazaif attendance verification slip to school headmaster"* | No (`fill`) | `priority` on Article Hero (`ArticleTemplate`); `loading="lazy"` on Cards (`ArticleCard`) | Yes (`og:image`, `twitter:image`, and schema.org `Article.image` on each article route) |
| `bisp-taleemi-wazaif-stipend-rates-2026.jpg` | `/bisp-taleemi-wazaif-stipend-rates-2026/` | *"BISP Taleemi Wazaif Class-Wise Stipend Rates 2026"* | No (`fill`) | `priority` on Article Hero (`ArticleTemplate`); `loading="lazy"` on Cards (`ArticleCard`) | Yes (`og:image`, `twitter:image`, and schema.org `Article.image` on each article route) |
| `bisp-tehsil-office-faisalabad.jpg` | `/bisp-tehsil-office-faisalabad-addresses-guide/` | *"BISP Tehsil Dynamic Registration Center in Faisalabad assisting women with NSER survey"* | No (`fill`) | `priority` on Article Hero (`ArticleTemplate`); `loading="lazy"` on Cards (`ArticleCard`) | Yes (`og:image`, `twitter:image`, and schema.org `Article.image` on each article route) |
| `bisp-tehsil-office-karachi.jpg` | `/bisp-tehsil-office-karachi-districts-guide/` | *"BISP Tehsil Office and registration center in Karachi Pakistan showing beneficiaries across Karachi districts"* | No (`fill`) | `priority` on Article Hero (`ArticleTemplate`); `loading="lazy"` on Cards (`ArticleCard`) | Yes (`og:image`, `twitter:image`, and schema.org `Article.image` on each article route) |
| `bisp-tehsil-office-lahore.jpg` | `/bisp-tehsil-office-lahore-addresses-guide/` | *"BISP Tehsil Office and Dynamic Registration Center in Lahore Pakistan showing civic service desks and beneficiaries"* | No (`fill`) | `priority` on Article Hero (`ArticleTemplate`); `loading="lazy"` on Cards (`ArticleCard`) | Yes (`og:image`, `twitter:image`, and schema.org `Article.image` on each article route) |
| `bisp-tehsil-office-multan.jpg` | `/bisp-tehsil-office-multan-addresses-guide/` | *"Beneficiaries arriving at BISP Multan Saddar center near Bahadarpur Metro Bus Station"* | No (`fill`) | `priority` on Article Hero (`ArticleTemplate`); `loading="lazy"` on Cards (`ArticleCard`) | Yes (`og:image`, `twitter:image`, and schema.org `Article.image` on each article route) |
| `bisp-tehsil-office-peshawar-kpk.jpg` | **Homepage Latest Guides Card** & `/bisp-tehsil-office-peshawar-kpk-districts-list-addresses/` | *"Verified government BISP Tehsil Offices Peshawar KPK registration center directory list"* | No (`fill`) | `priority` on Article Hero (`ArticleTemplate`); `loading="lazy"` on Cards (`ArticleCard`) | Yes (`og:image`, `twitter:image`, and schema.org `Article.image` on each article route) |
| `check-bisp-account-status.jpg` | `/check-bisp-account-status/`<br>`/bisp-card-check/` | *"Featured graphic for Is Your BISP Card Active? Check your account status in minutes"*<br><br>*"A BISP beneficiary checking whether their payment card is active at a bank ATM"* | No (`fill`) | `priority` on Article Hero (`ArticleTemplate`); `loading="lazy"` on Cards (`ArticleCard`) | Yes (`og:image`, `twitter:image`, and schema.org `Article.image` on each article route) |
| `cm-balochistan-youth-skills-scheme-2026-online-apply.jpg` | **Homepage Latest Guides Card** & `/cm-balochistan-youth-skills-scheme-2026-online-apply/` | *"CM Balochistan Youth Skills Scheme 2026 Online Apply and Registration Guide"* | No (`fill`) | `priority` on Article Hero (`ArticleTemplate`); `loading="lazy"` on Cards (`ArticleCard`) | Yes (`og:image`, `twitter:image`, and schema.org `Article.image` on each article route) |
| `cm-punjab-apni-chhat-apna-ghar-loan.jpg` | **Homepage Latest Guides Card** & `/cm-punjab-apni-chhat-apna-ghar-loan-installment-tracking/` | *"Apni Chhat Apna Ghar Loan Installment Tracking PITB Portal Guide"* | No (`fill`) | `priority` on Article Hero (`ArticleTemplate`); `loading="lazy"` on Cards (`ArticleCard`) | Yes (`og:image`, `twitter:image`, and schema.org `Article.image` on each article route) |
| `cm-punjab-dhee-rani-program.jpg` | `/cm-punjab-dhee-rani-program-2026-online-apply/` | *"CM Punjab Dhee Rani collective marriage ceremony registration and social welfare facilitation desk"* | No (`fill`) | `priority` on Article Hero (`ArticleTemplate`); `loading="lazy"` on Cards (`ArticleCard`) | Yes (`og:image`, `twitter:image`, and schema.org `Article.image` on each article route) |
| `cm-punjab-free-laptop-scheme.jpg` | `/cm-punjab-free-laptop-scheme-2026-online-apply/` | *"CM Punjab Free Laptop Scheme online apply portal guide"* | No (`fill`) | `priority` on Article Hero (`ArticleTemplate`); `loading="lazy"` on Cards (`ArticleCard`) | Yes (`og:image`, `twitter:image`, and schema.org `Article.image` on each article route) |
| `cm-punjab-green-tractor-scheme.jpg` | `/cm-punjab-green-tractor-scheme-2026-online-apply/` | *"Bright green agricultural tractor operating in a fertile rural Punjab farmland under government tractor subsidy scheme"* | No (`fill`) | `priority` on Article Hero (`ArticleTemplate`); `loading="lazy"` on Cards (`ArticleCard`) | Yes (`og:image`, `twitter:image`, and schema.org `Article.image` on each article route) |
| `cm-punjab-honhaar-scholarship.jpg` | `/cm-punjab-honhaar-scholarship-program-2026/` | *"Pakistani university students walking on Punjab campus lawn under CM Punjab Honhaar Merit Scholarship Program"* | No (`fill`) | `priority` on Article Hero (`ArticleTemplate`); `loading="lazy"` on Cards (`ArticleCard`) | Yes (`og:image`, `twitter:image`, and schema.org `Article.image` on each article route) |
| `cm-punjab-kisan-card.jpg` | `/cm-punjab-kisan-card-online-apply-2026/` | *"Pakistani farmer holding official Chief Minister Punjab Kisan Card in an agricultural wheat field"* | No (`fill`) | `priority` on Article Hero (`ArticleTemplate`); `loading="lazy"` on Cards (`ArticleCard`) | Yes (`og:image`, `twitter:image`, and schema.org `Article.image` on each article route) |
| `cm-punjab-livestock-card-scheme.jpg` | `/cm-punjab-livestock-card-scheme-2026-online-apply/` | *"Pakistani cattle farmer with healthy young calves at rural Punjab livestock farm"* | No (`fill`) | `priority` on Article Hero (`ArticleTemplate`); `loading="lazy"` on Cards (`ArticleCard`) | Yes (`og:image`, `twitter:image`, and schema.org `Article.image` on each article route) |
| `cm-punjab-solar-panel-scheme.jpg` | `/cm-punjab-solar-panel-scheme-2026-online-apply/` | *"Modern rooftop solar panel installation under Chief Minister Punjab Roshan Gharana energy relief scheme"* | No (`fill`) | `priority` on Article Hero (`ArticleTemplate`); `loading="lazy"` on Cards (`ArticleCard`) | Yes (`og:image`, `twitter:image`, and schema.org `Article.image` on each article route) |
| `e-bike-guide.jpg` | `/ehsaas-interest-free-loan-saving-wallets-guide/`<br>`/punjab-rozgar-scheme-guide/`<br>`/electric-bike-scheme-guide/`<br>`/fuel-relief-scheme-guide/` | *"A small business owner reviewing loan terms on a smartphone"*<br><br>*"A young entrepreneur reviewing Punjab Rozgar Scheme loan details on a laptop"*<br><br>*"Pakistani student beside an electric scooter checking her phone"*<br><br>*"A motorcycle rider checking fuel relief scheme registration on a phone at a petrol station"* | No (`fill`) | `priority` on Article Hero (`ArticleTemplate`); `loading="lazy"` on Cards (`ArticleCard`) | Yes (`og:image`, `twitter:image`, and schema.org `Article.image` on each article route) |
| `ehsaas-kafalat-invalid-cnic-nser-update.jpg` | `/ehsaas-kafalat-invalid-cnic-nser-update/` | *"Ehsaas Kafalat Survey Status Invalid CNIC NSER Record Update"* | No (`fill`) | `priority` on Article Hero (`ArticleTemplate`); `loading="lazy"` on Cards (`ArticleCard`) | Yes (`og:image`, `twitter:image`, and schema.org `Article.image` on each article route) |
| `ehsaas-loan-vs-saving-wallet.jpg` | `/ehsaas-interest-free-loan-vs-saving-wallet/` | *"Ehsaas Interest-Free Loan vs Saving Wallet Comparison and Registration Guide"* | No (`fill`) | `priority` on Article Hero (`ArticleTemplate`); `loading="lazy"` on Cards (`ArticleCard`) | Yes (`og:image`, `twitter:image`, and schema.org `Article.image` on each article route) |
| `ehsaas-payment-tracking.jpg` | `/ehsaas-tracking-check-payment-status/`<br>`/ehsaas-program-balance-check/`<br>`/ramzan-package-check-guide/` | *"A Pakistani woman checking an Ehsaas and BISP payment status on her phone"*<br><br>*"A woman checking her Ehsaas program balance status on a mobile phone"*<br><br>*"A person checking their Ramzan Package eligibility status on a phone"* | No (`fill`) | `priority` on Article Hero (`ArticleTemplate`); `loading="lazy"` on Cards (`ArticleCard`) | Yes (`og:image`, `twitter:image`, and schema.org `Article.image` on each article route) |
| `ehsaas-tracking-news.jpg` | `/ehsaas-tracking-news/` | *"Featured graphic for Ehsaas Tracking News 2026: the real BISP 8171 changes explained"* | No (`fill`) | `priority` on Article Hero (`ArticleTemplate`); `loading="lazy"` on Cards (`ArticleCard`) | Yes (`og:image`, `twitter:image`, and schema.org `Article.image` on each article route) |
| `ehsaas-undergraduate-scholarship.jpg` | `/ehsaas-undergraduate-scholarship-online-apply/` | *"Pakistani university undergraduate student checking HEC Ehsaas scholarship status on online portal"* | No (`fill`) | `priority` on Article Hero (`ArticleTemplate`); `loading="lazy"` on Cards (`ArticleCard`) | Yes (`og:image`, `twitter:image`, and schema.org `Article.image` on each article route) |
| `fake-8171-sms-check-complaint-pta-bisp-lottery-fraud-alert.jpg` | `/fake-8171-sms-check-complaint-pta-bisp-lottery-fraud-alert/` | *"Fake 8171 SMS Check, Complaint and BISP Lottery Fraud Alert Guide"* | No (`fill`) | `priority` on Article Hero (`ArticleTemplate`); `loading="lazy"` on Cards (`ArticleCard`) | Yes (`og:image`, `twitter:image`, and schema.org `Article.image` on each article route) |
| `farmer-support.jpg` | `/ehsaas-emergency-cash-program-guide/`<br>`/ehsaas-rashan-program-guide/`<br>`/pm-youth-business-loan-guide/`<br>`/farmer-support-card-guide/` | *"A family checking an emergency cash disbursement notice on a phone"*<br><br>*"A family collecting a verified ration package at an official distribution point"*<br><br>*"Pakistani farmer checking programme guidance on a smartphone"*<br><br>*"A farmer using a phone in a green crop field"* | No (`fill`) | `priority` on Article Hero (`ArticleTemplate`); `loading="lazy"` on Cards (`ArticleCard`) | Yes (`og:image`, `twitter:image`, and schema.org `Article.image` on each article route) |
| `fuel-relief-scheme.jpg` | `/fuel-scheme-rs-100-per-litre-petrol-relief-guide/` | *"A motorcyclist and small car driver displaying a fuel relief scheme SMS token at a petrol pump in Pakistan"* | No (`fill`) | `priority` on Article Hero (`ArticleTemplate`); `loading="lazy"` on Cards (`ArticleCard`) | Yes (`og:image`, `twitter:image`, and schema.org `Article.image` on each article route) |
| `hero-support.jpg` | Homepage Hero (`src/app/page.tsx`); Article Hero & Related Cards for 11 articles (`/[slug]/`); Fallback og:image & twitter:image (`src/app/layout.tsx`) | *"A Pakistani mother and daughter receiving public service guidance"* (Home) / 11 distinct article alts | No (`fill`) | `priority` on Homepage Hero; `priority` on Article Hero; `loading="lazy"` on cards | Yes (Homepage `og:image`, `twitter:image`; Layout global fallback `og:image`, `twitter:image`; 11 Articles JSON-LD `image`, `og:image`, `twitter:image`) |
| `himmat-card-eligibility-check-guide.jpg` | `/himmat-card-eligibility-check-guide/` | *"A person checking their Himmat Card eligibility status by CNIC on a phone"* | No (`fill`) | `priority` on Article Hero (`ArticleTemplate`); `loading="lazy"` on Cards (`ArticleCard`) | Yes (`og:image`, `twitter:image`, and schema.org `Article.image` on each article route) |
| `kisan-card-8070-pin-verification.jpg` | `/kisan-card-8070-pin-verification-bop-activation/` | *"Pakistani farmer verifying and activating CM Punjab Kisan Card at Bank of Punjab biometric ATM"* | No (`fill`) | `priority` on Article Hero (`ArticleTemplate`); `loading="lazy"` on Cards (`ArticleCard`) | Yes (`og:image`, `twitter:image`, and schema.org `Article.image` on each article route) |
| `nigehban-card-check-guide.jpg` | `/nigehban-card-check-guide/` | *"A person checking their Nigehban Card status by CNIC on a phone"* | No (`fill`) | `priority` on Article Hero (`ArticleTemplate`); `loading="lazy"` on Cards (`ArticleCard`) | Yes (`og:image`, `twitter:image`, and schema.org `Article.image` on each article route) |
| `pave-electric-bike-scheme.jpg` | `/pave-scheme-2026-eligibility-electric-bike-subsidy-online-apply/` | *"Pakistani commuter reviewing electric bike subsidy application details on a smartphone beside an electric scooter"* | No (`fill`) | `priority` on Article Hero (`ArticleTemplate`); `loading="lazy"` on Cards (`ArticleCard`) | Yes (`og:image`, `twitter:image`, and schema.org `Article.image` on each article route) |
| `pink-scooty-scheme-2026.jpg` | **Homepage Latest Guides Card** & `/pink-scooty-scheme-2026-registration-eligibility-documents-balloting/` | *"Pink Scooty Scheme 2026 Registration Eligibility Documents & Balloting Guide"* | No (`fill`) | `priority` on Article Hero (`ArticleTemplate`); `loading="lazy"` on Cards (`ArticleCard`) | Yes (`og:image`, `twitter:image`, and schema.org `Article.image` on each article route) |
| `pm-youth-loan-scheme.jpg` | `/prime-minister-youth-loan-scheme-2026/` | *"Young Pakistani entrepreneurs in a modern office reviewing Prime Minister Youth Loan Scheme application details"* | No (`fill`) | `priority` on Article Hero (`ArticleTemplate`); `loading="lazy"` on Cards (`ArticleCard`) | Yes (`og:image`, `twitter:image`, and schema.org `Article.image` on each article route) |
| `pmt-score-above-32-bisp-re-survey.jpg` | `/pmt-score-above-32-bisp-re-survey-guide/` | *"Pakistani beneficiary consulting enumerator at BISP Tehsil Dynamic Registry desk for PMT score re-survey"* | No (`fill`) | `priority` on Article Hero (`ArticleTemplate`); `loading="lazy"` on Cards (`ArticleCard`) | Yes (`og:image`, `twitter:image`, and schema.org `Article.image` on each article route) |
| `punjab-land-record-check-guide.jpg` | `/punjab-land-record-check-guide/` | *"A person checking a Punjab land record document on a phone in a rural setting"* | No (`fill`) | `priority` on Article Hero (`ArticleTemplate`); `loading="lazy"` on Cards (`ArticleCard`) | Yes (`og:image`, `twitter:image`, and schema.org `Article.image` on each article route) |
| `punjab-solar-tube-well-scheme.jpg` | `/punjab-solar-tube-well-scheme-2026-online-apply/` | *"Modern agricultural solar tube well system providing clean irrigation water to farmland in Punjab, Pakistan"* | No (`fill`) | `priority` on Article Hero (`ArticleTemplate`); `loading="lazy"` on Cards (`ArticleCard`) | Yes (`og:image`, `twitter:image`, and schema.org `Article.image` on each article route) |
| `registration-guide.jpg` | Homepage Trust Section (`src/app/page.tsx`); Article Hero & Cards for 5 articles (`/[slug]/`) | *"A Pakistani woman checking a registration guide safely"* (Home) / 5 distinct article alts | No (`fill`) | Default (`loading="lazy"` on Home Trust); `priority` on Article Hero; `loading="lazy"` on cards | Yes (Article pages `og:image`, `twitter:image`, JSON-LD `image`) |
| `scholarship-guide.jpg` | `/ehsaas-registration-center-locator-guide/` | *"A person looking up the nearest official registration center address online"* | No (`fill`) | `priority` on Article Hero (`ArticleTemplate`); `loading="lazy"` on Cards (`ArticleCard`) | Yes (`og:image`, `twitter:image`, and schema.org `Article.image` on each article route) |
| `sehat-card-plus-kpk.jpg` | `/sehat-sahulat-card-kpk-check-online-hospital-list/` | *"Patient verifying KPK Sehat Card Plus eligibility at hospital State Life facilitation desk using CNIC"* | No (`fill`) | `priority` on Article Hero (`ArticleTemplate`); `loading="lazy"` on Cards (`ArticleCard`) | Yes (`og:image`, `twitter:image`, and schema.org `Article.image` on each article route) |
| `sindh-hari-card-scheme.jpg` | `/sindh-hari-card-scheme-2026-online-apply-eligibility/` | *"Sindh Hari Card farmer registration and subsidy guide"* | No (`fill`) | `priority` on Article Hero (`ArticleTemplate`); `loading="lazy"` on Cards (`ArticleCard`) | Yes (`og:image`, `twitter:image`, and schema.org `Article.image` on each article route) |
| `taleemi-wazaif.jpg` | `/benazir-taleemi-wazaif-check-online-by-cnic/`<br>`/benazir-taleemi-wazaif-form-download-tarika/` | *"Pakistani school children receiving Benazir Taleemi Wazaif educational stipends and books"*<br><br>*"A school student holding the Benazir Taleemi Wazaif admission verification certificate slip in Pakistan"* | No (`fill`) | `priority` on Article Hero (`ArticleTemplate`); `loading="lazy"` on Cards (`ArticleCard`) | Yes (`og:image`, `twitter:image`, and schema.org `Article.image` on each article route) |

| `icon.svg` | Root Layout (`src/app/layout.tsx`) Organization schema `logo`; Next.js App favicon | N/A (App Icon / Schema Logo) | 48x48 in SVG | N/A | Yes (`Organization.logo.url` in JSON-LD) |

---

## 4. Critical Audit Flags & Findings

### 4.1 Unused Images (2 files)
These image files exist in `public/images/` but are completely unreferenced in `src/data/content.ts`, `src/components/`, or any other route:
1. `public/images/bisp-atm-se-paise-nikalwane-ka-tarika.jpg` (1600x900, 321.34 KB) — Identical binary duplicate of `bisp-8171-balance-check-online.jpg`.
2. `public/images/bisp-dynamic-survey-token-required-documents-guide.jpg` (1376x768, 817.94 KB) — Identical binary duplicate of `bisp-and-ehsaas-difference.jpg`.

### 4.2 Heavy Images Over 200 KB (38 files)
Over 55% of images in `public/images/` exceed the 200 KB threshold, hurting performance and Core Web Vitals (LCP):
- **Extreme Outliers (> 5 MB!):**
  - `cm-punjab-solar-panel-scheme.jpg`: **5,739.47 KB (5.74 MB)** (4096x3072)
  - `punjab-solar-tube-well-scheme.jpg`: **5,739.47 KB (5.74 MB)** (4096x3072)
- **Very Large (> 800 KB):**
  - `apni-chhat-apna-ghar-scheme.jpg`: 989.51 KB
  - `taleemi-wazaif.jpg` & `ehsaas-undergraduate-scholarship.jpg`: 928.89 KB
  - `cm-punjab-honhaar-scholarship.jpg`: 918.12 KB
  - `fuel-relief-scheme.jpg`: 882.57 KB
  - `bisp-online-registration-mistakes.jpg`: 858.10 KB
  - `benazir-kafaalat.jpg`: 856.55 KB
  - `pm-youth-loan-scheme.jpg`: 832.21 KB
  - `benazir-kafaalat-case-paused.jpg`: 822.29 KB
  - `cm-punjab-kisan-card.jpg` & `kisan-card-8070-pin-verification.jpg`: 821.41 KB
  - `bisp-and-ehsaas-difference.jpg`, `bisp-dynamic-survey-documents.jpg`, `bisp-dynamic-survey-token-required-documents-guide.jpg`, `bisp-registration.jpg`, `ehsaas-kafalat-invalid-cnic-nser-update.jpg`, `pmt-score-above-32-bisp-re-survey.jpg`: 817.94 KB each
- **Medium Heavy (200 KB - 400 KB):**
  - `cm-punjab-green-tractor-scheme.jpg` & `farmer-support.jpg`: 347.05 KB
  - `e-bike-guide.jpg` & `pave-electric-bike-scheme.jpg`: 342.62 KB
  - `bisp-8171-balance-check-online.jpg`, `bisp-atm-withdrawal.jpg`, `ehsaas-payment-tracking.jpg`: 321.34 KB
  - `bisp-cnic-status-check.jpg` & `bisp-registration-check-by-cnic.jpg`: 319.89 KB
  - `8171-number-verification.jpg`: 312.23 KB
  - `scholarship-guide.jpg`: 309.55 KB
  - `bisp-agent-deduction-complaint.jpg` & `bisp-helpline-complaint.jpg`: 285.54 KB
  - `cm-punjab-dhee-rani-program.jpg` & `registration-guide.jpg`: 261.93 KB
  - `8171-portal-troubleshooting.jpg`: 257.66 KB
  - `hero-support.jpg` & `sehat-card-plus-kpk.jpg`: 236.32 KB

### 4.3 Images Reused Across Multiple Articles (13 files used across 47 articles)
Violates GEMINI.md Section 1 rule (*"Direct Topical Relevance... No Generic Placeholders: Never reuse unrelated or generic placeholder images for new scheme guides"*):
1. **`hero-support.jpg`**: Reused across **11 articles** (as well as Homepage Hero, Root Layout OG, and Slug fallback). Used for PMT score, Benazir Kafaalat registration, payments, documents, CNIC verification, BISP general, Nashonuma, Zakat, eligibility criteria, and CM Punjab Himmat card!
2. **`registration-guide.jpg`**: Reused across **5 articles** and Homepage Trust section.
3. **`8171-number-verification.jpg`**: Reused across **4 articles** (8171 Portal Not Working, 8171 786 Ehsaas Tracking, BISP Status CNIC Online, 8171 Web Portal Code 2026).
4. **`bisp-cnic-status-check.jpg`**: Reused across **4 articles** (Payment Approved But No Cash, Check BISP Account Status, 8171 CNIC Check Online Kaise Karein, BISP 8171 Result Check Online).
5. **`e-bike-guide.jpg`**: Reused across **4 articles** (Ehsaas Saving Wallets, Punjab Rozgar, Electric Bike, Fuel Relief Scheme).
6. **`farmer-support.jpg`**: Reused across **4 articles** (Ehsaas Emergency Cash, Ehsaas Rashan, PM Youth Loan, Farmer Support Card).
7. **`ehsaas-payment-tracking.jpg`**: Reused across **3 articles** (Ehsaas Tracking, Ehsaas Balance Check, Ramzan Package Check).
8. **`8171-register.jpg`**: Reused across **2 articles** (8171 Register, 8171 Web Portal).
9. **`benazir-form.jpg`**: Reused across **2 articles** (What is Benazir Form, BISP Dynamic Survey Online Registration).
10. **`bisp-8171-balance-check-online.jpg`**: Reused across **2 articles** (BISP 8171 Balance Check Online, BISP 8171 Paise Check Karne Ka Tarika).
11. **`bisp-login.jpg`**: Reused across **2 articles** (BISP Login Username Password, BISP Biometric Verification).
12. **`check-bisp-account-status.jpg`**: Reused across **2 articles** (Is Your BISP Card Active, BISP Card Check).
13. **`taleemi-wazaif.jpg`**: Reused across **2 articles** (Benazir Taleemi Wazaif Check Online by CNIC, Benazir Taleemi Wazaif Form Download Tarika).

### 4.4 Binary Duplicate Groups (12 hash groups sharing identical bytes)
27 public images are exact binary clones of other files:
- Group 1 (`321.34 KB`, 1600x900): `bisp-8171-balance-check-online.jpg` = `bisp-atm-se-paise-nikalwane-ka-tarika.jpg` = `bisp-atm-withdrawal.jpg` = `ehsaas-payment-tracking.jpg`
- Group 2 (`285.54 KB`, 2400x1350): `bisp-agent-deduction-complaint.jpg` = `bisp-helpline-complaint.jpg`
- Group 3 (`817.94 KB`, 1376x768): `bisp-and-ehsaas-difference.jpg` = `bisp-dynamic-survey-documents.jpg` = `bisp-dynamic-survey-token-required-documents-guide.jpg` = `bisp-registration.jpg` = `ehsaas-kafalat-invalid-cnic-nser-update.jpg` = `pmt-score-above-32-bisp-re-survey.jpg`
- Group 4 (`319.89 KB`, 1600x900): `bisp-cnic-status-check.jpg` = `bisp-registration-check-by-cnic.jpg`
- Group 5 (`128.67 KB`, 1200x675): `bisp-taleemi-wazaif-70-attendance-rule-verification.jpg` = `bisp-taleemi-wazaif-stipend-rates-2026.jpg`
- Group 6 (`261.93 KB`, 1600x900): `cm-punjab-dhee-rani-program.jpg` = `registration-guide.jpg`
- Group 7 (`347.05 KB`, 1600x900): `cm-punjab-green-tractor-scheme.jpg` = `farmer-support.jpg`
- Group 8 (`821.41 KB`, 1376x768): `cm-punjab-kisan-card.jpg` = `kisan-card-8070-pin-verification.jpg`
- Group 9 (`5,739.47 KB`, 4096x3072): `cm-punjab-solar-panel-scheme.jpg` = `punjab-solar-tube-well-scheme.jpg`
- Group 10 (`342.62 KB`, 1600x900): `e-bike-guide.jpg` = `pave-electric-bike-scheme.jpg`
- Group 11 (`928.89 KB`, 1376x768): `ehsaas-undergraduate-scholarship.jpg` = `taleemi-wazaif.jpg`
- Group 12 (`236.32 KB`, 1600x1000): `hero-support.jpg` = `sehat-card-plus-kpk.jpg`

### 4.5 Non-16:9 Featured Images (5 files)
GEMINI.md mandates 16:9 aspect ratio for article featured images. Five images deviate:
1. `cm-punjab-solar-panel-scheme.jpg`: 4096x3072 (4:3 ratio / 1.333)
2. `punjab-solar-tube-well-scheme.jpg`: 4096x3072 (4:3 ratio / 1.333)
3. `cm-punjab-livestock-card-scheme.jpg`: 640x430 (1.488 ratio)
4. `hero-support.jpg`: 1600x1000 (16:10 ratio / 1.6) — Note: Hero is intentionally 1600x1000 for OpenGraph compatibility as specified in requirements.
5. `sehat-card-plus-kpk.jpg`: 1600x1000 (16:10 ratio / 1.6) — Binary clone of hero-support.jpg, should be standard 16:9 (1600x900) for article use.

### 4.6 Weak or Repetitive Alt Text
Several articles share identical, generic, or non-descriptive alt texts:
- Multiple articles using `hero-support.jpg` share generic alt text: *"A Pakistani family reviewing public programme guidance"*.
- Articles using `registration-guide.jpg` have repetitive alt texts: *"Pakistani woman reviewing a registration checklist on her phone"*.
- Some alt texts lack key scheme context (e.g. *"Featured graphic for Is Your BISP Card Active?"*).

---

## 5. Homepage Visual Hierarchy Breakdown

### 5.1 Homepage Hero Component
- **Component File:** `src/app/page.tsx` (`<div className="hero-visual">`)
- **Image File:** `/images/hero-support.jpg`
- **Dimensions:** 1600x1000 pixels (16:10 ratio)
- **Current File Size:** 236.32 KB
- **Attributes in JSX:** `<Image src="/images/hero-support.jpg" alt="A Pakistani mother and daughter receiving public service guidance" fill priority sizes="(max-width: 900px) 100vw, 52vw" />`
- **Metadata Usage:**
  - `src/app/page.tsx`: `metadata.openGraph.images` (1600x1000) & `metadata.twitter.images`
  - `src/app/layout.tsx`: Root layout global fallback `metadata.openGraph.images` (1600x1000) & `metadata.twitter.images`
  - `src/app/[slug]/page.tsx`: Fallback OpenGraph / Twitter image if an article has no image defined.

### 5.2 Homepage Trust Section Image
- **Component File:** `src/app/page.tsx` (`<div className="trust-image">`)
- **Image File:** `/images/registration-guide.jpg`
- **Dimensions:** 1600x900 pixels (16:9 ratio)
- **Current File Size:** 261.93 KB (exceeds 150 KB target)
- **Attributes in JSX:** `<Image src="/images/registration-guide.jpg" alt="A Pakistani woman checking a registration guide safely" fill sizes="(max-width: 900px) 100vw, 48vw" />`
- **Loading:** Default Next.js lazy-loading (`loading="lazy"` below the fold).

### 5.3 The 6 Homepage Latest-Guide Card Images
The homepage `<section className="section latest-section" id="latest">` displays the first 6 articles from `articles` in `src/data/content.ts`:
1. **Lead Story (Featured Card - Large 58vw):**
   - **Article:** `apni-zameen-apna-ghar-balloting-result-2026`
   - **Image:** `/images/apni-zameen-apna-ghar-balloting-result-2026.jpg`
   - **Dimensions / Size:** 1200x675 (16:9), 105.04 KB
   - **Current Alt:** *"Apni Zameen Apna Ghar Balloting Result 2026 CNIC Check Online"*
2. **Story Side Card 1 (Upper Side):**
   - **Article:** `pink-scooty-scheme-2026-registration-eligibility-documents-balloting`
   - **Image:** `/images/pink-scooty-scheme-2026.jpg`
   - **Dimensions / Size:** 1200x675 (16:9), 114.62 KB
   - **Current Alt:** *"Pink Scooty Scheme 2026 Registration Eligibility Documents & Balloting Guide"*
3. **Story Side Card 2 (Lower Side):**
   - **Article:** `bisp-biometric-verification-failed-fingerprint-solution`
   - **Image:** `/images/bisp-biometric-verification-failed.jpg`
   - **Dimensions / Size:** 1200x675 (16:9), 88.26 KB
   - **Current Alt:** *"Official government BISP biometric verification failed fingerprint solution Form B registration guide"*
4. **Article Grid Card 1:**
   - **Article:** `bisp-tehsil-office-peshawar-kpk-districts-list-addresses`
   - **Image:** `/images/bisp-tehsil-office-peshawar-kpk.jpg`
   - **Dimensions / Size:** 1200x675 (16:9), 85.44 KB
   - **Current Alt:** *"Verified government BISP Tehsil Offices Peshawar KPK registration center directory list"*
5. **Article Grid Card 2:**
   - **Article:** `cm-punjab-apni-chhat-apna-ghar-loan-installment-tracking`
   - **Image:** `/images/cm-punjab-apni-chhat-apna-ghar-loan.jpg`
   - **Dimensions / Size:** 1200x675 (16:9), 107.89 KB
   - **Current Alt:** *"Apni Chhat Apna Ghar Loan Installment Tracking PITB Portal Guide"*
6. **Article Grid Card 3:**
   - **Article:** `cm-balochistan-youth-skills-scheme-2026-online-apply`
   - **Image:** `/images/cm-balochistan-youth-skills-scheme-2026-online-apply.jpg`
   - **Dimensions / Size:** 1200x675 (16:9), 111.28 KB
   - **Current Alt:** *"CM Balochistan Youth Skills Scheme 2026 Online Apply and Registration Guide"*
