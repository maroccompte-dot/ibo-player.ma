import type { Metadata } from "next";
import Link from "next/link";
import {
  absoluteUrl,
  breadcrumbJsonLd,
  buildPageMetadata,
} from "@/lib/seo";
import { siteConfig } from "@/lib/site";

const pageDescription =
  "Qui sommes-nous : IPTV IBO PLAYER à Casablanca. Activation IPTV Maroc, lecteurs et abonnements (Rabat, Marrakech, Tanger…). Équipe, mission et contact.";

export const metadata: Metadata = buildPageMetadata({
  title: "À propos — IPTV IBO PLAYER Maroc",
  description: pageDescription,
  path: "/a-propos",
  keywords: [
    "à propos IPTV IBO PLAYER",
    "IPTV Casablanca",
    "revendeur IPTV Maroc",
    "activation IPTV Casablanca",
  ],
});

export default function AProposPage() {
  const { company, author, mapsUrl, sameAs } = siteConfig;

  const crumbs = breadcrumbJsonLd([
    { name: "Accueil", path: "/" },
    { name: "À propos", path: "/a-propos" },
  ]);

  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": absoluteUrl("/a-propos#about"),
    name: "À propos — IPTV IBO PLAYER",
    url: absoluteUrl("/a-propos"),
    description: pageDescription,
    dateModified: "2026-10-26",
    mainEntity: {
      "@type": "LocalBusiness",
      "@id": `${siteConfig.url}/#organization`,
      name: company.name,
      url: siteConfig.url,
      email: company.email,
      sameAs: [...sameAs],
      address: {
        "@type": "PostalAddress",
        streetAddress: company.address,
        addressLocality: company.city,
        postalCode: company.postalCode,
        addressCountry: "MA",
      },
      founder: {
        "@type": "Person",
        "@id": absoluteUrl("/a-propos#author"),
        name: author.name,
        jobTitle: author.jobTitle,
        url: absoluteUrl(author.url),
      },
    },
  };

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": absoluteUrl("/a-propos#author"),
    name: author.name,
    jobTitle: author.jobTitle,
    description: author.description,
    url: absoluteUrl(author.url),
    worksFor: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: company.name,
    },
    sameAs: [...sameAs],
  };

  return (
    <div className="page-atmosphere">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-16">
        <p className="text-xs font-semibold uppercase tracking-wider text-[var(--ma-green)]">
          Qui sommes-nous
        </p>
        <h1 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          À propos d’IPTV IBO PLAYER
        </h1>

        <p className="mt-6 border-l-4 border-[var(--ma-green)] bg-white/70 py-3 pl-4 text-[15px] leading-relaxed text-slate-800">
          <strong>IPTV IBO PLAYER</strong> est une société à Casablanca qui active
          et accompagne des setups IPTV partout au Maroc : lecteurs
          (applications), abonnements / serveurs, box TV et SAV à distance.
        </p>

        <section className="mt-10">
          <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-slate-900 sm:text-2xl">
            Notre mission
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-700">
            Clarifier le parcours <strong>lecteur + abonnement + activation</strong>{" "}
            pour éviter les mauvaises combinaisons (app trop complexe, abo trop
            lourd pour le Wi-Fi). Guides techniques, installation et
            renouvellement avec un interlocuteur unique.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-slate-900 sm:text-2xl">
            Direction & rédaction
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-700">
            Directeur de la publication : <strong>{author.name}</strong> —{" "}
            {author.jobTitle} de {company.name}. Les guides du blog sont rédigés
            et mis à jour par l’équipe sous sa responsabilité éditoriale.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-slate-900 sm:text-2xl">
            Siège & couverture
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-700">
            {company.address}, {company.postalCode} {company.city},{" "}
            {company.country}. Activation et SAV à distance partout au Maroc ;
            accueil possible au siège sur rendez-vous.
          </p>
          <ul className="mt-4 space-y-2 text-[15px] text-slate-700">
            <li>
              E-mail :{" "}
              <a
                href={`mailto:${company.email}`}
                className="font-semibold text-[var(--ma-green)] underline underline-offset-2"
              >
                {company.email}
              </a>
            </li>
            <li>
              Fiche établissement :{" "}
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[var(--ma-green)] underline underline-offset-2"
              >
                Google Maps
              </a>
            </li>
            <li>
              Mentions légales : ICE {company.siret} · {company.rcs}
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-slate-900 sm:text-2xl">
            Ce que nous proposons
          </h2>
          <ul className="mt-4 space-y-2 text-[15px] leading-relaxed text-slate-700">
            <li>
              <Link
                href="/application-iptv"
                className="font-semibold text-[var(--ma-green)] underline underline-offset-2"
              >
                Applications IPTV
              </Link>{" "}
              — IBO Player, TiviMate, Smarters Pro…
            </li>
            <li>
              <Link
                href="/serveur-iptv"
                className="font-semibold text-[var(--ma-green)] underline underline-offset-2"
              >
                Serveurs & abonnements
              </Link>{" "}
              — Trex, Crystal, Strong 8K, Dream 4K…
            </li>
            <li>
              <Link
                href="/boutique"
                className="font-semibold text-[var(--ma-green)] underline underline-offset-2"
              >
                Box TV
              </Link>{" "}
              — Fire Stick et Android TV
            </li>
            <li>
              Remboursement 15 jours — voir la{" "}
              <Link
                href="/politique-remboursement"
                className="font-semibold text-[var(--ma-green)] underline underline-offset-2"
              >
                politique de remboursement
              </Link>
            </li>
          </ul>
        </section>

        <p className="mt-12 text-sm text-slate-600">
          Une question ?{" "}
          <Link
            href="/contact"
            className="font-semibold text-[var(--ma-green)] underline underline-offset-2"
          >
            Contactez-nous
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
