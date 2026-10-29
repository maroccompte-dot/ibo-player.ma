import type { ReactNode } from "react";

type LegalPageProps = {
  title: string;
  updatedAt: string;
  children: ReactNode;
};

export default function LegalPage({
  title,
  updatedAt,
  children,
}: LegalPageProps) {
  return (
    <div className="page-atmosphere">
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-wider text-[var(--ma-green)]">
          Document légal
        </p>
        <h1 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {title}
        </h1>
        <p className="mt-3 text-sm text-slate-500">
          Dernière mise à jour : {updatedAt}
        </p>
        <div className="prose-legal mt-10 space-y-8 text-[15px] leading-relaxed text-slate-700 [&_h2]:font-[family-name:var(--font-display)] [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-slate-900 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5">
          {children}
        </div>
      </div>
    </div>
  );
}
