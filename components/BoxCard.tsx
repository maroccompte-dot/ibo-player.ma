import Image from "next/image";
import Link from "next/link";
import type { BoxProduct } from "@/data/boxes";

type BoxCardProps = {
  box: BoxProduct;
};

export default function BoxCard({ box }: BoxCardProps) {
  return (
    <article
      className={`group relative flex h-full flex-col border bg-white/80 transition duration-300 hover:bg-white ${
        box.recommended
          ? "border-[var(--ma-red)]/50 hover:border-[var(--ma-red)]"
          : box.eco
            ? "border-emerald-600/40 hover:border-emerald-600"
            : "border-slate-200/90 hover:border-[var(--ma-green)]/40"
      }`}
    >
      {(box.recommended || box.eco) && (
        <div className="absolute right-3 top-3 z-10 flex flex-col items-end gap-1.5">
          {box.recommended && (
            <span className="bg-[var(--ma-red)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
              Recommandé
            </span>
          )}
          {box.eco && (
            <span className="bg-emerald-700 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
              Éco
            </span>
          )}
        </div>
      )}
      <Link href={`/boutique/${box.slug}`} className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="relative mx-auto aspect-square w-full max-w-[200px] bg-slate-50">
          <Image
            src={box.image}
            alt={box.name}
            fill
            className="object-contain p-3"
            sizes="200px"
          />
        </div>
        {box.brand && (
          <p className="mt-4 text-[11px] font-semibold uppercase tracking-wider text-[var(--ma-green)]">
            {box.brand}
          </p>
        )}
        <h3 className="mt-1 font-[family-name:var(--font-display)] text-lg font-bold text-slate-900 transition-colors group-hover:text-[var(--ma-green)]">
          {box.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
          {box.shortDescription}
        </p>
        <p className="mt-3 text-sm font-semibold text-slate-900">
          {box.priceLabel}
        </p>
        <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--ma-green)]">
          En savoir plus
          <span
            aria-hidden
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </span>
      </Link>
      <div className="border-t border-slate-100 px-5 py-3 sm:px-6">
        <a
          href={box.amazonUrl}
          target="_blank"
          rel="noopener noreferrer sponsored nofollow"
          className="inline-flex w-full items-center justify-center bg-[var(--ma-green)] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--ma-red)]"
        >
          Voir sur Amazon
        </a>
      </div>
    </article>
  );
}
