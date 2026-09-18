# Coverage / QA report — Fuel Relief Scheme guide

## Word count
~1,850 words (draft.md body, excluding FAQ block: ~1,300; FAQ block: ~550).

## Tier-1 coverage: 8/8 (100%)
Fuel Relief Scheme, Petroleum Division, ECC, Shehbaz Sharif, 9771, Fuel Pass System, CNIC, Rs100/litre
— all covered with at least one stated attribute/relationship, per the entity ledger in entities.json.

## Tier-2 coverage: 12/12 (100%)
SBP, OGRA, all three named ministers, all three vehicle categories with their caps, the 2011 date
rule, petrol-vs-diesel, launch dates, and the fake-portal warning are all covered.

## Heading-architecture check
- Exactly one H1, containing the focus keyword ("Fuel Relief Scheme") — pass.
- H2s phrased as user questions or clear sub-topics; H3s nested correctly under their H2, no skipped
  levels — pass.
- Direct-answer block (55 words) immediately after H1, matching the CNIC/9771/Rs100 featured-snippet
  target — pass.
- QUORA per-section order (answer-first → value → proof → takeaway) followed in each major section —
  pass, though the "petrol station gets paid back" section leans more value/mechanism-heavy since
  there's no clear consumer "next action" for that particular question.

## Competitor-heading matrix (approximate — see research-notes.md Step 4 caveat)
Registration process, eligibility, subsidy amount, and launch dates are covered by every
source reviewed. A dedicated "how does this differ from BISP/Ramzan Package/Nigehban Card"
comparison and an explicit SMS-format-discrepancy callout were NOT found on any competitor
page reviewed — these are this piece's information-gain elements.

## Question-coverage map
All Step 1 fan-out questions (registration process, eligibility, amount, launch date, fraud risk)
are answered in both the body and the FAQ. The SMS-format discrepancy question is answered nowhere
else reviewed.

## Fact cross-check
Every number, date, and name in draft.md traces to a specific fetched/searched source in
research-notes.md. Two facts are explicitly flagged as **unconfirmed/reported rather than
official**: (1) the exact registration SMS format (REG-prefix vs plain-field — two sources
disagree), and (2) the precise scheme end date (no fixed calendar date published, only "3 months").
No invented figure was added to fill a gap.

## Intent check
Matches Step 1's dominant *do* intent (registration steps are the largest single section) with
*know* intent served by the "what is it" and "how does it differ" sections — consistent.

## E-E-A-T flags
- Byline + reviewer present (contributors.saadHassan / contributors.ayeshaMalik), consistent with
  every other article on this site.
- Sourced from a state-broadcaster account (radio.gov.pk) plus multiple independent news outlets,
  not a single source — cross-verified where sources overlapped, and disagreements are disclosed
  rather than silently resolved.
- Time-sensitivity explicitly flagged in the closing section: this is a same-day-of-launch guide
  and should be rechecked against an official notification once one is published.

## Known limitation
Two competitor URLs (Business Recorder, Daily Independent) returned HTTP 403 on direct WebFetch
and were not scraped verbatim; their content was cross-checked instead via other outlets' coverage
of the same facts (WebSearch summaries), consistent with this pipeline's "substitute, never
fabricate" rule. No content from those two blocked pages is presented as directly sourced from them.
