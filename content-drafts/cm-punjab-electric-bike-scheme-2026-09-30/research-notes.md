# Research Notes — CM Punjab Electric Bike Scheme 2026

**Primary keyword:** CM Punjab Electric Bike Scheme
**Page type:** Blog post (informational + *do* intent — how to apply)
**Research date:** September 30, 2026
**SERP engine used:** DuckDuckGo HTML (via `tools/serp.mjs` — `ddg` engine). Google API not configured; rendered Google IP-blocked (anti-bot); SearXNG instances bot-checked/empty. DDG returned clean URLs + snippets.

---

## Step 1 — Intent + SERP analysis

### Search intent
- **Dominant:** *do* — users want to apply / register for the scheme (active Phase 2 window, deadline October 4, 2026).
- **Secondary:** *know* — eligibility, subsidy amount, price, installment plan, and "how does it work" (definition + cost).

### SERP features observed
- **Featured snippet / FAQ-rich result:** the official portal (`bikes.punjab.gov.pk`) surfaces a FAQ block with extractable one-line answers (price, subsidy, down payment, financing period). Snippet format is **paragraph / Q&A list**.
- **People Also Ask** likely: price, subsidy, down payment, financing period, who pays interest/insurance/token tax, how many bikes, eligibility (public vs private), minimum age, driving document, guarantor income, mobile number ownership.
- **Sitelinks:** punjab.gov.pk and bikes.punjab.gov.pk show portal-level sitelinks.

### Top organic pages (distinct domains)
| # | URL | Domain | Title tag | Page type |
|---|---|---|---|---|
| 1 | https://bikes.punjab.gov.pk/ | bikes.punjab.gov.pk | CM Punjab's Green Initiative \| E-Bikes Scheme | Official portal (apply) |
| 2 | https://punjab.gov.pk/cm-ebikes-scheme | punjab.gov.pk | CM e-Bikes Scheme \| Punjab Portal | Official info page |
| 3 | https://e-bike.net.pk/ | e-bike.net.pk | CM Punjab E-Bike Scheme 2026 – Apply, Eligibility & Track | Independent guide |
| 4 | https://cmebikescheme.pk/ | cmebikescheme.pk | CM Punjab Electric Bike Scheme 2026 \| Apply Now | Independent guide |
| 5 | https://ebikescheme.com.pk/ | ebikescheme.com.pk | CM Punjab Electric Bike Scheme 2026 Apply Online For Free | Independent guide |
| 6 | https://ebike-scheme.pk/punjab-ebike-complete-guide-2026/ | ebike-scheme.pk | Punjab e-bike scheme 2026 — the complete guide | Independent guide |

> **Fetch notes:** `punjab.gov.pk` returned a Drupal install page (broken/JS) — no content usable; substituted `bikes.punjab.gov.pk` (official) as the authoritative source. `ebike-scheme.pk` returned a transport error. The four in-depth sources used for extraction are: **bikes.punjab.gov.pk** (official), **e-bike.net.pk**, **cmebikescheme.pk**, **ebikescheme.com.pk**.

### Query fan-out (autocomplete / related / PAA phrasing)
- What is the price of the e-bike under the scheme? → PKR 199,000
- How much capital subsidy is provided by the Government of Punjab (GoPb)? → PKR 90,000
- Is a down payment required? → No
- What is the financing period? → 3 years
- Who bears interest / insurance / registration / token-tax? → GoPb
- How many e-bikes are being provided? → 100,000
- Which students are eligible? → public AND private institutions
- Minimum age? → 16 years
- Driving document required? → license / learner's permit / juvenile permit
- Who can be a guarantor + minimum income? → parent/guardian, PKR 40,000/month
- In whose name must the mobile number be? → guarantor (or applicant with documented income)
- Last date to apply? → October 4, 2026
- Phase 1 vs Phase 2? / PAVE vs CM scheme? / teachers & employees?

---

## Step 2 — Head-entity research

### Central entity 1 — CM Punjab E-Bike Scheme
- **Canonical name:** CM Punjab E-Bike Scheme (also "CM Punjab Electric Bike Scheme", "CM Punjab's Green Initiative — E-Bikes Scheme for Students", Urdu: وزیراعلیٰ پنجاب الیکٹرک بائیک اسکیم).
- **Type:** GovernmentProgram (youth mobility / electric-vehicle subsidy program).
- **sameAs:** https://bikes.punjab.gov.pk/ (official portal). No dedicated Wikipedia article → treated as **unlinked entity** (no Wikidata ID); portal is the canonical source.
- **Core attributes:**
  - Launched by Chief Minister **Maryam Nawaz Sharif** (CM Youth Initiative).
  - Delivered by **Transport & Mass Transit Department**, Government of Punjab.
  - Financing partner: **Bank of Punjab (BOP)**.
  - E-balloting: **Punjab Information Technology Board (PITB)**.
  - Phase 2: **100,000 electric scooties**, price **PKR 199,000**, capital subsidy **Rs 90,000**, **0% interest**, **3-year** financing, **no down payment**, ~**Rs 3,000/month**, insurance/registration/token-tax paid by GoPb.
  - Apply window deadline: **October 4, 2026**.

### Central entity 2 — Maryam Nawaz Sharif
- **Type:** Person (politician).
- **sameAs:** https://en.wikipedia.org/wiki/Maryam_Nawaz
- **Attributes:** 19th Chief Minister of Punjab (assumed office 26 February 2024); first woman CM of Punjab; launched the CM Youth Initiative / E-Bikes Scheme.

### Central entity 3 — Bank of Punjab
- **Type:** Organization (bank). Financing partner. sameAs: https://en.wikipedia.org/wiki/Bank_of_Punjab (unverified — flagged; no direct fetch).

### Related organizations
- **Punjab Information Technology Board (PITB)** — sameAs https://pitb.gov.pk/ (e-balloting + portal).
- **Transport & Mass Transit Department** — sameAs https://transport.punjab.gov.pk/ (scheme owner).

---

## Step 3 — Title + metadata set

- **Title tag:** CM Punjab Electric Bike Scheme 2026 – Apply Online, Eligibility & Price (64 chars)
- **Alternate title:** CM Punjab Electric Bike Scheme: 100,000 Scooties, Rs 90,000 Subsidy (flag: angle emphasises numbers)
- **H1:** CM Punjab Electric Bike Scheme 2026 – Apply Online, Eligibility & Price
- **Meta description (~150 chars):** "The CM Punjab Electric Bike Scheme gives 100,000 students electric scooties at PKR 199,000 with a Rs 90,000 subsidy and ~Rs 3,000/month installments. Apply before October 4, 2026."
- **URL slug:** cm-punjab-electric-bike-scheme
- **OG title/description:** mirror title + meta description.

---

## Step 4 — Competitor extraction (headings + content captured)

### A. bikes.punjab.gov.pk (OFFICIAL — Phase 2, fetched in full)
Headings/objects: Phase 2 banner; "Moving Punjab Forward" (100,000 E-Bikes; Rs 90,000 subsidy; 0% interest; 3 years financing, no down payment; insurance/registration/token tax by GoPb); "Who Can Apply" (bullets); "Application Process" (5 steps); "Eligibility Criteria" (bilingual) with sub-criteria (Bonafide student; Public or Private institution; Proof of student status; Minimum age 16; Driving license; Valid identification CNIC/B-Form/CRC; Latest paid fee slip; Guarantor; Verifiable source of income; Bank statement; Registered mobile number; Minimum income PKR 40,000); "Technical Specifications" (Make 2026, Battery 72V 30Ah, Max speed 50–55 km/h, Motor 1000W, Battery type LiFePO4, Digital display, 12 tube controller, LED headlamp, Hydraulic suspension, BLDC rear hub motor); "FAQs" (20+ verbatim questions — see below); Helpline 042-99212260; support@bikes.punjab.gov.pk; partners Transport Dept + PITB + Bank of Punjab.

**Verbatim FAQ (official):**
- What is the price of the e-bike under the scheme? → PKR 199,000/-
- How much capital subsidy is provided by the Government of Punjab (GoPb)? → PKR 90,000/-
- Is a down payment required for the e-bike? → No down payment is required.
- What is the financing period for the e-bike? → 3 years.
- Who will bear the interest cost of the financing? → Government of Punjab (GoPb).
- Who will bear the insurance cost of the e-bike? → Government of Punjab (GoPb).
- Who will bear the registration and token-tax costs? → Government of Punjab (GoPb).
- How many e-bikes are being provided under the scheme? → 100,000 e-bikes.
- Which students are eligible based on their educational institution? → Students of both public and private educational institutions.
- What is the minimum age requirement? → 16 years.
- What type of driving document must the student have? → A valid driving license, learner's permit, or juvenile driving permit.
- Who can act as a guarantor? → Parent or legal guardian with valid proof of income of at least PKR 40,000.
- In whose name must the mobile number be registered? → In the name of the guarantor, or the applicant if the student has a documented source of income.
- What identification document must the guarantor have? → A valid CNIC.
- Can a student from a private educational institution apply? → Yes.
- Can a student apply without making a down payment? → Yes.
- What if I'm 16 and want my juvenile license made? → Visit nearest Sahulat Center with guardian.

### B. e-bike.net.pk (independent — fetched in full, 47,918 bytes)
Headings: Scheme Snapshot ("at a glance"); "Eligibility — Four Applicant Categories" (Students; Female Students — Scooty; Government Teachers — PTF; Government Employees); "Phase 1 vs Phase 2 vs Phase 3 — What Changed"; "How to Apply" (7 steps); "Required Documents Checklist" (Students & Female; Teachers & Employees); status checker; EMI calculator; bike models; "PAVE vs CM"; "Scam Alert"; FAQs.
Key data: 36 districts (Phase 2 onward); 20k+ Phase-1 bikes; Rs 2.6B govt subsidy (Phase 1); 0% markup; Bank of Punjab financing; PITB e-balloting; students portal bikes.punjab.gov.pk; teachers portal ptf.punjab.gov.pk; Phase 1 = 5 cities (Lahore, Faisalabad, Multan, Rawalpindi, Bahawalpur), ~20,000 bikes, degree college/university students; Phase 2 = all 36 districts + scooties for female + teachers + employees; Phase 3 announced. Students: "Age 18+, HEC-recognized degree college/university" (NOTE: conflicts with official "16 years" — flag). PESS number for teachers. PAVE = federal EV subsidy (bikes, rickshaws, loaders) at pave.gov.pk.

### C. cmebikescheme.pk (independent — fetched, truncated at ~23KB; key sections captured)
Headings: "What is the CM E-Bike Scheme?"; "Published Totals / Verify by phase" (Rs 90,000 subsidy; 0%; 3 years; no down payment; insurance/registration/token tax by GoPb); "Who Can Apply? Your Journey Starts Here" (regular student govt/private; min age 16; valid learner's permit/license — no exemption for women; do not already own registered vehicle — confirm; guarantor valid CNIC; out-of-Punjab students OK if campus physically in eligible Punjab city); "Delivered with" (Bank of Punjab — financing; PITB — e-balloting; Punjab HEC — student verification; Transport Dept — registration); "A Simple Way To Apply" (5 steps — first come first serve policy noted); "Technical Specifications" (same as official); "How to Apply" step list.
Additional data: Phase II launched September 2026; source review 16 Sept 2026; Radio Pakistan Phase II announcement cited; warns 100,000 vs 125,000 totals are different measures (don't conflate).

### D. ebikescheme.com.pk (independent — fetched in full)
Headings: "Latest E Bike Scheme 2026 Update"; "CM Punjab E-Bike Scheme 2026"; "E Bike Schemes in Pakistan – Quick Comparison" (CM Punjab vs PM PAVE table); "What Is the Government E Bike Scheme?"; "CM Punjab E-Bike Scheme 2026" (subsidy/installment plan); "Special Support for Female Students"; "E-Bikes for Punjab Government Employees"; "CM Punjab E-Bike Scheme 2025 vs 2026"; "Electric Bike or Petrol Bike?"; "Who Can Apply"; "E-Bike Support Options at a Glance"; "E Bike Scheme Pakistan Apply Online 2026" (10 steps); "Documents Required"; "Last Date"; "E-Bike Catalogue and Price Guide" (OKLA, Jolta, Vlektra, E-Turbo, Yadea); "Subsidy, Down Payment and Monthly Installments"; "Balloting Results"; "From the Earlier Rollout"; "What Happens After Selection?"; "Common Registration Problems"; "Official Portals, Helplines and Scam Warning".
Key (older, July 2026) figures: 100,000 e-bikes; **Rs 70,000 subsidy**; **Rs 14,000 down payment (male)**; **Rs 2,100/month**; female down payment + registration paid by govt. Earlier program: 20,000 bikes = 19,000 petrol + 1,000 electric; interest-free; max 2 years. PAVE: 269,161 applications, 40,000 two-wheelers + 1,000 three-wheelers allocated (Oct 1 2025 ballot); Rs 50,000 (bank leasing) / up to Rs 80,000 (self-finance). Warns `ptfpunjabgov.com` is NOT a govt domain.

---

## Step 5 — Entity/term extraction (per competitor, by heading) — consolidated

(Section tables collapsed into the ledger in Step 6. Numbers/stats and NLP context captured per heading.)

Key recurring numbers/stats: PKR 199,000; Rs 90,000; Rs 3,000/month; 3 years; 0%; 100,000; 36 districts; 16 years; PKR 40,000; 5 cities; 20,000 bikes; 72V 30Ah; 1000W; 50–55 km/h; October 4 2026; 042-99212260; Rs 70,000; Rs 14,000; Rs 2,100; 19,000 petrol + 1,000 electric; 269,161 PAVE applications; 40,000 two-wheelers; Rs 50,000/Rs 80,000 (PAVE).

---

## Step 6 — Entity ledger + tiering

See `entities.json`. Summary:

**Tier 1 (core):** CM Punjab E-Bike Scheme; Maryam Nawaz Sharif; Bank of Punjab; PITB; Transport & Mass Transit Dept; Rs 90,000 capital subsidy; PKR 199,000 price; 100,000 scooties; ~Rs 3,000 monthly / 3-year financing; bikes.punjab.gov.pk; students (beneficiaries).

**Tier 2 (supporting):** 0% interest; no down payment; min age 16; guarantor (parent/guardian); PKR 40,000 income; CNIC/B-Form/CRC; driving license/learner/juvenile permit; public & private institutions; latest paid fee slip; free helmet & safety rods; insurance/registration/token tax (GoPb); Phase 1 (5 cities, 20,000 bikes); Phase 2 (36 districts); female scooty quota; teachers (PTF, PESS number); government employees; PAVE (federal); technical specs (72V 30Ah, 1000W, LiFePO4, 50–55 km/h, BLDC hub motor); helpline 042-99212260; last date Oct 4 2026; e-balloting; Application ID.

**Tier 3 (optional):** Sahulat Center (juvenile license); federally-chartered-institutes exclusion; scooty colours (Midnight Black, Sakura Pink); earlier figures Rs 70,000 / Rs 14,000 / Rs 2,100; PAVE AJK/GB coverage; catalogue brands (OKLA/Jolta/Vlektra/Yadea).

### Relationships (triples)
- CM Punjab E-Bike Scheme —launched by→ Maryam Nawaz Sharif
- CM Punjab E-Bike Scheme —administered by→ Transport & Mass Transit Department
- Scheme —financed by→ Bank of Punjab
- Selection —run by→ PITB (computerized e-balloting)
- GoPb —subsidizes→ Rs 90,000 per e-bike
- e-bike —priced at→ PKR 199,000
- applicant —pays→ ~Rs 3,000/month over 3 years (0% interest)
- guarantor —must have→ min PKR 40,000 monthly income + valid CNIC
- student —must be→ ≥16 years + valid license/permit + bonafide enrollment
- apply —via→ bikes.punjab.gov.pk (deadline October 4, 2026)
- Phase 2 —covers→ all 36 districts
- PAVE —is→ separate federal EV scheme (pave.gov.pk)

### Heading keyword set
- **Focus:** CM Punjab Electric Bike Scheme (+ CM Punjab E-Bike Scheme, Punjab electric bike scheme, Maryam Nawaz electric bike scheme)
- **Secondary/LSI:** apply online; eligibility; price PKR 199,000; Rs 90,000 subsidy; installment Rs 3,000/month; guarantor; documents; balloting/status; specs; Phase 1 vs Phase 2; PAVE; scam/helpline; last date October 4 2026.

### Dedupe log
- "CM Punjab E-Bike Scheme" / "CM Punjab Electric Bike Scheme" / "CM Punjab's Green Initiative E-Bikes Scheme" → one canonical (aliases).
- Rs 70,000 / Rs 14,000 / Rs 2,100 (older figures) → parked under "earlier-announced figures", used only in the dated "what changed" section, NOT the current cost facts (which are Rs 90,000 / Rs 3,000).
- "125,000 electric bikes" (punjab.gov.pk snippet) vs "100,000" → flagged as conflicting totals; 100,000 used (official portal), 125,000 noted as a separately-announced figure not to conflate.

---

## Step 7 — Information-gain pass

**What competitors omit / get wrong / don't update:**
1. **Figure drift:** several pages (ebikescheme.com.pk) still quote the *July 2026* package — Rs 70,000 subsidy, Rs 14,000 down payment, Rs 2,100/month — while the **live official Phase 2 portal** now lists **Rs 90,000 subsidy, PKR 199,000 price, ~Rs 3,000/month, no down payment**. This is the single biggest cause of reader confusion.
2. **Age rule:** e-bike.net.pk says "18+" while the official portal says **16 years** minimum. The official 16-year figure is authoritative for Phase 2.
3. **Federally-chartered-institute exclusion** is only on the official portal (a footnote), missed by most guides.
4. **Guarantor minimum income (PKR 40,000/month) + bank statement + SIM-ownership** detail is on the official portal but under-explained in independent guides.
5. **100,000 vs 125,000** totals conflated across sources.

**Fan-out/PAA question none answer cleanly:** "How does the Punjab scheme differ from the federal PAVE scheme, and can I apply to both?" — most guides mention PAVE only in passing.

**Original elements committed (2):**
1. A clearly-dated **"What changed in 2026" table** reconciling the July vs September figures (Rs 70,000→Rs 90,000 subsidy; Rs 2,100→Rs 3,000/month; down payment removed), so readers stop trusting stale numbers.
2. A **CM Punjab vs PM PAVE comparison table** (coverage, beneficiaries, subsidy, portal, selection method, current status), answering the cross-scheme question head-on.

---

## Step 8 — Heading architecture (heading + keyword + question map)

| Lvl | Heading | Owns (focus/LSI) | Answers user question | Carries entities/rels |
|---|---|---|---|---|
| H1 | CM Punjab Electric Bike Scheme 2026 – Apply Online, Eligibility & Price | focus | — | scheme, subsidy, apply |
| — | Direct-answer block (48 w) | — | what is it + key numbers | scheme, 100,000, Rs 90,000, PKR 199,000 |
| H2 | What Is the CM Punjab Electric Bike Scheme? | "what is" | definition | Maryam Nawaz, Transport Dept, BOP, PITB |
| H2 | What Is the Price, Subsidy and Installment Plan in 2026? | price / subsidy / installment | cost | PKR 199,000, Rs 90,000, Rs 3,000, 3 yrs, 0% |
| H2 | Who Is Eligible for the CM Punjab Electric Bike Scheme? | eligibility | who qualifies | students, 16 yrs, license, public/private |
| H2 | What Are the Guarantor and Income Requirements? | guarantor / income | guarantor rules | guarantor, PKR 40,000, CNIC, bank statement, SIM |
| H2 | What Documents Do I Need to Apply? | documents | paperwork | CNIC/B-Form/CRC, student card, fee slip, license |
| H2 | How to Apply Online at bikes.punjab.gov.pk (Step by Step) | how to apply (focus) | procedure | portal, OTP, Application ID, e-balloting |
| H2 | How to Check Application Status and Balloting Results | status / balloting | tracking | Application ID, CNIC, SMS, BOP verification |
| H2 | CM Punjab Electric Scooty: Price, Specs and Colours | specs / scooty | what you get | 72V 30Ah, 1000W, LiFePO4, 50–55 km/h, colours |
| H2 | Phase 1 vs Phase 2: What Changed in 2026? | phase 1 / phase 2 (info-gain) | what changed | 5 cities, 20,000, 36 districts, 100,000, subsidy |
| H2 | CM Punjab vs PM PAVE Scheme: What's the Difference? | PAVE (info-gain) | cross-scheme | PAVE, pave.gov.pk, Rs 50,000/80,000 |
| H2 | Official Portals, Helpline and Scam Alerts | scam / helpline (safety) | official channels | 042-99212260, support@, .gov.pk |
| H2 | Frequently Asked Questions | — | FAQ (last) | all |

---

## Step 9 — Body notes
- Written per H3 against the tier lists above; QUORA order (answer → value → proof → takeaway) held per section.
- Date-stamped volatile facts inline ("As of the Phase 2 window closing October 4, 2026, …").
- Tier-1/2 bolding applied in `draft.annotated.md` only.

## Step 10 — FAQ source map
Official portal FAQ (verbatim) → 1,2,3,4,5,6,7,8,9,14; PAA/fan-out → 10,11,12,15; entity gaps → 13 (PAVE).

## Step 11 — Schema notes
Article + FAQPage + HowTo + BreadcrumbList + speakable; `about` = CM Punjab E-Bike Scheme, Maryam Nawaz Sharif, Bank of Punjab; `mentions` = PITB, Transport & Mass Transit Department. Author/publisher URLs left as `TODO:` placeholders (example.com) — user must replace before deploy.

## Internal-link / cannibalisation plan
- No target-site project folder found in this repo (only pipeline + one prior Rehmat Card draft). Flag: if a site publishes this, check for an existing "Punjab e-bike" or "Maryam Nawaz scheme" pillar page to avoid cannibalisation; link sub-topics (teacher scheme, PAVE) to dedicated articles if created.
