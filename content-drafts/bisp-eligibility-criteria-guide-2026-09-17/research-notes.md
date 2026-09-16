# Research Notes — "eligibility criteria for bisp"

## Step 1 — Intent + SERP

- Dominant intent: **know** (who qualifies), secondary **do** (how do I check my own case).
- SERP is dominated by low-authority Pakistani SEO-farm domains (techjuice.pk guide, alfalahw.org,
  nphp.pk, adpportal.com.pk / adps.com.pk / adp.com.pk — near-identical mirror sites, bisp8171check.com,
  bispwallat.com, pmrrp.net.pk, gtss.org.pk, cmp-punjab.pk, sesss.org.pk, ehsaasprogram.org.pk,
  meragharscheme.pk) plus Wikipedia and the official bisp.gov.pk detail page. No featured snippet
  format could be confirmed from the search tool's synthesis; treat as a paragraph-style answer
  target.
- Query fan-out (from search results + existing site's own PAA-style questions): "who qualifies
  for bisp", "bisp income limit", "bisp pmt score cutoff", "bisp disqualification reasons",
  "bisp eligibility criteria 2026", "can a filer get bisp", "bisp appeal ineligible".

## Step 2 — Head-entity research (official source, not competitor)

Fetched **bisp.gov.pk** directly (Benazir Income Support Programme detail page):
- **PMT (Proxy Means Test)** — 0–100 welfare-status scale from the NSER household survey.
- **PMT cutoff = 32**, approved by the **BISP Board** at its **52nd meeting, 23 September 2021**,
  based on "available fiscal space."
- **Differently-abled household exception**: cutoff relaxed to **37**.
- **Transgender applicants**: PMT restriction waived entirely once survey + NADRA validation
  succeed.
- Page also stated a Rs. 8,500 quarterly figure — **not used**: it conflicts with this site's own
  verified, more recent figure (Rs. 13,500/quarter from Jan 2025 — see
  `bisp-8171-payment-balance-check-guide`, `benazir-kafaalat-payment-guide`, and others). Kept the
  site-consistent Rs. 13,500 figure and did not restate the payment amount as this article's own
  claim beyond a passing mention with a link to the payment guide — the official page's own figure
  looks stale rather than this site's being wrong.
- No official income threshold is published — BISP's own language frames eligibility as PMT-based,
  not a stated rupee income cutoff. This matches the site's existing `nser-pmt-score-check-guide`,
  which already deliberately avoids inventing a cutoff number the site can't cite — this draft
  follows the same restraint for anything beyond the sourced 32/37 figures.

Entity type: BISP = Organization/GovernmentProgram, unlinked sameAs beyond bisp.gov.pk itself
(no distinct Wikidata ID pulled this run — treat as unlinked entity, don't guess one).

## Step 4 — Competitor signal (synthesized via search, one direct fetch)

Competitor claims (from WebSearch synthesis across the SEO-farm cluster above, corroborated
in wording across at least 3 of them):
- Automatic disqualifiers commonly repeated: government employee at **Grade 17 or above**,
  registered **income tax filer**, ownership of **luxury vehicles / multiple motorcycles**,
  **large property or agricultural land**.
- **2026 policy softening** reported: filers who are genuinely poor (household income roughly
  Rs. 50,000/month or below, per the commonly repeated figure) are being reassessed and restored
  rather than permanently excluded for filer status alone.
- A **right-to-appeal** process is described for households marked ineligible.
- Common ineligibility triggers named: expired CNIC, or an updated NSER survey pushing the PMT
  score back above 32.

**None of this disqualifier/appeal detail was independently verified against an official BISP
page in this run** — it is a cross-site-repeated claim from non-government domains only. Flagged
in `coverage.md` as third-party-reported, phrased that way in the draft itself (matches this
site's own established caution pattern, e.g. `ramzan-package-check-guide`'s "third-party reported
rather than officially confirmed" framing).

## Step 5/6 — Entity ledger + tiers

| canonical | type | aliases | sameAs | kind | competitor_count | in_title_or_h2 | tier |
|---|---|---|---|---|---|---|---|
| BISP (Benazir Income Support Programme) | Organization | Benazir Income Support Programme | https://www.bisp.gov.pk/ | entity | 4 | true | 1 |
| PMT score | Metric | Proxy Means Test, PMT | — | entity | 4 | true | 1 |
| NSER | Product | National Socio-Economic Registry | — | entity | 3 | false | 1 |
| CNIC | Concept | Computerized National Identity Card | — | entity | 3 | false | 1 |
| Benazir Kafaalat | Product | Kafaalat | — | entity | 2 | false | 2 |
| BISP Board | Organization | — | — | entity | 1 (official source) | false | 2 |
| Tehsil Office / Benazir Registration Center | Place | BISP Tehsil Office | — | entity | 2 | false | 2 |
| income tax filer status | Concept | "Filer" | — | term | 3 | false | 2 |
| differently-abled exception | Concept | disability exception | — | term | 2 | false | 2 |
| transgender exception | Concept | — | — | term | 2 | false | 3 |
| 8171 web portal | Product | — | — | entity | 2 | false | 3 (deliberately kept thin — owned by sibling article) |
| NADRA | Organization | — | https://www.nadra.gov.pk/ | entity | 2 | false | 3 |

**Relationships:**
- BISP —selects beneficiaries via→ PMT score from the NSER survey
- PMT score —measured on a scale of→ 0–100
- BISP Board —approved cutoff of→ 32 (52nd meeting, 23 Sept 2021)
- Households with a differently-abled member —cutoff relaxed to→ 37
- Transgender applicants —PMT requirement waived after→ NADRA identity validation
- NSER survey —conducted at→ Benazir Registration Centers / BISP Tehsil Offices
- Income-tax-filer status —commonly reported as→ a disqualifying factor, with a 2026 reassessment
  carve-out for genuinely low-income filers
- Grade-17+ government employment / luxury vehicle or large landholding —commonly reported as→
  automatic disqualifiers
- An expired CNIC or an updated survey score above 32 —commonly reported trigger for→
  ineligibility status
- 8171 portal check —is the mechanism to→ see your own current status (owned in depth by
  `check-bisp-eligibility-8171`, not duplicated here)

**Dedupe log:** "how to check bisp eligibility" (the sibling keyword) is deliberately **not**
re-covered step-by-step here — `check-bisp-eligibility-8171` already owns that procedural intent.
This article links to it once, in its own short section, rather than re-explaining the portal
walkthrough. Payment amount (Rs. 13,500) is mentioned once with a link out, not re-explained —
`bisp-8171-payment-balance-check-guide` owns that intent.

## Step 7 — Information-gain element

What competitors omit: none of the SEO-farm pages cited the **actual BISP Board meeting number
and date** (52nd meeting, 23 September 2021) behind the PMT cutoff — they state "32" as a bare
fact with no provenance. This draft is the only one (of the sources checked) that sources the
cutoff to the specific board decision, and explicitly separates **sourced fact** (32/37 cutoff,
official) from **commonly repeated but unverified** claims (disqualifier list, appeal process) —
committing to a **dated "what's confirmed vs. commonly reported" distinction** as the
information-gain element, consistent with this site's existing YMYL caution pattern.

## Step 8 — Heading + keyword + question map

| Level | Heading | Keyword owned | Question answered | Tier-1/2 carried |
|---|---|---|---|---|
| H1 | BISP Eligibility Criteria: Who Actually Qualifies for Benazir Kafaalat | eligibility criteria for bisp | What are BISP's eligibility criteria? | BISP, PMT score |
| — | Direct-answer block | — | one-shot answer | BISP, PMT score, NSER |
| H2 | How BISP Actually Decides Who Qualifies | who qualifies for bisp | How does BISP decide eligibility? | BISP, NSER, PMT score |
| H2 | The PMT Score Cutoff: 32 (and When It Becomes 37) | bisp pmt score cutoff | What's the actual score cutoff? | PMT score, BISP Board |
| H2 | What Commonly Makes a Household Ineligible | bisp disqualification reasons | What disqualifies a household? | income tax filer, Kafaalat |
| H2 | Exceptions for Disability and Transgender Applicants | — | Are there relaxed rules? | differently-abled exception, transgender exception |
| H2 | How to Check Whether You Meet These Criteria | how to check bisp eligibility | How do I check my own case? | 8171 web portal (linked out) |
| H2 | Marked Ineligible? What to Do Next | bisp appeal ineligible | What if I don't qualify / was rejected? | Tehsil Office, CNIC |
| H2 | Avoid Eligibility Scams | — | How do I avoid being misled? | CNIC, BISP |
| H2 | Frequently Asked Questions | — | (10 FAQs, see below) | — |

## Step 8e — Internal-link plan / cannibalisation check

- `check-bisp-eligibility-8171` → **flagged cannibalisation risk**: its own `lsiKeywords` array
  already lists both "eligibility criteria for bisp" and "how to check bisp eligibility" verbatim,
  even though its body only covers portal mechanics, not who-qualifies criteria. Resolution used
  here (per explicit instruction to proceed with two separate posts): this new article owns the
  *criteria* intent exclusively, links to the 8171 article once for the *how-to-check* step, and
  does not re-explain portal navigation. Recommend a human later trim those two LSI strings out of
  `check-bisp-eligibility-8171`'s metadata so it stops nominally targeting a query it doesn't
  answer.
- `nser-pmt-score-check-guide` → link for "what is a PMT score" mechanics / correction process.
- `/bisp-registration/` pillar and `documents-for-bisp-registration` → link for the registration
  step that precedes an eligibility question.
- `bisp-8171-payment-balance-check-guide` → link for the Rs. 13,500 payment figure instead of
  restating it.
- `avoid-bisp-fraud` → link from the scam-avoidance section.

## Step 10 — FAQ source map

1. "What is the BISP eligibility criteria?" — direct restatement target (fan-out).
2. "What is a good PMT score for BISP?" — fan-out / calendar's own flagged future-angle question,
   answered directly here instead of left open.
3. "Can a government employee get BISP?" — competitor disqualifier claim.
4. "Can an income tax filer receive BISP?" — competitor claim + 2026 policy softening.
5. "Does owning a car or land disqualify a household?" — competitor claim.
6. "Is there an income limit for BISP?" — direct answer: no published rupee limit, PMT-based.
7. "What happens if my PMT score is above 32?" — outcome/ineligibility path.
8. "Is the PMT cutoff the same for everyone?" — differently-abled/transgender exception.
9. "How do I know if my household meets the criteria?" — links to the 8171 how-to article.
10. "What if I think I was wrongly marked ineligible?" — appeal/reassessment path.
11. "Does the PMT score ever change?" — dynamic-registry framing (matches
    `nser-pmt-score-check-guide`'s existing language).

All grounded in facts already established in the body; none invent a new statistic.
