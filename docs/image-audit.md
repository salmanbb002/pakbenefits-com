# Website Image Audit Report (Phase 1)

## Executive Summary
This document provides a complete, read-only audit of every image on **Live Govt Schemes & Ehsaas Programs** (`https://pakbenefits.com`).

- **Total Images in `public/images/`**: 83 files (81 JPG/JPEG, 2 WEBP)
- **Total Images in `content-drafts/`**: 39 files (`featured-image.jpg`)
- **Total Images in `public/`**: 1 vector icon (`icon.svg`)
- **Images Over 200 KB**: 39 files (Largest: `cm-punjab-solar-panel-scheme.jpg` & `punjab-solar-tube-well-scheme.jpg` at **5,739.47 KB / 5.7 MB**)
- **Unused Images**: 11 files (located in `public/images/` but not referenced in code or content)
- **Reused / Duplicate Images Across Articles**: 10 images shared across 20 articles (violates GEMINI.md / AGENTS.md "no generic placeholders" rule)
- **Non-16:9 Aspect Ratio Featured Images**: 4 files (`cm-punjab-livestock-card-scheme.jpg` 640x430, `cm-punjab-solar-panel-scheme.jpg` 4096x3072, `punjab-solar-tube-well-scheme.jpg` 4096x3072, `sehat-card-plus-kpk.jpg` 1600x1000)
- **Referenced-but-Missing Images**: 0 (all 82 article images in `src/data/content.ts` exist in `public/images/`)

---

## Homepage Hero & Key Page Images

### 1. Homepage Hero Image
- **Target Filename**: `hero-support.jpg`
- **Component**: `src/app/page.tsx` (`<section className="hero-section">`)
- **Current Dimensions**: 1600x1000 (Ratio 1.6 / 16:10)
- **Current File Size**: 236.32 KB (> 200 KB flag)
- **Usage**:
  - Hero visual on `/` via Next.js `<Image fill priority sizes="(max-width: 900px) 100vw, 52vw" />`
  - Default `og:image` (OpenGraph) for homepage and fallback for category/info pages
  - Default `twitter:image` for homepage and fallback for category/info pages
- **Current Alt Text**: *"A Pakistani mother and daughter receiving public service guidance"*
- **Priority / Fetchpriority**: `priority` set on `<Image>` (no lazy loading).

### 2. Homepage Trust Section Image
- **Target Filename**: `registration-guide.jpg`
- **Component**: `src/app/page.tsx` (`<section className="trust-section">`)
- **Current Dimensions**: 1600x1000
- **Current File Size**: 261.93 KB (> 200 KB flag)
- **Usage**: Trust section banner via `<Image fill sizes="(max-width: 900px) 100vw, 48vw" />`
- **Current Alt Text**: *"A Pakistani woman checking a registration guide safely"*

### 3. Homepage 6 Latest-Guide Card Images
The latest-guide section on the homepage (`src/app/page.tsx` lines 191-200) renders cards for the first 6 articles in `src/data/content.ts`:
1. `bisp-8171-balance-check-online.jpg` (Article: `bisp-8171-balance-check-online-kaise-karein`, 321.34 KB - OVER 200KB)
2. `cm-punjab-e-bikes-scheme-phase-2.jpg` (Article: `cm-punjab-e-bikes-scheme-phase-2-2026-online-apply`, 84.24 KB)
3. `how-to-apply-cm-punjab-e-bike-scheme-2026.jpg` (Article: `how-to-apply-cm-punjab-e-bike-scheme-2026`, 94.09 KB)
4. `wazir-e-azam-apna-ghar-program.jpg` (Article: `wazir-e-azam-apna-ghar-program-online-apply-2026`, 107.98 KB)
5. `national-savings-profit-rates.webp` (Article: `national-savings-profit-rates-2026-chart-tables`, 45.04 KB)
6. `bisp-tehsil-office-peshawar-kpk.jpg` (Article: `bisp-tehsil-office-peshawar-kpk-addresses-guide`, 87.49 KB)

---

## Detailed Image Audit Inventory Table

| Image File | Page / Component / Route | Alt / imageAlt Text | Width/Height Set? | Loading / Priority | Used in OG / Twitter / JSON-LD? | Audit Flags |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `8171-number-verification.jpg` | Article: `/what-is-pmt-score/` (What Is PMT Score? BISP & Ehsaas Eligibility Explained); Article: `/8171-check-online-kaise-karein/` (8171 Check Online Kaise Karein: Official Web Portal & CNIC Status Check (2026 Guide)) | "A household record being reviewed to explain how a PMT score determines BISP eligibility; Pakistani citizen checking 8171 BISP eligibility on smartphone via official web portal and SMS" | fill (Responsive Aspect Box) | loading="lazy" | og:image, twitter:image, JSON-LD Article | **REUSED (2 articles), OVER 200 KB (312.23 KB)** |
| `8171-portal-troubleshooting.jpg` | Article: `/8171-web-portal-not-working/` (8171 Web Portal Not Working? 5 Checks Before You Assume It Is Down (2026)) | "A user troubleshooting the official 8171 BISP portal on a mobile phone" | fill (Responsive Aspect Box) | loading="lazy" | og:image, twitter:image, JSON-LD Article | **OVER 200 KB (257.66 KB)** |
| `8171-register.jpg` | Article: `/8171-register/` (8171 Register: Does Texting Your CNIC Actually Sign You Up for BISP?); Article: `/bisp-id-card-check/` (BISP ID Card Check: Fix a Blocked CNIC Fast) | "Featured graphic for 8171 Register: does texting your CNIC sign you up for BISP?; A NADRA counter where a beneficiary renews an expired CNIC to fix a blocked BISP record" | fill (Responsive Aspect Box) | loading="lazy" | og:image, twitter:image, JSON-LD Article | **REUSED (2 articles)** |
| `apna-khet-apna-rozgar-scheme.jpg` | Article: `/apna-khet-apna-rozgar-scheme-apply-online-2026/` (Apna Khet Apna Rozgar Scheme Apply Online 2026: Complete Registration Guide, Eligibility & Balloting Status) | "Landless farmer in Punjab standing near newly surveyed agricultural state land under the Apna Khet Apna Rozgar Scheme" | fill (Responsive Aspect Box) | loading="lazy" | og:image, twitter:image, JSON-LD Article | **OK** |
| `apni-chhat-apna-ghar-scheme.jpg` | Article: `/apni-chhat-apna-ghar-scheme-online-apply-2026/` (Apni Chhat Apna Ghar Scheme Online Apply 2026: ACAG Portal Registration, Eligibility & Rs 15 Lakh Loan Guide) | "Pakistani family proudly standing in front of their newly constructed brick home under Apni Chhat Apna Ghar scheme in Punjab" | fill (Responsive Aspect Box) | loading="lazy" | og:image, twitter:image, JSON-LD Article | **OVER 200 KB (989.51 KB)** |
| `apni-zameen-apna-ghar-balloting-result-2026.jpg` | Article: `/apni-zameen-apna-ghar-balloting-result-2026/` (Apni Zameen Apna Ghar Balloting Result 2026: How to Check CNIC Status & Plot Rules) | "Apni Zameen Apna Ghar Balloting Result 2026 CNIC Check Online" | fill (Responsive Aspect Box) | loading="lazy" | og:image, twitter:image, JSON-LD Article | **OK** |
| `benazir-form.jpg` | Article: `/benazir-form/` (What Is the “Benazir Form”? Every Piece of BISP Paperwork Explained Simply); Article: `/benazir-sim-card/` (Benazir SIM Card 2026: Free Wallet SIM Guide) | "Featured graphic for What Is the Benazir Form? Every BISP paperwork type explained; A BISP beneficiary registering for a free wallet SIM at a Tehsil Office counter" | fill (Responsive Aspect Box) | loading="lazy" | og:image, twitter:image, JSON-LD Article | **REUSED (2 articles)** |
| `benazir-kafaalat-case-paused.jpg` | Article: `/benazir-kafaalat-case-paused-reasons/` (Why Was My Benazir Kafaalat Case Paused? 6 Common Reasons and Official Solutions) | "Pakistani female beneficiary verifying her Benazir Kafaalat status and biometric records at an official BISP Tehsil office desk" | fill (Responsive Aspect Box) | loading="lazy" | og:image, twitter:image, JSON-LD Article | **OVER 200 KB (822.29 KB)** |
| `benazir-kafaalat.jpg` | Article: `/bisp-kafaalat-13500-check-online-kaise-karein/` (BISP Kafaalat 13500 Check Online Kaise Karein: Nayi Qist, Release Date Aur Payment Status) | "A Pakistani woman checking BISP Benazir Kafaalat 13500 installment online via smartphone" | fill (Responsive Aspect Box) | loading="lazy" | og:image, twitter:image, JSON-LD Article | **OVER 200 KB (856.55 KB)** |
| `benazir-mazdoor-card-registration-online-2026.jpg` | Article: `/benazir-mazdoor-card-registration-online-2026/` (Benazir Mazdoor Card Registration Online 2026: Sindh SESSI Apply & Benefits) | "Worker scanning Benazir Mazdoor Card smart identity card at SESSI hospital registration desk" | fill (Responsive Aspect Box) | loading="lazy" | og:image, twitter:image, JSON-LD Article | **OK** |
| `benazir-nashonuma-program.jpg` | Article: `/benazir-nashonuma-program-online-apply-cnic-check/` (Benazir Nashonuma Program Online Check 2026: 8171 CNIC Status, Rs 3,000 Nutrition Cash & Registration Guide) | "Benazir Nashonuma Program maternal and child nutrition check guide" | fill (Responsive Aspect Box) | loading="lazy" | og:image, twitter:image, JSON-LD Article | **OK** |
| `bisp-8171-balance-check-online.jpg` | Article: `/bisp-8171-balance-check-online-kaise-karein/` (BISP 8171 Balance Check Online Kaise Karein: Benazir Kafaalat Paise Check Aur ATM Se Nikalne Ka Mukammal Tarika); Article: `/bisp-8171-paise-check-karne-ka-tarika/` (BISP 8171 Paise Check Karne Ka Tarika: ATM Cash Nikalne Aur Balance Ki Mukammal Maloomat) | "Pakistani woman checking BISP 8171 balance and payment status online on smartphone; A beneficiary checking BISP 8171 payment status and withdrawing cash at a biometric ATM in Pakistan" | fill (Responsive Aspect Box) | loading="lazy" | og:image, twitter:image, JSON-LD Article | **REUSED (2 articles), OVER 200 KB (321.34 KB)** |
| `bisp-agent-deduction-complaint.jpg` | Article: `/bisp-agent-deduction-complaint-retailer-penalty/` (BISP Agent Deduction Complaint and Retailer Penalty Guide: How to Report Illegal Fee Cuts, File 8171 Grievances & Recover Cash (2026)) | "BISP beneficiary collecting full Rs 13500 payment from biometric payment center with zero fee deduction" | fill (Responsive Aspect Box) | loading="lazy" | og:image, twitter:image, JSON-LD Article | **OVER 200 KB (285.54 KB)** |
| `bisp-and-ehsaas-difference.jpg` | Article: `/bisp-and-ehsaas-difference-guide/` (BISP and Ehsaas Difference Explained: History, 8171 Portal, Program Mapping & Current Status (2026)) | "Official Benazir Income Support Programme and Ehsaas social welfare registration desk with NADRA biometric equipment in Pakistan" | fill (Responsive Aspect Box) | loading="lazy" | og:image, twitter:image, JSON-LD Article | **OVER 200 KB (817.94 KB)** |
| `bisp-atm-se-paise-nikalwane-ka-tarika.jpg` | Unused | "N/A" | fill (Responsive Aspect Box) | loading="lazy" | No | **UNUSED, OVER 200 KB (321.34 KB), WEAK/MISSING ALT** |
| `bisp-atm-withdrawal.jpg` | Article: `/bisp-atm-se-paise-nikalwane-ka-tarika/` (BISP ATM Se Paise Nikalwane Ka Tarika: HBL Konnect Aur Bank Alfalah Biometric ATM Cash Withdrawal (2026)) | "BISP beneficiary withdrawing cash from HBL biometric ATM using fingerprint verification without card" | fill (Responsive Aspect Box) | loading="lazy" | og:image, twitter:image, JSON-LD Article | **OVER 200 KB (321.34 KB)** |
| `bisp-benazir-kafaalat-8171-check.jpg` | Article: `/bisp-benazir-kafaalat-8171-check/` (BISP Benazir Kafaalat 2026: 8171 Online CNIC Check & Complete Eligibility Guide) | "BISP Benazir Kafaalat 2026 8171 Online CNIC Check and Registration Guide" | fill (Responsive Aspect Box) | loading="lazy" | og:image, twitter:image, JSON-LD Article | **OK** |
| `bisp-biometric-verification-failed.jpg` | Article: `/bisp-biometric-verification-failed-fingerprint-solution/` (BISP Biometric Failed? Guaranteed Rs 13,500 Fix) | "Official government BISP biometric verification failed fingerprint solution Form B registration guide" | fill (Responsive Aspect Box) | loading="lazy" | og:image, twitter:image, JSON-LD Article | **OK** |
| `bisp-cnic-status-check.jpg` | Unused | "N/A" | fill (Responsive Aspect Box) | loading="lazy" | No | **UNUSED, OVER 200 KB (319.89 KB), WEAK/MISSING ALT** |
| `bisp-deceased-beneficiary-payment-transfer-procedure.jpg` | Article: `/bisp-deceased-beneficiary-payment-transfer-procedure/` (BISP Deceased Beneficiary Payment Transfer & NADRA Cancellation Guide) | "Family applicant submitting NADRA CNIC cancellation certificate at BISP Tehsil helpdesk" | fill (Responsive Aspect Box) | loading="lazy" | og:image, twitter:image, JSON-LD Article | **OK** |
| `bisp-direct-bank-account-transfer.jpg` | Article: `/bisp-direct-bank-account-transfer-online-registration/` (BISP New Direct Bank Transfer System: Shifting from Cash Camps to Commercial Bank Accounts) | "Beneficiary completing biometric authentication for BISP Sahulat commercial bank account opening" | fill (Responsive Aspect Box) | loading="lazy" | og:image, twitter:image, JSON-LD Article | **OK** |
| `bisp-dynamic-survey-documents.jpg` | Article: `/bisp-dynamic-survey-token-required-documents-guide/` (BISP Dynamic Survey Ke Liye Kon Se Documents Chahiye: Tehsil Desk Timing Aur Token System Guide (2026)) | "BISP beneficiary female presenting CNIC and documents at Tehsil office dynamic survey registration desk" | fill (Responsive Aspect Box) | loading="lazy" | og:image, twitter:image, JSON-LD Article | **OVER 200 KB (817.94 KB)** |
| `bisp-dynamic-survey-token-required-documents-guide.jpg` | Unused | "N/A" | fill (Responsive Aspect Box) | loading="lazy" | No | **UNUSED, OVER 200 KB (817.94 KB), WEAK/MISSING ALT** |
| `bisp-helpline-complaint.jpg` | Article: `/bisp-helpline-number-complaint-kaise-darj-karein/` (BISP Helpline Number Complaint Kaise Darj Karein: 0800-26477, Agent Katauti & Biometric Fix) | "Official BISP 0800-26477 helpline and grievance redressal guide for agent katauti and biometric complaints" | fill (Responsive Aspect Box) | loading="lazy" | og:image, twitter:image, JSON-LD Article | **OVER 200 KB (285.54 KB)** |
| `bisp-login.jpg` | Article: `/bisp-login-username-password/` (No Username, No Password: The Truth About Logging Into the BISP 8171 Portal) | "Featured graphic for No Username, No Password: logging into the BISP 8171 portal with CNIC and OTP" | fill (Responsive Aspect Box) | loading="lazy" | og:image, twitter:image, JSON-LD Article | **OK** |
| `bisp-office-rawalpindi.jpg` | Article: `/bisp-office-rawalpindi-addresses-guide/` (BISP Office Rawalpindi Addresses and Contact Number: Tehsil Directory, Dynamic Survey Desks & Helpline (2026)) | "BISP Divisional Office and Dynamic Registration Center in Rawalpindi Pakistan showing civic registration facilities" | fill (Responsive Aspect Box) | loading="lazy" | og:image, twitter:image, JSON-LD Article | **OK** |
| `bisp-online-registration-mistakes.jpg` | Unused | "N/A" | fill (Responsive Aspect Box) | loading="lazy" | No | **UNUSED, OVER 200 KB (858.1 KB), WEAK/MISSING ALT** |
| `bisp-registration-check-by-cnic.jpg` | Article: `/bisp-registration-check-by-cnic-kaise-karein/` (BISP Registration Check by CNIC Kaise Karein: 8171 Web Portal, SMS aur Dynamic Survey Guide) | "Pakistani woman holding CNIC card at government BISP registration facilitation desk" | fill (Responsive Aspect Box) | loading="lazy" | og:image, twitter:image, JSON-LD Article | **OVER 200 KB (319.89 KB)** |
| `bisp-registration.jpg` | Article: `/bisp-new-registration-form-online-apply-kaise-karein/` (BISP New Registration Form Online Apply Kaise Karein: NSER Dynamic Survey & Tehsil Desk Guide) | "A Pakistani woman filling out the BISP dynamic registration survey form at a Tehsil office desk" | fill (Responsive Aspect Box) | loading="lazy" | og:image, twitter:image, JSON-LD Article | **OVER 200 KB (817.94 KB)** |
| `bisp-taleemi-wazaif-70-attendance-rule-verification.jpg` | Article: `/bisp-taleemi-wazaif-70-attendance-rule-verification/` (BISP Taleemi Wazaif 70% Attendance Rule & Verification Procedure) | "School student presenting BISP Taleemi Wazaif attendance verification slip to school headmaster" | fill (Responsive Aspect Box) | loading="lazy" | og:image, twitter:image, JSON-LD Article | **OK** |
| `bisp-taleemi-wazaif-stipend-rates-2026.jpg` | Article: `/bisp-taleemi-wazaif-stipend-rates-2026/` (BISP Taleemi Wazaif Class-Wise Stipend Rates 2026) | "BISP Taleemi Wazaif Class-Wise Stipend Rates 2026" | fill (Responsive Aspect Box) | loading="lazy" | og:image, twitter:image, JSON-LD Article | **OK** |
| `bisp-tehsil-office-faisalabad.jpg` | Article: `/bisp-tehsil-office-faisalabad-addresses-guide/` (BISP Tehsil Office Faisalabad Directory: All City, Jaranwala & Samundri Dynamic Centers) | "BISP Tehsil Dynamic Registration Center in Faisalabad assisting women with NSER survey" | fill (Responsive Aspect Box) | loading="lazy" | og:image, twitter:image, JSON-LD Article | **OK** |
| `bisp-tehsil-office-karachi.jpg` | Article: `/bisp-tehsil-office-karachi-districts-guide/` (BISP Tehsil Office Karachi District List: Verified Centers Across All 7 Districts, Addresses & Helpline (2026)) | "BISP Tehsil Office and registration center in Karachi Pakistan showing beneficiaries across Karachi districts" | fill (Responsive Aspect Box) | loading="lazy" | og:image, twitter:image, JSON-LD Article | **OK** |
| `bisp-tehsil-office-lahore.jpg` | Article: `/bisp-tehsil-office-lahore-addresses-guide/` (BISP Tehsil Office Lahore List and Addresses: Verified Dynamic Survey Centers & Regional Directory (2026)) | "BISP Tehsil Office and Dynamic Registration Center in Lahore Pakistan showing civic service desks and beneficiaries" | fill (Responsive Aspect Box) | loading="lazy" | og:image, twitter:image, JSON-LD Article | **OK** |
| `bisp-tehsil-office-multan.jpg` | Article: `/bisp-tehsil-office-multan-addresses-guide/` (BISP Tehsil Office Multan & South Punjab Directory: City, Saddar & Shujabad Centers) | "Beneficiaries arriving at BISP Multan Saddar center near Bahadarpur Metro Bus Station" | fill (Responsive Aspect Box) | loading="lazy" | og:image, twitter:image, JSON-LD Article | **OK** |
| `bisp-tehsil-office-peshawar-kpk.jpg` | Article: `/bisp-tehsil-office-peshawar-kpk-districts-list-addresses/` (Verified BISP Tehsil Offices KPK & Peshawar List) | "Verified government BISP Tehsil Offices Peshawar KPK registration center directory list" | fill (Responsive Aspect Box) | loading="lazy" | og:image, twitter:image, JSON-LD Article | **OK** |
| `check-bisp-account-status.jpg` | Article: `/check-bisp-account-status/` (Is Your BISP Card Active? How to Check Your Account Status in Minutes); Article: `/bisp-card-check/` (BISP Card Check: Active, Blocked & Replacement Guide) | "Featured graphic for Is Your BISP Card Active? Check your account status in minutes; A BISP beneficiary checking whether their payment card is active at a bank ATM" | fill (Responsive Aspect Box) | loading="lazy" | og:image, twitter:image, JSON-LD Article | **REUSED (2 articles)** |
| `cm-balochistan-youth-skills-scheme-2026-online-apply.jpg` | Article: `/cm-balochistan-youth-skills-scheme-2026-online-apply/` (CM Balochistan Youth Skills Scheme 2026 Online Apply & Registration Guide) | "CM Balochistan Youth Skills Scheme 2026 Online Apply and Registration Guide" | fill (Responsive Aspect Box) | loading="lazy" | og:image, twitter:image, JSON-LD Article | **OK** |
| `cm-punjab-apni-chhat-apna-ghar-loan.jpg` | Article: `/cm-punjab-apni-chhat-apna-ghar-loan-installment-tracking/` (Apni Chhat Apna Ghar Loan: Instant Qist Tracking) | "Apni Chhat Apna Ghar Loan Installment Tracking PITB Portal Guide" | fill (Responsive Aspect Box) | loading="lazy" | og:image, twitter:image, JSON-LD Article | **OK** |
| `cm-punjab-dhee-rani-program.jpg` | Article: `/cm-punjab-dhee-rani-program-2026-online-apply/` (CM Punjab Dhee Rani Program 2026 Online Apply: CMP Portal Registration, Eligibility & Salami ATM Card) | "CM Punjab Dhee Rani collective marriage ceremony registration and social welfare facilitation desk" | fill (Responsive Aspect Box) | loading="lazy" | og:image, twitter:image, JSON-LD Article | **OVER 200 KB (261.93 KB)** |
| `cm-punjab-e-bike-scheme-updates.jpg` | Article: `/cm-punjab-e-bike-scheme-updates/` (CM Punjab E-Bike Scheme Updates 2026: Phase 2 Portal, Balloting Results & BOP Installment Plan) | "CM Punjab E-Bike Scheme Phase 2 electric scooty illustration showing the 100,000 e-bike quota and Rs 3,028 Bank of Punjab installment" | fill (Responsive Aspect Box) | loading="lazy" | og:image, twitter:image, JSON-LD Article | **OVER 200 KB (424.61 KB)** |
| `cm-punjab-e-bikes-scheme-phase-2.jpg` | Article: `/maryam-nawaz-electric-bike-scheme-2026/` (Maryam Nawaz Electric Bike Scheme 2026: Online Registration, Eligibility & Installment Plan); Article: `/cm-punjab-e-bikes-scheme-phase-2/` (CM Punjab E-Bikes Scheme Phase 2 2026: What Changed, Eligibility & How to Apply) | "Maryam Nawaz Electric Bike Scheme 2026 Registration Portal; CM Punjab E-Bikes Scheme Phase 2 2026 electric scooty banner showing the PKR 199,000 price, Rs 90,000 Punjab subsidy and October 4, 2026 last date" | fill (Responsive Aspect Box) | loading="lazy" | og:image, twitter:image, JSON-LD Article | **REUSED (2 articles)** |
| `cm-punjab-electric-bike-scheme.jpg` | Article: `/cm-punjab-electric-bike-scheme/` (CM Punjab Electric Bike Scheme 2026: Apply Online, Eligibility, Price & Installments) | "CM Punjab Electric Bike Scheme 2026 electric scooty illustration showing the PKR 199,000 price and Rs 90,000 Punjab subsidy" | fill (Responsive Aspect Box) | loading="lazy" | og:image, twitter:image, JSON-LD Article | **OVER 200 KB (346.88 KB)** |
| `cm-punjab-free-laptop-scheme.jpg` | Article: `/cm-punjab-free-laptop-scheme-2026-online-apply/` (CM Punjab Free Laptop Scheme 2026 Online Apply: Maryam Nawaz Portal, Eligibility & Merit List Guide) | "CM Punjab Free Laptop Scheme online apply portal guide" | fill (Responsive Aspect Box) | loading="lazy" | og:image, twitter:image, JSON-LD Article | **OK** |
| `cm-punjab-green-credit-program-2026.jpg` | Article: `/cm-punjab-green-credit-program-2026-online-apply/` (CM Punjab Green Credit Program 2026: Online Apply, Portal & Rewards Guide) | "CM Punjab Green Credit Program 2026 Online Apply Portal & Rewards Guide" | fill (Responsive Aspect Box) | loading="lazy" | og:image, twitter:image, JSON-LD Article | **OVER 200 KB (940.77 KB)** |
| `cm-punjab-green-tractor-scheme.jpg` | Article: `/cm-punjab-green-tractor-scheme-2026-online-apply/` (CM Punjab Green Tractor Scheme 2026 Online Apply: GTS Portal Registration, Eligibility & Balloting Results) | "Bright green agricultural tractor operating in a fertile rural Punjab farmland under government tractor subsidy scheme" | fill (Responsive Aspect Box) | loading="lazy" | og:image, twitter:image, JSON-LD Article | **OVER 200 KB (347.05 KB)** |
| `cm-punjab-honhaar-scholarship.jpg` | Article: `/cm-punjab-honhaar-scholarship-program-2026/` (CM Punjab Honhaar Merit Scholarship Program 2026: Online Apply, Eligibility & 100% Tuition Fee Guide) | "Pakistani university students walking on Punjab campus lawn under CM Punjab Honhaar Merit Scholarship Program" | fill (Responsive Aspect Box) | loading="lazy" | og:image, twitter:image, JSON-LD Article | **OVER 200 KB (918.12 KB)** |
| `cm-punjab-kisan-card.jpg` | Article: `/cm-punjab-kisan-card-online-apply-2026/` (CM Punjab Kisan Card Online Apply 2026: 8070 Registration, Eligibility & BOP Card Activation) | "Pakistani farmer holding official Chief Minister Punjab Kisan Card in an agricultural wheat field" | fill (Responsive Aspect Box) | loading="lazy" | og:image, twitter:image, JSON-LD Article | **OVER 200 KB (821.41 KB)** |
| `cm-punjab-livestock-card-scheme.jpg` | Article: `/cm-punjab-livestock-card-scheme-2026-online-apply/` (CM Punjab Livestock Card Scheme 2026 Online Apply: PLC Portal Registration, 8070 SMS & Eligibility) | "Pakistani cattle farmer with healthy young calves at rural Punjab livestock farm" | fill (Responsive Aspect Box) | loading="lazy" | og:image, twitter:image, JSON-LD Article | **NON-16:9 (640x430, ratio 1.49)** |
| `cm-punjab-rehmat-card-2026.jpg` | Unused | "N/A" | fill (Responsive Aspect Box) | loading="lazy" | No | **UNUSED, WEAK/MISSING ALT** |
| `cm-punjab-solar-panel-scheme.jpg` | Article: `/cm-punjab-solar-panel-scheme-2026-online-apply/` (CM Punjab Solar Panel Scheme 2026 Online Apply: Roshan Gharana Registration, 8800 SMS & Balloting List) | "Modern rooftop solar panel installation under Chief Minister Punjab Roshan Gharana energy relief scheme" | fill (Responsive Aspect Box) | loading="lazy" | og:image, twitter:image, JSON-LD Article | **OVER 200 KB (5739.47 KB), NON-16:9 (4096x3072, ratio 1.33)** |
| `cm-punjab-youth-games-2026.jpg` | Article: `/cm-punjab-youth-games-2026-online-registration/` (CM Punjab Youth Games 2026 – Online Registration, Eligibility, Sports & Cash Prizes Guide) | "CM Punjab Youth Games 2026 Online Registration Eligibility Sports and Prizes Guide" | fill (Responsive Aspect Box) | loading="lazy" | og:image, twitter:image, JSON-LD Article | **OVER 200 KB (837.84 KB)** |
| `e-bike-guide.jpg` | Unused | "N/A" | fill (Responsive Aspect Box) | loading="lazy" | No | **UNUSED, WEAK/MISSING ALT** |
| `ehsaas-kafalat-invalid-cnic-nser-update.jpg` | Article: `/ehsaas-kafalat-invalid-cnic-nser-update/` (Ehsaas Kafalat Survey Status: Invalid CNIC & Marriage NSER Update Guide) | "Ehsaas Kafalat Survey Status Invalid CNIC NSER Record Update" | fill (Responsive Aspect Box) | loading="lazy" | og:image, twitter:image, JSON-LD Article | **OVER 200 KB (817.94 KB)** |
| `ehsaas-loan-vs-saving-wallet.jpg` | Article: `/ehsaas-interest-free-loan-vs-saving-wallet/` (Ehsaas Interest-Free Loan vs. Saving Wallet: Which Fits Your Situation?) | "Ehsaas Interest-Free Loan vs Saving Wallet Comparison and Registration Guide" | fill (Responsive Aspect Box) | loading="lazy" | og:image, twitter:image, JSON-LD Article | **OK** |
| `ehsaas-payment-tracking.jpg` | Unused | "N/A" | fill (Responsive Aspect Box) | loading="lazy" | No | **UNUSED, OVER 200 KB (321.34 KB), WEAK/MISSING ALT** |
| `ehsaas-tracking-news.jpg` | Article: `/ehsaas-tracking-news/` (Ehsaas Tracking News 2026: The Real Changes to BISP 8171 (And What They Mean for You)) | "Featured graphic for Ehsaas Tracking News 2026: the real BISP 8171 changes explained" | fill (Responsive Aspect Box) | loading="lazy" | og:image, twitter:image, JSON-LD Article | **OK** |
| `ehsaas-undergraduate-scholarship.jpg` | Article: `/ehsaas-undergraduate-scholarship-online-apply/` (Ehsaas Undergraduate Scholarship 2026 Online Apply: HEC Portal Check, 100% Tuition Fee & Rs 4,000 Stipend Guide) | "Pakistani university undergraduate student checking HEC Ehsaas scholarship status on online portal" | fill (Responsive Aspect Box) | loading="lazy" | og:image, twitter:image, JSON-LD Article | **OVER 200 KB (928.89 KB)** |
| `fake-8171-sms-check-complaint-pta-bisp-lottery-fraud-alert.jpg` | Article: `/fake-8171-sms-check-complaint-pta-bisp-lottery-fraud-alert/` (Fake 8171 SMS Check, Complaint & BISP Lottery Fraud Alert Guide) | "Fake 8171 SMS Check, Complaint and BISP Lottery Fraud Alert Guide" | fill (Responsive Aspect Box) | loading="lazy" | og:image, twitter:image, JSON-LD Article | **OK** |
| `farmer-support.jpg` | Article: `/ehsaas-emergency-cash-program-guide/` (Ehsaas Emergency Cash Programme: Who Qualifies and How Disbursement Works); Article: `/ehsaas-rashan-program-guide/` (Ehsaas Rashan Programme: Ration Support Explained) | "A family checking an emergency cash disbursement notice on a phone; A family collecting a verified ration package at an official distribution point" | fill (Responsive Aspect Box) | loading="lazy" | og:image, twitter:image, JSON-LD Article | **REUSED (2 articles), OVER 200 KB (347.05 KB)** |
| `federal-contributory-pension-scheme.jpg` | Article: `/federal-contributory-pension-scheme/` (Federal Contributory Pension Scheme: FGDC Rules, Contributions & Benefits) | "Pakistan's Federal Contributory Pension Scheme (FGDC) 2024 - the defined-contribution retirement system for federal employees with a 10% employee and 12% government contribution split" | fill (Responsive Aspect Box) | loading="lazy" | og:image, twitter:image, JSON-LD Article | **OK** |
| `fuel-relief-scheme.jpg` | Article: `/fuel-scheme-rs-100-per-litre-petrol-relief-guide/` (Fuel Scheme Rs.100 Per Litre Petrol Relief and Registration Guide (2026)) | "A motorcyclist and small car driver displaying a fuel relief scheme SMS token at a petrol pump in Pakistan" | fill (Responsive Aspect Box) | loading="lazy" | og:image, twitter:image, JSON-LD Article | **OVER 200 KB (882.57 KB)** |
| `hero-support.jpg` | Homepage Hero (`src/app/page.tsx`); Default OG/Twitter Meta (`src/app/page.tsx`, `src/app/[slug]/page.tsx`); Article: `/benazir-kafaalat-payment-guide/` (Benazir Kafaalat Payment Guide: Verify, Collect, and Stay Safe); Article: `/cm-punjab-himmat-card-online-apply-2026/` (CM Punjab Himmat Card Online Apply 2026: DPMIS Registration, Eligibility & Rs 10,500 Stipend Guide) | "A Pakistani mother and daughter receiving public service guidance; A mother and daughter receiving guidance at a public service desk; Chief Minister Punjab Himmat Card ATM distribution and financial assistance desk for persons with disabilities" | 1600x1000 (Meta) / fill (Hero) | priority / fetchpriority="high" | og:image, twitter:image, JSON-LD Article | **REUSED (2 articles), OVER 200 KB (236.32 KB)** |
| `himmat-card-eligibility-check-guide.jpg` | Unused | "N/A" | fill (Responsive Aspect Box) | loading="lazy" | No | **UNUSED, WEAK/MISSING ALT** |
| `how-to-apply-cm-punjab-e-bike-scheme-2026.jpg` | Article: `/how-to-apply-cm-punjab-e-bike-scheme-2026/` (How To Apply CM Punjab E-Bike Scheme 2026 Registration Complete Process) | "How to Apply CM Punjab E-Bike Scheme 2026 Complete Online Registration Guide" | fill (Responsive Aspect Box) | loading="lazy" | og:image, twitter:image, JSON-LD Article | **OK** |
| `kisan-card-8070-pin-verification.jpg` | Article: `/kisan-card-8070-pin-verification-bop-activation/` (Kisan Card 8070 PIN Verification and BOP ATM Activation: Complete Step-by-Step Guide (2026)) | "Pakistani farmer verifying and activating CM Punjab Kisan Card at Bank of Punjab biometric ATM" | fill (Responsive Aspect Box) | loading="lazy" | og:image, twitter:image, JSON-LD Article | **OVER 200 KB (821.41 KB)** |
| `national-savings-profit-rates.jpg` | Unused | "N/A" | fill (Responsive Aspect Box) | loading="lazy" | No | **UNUSED, WEAK/MISSING ALT** |
| `national-savings-profit-rates.webp` | Article: `/national-savings-profit-rates/` (National Savings Profit Rates (Updated Oct 2026): Complete Profit Table, Tax Rates & Calculator) | "Official National Savings Profit Rates comparison chart and return rates table for Pakistan certificates" | fill (Responsive Aspect Box) | loading="lazy" | og:image, twitter:image, JSON-LD Article | **OK** |
| `nigehban-card-check-guide.jpg` | Unused | "N/A" | fill (Responsive Aspect Box) | loading="lazy" | No | **UNUSED, WEAK/MISSING ALT** |
| `pave-electric-bike-scheme.jpg` | Article: `/pave-scheme-2026-eligibility-electric-bike-subsidy-online-apply/` (PAVE Scheme 2026: Complete Guide to Eligibility, Electric Bike Subsidy & Online Apply) | "PAVE Scheme 2026 electric bike subsidy illustration with an electric scooty and online application smartphone" | fill (Responsive Aspect Box) | loading="lazy" | og:image, twitter:image, JSON-LD Article | **OK** |
| `pink-scooty-scheme-2026.jpg` | Article: `/pink-scooty-scheme-2026-registration-eligibility-documents-balloting/` (Pink Scooty Scheme 2026 – Registration, Eligibility, Documents & Balloting Guide) | "Pink Scooty Scheme 2026 pink electric scooty illustration for female students and working women in Punjab and Sindh" | fill (Responsive Aspect Box) | loading="lazy" | og:image, twitter:image, JSON-LD Article | **OK** |
| `pm-petrol-relief-scheme-updates.jpg` | Article: `/pm-petrol-relief-scheme-updates-2026/` (PM Petrol Relief Scheme Updates 2026: Latest Subsidy Rules, 9771 Token Status & Quotas) | "Official editorial banner showing PM Petrol Relief Scheme updates for 2026 with Rs 100 per litre subsidy and 9771 SMS token status" | fill (Responsive Aspect Box) | loading="lazy" | og:image, twitter:image, JSON-LD Article | **OK** |
| `pm-youth-loan-scheme.jpg` | Article: `/prime-minister-youth-loan-scheme-2026/` (Prime Minister Youth Loan Scheme 2026: Complete Application, Eligibility & Tiers Guide) | "Young Pakistani entrepreneurs in a modern office reviewing Prime Minister Youth Loan Scheme application details" | fill (Responsive Aspect Box) | loading="lazy" | og:image, twitter:image, JSON-LD Article | **OK** |
| `pmt-score-above-32-bisp-re-survey.jpg` | Article: `/pmt-score-above-32-bisp-re-survey-guide/` (PMT Score Above 32 BISP Re-Survey Guide: Official Procedure to Challenge Poverty Score and Re-Register (2026)) | "Pakistani beneficiary consulting enumerator at BISP Tehsil Dynamic Registry desk for PMT score re-survey" | fill (Responsive Aspect Box) | loading="lazy" | og:image, twitter:image, JSON-LD Article | **OVER 200 KB (817.94 KB)** |
| `punjab-land-record-check-guide.jpg` | Unused | "N/A" | fill (Responsive Aspect Box) | loading="lazy" | No | **UNUSED, WEAK/MISSING ALT** |
| `punjab-solar-tube-well-scheme.jpg` | Article: `/punjab-solar-tube-well-scheme-2026-online-apply/` (Punjab Solar Tube Well Scheme 2026 Online Apply: Eligibility, Subsidy Rates, Registration Portal & Balloting) | "Modern agricultural solar tube well system providing clean irrigation water to farmland in Punjab, Pakistan" | fill (Responsive Aspect Box) | loading="lazy" | og:image, twitter:image, JSON-LD Article | **OVER 200 KB (5739.47 KB), NON-16:9 (4096x3072, ratio 1.33)** |
| `registration-guide.jpg` | Homepage Trust Section (`src/app/page.tsx`); Article: `/check-bisp-eligibility-8171/` (How to Check BISP Eligibility Through the Official 8171 Portal) | "A Pakistani woman checking a registration guide safely; Pakistani woman reviewing a registration checklist on her phone" | fill (Responsive Aspect Box) | loading="lazy" | og:image, twitter:image, JSON-LD Article | **OVER 200 KB (261.93 KB)** |
| `scholarship-guide.jpg` | Article: `/ehsaas-registration-center-locator-guide/` (Ehsaas Registration Centers: How to Find and Prepare for Your Visit) | "A person looking up the nearest official registration center address online" | fill (Responsive Aspect Box) | loading="lazy" | og:image, twitter:image, JSON-LD Article | **OVER 200 KB (309.55 KB)** |
| `sehat-card-plus-kpk.jpg` | Article: `/sehat-sahulat-card-kpk-check-online-hospital-list/` (KPK Sehat Sahulat Card Check Online 2026: 8500 SMS, 10 Lakh Treatment Coverage & Empaneled Hospital List) | "Patient verifying KPK Sehat Card Plus eligibility at hospital State Life facilitation desk using CNIC" | fill (Responsive Aspect Box) | loading="lazy" | og:image, twitter:image, JSON-LD Article | **OVER 200 KB (236.32 KB), NON-16:9 (1600x1000, ratio 1.60)** |
| `sindh-hari-card-scheme.jpg` | Article: `/sindh-hari-card-scheme-2026-online-apply-eligibility/` (Sindh Hari Card Scheme 2026 Online Apply: Registration, Farmer Subsidies & Eligibility Guide) | "Sindh Hari Card farmer registration and subsidy guide" | fill (Responsive Aspect Box) | loading="lazy" | og:image, twitter:image, JSON-LD Article | **OK** |
| `taleemi-wazaif.jpg` | Article: `/benazir-taleemi-wazaif-check-online-by-cnic/` (Benazir Taleemi Wazaif Check Online by CNIC: 2026 Amounts, Registration & Status Guide); Article: `/benazir-taleemi-wazaif-form-download-tarika/` (Benazir Taleemi Wazaif Form Download Aur Jama Karne Ka Tarika: School Slip & Tehsil Verification) | "Pakistani school children receiving Benazir Taleemi Wazaif educational stipends and books; A school student holding the Benazir Taleemi Wazaif admission verification certificate slip in Pakistan" | fill (Responsive Aspect Box) | loading="lazy" | og:image, twitter:image, JSON-LD Article | **REUSED (2 articles), OVER 200 KB (928.89 KB)** |
| `transport-fuel-relief-options.jpg` | Article: `/transport-fuel-relief-options/` (Quick Comparison of Transport & Fuel Relief Options in Pakistan (2026)) | "Transport and fuel relief options 2026 comparison illustration with electric scooty, Rs 100 per litre petrol discount and fuel pump" | fill (Responsive Aspect Box) | loading="lazy" | og:image, twitter:image, JSON-LD Article | **OK** |
| `wazir-e-azam-apna-ghar-program.jpg` | Article: `/apna-ghar-social-welfare-guide/` (Apna Ghar & Social Welfare: Complete Guide to Shelter, Support & Housing Services); Article: `/wazir-e-azam-apna-ghar-program/` (Wazir-e-Azam Apna Ghar Program 2026: Loan, Eligibility & How to Apply) | "Apna Ghar and Social Welfare shelter and housing initiatives guide; Editorial banner for the Wazir-e-Azam Apna Ghar Program 2026 showing a newly built Pakistani home, the 5% markup and Rs 10 million loan terms" | fill (Responsive Aspect Box) | loading="lazy" | og:image, twitter:image, JSON-LD Article | **REUSED (2 articles)** |

---

## Summary of Key Audit Flags & Issues Identified

### 1. File Size Violations (> 200 KB) - 39 Images
The following images exceed 200 KB and require WebP/JPG compression optimization in Phase 2:
- `cm-punjab-solar-panel-scheme.jpg` (**5,739.47 KB**)
- `punjab-solar-tube-well-scheme.jpg` (**5,739.47 KB**)
- `cm-punjab-green-credit-program-2026.jpg` (**940.77 KB**)
- `apni-chhat-apna-ghar-scheme.jpg` (**989.51 KB**)
- `ehsaas-undergraduate-scholarship.jpg` (**928.89 KB**)
- `taleemi-wazaif.jpg` (**928.89 KB**)
- `cm-punjab-honhaar-scholarship.jpg` (**918.12 KB**)
- `fuel-relief-scheme.jpg` (**882.57 KB**)
- `bisp-online-registration-mistakes.jpg` (**858.10 KB**)
- `benazir-kafaalat.jpg` (**856.55 KB**)
- `cm-punjab-youth-games-2026.jpg` (**837.84 KB**)
- `benazir-kafaalat-case-paused.jpg` (**822.29 KB**)
- `cm-punjab-kisan-card.jpg` (**821.41 KB**)
- `kisan-card-8070-pin-verification.jpg` (**821.41 KB**)
- `bisp-and-ehsaas-difference.jpg` (**817.94 KB**)
- `bisp-dynamic-survey-documents.jpg` (**817.94 KB**)
- `bisp-dynamic-survey-token-required-documents-guide.jpg` (**817.94 KB**)
- `bisp-registration.jpg` (**817.94 KB**)
- `ehsaas-kafalat-invalid-cnic-nser-update.jpg` (**817.94 KB**)
- `pmt-score-above-32-bisp-re-survey.jpg` (**817.94 KB**)
- `cm-punjab-electric-bike-scheme.jpg` (**346.88 KB**)
- `cm-punjab-green-tractor-scheme.jpg` (**347.05 KB**)
- `farmer-support.jpg` (**347.05 KB**)
- `cm-punjab-e-bike-scheme-updates.jpg` (**424.61 KB**)
- `bisp-8171-balance-check-online.jpg` (**321.34 KB**)
- `bisp-atm-se-paise-nikalwane-ka-tarika.jpg` (**321.34 KB**)
- `bisp-atm-withdrawal.jpg` (**321.34 KB**)
- `ehsaas-payment-tracking.jpg` (**321.34 KB**)
- `bisp-cnic-status-check.jpg` (**319.89 KB**)
- `bisp-registration-check-by-cnic.jpg` (**319.89 KB**)
- `8171-number-verification.jpg` (**312.23 KB**)
- `scholarship-guide.jpg` (**309.55 KB**)
- `bisp-agent-deduction-complaint.jpg` (**285.54 KB**)
- `bisp-helpline-complaint.jpg` (**285.54 KB**)
- `registration-guide.jpg` (**261.93 KB**)
- `cm-punjab-dhee-rani-program.jpg` (**261.93 KB**)
- `8171-portal-troubleshooting.jpg` (**257.66 KB**)
- `hero-support.jpg` (**236.32 KB**)
- `sehat-card-plus-kpk.jpg` (**236.32 KB**)

### 2. Unused Images (11 Files)
The following 11 images exist in `public/images/` but are not referenced anywhere in `src/data/content.ts` or pages:
1. `bisp-atm-se-paise-nikalwane-ka-tarika.jpg` (Duplicate of `bisp-atm-withdrawal.jpg`)
2. `bisp-cnic-status-check.jpg` (Duplicate of `bisp-registration-check-by-cnic.jpg`)
3. `bisp-dynamic-survey-token-required-documents-guide.jpg` (Duplicate of `bisp-dynamic-survey-documents.jpg`)
4. `bisp-online-registration-mistakes.jpg`
5. `cm-punjab-rehmat-card-2026.jpg`
6. `e-bike-guide.jpg`
7. `ehsaas-payment-tracking.jpg`
8. `himmat-card-eligibility-check-guide.jpg`
9. `national-savings-profit-rates.jpg` (Superseded by `national-savings-profit-rates.webp`)
10. `nigehban-card-check-guide.jpg`
11. `punjab-land-record-check-guide.jpg`

### 3. Reused / Duplicate Images Across Articles (10 Images)
Violates AGENTS.md Section 1 ("No Generic Placeholders: Never reuse unrelated or generic placeholder images for new scheme guides"):
1. `8171-number-verification.jpg` (Used by 2 articles)
2. `8171-register.jpg` (Used by 2 articles)
3. `benazir-form.jpg` (Used by 2 articles)
4. `bisp-8171-balance-check-online.jpg` (Used by 2 articles)
5. `check-bisp-account-status.jpg` (Used by 2 articles)
6. `cm-punjab-e-bikes-scheme-phase-2.jpg` (Used by 2 articles)
7. `farmer-support.jpg` (Used by 2 articles)
8. `hero-support.jpg` (Used on Homepage Hero AND Himmat Card article)
9. `taleemi-wazaif.jpg` (Used by 2 articles)
10. `wazir-e-azam-apna-ghar-program.jpg` (Used by 2 articles)

### 4. Non-16:9 Aspect Ratio Featured Images (4 Files)
Article featured images must be strictly **16:9** (e.g., 1280x720 or 1600x900) per AGENTS.md:
1. `cm-punjab-livestock-card-scheme.jpg` (640x430, aspect ratio 1.49)
2. `cm-punjab-solar-panel-scheme.jpg` (4096x3072, aspect ratio 1.33 / 4:3)
3. `punjab-solar-tube-well-scheme.jpg` (4096x3072, aspect ratio 1.33 / 4:3)
4. `sehat-card-plus-kpk.jpg` (1600x1000, aspect ratio 1.6 / 16:10)

---
*End of Image Audit Report.*
