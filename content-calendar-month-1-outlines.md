# Month 1 — Entity-Optimized Blog Outlines (Week 1)

Source: `content-calendar-month-1.md`. Each outline follows the existing article template in `src/data/content.ts`: sections (paragraphs + bullets), FAQs (feed FAQPage schema), 2–3 officialLinks, and `categorySlugs` including `news` for the freshness feed. Byline alternates Saad Hassan / Ayesha Malik per the checklist; existing articles are all Saad-author/Ayesha-reviewer, so these three alternate.

All three target the `/8171/` category. Facts stick to what the pillar guides and official portals (8171.bisp.gov.pk, bisp.gov.pk) already establish — no new unverified claims.

Complete drafting briefs:
- `blog-1-8171-portal-not-working-outline.md`
- `blog-2-8171-786-ehsaas-tracking-outline.md`
- `blog-3-bisp-status-cnic-online-outline.md`

## Semantic separation matrix

| Post | Primary entity relationship | Dominant intent | Content boundary |
|---|---|---|---|
| Blog 1 | 8171 portal → failure state → diagnostic check → official fallback | Troubleshooting | Does not repeat the complete eligibility tutorial |
| Blog 2 | Claimed number/domain → BISP evidence → trust decision → safe action | Entity disambiguation | Does not repeat portal troubleshooting or the CNIC steps |
| Blog 3 | CNIC holder → public form → status response → official next step | Task completion | Does not become a full NSER, PMT, registration, or payment guide |

Each complete brief now contains:

- primary, close-variant, secondary, question, and contextual keyword layers;
- entity taxonomies grouped by salience and function;
- subject–predicate–object entity relationships;
- NLP phrase banks and semantically related terms (often called “LSI” terms);
- section-level entity and phrase placement;
- direct-answer blocks, tables, FAQs, internal links, sources, schema notes, and drafting QA;
- explicit exclusions that prevent unsupported claims and keyword cannibalization.

“LSI” is used here as convenient editorial shorthand for related vocabulary. It is not treated as a keyword-density formula; every phrase must support the entity relationship and reader intent of its section.

## Keyword ownership across the 8171 cluster

| Query family | Owning page |
|---|---|
| General 8171 eligibility and status overview | Existing 8171 pillar |
| Portal not loading, not submitting, blank page, error | Blog 1 |
| 8171 vs 786/5771/7181 and historical tracking domains | Blog 2 |
| CNIC form steps, image code, response-to-action flow | Blog 3 |
| New survey, household update, online-application confusion | BISP registration pillar |
| Payment amount, cycle, collection, deduction, biometrics | Payment-check pillar |
| NSER methodology and PMT scoring | NSER/PMT pillar |

Old-year and payment-amount modifiers from `keyword-clusters.csv` are recorded as query context but are not repeated as current facts. This preserves topical coverage without creating doorway pages or publishing stale figures.

---

## Post 1 — Mon Aug 17

**Title:** 8171 Web Portal Not Working? What to Check Before You Assume It's Down
**Keywords:** "8171 web portal", "8171 check online 2026" (+ long-tails like "8171 portal 2026", "bisp 8171 web portal", "web portal 8171 check")
**Intent:** Troubleshooting | **Target page:** /8171/
**Byline:** Author — Saad Hassan | Reviewer — Ayesha Malik
**categorySlugs:** ["8171", "news"]
**Read time:** ~6 min | **Excerpt (candidate):** "If the official 8171 portal will not load, check the address, both form fields, your browser and connection before using an official alternative."

### Section 1 — A failed page does not reveal the cause
- Frame: a timeout or blank page may be local or service-side; do not publish a nationwide-outage claim without an official notice.
- Key points:
  - Test the official address and required fields first, then browser/connection, then the official alternative.
  - A returned record message is not the same as a page-loading failure.

### Section 2 — Confirm you are on the official address
- Bullets:
  - The current public CNIC status page is `https://8171.bisp.gov.pk/` — bookmark it once confirmed.
  - Lookalike domains with a similar spelling are a known scam pattern; check the address bar before typing anything.
  - Verify the destination host rather than trusting the wording of a search result.

### Section 3 — Complete both visible fields
- Bullets:
  - Enter the CNIC of the person whose status is being checked.
  - Enter the image code exactly as displayed; a field-validation error is not an eligibility result.

### Section 4 — Network and browser quick checks
- Bullets:
  - Try again after switching Wi-Fi to mobile data (or vice versa).
  - Clear cache / try another browser or a private window.
  - If the page still fails across more than one device or connection, stop refreshing and retry later.

### Section 5 — The SMS alternative when the web fails
- Paragraphs: BISP identifies 8171 as its only official messaging number, and official guidance documents sending a CNIC to 8171 to check eligibility.
- Bullets:
  - Send the CNIC to **8171** from an active mobile number you control.
  - Trust only messages from the official 8171 sender; a "reply" from a personal number is not official.

### Section 6 — When it is genuinely down, and when to involve an office
- Paragraphs: if the official page remains unreachable across devices or connections, treat it as a possible service-side issue, retry later, and do not invent a cause or recovery time.
- Bullets:
  - Use the BISP helpline or a tehsil office when an underlying record or official instruction needs follow-up.
  - Report impersonation: anyone charging a fee to "fix" your access is not part of the process.

### FAQs (2 distinct questions → include FAQPage)
1. "Is the 8171 portal down right now?" → We can't confirm real-time availability; run the network/browser checks, or use the SMS route.
2. "Can I check my status if the web portal is not working?" → Yes, via SMS to 8171 (standard charges may apply), or later from another device.

### Official links
- Official 8171 portal — https://8171.bisp.gov.pk/
- BISP official website — https://www.bisp.gov.pk/

### Related-article links (auto via shared `categorySlugs`)
- How to Check BISP Eligibility Through the Official 8171 Portal
- BISP 8171 Payment & Balance Check: How to Confirm Your Amount Safely
- BISP Scam Alert: Seven Red Flags to Recognize

---

## Post 2 — Wed Aug 19

**Title:** 8171, 786, and Ehsaas Tracking: Which Number Should You Actually Use?
**Keywords:** "786 web portal", "ehsaas tracking pass gov pk", "5771/7181 check online" (typo variants), "8171 web portal"
**Intent:** Clarification | **Target page:** /8171/
**Byline:** Author — Ayesha Malik | Reviewer — Saad Hassan
**categorySlugs:** ["8171", "news"]
**Read time:** ~6 min | **Excerpt (candidate):** "BISP says 8171 is its only official messaging number. Here is how to handle 786, 5771, 7181 and the older Ehsaas tracking address safely."

### Section 1 — One official code: 8171
- Paragraphs: 8171 is BISP's official short code for the SMS and web status service; it is the only code the programme uses for status checks. (Cross-link the existing "What the 8171 code actually is" guidance.)
- Bullets:
  - Web: `https://8171.bisp.gov.pk/`
  - SMS: send CNIC to **8171**

### Section 2 — How to handle 786, 5771, and 7181 claims
- Paragraphs: do not speculate about where these numbers came from or who controls them. If one is presented as a BISP status or payment channel, BISP's own rule is decisive: programme messages should come only from 8171.

### Section 3 — Why "Ehsaas tracking pass.gov.pk" appears in searches
- Paragraphs: a 2022 BISP NSER guide used `8171.pass.gov.pk`, so this is historical official context rather than proof of a fake domain. The current public page verified in August 2026 is `8171.bisp.gov.pk`.
- Bullets:
  - Direct readers to the current `8171.bisp.gov.pk` page.
  - Do not claim a migration date unless BISP publishes one.

### Section 4 — How to verify any code or link you're told to use
- Bullets:
  - Does it come from an official BISP page, the 8171 portal, or a named BISP announcement? Anything else is unconfirmed.
  - The public status check should not ask for an OTP, bank PIN, account password, payment, or an identity-document upload.
  - Cross-check against the red flags in the existing scam guide rather than acting on urgency.

### Section 5 — If you already sent your CNIC to a lookalike number
- Paragraphs: stop the conversation, send no OTP or financial credentials, preserve the suspicious message, and contact BISP through its helpline if the sender claimed to represent the programme. Do not promise that an individual security incident caused no harm.

### FAQs (2+ distinct questions → include FAQPage)
1. "Is 786 an official BISP or Ehsaas number?" → BISP says 8171 is its only official messaging number; do not use 786 as an alternative BISP channel.
2. "Which website should I use for Ehsaas tracking?" → The official BISP status portal (8171.bisp.gov.pk); verify any other domain against bisp.gov.pk first.
3. "I already sent my CNIC to a number — what now?" → Stop engaging, send no OTP/PIN or payment, preserve the message, and contact BISP if it claimed to be official.

### Official links
- Official 8171 portal — https://8171.bisp.gov.pk/
- BISP official website — https://www.bisp.gov.pk/

### Related-article links
- How to Check BISP Eligibility Through the Official 8171 Portal
- BISP Scam Alert: Seven Red Flags to Recognize
- BISP 8171 Payment & Balance Check: How to Confirm Your Amount Safely

---

## Post 3 — Fri Aug 21

**Title:** How to Check Your BISP Status by CNIC Online (2026 Method)
**Keywords:** "ehsaas program cnic check online", "bisp registration check by cnic", "online cnic verification" (+ "8171 check online cnic 2026")
**Intent:** Informational | **Target page:** /8171/
**Byline:** Author — Saad Hassan | Reviewer — Ayesha Malik
**categorySlugs:** ["8171", "bisp-registration", "news"]
**Read time:** ~6 min | **Excerpt (candidate):** "Use the current 8171 public portal to check a BISP record by CNIC, understand the response, and choose the correct official next step."

### Section 1 — The 2026 method is one route
- Paragraphs: the current public route verified in August 2026 is the 8171 BISP portal. Do not imply that a special 2026 app or a new registration form exists.
- Bullets:
  - The public page shows a CNIC field and an image-code field.
  - It does not show a public username/password login; a separate login page should not be confused with the public status form.

### Section 2 — Step-by-step: the online check
- Numbered walkthrough:
  1. Open the official portal (`https://8171.bisp.gov.pk/`) from a trusted device.
  2. Enter the CNIC of the person whose status is being checked.
  3. Enter the image code shown on the page, then submit once.
  4. Save the exact returned wording privately and follow its stated next step.

### Section 3 — How to read the response
- Bullets (response type → action):
  - Eligible/beneficiary response → follow the exact instruction and trust payment communication only from 8171.
  - No record → BISP guidance directs an adult household member to the nearest registration desk for a survey.
  - Other instruction → quote it accurately and confirm through BISP rather than assuming it always means biometric verification.

### Section 4 — What online "cnic verification" does and does not do
- Paragraphs: the check retrieves a status response; it does not itself complete a survey, create a registration, change household data, approve eligibility, or release cash.

### Section 5 — Privacy: what the check should never ask
- Bullets:
  - The public CNIC check should not ask for an OTP, bank PIN, account password, or payment.
  - Never upload CNIC to a form, chat, or drive; enter it only on the official portal.
  - If you hit an unofficial form first, close it and use the bookmark.

### FAQs (3 distinct questions → include FAQPage)
1. "How can I check BISP status by CNIC online?" → Use `8171.bisp.gov.pk`, complete the CNIC and image-code fields, then save the exact response.
2. "Why does my CNIC show 'no record found'?" → It is a completed lookup; BISP guidance directs a household with no record to the nearest registration desk for a survey.
3. "Does checking a CNIC register me for BISP?" → No; a survey or record update is a separate official process.

### Official links
- Official 8171 portal — https://8171.bisp.gov.pk/
- BISP official website — https://www.bisp.gov.pk/

### Related-article links
- How to Check BISP Eligibility Through the Official 8171 Portal
- How to Register for BISP Online: Step-by-Step 2026 Guide
- BISP 8171 Payment & Balance Check: How to Confirm Your Amount Safely

---

## Notes before drafting
- Editorial flags: Post 2 must keep the historical `8171.pass.gov.pk` nuance and recheck BISP's current route on publication day. Post 3 must not imply a new 2026 app/portal exists.
- Cannibalization guard: keep Post 3 narrowly focused on the CNIC form and response paths; the existing 8171 eligibility article remains the broad pillar.
- Add each post to `categorySlugs: ["...", "news"]` so it surfaces in the freshness feed; the related-articles module picks up cross-links automatically.
- Include `faqs[]` on Posts 1–3 as above — all three answer 2+ distinct questions, so FAQPage schema will fire via the existing template.
- Use only images already in `/public/images/` (hero-support, registration-guide) to avoid new asset work.
