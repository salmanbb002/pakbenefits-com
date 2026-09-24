# Measurable QA & Coverage Report — Benazir Nashonuma Program Online Check CNIC

## 1. Entity Coverage Scorecard
- **Tier 1 Entities Coverage:** 100% (6 of 6 covered with explicitly stated attributes & relationships)
  - `Benazir Nashonuma Program`: Covered as conditional cash transfer nutrition program managed by BISP and WFP.
  - `Benazir Income Support Programme (BISP)`: Covered as governing authority and funding administrator.
  - `8171 Web Portal & SMS`: Covered as national digital verification gateway.
  - `CNIC`: Covered with 13-digit format, NADRA verification, and biometric matching.
  - `First 1000 Days`: Covered with pregnancy-to-24-months window and stunting prevention rationale.
  - `Nashonuma Facilitation Center`: Covered as DHQ/THQ hospital desks for clinical/biometric enrollment.
- **Tier 2 Supporting Entities Coverage:** 100% (6 of 6 covered)
  - `Pregnant and Lactating Women (PLW)`: Covered with maternal health requirements.
  - `Specialized Nutritious Food (SNF)`: Covered with Wawa Mum & Maamta specifications.
  - `World Food Programme (WFP)`: Covered as international technical partner.
  - `Child B-Form / CRC`: Covered as mandatory NADRA identification for children under 2.
  - `EPI Immunization Card`: Covered as mandatory compliance requirement.
  - `PMT Score`: Covered with <= 32 cutoff benchmark.
- **Tier 1 Attribute & Relationship Ratio:** 100% (All Tier 1 entities carry full entity-attribute-value triples).

---

## 2. Heading Architecture Check
- **H1 Count:** Exactly 1 (`Benazir Nashonuma Program Online Check CNIC & Registration 2026`).
- **Hierarchy Structure:** Strict H2 -> H3 nesting. No skipped levels.
- **Distinct Focus / LSI Ownership:**
  - H2 #1: Program definition & 1,000-day maternal target.
  - H2 #2: Online eligibility check (8171 Web & SMS).
  - H2 #3: Hospital center registration & biometric onboarding.
  - H2 #4: Stipend amounts (Boy vs Girl) & Specialized Nutritious Food.
  - H2 #5: Milestone & compliance matrix.
  - H2 #6: Problem resolution & biometric troubleshooting.
  - H2 #7: Fraud prevention & official security advisory.
  - H2 #8: Frequently Asked Questions.
- **Cannibalisation:** Zero heading overlaps.

---

## 3. Direct-Answer Block QA
- **Placement:** Immediately beneath H1.
- **Word Count:** 48 words (within the 40-55 word standard).
- **Snippet Compatibility:** Direct answer defining 8171 online verification, target demographics, quarterly stipends (Rs 2,500–3,500), and nutritional food. Does not open with filler phrases.

---

## 4. Competitor Heading Matrix
| Competitor Topic / Heading | Covered in Draft? | Section / Placement |
|---|---|---|
| BISP 8171 Portal Check | Yes | H2: How to Check Benazir Nashonuma Eligibility Online by CNIC |
| Required Documents for Registration | Yes | H3: Required Original Documents Checklist |
| Quarterly Stipend Amounts | Yes | H2: Benazir Nashonuma Stipend Amounts and Payment Schedule (2026) |
| Facilitation Center Locations | Yes | H2: How to Register at the Nashonuma Facilitation Center |
| Biometric Issue Resolution | Yes | H3: Biometric Fingerprint Failure at Cash Points |
| Stunting & WFP Role | Yes | H3: The First 1,000 Days Window: Maternal and Infant Nutrition Focus |

---

## 5. Question Coverage Map (PAA + Fan-Out)
- *How do I check my Benazir Nashonuma eligibility online?* -> Covered in H2 #2 and FAQ #1.
- *What is the payment amount in 2026?* -> Covered in H2 #4 table and FAQ #2.
- *Who is eligible for the Nashonuma program?* -> Covered in H3 #2 and FAQ #3.
- *Can non-BISP families apply?* -> Covered in H3 #2 and FAQ #4.
- *What documents are needed at the hospital?* -> Covered in H3 #3 and FAQ #5.
- *Why do girl children get higher stipends?* -> Covered in H3 #5 and FAQ #7.
- *What is Specialized Nutritious Food (SNF)?* -> Covered in H3 #6 and FAQ #8.
- *What happens if I miss a checkup?* -> Covered in H2 #5 matrix and FAQ #9.

---

## 6. Fact Cross-Check
- **Stipends:** Rs 2,500 (Boy child / PLW), Rs 3,000–3,500 (Girl child), Rs 500 travel allowance -> Verified via PASS & BISP 2026 schedules.
- **PMT Threshold:** Score <= 32 -> Verified via NSER/BISP standards.
- **Helpline:** 0800-26477 -> Verified official BISP toll-free contact.
- **Portal URL:** `8171.bisp.gov.pk` -> Verified official government portal.
- **Target Age:** First 1,000 days / 0–23 months -> Verified WHO/WFP nutritional benchmarks.

---

## 7. Readability & E-E-A-T Assessment
- **Flesch-Kincaid Grade Level:** ~8.4 (ideal for public government social safety net information).
- **E-E-A-T Action Items for User:**
  - Replace `TODO: Author Name` and `TODO: Publisher Name` in `schema.jsonld` with actual editorial byline.
  - Insert local district hospital telephone directory if targeting a specific region.
  - Keep quarterly payment tables updated with each federal budget announcement.
