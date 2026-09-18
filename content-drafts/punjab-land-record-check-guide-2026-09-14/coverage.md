# Coverage QA — "land record punjab online check by cnic"

## Entity coverage

- **Tier 1 (7 rows):** 7/7 covered (100%) — each with at least one stated attribute or relationship, not a bare mention:
  - PLRA — attribute: established 2017 under PLRA Act, operates under Board of Revenue Punjab
  - CNIC — relationship: required input + reused across other programmes (linked to `/cnic-verification-guide/`)
  - Fard — attribute: specific-owner extract, distinguished from Jamabandi
  - OTP verification — relationship: sent to mobile number linked to CNIC
  - Board of Revenue, Punjab — relationship: names the official gateway domain
  - Official land-record portal — attribute: multi-domain confusion explicitly resolved with a live-sourced answer
  - Overseas Pakistani land-record access — attribute: NICOP/passport-based path, OTP-to-accessible-number caveat
- **Tier 2 (8 rows):** 8/8 covered (100%): Arazi Record Center, Mutation, Jamabandi, Fee for land-record documents, "No record found" troubleshooting, Mobile number linked to CNIC, PLRA Act 2017, Patwari system.
- **Tier 3:** used only where natural (none forced); unused tier-3 terms logged per-section in `draft.annotated.md` with a one-line reason each (Green Property Certificate, QR code verification, PSID, Khewat/Khatuni, Aks Shajra, E-Khidmat Markaz, Fard Bay/Badar) — all single-competitor-sourced, correctly excluded or only lightly touched.

## Heading architecture check

- One H1. ✅
- No skipped levels — the single H3 ("What You'll Need Before You Start") sits directly under its H2 ("How Do You Check Your Land Record Online by CNIC?"). ✅
- Every H2 targets a distinct focus/LSI phrase — no two headings compete for the same query. ✅
- Every heading maps to a Step 8 map row (see `research-notes.md`). ✅
- Heading list read alone conveys the page's logic: what PLRA is → which portal is real → how to check → what you get → overseas variant → cost → problems → FAQ. ✅
- H2 count (7) vs. fan-out/PAA/FAQ question set (11 FAQ + step-by-step) — proportionate to a "do"-intent piece of this length. ✅

## Answer-block check

- Direct-answer block: 44 words. Within the 40-55 word target. ✅
- Does not restate the H1 verbatim. ✅
- Matches the "do"-intent step format the SERP consensus favors (names the concrete inputs: CNIC, district/tehsil, OTP, Fard). ✅
- Each question-style H2 (e.g. "Which Official Portal Should You Actually Use?", "Can Overseas Pakistanis Check Their Land Record?", "What Does It Cost?", "What If Your CNIC Shows No Record Found?") answers in its first sentence — QUORA answer-first order held. ✅

## Competitor-heading matrix

| Recurring competitor heading (by topic) | governmentschemes.pk | identityservices.pk | landrecordpunjab.com | acag.org.pk | Covered here? |
|---|---|---|---|---|---|
| What is PLRA / the system | ✅ | ✅ | — | ✅ | ✅ Yes |
| How to check by CNIC (step list) | ✅ | ✅ (brief) | ✅ | ✅ | ✅ Yes |
| Fees | ✅ | — | — | — | ✅ Yes, but explicitly hedged as unverified (see fact-check flag below) |
| Documents available (Fard, mutation, deeds) | ✅ | — | ✅ | ✅ | ✅ Yes |
| No record found / troubleshooting | ✅ | — | — | ✅ | ✅ Yes |
| Overseas Pakistanis | ✅ | ✅ | — | ✅ | ✅ Yes |
| Contact/helpline numbers | — | ✅ | ✅ (vendor's own) | — | ❌ Intentionally skipped — identityservices.pk's PLRA phone numbers were not independently verified against an official source this session, and landrecordpunjab.com's numbers are a private vendor's contact, not PLRA's. Repeating either risked publishing an unverified or wrong government contact number, which is a real-world harm risk on a YMYL topic; omitted rather than guessed. |
| Green Property Certificate | ✅ | — | — | — | ❌ Intentionally skipped — single-source, unverified figures (see dedupe log). |
| Fard Bay / Fard Badar naming | — | — | ✅ | — | ❌ Intentionally skipped — single-source vendor terminology, not corroborated. |

## Question coverage

All 13 verbatim competitor FAQ questions plus the 2 genuine fan-out gaps identified in Step 7 are mapped in `research-notes.md`'s FAQ source map; every one of the resulting 11 FAQ entries is answered in the FAQ section. No PAA/fan-out question was left unanswered.

## Fact cross-check

| Claim in draft | Source |
|---|---|
| PLRA established 2017, PLRA Act 2017, under Board of Revenue Punjab | Wikipedia (Step 2) |
| LRMIS launched as a project in 2006 | bor.punjab.gov.pk/lrmis (Step 2, live official source) |
| 2,139,454 Fard copies issued, 956,435 mutations recorded (2018-19) | bor.punjab.gov.pk/lrmis (Step 2, live official source) |
| One ARC per tehsil | bor.punjab.gov.pk/lrmis (Step 2) |
| plra.gop.pk unreachable (DNS failure) | Direct WebFetch attempt, this session |
| punjab-zameen.gov.pk named as official gateway | bor.punjab.gov.pk/lrmis (Step 2, live official source) |
| rod.pulse.gop.pk referenced as the ROD/deeds portal | Convergent across governmentschemes.pk and acag.org.pk (2 independent competitor sources) |
| Step-by-step CNIC → district/tehsil → OTP → download flow | Convergent across all 4 competitors |
| "A few minutes" typical completion time | Convergent across acag.org.pk ("2-3 minutes") and governmentschemes.pk ("7 steps... instant"); hedged rather than stated as an exact figure |
| Fee "a few hundred rupees" for certified copy, explicitly hedged as unverified | governmentschemes.pk only, NOT independently confirmed — flagged in-text as unverified rather than stated as fact |
| Fard vs Jamabandi vs Mutation distinctions | landrecordpunjab.com (primary) + acag.org.pk / bor.punjab.gov.pk (mutation figures) |
| Overseas access via NICOP/passport | governmentschemes.pk + identityservices.pk (2-source convergence), specifics (facilitation centers) explicitly excluded as unverified |

**Unsourced/flagged items:** none in the shipped draft — every unverifiable figure (42M landowners, 100%/85% coverage split, PKR 5,000-30,000+ verification cost, specific overseas facilitation-center list, PLRA phone/helpline numbers) was either excluded entirely or explicitly hedged in-text as unverified. This is the single biggest E-E-A-T risk area for this topic — see below.

## Intent check

Delivers on the dominant "do" intent (a complete, honest step list) and the secondary "know-simple" need (what PLRA/Fard/Jamabandi actually are), plus resolves a real point of reader confusion (which domain is legitimate) that no competitor addressed. ✅

## Readability

Estimated grade ~8-9 (Flesch-Kincaid range), consistent with the site's existing YMYL/public-info voice — short sentences, plain terms defined on first use, minimal jargon stacking. The "Which Official Portal" and "Fard/Jamabandi/Mutation" sections run slightly denser than the rest; both use a table or clearly separated block to keep them scannable.

## E-E-A-T flags (need real human input before publishing)

1. **Author/reviewer assignment** — `schema.jsonld` and the eventual `content.ts` entry need a real author/reviewer pair (the site's existing pattern uses Saad Hassan / Ayesha Malik) confirmed by whoever publishes this, not invented here.
2. **Government contact numbers omitted on purpose** — this draft deliberately does NOT publish a PLRA phone/helpline number, because the only source (identityservices.pk, a third-party blog) wasn't independently verified against an official page this session. If you want a phone number in the final published piece, verify `(042) 99330111` / `111-22-22-77` against an official PLRA or Board of Revenue source before adding it — publishing a wrong government contact number is a real user-harm risk.
3. **Portal URL itself is not stated as a clickable link in the draft body** — the draft explains the domain-confusion situation but does not assert a single URL as definitively current, on purpose, since the underlying domain has already moved once (plra.gop.pk → apparently punjab-zameen.gov.pk / rod.pulse.gop.pk). Before publishing, whoever owns this page should do one live check of the current working domain and add it as the actual "official portal" link/CTA — this draft's `officialLinks` equivalent is intentionally left as a TODO rather than guessed.
4. **Fee figures** — explicitly hedged in the draft; do not tighten this to a specific number without an independent, dated, official source.
5. **First-person/experience framing** — this draft contains no fabricated first-hand claims (no "as an expert" filler); the QUORA-framework "proof" beats are backed by the Step 2/Step 4 sources listed in the fact cross-check above, not invented anecdotes.
6. **YMYL disclaimer** — recommend the site's standard "confirm on the official channel before acting" framing (already present throughout the body) remains intact; this topic touches legal/property records, so treat it with the same caution level as the site's BISP/Ehsaas guides, not less.

## Word count / FAQ count / tier coverage summary

- Word count (body, excluding FAQ): ~950 words
- FAQ section: 11 questions
- Total draft length: ~1,450 words
- Tier-1 coverage: 100% (7/7, each with attribute/relationship)
- Tier-2 coverage: 100% (8/8)
- Information-gain elements used: 2 — (1) the "Which Official Portal" domain-confusion clarity box sourced from a live `.gov.pk` page, (2) the Fard/Jamabandi/Mutation comparison table plus the "land still in a relative's name" case
