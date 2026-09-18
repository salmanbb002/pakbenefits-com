# Research notes — "land record punjab online check by cnic"

## Step 1 — Intent + SERP analysis

**Primary keyword:** land record punjab online check by cnic (8.3K/mo per the audit workbook's Master_Keywords tab, Ahrefs-verified)

**Search intent:** Dominant = *do* (procedural — how to actually run the check). Secondary = *know-simple* (what PLRA/Fard/ROD portal actually are, since the space has real naming confusion). Not *buy* — none of the legitimate flow involves payment beyond a small optional certified-copy fee.

**Top pages observed (via live WebSearch, September 2026):**

| # | Domain | URL | Title | Type |
|---|---|---|---|---|
| 1 | acag.org.pk | /punjab-land-records-online-check/ | Punjab Land Records Online Check | Blog/guide |
| 2 | gtss.org.pk | /land-record-punjab-online-check-by-cnic-2025/ | Land Record Punjab Online Check By CNIC 2026 – Full Guide | Blog/guide (fetch blocked, see note) |
| 3 | gtss.com.pk | /land-record-punjab-online-check-by-cnic-2025/ | Land Record Punjab Online Check By CNIC 2025 – Full Guide | Near-duplicate of #2, different TLD, not fetched |
| 4 | governmentschemes.pk | /land-record-punjab-online-check-by-cnic/ | Land Record Punjab Online Check By CNIC \| Property Check | Blog/guide |
| 5 | identityservices.pk | /punjab-land-records-authority-online/ | Punjab Land Records Online – PLRA Services & CNIC Verification | Blog/guide |
| 6 | landrecordpunjab.com | /punjab-online-fard-check/ | Online Fard Check Punjab – Instantly Access Land Records | Commercial (paid WhatsApp Fard-delivery service with informational content) |
| 7 | manahilestate.com | /reels/... | How to Check Property Details Using CNIC in Punjab \| PLRA Guide 2026 | Real-estate agency, thin/reel-style, not fetched |
| 8 | asrlawassociates.com | /how-to-check-land-record... | How to Check Land Record & Property Ownership Online in Punjab Pakistan 2026 | Law firm, not fetched (used the 4 above instead) |

**Fetch note (transparent, not silent):** gtss.org.pk returned HTTP 403 on WebFetch. Per the pipeline's fetch-failure rule, substituted the next-ranking distinct domain — **acag.org.pk** — rather than fabricating what the blocked page said. The 4 competitors actually analyzed in Step 4/5 are: **governmentschemes.pk, identityservices.pk, landrecordpunjab.com, acag.org.pk**.

**SERP features:** No featured-snippet/PAA block was directly visible through the search tool's rendering, but the competitor consensus strongly favors a **numbered step list** for the "how to check" section (all 4 competitors use one) and a **table** for fees/documents. Structure follows that signal.

**Query fan-out (from competitor titles, FAQ blocks, and related content):** "punjab land record online check", "PLRA online portal", "rod.pulse.gop.pk", "punjab zameen app", "fard e malkiat online", "jamabandi vs fard", "land record CNIC no record found", "overseas Pakistani land record check", "arazi record center near me", "mutation intiqaal online check".

## Step 2 — Head-entity research (non-competitor sources)

Central entities: **Punjab Land Records Authority (PLRA)** and the **Land Record Management Information System (LRMIS)**.

- **Wikipedia — Punjab Land Records Authority** (https://en.wikipedia.org/wiki/Punjab_Land_Records_Authority): canonical name Punjab Land Records Authority (PLRA), Urdu پنجاب اراضی ریکارڈ سینٹر, founded 2017 under the PLRA Act 2017, operates under administrative control of the **Board of Revenue, Punjab**, jurisdiction = Punjab, Pakistan. Wikipedia cites the official website as **plra.gop.pk**.
- **Live check of plra.gop.pk:** WebFetch returned `getaddrinfo ENOTFOUND` — this domain, the one Wikipedia cites, is **currently unreachable/dead**. Reported plainly rather than assumed working.
- **bor.punjab.gov.pk/lrmis** (Board of Revenue Punjab, official `.gov.pk` domain, fetched live): confirms LRMIS "Launched as LRMIS Project in 2006," evolved into PLRA after the "Promulgation of PLRA Act in 2017." States 2018-19 figures: 2,139,454 Fard copies issued, 956,435 mutations (Intiqaal) recorded, "One ARC in each Tehsil," express service 4:30–7 PM. **Explicitly names https://www.punjab-zameen.gov.pk/ as the official online gateway.**
- **punjab-zameen.gov.pk** (fetched live): confirms it presents itself as the PLRA portal; page content was too sparse to fully independently confirm every claimed feature (fard/mutation/CNIC search/registry search/OTP/overseas), so those specific feature claims are treated in the draft as "the portal is presented as offering..." rather than independently verified line items.

**sameAs / entity summary:**
- Punjab Land Records Authority — GovernmentOrganization — sameAs: https://en.wikipedia.org/wiki/Punjab_Land_Records_Authority
- Board of Revenue, Punjab — GovernmentOrganization — unlinked (no clean Wikidata match found this session)
- LRMIS (Land Record Management Information System) — GovernmentService/Project — unlinked

## Step 3 — Title + metadata

| Field | Value |
|---|---|
| **Title tag** | Punjab Land Record Online Check by CNIC: 2026 Steps |
| **H1** | How to Check Punjab Land Records Online by CNIC (2026) |
| **Meta description** | Check Punjab land records online by CNIC — the official portal, what a Fard actually shows, real fees, and what to do if no record appears. |
| **URL slug** | `punjab-land-record-check-guide` |
| **OG title / description** | Mirrors title + meta description |

Alternate title considered: "CNIC Se Zameen Ka Record Kaise Check Karein" (Urdu-forward) — held as a backup for a future Urdu-language workstream (flagged separately in the audit's Action_Plan item 15), not used here since the site's existing published articles are English.

## Step 4/5 — Competitor fetch + entity/term extraction

### Competitor 1 — governmentschemes.pk (published May 21, 2026)

Headings (own structure, kept as H3 labels regardless of their actual level): Key Takeaways / Green Property Certificate: How to Apply Online / What Is the Punjab Land Record Online Check System and How Does It Work? / How Can You Check Land Records in Punjab Online Using Your CNIC? / What Documents Can You Access Through the PLRA Online System? / What Fees Apply for Online Land Record Services? / How Can You Verify Property Ownership and Authenticity Online? / What Should You Do When Your CNIC Shows No Record Found? / How Can Overseas Pakistanis Access Land Records From Abroad? / Conclusion and Essential Recommendations

| term/entity | type | canonical form | kind |
|---|---|---|---|
| Punjab Land Records Act 2017 | Law | PLRA Act 2017 | entity |
| ROD portal | Product | rod.pulse.gop.pk (Record of Deeds portal) | entity |
| CNIC | Product/ID | CNIC | entity |
| OTP | Process | One-Time Password | term |
| Fard (Record of Rights) | Document | Fard | entity |
| Mutation | Process | Mutation (Intiqaal) | term |
| Sale deed | Document | Sale deed | term |
| Aks Shajra | Document | Aks Shajra (digital map) | entity |
| Green Property Certificate | Product | Green Property Certificate | entity |
| QR code verification | Process | QR code verification | term |
| PSID | Product | Person-Specific ID (payment slip) | term |
| Arazi Record Center | Place | Arazi Record Center (ARC) | entity |
| E-Khidmat Markaz | Place | E-Khidmat Markaz | entity |
| NICOP | Document | NICOP | entity |
| Overseas facilitation centers (UAE/UK/USA/Saudi) | Place | Overseas Pakistani facilitation centers | term |
| Power of attorney | Concept | Power of attorney | term |

Numbers/stats (shuffled, not source order): 42 million landowners, 36 districts, 100% rural / 85% urban coverage, 200+ Arazi Record Centers, PKR 500 single Fard, PKR 700 certified copy, PKR 600 sale deed, PKR 550 Aks Shajra, PKR 1000 Green Certificate, 10–20% bulk discount, PKR 5,000–30,000+ professional verification, 10-minute OTP validity, 7–14 days simple inheritance processing, 14–21 days sale-with-clear-title processing, Fard validity under 30 days old for official use.
Count: 20 entities/terms extracted, 15 stats.

**Fact-check flag:** these exact figures (42M landowners, 100%/85% coverage, PKR 5,000–30,000 verification fee, 2027 "future developments") appear on no other competitor and are not corroborated by the official `.gov.pk` source fetched in Step 2. Treated as **unverified** — not repeated as fact in the draft.

### Competitor 2 — identityservices.pk (no visible publish date; © 2026 footer)

Headings: What Is the Punjab Land Records Authority (PLRA)? / Why the Punjab Land Records Authority Was Created? / What Digitization of Land Records Means? / Main Goals of the Punjab Land Records Authority / Arazi Record Centers (ARCs) / Land Record Punjab Online Check by CNIC / How PLRA Has Made Life Easier for Citizens? / Support for Overseas Pakistanis / Vision of the Punjab Land Records Authority / Contact Information – Punjab Land Records Authority

| term/entity | type | canonical form | kind |
|---|---|---|---|
| Patwari system | Process | Patwari (manual record-keeper) system | entity |
| GIS technology | Product | Geographic Information System | term |
| Board of Revenue Punjab | Org | Board of Revenue, Punjab | entity |
| Arazi Record Center (ARC) | Place | Arazi Record Center | entity |
| Complaints Helpline | Contact | 111-22-22-77 | term |
| Head office (Lahore) | Place | 2-KM Main Multan Road, Lahore | term |

Numbers/stats: PLRA Act 2017, phone (042) 99330111, (042) 99330112, helpline 111-22-22-77, helpline hours Mon–Sat 8 AM–5 PM.
FAQ (verbatim): "What is PLRA?" / "What services does PLRA provide?" / "What are Arazi Record Centers?" / "Can land records be checked online in Punjab?" / "What replaced the patwari system?" / "When was PLRA established?"
Count: 6 entities/terms, 5 stats, 6 FAQ.

### Competitor 3 — landrecordpunjab.com (published July 7, 2025) — commercial WhatsApp Fard-delivery service

Headings: What is a Fard and Why Does It Matter? / Key Roles of Fard (4 subsections) / Land Record Punjab – Who We Are? / How Our Streamlined Online Fard Check Service Works? / The Kinds of Fards Offered by Land Record Punjab / Fard of Record / Fard Bay / Fard Badar / Extensive Service Coverage Throughout Punjab / Why People Trust Land Record Punjab? / Fard Meaning In Urdu / Are Jamabandi and Fard the same? / How to check online property by CNIC? / Final Thoughts

| term/entity | type | canonical form | kind |
|---|---|---|---|
| Fard Malkiat / Jamabandi | Document | Fard (ownership extract) | entity |
| Khewat number | Metric | Khewat number | term |
| Khatuni number | Metric | Khatuni number | term |
| Fard of Record | Document | Fard of Record | term |
| Fard Bay | Document | Fard Bay (sale-specific fard) | term |
| Fard Badar | Document | Fard Badar (correction fard) | term |
| Jamabandi | Document | Jamabandi (full revenue record) | entity |
| WhatsApp delivery | Process | WhatsApp-based fard request | term |

Numbers/stats: 20+ years company experience, delivery "within hours."
Count: 8 entities/terms, 2 stats. (Commercial promotional content parked — see dedupe log.)

### Competitor 4 — acag.org.pk (published November 8, 2025) — substituted for blocked gtss.org.pk

Headings: Punjab Land Records Online Check / What Is the ROD Portal? (Record of Deeds Portal) / Why Punjab Land Records Online Check Is Important / Required Information for Downloading Land Documents with CNIC / Step-by-Step Guide: How to Download Land Documents from the ROD Portal / What Documents Can You Download from the ROD Portal? / Districts Covered Under Punjab ROD Portal / Benefits of Checking Punjab Land Records Online / How Accurate Is the ROD Portal Data? / Common Issues While Downloading Land Documents Online / Tips for a Successful Punjab Land Record Download

| term/entity | type | canonical form | kind |
|---|---|---|---|
| ROD Portal | Product | rod.pulse.gop.pk | entity |
| Registered mobile number | Process | Mobile number linked to CNIC | term |
| Gift deed | Document | Gift deed | term |
| Partition deed | Document | Partition deed | term |
| Exchange deed | Document | Exchange deed | term |
| District/Tehsil selection | Process | District/Tehsil selection | term |

Numbers/stats: 36+ districts, 2–3 minutes per download, 24/7 availability.
FAQ (verbatim): "Can I download my Fard copy online using CNIC?" / "Is the Punjab ROD Portal free to use?" / "Can overseas Pakistanis check land records online?" / "What if my land record is not appearing on the portal?" / "Are downloaded land documents accepted by banks and courts?" / "Do I need a registered mobile number?" / "Can I check someone else's land record?"
Count: 6 entities/terms, 3 stats, 7 FAQ.

## Step 6 — Entity map + tiering

| Canonical | Type | Aliases | sameAs | Kind | Competitor count | In title/H2 | Tier |
|---|---|---|---|---|---|---|---|
| Punjab Land Records Authority (PLRA) | GovernmentOrganization | PLRA | en.wikipedia.org/wiki/Punjab_Land_Records_Authority | entity | 4 | yes | 1 |
| CNIC | Product/ID | Computerized National Identity Card | (unlinked) | entity | 4 | yes | 1 |
| Fard (Record of Rights) | Document | Fard-e-Malkiat, Fard | (unlinked) | entity | 4 | yes | 1 |
| OTP verification | Process | One-Time Password | (unlinked) | term | 3 | yes | 1 |
| Board of Revenue, Punjab | GovernmentOrganization | BOR Punjab | (unlinked) | entity | 3 | partial | 1 |
| Official land-record portal (punjab-zameen.gov.pk / ROD portal) | Product | Punjab Zameen, ROD portal, rod.pulse.gop.pk | (unlinked) | entity | 4 (named differently by each) | yes | 1 |
| Overseas Pakistani land-record access | Process | NICOP-based remote verification | (unlinked) | term | 3 | yes | 1 |
| Arazi Record Center (ARC) | Place | ARC | (unlinked) | entity | 2 | yes | 2 |
| Mutation (Intiqaal) | Process | Mutation | (unlinked) | term | 2 | partial | 2 |
| Jamabandi | Document | Jamabandi | (unlinked) | entity | 2 | yes | 2 |
| Fee for land-record documents | Concept | Fard fee, certified copy fee | — | term | 2 | yes | 2 |
| "No record found" troubleshooting | Concept | — | — | term | 2 | yes | 2 |
| Mobile number linked to CNIC | Process | — | — | term | 2 | no | 2 |
| PLRA Act 2017 | Law | — | (unlinked) | entity | 3 | no | 2 |
| Patwari system | Process | Manual record-keeping | (unlinked) | entity | 2 | no | 2 |
| Aks Shajra | Document | Digital map/shajra | (unlinked) | entity | 1 | yes | 3 |
| Green Property Certificate | Product | — | — | entity | 1 | yes | 3 |
| E-Khidmat Markaz | Place | — | (unlinked) | entity | 1 | no | 3 |
| Khewat/Khatuni number | Metric | — | — | term | 1 | no | 3 |
| Fard Bay / Fard Badar | Document | Transaction-specific fard types | — | term | 1 | no | 3 |
| PSID payment | Product | Payment Slip ID | — | term | 1 | no | 3 |
| QR code verification | Process | — | — | term | 1 | no | 3 |

**Relationships (backbone triples):**
1. PLRA —established under→ PLRA Act 2017
2. PLRA —operates under→ Board of Revenue, Punjab
3. PLRA / LRMIS —replaced→ the manual Patwari record system
4. LRMIS —launched as a project in→ 2006, formalized as PLRA in 2017
5. Land-record check —requires→ a valid CNIC and a mobile number linked to that CNIC
6. Land-record check —is verified via→ an OTP sent to the registered mobile number
7. Fard —is→ an extract proving current land ownership status, not the full revenue record
8. Jamabandi —differs from→ Fard (Jamabandi = the complete periodic revenue record; Fard = a specific-owner extract drawn from it)
9. Mutation (Intiqaal) —records→ a change of ownership from a sale, inheritance, or gift
10. Overseas Pakistanis —can verify ownership remotely using→ a NICOP or passport number, generally with OTP delivered to an accessible number
11. Arazi Record Centers —provide→ in-person Fard issuance, corrections, and dispute-related services, roughly one per Tehsil
12. A "no record found" result —is commonly caused by→ a CNIC not linked to the registered mobile number, a wrong district/tehsil selection, or a record not yet digitized
13. Board of Revenue Punjab —names→ punjab-zameen.gov.pk as the official online gateway (confirmed via the live `bor.punjab.gov.pk/lrmis` page)
14. The domain Wikipedia cites for PLRA (plra.gop.pk) —is→ currently unreachable, which is why multiple "official-looking" domains circulate for this same service
15. A land-record fee —is reported by secondary sources as→ a few hundred rupees for a basic Fard, not independently confirmed against an official fee notice this session
16. CNIC —is reused across→ BISP/Ehsaas/Taleemi Wazaif checks and Punjab land-record checks, but each is a separate government database (ties to the site's existing `/cnic-verification-guide/`)

**Section pools (tier-1/2 grouped by article section):**
- What it is / core entities: PLRA, Board of Revenue Punjab, PLRA Act 2017, Patwari system, LRMIS
- How to check (core "do" section): CNIC, OTP verification, official portal, mobile number linked to CNIC, district/tehsil selection
- What you get: Fard, Jamabandi, Mutation
- Overseas: Overseas Pakistani land-record access
- Fees: Fee for land-record documents
- Problems: "No record found" troubleshooting, Arazi Record Center (as the fallback route)
- Info-gain: official-portal clarity box; Fard vs Jamabandi vs Mutation table

**Heading keyword set:**
- (a) Focus keyword + close variants: "land record punjab online check by cnic", "check punjab land record online", "punjab land record CNIC check"
- (b) Secondary/LSI: "punjab land records authority (plra)", "fard online check", "jamabandi vs fard", "no record found cnic", "overseas pakistani land record check", "arazi record center"

**Dedupe log:**
- Removed: near-duplicate stat sets between governmentschemes.pk and generic "district count" claims (36 vs 36+) — kept the more conservative "36+ districts" phrasing since no source gave an exact, dated total.
- Parked (out of scope): landrecordpunjab.com's WhatsApp paid-delivery service, its "20+ years experience" claim, and its specific phone/email — this is one competitor's commercial offering, not a generic entity relevant to an independent informational guide, and repeating it would read as an unpaid ad for a specific vendor.
- Parked (unverifiable): governmentschemes.pk's 42-million-landowners figure, 100%/85% coverage split, PKR 5,000–30,000+ "professional verification" cost, and "2027 developments" — appear on no other source and aren't confirmed by the official `.gov.pk` page fetched in Step 2. Not used as fact anywhere in the draft.
- Parked (tier-3, used only where natural): Green Property Certificate, QR code verification, PSID, Khewat/Khatuni numbers, Aks Shajra, E-Khidmat Markaz.

**Sanity check against Step 1 intent:** Tier 1 correctly centers on the "do" task (CNIC → OTP → official portal → Fard) with "what is PLRA" as the necessary know-simple context, matching the dominant intent found in Step 1.

## Step 7 — Information-gain pass

**What all 4 competitors omit or get wrong:**
- None of the 4 acknowledges that the official domain Wikipedia itself cites for PLRA (`plra.gop.pk`) is currently dead. Each competitor just asserts its own preferred domain (ROD portal, generic "PLRA online," or Punjab Zameen) as if there's one obvious answer, which is exactly the kind of multi-domain confusion this site's existing Punjab Rozgar content has already handled well for readers.
- governmentschemes.pk publishes highly specific, unsourced statistics (42M landowners, 100%/85% coverage, PKR 5,000–30,000 "professional verification" fees) that no other competitor or the official BOR page corroborates — a reader has no way to know these are unverified.
- No competitor clearly separates Fard vs Jamabandi vs Mutation in one place for a first-time reader; landrecordpunjab.com gets closest but buries it under promotional content for its paid service.
- No competitor addresses the common real situation of land still recorded in a deceased relative's or another family member's name (i.e., not yet mutated) — readers checking "their" land by their own CNIC and finding nothing because it's still under an ancestor's name.

**Original elements this piece adds (commit: at least one — using two):**
1. **"Which official portal is real?" clarity box** — plainly states the domain confusion, cites the live Board of Revenue page that names `punjab-zameen.gov.pk` as the gateway, and notes `plra.gop.pk` (Wikipedia's own citation) is currently unreachable. No other competitor source does this.
2. **A short Fard vs Jamabandi vs Mutation comparison table** — consolidates a distinction competitors mention piecemeal (or not at all) into one clear reference block, plus a line addressing the "land still in a relative's name" case.

## Step 8 — Heading architecture (heading + keyword + question map)

| Level | Heading | Focus/LSI phrase | User question answered | Tier-1/2 concepts carried |
|---|---|---|---|---|
| H1 | How to Check Punjab Land Records Online by CNIC (2026) | land record punjab online check by cnic | — | PLRA, CNIC |
| — | Direct-answer block | — | What is the fastest way to check? | official portal, CNIC, OTP |
| H2 | What Is the Punjab Land Records Authority? | punjab land records authority (plra) | What is PLRA and why does it run this system? | PLRA, Board of Revenue Punjab, PLRA Act 2017, Patwari system |
| H2 | Which Official Portal Should You Actually Use? | official land record portal | Which of the several "official" sites is real? | official portal, plra.gop.pk dead-domain finding (info-gain #1) |
| H2 | How Do You Check Your Land Record Online by CNIC? | check punjab land record online by cnic | What are the actual steps? | CNIC, OTP verification, mobile number linked to CNIC, district/tehsil selection |
| H3 | What You'll Need Before You Start | — | (sub-step) | CNIC, mobile number |
| H2 | Fard, Jamabandi, and Mutation: What's the Difference? | fard online check | What do I actually receive, and is it the whole record? | Fard, Jamabandi, Mutation (info-gain #2 table) |
| H2 | Can Overseas Pakistanis Check Their Land Record? | overseas pakistani land record check | Can I do this from abroad? | Overseas Pakistani land-record access |
| H2 | What Does It Cost? | punjab land record fee | Is this free, and what if I need a certified copy? | Fee for land-record documents |
| H2 | What If Your CNIC Shows No Record Found? | no record found cnic land record | Why didn't anything show up? | "No record found" troubleshooting, Arazi Record Center |
| H2 | Frequently Asked Questions | — | (FAQ, Step 10) | — |

Hierarchy check: one H1, one H3 nested correctly under its H2, no skipped levels, each H2 targets a distinct phrase (no cannibalized headings), order follows the core-before-outer spine: what it is → which portal → how to do it → what you get → variation (overseas) → cost → problems → FAQ.

Direct-answer block target: paragraph-style, ~45 words, matching the "do" intent.

## Step 8e — Internal-link plan

Checked `~/July Projects/pakbenefits-com/src/data/content.ts` directly for real sibling slugs (not guessed):

- **`/farmer-support-card-guide/`** — already discusses land/tenancy record verification ("Land and tenancy records need separate verification" section) → link anchor "how land records are checked" pointing to this new guide, and this new guide should link back with anchor "Farmer Support Card eligibility" → `/farmer-support-card-guide/`.
- **`/punjab-schemes/`** — the Punjab schemes hub category (confirmed slug `punjab-schemes` in `content.ts`) → link anchor "Punjab provincial schemes" → `/punjab-schemes/`; recommend the hub add this guide as a linked sub-page once published.
- **`/cnic-verification-guide/`** — confirmed slug, existing cross-program CNIC hub → link anchor "how CNIC verification works across programmes" → `/cnic-verification-guide/`.

**Cannibalization check:** confirmed via `grep` against `content.ts` that no existing slug covers this topic (`land-record`, `land_record` return no matches). No cannibalization risk found.

## FAQ source map

| # | Question | Source |
|---|---|---|
| 1 | Can I download my Fard copy online using CNIC? | acag.org.pk FAQ (verbatim) |
| 2 | Is the Punjab land-record portal free to use? | acag.org.pk FAQ (adapted — avoided naming one specific portal as *the* free one, since domain identity is contested) |
| 3 | Can overseas Pakistanis check land records online? | acag.org.pk + governmentschemes.pk + identityservices.pk (3-source convergent question) |
| 4 | What if my land record is not appearing on the portal? | acag.org.pk FAQ (verbatim) |
| 5 | Are downloaded land documents accepted by banks and courts? | acag.org.pk FAQ (verbatim) |
| 6 | Do I need a registered mobile number? | acag.org.pk FAQ (verbatim) |
| 7 | Can I check someone else's land record? | acag.org.pk FAQ (verbatim) |
| 8 | What is PLRA? | identityservices.pk FAQ (verbatim) |
| 9 | What replaced the Patwari system? | identityservices.pk FAQ (verbatim) |
| 10 | What is the difference between a Fard and a Jamabandi? | genuine fan-out gap — landrecordpunjab.com addresses it in body but not as an FAQ; none of the 4 competitors' FAQ blocks ask it directly |
| 11 | Why does my land still not show up if it belonged to a parent or relative? | genuine fan-out gap identified in Step 7 information-gain pass — not answered by any competitor |
