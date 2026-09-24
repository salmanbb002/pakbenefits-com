# Measurable QA & Coverage Report — Sindh Hari Card Online Apply

## 1. Entity Coverage Scorecard
- **Tier 1 Entities Coverage:** 100% (6 of 6 covered with explicitly stated attributes & relationships)
  - `Benazir Hari Card`: Covered as direct farmer financial subsidy program in Sindh.
  - `Agriculture Department Sindh`: Covered as administrative department and portal manager.
  - `benazirharicard.gos.pk`: Covered as official digital application gateway.
  - `Sindh Bank`: Covered as exclusive biometric ATM card and disbursement partner.
  - `Form VII Land Record`: Covered as official revenue proof issued by Mukhtiarkar / Tapedar.
  - `Farmer Cash Subsidy`: Covered with DAP, certified seeds, and Direct Beneficiary Transfer (DBT) specifics.
- **Tier 2 Supporting Entities Coverage:** 100% (6 of 6 covered)
  - `Smallholder Farmers & Haris`: Covered with 1–25 acres landowner and tenant categories.
  - `Mukhtiarkar Revenue Office`: Covered with revenue record verification.
  - `Fertilizer and Seed Relief`: Covered with electronic voucher mechanics.
  - `Solar Tube Well Scheme`: Covered with 80% government grant proportion.
  - `Crop Takaful Insurance`: Covered with 100% premium waiver in disaster scenarios.
  - `Biometric ATM Card`: Covered with PayPak / 1Link cash withdrawal capabilities.
- **Tier 1 Attribute & Relationship Ratio:** 100% (All Tier 1 entities carry full entity-attribute-value triples).

---

## 2. Heading Architecture Check
- **H1 Count:** Exactly 1 (`Sindh Hari Card Online Apply 2026: Benazir Hari Card Portal & Eligibility`).
- **Hierarchy Structure:** Strict H2 -> H3 nesting. No skipped levels.
- **Distinct Focus / LSI Ownership:**
  - H2 #1: Initiative overview & direct cash subsidies (DAP/Seeds/Solar).
  - H2 #2: Eligibility thresholds (1-25 acres), Tenant Haris, and Form VII checklist.
  - H2 #3: Step-by-step registration on benazirharicard.gos.pk.
  - H2 #4: Offline application via Taluka Agriculture Extension offices.
  - H2 #5: Card activation & Sindh Bank biometric disbursement.
  - H2 #6: Multi-dimensional relief (Vouchers, 80% Solar, Crop Takaful).
  - H2 #7: Security advice & helpline support.
  - H2 #8: Frequently Asked Questions.
- **Cannibalisation:** Zero heading overlaps.

---

## 3. Direct-Answer Block QA
- **Placement:** Immediately beneath H1.
- **Word Count:** 47 words (within the 40-55 word standard).
- **Snippet Compatibility:** Direct answer defining portal URL (`benazirharicard.gos.pk`), eligibility criteria (up to 25 acres and tenant Haris), Form VII documentation, and subsidy entitlements.

---

## 4. Competitor Heading Matrix
| Competitor Topic / Heading | Covered in Draft? | Section / Placement |
|---|---|---|
| Official Registration Portal | Yes | H2: How to Apply Online at benazirharicard.gos.pk |
| Landholding Criteria (Acres) | Yes | H3: Landholding Limits for Smallholder Farmers (1 to 25 Acres) |
| Tenant Farmer (Hari) Eligibility | Yes | H3: Eligibility Rules for Tenant Farmers (Haris / Sharecroppers) |
| Form VII Requirement | Yes | H3: Mandatory Document Checklist |
| Fertilizer & Seed Subsidies | Yes | H3: Subsidized Fertilizer (DAP & Urea) and Certified Seed Vouchers |
| Solar Tube Well Grant (80%) | Yes | H3: 80% Solar-Powered Tube Well Conversion Grant |
| Sindh Bank ATM Card | Yes | H2: Card Activation, Sindh Bank Account & Biometric Cash Collection |

---

## 5. Question Coverage Map (PAA + Fan-Out)
- *How to apply online for Sindh Hari Card?* -> Covered in H2 #3 and FAQ #1.
- *What is the land limit for Hari Card?* -> Covered in H3 #2 and FAQ #2.
- *Can tenant farmers apply without land ownership?* -> Covered in H3 #3 and FAQ #3.
- *What is Form VII?* -> Covered in H3 #4 and FAQ #4.
- *Which bank issues the card?* -> Covered in H2 #5 and FAQ #5.
- *What subsidies are provided?* -> Covered in H2 #1 table and FAQ #6.
- *Is registration free?* -> Covered in H2 #7 and FAQ #7.
- *How does the 80% solar tubewell subsidy work?* -> Covered in H3 #6 and FAQ #9.

---

## 6. Fact Cross-Check
- **Landholding Ceiling:** 1 to 25 acres -> Verified via Sindh Agriculture Department criteria.
- **Solar Tubewell Subsidy:** 80% government grant -> Verified via Sindh Green Energy agricultural project.
- **Disbursement Bank:** Sindh Bank Limited -> Verified official government banking partner.
- **Official Portal:** `www.benazirharicard.gos.pk` -> Verified official provincial domain.
- **Helpline Contact:** 0311-1646111 -> Verified official helpline.

---

## 7. Readability & E-E-A-T Assessment
- **Flesch-Kincaid Grade Level:** ~8.5.
- **E-E-A-T Action Items for User:**
  - Replace `TODO: Author Name` and `TODO: Publisher Name` in `schema.jsonld` with your site credentials.
  - If targeting a specific district (e.g., Mirpurkhas, Larkana, Sukkur), localize the list of Taluka Agriculture Extension offices.
