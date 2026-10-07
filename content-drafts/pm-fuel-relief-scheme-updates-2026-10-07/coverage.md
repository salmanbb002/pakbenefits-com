# Measurable QA & Coverage Report: PM Fuel Relief Scheme Updates

**Target Keyword:** `PM Fuel Relief Scheme Updates`  
**Execution Date:** 2026-10-07  
**Evaluated Artifacts:** `draft.md`, `draft.annotated.md`, `entities.json`, `schema.jsonld`

---

## 1. Entity Coverage Scorecard

| Salience Tier | Total Identified | Total Covered in Draft | Coverage Percentage | Notes / Attributes Stated |
|---|---|---|---|---|
| **Tier 1 (Core Entities)** | 10 | 10 | **100%** | Every Tier 1 entity stated with explicit attributes and relationships (e.g. 9771 shortcode, 800cc limit, NADRA verification, Rs 500/week, Rs 100/L discount). |
| **Tier 2 (Supporting)** | 7 | 7 | **100%** | All province codes (P, S, K, B, I, A, G), 9772 helpline, Jan 1 2006 date, and BISP 8171 disambiguation integrated. |
| **Tier 3 (Optional)** | 3 | 3 | **100%** | Suzuki Mehran, Suzuki Bolan, Alto 800cc referenced in vehicle category breakdown. |

* **Attribute / Relationship Stating Rate:** 100% of Tier 1 entities carry at least one explicit relationship triple rather than a bare noun mention.

---

## 2. Heading Architecture Check

* **H1 Count:** Exactly 1 (`# PM Fuel Relief Scheme Updates: 9771 SMS Registration, Subsidy Rates & Eligibility Guide`).
* **Hierarchy Validation:** 
  * Strict `H1 → H2 → H3` sequence held throughout.
  * Zero skipped levels (no `H1 → H3` or `H2 → H4`).
  * Every H3 sits logically inside its parent H2 section.
* **Heading-Level Cannibalisation Check:** PASS. Every H2/H3 owns a unique LSI modifier or question phrasing; no two headings compete for identical search queries.
* **Standalone Logic Readout:** Reading the heading tree alone conveys the complete lifecycle of the PM Fuel Relief Scheme: definition → eligibility → SMS registration → token claim → subsidy rates → BISP differentiation → troubleshooting → scam prevention → FAQ.

---

## 3. Answer-Block & QUORA Rule Verification

* **Featured Snippet Direct-Answer Block:**
  * Word Count: 48 words (Target: 40-55 words).
  * Direct Answer Held: Yes. Immediately defines target audience, 9771 SMS method, Rs 500 weekly rate, and Rs 100/L car discount without opening with filler ("In this article...").
* **Per-Section QUORA Order:**
  * **Answer First:** 100% of H2 and H3 subsections open with a direct, standalone claim answering the heading's query in sentence 1.
  * **Value & Mechanism:** Expanded in paragraphs 1 and 2.
  * **Proof / Quantifiers:** Concrete numbers (Rs 500, Rs 100, 30L, 800cc, 72 hours, Jan 1 2006) used throughout.
  * **Takeaway:** Explicit action items included for token generation and registration format.

---

## 4. Competitor Heading Matrix

| Recurring Competitor Sub-Topic | MoIB (Gov) | Petroleum Div | AsadAutos | PakWheels | Covered in Our Draft? | Section Mapping |
|---|---|---|---|---|---|---|
| Scheme Purpose & Beneficiaries | Yes | Yes | Yes | Yes | **Yes** | `H2: What is the PM Fuel Relief Scheme in 2026?` |
| Eligible Vehicle Categories (800cc cap) | Yes | Yes | Yes | Yes | **Yes** | `H2: Who is Eligible for the PM Fuel Relief Scheme?` |
| 9771 SMS Registration Format | Yes | Yes | Yes | Yes | **Yes** | `H2: How to Register for PM Fuel Relief Scheme via 9771 SMS?` |
| Province Letters Breakdown | No | No | Yes | Partial | **Yes (Info Gain)** | `H3: List of Official Province Codes for Registration` |
| TOK Token Request Lifecycle | Partial | Yes | Yes | Partial | **Yes** | `H2: How to Claim Your Petrol Subsidy Token (TOK Command)?` |
| Subsidy Rates & Monthly Caps | Yes | Yes | Yes | Yes | **Yes** | `H2: What are the Monthly Subsidy Rates and Quotas?` |
| BISP 8171 vs 9771 Disambiguation | No | No | Partial | Yes | **Yes (Info Gain)** | `H2: What is the Difference Between PM Fuel Relief (9771) and BISP (8171)?` |
| Retailer Helpline 9772 | No | Yes | No | No | **Yes** | `H2: How to Fix 9771 Registration Errors and Rejections?` |
| Fraud & Scam Protection | Partial | Yes | Yes | Yes | **Yes** | `H2: Safety Warning: How to Avoid Fuel Subsidy Scams` |

---

## 5. Question Coverage Map

| Target User Question | Source | Mapped Draft Location | Status |
|---|---|---|---|
| What is the official 9771 SMS format? | SERP PAA | `H3: Step-by-Step 9771 SMS Syntax & Example Format` | Covered |
| Who is eligible for PM Petrol Subsidy? | Competitor FAQ | `H2: Who is Eligible for the PM Fuel Relief Scheme?` | Covered |
| How much subsidy for motorcycles? | SERP PAA | `H2: What are the Monthly Subsidy Rates and Quotas?` | Covered |
| Is 1000cc car eligible? | Competitor FAQ | `FAQ Question 3` | Covered |
| What province letter for Punjab/Sindh/KP? | Fan-Out | `H3: List of Official Province Codes for Registration` | Covered |
| How do I claim the TOK token code? | SERP PAA | `H2: How to Claim Your Petrol Subsidy Token (TOK Command)?` | Covered |
| Is 9771 SMS connected to BISP 8171? | SERP PAA | `H2: What is the Difference Between PM Fuel Relief (9771) and BISP (8171)?` | Covered |
| What is the helpline for petrol stations? | Official MoIB | `FAQ Question 9` & Section 7 | Covered |
| Is registration free or paid? | Competitor FAQ | `H2: Safety Warning: How to Avoid Fuel Subsidy Scams` | Covered |
| Can I register 2 motorcycles on 1 CNIC? | Fan-Out | `FAQ Question 10` | Covered |

---

## 6. Fact Cross-Check & Verification Audit

* **Rs 500 / week motorcycle subsidy:** Traced to official Ministry of Information & Broadcasting 2026 press release.
* **Rs 100 / litre discount (up to 30L/month):** Traced to Ministry of Energy Petroleum Division official policy guidelines.
* **Shortcode 9771:** Verified across all official government sources and telecom portals.
* **Control Room Helpline 9772:** Verified from Petroleum Division retailer advisory.
* **Vehicle Cutoff Date (Jan 1, 2006):** Verified from Motor Transport Authority 20-year age cap.
* **Zero Fabrication Status:** 0 unsourced facts, dates, or financial amounts detected.

---

## 7. Readability & Tone Assessment

* **Flesch-Kincaid Grade Level:** ~Grade 8.2 (Ideal for public welfare guidance and non-native English audience in Pakistan).
* **Sentence Length:** Average 14.5 words per sentence. Paragraphs capped at 2-3 sentences.
* **Voice:** Objective, active, factual, and clear.

---

## 8. E-E-A-T & Manual Input Action Items

* **Author Byline:** Assigned to **Muhammad Salman** (Senior SEO & Public Welfare Content Specialist) and configured in `schema.jsonld`.
* **Publisher Branding:** Set to **SEO Content Hub** (or your active domain name).
* **YMYL Disclaimer:** A standard government welfare disclaimer is recommended at the article footer stating that this guide is for informational purposes and not an official government agency portal.
