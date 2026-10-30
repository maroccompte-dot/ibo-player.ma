import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

/** Image Open Graph / Twitter par défaut (1200×630 recommandé) */
export const DEFAULT_OG_IMAGE = {
  url: "/images/hero-iptv-maroc.jpg",
  width: 1200,
  height: 900,
  alt: "IPTV Maroc — amis devant un match, drapeau marocain — IPTV IBO PLAYER",
} as const;

export const CONTENT_UPDATED_AT = "2026-10-30";

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  const base = siteConfig.url.replace(/\/$/, "");
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}

export function buildPageMetadata(opts: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  type?: "website" | "article";
  noIndex?: boolean;
}): Metadata {
  const url = absoluteUrl(opts.path);
  const imageUrl = absoluteUrl(opts.image ?? DEFAULT_OG_IMAGE.url);

  return {
    title: opts.title,
    description: opts.description,
    keywords: opts.keywords,
    robots: opts.noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    alternates: { canonical: url },
    openGraph: {
      type: opts.type ?? "website",
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.name,
      title: opts.title,
      description: opts.description,
      images: [
        {
          url: imageUrl,
          width: DEFAULT_OG_IMAGE.width,
          height: DEFAULT_OG_IMAGE.height,
          alt: opts.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
      images: [imageUrl],
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.company.name,
    url: siteConfig.url,
    description: siteConfig.description,
    email: siteConfig.company.email,
    ...(siteConfig.company.phoneHref
      ? { telephone: siteConfig.company.phoneHref }
      : {}),
    logo: {
      "@type": "ImageObject",
        url: absoluteUrl("/logo.png"),
    },
    image: absoluteUrl(DEFAULT_OG_IMAGE.url),
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.company.address,
      addressLocality: siteConfig.company.city,
      postalCode: siteConfig.company.postalCode,
      addressCountry: "MA",
    },
    areaServed: { "@type": "Country", name: "Maroc" },
    sameAs: [...siteConfig.sameAs],
    founder: {
      "@type": "Person",
      "@id": absoluteUrl("/a-propos#author"),
      name: siteConfig.author.name,
      jobTitle: siteConfig.author.jobTitle,
      url: absoluteUrl(siteConfig.author.url),
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "fr-MA",
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
