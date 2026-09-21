# Keyword-to-Blog Assignment — Full Coverage Audit

Source: `keyword-clusters.csv` (201 keywords / 20 sub-topic buckets). Cross-referenced against every published article's `slug`, `title`, and `categorySlugs` in `src/data/content.ts` (24 articles + 8 pillar category pages, as of 21 Aug 2026).

**Method:** one blog per *sub-topic cluster*, not per literal keyword — publishing a separate page for "8171 check online 2023," "...2025," "...2026" etc. is a doorway-page pattern your own Month 1 plan already rejected. Each bucket below is marked covered if an existing page already targets its intent; a real gap only exists where no page addresses the *distinct* question a keyword bucket represents.

## Result: 18 of 20 buckets (≈197 of 201 keywords) already have a home. 2 real gaps remain.

| # | Cluster — Sub-topic | Keywords | Status | Owning content |
|---|---|---|---|---|
| 1 | 8171 Portal & CNIC Check — 8171 Tracking | 4 | ✅ Covered | `ehsaas-tracking-check-payment-status`, `ehsaas-tracking-news`, `8171-786-ehsaas-tracking-official-number` |
| 2 | 8171 Portal & CNIC Check — Web Portal Status Check | 38 | ✅ Covered | `8171-web-portal-not-working`, `check-bisp-status-by-cnic-online`, `check-bisp-eligibility-8171`, `8171-register`, `/8171/` pillar. Year-variant keywords (2022/2023/2025/2026) deliberately **not** split into separate pages — pillar page is kept current instead |
| 3 | 8171 Portal & CNIC Check — CNIC-Based Status Check | 6 | ✅ Covered | `check-bisp-status-by-cnic-online` |
| 4 | 8171 Portal & CNIC Check — Portal Login | 1 | ✅ Covered | `bisp-login-username-password` |
| 5 | BISP Registration — Eligibility Criteria | 2 | ✅ Covered | `bisp-eligibility-criteria-guide` (who qualifies / cutoff), `how-to-check-bisp-eligibility-guide` |
| 6 | BISP Registration — General BISP/Benazir Programme | 11 | ✅ Covered | `benazir-form`, `check-bisp-account-status`, `/bisp-registration/` pillar |
| 7 | BISP Registration — Registration/Application Process | 26 | ✅ Covered | `bisp-online-registration-mistakes`, `how-to-register-bisp-online-guide`, `documents-for-bisp-registration`, `/bisp-registration/` pillar. Note: "fc online registration slip," "ihsas program kpk online registration," "nphp online registration" are off-topic/mis-scraped stray queries — not worth dedicated content, low relevance to this site |
| 8 | Benazir Kafaalat — Registration & CNIC Check | 17 | ✅ Covered | `benazir-kafaalat-registration-cnic-check-guide`, `benazir-kafaalat-payment-guide` |
| 9 | Brand/Navigational — Official Website Lookup | 4 | ✅ Covered (by design) | Served via `officialLinks` on existing pages, not a standalone post — these are pure navigational queries ("bisp website," "ehsaas program website"); a dedicated blog would be thin content |
| 10 | Ehsaas Emergency Cash Programme | 10 | ✅ Covered | `ehsaas-emergency-cash-program-guide` |
| 11 | Ehsaas Loans & Saving Wallets | 7 | ✅ Covered | `ehsaas-interest-free-loan-saving-wallets-guide` |
| 12 | Ehsaas Programme (Brand) — General | 23 | ✅ Covered | `ehsaas-tracking-news`, `/ehsaas-programs/` pillar, homepage. Pure brand queries — intentionally not split into per-keyword posts |
| 13 | Ehsaas Rashan/Ration | 7 | ✅ Covered | `ehsaas-rashan-program-guide` |
| 14 | Ehsaas Registration Centers | 9 | ✅ Covered | `ehsaas-registration-center-locator-guide`. City-specific pages (Lahore/Rawalpindi) deliberately held pending verified addresses — YMYL trust decision already made, not an oversight |
| 15 | PMT Score & NSER — NSER Registration | 14 | ✅ Covered | `nser-pmt-score-check-guide` |
| 16 | PMT Score & NSER — PMT Score Check | 9 | ✅ Covered | `nser-pmt-score-check-guide` |
| 17 | Payment & Balance — BISP Card Status | 3 | ✅ Covered | `check-bisp-account-status`, `bisp-8171-payment-balance-check-guide` |
| 18 | Payment & Balance — Payment Status/Balance & Biometrics | 9 | ✅ Covered | `bisp-biometric-verification-failed`, `bisp-payment-approved-but-no-cash-received`, `bisp-8171-payment-balance-check-guide`, `/payment-check/` pillar |
| 19 | Provincial Schemes — Punjab Rozgar | 5 | ✅ Covered | `punjab-rozgar-scheme-guide` |
| 20 | **Urdu/Roman Urdu Layer** | 3+ | ✅ Covered & Active | `8171-check-online-kaise-karein` (pilot) + `bisp-registration-check-by-cnic-kaise-karein` (full dynamic survey & status guide) |

## Bonus depth angles already identified in `content-calendar-month-1.md` (Weeks 2–4) but not yet drafted

These don't close keyword *gaps* (their target keywords are already served above) — they add topical depth/troubleshooting angles the calendar reasoned would strengthen authority:

- "BISP and Ehsaas: How the Two Names Relate" — **editorial hold**, needs a human to verify the current official BISP↔Ehsaas rebranding framing before drafting (flagged in the calendar, not something to draft unverified)
- "7 Mistakes That Delay a BISP Online Registration" — ✅ Published on 18 Sep 2026 (`/bisp-online-registration-mistakes/`)
- "What Counts as a 'Good' PMT Score for BISP?" — ✅ Published on 19 Sep 2026 (`/what-counts-as-a-good-pmt-score/`)
- "NSER Survey Not Found in the System? Here's What It Means" — ✅ Published on 19 Sep 2026 (`/nser-survey-not-found/`)
- "Why Was My Benazir Kafaalat Case Paused? 6 Common Reasons"
- "BISP Payment Shows 'Approved' But No Cash Received" — ✅ Published on 19 Sep 2026 (`/bisp-payment-approved-but-no-cash-received/`)
- "BISP Biometric Verification Failed: Complete Step-by-Step Fix" — ✅ Published on 19 Sep 2026 (`/bisp-biometric-verification-failed/`)
- "Ehsaas Interest-Free Loan vs. Saving Wallet: Which Fits Your Situation?"

## Recommendation

The primary keyword gap for **BISP Eligibility Criteria (who qualifies)** has been closed by `bisp-eligibility-criteria-guide`, and the high-intent troubleshooting angle **"7 Mistakes That Delay a BISP Online Registration"** has been published (`/bisp-online-registration-mistakes/`). Everything else is either live, intentionally excluded (doorway pages, unverified addresses, off-topic stray queries), or held pending strategic decisions (Urdu launch timing, BISP↔Ehsaas political-history verification).
