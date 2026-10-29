import Link from "next/link";
import BrandMark from "@/components/BrandMark";
import { siteConfig } from "@/lib/site";

const navLinks = [
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
  { href: "/application-iptv", label: "Applications IPTV" },
  { href: "/serveur-iptv", label: "Serveurs IPTV" },
  { href: "/boutique", label: "Boutique Box TV" },
  { href: "/blog", label: "Blog IPTV" },
];

const legalLinks = [
  { href: "/politique-confidentialite", label: "Politique de confidentialité" },
  { href: "/cgv", label: "Conditions générales (CGV)" },
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/politique-remboursement", label: "Politique de remboursement" },
  { href: "/dmca", label: "DMCA & Disclaimer" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const { company } = siteConfig;

  return (
    <footer className="mt-auto border-t border-slate-200/80 bg-slate-50">
      <div className="tricolor-bar" aria-hidden />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <BrandMark />
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-600">
            {company.name} — activations et abonnements IPTV partout au
            Maroc. Siège à {company.city}.
          </p>
          <p className="mt-4 text-sm">
            <Link
              href="/a-propos"
              className="font-semibold text-[var(--ma-green)] underline-offset-2 hover:underline"
            >
              En savoir plus sur nous →
            </Link>
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Navigation
          </p>
          <ul className="mt-3 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-slate-700 transition-colors hover:text-[var(--ma-green)]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-slate-500">
            Siège · Maroc
          </p>
          <p className="mt-2 text-sm leading-relaxed text-slate-700">
            {company.address}
            <br />
            {company.postalCode} {company.city}, {company.country}
          </p>
          <p className="mt-2 text-sm text-slate-600">
            <a
              href={`mailto:${company.email}`}
              className="hover:text-[var(--ma-green)]"
            >
              {company.email}
            </a>
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Confidentialité & conditions
          </p>
          <ul className="mt-3 space-y-2">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-slate-700 transition-colors hover:text-[var(--ma-green)]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200/80">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs text-slate-500 sm:px-6">
          © {year} {company.name}. Tous droits réservés. ·{" "}
          <Link
            href="/politique-confidentialite"
            className="underline-offset-2 hover:text-slate-700 hover:underline"
          >
            Confidentialité
          </Link>
          {" · "}
          <Link
            href="/cgv"
            className="underline-offset-2 hover:text-slate-700 hover:underline"
          >
            CGV
          </Link>
          {" · "}
          <Link
            href="/a-propos"
            className="underline-offset-2 hover:text-slate-700 hover:underline"
          >
            À propos
          </Link>
          {" · "}
          <Link
            href="/contact"
            className="underline-offset-2 hover:text-slate-700 hover:underline"
          >
            Contact
          </Link>
        </p>
      </div>
    </footer>
  );
}
