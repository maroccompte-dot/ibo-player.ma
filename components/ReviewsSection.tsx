"use client";

import { useEffect, useState, type FormEvent } from "react";
import type { ReviewTargetType, UserReview } from "@/lib/review-types";

type ReviewsSectionProps = {
  slug: string;
  type: ReviewTargetType;
  productName: string;
  heading?: string;
};

export default function ReviewsSection({
  slug,
  type,
  productName,
  heading,
}: ReviewsSectionProps) {
  const [reviews, setReviews] = useState<UserReview[]>([]);
  const [author, setAuthor] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(`/api/reviews?slug=${encodeURIComponent(slug)}&type=${type}`)
      .then((r) => r.json())
      .then((data: { reviews?: UserReview[] }) => {
        if (!cancelled) setReviews(data.reviews ?? []);
      })
      .catch(() => {
        if (!cancelled) setReviews([]);
      });
    return () => {
      cancelled = true;
    };
  }, [slug, type]);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ author, rating, comment, slug, type }),
      });
      const data = (await res.json()) as { error?: string; message?: string };

      if (!res.ok) {
        setError(data.error ?? "Envoi impossible.");
        return;
      }

      setMessage(
        data.message ??
          "Merci. Votre avis a été envoyé et sera publié après validation.",
      );
      setAuthor("");
      setComment("");
      setRating(5);
    } catch {
      setError("Erreur réseau. Réessayez.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="border-t border-slate-200 pt-12">
      <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-slate-900">
        {heading ?? `Avis sur ${productName}`}
      </h2>
      <p className="mt-2 text-sm text-slate-600">
        Les avis sont modérés avant publication. Les liens et URL ne sont pas
        autorisés.
      </p>

      {reviews.length === 0 ? (
        <p className="mt-6 text-sm text-slate-500">
          Aucun avis publié pour le moment. Soyez le premier (après validation).
        </p>
      ) : (
        <ul className="mt-6 space-y-4">
          {reviews.map((r) => (
            <li
              key={r.id}
              className="border border-slate-200/80 bg-white/70 px-4 py-3"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="font-semibold text-slate-900">{r.author}</p>
                <p className="text-xs text-slate-500">
                  {r.rating.toFixed(1)} / 5
                  {" · "}
                  {new Date(r.createdAt).toLocaleDateString("fr-MA")}
                </p>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                {r.comment}
              </p>
            </li>
          ))}
        </ul>
      )}

      <form onSubmit={onSubmit} className="mt-8 space-y-4 border border-slate-200 bg-slate-50/80 p-5">
        <p className="font-[family-name:var(--font-display)] text-base font-semibold text-slate-900">
          Laisser un avis
        </p>

        <div>
          <label htmlFor="review-author" className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Prénom ou pseudo
          </label>
          <input
            id="review-author"
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            maxLength={60}
            required
            className="mt-1.5 w-full border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-[var(--ma-green)]"
            placeholder="Ex. Julien"
            autoComplete="nickname"
          />
        </div>

        <div>
          <label htmlFor="review-rating" className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Note
          </label>
          <select
            id="review-rating"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            className="mt-1.5 w-full border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-[var(--ma-green)]"
          >
            {[5, 4, 3, 2, 1].map((n) => (
              <option key={n} value={n}>
                {n} / 5
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="review-comment" className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Votre avis
          </label>
          <textarea
            id="review-comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            maxLength={800}
            required
            rows={4}
            className="mt-1.5 w-full resize-y border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-[var(--ma-green)]"
            placeholder="Partagez votre expérience (sans lien ni site web)…"
          />
          <p className="mt-1 text-xs text-slate-500">
            Pas de liens / URL. Publication après validation.
          </p>
        </div>

        {error && (
          <p className="text-sm font-medium text-[var(--ma-red)]" role="alert">
            {error}
          </p>
        )}
        {message && (
          <p className="text-sm font-medium text-[var(--ma-green)]" role="status">
            {message}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="bg-[var(--ma-green)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--ma-red)] disabled:opacity-60"
        >
          {loading ? "Envoi…" : "Envoyer l’avis"}
        </button>
      </form>
    </section>
  );
}
