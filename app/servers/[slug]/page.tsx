import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ReviewContent from "@/components/ReviewContent";
import { getServerBySlug, getAllServerSlugs } from "@/data";
import { breadcrumbJsonLd, DEFAULT_OG_IMAGE } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllServerSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const server = getServerBySlug(slug);
  if (!server) return { title: "Serveur introuvable" };

  const { seo } = server;
  const url = `${siteConfig.url}/servers/${server.slug}`;
  const image = server.logo || DEFAULT_OG_IMAGE.url;

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
      images: [{ url: image, alt: server.name }],
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

export default async function ServerReviewPage({ params }: PageProps) {
  const { slug } = await params;
  const server = getServerBySlug(slug);
  if (!server) notFound();

  const crumbs = breadcrumbJsonLd([
    { name: "Accueil", path: "/" },
    { name: "Serveurs", path: "/serveur-iptv" },
    { name: server.name, path: `/servers/${server.slug}` },
  ]);

  const testSlug =
    server.slug === "trex"
      ? "/blog/test-iptv-trex-avis-2026"
      : server.slug === "strong-8k"
        ? "/blog/test-iptv-strong-8k-avis-2026"
        : server.slug === "crystal"
          ? "/blog/test-iptv-crystal-avis-2026"
          : server.slug === "dream-4k"
            ? "/blog/test-iptv-dream-4k-avis-2026"
            : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }}
      />
      <ReviewContent
        item={server}
        contentType="server"
        backHref="/serveur-iptv"
        backLabel="Tous les serveurs"
        relatedGuides={[
          ...(testSlug
            ? [{ href: testSlug, label: `Avis ${server.name} sur le blog` }]
            : []),
          {
            href: "/blog/debit-internet-iptv-maroc",
            label: "Débit internet pour l’IPTV",
          },
          {
            href: "/blog/pourquoi-youtube-netflix-marchent-pas-iptv",
            label: "Pourquoi Netflix marche et pas l’IPTV",
          },
          { href: "/contact", label: "Nous contacter" },
        ]}
      />
    </>
  );
}
