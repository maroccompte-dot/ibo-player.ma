type BrandMarkProps = {
  className?: string;
  showWordmark?: boolean;
};

/** Étoile pentagramme style drapeau marocain (simplifiée) */
function MoroccoStar({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    >
      <path d="M12 3.2 L14.4 9.4 L21 9.6 L15.8 13.6 L17.8 20 L12 16.2 L6.2 20 L8.2 13.6 L3 9.6 L9.6 9.4 Z" />
    </svg>
  );
}

export default function BrandMark({
  className = "",
  showWordmark = true,
}: BrandMarkProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span
        className="relative flex h-8 w-8 items-center justify-center bg-[var(--ma-red)] shadow-sm"
        aria-hidden
      >
        <MoroccoStar className="h-5 w-5 text-[var(--ma-green)]" />
      </span>
      {showWordmark && (
        <span className="font-[family-name:var(--font-display)] text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
          ibo-player
          <span className="text-[var(--ma-green)]">.</span>
          <span className="text-[var(--ma-red)]">ma</span>
        </span>
      )}
    </span>
  );
}
