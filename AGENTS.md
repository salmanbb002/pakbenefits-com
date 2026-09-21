# Project Guidelines & Editorial Rules: pakbenefits.com

## 1. Scheme-Specific Featured Images (Mandatory)
- **Direct Topical Relevance:** Every article published must have a dedicated, authentic featured image that directly illustrates the specific scheme or topic (e.g., green tractors for Green Tractor Scheme, farmer holding Kisan Card for Kisan Card, bridal assistance for Dhee Rani, newly built home for Apni Chhat Apna Ghar).
- **No Generic Placeholders:** Never reuse unrelated or generic placeholder images for new scheme guides.
- **Storage Locations:**
  1. `public/images/<descriptive-scheme-name>.jpg`
  2. `content-drafts/<article-slug>-<date>/featured-image.jpg`
- **Format & Metadata:** 16:9 aspect ratio, high resolution, with descriptive and keyword-rich `imageAlt` text.

## 2. Communication Preference
- **Language:** All explanations, questions, progress updates, and summaries to the user must be strictly in **English**.

## 3. Author & Attribution Rules
- **Author:** Strictly `Muhammad Salman` (`author: contributors.muhammadSalman`).
- **Reviewer:** No reviewer assigned (`reviewer` property omitted).

## 4. Content Architecture & Quality Standards
- **13-Step Semantic Pipeline:** All content follows the entity-modelled pipeline from `SEO Content creator` with full artifacts in `content-drafts/<slug>-<date>/` (`draft.md`, `draft.annotated.md`, `research-notes.md`, `entities.json`, `schema.jsonld`, `coverage.md`, `content-entry.md`).
- **Internal Links:** Every new scheme guide must establish comprehensive bidirectional internal links with relevant thematic clusters.
- **FAQs:** Exactly 10 FAQs per article with direct, standalone first sentences.

## 5. Verification Gate Before Commit
Before any commit to Git:
1. `npx tsc --noEmit` must pass with 0 errors.
2. `npm run seo:qa` must pass with 0 failures and 0 pending.
3. `npm run build` must cleanly generate all static routes.
