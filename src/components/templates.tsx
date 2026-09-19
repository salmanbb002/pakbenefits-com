import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CalendarDays, CheckCircle2, ExternalLink, ShieldCheck, UserRound } from "lucide-react";
import { ArticleCard } from "@/components/article-card";
import { articles, categories } from "@/data/content";
import type { Article, Category, ContentSection, InformationPage } from "@/data/content";
import { contentDateIso } from "@/lib/content-date";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://pakbenefits.com";

function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

function Faqs({ items }: { items: NonNullable<Article["faqs"]> }) {
  if (!items.length) return null;
  return <>
    <JsonLd data={{
      "@context": "https://schema.org", "@type": "FAQPage",
      mainEntity: items.map(({ question, answer }) => ({
        "@type": "Question", name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    }} />
    <section className="article-faqs">
      <span className="eyebrow">Good to know</span>
      <h2>Frequently asked questions</h2>
      <div className="faq-list">{items.map(({ question, answer }) => (
        <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>
      ))}</div>
    </section>
  </>;
}

function ContentSections({ sections }: { sections: ContentSection[] }) {
  return sections.map((section, index) => (
    <section id={`section-${index + 1}`} key={section.title}>
      <h2>{section.title}</h2>
      {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      {section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}><CheckCircle2 size={19} /><span>{bullet}</span></li>)}</ul>}
      {section.subsections?.map((subsection) => <div className="article-subsection" key={subsection.title}>
        <h3>{subsection.title}</h3>
        {subsection.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        {subsection.bullets && <ul>{subsection.bullets.map((bullet) => <li key={bullet}><CheckCircle2 size={19} /><span>{bullet}</span></li>)}</ul>}
      </div>)}
      {section.table && <div className="article-table-wrap"><table>
        {section.table.caption && <caption>{section.table.caption}</caption>}
        <thead><tr>{section.table.headers.map((header) => <th scope="col" key={header}>{header}</th>)}</tr></thead>
        <tbody>{section.table.rows.map((row) => <tr key={row.join("|")}>{row.map((cell, cellIndex) => <td key={`${cellIndex}-${cell}`}>{cell}</td>)}</tr>)}</tbody>
      </table></div>}
      {!!section.links?.length && <div className="article-context-links" aria-label="Related guides">{section.links.map((link) => <Link href={link.href} key={link.href}>{link.label}<ArrowUpRight size={15} /></Link>)}</div>}
    </section>
  ));
}

function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };
}

export function CategoryTemplate({ category, articles: categoryArticles }: { category: Category; articles: Article[] }) {
  return (
    <main>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: category.shortName, path: `/${category.slug}/` }])} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "CollectionPage", "@id": `${siteUrl}/${category.slug}/#collection`, url: `${siteUrl}/${category.slug}/`, name: category.name, description: category.metaDescription || category.intro, dateModified: category.date ? contentDateIso(category.date) : undefined, hasPart: categoryArticles.map((item) => ({ "@type": "Article", url: `${siteUrl}/${item.slug}/`, headline: item.title })) }} />
      <section className="page-hero category-hero">
        <div className="shell">
          <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>{category.shortName}</span></nav>
          <span className="eyebrow">Programme guides</span>
          <h1>{category.name}</h1>
          <p>{category.intro}</p>
          {category.date && <div className="article-byline"><span><CalendarDays size={16} /> Updated {category.date}</span>{category.author && <span><UserRound size={16} /> Written by {category.author.name}</span>}{category.reviewer && <span>Reviewed by {category.reviewer.name}</span>}</div>}
          <div className="official-reminder"><ShieldCheck size={19} /> Final eligibility and programme decisions always come from the responsible official organization.</div>
        </div>
      </section>
      {!!category.sections?.length && <section className="section category-guide-section"><div className="shell"><div className="article-content category-guide" data-editorial-content>
        <ContentSections sections={category.sections} />
        <Faqs items={category.faqs || []} />
        {!!category.officialLinks?.length && <section className="official-links"><h2>Sources and official links</h2><div>{category.officialLinks.map((link) => <a className="button" href={link.href} target="_blank" rel="noreferrer" key={link.href}>{link.label}<ExternalLink size={16} /></a>)}</div></section>}
      </div></div></section>}
      <section className="section">
        <div className="shell">
          <div className="section-heading row-heading">
            <div><span className="eyebrow">Latest in this desk</span><h2>{categoryArticles.length} practical {categoryArticles.length === 1 ? "guide" : "guides"}</h2></div>
            <Link className="text-link" href="/news/">View all news <ArrowUpRight size={16} /></Link>
          </div>
          <div className="article-grid category-grid">
            {categoryArticles.map((article) => <ArticleCard article={article} key={article.slug} />)}
          </div>
        </div>
      </section>
      <section className="category-cta">
        <div className="shell category-cta-inner">
          <div><span className="eyebrow light">Before you continue</span><h2>Keep private details on official portals only.</h2></div>
          <Link className="button button-light" href="/disclaimer/">Read safety guidance</Link>
        </div>
      </section>
    </main>
  );
}

export function ArticleTemplate({ article }: { article: Article }) {
  const primaryCategorySlug = article.categorySlugs[0];
  const primaryCategory = categories.find((category) => category.slug === primaryCategorySlug);
  const articleDate = contentDateIso(article.date);
  const relatedArticles = articles
    .filter((candidate) => candidate.slug !== article.slug && candidate.categorySlugs.some((slug) => article.categorySlugs.includes(slug)))
    .slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: `${siteUrl}${article.image}`,
    datePublished: contentDateIso(article.publishedDate || article.date),
    dateModified: articleDate,
    author: { "@type": "Person", name: article.author.name, jobTitle: article.author.role },
    ...(article.reviewer ? { editor: { "@type": "Person", name: article.reviewer.name, jobTitle: article.reviewer.role } } : {}),
    publisher: { "@type": "Organization", name: "Live Govt Schemes & Ehsaas Programs", logo: { "@type": "ImageObject", url: `${siteUrl}/icon.svg` } },
    mainEntityOfPage: `${siteUrl}/${article.slug}/`,
    keywords: [article.focusKeyword, ...article.lsiKeywords].join(", "),
    about: article.slug === "what-is-bisp"
      ? { "@type": "GovernmentOrganization", "@id": "https://www.bisp.gov.pk/#organization", name: "Benazir Income Support Programme", alternateName: "BISP", url: "https://www.bisp.gov.pk/" }
      : { "@type": "Thing", name: article.focusKeyword },
    mentions: article.entities.map((name) => ({ "@type": "Thing", name })),
  };

  return (
    <main>
      <JsonLd data={articleSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: article.primaryCategory, path: `/${primaryCategorySlug}/` },
          { name: article.title, path: `/${article.slug}/` },
        ])}
      />
      <article>
        <header className="article-hero">
          <div className="shell article-hero-grid">
            <div className="article-hero-copy">
              <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href={`/${article.categorySlugs[0]}/`}>{article.primaryCategory}</Link></nav>
              <span className="eyebrow">{article.primaryCategory}</span>
              <h1>{article.title}</h1>
              {article.showExcerpt !== false && <p>{article.excerpt}</p>}
              <div className="article-byline">
                <span><CalendarDays size={16} /> Updated {article.date}</span>
                {article.lastChecked && <span><ShieldCheck size={16} /> Official routes checked {article.lastChecked}</span>}
                <span>{article.readTime}</span>
                <span><UserRound size={16} /> Written by {article.author.name}</span>
                {article.reviewer && <span>Reviewed by {article.reviewer.name}</span>}
              </div>
            </div>
            <div className="article-hero-image">
              <Image src={article.image} alt={article.imageAlt} fill priority sizes="(max-width: 900px) 100vw, 48vw" />
            </div>
          </div>
        </header>
        <div className="shell article-layout">
          <aside className="article-aside">
            <p className="aside-label">On this page</p>
            <nav>{article.sections.map((section, index) => <a href={`#section-${index + 1}`} key={section.title}>{section.title}</a>)}</nav>
            <div className="aside-safe"><ShieldCheck size={20} /><strong>Privacy note</strong><span>We never ask for CNIC, OTP, PIN, or bank details.</span><Link href="/avoid-bisp-fraud/">Recognize BISP scams</Link></div>
          </aside>
          <div className="article-content">
            <div className="independent-callout"><ShieldCheck size={23} /><div><strong>Independent guide</strong><p>This article explains public information. It does not determine eligibility or replace an official notice.</p></div></div>
            <div data-editorial-content>
              <ContentSections sections={article.sections} />
              <Faqs items={article.faqs || []} />
            </div>
            <section className="official-links">
              <span className="eyebrow">Verify at the source</span>
              <h2>Sources and official links</h2>
              <p>Check the destination address before entering personal information.</p>
              <div>{article.officialLinks.map((link) => <a className="button" href={link.href} target="_blank" rel="noreferrer" key={link.href}>{link.label} <ExternalLink size={16} /></a>)}</div>
            </section>
            <section className="article-contributors">
              <div className="contributor-card">
                <UserRound size={22} />
                <div><strong>{article.author.name}</strong><small>{article.author.role}</small><p>{article.author.bio}</p></div>
              </div>
              {article.reviewer && (
                <div className="contributor-card">
                  <ShieldCheck size={22} />
                  <div><strong>{article.reviewer.name}</strong><small>{article.reviewer.role}</small><p>{article.reviewer.bio}</p></div>
                </div>
              )}
            </section>
            {relatedArticles.length > 0 && (
              <section className="related-articles">
                <span className="eyebrow">Continue reading</span>
                <h2>Related guides</h2>
                <div className="article-grid category-grid">
                  {relatedArticles.map((related) => <ArticleCard article={related} key={related.slug} />)}
                </div>
              </section>
            )}
            <Link className="back-link" href={`/${article.categorySlugs[0]}/`}><ArrowLeft size={16} /> Back to {primaryCategory?.shortName ?? article.primaryCategory}</Link>
          </div>
        </div>
      </article>
    </main>
  );
}

export function InformationTemplate({ page }: { page: InformationPage }) {
  return (
    <main>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: page.title, path: `/${page.slug}/` }])} />
      <section className="page-hero info-hero">
        <div className="shell info-hero-inner">
          <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>{page.title}</span></nav>
          <span className="eyebrow">{page.eyebrow}</span>
          <h1>{page.title}</h1>
          <p>{page.intro}</p>
        </div>
      </section>
      <section className="section info-page-section">
        <div className="shell info-page-grid">
          <div className="info-page-body">
            {page.sections.map((section) => (
              <section key={section.title}>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
                {section.links?.map((link) => <a className="text-link" href={link.href} key={link.href}>{link.label} <ArrowUpRight size={15} /></a>)}
              </section>
            ))}
          </div>
          <aside className="info-side-card">
            <ShieldCheck size={28} />
            <h2>Your privacy matters</h2>
            <p>Never send a CNIC image, OTP, bank PIN, or password to an information website.</p>
            <Link className="text-link" href="/privacy-policy/">Read privacy policy <ArrowUpRight size={15} /></Link>
          </aside>
        </div>
      </section>
    </main>
  );
}
