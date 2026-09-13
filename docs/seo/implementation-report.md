# PakBenefits SEO implementation — 13 September 2026

Implemented from the complete `pakbenefits-SEO-implementation-prompt.md` and the supplied eleven-sheet audit workbook. Original untracked strategy files and content drafts were preserved.

## Release status

The owner supplied `salmanb0022@gmail.com` and authorized committing, pushing to GitHub and deploying to Vercel. The Contact page now identifies Muhammad Salman and includes that clickable editorial email, replacing the demo placeholder. The contact revision date is included in the sitemap. Build and rendered-page verification are required before release.

Deployment outcomes are recorded in `deployment-report.md`. No Search Console change, outreach or backlink submission is included. Live Vercel redirects and Google's Rich Results Test are release checks; local JSON-LD validation is not a claim that Google grants FAQ rich results.

## Implemented changes

| Brief item | Result |
| --- | --- |
| 1.1 Contact page | Owner-supplied `salmanb0022@gmail.com` published as a clickable editorial contact for Muhammad Salman; placeholder removed. |
| 1.2 Nine pillar FAQs | Four or five visible questions per existing category, generated with FAQPage JSON-LD from the same exact strings. New Punjab hub also has matching FAQs. |
| 1.3 Four descriptions | Kafaalat, payment-check and NSER: 157 characters; Ehsaas: 160 characters. Description metadata is separate from the page introduction. |
| 2.1 NSER overlap | 600–800-word editorial overview; procedural content belongs to `/nser-pmt-score-check-guide/`, targeting `pmt score check`. Detailed guide expanded to the workbook's 2,000-word target. |
| 2.2 Registration overlap | 600–800-word editorial overview; one detailed guide targeting `bisp 8171 online registration`, expanded to 1,500+ body words. |
| 2.3 Tracking | Added a clear opening explanation, follow-up guidance, matching FAQ schema and exact `ehsaas tracking` inbound links. Registration hub has no tracking-targeted editorial content. |
| 2.4 Balance overlap | Consolidated into `/bisp-balance-check-by-cnic-2026/`; two explicit Vercel 301 rules, removed redundant routes from the export and sitemap, replaced contextual links with direct links to the retained page. |
| 3 Content depth | Expanded Taleemi Wazaif, Other Schemes, registration and NSER hubs, youth loans, electric bikes, farmer cards, fraud prevention and cross-programme documents. |
| 4 New content | Added Punjab Schemes, CNIC Verification, What Is BISP, Nashonuma, and Zakat/BISP eligibility; all in sitemap and linked from existing editorial content. |
| 5 Savings wallets | Expanded to 1,200+ editorial words, including dated history, account access, separate PPAF loan route, eligibility questions, repayments, access problems and FAQs. Prominent contextual link from the Ehsaas hub. |
| Workbook extras | Expanded 8171 to 1,500+ words and Kafaalat to 800+; connected the PakBenefits domain and existing publication name in the footer; added refresh planning and an announcement workflow. |

### Payment consolidation evidence

The three pages all repeated portal/SMS checks, payment-cycle interpretation, missing-payment issues and collection precautions. The supplied raw Semrush capture records `/bisp-balance-check-by-cnic-2026/` at position 41 for `how to check cnic balance`; it does not record rankings for the other two candidates. The retained guide now combines the useful subject matter and removes unsupported promises of instant results, a universal payment provider, or universally free SMS.

Retired URLs:

- `/bisp-payment-check-guide/`
- `/bisp-8171-payment-balance-check-guide/`

Both redirect to `/bisp-balance-check-by-cnic-2026/` with explicit status 301 in `vercel.json`. Local QA models those rules and checks both slash variants. The actual Vercel edge response must be checked after deployment.

### Data discrepancy handled

The implementation brief attributes the position-11 savings-wallet query to the detailed wallet article. The supplied raw Semrush capture attributes it to `/ehsaas-programs/`. Both URLs were preserved. The existing hub retains a prominent savings-wallet section linking to the expanded detailed guide; neither was redirected.

## Factual corrections and source handling

- NCCIA is the current published cybercrime reporting route; the fraud guide explains the older FIA wording and links to NCCIA's official complaint system.
- Punjab Rozgar is described as subsidized-markup finance, not universally interest-free. The previous blanket claim that it has no application fee was removed; fees must be verified against current terms.
- Nashonuma and Punjab Aghosh are separate programmes, not alternative names for one programme.
- The 8171 public form is described as a household eligibility check. We do not promise it always shows an exact PMT score, every stipend or a bank statement.
- Savings-wallet launch material from May 2021 and PPAF's published phase ending June 2025 are clearly historical, not presented as proof of current enrollment.
- The June 22, 2026 government briefing is cited for its reported Rs. 14,500 quarterly Kafaalat amount, with its date preserved. Planned future amounts are not treated as present entitlements.
- Taleemi Wazaif's older official benefit table is labelled with its source context instead of being presented as a verified September 2026 payment notice.

Official references are linked on the relevant pages. A source can explain programme design without confirming an active application window. `sources.md` records the principal references.

## Verification

Run from the repository:

```sh
npm run build
npm run lint
npm run seo:qa
```

`seo:qa` starts a temporary localhost server for the production export and uses Playwright. It verifies HTTP responses, sitemap membership, canonicals, one H1, unique metadata, exact visible FAQ/schema/source matching, article dates, author schema, primary-keyword assignment uniqueness, internal routes, missing images/alt text, contextual links to new pages, explicit redirect configuration, editorial word counts, and mobile layout/FAQ interactions. It closes its server and browser afterward.

`verification.json` contains the latest full crawl outcome and per-page measurements. Screenshots are in `screenshots/`. Counts use editorial headings, paragraphs, list/table content and FAQ text; navigation, article cards, author biographies and source-link labels do not inflate the targets.

The original publication dates remain in Article and Open Graph metadata when content is revised. Category pages have a real revision date and CollectionPage schema. The BISP entity is explicitly distinct from the site's publisher in the new entity article.

## Remaining owner/external actions

1. The owner remains responsible for monitoring the supplied inbox. Contact-link verification does not send a test message or claim to verify email delivery.
2. Consult `deployment-report.md` for live page and redirect verification. Inspect the sitemap in Search Console as appropriate.
3. Review the audit's flagged backlink profile separately in Search Console. No disavow file was created or submitted in this coding session.
4. Run the separate Core Web Vitals/PageSpeed assessment requested in the brief after the content release. Local mobile layout checks are not a CWV audit.

Monthly content review and a 48–72-hour announcement workflow are provided in `content-maintenance.md`, `review-calendar.csv`, and `monthly-review.ics`. The calendar file is not automatically installed or sent to anyone.
