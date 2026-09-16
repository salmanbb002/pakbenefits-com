# Coverage report — "how to check bisp eligibility"

- **Entity coverage:** Tier-1 (BISP, 8171, CNIC, NSER/PMT, SMS method) — 100%, each with a stated attribute/relationship, not a bare mention. Tier-2 (NADRA, BISP Tehsil office, survey-required/no-record status) — 100%.
- **Heading architecture:** 1 H1, no skipped levels, every H2 owns a distinct focus/LSI phrase (portal / SMS / office / result-meaning / method-comparison / troubleshooting / criteria-crosslink / safety / FAQ) — no heading-level cannibalisation within this article.
- **Answer-block check:** 52 words, states the three methods and the shared underlying record without restating the H1 or opening with "In this article."
- **Competitor-heading matrix:**
  | Recurring competitor H2 | Covered here? |
  |---|---|
  | What is 8171 / how it works | Yes — folded into the portal section's second paragraph |
  | Eligibility criteria | Intentionally NOT re-covered — cross-linked to `bisp-eligibility-criteria-guide` instead, per the site's own dedupe rule |
  | How to check (SMS/portal/office) | Yes — three dedicated H2s |
  | Common problems / troubleshooting | Yes |
  | Documents required | Skipped — CNIC-only for remote checks; only the office visit needs a physical CNIC, covered inline |
  | Helpline | Skipped — no verified official number found in this research pass; not fabricated |
  | Scams / safety | Yes |
  | FAQ | Yes, 12 questions |
- **Question coverage:** competitor FAQ questions reused verbatim where genuine ("How do I check my BISP 8171 eligibility?", "Can I check BISP eligibility without internet?"); PAA-style fan-out questions (survey required meaning, no record meaning, different results between methods) added as new ground.
- **Fact cross-check:** every claim traces to Step 4 competitor extraction or general BISP-service facts already established on this site (8171 short code, NADRA CNIC issuance, NSER/PMT mechanism). No rupee figures or dated statistics are introduced in this piece — payment amounts and the PMT cutoff are deliberately left to the sibling `bisp-eligibility-criteria-guide` and the existing payment-check article to avoid duplicating a number that could drift out of sync across three pages.
- **Intent check:** delivers a *do* answer (three concrete methods, numbered/step language) plus the *know* follow-up (what a result means) — matches the dominant + secondary intent from Step 1.
- **Readability:** short sentences, direct instructions, roughly grade 7-8.
- **E-E-A-T flags (need manual input — not resolved here):**
  1. **Cannibalisation, accepted risk (not fixed):** `check-bisp-eligibility-8171` already targets closely related intent and its own `lsiKeywords` list includes "how to check bisp eligibility" verbatim. This was flagged to the user before writing; the literal-split approach was chosen deliberately. Recommend, when convenient, updating that sibling's `lsiKeywords` to drop the now-duplicated phrase and/or adding a link from it into this piece's comparison table.
  2. **No official BISP helpline number verified** — competitors mention a helpline but none gave a checkable number; left out rather than inventing one.
  3. **Author `sameAs` and publisher logo left as `TODO:`** in `schema.jsonld` — same placeholders convention as the sibling post; needs a real author-page URL and logo asset before Rich Results validation.
  4. **Canonical URL placeholder** in `schema.jsonld` — fill once the live path is confirmed.
  5. First-person-adjacent phrasing ("if the two ever disagree, that's a sign...") is scaffolding assembled from competitor patterns, not a lived first-hand claim — flagged per pipeline convention, not a fabricated credential.
