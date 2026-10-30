import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  blogPosts,
  getAllPostSlugs,
  getPostBySlug,
} from "@/data/blog";
import { siteConfig } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Article introuvable" };

  const url = `${siteConfig.url}/blog/${post.slug}`;
  return {
    title: { absolute: `${post.seoTitle} | ${siteConfig.name}` },
    description: post.seoDescription,
    keywords: post.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: post.seoTitle,
      description: post.seoDescription,
      url,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [siteConfig.author.name],
      images: [{ url: post.image, alt: post.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle,
      description: post.seoDescription,
      images: [post.image],
    },
  };
}

export const dynamicParams = false;

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const url = `${siteConfig.url}/blog/${post.slug}`;
  const others = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.seoDescription,
    image: [`${siteConfig.url}${post.image}`],
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      "@type": "Person",
      "@id": `${siteConfig.url}/a-propos#author`,
      name: siteConfig.author.name,
      jobTitle: siteConfig.author.jobTitle,
      url: `${siteConfig.url}${siteConfig.author.url}`,
      worksFor: {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.company.name,
      },
    },
    publisher: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.company.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    keywords: post.keywords.join(", "),
    inLanguage: "fr-MA",
  };

  const faqJsonLd =
    post.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }
      : null;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${siteConfig.url}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: url,
      },
    ],
  };

  return (
    <article className="page-atmosphere">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <Link
          href="/blog"
          className="text-sm font-medium text-[var(--ma-green)] hover:text-slate-900"
        >
          ← Tous les articles
        </Link>

        <header className="mt-6">
          <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
            <span className="text-[var(--ma-green)]">{post.category}</span>
            <span aria-hidden>·</span>
            <time dateTime={post.publishedAt}>
              Publié le{" "}
              {new Date(post.publishedAt).toLocaleDateString("fr-MA", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
            {post.updatedAt !== post.publishedAt && (
              <>
                <span aria-hidden>·</span>
                <time dateTime={post.updatedAt}>
                  Mis à jour le{" "}
                  {new Date(post.updatedAt).toLocaleDateString("fr-MA", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
              </>
            )}
            <span aria-hidden>·</span>
            <span>{post.readingMinutes} min de lecture</span>
          </div>
          <h1 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            {post.excerpt}
          </p>
          <p className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-slate-600">
            <span>
              Par{" "}
              <Link
                href="/a-propos"
                className="font-semibold text-[var(--ma-green)] underline underline-offset-2"
              >
                {siteConfig.author.name}
              </Link>
            </span>
            <span aria-hidden>·</span>
            <span>{siteConfig.author.jobTitle}</span>
            <span aria-hidden>·</span>
            <span>{siteConfig.company.name}</span>
          </p>
        </header>

        <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden border border-slate-200 bg-slate-100">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>

        <div className="mt-10 space-y-4 text-[15px] leading-relaxed text-slate-700">
          {post.intro.split(/\n\n+/).map((p) => (
            <p key={p.slice(0, 48)}>{p}</p>
          ))}
        </div>

        {post.sections.map((section) => (
          <section key={section.heading} className="mt-10">
            <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-slate-900 sm:text-2xl">
              {section.heading}
            </h2>
            <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-slate-700">
              {section.paragraphs.map((p) => (
                <p key={p.slice(0, 48)}>{p}</p>
              ))}
            </div>
            {section.bullets && section.bullets.length > 0 && (
              <ul className="mt-4 space-y-2">
                {section.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex gap-2 text-[15px] leading-relaxed text-slate-700 before:mt-2 before:h-1.5 before:w-1.5 before:shrink-0 before:bg-[var(--ma-red)] before:content-['']"
                  >
                    {b}
                  </li>
                ))}
              </ul>
            )}
            {section.links && section.links.length > 0 && (
              <ul className="mt-6 space-y-3 border border-slate-200 bg-white/70 p-4">
                {section.links.map((link) => (
                  <li key={link.url} className="text-[15px]">
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[var(--ma-green)] underline-offset-2 hover:text-[var(--ma-red)] hover:underline"
                    >
                      {link.label}
                    </a>
                    <span className="text-slate-500"> — {link.url.replace(/^https?:\/\//, "")}</span>
                    {link.note && (
                      <p className="mt-0.5 text-sm text-slate-600">{link.note}</p>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        {post.faq.length > 0 && (
          <section className="mt-12">
            <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-slate-900 sm:text-2xl">
              FAQ — {post.title.split(":")[0]}
            </h2>
            <dl className="mt-6 space-y-5">
              {post.faq.map((item) => (
                <div key={item.question}>
                  <dt className="font-semibold text-slate-900">
                    {item.question}
                  </dt>
                  <dd className="mt-1.5 text-[15px] leading-relaxed text-slate-600">
                    {item.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        <section className="mt-12 border border-[var(--ma-green)]/20 bg-[var(--ma-green)]/[0.04] p-6 text-center">
          <p className="text-[15px] leading-relaxed text-slate-700">{post.cta}</p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            {post.relatedServerSlug && (
              <Link
                href={`/servers/${post.relatedServerSlug}`}
                className="bg-[var(--ma-green)] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[var(--ma-red)]"
              >
                Voir la fiche abonnement
              </Link>
            )}
            <Link
              href="/contact"
              className={
                post.relatedServerSlug
                  ? "border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 hover:border-[var(--ma-green)]"
                  : "bg-[var(--ma-green)] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[var(--ma-red)]"
              }
            >
              Nous contacter
            </Link>
            <Link
              href="/boutique"
              className="border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 hover:border-[var(--ma-green)]"
            >
              Voir les Box TV
            </Link>
          </div>
        </section>

        {others.length > 0 && (
          <section className="mt-14 border-t border-slate-200 pt-10">
            <h2 className="font-[family-name:var(--font-display)] text-lg font-bold text-slate-900">
              À lire aussi
            </h2>
            <ul className="mt-4 space-y-3">
              {others.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="text-sm font-semibold text-[var(--ma-green)] hover:text-[var(--ma-red)]"
                  >
                    {p.title} →
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </article>
  );
}
