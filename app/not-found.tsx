import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page introuvable",
  description: "Cette page n’existe pas ou a été déplacée.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="page-atmosphere flex flex-1 flex-col items-center justify-center px-4 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-[var(--ma-green)]">
        Erreur 404
      </p>
      <h1 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold text-slate-900">
        Page introuvable
      </h1>
      <p className="mt-3 max-w-md text-slate-600">
        Cette fiche n’existe pas ou a été déplacée.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="bg-[var(--ma-green)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--ma-red)]"
        >
          Retour à l’accueil
        </Link>
        <Link
          href="/contact"
          className="border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800"
        >
          Contact
        </Link>
        <Link
          href="/blog"
          className="border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800"
        >
          Blog
        </Link>
      </div>
    </div>
  );
}
