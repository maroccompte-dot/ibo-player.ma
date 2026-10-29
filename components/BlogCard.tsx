import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/data/blog";

type BlogCardProps = {
  post: BlogPost;
};

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden border border-slate-200/90 bg-white/80 transition duration-300 hover:border-[var(--ma-green)]/40 hover:bg-white">
      <Link href={`/blog/${post.slug}`} className="flex flex-1 flex-col">
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
            <span className="text-[var(--ma-green)]">{post.category}</span>
            <span aria-hidden>·</span>
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString("fr-MA", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
            <span aria-hidden>·</span>
            <span>{post.readingMinutes} min</span>
          </div>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-xl font-bold leading-snug text-slate-900 transition-colors group-hover:text-[var(--ma-green)]">
            {post.title}
          </h2>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
            {post.excerpt}
          </p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--ma-green)]">
            Lire l’article
            <span
              aria-hidden
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </span>
        </div>
      </Link>
    </article>
  );
}
