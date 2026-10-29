import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { boxes, getAllBoxSlugs, getBoxBySlug } from "@/data/boxes";
import { siteConfig } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllBoxSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const box = getBoxBySlug(slug);
  if (!box) return { title: "Produit introuvable" };

  const url = `${siteConfig.url}/boutique/${box.slug}`;
  return {
    title: { absolute: `${box.seoTitle} | ${siteConfig.name}` },
    description: box.seoDescription,
    alternates: { canonical: url },
    openGraph: {
      title: box.seoTitle,
      description: box.seoDescription,
      url,
      images: [{ url: box.image, alt: box.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: box.seoTitle,
      description: box.seoDescription,
      images: [box.image],
    },
  };
}

export const dynamicParams = false;

export default async function BoxProductPage({ params }: PageProps) {
  const { slug } = await params;
  const box = getBoxBySlug(slug);
  if (!box) notFound();

  const paragraphs = box.fullDescription.trim().split(/\n\n+/);

  return (
    <article className="page-atmosphere">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <Link
          href="/boutique"
          className="text-sm font-medium text-[var(--ma-green)] hover:text-slate-900"
        >
          ← Toute la boutique
        </Link>

        <div className="mt-8 grid gap-8 sm:grid-cols-[220px_1fr] sm:items-start">
          <div className="relative mx-auto aspect-square w-full max-w-[220px] border border-slate-200 bg-white">
            <Image
              src={box.image}
              alt={box.name}
              fill
              className="object-contain p-4"
              sizes="220px"
              priority
            />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              {box.brand && (
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--ma-green)]">
                  {box.brand}
                </p>
              )}
              {box.recommended && (
                <span className="bg-[var(--ma-red)] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                  Recommandé
                </span>
              )}
              {box.eco && (
                <span className="bg-emerald-700 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                  Éco
                </span>
              )}
            </div>
            <h1 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              {box.name} — Box TV IPTV
            </h1>
            <p className="mt-3 text-base text-slate-600">
              {box.shortDescription}
            </p>
            <p className="mt-4 text-lg font-semibold text-slate-900">
              {box.priceLabel}
            </p>
            <a
              href={box.amazonUrl}
              target="_blank"
              rel="noopener noreferrer sponsored nofollow"
              className="mt-6 inline-flex bg-[var(--ma-green)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--ma-red)]"
            >
              Voir sur Amazon
            </a>
          </div>
        </div>

        <section className="mt-12">
          <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-slate-900">
            Description — {box.name}
          </h2>
          <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-slate-700">
            {paragraphs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
        </section>

        {box.features.length > 0 && (
          <section className="mt-10">
            <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-slate-900">
              Points forts
            </h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {box.features.map((f) => (
                <li
                  key={f}
                  className="flex gap-2 text-sm text-slate-700 before:mt-2 before:h-1.5 before:w-1.5 before:shrink-0 before:bg-[var(--ma-red)] before:content-['']"
                >
                  {f}
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="mt-12 border border-[var(--ma-green)]/20 bg-[var(--ma-green)]/[0.04] p-6 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-lg font-bold text-slate-900">
            Besoin d’activation IPTV sur cette box ?
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Après achat Amazon, IPTV IBO PLAYER installe le lecteur et
            l’abonnement.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <a
              href={box.amazonUrl}
              target="_blank"
              rel="noopener noreferrer sponsored nofollow"
              className="bg-[var(--ma-green)] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[var(--ma-red)]"
            >
              Acheter sur Amazon
            </a>
            <Link
              href="/contact"
              className="border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 hover:border-[var(--ma-green)]"
            >
              Nous contacter
            </Link>
          </div>
        </section>

        {boxes.filter((b) => b.slug !== box.slug).length > 0 && (
          <p className="mt-10 text-center text-sm">
            <Link href="/boutique" className="font-semibold text-[var(--ma-green)]">
              Voir d’autres box TV →
            </Link>
          </p>
        )}
      </div>
    </article>
  );
}
