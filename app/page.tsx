import type { Metadata } from "next";
import type React from "react";
import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import BoxCard from "@/components/BoxCard";
import GoogleReviews from "@/components/GoogleReviews";
import ItemCard from "@/components/ItemCard";
import { apps, servers } from "@/data";
import { blogPosts } from "@/data/blog";
import { boxes } from "@/data/boxes";
import { googleReviews, googleReviewsMeta } from "@/data/google-reviews";
import { homeFaq } from "@/data/home-faq";
import { buildPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

const homeTitle =
  "IPTV Maroc — Activation, abonnements & lecteurs | Marrakech";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: homeTitle,
    description: siteConfig.description,
    path: "/",
    keywords: [...siteConfig.keywords],
  }),
  title: { absolute: homeTitle },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

/**
 * Avis Google : un seul AggregateRating, rattaché à #organization (déjà dans le layout).
 * Évite GSC « L’avis contient plusieurs notes cumulées ».
 */
const reviewsJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.company.name,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: googleReviewsMeta.ratingValue,
    reviewCount: googleReviewsMeta.reviewCount,
    bestRating: googleReviewsMeta.bestRating,
    worstRating: googleReviewsMeta.worstRating,
  },
  review: googleReviews.map((r) => ({
    "@type": "Review",
    author: { "@type": "Person", name: r.author },
    reviewRating: {
      "@type": "Rating",
      ratingValue: r.rating,
      bestRating: 5,
      worstRating: 1,
    },
    reviewBody: r.text,
  })),
};

const steps = [
  {
    n: "1",
    title: "Choisir un lecteur",
    text: "IBO Player, TiviMate, Smarters Pro… selon votre Fire Stick, Android TV ou box.",
    href: "/application-iptv",
    label: "Voir les applications",
  },
  {
    n: "2",
    title: "Choisir un abonnement",
    text: "Trex, Crystal, Strong 8K, Dream 4K… selon votre fibre et votre usage.",
    href: "/serveur-iptv",
    label: "Voir les serveurs",
  },
  {
    n: "3",
    title: "Activation & SAV",
    text: "On configure à distance partout au Maroc — siège à Marrakech si besoin.",
    href: "/contact",
    label: "Nous contacter",
  },
] as const;

export default function HomePage() {
  const { company, mapsUrl } = siteConfig;
  const featuredApps = apps.slice(0, 6);
  const featuredServers = servers.slice(0, 6);
  const featuredBoxes = [...boxes]
    .sort((a, b) => Number(b.recommended) - Number(a.recommended))
    .slice(0, 4);
  const latestPosts = [...blogPosts]
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .slice(0, 3);

  return (
    <div className="page-atmosphere">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsJsonLd) }}
      />

      {/* 1. Hero */}
      <section className="relative overflow-hidden border-b border-slate-200/60">
        <div
          className="hero-grid pointer-events-none absolute inset-0"
          aria-hidden
        />
        <div className="tricolor-bar relative z-10" aria-hidden />
        <div className="relative z-10 mx-auto grid min-h-[65vh] max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <div>
            <p className="font-[family-name:var(--font-display)] text-sm font-semibold uppercase tracking-[0.2em] text-[var(--ma-green)]">
              IPTV Maroc · Marrakech · Activation
            </p>
            <h1 className="mt-4 max-w-xl font-[family-name:var(--font-display)] text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Activation IPTV au Maroc : lecteurs, serveurs et abonnements
            </h1>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="IBO Player"
              width={220}
              height={56}
              className="mt-4 h-12 w-auto object-contain sm:h-14"
            />
            <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg">
              Un parcours clair :{" "}
              <strong>lecteur + abonnement + activation</strong>. Guides
              techniques, SAV à distance partout au Maroc. Siège à{" "}
              {company.city}.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/application-iptv"
                className="bg-[var(--ma-green)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--ma-red)]"
              >
                Applications IPTV
              </Link>
              <Link
                href="/serveur-iptv"
                className="border border-slate-300 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-[var(--ma-green)] hover:text-[var(--ma-green)]"
              >
                Serveurs IPTV
              </Link>
            </div>
            <form
              {...({
                toolname: "find_iptv_guide",
                tooldescription:
                  "Recherche un guide ou une fiche lecteur/abonnement IPTV sur ibo-player.ma.",
              } as React.HTMLAttributes<HTMLFormElement>)}
              action="/blog"
              method="get"
              className="mt-6 flex max-w-md gap-2"
              role="search"
              aria-label="Rechercher un guide IPTV"
            >
              <label htmlFor="home-q" className="sr-only">
                Mot-clé guide IPTV
              </label>
              <input
                id="home-q"
                name="q"
                type="search"
                required
                placeholder="Ex. Trex, débit, Fire Stick…"
                {...({
                  toolparamdescription:
                    "Mot-clé : nom de lecteur, serveur ou sujet de guide",
                } as React.InputHTMLAttributes<HTMLInputElement>)}
                className="min-w-0 flex-1 border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900"
              />
              <button
                type="submit"
                className="shrink-0 border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 hover:border-[var(--ma-green)] hover:text-[var(--ma-green)]"
              >
                Chercher
              </button>
            </form>
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:mx-0 lg:max-w-none">
            <div className="overflow-hidden border border-slate-200 shadow-[0_16px_40px_rgba(15,23,42,0.12)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/hero-iptv-maroc.webp?v=20261030b"
                alt="Amis au Maroc devant un match IPTV, drapeau marocain à la main"
                width={1200}
                height={900}
                fetchPriority="high"
                decoding="async"
                className="aspect-[4/3] h-auto w-full object-cover object-center"
              />
              <div className="tricolor-bar" aria-hidden />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Comment ça marche — 3 étapes */}
      <section
        id="comment-ca-marche"
        className="scroll-mt-20 border-t border-slate-200/60 bg-white/60"
      >
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--ma-green)]">
            Parcours simple
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-bold text-slate-900 sm:text-3xl">
            Comment démarrer l’IPTV chez vous
          </h2>
          <p className="mt-3 max-w-2xl text-base text-slate-600">
            Trois étapes. Le catalogue complet est sur les pages Applications
            et Serveurs — ici on explique le chemin.
          </p>
          <ol className="mt-10 grid gap-6 sm:grid-cols-3">
            {steps.map((step) => (
              <li
                key={step.n}
                className="border border-slate-200/90 bg-white/90 p-6"
              >
                <span className="font-[family-name:var(--font-display)] text-3xl font-extrabold text-[var(--ma-green)]">
                  {step.n}
                </span>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-lg font-bold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {step.text}
                </p>
                <Link
                  href={step.href}
                  className="mt-4 inline-flex text-sm font-semibold text-[var(--ma-green)] underline underline-offset-2"
                >
                  {step.label} →
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 3. Chiffres */}
      <section id="chiffres" className="scroll-mt-20 border-t border-slate-200/60">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-slate-900 sm:text-3xl">
            Le guichet unique de votre TV connectée
          </h2>
          <p className="mt-3 max-w-2xl text-base text-slate-600">
            Lecteur, abonnement, box et réglages : un seul interlocuteur pour
            tout le Maroc.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-8 border-t border-slate-200 pt-10 sm:grid-cols-3 sm:gap-6">
            <div>
              <p className="font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-[var(--ma-green)] sm:text-5xl">
                {siteConfig.stats.satisfiedClients}
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-900">
                Clients accompagnés
              </p>
            </div>
            <div>
              <p className="font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-[var(--ma-red)] sm:text-5xl">
                {siteConfig.stats.connectedClients}
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-900">
                Setups actifs
              </p>
            </div>
            <div>
              <p className="font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                {siteConfig.stats.servicesLabel ||
                  `${apps.length + servers.length}+`}
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-900">
                {apps.length} lecteurs · {servers.length} serveurs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Contenu SEO — comprendre (answer-first) */}
      <section
        id="comprendre-iptv"
        className="scroll-mt-20 border-t border-slate-200/60 bg-white/40"
      >
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-16">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-slate-900 sm:text-3xl">
            Comment fonctionne l’IPTV ?
          </h2>
          <p className="mt-6 border-l-4 border-[var(--ma-green)] bg-white/80 py-3 pl-4 text-[15px] leading-relaxed text-slate-800">
            <strong>Réponse courte :</strong> l’IPTV (Internet Protocol
            Television) diffuse chaînes live et VOD via Internet. Il faut un{" "}
            <strong>lecteur</strong> (app) et un <strong>abonnement /
            serveur</strong> compatible — pas une box opérateur fermée.
          </p>
          <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-slate-700">
            <p>
              Sur <strong>ibo-player.ma</strong> : fiches IBO Player,
              TiviMate, Smarters Pro… et abonnements Trex, Crystal, Strong 8K,
              Dream 4K… Chaque fiche = installation, appareils, FAQ.
            </p>
            <p>
              Fire Stick, Android TV, Smart TV, téléphone ou tablette : on vous
              oriente vers la bonne combinaison, avec une connexion fibre /
              Ethernet adaptée.
            </p>
            <p className="text-sm text-slate-600">
              Pour le concept technique :{" "}
              <a
                href="https://fr.wikipedia.org/wiki/IPTV"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[var(--ma-green)] underline underline-offset-2"
              >
                IPTV sur Wikipedia
              </a>
              {" · "}
              appareils Fire TV :{" "}
              <a
                href="https://www.amazon.fr/gp/help/customer/display.html?nodeId=G2JXLC4L5SZJTHJN"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[var(--ma-green)] underline underline-offset-2"
              >
                aide Amazon Fire TV
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* 5. Apps sélection */}
      <section
        id="applications"
        className="scroll-mt-20 border-t border-slate-200/60"
      >
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-slate-900 sm:text-3xl">
                Applications IPTV populaires
              </h2>
              <p className="mt-3 text-base text-slate-600">
                Sélection — catalogue complet ({apps.length} lecteurs) sur la
                page Applications.
              </p>
            </div>
            <Link
              href="/application-iptv"
              className="inline-flex shrink-0 bg-[var(--ma-green)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--ma-red)]"
            >
              Toutes les applications →
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredApps.map((app) => (
              <ItemCard
                key={app.slug}
                item={app}
                href={`/apps/${app.slug}`}
                ctaLabel="En savoir plus"
              />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Lecteur vs abo */}
      <section className="border-t border-slate-200/60 bg-white/50">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-16">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-slate-900 sm:text-3xl">
            Lecteur ou abonnement : par où commencer ?
          </h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-slate-700">
            <p>
              Les deux se complètent : sans lecteur, pas d’écran ; sans
              abonnement, pas de chaînes. Sur Fire Stick, commencez souvent par
              IBO Player ou Smarters Pro ; pour le 4K/8K, on dimensionne ensuite
              le serveur (fibre, Ethernet).
            </p>
            <p>
              <Link
                href="/serveur-iptv"
                className="font-semibold text-[var(--ma-green)] underline underline-offset-2"
              >
                Serveurs & abonnements
              </Link>
              {" · "}
              <Link
                href="/application-iptv"
                className="font-semibold text-[var(--ma-green)] underline underline-offset-2"
              >
                Applications
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* 7. Serveurs sélection */}
      <section
        id="serveurs"
        className="scroll-mt-20 border-t border-slate-200/60"
      >
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-slate-900 sm:text-3xl">
                Serveurs & abonnements populaires
              </h2>
              <p className="mt-3 text-base text-slate-600">
                Sélection — {servers.length} offres sur la page Serveurs.
              </p>
            </div>
            <Link
              href="/serveur-iptv"
              className="inline-flex shrink-0 bg-[var(--ma-green)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--ma-red)]"
            >
              Tous les serveurs →
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServers.map((server) => (
              <ItemCard
                key={server.slug}
                item={server}
                href={`/servers/${server.slug}`}
                ctaLabel="En savoir plus"
              />
            ))}
          </div>
        </div>
      </section>

      {/* 8. Box TV — sous les serveurs */}
      <section
        id="boutique"
        className="scroll-mt-20 border-t border-slate-200/60 bg-white/50"
      >
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-slate-900 sm:text-3xl">
                Box TV compatibles IPTV
              </h2>
              <p className="mt-3 text-base text-slate-600">
                Fire Stick, Formuler, sticks Android — achat Amazon, activation
                chez IPTV IBO PLAYER. Recommandation : Formuler Z10 Neo.
              </p>
            </div>
            <Link
              href="/boutique"
              className="inline-flex shrink-0 bg-[var(--ma-green)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--ma-red)]"
            >
              Toute la boutique →
            </Link>
          </div>
          {featuredBoxes.length > 0 ? (
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {featuredBoxes.map((box) => (
                <BoxCard key={box.slug} box={box} />
              ))}
            </div>
          ) : (
            <Link
              href="/boutique"
              className="mt-8 inline-flex bg-[var(--ma-green)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--ma-red)]"
            >
              Voir la boutique Box TV
            </Link>
          )}
        </div>
      </section>

      {/* 9. Garanties */}
      <section
        id="garanties"
        className="scroll-mt-20 border-t border-slate-200/60 bg-white/40"
      >
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-16">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-slate-900 sm:text-3xl">
            Pourquoi IPTV IBO PLAYER
          </h2>
          <ul className="mt-8 space-y-3 text-sm leading-relaxed text-slate-700">
            <li className="flex gap-2 before:mt-2 before:h-1.5 before:w-1.5 before:shrink-0 before:bg-[var(--ma-red)] before:content-['']">
              Service <strong>partout au Maroc</strong> — siège {company.city}
            </li>
            <li className="flex gap-2 before:mt-2 before:h-1.5 before:w-1.5 before:shrink-0 before:bg-[var(--ma-red)] before:content-['']">
              Activation à distance + guides (apps, serveurs, blog)
            </li>
            <li className="flex gap-2 before:mt-2 before:h-1.5 before:w-1.5 before:shrink-0 before:bg-[var(--ma-red)] before:content-['']">
              <Link
                href="/politique-remboursement"
                className="font-semibold text-[var(--ma-green)] underline underline-offset-2"
              >
                Remboursement 15 jours
              </Link>{" "}
              · garantie sur la durée de l’abonnement
            </li>
            <li className="flex gap-2 before:mt-2 before:h-1.5 before:w-1.5 before:shrink-0 before:bg-[var(--ma-red)] before:content-['']">
              Pas de noms de chaînes / compétitions — contenu technique et
              transparent (
              <Link
                href="/dmca"
                className="font-semibold text-[var(--ma-green)] underline underline-offset-2"
              >
                DMCA
              </Link>
              )
            </li>
          </ul>
        </div>
      </section>

      {/* 9. Blog — 3 articles */}
      <section id="blog" className="scroll-mt-20 border-t border-slate-200/60">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-slate-900 sm:text-3xl">
                Guides & avis du blog
              </h2>
              <p className="mt-3 text-base text-slate-600">
                Contenu utile : installation, débit, IPTV Maroc, tests
                d’abonnements.
              </p>
            </div>
            <Link
              href="/blog"
              className="inline-flex shrink-0 bg-[var(--ma-green)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--ma-red)]"
            >
              Tout le blog →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {latestPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* 10. Avis Google */}
      <GoogleReviews />

      {/* 11. Contact / siège */}
      <section
        id="magasin"
        className="scroll-mt-20 border-t border-slate-200/60"
      >
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-slate-900 sm:text-3xl">
            IPTV partout au Maroc — siège à {company.city}
          </h2>
          <p className="mt-3 max-w-2xl text-base text-slate-600">
            Activation et SAV pour tout le Maroc. Siège : {company.address},{" "}
            {company.postalCode} {company.city}.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-2 md:items-start">
            <div className="space-y-4 text-sm leading-relaxed text-slate-700">
              <p>
                <strong className="text-slate-900">Contact</strong>
                <br />
                <a
                  href={`mailto:${company.email}`}
                  className="text-[var(--ma-green)] underline underline-offset-2"
                >
                  {company.email}
                </a>
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex bg-[var(--ma-green)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--ma-red)]"
                >
                  Page contact
                </Link>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800"
                >
                  Google Maps
                </a>
              </div>
            </div>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block min-h-[240px] overflow-hidden border border-slate-200 bg-[linear-gradient(135deg,#002395_0%,#002395_33%,#ffffff_33%,#ffffff_66%,#ed2939_66%,#ed2939_100%)]"
            >
              <span
                className="absolute inset-0 bg-slate-900/55 transition-colors group-hover:bg-slate-900/45"
                aria-hidden
              />
              <span className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
                <span className="font-[family-name:var(--font-display)] text-xl font-bold">
                  IPTV MAROC — {company.city}
                </span>
                <span className="mt-2 text-sm text-white/90">
                  Siège {company.postalCode} {company.city} — service Maroc
                  entier
                </span>
                <span className="mt-3 text-xs font-semibold uppercase tracking-wider text-white/80">
                  Voir sur Google Maps
                </span>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* 12. FAQ */}
      <section
        id="faq"
        className="scroll-mt-20 border-t border-slate-200/60 bg-white/40"
      >
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-16">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-slate-900 sm:text-3xl">
            FAQ IPTV
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Réponses courtes — pour le détail, ouvrez une fiche application ou
            serveur.
          </p>
          <dl className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
            {homeFaq.map((item) => (
              <div key={item.question} className="py-5">
                <dt className="font-[family-name:var(--font-display)] font-semibold text-slate-900">
                  {item.question}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </div>
  );
}
