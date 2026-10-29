import type { Metadata } from "next";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/data/blog";
import { buildPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Blog IPTV Maroc — Guides installation & avis serveurs",
  description:
    "Guides IPTV Maroc : installation, fibre IAM/Inwi/Orange, avis Trex, Strong 8K, Crystal, Dream 4K. Conseils IPTV IBO PLAYER — Casablanca.",
  path: "/blog",
  keywords: [
    "blog IPTV Maroc",
    "guide IPTV Maroc",
    "avis abonnement IPTV Maroc",
    "débit IPTV Maroc",
    "Trex IPTV Maroc",
    "fibre IPTV Maroc",
  ],
});

export default function BlogPage() {
  const posts = [...blogPosts].sort((a, b) => {
    const byDate = b.publishedAt.localeCompare(a.publishedAt);
    return byDate !== 0 ? byDate : a.title.localeCompare(b.title, "fr");
  });

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog IPTV Maroc — IPTV IBO PLAYER",
    description:
      "Guides, IPTV Maroc et avis d’abonnements IPTV au Maroc.",
    url: `${siteConfig.url}/blog`,
    publisher: {
      "@type": "Organization",
      name: siteConfig.company.name,
      url: siteConfig.url,
    },
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: `${siteConfig.url}/blog/${p.slug}`,
      datePublished: p.publishedAt,
      image: `${siteConfig.url}${p.image}`,
    })),
  };

  return (
    <div className="page-atmosphere">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-wider text-[var(--ma-green)]">
          Blog
        </p>
        <h1 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Blog IPTV au Maroc
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
          Guides, IPTV Maroc et avis d’abonnements — articles clairs pour bien
          choisir votre setup. Par {siteConfig.company.name}, partout en
          Maroc.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
