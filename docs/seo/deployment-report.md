# Production SEO release

The owner authorized the local commit, GitHub push and Vercel production deployment, and supplied `salmanb0022@gmail.com`. The address is published as a clickable editorial contact for Muhammad Salman on [Contact](https://pakbenefits.com/contact-us/).

## Released version

- Public site: https://pakbenefits.com/
- Repository: https://github.com/salmanbb002/pakbenefits-com, branch `main`.
- Verified content/configuration commit: `5d706e400be7cb108da79127842d415f39b602bb`.
- Vercel deployment: `dpl_28HCctTguVx68aHKCRjTMjF1Uvv7`, state `READY`, target `production`.
- Deployment URL: https://pakbenefits-bbcoinn6d-researchcrave.vercel.app (Vercel authentication may apply; the public custom domain is accessible).

The following documentation commit records this release and its verification without changing the application or routing configuration. Vercel automatically deploys commits pushed to `main`.

## Production fixes

`vercel.json` builds the existing Next.js static export and serves `out` directly. Explicit 301 redirects precede the ordinary trailing-slash rule, so requests with and without a trailing slash go directly from either retired payment guide to `/bisp-balance-check-by-cnic-2026/`. Normal page URLs still use a trailing slash, and the www hostname redirects to the primary domain. Static files and `.well-known` paths are excluded from the trailing-slash rule.

Editorial dates now use explicit UTC in Article, CollectionPage, Open Graph and sitemap output. This preserves the original publication date and the intended revision date across build environments. Date checks passed under UTC, Asia/Karachi and America/Los_Angeles.

## Verification

`npm run build`, `npm run lint` and the local 52-route crawl passed. `verification.json` records the local measurements. Redirect precedence and canonical/file exclusions also passed a configuration check.

The production crawl passed all 52 routes with zero failures or pending site checks at `2026-09-14T02:04:22.459Z`. Results are recorded in `live-verification.json`. Repeat the production crawl with:

```sh
npm run seo:qa -- --live
```

The crawl checks actual public HTTP responses, all sitemap routes, titles, descriptions, canonical URLs, one H1, JSON-LD, exact FAQ/source/visible-text matching, dates, authors, internal links, images, word counts, the contact email, both slash variants of the retired URLs, and mobile layout/FAQ interaction. It does not submit private data or send email.

## External verification limitation

Google’s Rich Results Test returned “Something went wrong — Log in and try again” for the first pillar URL. Its result is **unverified**, not passed. The attempt is recorded in `rich-results-verification.json`; the remaining eight Google checks were not attempted after that service error. All nine existing pillars are still covered by the local and production structured-data checks.

Retry [Google’s Rich Results Test](https://search.google.com/test/rich-results) in an authenticated browser for `/8171/`, `/benazir-kafaalat/`, `/bisp-registration/`, `/other-schemes/`, `/taleemi-wazaif/`, `/news/`, `/payment-check/`, `/ehsaas-programs/` and `/nser-pmt-score/`. The command `node scripts/rich-results-qa.mjs` records an automated attempt, but cannot supply Google authentication or guarantee rich-result eligibility.

The existing Instant Indexing workflow and its public verification file were preserved; pushes trigger that workflow automatically. No manual Search Console configuration, backlink disavow or outreach was performed. Backlink review and the separate Core Web Vitals assessment remain outside this implementation, as specified in the brief.
