import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ReviewContent from "@/components/ReviewContent";
import { getAppBySlug, getAllAppSlugs } from "@/data";
import { breadcrumbJsonLd, DEFAULT_OG_IMAGE } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllAppSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const app = getAppBySlug(slug);
  if (!app) return { title: "Application introuvable" };

  const { seo } = app;
  const url = `${siteConfig.url}/apps/${app.slug}`;
  const image = app.logo || DEFAULT_OG_IMAGE.url;

  return {
    title: { absolute: `${seo.title} | ${siteConfig.name}` },
    description: seo.description,
    keywords: seo.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url,
      type: "article",
      images: [{ url: image, alt: app.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [image],
    },
  };
}

export const dynamicParams = false;

export default async function AppReviewPage({ params }: PageProps) {
  const { slug } = await params;
  const app = getAppBySlug(slug);
  if (!app) notFound();

  const crumbs = breadcrumbJsonLd([
    { name: "Accueil", path: "/" },
    { name: "Applications", path: "/application-iptv" },
    { name: app.name, path: `/apps/${app.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }}
      />
      <ReviewContent
        item={app}
        contentType="app"
        backHref="/application-iptv"
        backLabel="Toutes les applications"
        relatedGuides={[
          {
            href: "/blog/comment-utiliser-iptv-au-maroc",
            label: "Comment utiliser l’IPTV au Maroc",
          },
          {
            href: "/blog/debit-internet-iptv-maroc",
            label: "Quel débit internet pour l’IPTV ?",
          },
          { href: "/contact", label: "Nous contacter" },
        ]}
      />
    </>
  );
}
