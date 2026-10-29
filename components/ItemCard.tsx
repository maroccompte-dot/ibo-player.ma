import Link from "next/link";
import type { ReviewItem } from "@/data/types";
import LogoMark from "@/components/LogoMark";

const categoryLabels: Record<ReviewItem["category"], string> = {
  player: "Lecteur",
  abonnement: "Abonnement",
  serveur: "Serveur",
  guide: "Guide",
};

type ItemCardProps = {
  item: ReviewItem;
  href: string;
  ctaLabel?: string;
};

export default function ItemCard({
  item,
  href,
  ctaLabel = "En savoir plus",
}: ItemCardProps) {
  return (
    <article className="item-card-cv group flex h-full flex-col border border-slate-200/90 bg-white/80 transition duration-300 hover:border-[var(--ma-green)]/40 hover:bg-white">
      <Link href={href} className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start gap-4">
          <LogoMark name={item.name} logo={item.logo || undefined} size={56} />
          <div className="min-w-0 flex-1">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-[var(--ma-green)]">
              {categoryLabels[item.category]}
            </p>
            <h3 className="mt-1 font-[family-name:var(--font-display)] text-lg font-bold text-slate-900 transition-colors group-hover:text-[var(--ma-green)]">
              {item.name}
            </h3>
            {item.rating != null && (
              <p className="mt-1 text-xs text-slate-500">
                Note : {item.rating.toFixed(1)} / 5
              </p>
            )}
          </div>
        </div>

        <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">
          {item.shortDescription}
        </p>

        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--ma-green)]">
          {ctaLabel}
          <span
            aria-hidden
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </span>
      </Link>

      <div className="border-t border-slate-100 px-5 py-3 sm:px-6">
        <Link
          href={href}
          className="inline-flex w-full items-center justify-center bg-[var(--ma-green)] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--ma-red)]"
        >
          Accéder
        </Link>
      </div>
    </article>
  );
}
