import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CalendarDays, CheckCircle2, ExternalLink, ShieldCheck, UserRound } from "lucide-react";
import { ArticleCard } from "@/components/article-card";
import { articles, categories } from "@/data/content";
import type { Article, Category, InformationPage } from "@/data/content";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://pakbenefits.com";

function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
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
      <section className="page-hero category-hero">
        <div className="shell">
          <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>{category.shortName}</span></nav>
          <span className="eyebrow">Programme guides</span>
          <h1>{category.name}</h1>
          <p>{category.intro}</p>
          <div className="official-reminder"><ShieldCheck size={19} /> Final eligibility and programme decisions always come from the responsible official organization.</div>
        </div>
      </section>
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
  const relatedArticles = articles
    .filter((candidate) => candidate.slug !== article.slug && candidate.categorySlugs.some((slug) => article.categorySlugs.includes(slug)))
    .slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: `${siteUrl}${article.image}`,
    datePublished: article.date,
    dateModified: article.date,
    author: { "@type": "Person", name: article.author.name, jobTitle: article.author.role },
    editor: { "@type": "Person", name: article.reviewer.name, jobTitle: article.reviewer.role },
    publisher: { "@type": "Organization", name: "Welfare Desk Pakistan", logo: { "@type": "ImageObject", url: `${siteUrl}/icon.svg` } },
    mainEntityOfPage: `${siteUrl}/${article.slug}/`,
  };

  const faqSchema = article.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: article.faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      }
    : null;

  return (
    <main>
      <JsonLd data={articleSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}
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
              <p>{article.excerpt}</p>
              <div className="article-byline">
                <span><CalendarDays size={16} /> Updated {article.date}</span>
                <span>{article.readTime}</span>
                <span><UserRound size={16} /> Written by {article.author.name}</span>
                <span>Reviewed by {article.reviewer.name}</span>
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
            <div className="aside-safe"><ShieldCheck size={20} /><strong>Privacy note</strong><span>We never ask for CNIC, OTP, PIN, or bank details.</span></div>
          </aside>
          <div className="article-content">
            <div className="independent-callout"><ShieldCheck size={23} /><div><strong>Independent guide</strong><p>This article explains public information. It does not determine eligibility or replace an official notice.</p></div></div>
            {article.sections.map((section, index) => (
              <section id={`section-${index + 1}`} key={section.title}>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}><CheckCircle2 size={19} /> <span>{bullet}</span></li>)}</ul>}
              </section>
            ))}
            {article.faqs && article.faqs.length > 0 && (
              <section className="article-faqs">
                <span className="eyebrow">Good to know</span>
                <h2>Frequently asked questions</h2>
                <div className="faq-list">
                  {article.faqs.map((item) => (
                    <details key={item.question}>
                      <summary>{item.question}<span aria-hidden="true">+</span></summary>
                      <p>{item.answer}</p>
                    </details>
                  ))}
                </div>
              </section>
            )}
            <section className="official-links">
              <span className="eyebrow">Verify at the source</span>
              <h2>Official links</h2>
              <p>Check the destination address before entering personal information.</p>
              <div>{article.officialLinks.map((link) => <a className="button" href={link.href} target="_blank" rel="noreferrer" key={link.href}>{link.label} <ExternalLink size={16} /></a>)}</div>
            </section>
            <section className="article-contributors">
              <div className="contributor-card">
                <UserRound size={22} />
                <div><strong>{article.author.name}</strong><small>{article.author.role}</small><p>{article.author.bio}</p></div>
              </div>
              <div className="contributor-card">
                <ShieldCheck size={22} />
                <div><strong>{article.reviewer.name}</strong><small>{article.reviewer.role}</small><p>{article.reviewer.bio}</p></div>
              </div>
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
