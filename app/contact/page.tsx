import type { Metadata } from "next";
import type React from "react";
import { buildPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact IPTV Maroc — Marrakech & WhatsApp",
  description:
    "Contact IPTV IBO PLAYER au Maroc : activation, SAV, devis. E-mail, WhatsApp, fiche Google Maps Marrakech.",
  path: "/contact",
  keywords: [
    "contact IPTV Maroc",
    "IPTV Marrakech",
    "activation IPTV Maroc",
    "WhatsApp IPTV Maroc",
    "SAV IPTV Maroc",
  ],
});

export default function ContactPage() {
  const { company, mapsUrl, mapsEmbedUrl, name } = siteConfig;
  const fullAddress = `${company.address}, ${company.postalCode} ${company.city}, ${company.country}`;
  const hasPhone = Boolean(company.phone?.trim() && company.phoneHref?.trim());

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: company.name,
    url: siteConfig.url,
    email: company.email,
    ...(hasPhone ? { telephone: company.phoneHref } : {}),
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address,
      addressLocality: company.city,
      postalCode: company.postalCode,
      addressCountry: "MA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 31.6332579,
      longitude: -8.0083219,
    },
    areaServed: { "@type": "Country", name: "Maroc" },
  };

  return (
    <div className="page-atmosphere">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-wider text-[var(--ma-green)]">
          Contact
        </p>
        <h1 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Nous contacter
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
          {company.name} — activation IPTV{" "}
          <strong>partout au Maroc</strong>. Écrivez-nous ou appelez-nous ;
          siège à {company.city} pour ceux qui passent sur place.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div className="space-y-6">
            <div className="border border-slate-200/90 bg-white/80 p-6">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                Adresse
              </p>
              <p className="mt-2 font-[family-name:var(--font-display)] text-lg font-bold text-slate-900">
                {company.address}
              </p>
              <p className="mt-1 text-slate-700">
                {company.postalCode} {company.city}
                <br />
                {company.country}
              </p>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex text-sm font-semibold text-[var(--ma-green)] hover:text-[var(--ma-red)]"
              >
                Itinéraire Google Maps →
              </a>
            </div>

            {hasPhone && (
              <div className="border border-slate-200/90 bg-white/80 p-6">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                  Téléphone
                </p>
                <a
                  href={company.phoneHref}
                  className="mt-2 inline-block font-[family-name:var(--font-display)] text-2xl font-bold text-slate-900 hover:text-[var(--ma-green)]"
                >
                  {company.phone}
                </a>
                <p className="mt-2 text-sm text-slate-600">
                  Appelez pour une activation partout au Maroc ou un
                  rendez-vous au siège.
                </p>
              </div>
            )}

            <div className="border border-slate-200/90 bg-white/80 p-6">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                E-mail
              </p>
              <a
                href={`mailto:${company.email}`}
                className="mt-2 inline-block break-all font-[family-name:var(--font-display)] text-xl font-bold text-[var(--ma-green)] hover:text-[var(--ma-red)]"
              >
                {company.email}
              </a>
              <p className="mt-2 text-sm text-slate-600">
                Réponse sous délai ouvrable — précisez votre stick / box et
                votre besoin.
              </p>
            </div>

            <form
              {...({
                toolname: "contact_iptv_ibo_player",
                tooldescription:
                  "Prépare un e-mail de contact pour une activation IPTV, un abonnement ou une question technique chez IPTV IBO PLAYER.",
              } as React.HTMLAttributes<HTMLFormElement>)}
              action={`mailto:${company.email}`}
              method="get"
              encType="text/plain"
              className="border border-slate-200/90 bg-white/80 p-6"
            >
              <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                Message rapide
              </p>
              <label htmlFor="contact-subject" className="mt-4 block text-sm font-medium text-slate-800">
                Objet
              </label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                required
                defaultValue="Demande activation IPTV"
                {...({
                  toolparamdescription:
                    "Objet du message (activation, abonnement, SAV…)",
                } as React.InputHTMLAttributes<HTMLInputElement>)}
                className="mt-1 w-full border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900"
              />
              <label htmlFor="contact-body" className="mt-4 block text-sm font-medium text-slate-800">
                Message
              </label>
              <textarea
                id="contact-body"
                name="body"
                required
                rows={4}
                {...({
                  toolparamdescription:
                    "Détail de la demande : appareil, lecteur souhaité, durée d’abonnement",
                } as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
                className="mt-1 w-full border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900"
                placeholder="Appareil, lecteur, durée souhaitée…"
              />
              <button
                type="submit"
                className="mt-4 inline-flex bg-[var(--ma-green)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--ma-red)]"
              >
                Ouvrir l’e-mail
              </button>
            </form>

            <div className="flex flex-wrap gap-3">
              {hasPhone && (
                <a
                  href={company.phoneHref}
                  className="inline-flex bg-[var(--ma-green)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--ma-red)]"
                >
                  Appeler
                </a>
              )}
              <a
                href={`mailto:${company.email}?subject=Contact%20${encodeURIComponent(name)}`}
                className="inline-flex border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-[var(--ma-green)]"
              >
                Envoyer un e-mail
              </a>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-[var(--ma-green)]"
              >
                Ouvrir Maps
              </a>
            </div>

            <p className="text-xs leading-relaxed text-slate-500">
              {fullAddress} — {company.name}
            </p>
          </div>

          <div className="overflow-hidden border border-slate-200 bg-slate-100">
            <iframe
              title={`Carte — ${company.address}, ${company.city}`}
              src={mapsEmbedUrl}
              className="h-[360px] w-full border-0 sm:h-[480px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="border-t border-slate-200 bg-white px-4 py-3 text-sm text-slate-600">
              <strong className="text-slate-900">Plan d’accès</strong> —{" "}
              {company.address}, {company.postalCode} {company.city}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
