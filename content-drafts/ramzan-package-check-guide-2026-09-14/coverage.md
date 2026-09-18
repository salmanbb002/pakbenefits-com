# Coverage / QA scorecard — "ramzan package check" draft

## Entity coverage

**Tier 1 (7 entities) — 7/7 covered (100%), each with a stated attribute/relationship:**

| Entity | Attribute/relationship stated in body? |
|---|---|
| Prime Minister's Ramzan Relief Package (PMRRP) | Yes — administered by NITB, checked via portal/9999 (H1, direct-answer block, H2 "What Is...") |
| National Information Technology Board (NITB) | Yes — federal agency, formed 2014, autonomous under 2022 Act, role limited to verification not eligibility decisions |
| Benazir Income Support Programme (BISP) | Yes — administratively separate, own 8171 code, own Rs 13,500 quarterly Kafaalat figure (distinguished explicitly) |
| CNIC | Yes — required for both check methods, 13-digit format specified |
| SMS short code 9999 | Yes — corroborated by majority of sources + official portal naming pattern |
| SMS short code 8171 | Yes — identified as BISP's own code, not confirmed as PMRRP's |
| NSER | Yes — source of eligibility data, distinguished from PSER (provincial variant) |

**Tier 2 (9 items) — 9/9 covered (100%):** Rs 13,000, Rs 10,000, PMT score, NADRA (via CNIC/NSER context), SMS code 8070, PSER, KPK Ramzan Package, rejection reasons, payment distribution channels — all appear at least once, each with the qualifying language the research required (e.g. amounts marked "third-party reported, not officially confirmed on-page").

**Tier 3 — used where natural:** Easypaisa, JazzCash, CAPTCHA, OTP. **Tier 3 deliberately withheld:** Nigehban Relief's claimed "= 9999" mapping (contradicts the piece's own primary framing — logged as an open discrepancy, not resolved as fact) and Ehsaas Rashan Subsidy/8123 (named only for disambiguation, not expanded, since it is a distinct program with its own scope).

## Heading architecture check

- Exactly one H1: ✅ ("Ramzan Package Check: Is It 8171, 9999, or a Different Number?")
- No skipped levels: ✅ — every H3 sits under an H2 (checked: "Prime Minister's Package vs a Province's Own Package" under "What Is the Ramzan Package…"; "Which Number Is This, Really?" under "Is It Checked Through…"; "SMS Method"/"Online Portal Method" under "How Do I Check…"; "Reasons People Get Rejected" under "Who Is Eligible…")
- Every H2/H3 targets a distinct phrase/question — no two headings compete for the same query: ✅
- Heading list read alone conveys the page's logic: ✅ (what it is → which number is real → how to check → what the result means → who qualifies → how much/how paid → why the confusion exists → how to avoid fraud → current status → FAQ)
- H2 count (9 body H2s + FAQ) vs. fan-out/PAA set (7 fan-out queries + 4 competitor FAQ blocks): all fan-out topics are addressed either in a body H2 or the FAQ — see Question coverage below.

## Answer-block check

- Direct-answer block: 50 words, standalone claim, does not restate the H1, does not open with "In this article." ✅
- Matches Step 1 SERP format: results leaned paragraph-style "what is X" answers; block is paragraph-format. ✅
- QUORA order (answer → value → proof → takeaway) spot-checked on 3 sections:
  - "How Much Does It Pay…": answer-first (reported figures) → value (channel breakdown) → proof (distinguishes BISP's Rs 13,500 quarterly figure) → held. ✅
  - "Is It Checked Through 8171, 9999…": answer-first → value (disambiguation table) → proof (portal domain naming) → held. ✅
  - "How Do I Avoid a Fake…": answer-first (domain instability finding) → value (concrete guidance) → held. ✅

## Competitor-heading matrix

| Recurring competitor H2 theme | Covered? |
|---|---|
| What is the [X] Ramzan Package? | Yes — "What Is the Ramzan Package, and Who Runs It?" |
| How to check via SMS | Yes — "SMS Method" |
| How to check via portal | Yes — "Online Portal Method" |
| Eligibility criteria | Yes — "Who Is Eligible for the Ramzan Package?" |
| Payment amount | Yes — "How Much Does It Pay, and How Is It Sent?" |
| Payment distribution method | Yes — folded into the amount section |
| Rejection reasons | Yes — dedicated H3 |
| Safety / avoid fraud | Yes — dedicated H2, extended with the domain-instability finding no competitor included |
| Program-code table (8171/8070/9999/8123) | Yes — expanded into the "Which Number Is This, Really?" disambiguation table, cross-checked against the official portal rather than taken at face value |
| "Benefits/limitations" listicle framing | Intentionally skipped — reads as filler in the competitor source, not a genuine user question |
| Provincial variant (KPK, PSER) | Yes — "Prime Minister's Package vs a Province's Own Package" |

## Question coverage

All 7 fan-out queries and all sourced competitor-FAQ questions are mapped to either a body section or the FAQ (see `research-notes.md` FAQ source map). None left unanswered.

Two genuine gaps found in research were **not** answered by any competitor and are covered only in this draft: (1) "Is the Ramzan Package the same as BISP's 8171 service?" and (2) "Is the Ramzan Package still open in September 2026?" — both now FAQ entries.

## Fact cross-check

| Fact in draft | Source in research-notes.md |
|---|---|
| NITB formed 2014, autonomous under 2022 Act | Step 2, Wikipedia/search result |
| pmrrp.nitb.gov.pk uses CNIC + CAPTCHA web form | Step 2, direct WebFetch of official portal |
| SMS code 9999 | Step 1/4, corroborated across 3 of 4 competitors + official domain naming |
| SMS code 8171 = BISP's own | Step 5, Competitor 1 (hilalmarketing) table + established site knowledge (BISP's own /8171/ page) |
| Rs 13,000 / Rs 10,000 figures | Step 5, Competitors 2 and 4 — explicitly flagged in-draft as "third-party reported, not officially confirmed on-page" |
| BISP's Rs 13,500 quarterly Kafaalat figure | Step 5, Competitor 1 table — cross-referenced against pakbenefits.com's own `/benazir-kafaalat-payment-guide/` |
| Ramadan 2026 dates (19 Feb – 21 Mar) | Step 2, dated fact check via web search of calendar sources |
| daisnews.com.pk redirect to y2mate.com.pk; other domains DNS-dead/403/404 | Step 1, directly observed during this session's own fetch attempts |
| PSER = Punjab Socio-Economic Registry | Step 5, Competitor 2 |
| KPK Ramzan Package as provincial variant | Step 5, Competitor 2 + fan-out |

**No unsourced numbers, dates, or proper names remain in the draft.**

## Intent check

Primary intent is mixed *do* (check status) + *know* (which number is real) + safety. The draft leads with disambiguation (the dominant confusion in the SERP) before the procedural how-to, then closes the loop with fraud-avoidance and current-status framing — matches what a search of "ramzan package check" is actually trying to resolve, not just the mechanical steps.

## Readability

Estimated grade level: ~8 (Flesch-Kincaid-equivalent). Short paragraphs (max 2 per subsection held), plain English, no jargon left unexplained (CAPTCHA, OTP, PMT score, NSER, PSER all defined on first use).

## E-E-A-T flags for manual input

1. **Author byline** — `schema.jsonld` has a TODO; pick between the site's existing `contributors.saadHassan` / `contributors.ayeshaMalik` (matching the pattern used across `content.ts`) rather than inventing a new name.
2. **datePublished/dateModified** — currently TODO placeholders; set to the actual publish date once this draft is approved and merged into `content.ts`.
3. **Payment amounts (Rs 13,000 / Rs 10,000)** — these are third-party reported, not confirmed on the official portal excerpt this session could fetch. A human should verify against the live pmrrp.nitb.gov.pk portal (or an official notification) before treating the figures as settled, especially since the next cycle isn't open yet.
4. **The 8171/9999/8070/8123 disambiguation table** — built from cross-referencing 4 independent (non-official) sources against one official-portal fetch. This is the piece's core value-add but also its highest-risk claim; a human familiar with the current program should sanity-check it before publish, particularly the 8070 and 8123 rows which rest on a single source each.
5. **First-person framing avoided** — this draft does not claim lived experience; all "we/this guide" language is scaffolding describing the research process, not a personal anecdote. No changes needed there, but flagging per the pipeline's standing rule.
6. **YMYL disclaimer** — matches the site's existing pattern (verify before relying on it, don't pay anyone, don't share OTP) rather than a generic legal disclaimer; consistent with how `/avoid-bisp-fraud/` and `/farmer-support-card-guide/` are written.

## Fetch-failure disclosure (for transparency, not a flag to fix)

5 of 9 candidate competitor domains failed during Step 4 (DNS dead ×2, 403 ×1, 404 ×1, hijacked-redirect ×1) and were substituted per the pipeline's rule — documented in full in `research-notes.md` Step 1. This is itself now part of the draft's fraud-awareness section, not just a research footnote.
