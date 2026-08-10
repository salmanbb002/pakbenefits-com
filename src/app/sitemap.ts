import type { MetadataRoute } from "next";
import { articles, categories, informationPages } from "@/data/content";

export const dynamic = "force-static";

const parseArticleDate = (value: string) => {
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? undefined : parsed;
};

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://pakbenefits.com";
  const newestArticleDate = articles.reduce<Date | undefined>((latest, article) => {
    const date = parseArticleDate(article.date);
    if (!date) return latest;
    return !latest || date > latest ? date : latest;
  }, undefined);

  return [
    { url: `${base}/`, lastModified: newestArticleDate ?? new Date(), changeFrequency: "daily", priority: 1 },
    ...categories.map((category) => ({
      url: `${base}/${category.slug}/`,
      lastModified: newestArticleDate ?? new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...articles.map((article) => ({
      url: `${base}/${article.slug}/`,
      lastModified: parseArticleDate(article.date) ?? new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    ...informationPages.map((page) => ({
      url: `${base}/${page.slug}/`,
      lastModified: new Date("2026-07-01"),
      changeFrequency: "monthly" as const,
      priority: 0.4,
    })),
  ];
}
