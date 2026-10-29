import Link from "next/link";
import type { ReviewItem } from "@/data/types";
import type { ReviewTargetType } from "@/lib/review-types";
import LogoMark from "@/components/LogoMark";
import ReviewsSection from "@/components/ReviewsSection";

const categoryLabels: Record<ReviewItem["category"], string> = {
  player: "Lecteur IPTV",
  abonnement: "Abonnement IPTV",
  serveur: "Serveur IPTV",
  guide: "Guide",
};

type RelatedGuide = { href: string; label: string };

type ReviewContentProps = {
  item: ReviewItem;
  backHref: string;
  backLabel: string;
  contentType: ReviewTargetType;
  relatedGuides?: RelatedGuide[];
};

export default function ReviewContent({
  item,
  backHref,
  backLabel,
  contentType,
  relatedGuides = [],
}: ReviewContentProps) {
  const { seo } = item;
  const paragraphs = item.fullReview.trim().split(/\n\n+/);
  const intro = paragraphs[0] ?? "";
  const rest = paragraphs.slice(1);

  return (
    <article>
      <div className="border-b border-slate-200/80 bg-[radial-gradient(ellipse_at_top,_rgba(0,35,149,0.10),_transparent_55%),radial-gradient(ellipse_at_90%_0%,_rgba(237,41,57,0.08),_transparent_40%),linear-gradient(180deg,#eef1f8_0%,var(--bg)_100%)]">
        <div className="mx-auto max-w-3xl px-4 pb-12 pt-8 sm:px-6 sm:pt-12">
          <Link
            href={backHref}
            className="text-sm font-medium text-[var(--ma-green)] transition-colors hover:text-slate-900"
          >
            ← {backLabel}
          </Link>

          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-start">
            <LogoMark
              name={item.name}
              logo={item.logo || undefined}
              size={80}
              className="shadow-sm"
            />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--ma-green)]">
                {categoryLabels[item.category]}
                {item.rating != null && (
                  <span className="ml-3 text-slate-500">
                    {item.rating.toFixed(1)} / 5
                  </span>
                )}
              </p>
              <h1 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
                {seo.h1}
              </h1>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                {item.shortDescription}
              </p>
            </div>
          </div>

          <a
            href={item.externalRedirectUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="mt-8 inline-flex w-full items-center justify-center bg-[var(--ma-green)] px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[var(--ma-red)] sm:w-auto animate-fade-in"
          >
            Voir les abonnements
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-3xl space-y-12 px-4 py-12 sm:px-6">
        <section>
          <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-slate-900">
            {seo.h2Presentation}
          </h2>
          {intro && (
            <>
              <h3 className="mt-5 font-[family-name:var(--font-display)] text-base font-semibold text-slate-800">
                {seo.h3Why}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-slate-700">
                {intro}
              </p>
            </>
          )}
          {rest.length > 0 && (
            <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-slate-700">
              {rest.map((p) => (
                <p key={p.slice(0, 48)}>{p}</p>
              ))}
            </div>
          )}
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-slate-900">
            {seo.h2Features}
          </h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {item.features.map((feature) => (
              <li
                key={feature}
                className="flex gap-2 text-sm text-slate-700 before:mt-2 before:h-1.5 before:w-1.5 before:shrink-0 before:bg-[var(--ma-red)] before:content-['']"
              >
                {feature}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-slate-900">
            {seo.h2Install}
          </h2>
          <h3 className="mt-5 font-[family-name:var(--font-display)] text-base font-semibold text-slate-800">
            {seo.h3Prerequisites}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Connexion Internet stable (fibre recommandée), appareil compatible
            (Fire Stick, Android TV, Smart TV, téléphone ou tablette selon le
            cas), et un abonnement IPTV fourni par IPTV IBO PLAYER.
          </p>
          <h3 className="mt-6 font-[family-name:var(--font-display)] text-base font-semibold text-slate-800">
            {seo.h3Steps}
          </h3>
          <ol className="mt-4 space-y-5">
            {item.installationSteps.map((step, index) => (
              <li key={step} className="flex gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center bg-[var(--ma-green)] text-xs font-bold text-white">
                  {index + 1}
                </span>
                <div>
                  <h4 className="font-[family-name:var(--font-display)] text-sm font-semibold text-slate-900">
                    Étape {index + 1} — {item.name}
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-slate-700">
                    {step}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="border border-[var(--ma-green)]/20 bg-[var(--ma-green)]/[0.04] p-6">
          <h2 className="font-[family-name:var(--font-display)] text-lg font-bold text-slate-900">
            {seo.h2Pricing}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-700">
            {item.pricingSummary}
          </p>
          <a
            href={item.externalRedirectUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="mt-5 inline-flex bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--ma-red)]"
          >
            Voir les abonnements
          </a>
        </section>

        {item.faq.length > 0 && (
          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-slate-900">
              {seo.h2Faq}
            </h2>
            <div className="mt-4 divide-y divide-slate-200 border-y border-slate-200">
              {item.faq.map((entry) => (
                <div key={entry.question} className="py-5">
                  <h3 className="font-[family-name:var(--font-display)] text-base font-semibold text-slate-900">
                    {entry.question}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {entry.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        <ReviewsSection
          slug={item.slug}
          type={contentType}
          productName={item.name}
          heading={seo.h2Reviews}
        />

        {relatedGuides.length > 0 && (
          <section className="border-t border-slate-200 pt-10">
            <h2 className="font-[family-name:var(--font-display)] text-lg font-bold text-slate-900">
              Guides & contact
            </h2>
            <ul className="mt-4 space-y-2">
              {relatedGuides.map((g) => (
                <li key={g.href}>
                  <Link
                    href={g.href}
                    className="text-sm font-semibold text-[var(--ma-green)] hover:text-[var(--ma-red)]"
                  >
                    {g.label} →
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <aside className="border-t border-slate-200 pt-10 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-lg font-bold text-slate-900">
            Prêt à activer {item.name} ?
          </h2>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <a
              href={item.externalRedirectUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex bg-[var(--ma-green)] px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[var(--ma-red)]"
            >
              Voir les abonnements
            </a>
            <Link
              href="/contact"
              className="inline-flex border border-slate-300 bg-white px-8 py-3.5 text-base font-semibold text-slate-800"
            >
              Nous contacter
            </Link>
          </div>
        </aside>
      </div>
    </article>
  );
}
