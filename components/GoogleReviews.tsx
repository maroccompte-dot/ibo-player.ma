import Link from "next/link";
import {
  googleReviews,
  googleReviewsMeta,
} from "@/data/google-reviews";

function Stars({ value }: { value: number }) {
  return (
    <span className="inline-flex gap-0.5" aria-label={`${value} sur 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className={
            i < Math.round(value)
              ? "text-amber-500"
              : "text-slate-300"
          }
          aria-hidden
        >
          ★
        </span>
      ))}
    </span>
  );
}

export default function GoogleReviews() {
  const { ratingValue, reviewCount, sourceUrl, sourceLabel } =
    googleReviewsMeta;

  return (
    <section
      id="avis"
      className="scroll-mt-20 border-t border-slate-200/60 bg-white/50"
    >
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--ma-green)]">
              Avis clients
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-bold text-slate-900 sm:text-3xl">
              Ce que disent nos clients sur{" "}
              <span className="whitespace-nowrap" aria-label="Google">
                <span style={{ color: "#4285F4" }}>G</span>
                <span style={{ color: "#EA4335" }}>o</span>
                <span style={{ color: "#FBBC05" }}>o</span>
                <span style={{ color: "#4285F4" }}>g</span>
                <span style={{ color: "#34A853" }}>l</span>
                <span style={{ color: "#EA4335" }}>e</span>
              </span>
            </h2>
            <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-base text-slate-600">
              <span className="font-[family-name:var(--font-display)] text-3xl font-extrabold text-slate-900">
                {ratingValue.toFixed(1).replace(".", ",")}
              </span>
              <Stars value={ratingValue} />
              <span>
                {reviewCount} avis · {sourceLabel}
              </span>
            </p>
          </div>
          <a
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 transition-colors hover:border-[var(--ma-green)] hover:text-[var(--ma-green)]"
          >
            Voir tous les avis sur Google
          </a>
        </div>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {googleReviews.map((review) => (
            <li
              key={`${review.author}-${review.text.slice(0, 24)}`}
              className="flex flex-col border border-slate-200 bg-white/90 p-5"
            >
              <div className="flex items-center justify-between gap-2">
                <p className="font-[family-name:var(--font-display)] font-semibold text-slate-900">
                  {review.author}
                </p>
                <Stars value={review.rating} />
              </div>
              {review.visitMonth ? (
                <p className="mt-1 text-xs text-slate-500">
                  Visité en {review.visitMonth}
                </p>
              ) : null}
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-700">
                “{review.text}”
              </p>
              <p className="mt-4 text-[11px] font-medium uppercase tracking-wider text-slate-400">
                Avis Google
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-sm text-slate-600">
          Vous aussi ?{" "}
          <a
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[var(--ma-green)] underline underline-offset-2"
          >
            Laissez un avis sur Google
          </a>
          {" · "}
          <Link
            href="/contact"
            className="font-semibold text-[var(--ma-green)] underline underline-offset-2"
          >
            Nous contacter
          </Link>
        </p>
      </div>
    </section>
  );
}
