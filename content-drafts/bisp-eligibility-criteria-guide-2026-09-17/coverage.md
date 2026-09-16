# Coverage / QA Report — BISP Eligibility Criteria

## Word count
~1,150 words body + ~450 words FAQ ≈ 1,600 words total.

## Tier coverage

**Tier 1 (must carry ≥1 attribute/relationship, all covered):**
- BISP — covered as the deciding body, its board's specific meeting/date, and its process.
- PMT score — covered with scale (0-100), cutoff value (32/37), and calculation basis.
- NSER — covered as the survey mechanism that produces the PMT score, and where it's conducted.
- CNIC — covered in the ineligibility-trigger and scam-avoidance sections.

**Tier 2 (should cover, all covered):** Benazir Kafaalat (the specific benefit these criteria
gate), BISP Board (named with its 52nd-meeting/23-Sept-2021 decision), BISP Tehsil office /
Benazir Registration Center (survey location + follow-up point), income tax filer status (with
the 2026 softening caveat), differently-abled exception (37 cutoff).

**Tier 3:** transgender exception — covered, correctly narrow (PMT waived post-NADRA validation).
8171 web portal — named only to hand off to the sibling article, not re-explained; this is
deliberate per the dedupe log, not an oversight. NADRA — used once, narrowly, for the transgender
identity-validation step.

No tier-1/2 concept was missed on this pass.

## Heading-architecture check
- Exactly one H1, front-loading the focus keyword ("BISP Eligibility Criteria").
- H2s phrased as sub-topics/questions; every heading sits at H2 (no H3 needed — the topic doesn't
  require narrower sub-nesting), so no skipped-level risk.
- No two H2s compete for the same phrase — each owns a distinct keyword per the Step 8 map.
- Direct-answer block: 43 words, standalone claim, doesn't restate the H1 verbatim, no "In this
  article" framing.
- QUORA order held per section: e.g. "The PMT Score Cutoff" opens with the flat 32/100 fact
  (answer), explains the board decision and exceptions (value), cites the 23-Sept-2021 board
  meeting (proof), and closes on the no-official-income-limit takeaway (action/clarification).
- Order follows the logical spine: mechanism → core cutoff number → disqualifiers → exceptions →
  how-to-check (deliberately short, links out) → what-to-do-if-ineligible → safety/scam caveat →
  FAQ last.

## Competitor-heading matrix
| Recurring competitor angle | Covered? |
|---|---|
| PMT score / cutoff explanation | Yes — with sourced board-meeting date competitors didn't cite |
| Income threshold framing | Yes — explicitly corrected: no official rupee limit exists |
| Automatic disqualifiers list | Yes — explicitly labeled as commonly-reported, not confirmed |
| Filer 2026 policy change | Yes |
| Appeal / reassessment process | Yes, tied to this site's existing Tehsil-office guidance instead of inventing a formal "appeal form" competitors imply exists |
| Disability/transgender exceptions | Yes — sourced from the official BISP page directly |

## Question coverage
All Step 10 FAQ-source-map questions (11 total, exceeds the 10-minimum) are answered in the FAQ;
the PMT-cutoff, disqualifier, and exception questions are also answered in the body ahead of the
FAQ, consistent with "FAQ adds new ground" only where the FAQ phrasing narrows or restates for
extractability — no FAQ entry is the *only* place a fact appears.

## Fact cross-check
- PMT cutoff 32, BISP Board 52nd meeting, 23 September 2021, 37 cutoff for differently-abled,
  transgender PMT waiver post-NADRA validation — **sourced directly from bisp.gov.pk** (official,
  fetched this run). Confidently stated as fact.
- Rs. 8,500 quarterly figure seen on the same official page — **not used**; this site's own
  established, more recent figure (Rs. 13,500/quarter since Jan 2025) is used instead where
  payment amount is mentioned, consistent with `bisp-8171-payment-balance-check-guide` and other
  existing site articles. Flagging this discrepancy for a human: the official page's own stated
  amount may simply be stale, but it's worth a human spot-check next time someone reviews this
  guide.
- Grade-17+ exclusion, income-tax-filer exclusion, luxury-vehicle/land exclusion, 2026 filer
  policy softening (~Rs. 50,000/month figure), expired-CNIC / rescored-above-32 ineligibility
  triggers — **all third-party / SEO-competitor sourced only**, not confirmed against an official
  BISP page in this run. Phrased in the draft itself as "commonly reported" rather than fact, per
  this site's own established caution pattern. **Flag for human review**: if a more authoritative
  source (an official BISP eligibility/exclusion notification) surfaces, tighten this section's
  hedged language accordingly.

## Intent check
Delivers the "who qualifies" know-intent directly, with a secondary do-intent handoff (link to
the 8171 how-to-check article) rather than duplicating that procedure.

## Readability
Estimated grade 7-8. Sentences are short-to-medium; a few disqualifier-list sentences run longer
but are broken into a bulleted list to keep them scannable.

## E-E-A-T flags for manual input
- **Author bio**: `contributors.saadHassan` / `contributors.ayeshaMalik` reused from the existing
  site roster — no new credentials invented, consistent with the rest of the site.
- **No first-person "as an expert" lines were added** — this piece is fact/mechanism-driven and
  didn't need the QUORA framework's optional first-person touch.
- **YMYL disclaimer**: the draft repeatedly frames uncertain claims as "commonly reported" /
  "not confirmed on an official page" rather than stating them as fact — this *is* the disclaimer
  mechanism for this piece; no separate boilerplate disclaimer block was added, matching sibling
  articles' style (they don't use a distinct disclaimer box either).
- **Flag**: the disqualifier list (Grade 17+, filer status, asset ownership) and the appeal
  process description are not independently verified against an official BISP source this run —
  a human should verify against BISP's official complaint/appeal channel or Right-of-Access
  notification if one exists, and tighten the hedged language if so.
- **Flag**: `check-bisp-eligibility-8171`'s own `lsiKeywords` field already lists both target
  keywords for this new article verbatim ("eligibility criteria for bisp", "how to check bisp
  eligibility") despite its body not covering the criteria intent — recommend a human trim those
  two strings from that sibling article's metadata now that this article exists, to stop two
  pages nominally targeting the same phrase.
- `schema.jsonld` has three `TODO:` placeholders (author sameAs, publisher logo, canonical
  mainEntityOfPage URL) — fill and run through the Rich Results Test before deploying.
