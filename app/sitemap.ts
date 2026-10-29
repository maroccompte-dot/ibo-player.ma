import type { MetadataRoute } from "next";
import { apps } from "@/data/apps";
import { blogPosts } from "@/data/blog";
import { boxes } from "@/data/boxes";
import { servers } from "@/data/servers";
import { CONTENT_UPDATED_AT } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const contentDate = new Date(CONTENT_UPDATED_AT);

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: contentDate, changeFrequency: "weekly", priority: 1 },
    {
      url: `${base}/application-iptv`,
      lastModified: contentDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${base}/serveur-iptv`,
      lastModified: contentDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${base}/boutique`,
      lastModified: contentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/blog`,
      lastModified: contentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/contact`,
      lastModified: contentDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${base}/a-propos`,
      lastModified: contentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/mentions-legales`,
      lastModified: contentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${base}/dmca`,
      lastModified: contentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${base}/politique-confidentialite`,
      lastModified: contentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${base}/politique-remboursement`,
      lastModified: contentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${base}/cgv`,
      lastModified: contentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const appRoutes = apps.map((a) => ({
    url: `${base}/apps/${a.slug}`,
    lastModified: contentDate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const serverRoutes = servers.map((s) => ({
    url: `${base}/servers/${s.slug}`,
    lastModified: contentDate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const boxRoutes = boxes.map((b) => ({
    url: `${base}/boutique/${b.slug}`,
    lastModified: contentDate,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const blogRoutes = blogPosts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [
    ...staticRoutes,
    ...blogRoutes,
    ...boxRoutes,
    ...appRoutes,
    ...serverRoutes,
  ];
}
