import type { Metadata } from "next";
import { contentDateIso } from "@/lib/content-date";
import { notFound } from "next/navigation";
import { ArticleTemplate, CategoryTemplate, InformationTemplate } from "@/components/templates";
import { allInternalSlugs, articles, categories, getArticlesForCategory, informationPages } from "@/data/content";

type PageProps = { params: Promise<{ slug: string }> };

const siteName = "Live Govt Schemes & Ehsaas Programs";

export function generateStaticParams() {
  return allInternalSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find((item) => item.slug === slug);
  const article = articles.find((item) => item.slug === slug);
  const infoPage = informationPages.find((item) => item.slug === slug);
  const title = article?.metaTitle || article?.title || category?.metaTitle || category?.name || infoPage?.title;
  const description = article?.metaDescription || article?.excerpt || category?.metaDescription || category?.intro || infoPage?.intro;
  if (!title || !description) return {};
  const canonical = `/${slug}/`;
  const image = article?.image || "/images/hero-support.jpg";
  const keywords = article ? [article.focusKeyword, ...article.lsiKeywords, ...article.entities] : undefined;
  return {
    title,
    description,
    keywords,
    authors: article ? [{ name: article.author.name }] : undefined,
    alternates: { canonical },
    openGraph: article
      ? {
          title,
          description,
          url: canonical,
          siteName,
          type: "article",
          locale: "en_PK",
          publishedTime: contentDateIso(article.publishedDate || article.date),
          modifiedTime: contentDateIso(article.date),
          section: article.primaryCategory,
          tags: article.categorySlugs,
          images: [{ url: image, alt: article.imageAlt }],
        }
      : {
          title,
          description,
          url: canonical,
          siteName,
          type: "website",
          locale: "en_PK",
          images: [{ url: image, alt: "Public service guidance in Pakistan" }],
        },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: image, alt: article?.imageAlt || "Public service guidance in Pakistan" }],
    },
  };
}

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params;
  const category = categories.find((item) => item.slug === slug);
  if (category) return <CategoryTemplate category={category} articles={getArticlesForCategory(slug)} />;

  const article = articles.find((item) => item.slug === slug);
  if (article) return <ArticleTemplate article={article} />;

  const infoPage = informationPages.find((item) => item.slug === slug);
  if (infoPage) return <InformationTemplate page={infoPage} />;

  notFound();
}
