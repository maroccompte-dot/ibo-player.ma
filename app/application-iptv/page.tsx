import type { Metadata } from "next";
import Link from "next/link";
import ItemCard from "@/components/ItemCard";
import { apps } from "@/data";
import { applicationIptvFaq } from "@/data/application-iptv-faq";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Applications IPTV Maroc — IBO, TiviMate, Smarters",
  description:
    "Lecteurs IPTV au Maroc : IBO Player, TiviMate, Smarters Pro, BOB Player… Installation Fire Stick / Android TV et activation à Casablanca — partout au Maroc.",
  path: "/application-iptv",
  keywords: [
    "application IPTV Maroc",
    "lecteur IPTV Maroc",
    "IBO Player Maroc",
    "TiviMate Maroc",
    "IPTV Smarters Pro Maroc",
    "Fire Stick IPTV Maroc",
    "activation IPTV Casablanca",
  ],
});

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: applicationIptvFaq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function ApplicationIptvPage() {
  const crumbs = breadcrumbJsonLd([
    { name: "Accueil", path: "/" },
    { name: "Applications IPTV", path: "/application-iptv" },
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
          Lecteurs IPTV
        </p>
        <h1 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Applications IPTV au Maroc
        </h1>
        <p className="mt-4 max-w-2xl border-l-4 border-[var(--ma-green)] bg-white/70 py-3 pl-4 text-base leading-relaxed text-slate-800">
          <strong>Réponse courte :</strong> une application IPTV est le{" "}
          <strong>lecteur</strong> qui affiche live et VOD une fois connecté à
          votre abonnement (Xtream Codes ou M3U). Ce n’est pas le serveur.
        </p>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
          {apps.length} lecteurs documentés — Fire Stick, Android TV, Smart TV,
          mobile. Chaque fiche : présentation, installation, FAQ et activation
          chez <strong>{siteConfig.company.name}</strong> (partout au Maroc).
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/serveur-iptv"
            className="inline-flex bg-[var(--ma-green)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--ma-red)]"
          >
            Voir les serveurs IPTV
          </Link>
          <Link
            href="/contact"
            className="inline-flex border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800"
          >
            Demander une activation
          </Link>
        </div>
      </div>

      <section className="border-t border-slate-200/60 bg-white/50">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-slate-900">
            À quoi sert un lecteur IPTV ?
          </h2>
          <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-slate-700">
            <p>
              Le <strong>lecteur</strong> (IBO Player, TiviMate, Smarters Pro,
              BOB Player…) est l’application installée sur votre appareil. Il
              charge vos identifiants <strong>Xtream Codes</strong> ou un lien{" "}
              <strong>M3U</strong>, affiche l’EPG si le serveur le fournit, et
              organise live / VOD / séries.
            </p>
            <p>
              Ce n’est <strong>pas</strong> l’abonnement : le serveur (Trex,
              Crystal, Strong 8K…) fournit les flux. Sur{" "}
              <strong>ibo-player.ma</strong>, on sépare clairement les deux
              pour éviter les mauvais choix (app trop complexe, ou abo trop
              lourd pour votre Wi-Fi).
            </p>
            <p>
              Installation possible sur <strong>Fire Stick / Fire TV</strong>,{" "}
              <strong>Android TV</strong>, certaines Smart TV, téléphone et
              tablette. Apportez votre stick ou écrivez-nous : on vérifie la
              compatibilité avant d’activer.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200/60">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-slate-900">
            Comment choisir votre application
          </h2>
          <ul className="mt-8 grid gap-5 sm:grid-cols-3">
            <li className="border border-slate-200 bg-white/80 p-5">
              <h3 className="font-[family-name:var(--font-display)] font-bold text-slate-900">
                Débutant / Fire Stick
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                IBO Player ou Smarters Pro : activation MAC simple, interface
                claire pour démarrer vite.
              </p>
            </li>
            <li className="border border-slate-200 bg-white/80 p-5">
              <h3 className="font-[family-name:var(--font-display)] font-bold text-slate-900">
                Android TV / EPG avancé
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                TiviMate (souvent Premium) : guide TV, favoris, options pro —
                idéal sur box Android.
              </p>
            </li>
            <li className="border border-slate-200 bg-white/80 p-5">
              <h3 className="font-[family-name:var(--font-display)] font-bold text-slate-900">
                Multi-appareils
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Selon licence et abonnement : on calibre le nombre d’écrans
                (salon + téléphone) dès l’achat.
              </p>
            </li>
          </ul>
          <p className="mt-6 text-sm text-slate-600">
            Guides pratiques :{" "}
            <Link
              href="/blog/comment-utiliser-iptv-au-maroc"
              className="font-semibold text-[var(--ma-green)] underline underline-offset-2"
            >
              utiliser l’IPTV au Maroc
            </Link>
            {" · "}
            <Link
              href="/blog/debit-internet-iptv-maroc"
              className="font-semibold text-[var(--ma-green)] underline underline-offset-2"
            >
              débit internet
            </Link>
            {" · "}
            <Link
              href="/boutique"
              className="font-semibold text-[var(--ma-green)] underline underline-offset-2"
            >
              box TV
            </Link>
          </p>
        </div>
      </section>

      <section className="border-t border-slate-200/60 bg-white/40">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-slate-900 sm:text-3xl">
            Catalogue des lecteurs
          </h2>
          <p className="mt-3 max-w-2xl text-base text-slate-600">
            Ouvrez une fiche pour le guide d’installation étape par étape, puis
            demandez l’activation.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {apps.map((app) => (
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

      <section
        id="faq"
        className="scroll-mt-20 border-t border-slate-200/60"
      >
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-slate-900 sm:text-3xl">
            FAQ applications IPTV
          </h2>
          <p className="mt-3 text-base text-slate-600">
            {applicationIptvFaq.length} réponses — lecteur vs serveur, Fire
            Stick, MAC, EPG, multi-écrans, installation à distance.
          </p>
          <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
            {applicationIptvFaq.map((item) => (
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
            Ensuite : branchez un{" "}
            <Link
              href="/serveur-iptv"
              className="font-semibold text-[var(--ma-green)] underline underline-offset-2"
            >
              abonnement / serveur
            </Link>{" "}
            ou{" "}
            <Link
              href="/contact"
              className="font-semibold text-[var(--ma-green)] underline underline-offset-2"
            >
              contactez-nous
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
