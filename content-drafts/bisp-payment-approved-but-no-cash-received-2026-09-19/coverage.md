# Coverage + QA scorecard — "BISP Payment 'Approved' But No Cash Received"

Run: 19 Sep 2026 · Draft: `draft.md` · 2,289 words total (1,826 body + 463 FAQ) · 10 FAQs · 1 H1, 7 content H2s + FAQ H2, 11 content H3s.

## 1. Entity coverage

**Tier 1 — covered: 4/4 (100%)**

| Tier-1 entity | Covered? | Attribute / relationship stated |
|---|---|---|
| BISP payment status (approved/generated/paid) | Yes | Defined as a programme-side record; relationship: approved ≠ collected; status decoder table |
| Benazir Income Support Programme | Yes | Generates the quarterly installment; operates 8171; helpline 0800-26477 |
| 8171 Web Portal | Yes | CNIC + captcha check; reports status by CNIC; exact wording varies |
| CNIC | Yes | Links the household and payment records; required for the check and collection |

**Tier 1 with an attribute/relationship stated: 4/4 (100%)** — no bare mentions.

**Tier 2 — covered: 10/10 (100%)**

Benazir Kafaalat installment (Rs 14,500 quarterly, date-stamped), biometric verification (fingerprint match at the point), NADRA (record validation), NSER survey record (verification hold cause), district payment phase (collection windows), payment point (bank/agent/camp record), mobile wallet/social protection account (mini-statement), SIM registration (alerts and wallet activation), BISP helpline (complaint route), deduction complaint (evidence + provider + BISP). Plus the transaction receipt/mini-statement relationship.

**Tier 3 — used where natural:** HBL/Bank Alfalah, JazzCash/Easypaisa (named only as categories in research; body stays channel-neutral), Ehsaas (internal link). Parked with reasons: unverified HBL helpline, 8070 diversion claim, digital wallet rollout figures, B-Forms.

## 2. Heading architecture check

- One H1 containing the focus keyword: **yes**.
- No skipped levels (H1 → H2 → H3 only): **yes**.
- Every H3 under an H2: **yes**.
- Distinct phrase per heading: **yes** — verified against the Step 8 map.
- Headings read alone convey the logic: meaning → check → causes → fix → counter → diagnosis → safety → FAQ.
- Snippet-format match: numbered list for the fix (also `HowTo` schema); real table for the status decoder and the diagnostic matrix; answer-first paragraphs throughout.
- No heading competes with `/bisp-balance-check-by-cnic-2026/` (it owns "balance check by CNIC"; this article owns the failure-mode angle).

## 3. Answer-block check

- Direct-answer block: **52 words** (target 40–55) — pass.
- Does not restate the H1 or open with "In this article…" — pass.
- Gives a definite answer (approved ≠ cash; four common causes; check 8171 first) — pass.
- Each question-style H2/H3 opens with a direct answer sentence (QUORA order held) — pass.

## 4. Competitor-heading matrix

| Recurring competitor section | Covered? | Note |
|---|---|---|
| Why payment not received / causes | Yes | H2 + 7 H3 causes |
| How to check status (8171 portal + SMS) | Yes | H2 + 2 method H3s |
| What to do if pending | Yes | H2 "Step-by-Step" + diagnostic table |
| Required documents | Yes | Folded into step 6 and cause 5; a standalone document list would duplicate `/documents-for-bisp-registration/` |
| Common problems and solutions | Yes | Diagnostic table |
| How to file a complaint | Yes | "What to Do at the Bank…" + FAQ 7 |
| Security tips / scams | Yes | H2 "How to Protect Yourself…" |
| Recovery timeline claim (epave: 7–15 days; hamariweb: 48 hours) | Intentionally rewritten | Both claims unverified; the draft explains why no single turnaround exists |
| Double-payment claim (epave) | Intentionally omitted | Unverified promise; replaced with "held installments may be added together" |
| Bank-specific helpline (epave: HBL number) | Intentionally omitted | Not verified on an official bank source |
| Ration-funds diversion claim (hamariweb) | Intentionally omitted | Unverifiable and confuses two programmes |
| Wallet-specific deep dive (hamariweb) | Covered at concept level | Wallet is cause 3; channel detail lives at `/bisp-payment-method/` |

## 5. Question coverage

| Question source | Mapped answer |
|---|---|
| Why does my BISP payment show approved but no cash? | Answer block + H2 + FAQ 1 |
| How do I check BISP payment status/balance by CNIC? | H2 "How to Check…" + FAQ 2 |
| What does "Payment Generated" mean? | Status decoder table + FAQ 3 |
| Why is my payment stuck / not received? | H2 + 7 causes |
| What should I do if my fingerprint fails? | Cause 2 + step 5 + FAQ 5 |
| What if the wallet balance is zero? | Cause 3 + FAQ 8 |
| Can I receive a missed installment later? | FAQ 9 |
| What if an agent deducted money? | Cause 6 + "What to Do at the Bank…" + FAQ 7 |
| Who do I contact / how do I complain? | H2 "What to Do at the Bank…" + FAQ 10 |
| How long does recovery take? | FAQ 4 (honest "no single published turnaround") |
| Can I collect without a smartphone? | FAQ 6 |
| "ehsaas program balance check" (user keyword) | Internal link to `/ehsaas-tracking-check-payment-status/`; the article notes the Ehsaas name refers to the BISP-related route |
| "bisp payment method" (user keyword) | Linked to `/bisp-payment-method/`; body stays channel-neutral |

No PAA/fan-out question left unanswered.

## 6. Fact cross-check

| Claim in draft | Source line |
|---|---|
| Approved = installment generated, not collected | Site's existing `bisp-balance-check-by-cnic-2026` ("An installment can be announced before every beneficiary has an instruction to collect it"); awamify.com ("payment may be placed on hold"); consistent across all four competitors |
| 8171 check = CNIC + captcha; wording varies | Site's existing guides + ncf.org.pk + freejobalert.pk |
| Payments released in district phases | awamify.com, freejobalert.pk (both describe phased district release); consistent with site's existing guide ("Payment schedules and phases") |
| Biometric verification at banks/agents/camps | Site's existing `bisp-payment-method` (biometric verification at branches) + epave.org.pk + awamify.com |
| SIM must be registered to the applicant's CNIC | Site's existing `bisp-online-registration-mistakes` (mistake 4) + hamariweb.com + awamify.com |
| NSER verification hold can block a generated payment | awamify.com cause 1 + site's existing `nser-pmt-score-check-guide` ("A record may still need review or verification") |
| Rs 14,500 quarterly (raised from Rs 13,500, Feb 2026) | Wikipedia BISP + site's `bisp-balance-check-by-cnic-2026` (PID briefing 22 June 2026) |
| BISP helpline 0800-26477 | bisp.gov.pk + site's existing guides |
| No commission should be paid to an agent | Site's existing payment guide + awamify.com security tips |
| No single published turnaround for a held payment | Deliberate: competitors' specific timelines are unsourced; the draft states the honest position |
| "Held installments may be added together" | epave.org.pk FAQ ("pending payments are added together") — kept as a general possibility, stripped of the "double" claim |

No unsourced number, date or amount in the draft. The two unverifiable competitor claims (HBL helpline number, 8070 diversion) were removed rather than repeated.

## 7. Intent check

*Do* dominant (fix a stuck payment): answered with an ordered procedure, a diagnostic table and per-cause fixes. *Know* secondary (what does approved mean): answered in the first section and decoder table. **Pass.**

## 8. Readability

Estimated grade 7–9. Sentences are short, active and concrete. The 7-cause section uses parallel structure ("What happens / why / fix") so no passage runs dense. Passages over 90 words: none flagged.

## 9. E-E-A-T flags for the human editor

- **Author/reviewer:** site contributor records (Saad Hassan / Ayesha Malik); no author `sameAs` page exists, so schema omits it rather than inventing one.
- **YMYL:** government benefits. The draft avoids promising release dates or recovery outcomes and repeats "confirm your own case". A human should re-verify the current payment amount and any phase announcements on bisp.gov.pk at publish time.
- **Unverified third-party claims deliberately excluded:** HBL helpline number, "double payment", "48 hours", "7–15 days", 8070 ration diversion. Do not re-add without an official source.
- **Images:** `content-entry.md` reuses `/images/bisp-cnic-status-check.jpg`. Replace with original artwork if available.
- **`schema.jsonld` is generated, not verified** — run it through the Rich Results Test before deploying.
