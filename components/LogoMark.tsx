import Image from "next/image";

type LogoMarkProps = {
  name: string;
  logo?: string;
  size?: number;
  className?: string;
  priority?: boolean;
};

/** Pastille rouge/vert Maroc + initiales — ou logo compressé via next/image. */
export default function LogoMark({
  name,
  logo,
  size = 56,
  className = "",
  priority = false,
}: LogoMarkProps) {
  const initials = name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");

  if (logo) {
    return (
      <Image
        src={logo}
        alt={`Logo ${name}`}
        width={size}
        height={size}
        sizes={`${size}px`}
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        className={`bg-white object-contain ${className}`}
        style={{ width: size, height: size }}
      />
    );
  }

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden text-white ${className}`}
      style={{ width: size, height: size }}
      aria-hidden
    >
      <div className="absolute inset-0 flex">
        <span className="h-full flex-1 bg-[var(--ma-red)]" />
        <span className="h-full flex-1 bg-[var(--ma-green)]" />
      </div>
      <span
        className="relative z-10 flex h-[72%] w-[72%] items-center justify-center bg-slate-900/90 font-[family-name:var(--font-display)] font-bold tracking-tight"
        style={{ fontSize: Math.max(12, size * 0.28) }}
      >
        {initials || "TV"}
      </span>
    </div>
  );
}
