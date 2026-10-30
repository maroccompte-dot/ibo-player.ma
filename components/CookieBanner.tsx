"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

/** Incrémenter si le texte légal du bandeau change (réaffichage) */
const STORAGE_KEY = "ibo-player-ma-cookie-consent-v2";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  function dismiss() {
    try {
      localStorage.setItem(STORAGE_KEY, "acknowledged");
    } catch {
      /* ignore */
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Information cookies et confidentialité"
      className="fixed inset-x-0 bottom-0 z-[60] animate-slide-up p-4 sm:p-6"
    >
      <div className="mx-auto flex max-w-3xl flex-col gap-4 border border-slate-200 bg-white p-5 shadow-[0_12px_40px_rgba(15,23,42,0.12)] sm:flex-row sm:items-end sm:gap-6">
        <div className="flex-1">
          <p className="font-[family-name:var(--font-display)] text-base font-semibold text-slate-900">
            Cookies & confidentialité
          </p>
          <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
            Ce site n’utilise pas de cookies publicitaires ni d’outils
            d’audience tiers. Nous enregistrons localement votre choix pour ne
            pas réafficher ce bandeau. Pour nous contacter, utilisez l’e-mail
            ou la page contact.{" "}
            <Link
              href="/politique-confidentialite"
              className="font-semibold text-[var(--ma-green)] underline underline-offset-2"
            >
              Politique de confidentialité
            </Link>
          </p>
        </div>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={dismiss}
            className="bg-[var(--ma-green)] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[var(--ma-red)]"
          >
            J’accepte
          </button>
        </div>
      </div>
    </div>
  );
}
