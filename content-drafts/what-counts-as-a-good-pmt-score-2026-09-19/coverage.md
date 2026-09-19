# Coverage + QA scorecard — "What Counts as a 'Good' PMT Score for BISP?"

Run: 19 Sep 2026 · Draft: `draft.md` · 2,256 words total (1,815 body + 441 FAQ) · 10 FAQs · 1 H1, 7 content H2s + FAQ H2, 12 content H3s.

## 1. Entity coverage

**Tier 1 — covered: 5/5 (100%)**

| Tier-1 entity | Covered? | Attribute / relationship stated |
|---|---|---|
| Proxy Means Test (PMT) score | Yes | Defined as a 0–100 poverty estimate; relationship: calculated from NSER data, not income |
| Benazir Income Support Programme (BISP) | Yes | Runs Kafaalat; operates the 8171 portal; maintains NSER; helpline 0800-26477 |
| National Socio-Economic Registry (NSER) | Yes | Established 2011; 27m → 35m households; dynamic registry; validated against NADRA |
| 8171 Web Portal | Yes | Operated by BISP; CNIC + captcha; shows eligibility/status information |
| PMT eligibility cut-off | Yes | 32 standard; 37 relaxed with certified disability; set by BISP |

**Tier 1 with an attribute/relationship stated: 5/5 (100%)** — no bare mentions.

**Tier 2 — covered: 11/11 (100%)**

Benazir Kafaalat (threshold + Rs 14,500 relationship), NADRA (validates NSER), CNIC (links household record), NSER dynamic registry (updates at tehsil desks), BISP Tehsil Office (correction route), recertification (three-year cycle), Kafaalat quarterly payment (Rs 14,500, Feb 2026 revision), helpline 0800-26477 (routes record questions), provincial targeting (separate thresholds), differently-abled certified status (NADRA special CNIC), exclusion/verification checks (cross-matching can hold a below-cut-off household).

**Tier 3 — used where natural:** B-Forms (correction checklist), Ehsaas (related brand reference), private PMT calculator (debunked), PSER/Taleemi Wazaif/Nashonuma parked with reasons in `draft.annotated.md`. No unused tier-1/2 term.

## 2. Heading architecture check

- One H1 containing the focus keyword: **yes**.
- No skipped levels (H1 → H2 → H3 only): **yes**.
- Every H3 under an H2: **yes**.
- Distinct phrase per heading (no two headings competing for one query): **yes** — verified against the Step 8 map.
- Headings read alone convey the logic: what it is → what counts as good → how to check → other programmes → problems → what changed → safety → FAQ.
- H2 count (7 content + FAQ) vs fan-out/PAA set: covers all six fan-out clusters captured in research-notes.
- Snippet-format match: paragraph-style answer block for the definition query; real markdown table for the band query; numbered step list for the portal procedure (also emitted as `HowTo`).

## 3. Answer-block check

- Direct-answer block length: **49 words** (target 40–55) — pass.
- Does not restate the H1 or open with "In this article…" — pass.
- Gives a definite answer (32 or below; 37 relaxed) — pass.
- Each question-style H2/H3 opens with a direct answer sentence (QUORA order held) — pass.

## 4. Competitor-heading matrix

| Recurring competitor section | Covered? | Note |
|---|---|---|
| What is PMT score / definition | Yes | H2 "What Is a PMT Score…" |
| PMT score eligibility criteria / bands | Yes | H2 "What Counts as a 'Good' PMT Score" + table |
| How to check PMT score online by CNIC | Yes | H2 + two methods (portal, SMS) |
| PMT score for BISP / Kafaalat | Yes | H3 "BISP and Benazir Kafaalat" |
| PMT score for other programmes | Yes | H3 "Provincial Schemes and Utility Subsidies" |
| Why PMT score is not showing / wrong | Yes | H2 "Why Your PMT Score Is Missing or Looks Wrong" |
| How to fix wrong PMT score / re-survey | Yes | H3 "How to Request a Correction or Re-Survey" |
| Why PMT score matters | Merged | Folded into "Why a Lower PMT Score Means Stronger Eligibility" to avoid a thin standalone section |
| Aghosh/PSPA balance inquiry (ncf.org.pk) | Intentionally skipped | Different programme and authority; out of the PMT context |
| Private calculator walkthrough (pmtscorecheck.info, schemesalert.pk) | Intentionally skipped | The article debunks it instead; a walkthrough would endorse an unofficial tool |

## 5. Question coverage

| Question source | Mapped answer |
|---|---|
| What is a good PMT score in Pakistan? (competitor FAQ) | Answer block + H2 + FAQ 1 |
| What is PMT score? (fan-out) | H2 "What Is a PMT Score…" |
| BISP PMT score check online (fan-out) | H2 "How to Check…" + FAQ 4 |
| 8171 web portal PMT score check (user keyword) | H3 "Method 1: The 8171 Web Portal" |
| 8171 PMT score check by SMS (user keyword) | H3 "Method 2: SMS to 8171" |
| PMT score check online by CNIC Pakistan (user keyword) | H2 + FAQ 4 |
| Can a PMT score change over time? (competitor FAQ) | H2 "What Changed in 2026" + FAQ 6 |
| How often is the PMT score updated? (competitor FAQ) | Recertification row in the dated table + FAQ 6 |
| How can I reduce my PMT score? (competitor FAQ) | H2 "Can You Lower Your PMT Score?" + FAQ 9 |
| Is PMT score the same for all programmes? (competitor FAQ) | H3 "Provincial Schemes…" + FAQ 10 |
| Can I check my PMT score without a CNIC? (competitor FAQ) | FAQ 7 |
| What does a PMT score of 33–37 mean? (gap) | H3 "The Relaxed 37 Cut-Off" + FAQ 5 |
| "8171 by preparation point" (user keyword) | Unanswered by design — parked as a third-party navigational query |

No PAA/fan-out question left unanswered.

## 6. Fact cross-check

| Claim in draft | Source line |
|---|---|
| PMT score 0–100, lower = poorer | pmtscorecheck.info; rationcards.org.pk; ncf.org.pk (all four competitors agree) |
| Standard cut-off 32; relaxed 37 | Site's existing verified content (`bisp-online-registration-mistakes` FAQ: "standard approved PMT cutoff… 32… relaxed cutoff of 37") |
| NSER established 2011; 27m households (2010-11); ~35m (2019-21) | BISP official NSER page (Step 2 fetch) |
| NSER data launched January 2022; MELA dynamic registry | BISP official NSER page |
| Recertification after three years; cyclic update after two years; registry refresh every four years | BISP official NSER page (Types 5–7 table) |
| Kafaalat payment Rs 14,500 (raised from Rs 13,500, announced Feb 2026) | Wikipedia BISP (citing Express Tribune 18 Feb 2026 and The Nation 18 Feb 2026); matches site's existing `bisp-balance-check-by-cnic-2026` entry (PID briefing 22 June 2026) |
| Planned increase January 2027 | Site's existing `bisp-balance-check-by-cnic-2026` entry (PID briefing 22 June 2026) |
| Budget 2025-26 Rs 716 billion | Wikipedia BISP (not used in the draft body — held back as a non-essential stat) |
| Helpline 0800-26477 | bisp.gov.pk header; site's existing payment guide |
| 8171 portal asks CNIC + captcha | Site's existing `nser-pmt-score-check-guide` + `bisp-balance-check-by-cnic-2026`; ncf.org.pk confirms |
| Portal does not guarantee a numeric score | Site's existing `nser-pmt-score-check-guide` ("The public form is not a guaranteed display of the full NSER record or an exact numeric PMT score") |
| NADRA special CNIC for disability | Site's existing `bisp-online-registration-mistakes` ("Special CNIC issued by NADRA to unlock the relaxed PMT cutoff of 37") |

No unsourced number, date or amount in the draft. No citation invented.

## 7. Intent check

*Know-simple* dominant ("what is a good score / what is the cut-off"): answered in the answer block and first two sections. *Do* secondary ("check online by CNIC"): answered with a real numbered procedure and a `HowTo` schema. **Pass.**

## 8. Readability

Estimated grade 7–9 (short sentences, concrete numbers, no clause stacking). Longest paragraphs are the entity-attribute explanations in "How the NSER Survey Produces Your Score" — still under 90 words each. No dense passage flagged.

## 9. E-E-A-T flags for the human editor

- **Author/reviewer:** uses the site's existing contributor records (Saad Hassan / Ayesha Malik). No credentials or `sameAs` author page exist — `schema.jsonld` omits author `sameAs` rather than inventing one. Add a real author page before publishing if the site wants author markup.
- **YMYL:** government-benefit content. The draft avoids promising eligibility outcomes and repeats the "no guarantee" caveat. A human should re-verify the current PMT threshold (32/37) and payment amount against bisp.gov.pk on the publish date, because both can change.
- **First-person/scaffolding:** none used in this draft (no fabricated lived experience).
- **Images:** the `content-entry.md` reuses an existing site image (`/images/hero-support.jpg`). Replace with original artwork if available.
- **`schema.jsonld` is generated, not verified** — run it through the Rich Results Test before deploying.
