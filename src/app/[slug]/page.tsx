import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleTemplate, CategoryTemplate, InformationTemplate } from "@/components/templates";
import { allInternalSlugs, articles, categories, getArticlesForCategory, informationPages } from "@/data/content";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return allInternalSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find((item) => item.slug === slug);
  const article = articles.find((item) => item.slug === slug);
  const infoPage = informationPages.find((item) => item.slug === slug);
  const title = article?.title || category?.name || infoPage?.title;
  const description = article?.excerpt || category?.intro || infoPage?.intro;
  if (!title || !description) return {};
  return {
    title,
    description,
    openGraph: article ? { title, description, type: "article", images: [article.image] } : { title, description },
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
