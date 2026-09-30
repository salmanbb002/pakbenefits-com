# Research Notes — Wazir-e-Azam Apna Ghar Program

**Primary keyword:** Wazir-e-Azam Apna Ghar Program
**Page type:** Blog post (informational + *do* intent — how to apply for the housing loan)
**Research date:** September 30, 2026
**SERP engine used:** SearXNG (surfaced `google cse` results) via `tools/serp.mjs`; DDG HTML for fan-out queries. Google API not configured; rendered Google IP-blocked (anti-bot). DDG + SearXNG returned clean URLs + snippets.

---

## Step 1 — Intent + SERP analysis

### Search intent
- **Dominant:** *do* — users want to apply / register for a subsidised home loan (first-time buyers).
- **Secondary:** *know* — loan amount, markup rate, eligibility, documents, participating banks.

### SERP features observed
- **Featured snippet / direct-answer opportunity:** paragraph (what the scheme is + 5% markup + Rs 10M cap).
- **People Also Ask (PAA) / fan-out:** loan amount, markup rate, eligibility, banks, interest-free?, how to apply, last date, NRP/Roshan track, Apna Ghar vs Apni Chhat Apna Ghar, NBFC loans, complaint.
- **Official/authority results:** apnaghar.gov.pk (portal), sbp.org.pk (SBP), mohw.gov.pk (Ministry of Housing & Works). Bank product pages dominate (Meezan, Alfalah, AL Habib, HBL, Faysal, UBL, MCB, Askari, Mobilink, NBP, Standard Chartered).
- **Knowledge panel:** State Bank of Pakistan; Shehbaz Sharif.

### Top organic pages (distinct domains)
| # | URL | Domain | Title tag | Page type |
|---|---|---|---|---|
| 1 | https://apnaghar.gov.pk/ | apnaghar.gov.pk | Wazir-e-Azam Apna Ghar Program | Official portal (apply) |
| 2 | https://www.sbp.org.pk/our-operations/housing-finance/wazir-e-azam-apna-ghar-program | sbp.org.pk | Wazir-e-Azam Apna Ghar Program (Housing Finance) | Regulator page |
| 3 | https://www.meezanbank.com/apna-ghar-program/ | meezanbank.com | Wazir-e-Azam Apna Ghar Program – Ghar Ho Tu Apna | Bank product (Islamic) |
| 4 | https://www.bankalfalah.com/personal-banking/loans/ghar-ho-tu-apna/ | bankalfalah.com | Wazir-e-Azam Apna Ghar Program – Ghar Ho Tu Apna | Bank product |
| 5 | https://www.bankalhabib.com/wazir-e-azam-apna-ghar-program | bankalhabib.com | Wazir e Azam Apna Ghar Program | Bank product |
| 6 | https://apnagharguide.pk/pm-apna-ghar-programme.html | apnagharguide.pk | PM Apna Ghar Programme 2026 — Complete Guide & Eligibility | Independent guide |
| 7 | https://sindhlegal.com/prime-minister-apna-ghar-program-2026-... | sindhlegal.com | Prime Minister Apna Ghar Program 2026 ... | Independent guide |
| 8 | https://www.sc.com/pk/saadiq/mera-ghar-mera-ashiana/ | sc.com | Wazir-e-Azam Apna Ghar Program-Ghar Ho Tu Apna | Bank product (Islamic) |

> **Fetch notes:** `apnaghar.gov.pk` (and its `/about` + `/contact`) is a JS-rendered SPA — only the page title returned, no body content usable via WebFetch. `sbp.org.pk` returned **403** (blocked). Substituted the four in-depth sources actually used for extraction: **Meezan Bank**, **Bank Alfalah**, **Bank AL Habib**, **apnagharguide.pk** (independent), plus **sindhlegal.com**, **Standard Chartered** and **silvercity.pk** for the NBFC angle. SBP's housing-finance program page confirmed via search snippet (complaint portal `complaint.sbp.org.pk`).

### Query fan-out (autocomplete / related / PAA phrasing)
- What is the Wazir-e-Azam Apna Ghar Program? → federal markup-subsidy housing finance scheme.
- Maximum loan amount? → Rs 10 million (Rs 1 crore).
- Markup rate? → 5% fixed for 10 years, then 1-year KIBOR + 3%.
- Is it interest-free? → No (5% markup); the interest-free one is Punjab ACAG.
- Down payment / equity? → 10% (90:10 financing-to-value).
- Tenure? → up to 20 years (25 for NRPs).
- Eligible property? → house ≤10 marla / 2,720 sq ft; flat ≤1,500 sq ft; no price cap.
- Who is eligible? → first-time homeowner, CNIC/NICOP/POC, clean credit, stable income.
- Which banks? → NBP, BOP, Meezan, HBL, ABL, UBL, MCB, Alfalah, AL Habib, Faysal, Askari, Mobilink, Standard Chartered + HBFC + NBFCs (July 2026).
- How to apply? → apnaghar.gov.pk.
- NBFCs allowed? → yes, from July 2026 (housing finance cos up to Rs 10M; microfinance cos up to Rs 5M).
- Apna Ghar vs Apni Chhat Apna Ghar? → federal vs Punjab (interest-free) comparison.
- Overseas Pakistanis? → Roshan Apna Ghar track (RDA).
- Complaint route? → SBP portal complaint.sbp.org.pk.

---

## Step 2 — Head-entity research

### Central entity 1 — Wazir-e-Azam Apna Ghar Program
- **Canonical name:** Wazir-e-Azam Apna Ghar Program ("Ghar Ho Tu Apna"; Urdu: وزیرِ اعظم اپنا گھر پروگرام). Also "PM Apna Ghar Program (PM-AGP)".
- **Type:** GovernmentProgram (markup subsidy + risk sharing scheme for affordable housing finance).
- **sameAs:** https://apnaghar.gov.pk/ (official portal). No dedicated Wikipedia article → **unlinked entity**; portal is canonical.
- **Core attributes:** launched 30 April 2026 by PM Muhammad Shehbaz Sharif; regulated by State Bank of Pakistan; rebrand/expansion of Mera Pakistan Mera Ghar (MPMG); Rs 3.2 trillion commitment; 500,000-unit target (50,000 in year 1); loans up to Rs 10M; 5% fixed markup first 10 years, then 1-year KIBOR + 3%; up to 20-year tenure; 90:10 FTV.

### Central entity 2 — State Bank of Pakistan (SBP)
- **Type:** GovernmentOrganization (central bank / regulator).
- **sameAs:** https://en.wikipedia.org/wiki/State_Bank_of_Pakistan
- **Attributes:** notifies the scheme (SH&SFD Circular No. 03 of 2025 per independent guide); runs the complaint portal (complaint.sbp.org.pk); supervises participating banks.

### Central entity 3 — Muhammad Shehbaz Sharif
- **Type:** Person (politician).
- **sameAs:** https://en.wikipedia.org/wiki/Shehbaz_Sharif
- **Attributes:** Prime Minister of Pakistan; launched the program 30 April 2026 at PM House, Islamabad; committed to monthly review of disbursement.

### Related organizations
- **Ministry of Housing & Works** — sameAs https://mohw.gov.pk/ (federal housing ministry; surfaced in SERP).
- **House Building Finance Company (HBFC)** — sameAs https://en.wikipedia.org/wiki/House_Building_Finance_Company (participating DFI).

---

## Step 3 — Title + metadata set

- **Title tag:** Wazir-e-Azam Apna Ghar Program 2026 – Loans, Eligibility & How to Apply (67 chars)
- **Alternate title:** Wazir-e-Azam Apna Ghar Program: Rs 10M Home Loans at 5% Markup (flag: numbers-led angle)
- **H1:** Wazir-e-Azam Apna Ghar Program 2026 – Loans, Eligibility & How to Apply
- **Meta description (~150 chars):** "The Wazir-e-Azam Apna Ghar Program gives first-time buyers home loans up to Rs 10 million at 5% markup for the first 10 years. Check eligibility and apply at apnaghar.gov.pk."
- **URL slug:** wazir-e-azam-apna-ghar-program
- **OG title/description:** mirror title + meta description.

---

## Step 4 — Competitor extraction (headings + content captured)

### A. Meezan Bank (meezanbank.com — Islamic, fetched in full; "Last Updated August 4, 2026")
Headings/objects: "Subsidized Islamic Housing Finance Scheme"; Product Features & Benefits; Basic Eligibility Criteria; Application Form (Green/Pink/Blue); Calculator; Underlying Shariah Mode (Diminishing Musharakah); Easy Buyer (purchase) / Easy Builder (construction Type 1A on owned land, Type 1B purchase land + build); Processing Charges; Key Qualification Criteria; contact reps.
Key data: Max financing **up to PKR 10 million**; customer contribution **10% of property value**; rental rate **5% first 10 years, then KIBOR+3%**; tenure **max 20 years**; house ≤10 Marla/2720 sq ft, flat ≤1500 sq ft; **no cap on property price**; citizenship = resident CNIC + NRP NICOP/POC; **first-time homeowner**; mortgage as collateral; age **18–65** (65 at maturity; salaried not >65 or retirement age, whichever earlier); co-applicant up to 70 (no income clubbing); **min gross income PKR 40,000/month**; salaried 6 months (permanent) / 1 year (contractual, +2 yrs total); self-employed 2 years in business; **up to 4 co-applicants, 100% income clubbing** (spouse/parents/adult children/siblings); processing charges NIL.

### B. Bank Alfalah (bankalfalah.com — fetched in full)
Headings/objects: "Markup Subsidy and Risk Sharing Scheme for Affordable Housing Finance"; Key Features; Eligibility Criteria; Scope; Size of Housing Unit; Customer/end-user fixed pricing; Bank Charges; Minimum Equity Requirement; Maximum Loan Size; Important Documents (designated branches, KFS, calculator).
Key data: first-time homeowners citizens holding CNICs/NICOPs; not owning any housing unit; scope = purchase house/flat, construction on owned plot, purchase plot + construction; house ≤10 Marla/2720 sq ft, flat ≤1500 sq ft; **subsidised flat 5% first 10 years then commercial rate**; no processing cost, no prepayment penalty; **10% minimum equity**; **max loan up to PKR 10 million**; no property value cap.

### C. Bank AL Habib (bankalhabib.com — fetched in full)
Headings/objects: "Ghar Ho Tu Apna"; Key Features (free life insurance, subsidised markup, up to PKR 10M, up to 20 years, easy docs, quick processing, no processing fee, no early-repayment charges, no cap on property price); Eligibility Criteria; Product Variants; Age; Financing Tenor; Early Repayment; Insurance; FTV Ratio; Processing Charges; FAQs; Documents Required (General/Salaried/SEB-SEP).
Key data: CNIC + NRP NICOP/POC; first-time homeowner; **min income PKR 25,000 applicant / PKR 20,000 co-applicant**; SEB/SEP **3 years** business proof; salaried **2 years**; govt salaried contractual 3 years; non-govt contractual 5 years; age **60 salaried / 65 SEB-SEP** at maturity; tenor up to 20 years (subsidy 10 years); no early-repayment charges; property insurance + **free life insurance**; **FTV 90:10**; no processing charges (documentation/stamping at actual). FAQ: markup **5% first 10 years, then 1Y KIBOR+3%**; financing **up to PKR 10M**.

### D. apnagharguide.pk (independent — fetched in full; "Updated 1 May 2026")
Headings/objects: Quick Facts table; What Is the PM Apna Ghar Programme?; Loan Slabs and Monthly Installments; What Does the Loan Cover?; Eligibility; Required Documents; How to Apply (7 steps); Phase 1 Targets; PM Apna Ghar vs Apni Chhat Apna Ghar (comparison table); Important Updates; Common Mistakes; FAQs (14); Scam warnings.
Key data: launched **30 April 2026** by PM Shehbaz Sharif; **Rs 3.2 trillion**; **500,000 units (50,000 year 1)**; slabs **Rs 2.5M/5M/7.5M/10M** with installments **Rs 16,499 / 32,997 / 49,497 / 65,996**; 5% 10 years then KIBOR+3%; 20 years; 90:10; house ≤10 marla/flat ≤1500 sq ft; all 4 provinces + Islamabad + GB + AJK; portal apnaghar.gov.pk; 15 working days; zero fee; SBP + Pakistan Housing Authority Foundation monitoring; **SH&SFD Circular No. 03 of 2025**; eligibility age 25–60/25–65; banks ABL, Alfalah, BOP, HBFC, Meezan, AL Habib (stale "four banks" framing); NRP via Roshan Apna Ghar; comparison with ACAG.

### E. sindhlegal.com (independent — fetched in full)
Headings: Program Overview; Loan Features (table); Eligible Housing Units; Participating Financial Institutions; Eligibility; Required Documents; Benefits; How to Apply; FAQs; Conclusion.
Key data: Rs 10M; fixed 5%; 20 years; 10% equity; 90:10; no processing fee; no prepayment penalty; houses ≤10 marla; flats ≤1500 sq ft; participating = commercial banks, Islamic banks, microfinance banks, HBFCL.

### F. Standard Chartered Saadiq (sc.com — Islamic, fetched in full)
Key data: 5% first 10 years; up to PKR 10M; 90% financing; **1Y KIBOR+300 bps after 10 years**; house ≤10 Marla/2720 sq ft, flat ≤1500 sq ft; no price cap; Diminishing Musharakah; income PKR 50,000; cities Karachi/Lahore/Islamabad-Rawalpindi; NRPs in select countries.

### G. silvercity.pk (NBFC angle — fetched)
Key data: **July 2026 — NBFCs allowed**; non-bank housing finance & investment finance cos up to Rs 10M; **microfinance cos up to Rs 5M**; banks include NBP, BOP, Meezan, HBL, Allied, UBL, MCB, HBFC.

---

## Step 5 — Entity/term extraction (per competitor, by heading) — consolidated

(Section tables collapsed into the ledger in Step 6. Numbers/stats and NLP context captured per heading.)

Key recurring numbers/stats: Rs 10M; 5%; 20 years; 90:10; 10% equity; 10 marla; 2720 sq ft; 1500 sq ft; Rs 3.2 trillion; 500,000; 50,000; Rs 2.5M/5M/7.5M/10M; Rs 16,499/32,997/49,497/65,996; KIBOR+3%; 15 working days; PKR 25,000/40,000/50,000 income; 30 April 2026; 107,000 applications; July 2026 (NBFC).

---

## Step 6 — Entity ledger + tiering

See `entities.json`. Summary:

**Tier 1 (core):** Wazir-e-Azam Apna Ghar Program; State Bank of Pakistan (SBP); Muhammad Shehbaz Sharif; Rs 10M maximum loan; 5% fixed markup; apnaghar.gov.pk; first-time homeowner; 20-year tenure; 90:10 FTV (10% equity); markup subsidy + risk sharing scheme.

**Tier 2 (supporting):** loan slabs (2.5M/5M/7.5M/10M); 1-year KIBOR+3%; Rs 3.2 trillion; 500,000 units; 10 marla/2720 sq ft; 1500 sq ft flat; CNIC/NICOP/POC; participating banks; HBFC; NBFC expansion (July 2026); Diminishing Musharakah; Roshan Apna Ghar (NRP); Apni Chhat Apna Ghar (ACAG); Mera Pakistan Mera Ghar (MPMG); no processing fee / no prepayment penalty; 15 working days; SBP complaint portal; min income (25k–50k); age (18–65).

**Tier 3 (optional):** property & free life insurance; SH&SFD Circular 03/2025; Apni Zameen Apna Ghar (AZAG); 107,000+ applications; 0800-09100 (Punjab ACAG helpline — NOT the federal scheme's).

### Relationships (triples)
- Wazir-e-Azam Apna Ghar Program —launched by→ Muhammad Shehbaz Sharif (30 April 2026)
- Scheme —regulated by→ State Bank of Pakistan
- Scheme —succeeds/rebrands→ Mera Pakistan Mera Ghar (MPMG)
- Government —subsidises→ 5% markup for first 10 years
- borrower —pays→ 1-year KIBOR + 3% after year 10
- applicant —borrows up to→ Rs 10 million
- bank —finances→ 90% of property value (FTV 90:10)
- applicant —contributes→ 10% equity
- eligible unit —limited to→ house ≤10 marla / flat ≤1500 sq ft
- applicant —must be→ first-time homeowner (CNIC/NICOP/POC)
- apply —via→ apnaghar.gov.pk
- Islamic banks —use→ Diminishing Musharakah
- NRPs —apply via→ Roshan Apna Ghar (Roshan Digital Account)
- NBFCs —allowed from→ July 2026 (up to Rs 10M / microfinance Rs 5M)
- complaints —go to→ SBP portal complaint.sbp.org.pk

### Heading keyword set
- **Focus:** Wazir-e-Azam Apna Ghar Program (+ PM Apna Ghar Program, Apna Ghar Scheme, Ghar Ho Tu Apna, Prime Minister Apna Ghar).
- **Secondary/LSI:** loan amount Rs 10M; markup 5%; eligibility; documents; how to apply; participating banks; NBFC; application status; complaint; Apna Ghar vs Apni Chhat Apna Ghar; what changed 2026; Roshan Apna Ghar (NRP); scam/portal.

### Dedupe log
- "Wazir-e-Azam Apna Ghar Program" / "PM Apna Ghar Program" / "PM-AGP" / "Ghar Ho Tu Apna" / "Mera Pakistan Mera Ghar" → canonical + predecessor (MPMG kept as separate Tier-2 entity for the "what changed" section, not merged — it's the superseded name, not a synonym).
- "Mera Ghar Mera Ashiana" / "MGMA" → merged into MPMG predecessor entity.
- 0800-09100 → **parked** (this is the Punjab ACAG helpline, not the federal Apna Ghar; including it would send readers to the wrong scheme). Logged, not used in body.
- Apni Zameen Apna Ghar (AZAG) → parked as Tier-3 context (Punjab free-land scheme, distinct).

---

## Step 7 — Information-gain pass

**What competitors omit / get wrong / don't update:**
1. **Stale bank lists:** apnagharguide (May 2026) still frames it as "four banks onboard", but the SERP shows 12+ banks + HBFC, plus **NBFCs and microfinance companies since July 2026**. Most early guides miss the NBFC expansion entirely.
2. **Income/age drift:** the minimum income is not one national figure — it is bank-set (PKR 25,000 AL Habib / 40,000 Meezan / 50,000 Standard Chartered). Similarly age is 18–65 (Meezan) vs 25–60/65 (guides). Competitors either quote one bank's number as universal or omit it.
3. **"Interest-free" confusion:** several readers conflate the 5%-markup federal scheme with the 0% Punjab ACAG scheme. Almost no guide states the difference crisply up front.
4. **Plot-only exclusion:** the rule that a plot-only purchase (no construction) is not covered is buried or absent in most bank pages.

**Fan-out/PAA question none answer cleanly:** "Is the PM Apna Ghar Program the same as Apni Chhat Apna Ghar, and can I apply to both?" — most pages mention the Punjab scheme only in passing.

**Original elements committed (2):**
1. A **"What changed in 2026" timeline table** (Sept 2025 revision → 30 April 2026 relaunch → July 2026 NBFC expansion), so readers stop trusting pre-launch "four banks / older limits" articles.
2. A **federal vs Punjab comparison table** (Apna Ghar vs Apni Chhat Apna Ghar) answering the cross-scheme question head-on, including the "not interest-free" clarification.

---

## Step 8 — Heading architecture (heading + keyword + question map)

| Lvl | Heading | Owns (focus/LSI) | Answers user question | Carries entities/rels |
|---|---|---|---|---|
| H1 | Wazir-e-Azam Apna Ghar Program 2026 – Loans, Eligibility & How to Apply | focus | — | scheme, loan, apply |
| — | Direct-answer block (46 w) | — | what is it + key numbers | scheme, 5%, Rs 10M, 20 yrs, portal |
| H2 | What Is the Wazir-e-Azam Apna Ghar Program? | what is | definition | Shehbaz Sharif, SBP, MPMG |
| H2 | How Much Can I Borrow, and What Is the Markup? | loan amount / markup | cost | Rs 10M, slabs, 5%, KIBOR+3%, 90:10 |
| H2 | Who Is Eligible for the Apna Ghar Program? | eligibility | who qualifies | first-time homeowner, CNIC, income, age |
| H2 | What Documents Do I Need? | documents | paperwork | CNIC, income proof, property docs |
| H2 | How to Apply Online at apnaghar.gov.pk (Step by Step) | how to apply (core do) | procedure | portal, OTP, slab, Tracking ID |
| H2 | Which Banks and NBFCs Offer the Apna Ghar Loan? | banks / NBFC (info-gain) | channels | NBP, BOP, Meezan, HBFC, NBFC, Musharakah |
| H2 | How to Check Application Status and File a Complaint | status / complaint | tracking | Tracking ID, complaint.sbp.org.pk |
| H2 | Apna Ghar vs Apni Chhat Apna Ghar: What's the Difference? | ACAG (info-gain) | cross-scheme | ACAG, Maryam Nawaz, 0% vs 5% |
| H2 | What Changed in 2026: Timeline and Expansion | timeline (info-gain) | what changed | Sept 2025, April 2026, July 2026 |
| H2 | Official Portal, Scam Alerts and Safety | scam / portal (safety) | official channels | apnaghar.gov.pk, .gov.pk, SBP |
| H2 | Frequently Asked Questions | — | FAQ (last) | all |

---

## Step 9 — Body notes
- Written per H3 against the tier lists; QUORA order (answer → value → proof → takeaway) held per section.
- Date-stamped volatile facts inline ("from July 2026", "launched 30 April 2026").
- Tier-1/2 bolding applied in `draft.annotated.md` only.

## Step 10 — FAQ source map
apnagharguide FAQ (verbatim themes) → 1,2,3,4,5,6,7,8,9,10,11,12; bank FAQs (Meezan/AL Habib/Standard Chartered) → 2,3,5,7,8; fan-out/PAA gaps → 4,9,12.

## Step 11 — Schema notes
Article + FAQPage + HowTo + BreadcrumbList + speakable; `about` = Wazir-e-Azam Apna Ghar Program, State Bank of Pakistan, Muhammad Shehbaz Sharif; `mentions` = HBFC, Apni Chhat Apna Ghar, Roshan Apna Ghar. Author/publisher URLs left as `TODO:` placeholders (example.com) — user must replace before deploy.

## Internal-link / cannibalisation plan
- No target-site project folder found (this repo's `content-drafts/` holds prior runs only). If a site publishes this, check for an existing "PM housing scheme" / "Apna Ghar" pillar to avoid cannibalisation; link sub-topics (Roshan Apna Ghar / NRP track; Apni Chhat Apna Ghar; loan calculator) to dedicated articles if created. Federal (this) vs Punjab (ACAG) must not share one URL.
