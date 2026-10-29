"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import BrandMark from "@/components/BrandMark";

const links = [
  { href: "/", label: "Accueil", match: (p: string) => p === "/" },
  {
    href: "/application-iptv",
    label: "Applications",
    match: (p: string) =>
      p === "/application-iptv" || p.startsWith("/apps/"),
  },
  {
    href: "/serveur-iptv",
    label: "Serveurs",
    match: (p: string) =>
      p === "/serveur-iptv" || p.startsWith("/servers/"),
  },
  {
    href: "/boutique",
    label: "Box TV",
    match: (p: string) => p === "/boutique" || p.startsWith("/boutique/"),
  },
  {
    href: "/blog",
    label: "Blog",
    match: (p: string) => p === "/blog" || p.startsWith("/blog/"),
  },
  {
    href: "/a-propos",
    label: "À propos",
    match: (p: string) => p === "/a-propos",
  },
  {
    href: "/contact",
    label: "Contact",
    match: (p: string) => p === "/contact",
  },
  {
    href: "/#avis",
    label: "Avis",
    match: () => false,
  },
  {
    href: "/#faq",
    label: "FAQ",
    match: () => false,
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-[var(--bg)]/85 backdrop-blur-md">
      <div className="tricolor-bar" aria-hidden />
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between border-b border-slate-200/60 px-4 py-3 sm:px-6"
        aria-label="Navigation principale"
      >
        <Link href="/" className="min-w-0">
          <BrandMark />
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const active = link.match(pathname);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={[
                    "relative inline-block pb-1 text-sm font-medium transition-colors",
                    active
                      ? "text-[var(--ma-green)]"
                      : "text-slate-600 hover:text-[var(--ma-green)]",
                  ].join(" ")}
                >
                  {link.label}
                  <span
                    aria-hidden
                    className={[
                      "absolute inset-x-0 -bottom-0.5 h-0.5 origin-left bg-[var(--ma-green)] transition-transform duration-200",
                      active ? "scale-x-100" : "scale-x-0",
                    ].join(" ")}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="border-b border-slate-200/60 bg-[var(--bg)] px-4 py-3 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {links.map((link) => {
              const active = link.match(pathname);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={[
                      "block border-l-2 py-2 pl-3 text-sm font-medium transition-colors",
                      active
                        ? "border-[var(--ma-green)] text-[var(--ma-green)]"
                        : "border-transparent text-slate-700",
                    ].join(" ")}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
