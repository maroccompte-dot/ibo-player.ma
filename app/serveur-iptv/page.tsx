import type { Metadata } from "next";
import Link from "next/link";
import ItemCard from "@/components/ItemCard";
import { servers } from "@/data";
import { serveurIptvFaq } from "@/data/serveur-iptv-faq";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Serveurs IPTV Maroc — Trex, Crystal, Strong 8K",
  description:
    "Abonnement IPTV Maroc : Trex, Crystal, Strong 8K, Dream 4K… Activation Xtream / M3U, renouvellement et SAV à Casablanca — tout le Maroc.",
  path: "/serveur-iptv",
  keywords: [
    "serveur IPTV Maroc",
    "abonnement IPTV Maroc",
    "Trex IPTV Maroc",
    "Crystal IPTV Maroc",
    "Strong 8K Maroc",
    "meilleur abonnement IPTV Maroc",
    "IPTV Casablanca",
  ],
});

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: serveurIptvFaq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function ServeurIptvPage() {
  const crumbs = breadcrumbJsonLd([
    { name: "Accueil", path: "/" },
    { name: "Serveurs IPTV", path: "/serveur-iptv" },
  ]);

  return (
    <div className="page-atmosphere">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <p className="text-xs font-semibold uppercase tracking-wider text-[var(--ma-green)]">
          Abonnements IPTV
        </p>
        <h1 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Serveurs & abonnements IPTV au Maroc
        </h1>
        <p className="mt-4 max-w-2xl border-l-4 border-[var(--ma-green)] bg-white/70 py-3 pl-4 text-base leading-relaxed text-slate-800">
          <strong>Réponse courte :</strong> un serveur / abonnement IPTV
          fournit les <strong>flux</strong> (chaînes et VOD selon formule). Vous
          recevez des codes Xtream ou un lien M3U à saisir dans votre lecteur.
        </p>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
          {servers.length} offres — Crystal, Trex, Strong 8K, Dream 4K, Megaott
          et plus. Compatible IBO Player, TiviMate, Smarters… Activation et
          renouvellement chez <strong>{siteConfig.company.name}</strong>.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/application-iptv"
            className="inline-flex bg-[var(--ma-green)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--ma-red)]"
          >
            Voir les applications IPTV
          </Link>
          <Link
            href="/contact"
            className="inline-flex border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800"
          >
            Demander un devis
          </Link>
        </div>
      </div>

      <section className="border-t border-slate-200/60 bg-white/50">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-slate-900">
            À quoi sert un serveur IPTV ?
          </h2>
          <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-slate-700">
            <p>
              L’<strong>abonnement / serveur</strong> fournit les chaînes et la
              VOD (selon formule). Après souscription chez IPTV IBO PLAYER, vous
              recevez les codes à ajouter dans votre lecteur — pas besoin
              d’installer « le serveur » comme une app.
            </p>
            <p>
              La qualité dépend du panel <strong>et</strong> de votre réseau :
              fibre + Ethernet pour l’UHD ; Wi-Fi 5 GHz correct pour du HD
              quotidien. Un mauvais abo sur une mauvaise connexion = buffering,
              même avec le meilleur player.
            </p>
            <p>
              Renouvellement, multi-connexions, dépannage login : c’est le SAV
              boutique —{" "}
              <Link
                href="/politique-remboursement"
                className="font-semibold text-[var(--ma-green)] underline underline-offset-2"
              >
                remboursement 15 jours
              </Link>
              , garantie sur la durée.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200/60">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-slate-900">
            Comment choisir votre abonnement
          </h2>
          <ul className="mt-8 grid gap-5 sm:grid-cols-3">
            <li className="border border-slate-200 bg-white/80 p-5">
              <h3 className="font-[family-name:var(--font-display)] font-bold text-slate-900">
                Usage quotidien
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Offres polyvalentes (ex. Crystal, Trex) pour JT, divertissement
                et une base sport selon le panel.
              </p>
            </li>
            <li className="border border-slate-200 bg-white/80 p-5">
              <h3 className="font-[family-name:var(--font-display)] font-bold text-slate-900">
                Fibre / UHD
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Dream 4K, Strong 8K… si TV et débit suivent. Sinon un excellent
                FHD stable vaut mieux qu’un 8K qui buffer.
              </p>
            </li>
            <li className="border border-slate-200 bg-white/80 p-5">
              <h3 className="font-[family-name:var(--font-display)] font-bold text-slate-900">
                Durée & écrans
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                1 à 12 mois, 1 à plusieurs connexions. On note la date
                d’expiration pour le renouvellement.
              </p>
            </li>
          </ul>
          <p className="mt-6 text-sm text-slate-600">
            Avis & guides :{" "}
            <Link
              href="/blog/test-iptv-trex-avis-2026"
              className="font-semibold text-[var(--ma-green)] underline underline-offset-2"
            >
              Trex
            </Link>
            {" · "}
            <Link
              href="/blog/test-iptv-crystal-avis-2026"
              className="font-semibold text-[var(--ma-green)] underline underline-offset-2"
            >
              Crystal
            </Link>
            {" · "}
            <Link
              href="/blog/test-iptv-strong-8k-avis-2026"
              className="font-semibold text-[var(--ma-green)] underline underline-offset-2"
            >
              Strong 8K
            </Link>
            {" · "}
            <Link
              href="/blog/test-iptv-dream-4k-avis-2026"
              className="font-semibold text-[var(--ma-green)] underline underline-offset-2"
            >
              Dream 4K
            </Link>
          </p>
        </div>
      </section>

      <section className="border-t border-slate-200/60 bg-white/40">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-slate-900 sm:text-3xl">
            Catalogue serveurs & abonnements
          </h2>
          <p className="mt-3 max-w-2xl text-base text-slate-600">
            Ouvrez une fiche pour l’avis, l’installation dans le player et la
            FAQ — puis demandez l’activation.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {servers.map((server) => (
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

      <section
        id="faq"
        className="scroll-mt-20 border-t border-slate-200/60"
      >
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-slate-900 sm:text-3xl">
            FAQ abonnements & serveurs IPTV
          </h2>
          <p className="mt-3 text-base text-slate-600">
            {serveurIptvFaq.length} réponses — choix du panel, débit, VOD,
            multi-connexions, renouvellement, remboursement, VPN.
          </p>
          <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
            {serveurIptvFaq.map((item) => (
              <details key={item.question} className="group py-1">
                <summary className="cursor-pointer list-none py-4 font-[family-name:var(--font-display)] font-semibold text-slate-900 marker:content-none [&::-webkit-details-marker]:hidden">
                  <span className="flex items-start justify-between gap-4">
                    {item.question}
                    <span
                      className="mt-0.5 shrink-0 text-slate-400 transition group-open:rotate-45"
                      aria-hidden
                    >
                      +
                    </span>
                  </span>
                </summary>
                <p className="pb-5 text-sm leading-relaxed text-slate-600">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
          <p className="mt-8 text-sm text-slate-600">
            Pas encore de lecteur ?{" "}
            <Link
              href="/application-iptv"
              className="font-semibold text-[var(--ma-green)] underline underline-offset-2"
            >
              Applications IPTV
            </Link>
            {" · "}
            <Link
              href="/contact"
              className="font-semibold text-[var(--ma-green)] underline underline-offset-2"
            >
              Contact
            </Link>
            {" · "}
            <Link
              href="/politique-remboursement"
              className="font-semibold text-[var(--ma-green)] underline underline-offset-2"
            >
              Remboursement
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
