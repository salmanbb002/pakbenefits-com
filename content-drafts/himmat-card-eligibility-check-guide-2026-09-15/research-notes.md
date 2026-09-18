# Research Notes — Himmat Card Eligibility & Status Check

Primary keyword: **Himmat Card eligibility check** (covers "check Himmat Card status by CNIC")
Site: PakBenefits.com | Date: 2026-09-15

## Step 1 — Intent + SERP

Dominant intent: **do** (procedural CNIC check) with a strong secondary **know** (eligibility
criteria). No dedicated Himmat Card article exists yet on PakBenefits.com — only a passing
mention on the `punjab-schemes` category page, which currently links out to the raw
`dpmis.punjab.gov.pk/faqs` URL instead of an internal guide.

SERP features observed via WebSearch: a synthesized "how to check" answer box, PAA-style
questions (eligibility, PMT score, balance check, phase/registration), no visible table/video
pack in the text results returned.

Query fan-out captured from repeated search snippets: "himmat card check online 2026", "himmat
card registration", "himmat card balance check by cnic", "himmat card phase 3", "himmat card
eligibility criteria", "himmat card 8171", "swd.punjab.gov.pk himmat card", "himmat card helpline".

## Step 2 — Head-entity research (official, non-competitor)

Two official Government of Punjab sources fetched directly:

- **`dpmis.punjab.gov.pk/faqs`** — Himmat Card is "a government initiative providing quarterly
  stipend of Rs. 10,500," aimed at PWDs assessed "Not Fit to Work." Administered by Punjab's
  Social Welfare Department; Punjab-CNIC-only. Eligibility: certified PWD, "Not Fit to Work,"
  unemployed (govt/private), PMT ≤ 45, not receiving BISP/PSPA/Zakat aid. Docs: CNIC/B-Form,
  disability certificate, updated contact details. **Status/eligibility check happens at
  `dpmis.punjab.gov.pk/himmatcard-verification`** or via the Social Welfare Office — no mention
  of 8171 or any SMS short code anywhere on this page. Distribution: two batches, 40,000 then
  25,000. Helpline **1312**. Notable, date-sensitive line: the program was **"approved until
  June 2025" with potential extension pending government review** — i.e. the official FAQ text
  itself has not been refreshed to reflect continued 2026 operation, even though payments and a
  reported Phase 3 are still being discussed in the market. This is exactly the kind of stale
  official-page detail Step 7 asks us to flag rather than paper over.
- **`swd.punjab.gov.pk/himmatcard`** — Social Welfare Department's own page, corroborates PMT ≤
  45 and adds: the PMT score is "issued by BISP" (confirms the BISP → PMT score → Himmat Card
  eligibility relationship). Frames the Card as "a package of different services offered by
  Government to PWD's," with quarterly cash as the current offering and room for more services
  later. Explicitly states the page does **not** cover disability-assessment procedure,
  phase/batch numbers, or a dedicated helpline.

Core entities: **Himmat Card** (Product/Programme), **Punjab Social Welfare Department**
(Org, administrator), **DPMIS** (Product/System — Disabled Persons Management Information
System), **BISP** (Org — issues the PMT score used here), **PMT score** (Metric).

## Step 4 — Competitor fetches

Fetched successfully (3 of the intended 4 — see failures below):

1. **gopunjab.pk/himmat-card-check-online/** (published 15 Jun 2026, updated 19 Jun 2026) —
   clean 3-step DPMIS-portal CNIC check, status-meaning breakdown (approved/under
   review/not found), "check without internet" via 1312 or District Social Welfare Office,
   a safety section, and 5 verbatim FAQs. No mention of 8171. No mention of Phase 3 or PSPA.
2. **punjabprogram.com.pk/how-to-use-dpmis-portal-for-himmat-card/** (published 8 May 2026) —
   the most complete write-up of the **full registration/login flow** (create account with
   CNIC + password, medical-board selection, captcha), distinct from the no-login public
   verification check gopunjab.pk describes. Also covers common payment problems (expired
   CNIC, biometric failure, incomplete medical verification) and fixes. A quick-info table.
3. **peef.com.pk** ("Himmat Card Check Balance") — reports **Phase 3: 35,000 additional
   beneficiaries, distribution planned March 2026** (unconfirmed against an official source —
   neither `dpmis.punjab.gov.pk/faqs` nor `swd.punjab.gov.pk/himmatcard` mention Phase 3 by
   name or number). Also the only source naming **PSPA (Punjab Social Protection Authority)**
   and **Bank of Punjab ATM balance inquiry** as part of the balance-check picture, and gives a
   4-method balance-check list (ATM, PSPA portal, helpline, Social Welfare Office).

**Failed fetches (substituted / logged per pipeline rule, not fabricated):** adps.com.pk (403),
govtschemes.com.pk/cm-punjab-himmat-card/ (404), benazirkafaalat.pk (403), cmpunjabscheme.pk
(DNS failure), zebialerts.com (TLS handshake error), meragharmeraashiana.org.pk (DNS failure),
tesco.org.pk/himmat-card-program-for-pwds/ (404), arl.org.pk (403). This is the same kind of
unstable SERP the `ramzan-package-check-guide` research already flagged for this content
space — several ranking pages for Punjab welfare-card queries do not reliably resolve. Only 3
competitor pages were fetchable in full; the fourth "competitor" slot is filled by the
WebSearch synthesis below instead of a fabricated fetch.

**WebSearch synthesis only (not a full fetch, used with caution):** a search for "Himmat Card 8171
Punjab disability card status check by CNIC" returned a snippet claiming "the most reliable ways
are through the 1312 Himmat Card helpline or the 8171 web portal... sending your CNIC to 8171 can
instantly check eligibility." **This directly contradicts both official DPMIS/SWD pages**, which
name only the DPMIS verification page and 1312 — never 8171 (BISP's own number, for BISP
services). Treated as a specific, named error to correct in the piece (Step 7 information-gain),
not repeated as fact.

## Step 5 — Entity + term extraction by competitor

**gopunjab.pk** — entities: DPMIS (System), CNIC (Identifier), Bank of Punjab (Org, implied),
District Social Welfare Office (Org), helpline 1312 (Contact). Terms: status check, approved,
under review, not found, off-peak hours, OTP, PIN, fingerprint, password. Stats: Rs 10,500,
every three months, 13-digit CNIC. (12 items)

**punjabprogram.com.pk** — entities: DPMIS Portal (System), Punjab Social Welfare Department
(Org), Bank of Punjab (Org), NADRA (Org), Medical Board (Org/Process). Terms: registration,
login, captcha, biometric verification, employee dashboard, district rehabilitation services,
training communities, PWD services. Stats: Rs 10,500 per quarter, 4-step registration, 2-step
payment fix. (14 items)

**peef.com.pk** — entities: PSPA (Org), Bank of Punjab (Org), swd.punjab.gov.pk (System/Org),
dpmis.punjab.gov.pk (System), Maryam Nawaz (Person, as scheme namer — noted but not expanded,
politically neutral framing kept out of the body). Terms: ATM balance inquiry, PIN, phase,
disability certificate, PMT score. Stats: Phase 1 = 40,000, Phase 2 = 25,000, Phase 3 = 35,000,
March 2026. (13 items)

## Step 6 — Entity map + tiering

| Canonical | Type | Aliases | sameAs | Kind | Competitor count | Tier |
|---|---|---|---|---|---|---|
| Himmat Card | Product | CM Himmat Card, CM Punjab Himmat Card | — (no stable Wikidata entry found; unlinked) | entity | 3/3 + official | 1 |
| Punjab Social Welfare Department | Org | Social Welfare Punjab, SWD Punjab | https://swd.punjab.gov.pk/ | entity | 2/3 + official | 1 |
| DPMIS | Product | DPMIS Portal, Disabled Persons Management Information System | — (unlinked) | entity | 3/3 + official | 1 |
| PMT score | Metric | Proxy Means Test score | — | entity | 2/3 + official | 1 |
| BISP | Org | Benazir Income Support Programme | https://www.bisp.gov.pk/ | entity | 1/3 + official | 1 |
| CNIC | Concept | Computerized National Identity Card | — | term | 3/3 | 1 |
| helpline 1312 | Contact | 1312 | — | entity | 1/3 + official | 2 |
| Bank of Punjab | Org | BOP | — (unlinked) | entity | 2/3 | 2 |
| Zakat | Org/Concept | Zakat Fund | — | entity | 1/3 + official | 2 |
| Bait ul Maal | Org | — | — | entity | 1/3 + official | 2 |
| PSPA | Org | Punjab Social Protection Authority | — (unlinked) | entity | 1/3 | 2 |
| disability certificate | Concept | — | — | term | 2/3 + official | 1 |
| medical board | Process/Org | — | — | term | 1/3 | 2 |
| Phase 3 (35,000, Mar 2026) | Event | — | — | term | 1/3 (unconfirmed officially) | 2 |
| District Social Welfare Office | Org | tehsil office | — | entity | 2/3 | 2 |
| NADRA | Org | — | https://www.nadra.gov.pk/ | entity | 1/3 | 3 |
| 8171 (false-positive claim) | Product | — | — | entity | 1 search snippet only, contradicted | 3 (named only to correct) |

**Relationships (backbone):**
1. Himmat Card —administered by→ Punjab Social Welfare Department
2. Himmat Card —pays→ Rs 10,500 quarterly
3. Himmat Card eligibility —requires→ PMT score of 45 or below
4. PMT score —calculated/issued by→ BISP
5. Himmat Card —excludes recipients of→ BISP, PSPA, Zakat, Bait ul Maal aid
6. Himmat Card status —checked via→ dpmis.punjab.gov.pk/himmatcard-verification (CNIC only, no login)
7. Himmat Card registration —requires→ separate DPMIS account (CNIC + password + medical board selection)
8. Himmat Card payment —disbursed through→ Bank of Punjab ATM card
9. Himmat Card —requires→ disability certificate from Social Welfare Punjab confirming "Not Fit to Work"
10. Distribution —has run in batches→ Phase 1 (40,000), Phase 2 (25,000), reported Phase 3 (35,000, unconfirmed officially)
11. Official approval window —stated as→ "until June 2025," extension pending as of the source page
12. Helpline 1312 —supports checks→ for applicants without internet access
13. 8171 —is BISP's own number→ not corroborated as a Himmat Card channel by either official Punjab source

**Section pools:** Tier-1 concepts (Himmat Card, SWD, DPMIS, PMT/BISP link, CNIC,
disability certificate) are mandatory across "what/eligibility/how-to-check" sections.
Tier-2 (helpline, Bank of Punjab, Zakat/PSPA exclusions, Phase 3, District office) map to
troubleshooting, payment, and "what's new" sections. Tier-3 (NADRA, the 8171 claim) used only
where they fit — NADRA in the documents step, 8171 only in the myth-correction section.

**Dedupe log:** "DPMIS Portal" and "Disabled Persons Management Information System" collapsed
to one canonical DPMIS entity. "SWD Punjab" and "Social Welfare Department, Government of the
Punjab" collapsed to one canonical org. Parked out-of-scope: full CM Kissan Card / Punjab Rozgar
mechanics (already covered by their own guides — linked, not repeated); general BISP 8171
household-eligibility mechanics (belongs to `/8171/` and `/what-is-bisp/`, only referenced here
to correct the false 8171-for-Himmat-Card claim).

## Step 7 — Information-gain pass

What the 3 fetched competitors collectively miss or get wrong:
1. **None flag that the official DPMIS FAQ text itself says the program is "approved until June
   2025"** with an extension "pending government review" — every competitor writes as if the
   scheme is unconditionally ongoing through 2026.
2. **None distinguish the no-login public verification page from the login-based registration
   portal** as clearly as they could — punjabprogram.com.pk gets closest but still blends
   "verification" and "registration" language in places.
3. **Only one (a low-confidence search snippet, not a full page)** raises 8171 as a supposed
   Himmat Card channel — and it contradicts both official Punjab sources. No competitor
   explicitly corrects this.
4. **Only peef.com.pk mentions Phase 3 / PSPA / ATM balance inquiry** — the others describe
   only the CNIC-status check, not a separate balance-check flow.

**Original element committed to:** a "Which Himmat Card check are you actually trying to do?"
comparison table distinguishing eligibility/status check (DPMIS verification, CNIC only) vs.
balance check (ATM/Bank of Punjab, PIN) vs. new registration (DPMIS account, medical board) —
plus a dated "what's confirmed vs unconfirmed for 2026" callout addressing the June-2025
approval window and the unconfirmed Phase 3 figure head-on.

## Step 8 outline — see draft.md structure; heading/keyword map

| Heading | Level | Focus/LSI phrase | Question answered | Tier-1/2 carried |
|---|---|---|---|---|
| How to Check Himmat Card Eligibility and Status by CNIC (2026) | H1 | himmat card eligibility check | — | Himmat Card, CNIC |
| What Is the Himmat Card, and Who Runs It? | H2 | himmat card | What is it? | Himmat Card, SWD |
| ↳ Himmat Card vs Other Punjab and BISP Support | H3 | punjab disability card | How is it different? | BISP, Kissan Card (link) |
| Who Is Eligible for the Himmat Card? | H2 | himmat card eligibility criteria | Who qualifies? | PMT, BISP, disability cert |
| ↳ How the PMT Score and BISP Fit In | H3 | pmt score himmat card | What's a PMT score? | PMT, BISP |
| ↳ Why Applications Get Rejected | H3 | himmat card rejected | Why rejected? | Zakat, PSPA, Bait ul Maal |
| How Do I Check My Himmat Card Status Online by CNIC? | H2 (core) | check himmat card status by cnic | How do I check? | DPMIS, CNIC |
| ↳ Checking Without Internet Access | H3 | himmat card check without internet | Alternative? | helpline 1312, SWO |
| Is Himmat Card Checked Through 8171? | H2 | himmat card 8171 | Is 8171 valid? | DPMIS (correction) |
| What Do the Status Results Mean? | H2 | himmat card status meaning | What does "under review" mean? | DPMIS |
| How Do I Register If I'm Not Yet in the System? | H2 | himmat card registration | How to register? | DPMIS, medical board, NADRA |
| How Much Does It Pay, and How Do I Check My Balance? | H2 | himmat card balance check | How much / balance? | Bank of Punjab, PSPA |
| What's New in the Himmat Card Program (September 2026)? | H2 | himmat card phase 3 2026 | What's changed? | Phase 3, approval window |
| How Do I Avoid a Fake Himmat Card Site or Agent? | H2 | himmat card scam | How to stay safe? | — |
| FAQ | H2 | — | — | all tiers |

Internal-link plan: `/what-is-bisp/` (BISP context), `/8171/` (correcting the 8171 confusion),
`/farmer-support-card-guide/` and `/punjab-rozgar-scheme-guide/` (sibling Punjab-card guides,
"other Punjab schemes" pattern), `/zakat-and-bisp-eligibility/` (exclusion-rule cross-link — this
article is the natural target for the existing Zakat-guide's "Himmat Card" sentence),
`/cnic-verification-guide/`, `/avoid-bisp-fraud/`, `/documents-for-bisp-registration/`,
`/punjab-schemes/` (parent hub — its existing raw `dpmis.punjab.gov.pk/faqs` external link should
be swapped for this new internal guide once published). No cannibalization: confirmed via slug
list that no existing PakBenefits article already targets this query.
