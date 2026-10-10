# pakbenefits.com — SEO Changelog & Audit Trail

All structural changes, consolidations, 301 redirects, snippet overhauls, and content updates are logged here with timestamps and before/after verification.

---

## [2026-10-10] — Phase 1: Comprehensive Live GSC Audit & Diagnostic
- **Action:** Connected to live Google Search Console API via Service Account (`gsc-reader@molten-shield-510917-a1.iam.gserviceaccount.com`).
- **Scope:** Extracted and analyzed 28-day (Sep 10 – Oct 7, 2026) and 90-day (Jul 10 – Oct 7, 2026) performance datasets across 93 active pages and 491 ranking queries.
- **Key Baseline Metrics:**
  - 28-day Total Site Impressions: ~10,500 across indexed pages (averaging ~350–400 daily in GSC query logs, with peaks up to 600)
  - 28-day Total Clicks: 154 clicks (~1.46% sitewide CTR)
  - Sitewide Average Position: 8.5 to 14.2 across core clusters.
- **Status:** Baseline recorded. Paused new daily automated blog generation pending consolidation.

---

## [2026-10-10] — Phase 2: Cluster 1 Consolidation (BISP Biometric Verification)
- **Target Cluster:** BISP Biometric Verification Failure
- **Master URL:** `/bisp-biometric-verification-failed/` (Position 5.5, 173 impressions)
- **Consolidated / Retired URL:** `/bisp-biometric-verification-failed-fingerprint-solution/` (Position 5.7, 71 impressions)
- **Changes Executed:**
  1. **Content Merge & Strict Fact Verification:**
     - Merged verified **BISP Biometric Verification Exemption & Troubleshooting Matrix** table into Section 6 of the Master.
     - Merged verified **5-Step NADRA Non-Match Certificate & Tehsil Office Workflow** into Master.
     - Merged **Official Complaint Procedure for Retailer Misconduct & Illegal Deductions** (toll-free helpline 0800-26477) into Master.
     - Added LSI search query variants: `"bisp fingerprint matching problem"`, `"bisp biometrics fail hone par kya karein"`, `"bisp biometric fingerprint solution"`.
  2. **Verified Official Government Data Standards Applied:**
     - **Current Quarterly Kafaalat Stipend:** Enhanced to **Rs. 14,500** across the Master and throughout relevant site articles (Source: BISP Official Notification `https://www.bisp.gov.pk/SiteImage/Misc/files/20%281%29.pdf`).
     - **Banking Infrastructure:** Replaced regional bank monopoly claims with verified official terminology: *"BISP authorized partner banks and designated disbursement touchpoints (biometric ATMs, campsite counters, and digital wallet accounts)"*.
     - **Sanitized Unverified Details:** Purged unverified timelines ("3-7 days", "2-5 days"), informal soap/water jargon ("hydration conditioning"), arbitrary deduction numbers ("Rs 500 to Rs 1,000"), committee names, and helpline operating hours.
     - **Official Helpline:** Standardized strictly to official toll-free `0800-26477`.
  3. **Removed Duplicate Route:**
     - Removed clone article object from `src/data/content.ts` (167 lines removed). Excluded from `/sitemap.xml` and Next.js static export.
  4. **Internal Links Updated:**
     - Updated `relatedSlugs` in `bisp-deceased-beneficiary-payment-transfer-procedure`.
     - Updated `relatedSlugs` and inline contextual link in `bisp-payment-method`.
  5. **301 Permanent Redirects Configured (`vercel.json`):**
     - `/bisp-biometric-verification-failed-fingerprint-solution` -> `/bisp-biometric-verification-failed/` (301)
     - `/bisp-biometric-verification-failed-fingerprint-solution/` -> `/bisp-biometric-verification-failed/` (301)
     - Zero redirect chains (direct single-hop 301 to canonical trailing-slash URL).
  6. **Build Verification:**
     - `npm run build` executed successfully (161 static pages generated). Verified that `<table caption="BISP Biometric Verification Exemption & Troubleshooting Matrix">` renders cleanly in `out/bisp-biometric-verification-failed/index.html`.
- **Scheduled Performance Re-checks in GSC:**
  - **2-Week Re-check Date:** October 24, 2026 (Verify that clone drops and master consolidates impressions to break into Top 3).
  - **4-Week Re-check Date:** November 7, 2026 (Verify combined click growth).

---

## [2026-10-10] — Phase 2: Cluster 2 Consolidation (Punjab E-Bikes Keyword Cannibalization)
- **Target Cluster:** Punjab E-Bikes Scheme / Electric Two-Wheeler Welfare Initiatives
- **Master URL:** `/cm-punjab-electric-bike-scheme/` (`CM Punjab Electric Bike Scheme 2026: Apply Online, Eligibility, Price & Installments`)
- **Consolidated / Retired URLs (7 Pages):**
  1. `/how-to-apply-cm-punjab-e-bike-scheme-2026/`
  2. `/cm-punjab-e-bikes-scheme-phase-2/`
  3. `/cm-punjab-e-bike-scheme-updates/`
  4. `/maryam-nawaz-electric-bike-scheme-2026/`
  5. `/electric-bike-scheme-expansions/`
  6. `/cm-and-pm-electric-bike-schemes/`
  7. `/provincial-bike-transport-schemes/`
  8. Alias: `/punjab-e-bike-scheme-apply-online/`
- **Changes Executed:**
  1. **Comprehensive Master Pillar Consolidation:**
     - Merged Phase 2 updates (100,000 electric bikes quota across all 36 Punjab districts, Rs. 90,000 non-repayable capital subsidy, zero down payment waiver).
     - Merged Bank of Punjab (BOP) 0% markup financing plan: Rs. 3,028/month fixed micro-installments over 36 months, SBP debt burden ratio (DBR <= 40%), and guarantor requirements.
     - Added full comparative tables:
       - *CM Punjab Electric Bike Scheme Financing Terms vs Commercial EV Financing*
       - *Electric Scooty vs Petrol Motorcycle Monthly Cost & Savings Comparison* (Rs. 13,000+ monthly savings)
       - *Official CM Punjab Electric Scooty Technical Specifications* (72V 30Ah LiFePO4 battery, 1,000W BLDC motor, 50-55 km/h, 75-85 km range)
       - *Common Portal Application Errors & Verified Technical Fixes*
       - *National and Provincial Electric Bike Schemes Comparison Matrix 2026* (CM Punjab vs Federal PAVE vs Sindh Pink Scooty)
     - Merged comprehensive eligibility rules: regular HEC university/college students, 50% reserved female quota (Pink Scooties), school teachers (PTF portal), and BPS 1-16 government employees.
     - Standardized driving license rules: DLIMS motorcycle driving license / learner permit (minimum age 16 for learner/juvenile permit, 18 for full license).
     - Standardized 10 high-intent FAQs with direct standalone answers matching schema.
  2. **Removed Redundant Routes from Repository:**
     - Removed all 7 redundant article objects from `src/data/content.ts` (1,000+ duplicate lines removed).
     - Cleaned `relatedSlugs` and internal href links across all articles so they point directly to the Master URL `/cm-punjab-electric-bike-scheme/`.
  3. **301 Permanent Redirects Configured (`vercel.json`):**
     - Configured 16 permanent 301 redirect rules (both with and without trailing slash) in `vercel.json` transferring 100% link equity to `/cm-punjab-electric-bike-scheme/`.
     - Zero redirect chains (direct single-hop 301).
  4. **CLI Automation & Cannibalization Prevention Guard:**
     - Implemented `scripts/check-duplicate-topics.mjs` to block future collision on consolidated topics (Punjab E-Bikes, BISP Biometric Verification, BISP Balance Check).
     - Integrated guard into `scripts/publish_article.cjs` and `package.json` (`npm run check:cannibalization` and `npm run seo:qa`).
  5. **Verification:**
     - Validated zero retired slugs in `content.ts`.
     - `check-duplicate-topics.mjs` passed with 0 violations.
- **Scheduled Performance Re-checks in GSC:**
  - **2-Week Re-check Date:** October 24, 2026 (Verify cannibalized positions 18-45 consolidate toward Page 1).
  - **4-Week Re-check Date:** November 7, 2026 (Verify impressions concentration and CTR acceleration on Master URL).
