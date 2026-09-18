# Content Calendar — Month 1 (17 Aug – 11 Sep 2026)

Source: `keyword-clusters.csv` (201 unique keywords / 13 clusters). This plan does **not** re-target keywords the 17 existing pillar guides already cover — it fills the gaps: troubleshooting, comparison, "mistakes to avoid," and definition-style queries that a single pillar page can't fully absorb, plus a first pilot into the Roman Urdu layer flagged in the original audit.

## Cadence

3 posts/week (Mon/Wed/Fri), 12 posts for the month. Reasoning: the site went from 8 to 17 articles in one push last week — publishing 12 more in 4 weeks keeps momentum without outrunning editorial capacity (2 named reviewers) or triggering a thin-content pattern Google associates with new domains that spike volume. Each post gets the full existing template: named author + reviewer byline, FAQ schema where applicable, BreadcrumbList/Article JSON-LD, and 2–3 related-article links back into its cluster.

## Week 1 — 8171 Portal & CNIC Check (largest cluster, 49 keywords)

| Date | Title | Primary keyword(s) targeted | Intent | Target page | Status |
|---|---|---|---|---|---|
| Mon Aug 17 | 8171 Web Portal Not Working? What to Check Before You Assume It's Down | "8171 web portal", "8171 check online 2026" | Troubleshooting | /8171/ | ✅ Published (`/8171-web-portal-not-working/`) |
| Wed Aug 19 | 8171, 786, and Ehsaas Tracking: Which Number Should You Actually Use? | "786 web portal", "ehsaas tracking pass gov pk", "5771/7181 check online" (typo variants) | Clarification | /8171/ | ✅ Published (`/8171-786-ehsaas-tracking-official-number/`) |
| Fri Aug 21 | How to Check Your BISP Status by CNIC Online (2026 Method) | "ehsaas program cnic check online", "bisp registration check by cnic", "online cnic verification" | Informational | /8171/ | ✅ Published (`/check-bisp-status-by-cnic-online/`) |

## Week 2 — BISP Registration & Ehsaas Brand (39 + 23 keywords)

| Date | Title | Primary keyword(s) targeted | Intent | Target page | Status |
|---|---|---|---|---|---|
| Mon Aug 24 | BISP Eligibility Criteria in 2026: Who Qualifies and Who Doesn't | "eligibility criteria for bisp", "how to check bisp eligibility" | Informational | /bisp-registration/ | ✅ Published (`/bisp-eligibility-criteria-guide/`) |
| Wed Aug 26 | BISP and Ehsaas: How the Two Names Relate | "ehsaas program", "benazir income support program" (brand-confusion queries) | Informational | /bisp-registration/ or /ehsaas-programs/ | ⚠️ Editorial Hold (requires official framing check) |
| Fri Aug 28 | 7 Mistakes That Delay a BISP Online Registration | "how to apply bisp online", "bisp online registration check by cnic", "bisp dynamic registration process" | Informational | /bisp-registration/ | ✅ Published (`/bisp-online-registration-mistakes/`) |

**Editorial flag on Aug 26's post**: the BISP↔Ehsaas naming relationship has real political/administrative history (rebranding under different governments). Do not publish this one on the standard "write from the existing pillar" pattern — it needs an editor to verify the current official framing on bisp.gov.pk before anything about "why the name changed" goes live. Everything else in this calendar is safe to draft directly from verified program mechanics already established in the pillar guides.

## Week 3 — PMT Score / NSER + Kafaalat (23 + 17 keywords)

| Date | Title | Primary keyword(s) targeted | Intent | Target page |
|---|---|---|---|---|
| Mon Aug 31 | What Counts as a "Good" PMT Score for BISP? | "pmt score", "what is pmt score", "bisp pmt score" | Informational | /nser-pmt-score/ |
| Wed Sep 2 | NSER Survey Not Found in the System? Here's What It Means | "nser check online", "nser survey online registration check" | Troubleshooting | /nser-pmt-score/ |
| Fri Sep 4 | Why Was My Benazir Kafaalat Case Paused? 6 Common Reasons | "ehsaas kafalat program check cnic", "how to check ehsaas kafalat program money online" | Troubleshooting | /benazir-kafaalat/ |

## Week 4 — Payment / Loans troubleshooting + Roman Urdu pilot

| Date | Title | Primary keyword(s) targeted | Intent | Target page |
|---|---|---|---|---|
| Mon Sep 7 | BISP Payment Shows "Approved" But No Cash Received — What to Check | "bisp payment check", "ehsaas program balance check" | Troubleshooting | /payment-check/ |
| Wed Sep 9 | Ehsaas Interest-Free Loan vs. Saving Wallet: Which Fits Your Situation? | "ehsaas program loan", "ehsaas saving wallets" | Comparison | /ehsaas-programs/ |
| Fri Sep 11 | 8171 Check Online Kaise Karein — Roman Urdu Guide (pilot) | "احساس کفالت پروگرام 8171" + Roman Urdu variant of "8171 check online" | Informational | /8171/ |

Sep 11's post is the first entry in the Urdu/Roman Urdu layer flagged in the original audit as the single biggest untapped lever. Treat it as a pilot: measure its Search Console impressions/CTR for 3–4 weeks before committing to a full Urdu content track in Month 2.

## Deliberately excluded from Month 1

- Individual year-variant pages ("8171 check online 2022," "...2023," "...2025") — these are the same intent as "2026," and building separate pages per year is a doorway-page pattern, not topical authority. The existing pillar pages should be kept current instead (already true — sitemap `lastModified` now reflects real edit dates).
- City-specific Ehsaas registration-center pages (Lahore, Rawalpindi, Karachi) — holding until real, verifiable center addresses/contact details are sourced; publishing unverified addresses for a YMYL topic is a trust risk, not just an SEO one.
- Remaining Rashan/loan/registration-center long-tail keywords — already served adequately by the existing pillar guides' on-page coverage; revisit only if Search Console shows specific unranked queries after Month 1.

## Process checklist per post

1. Draft from verified facts already established in the site's own pillar guides or official sources (bisp.gov.pk, 8171.bisp.gov.pk) — no new unverified claims.
2. Byline: alternate Saad Hassan / Ayesha Malik as author, the other as reviewer, consistent with the existing E-E-A-T model. Consider adding a third named contributor before Month 2 so two people aren't credited on every single piece of content on the site.
3. Add to `categorySlugs` for its target category **and** `news` so it surfaces in the freshness feed.
4. Include 2–3 `officialLinks` and let the existing related-articles module pick up cross-links automatically via shared `categorySlugs`.
5. Add `faqs[]` where the post answers 2+ distinct questions — feeds FAQPage schema automatically via the existing template.
