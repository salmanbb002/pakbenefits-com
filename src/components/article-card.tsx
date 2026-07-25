import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock3 } from "lucide-react";
import type { Article } from "@/data/content";

export function ArticleCard({ article, featured = false }: { article: Article; featured?: boolean }) {
  return (
    <article className={`article-card ${featured ? "article-card-featured" : ""}`}>
      <Link className="article-image" href={`/${article.slug}/`} aria-label={article.title}>
        <Image src={article.image} alt={article.imageAlt} fill sizes={featured ? "(max-width: 768px) 100vw, 58vw" : "(max-width: 768px) 100vw, 33vw"} />
      </Link>
      <div className="article-card-body">
        <div className="article-meta"><span>{article.primaryCategory}</span><span><Clock3 size={13} /> {article.readTime}</span></div>
        <h3><Link href={`/${article.slug}/`}>{article.title}</Link></h3>
        <p>{article.excerpt}</p>
        <Link className="text-link" href={`/${article.slug}/`}>Read guide <ArrowUpRight size={16} /></Link>
      </div>
    </article>
  );
}
