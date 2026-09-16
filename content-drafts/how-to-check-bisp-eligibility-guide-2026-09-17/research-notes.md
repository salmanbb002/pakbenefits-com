# Research notes — "how to check bisp eligibility"

## Step 1 — Intent + SERP
Dominant intent: **do** (procedural — "how to check"). Secondary: know-simple (what a result means).
SERP features seen: FAQ blocks on every competitor, one comparison-style table (benazirprogram.com), no featured snippet format visible in the fetched text, no video/local pack.
Query fan-out: "bisp eligibility check by cnic", "bisp eligibility check online and sms", "bisp 8171 eligibility check", "bisp survey required meaning", "bisp eligibility check without internet".

## Step 2 — Head entities (non-competitor)
- **BISP** (Benazir Income Support Programme) — federal unconditional cash-transfer programme, Pakistan. sameAs: https://en.wikipedia.org/wiki/Benazir_Income_Support_Programme
- **NADRA** (National Database & Registration Authority) — issues CNIC. sameAs: https://en.wikipedia.org/wiki/National_Database_and_Registration_Authority
- **CNIC** — Computerized National Identity Card. sameAs: https://en.wikipedia.org/wiki/Computerized_National_Identity_Card
- **8171** — BISP's status-check short code / web portal (8171.bisp.gov.pk). Unlinked entity, no dedicated Wikipedia page.
- **NSER / PMT score** — National Socio-Economic Registry survey and the Proxy Means Test score it produces. Unlinked entity.

## Step 3 — Title/metadata
- Title: "How to Check BISP Eligibility: Portal, SMS & Office (2026)"
- H1: "How to Check BISP Eligibility Online, by SMS, or In Person"
- Meta description leads with the three methods + CNIC.
- Slug: `how-to-check-bisp-eligibility-guide`

## Step 4 — Competitor fetch (top 4, distinct domains)
1. wisemarket.com.pk — "BISP 8171 Eligibility Check: Complete Guide to Check Your Status in 2026" (published Aug 28, 2026). H2s: What is BISP 8171 / Key Eligibility Requirements / How to Check (SMS, portal, Tehsil office) / What's New in 2026 / Who's Eligible for Ehsaas / How to Register / Troubleshooting / FAQs. 7 FAQs.
2. pakistankibaat.pk — "BISP 8171 Eligibility Check – CNIC Verification via SMS & Online Portal". H2s: What Is 8171 and How Eligibility Works / Eligibility Criteria / How to Check (3 methods) / Payment & Stipend Status / Common Problems / Documents Required / Helpline / 8171 vs Other Programs. 4 FAQs.
3. benazirprogram.com — "Benazir Income Support Program Payment Check — Complete Guide (2026)" (published Aug 8, 2026, updated Jan 22, 2026). Has an actual FAQ **table**. H2s cover payment check more than eligibility, but shares the two-method (portal/SMS) structure and a "difference between eligibility check & payment check" section — useful info-gain angle (none of the eligibility-focused competitors draw this distinction clearly).
4. cmpunjabportal.pk — "BISP 8171 Online Eligibility Check: Verify Your Status Effortlessly" (published Jul 2, 2026). H2s: Official Portal / How to Check Online / Understanding Program Statuses / Re-Survey 2026 Updates / Common Problems (has a problem/solution table) / Real-Life Example / Avoiding Scams / Program Background / FAQs / Conclusion.

**Fetch failures (substituted honestly, not fabricated):** hamariweb.com/finance/info/bisp-8171-eligibility-check/ → HTTP 403. bolo-pk.info article → DNS resolution failure (ENOTFOUND). Both dropped in favor of the next-ranking distinct domains above.

## Step 5/6 — Entity ledger + tiers

| canonical | type | kind | competitor_count | in_title_or_h2 | tier |
|---|---|---|---|---|---|
| BISP | Org | entity | 4 | yes | 1 |
| 8171 (web portal / SMS short code) | Product | entity | 4 | yes | 1 |
| CNIC | Concept/Product | entity | 4 | yes | 1 |
| NADRA | Org | entity | 2 | no | 2 |
| NSER / PMT score | Metric/Process | term | 3 | yes | 1 |
| BISP Tehsil office | Place/Org | entity | 3 | yes | 2 |
| SMS method | Process | term | 4 | yes | 1 |
| Survey required / no record status | Concept | term | 3 | no | 2 |
| Kafaalat quarterly stipend | Money | term | 2 | no | 3 |
| Helpline | Concept | term | 2 | yes | 3 |
| Re-survey / Dynamic Registry | Process | term | 2 | yes | 3 |
| Ehsaas (brand) | Org | entity | 2 | no | 3 |

Relationships:
- BISP —operates→ 8171 web portal and 8171 SMS short code
- NADRA —issues→ CNIC (input to the 8171 check)
- 8171 check —queries→ NSER record / PMT score, not a separate database
- BISP Tehsil office —resolves→ "no record" and "survey required" responses that SMS/portal can't fix themselves
- PMT score —does not appear→ directly in the 8171 response; only a status message does

Dedupe log: dropped "Ehsaas Emergency Cash" and "Taleemi Wazaif" as out-of-scope sister-programme mentions from pakistankibaat.pk — this article's macro context is the eligibility *check*, not other programmes. Parked "Rs. 13,500 quarterly stipend" as tier-3 — mentioned once for context, not the article's subject (payment-check is a separate existing site article).

## Step 7 — Information gain
All 4 competitors describe the three check methods but **none map the specific response messages** (Eligible / Not Eligible / Survey Required / No Record Found / Under Review) to a plain-English meaning and next action in one place — readers are left to guess what a given screen means. This piece adds that as a table. It also adds a portal-vs-SMS-vs-office comparison table (speed, needs, best for) — benazirprogram.com gestures at method differences but doesn't tabulate them.

## Step 8 — Heading map

| Level | Heading | Owns | User question | Tier-1/2 carried |
|---|---|---|---|---|
| H1 | How to Check BISP Eligibility Online, by SMS, or In Person | focus kw | How do I check BISP eligibility? | BISP, 8171, CNIC |
| H2 | Check BISP Eligibility Online at the 8171 Portal | "check bisp eligibility online" | portal steps | 8171, CNIC, NADRA |
| H2 | Check BISP Eligibility by SMS to 8171 | "bisp eligibility sms 8171" | no-internet method | 8171, SMS |
| H2 | Check BISP Eligibility In Person at a Tehsil Office | Tehsil office | office method | BISP Tehsil office |
| H2 | What Each 8171 Result Message Means | info-gain #1 | what does X mean | NSER/PMT, survey required |
| H2 | Portal vs. SMS vs. Office: Which Should You Use? | info-gain #2 | which method | all 3 methods |
| H2 | Common Problems When Checking Eligibility | troubleshooting | not working | CNIC, NADRA |
| H2 | Who Actually Qualifies (and Where to Read the Full Criteria) | "eligibility criteria" cross-link | who qualifies | links out, doesn't re-explain |
| H2 | Avoiding Fake BISP Eligibility Checkers | YMYL safety | is it safe | 8171, NADRA |
| H2 | Frequently Asked Questions | FAQ | — | — |

Direct-answer block (55 words): states the three methods and that they all query the same NSER/PMT record.

## Step 8e — Internal links / cannibalisation
**Known overlap, flagged per instruction, proceeding anyway (user-accepted risk):** `check-bisp-eligibility-8171` already covers the 8171-portal check in a privacy-first walkthrough, and its own `lsiKeywords` already lists "how to check bisp eligibility" verbatim. This new article differentiates by covering **all three official methods** (that sibling is portal-only), adding the result-message interpretation table and the method-comparison table, and treating the office/SMS routes with equal depth — real information the sibling doesn't carry. Still, both pages will compete for some of the same query space; recommend eventually either merging or having `check-bisp-eligibility-8171` deep-link into this piece's comparison table instead of repeating the portal steps.

Internal links out: `/bisp-eligibility-criteria-guide/` (who qualifies — new sibling from the other fork), `/check-bisp-eligibility-8171/` (detailed portal walkthrough), `/nser-pmt-score-check-guide/` (PMT score detail), `/how-to-register-bisp-online-guide/` (no NSER record yet).

## Step 12 — QA / coverage summary
- Tier-1 coverage: 100% (BISP, 8171, CNIC, NSER/PMT, SMS method) — each with a stated attribute/relationship.
- Tier-2 coverage: 100% (NADRA, Tehsil office, survey-required/no-record status).
- Heading architecture: 1 H1, no skipped levels, every H2 owns a distinct query — no two H2s target the same phrase.
- Answer-block: 52 words, doesn't restate H1, matches paragraph-snippet format.
- Fact cross-check: PMT cutoff/quarterly-stipend figures deliberately **not restated** here (owned by the sibling criteria article and the existing payment-check article) to avoid duplicated, driftable numbers across three pages.
- E-E-A-T flags: see final report to user.
