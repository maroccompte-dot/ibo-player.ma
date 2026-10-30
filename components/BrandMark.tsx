import Image from "next/image";

type BrandMarkProps = {
  className?: string;
  showWordmark?: boolean;
};

export default function BrandMark({
  className = "",
  showWordmark = true,
}: BrandMarkProps) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <Image
        src="/logo.png"
        alt="IBO Player"
        width={showWordmark ? 148 : 36}
        height={36}
        className={
          showWordmark
            ? "h-9 w-auto object-contain"
            : "h-9 w-9 object-contain"
        }
        priority
      />
      {showWordmark && (
        <span className="sr-only">ibo-player.ma</span>
      )}
    </span>
  );
}
