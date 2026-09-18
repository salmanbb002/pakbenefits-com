# Measurable QA Scorecard — "7 Mistakes That Delay a BISP Online Registration"

## 1. Entity Coverage Scorecard

- **Tier 1 Entities (Core):**
  - Benazir Income Support Programme (BISP) — Covered with multiple attributes/relationships stated (Act of 2008, dynamic survey mandate, quarterly cash transfers).
  - NSER Dynamic Registry — Covered with operational attributes (Tehsil desk interview, continuous registration model, 2-3 year validity).
  - Computerized National Identity Card (CNIC) — Covered with NADRA validation rules, 13-digit format, and marital status update requirements.
  - 8171 Web Portal — Covered with official URL (`https://8171.bisp.gov.pk/`), query mechanics, captcha, and distinction from initial application forms.
  - BISP Tehsil Office — Covered as the sole legitimate site for initial survey token generation and interview completion.
  - NADRA Family Database — Covered with relationship to PMT score calculation and family tree structure.
  - Proxy Means Test (PMT) Score — Covered with cutoff threshold of 32 (and relaxed 37 for disability).
  - **Tier 1 Coverage: 100% (7/7 covered with attributes and relationships)**

- **Tier 2 Entities & Terms (Supporting):**
  - Child Registration Certificate (B-Form) — Covered with link to household dependency ratio and Taleemi Wazaif eligibility.
  - Biometric Verification / Fingerprint Match — Covered with NADRA scanner protocol and thumbprint failure handling.
  - PTA Biometric SIM Card — Covered with telecom identity cross-matching against applicant CNIC.
  - Benazir Kafaalat — Covered as the unconditional cash transfer program linked to PMT cutoff.
  - Taleemi Wazaif — Covered as the conditional child education stipend program requiring B-Form linkage.
  - Household Utility Bill (Electricity/Gas) — Covered as a physical address verification document required at survey.
  - Fraudulent Registration Scams / Fake APKs — Covered as primary delay/theft risk.
  - **Tier 2 Coverage: 100% (7/7 covered)**

---

## 2. Heading Architecture Check

- **Hierarchy:** Exactly 1 H1 (`7 Mistakes That Delay a BISP Online Registration (And How to Fix Them)`), 6 H2s, and 7 H3s strictly nested under H2. No levels skipped (no H1→H3 or H2→H4).
- **Phrase Distribution:**
  - H1 owns the focus theme: `7 Mistakes That Delay a BISP Online Registration`
  - H2 #1 owns: `how to apply bisp online` (intent disambiguation)
  - H2 #2 owns: the core 7 mistakes architecture with 7 distinct H3s
  - H2 #3 owns: `bisp dynamic registration process` (feeds `HowTo` schema)
  - H2 #4 owns: `bisp online registration check by cnic` (procedural lookup)
  - H2 #5 owns: Pre-Registration Document Checklist (information gain table)
  - H2 #6 owns: Frequently Asked Questions (10 items)
- **Heading Cannibalization Check:** Zero overlap; each heading owns a distinct query variant and sub-intent.

---

## 3. Direct-Answer Block Check

- **Placement:** Immediately following H1.
- **Word Count:** 48 words (Target: 40–55 words).
- **Extractability:** Standalone paragraph directly answering whether BISP can be applied for online (No, initial enrollment is via Tehsil Dynamic Desk; 8171 web portal is for status check).
- **QUORA Structure per Section:** Every section leads with a definite standalone statement answering the core question, followed by the institutional mechanism, verification details, and immediate takeaway action.

---

## 4. Competitor Heading Matrix

| Competitor Recurring Angle | Covered in Draft? | Section / Rationale |
|---|---|---|
| "BISP Online Apply Form 2026" | Addressed & Debunked | H2: "Can You Actually Apply for BISP Online from Home?" (Debunks fake form claims) |
| "Required Documents for BISP" | Covered | H2: Pre-Registration Document Checklist & HowTo step list |
| "8171 SMS Check Online" | Covered | H3: Mistake 6 & H2: How to Check Status by CNIC |
| "BISP Biometric Problem" | Covered | H3: Mistake 2 & FAQ #8 (NADRA biometric update protocols) |
| "Dynamic Survey Eligibility" | Covered | H2: Step-by-Step Dynamic Process & PMT score rules |

---

## 5. Question Coverage Map

- *Can I apply online from my smartphone?* → Answered in H2 & FAQ #1.
- *Why is my application showing 'Record Not Found'?* → Answered in Mistake 6, Mistake 7 & FAQ #3.
- *How do I check registration status by CNIC?* → Answered in dedicated step-by-step H2.
- *Does texting 8171 register me?* → Answered in Mistake 6 & FAQ #9.
- *Why did my marriage status delay my BISP money?* → Answered in Mistake 2 & FAQ #4.
- *What is the PMT cutoff score?* → Sourced at 32 (37 for disabled) in Mistake 2 & FAQ #7.

---

## 6. Fact Cross-Check & Sourcing

- **PMT cutoff (32 / 37):** Verified from official BISP Board 52nd meeting decision and existing site benchmark (`bisp-eligibility-criteria-guide`).
- **Helpline number (0800-26477):** Official BISP toll-free helpline number.
- **Web portal URL (`https://8171.bisp.gov.pk/`):** Official government portal domain verified.
- **Dynamic survey token & interview flow:** Cross-checked against official BISP dynamic registry operational manuals.
- **No speculative numbers or unverified dates used.**

---

## 7. Readability & Intent

- **Flesch-Kincaid Grade Level:** Estimated ~8.2 (Ideal for public information & welfare program guidance).
- **Tone:** Empathetic, authoritative, protective (anti-fraud/scam warning), clear public service guidance.
- **Intent Match:** Fulfills both informational (warning against errors) and procedural (completing dynamic registration and 8171 CNIC checks).

---

## 8. E-E-A-T & Publishing Checks

- [x] Author byline assigned: Saad Hassan (Public Programmes Editor)
- [x] Reviewer byline assigned: Ayesha Malik (Editorial Reviewer, Social Protection)
- [x] Clear anti-scam advisories included (never pay an agent, registration is 100% free)
- [x] Government disclaimer: Clarified as an independent informational guide cross-checked against bisp.gov.pk
