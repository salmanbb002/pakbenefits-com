# Content maintenance

## Monthly review

Use `review-calendar.csv` as the page inventory. Review payment, eligibility, programme-window and year-labelled content on the first working day of each month; inspect affected pages immediately after a material official notice.

1. Open each page's official sources and record the notice's date, scope, current rules and whether applications are actually open.
2. Update the existing canonical guide. Keep historical figures dated and distinguish a proposed measure from an implemented one.
3. Revise FAQ data once; the visible section and JSON-LD use the same strings. Preserve the original `publishedDate` and change `date` only after a substantive revision.
4. Review related hubs and contextual links. Avoid creating a new monthly URL for the same ongoing payment question.
5. Run build, lint and the rendered SEO crawl. After deployment, confirm the public result and recheck structured data on materially changed pages.

`monthly-review.ics` is an importable reminder. It has not been added to an external calendar. A person still needs to perform the source review; the repository does not claim to monitor notices automatically.

## New-announcement workflow: 48–72 hours

- Within 24 hours: identify the original government or implementing-agency notice; confirm its publication date, geography, beneficiary group and status. Save the source URL in the editorial notes.
- Within 48 hours: update the relevant existing guide when it already owns the query. Draft a separate page only for a distinct programme or task. Include eligibility, documents, dates and amounts only to the extent the official notice supports them.
- Within 72 hours: review the explanation, official destinations, contact routes, visible FAQ/schema matching and mobile output. Run the build and crawl before release, then inspect the deployed page.

Do not use a publication deadline to invent missing rules, declare an unconfirmed application window open, or present a draft policy as a released benefit.

## Separate workstreams

Backlink review/disavow, outreach, Urdu content, and Core Web Vitals remain separate from this implementation. No outreach messages or Search Console changes are authorized by this maintenance document.
