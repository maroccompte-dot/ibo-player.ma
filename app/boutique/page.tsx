import type { Metadata } from "next";
import Link from "next/link";
import BoxCard from "@/components/BoxCard";
import { boxes } from "@/data/boxes";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Boutique Box TV IPTV Maroc — Fire Stick & Formuler",
  description:
    "Box et sticks IPTV au Maroc : Fire Stick, Formuler Z10/Z12, Xiaomi Stick. Sélection IPTV IBO PLAYER + activation à Casablanca.",
  path: "/boutique",
  keywords: [
    "box TV IPTV Maroc",
    "Fire Stick IPTV Maroc",
    "Formuler Z10 Maroc",
    "Xiaomi Stick IPTV",
    "Android TV IPTV Casablanca",
  ],
});

export default function BoutiquePage() {
  return (
    <div className="page-atmosphere">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-wider text-[var(--ma-green)]">
          Boutique
        </p>
        <h1 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Box TV compatibles IPTV
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
          Sélection de sticks et box Android / Fire TV pour installer IBO
          Player, TiviMate, Smarters et vos abonnements. Achat via Amazon —
          activation et abonnement chez IPTV IBO PLAYER (partout au Maroc).
        </p>

        {boxes.length === 0 ? (
          <div className="mt-12 border border-dashed border-slate-300 bg-white/60 px-6 py-12 text-center">
            <p className="font-[family-name:var(--font-display)] text-lg font-semibold text-slate-900">
              Catalogue en cours de préparation
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Les box TV (liens Amazon) seront ajoutées ici très bientôt.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex bg-[var(--ma-green)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--ma-red)]"
            >
              Nous contacter
            </Link>
          </div>
        ) : (
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[...boxes]
              .sort((a, b) => Number(b.recommended) - Number(a.recommended))
              .map((box) => (
                <BoxCard key={box.slug} box={box} />
              ))}
          </div>
        )}

        <p className="mt-12 text-xs leading-relaxed text-slate-500">
          En tant que Partenaire Amazon, IPTV IBO PLAYER peut réaliser un
          bénéfice sur les achats admissibles. Les prix et stocks sont gérés
          par Amazon.
        </p>
      </div>
    </div>
  );
}
