# SEO release

The owner authorized release to GitHub and Vercel and supplied `salmanb0022@gmail.com` as the Contact-page email.

Production is connected to the `main` branch of `salmanbb002/pakbenefits-com` in the existing Vercel project `pakbenefits-com`. The release preserves the upstream indexing workflow and its public verification file.

Local verification is recorded in `verification.json`. Production verification will be recorded in `live-verification.json` after the deployment is ready. The same browser crawl can be run against production using:

```sh
npm run seo:qa -- --live
```

The crawl validates the actual public page content, all sitemap routes, schema, metadata, internal links, contact email and both HTTP 301 redirects. It does not submit private data or send email.
