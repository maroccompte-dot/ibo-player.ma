import { promises as fs } from "fs";
import path from "path";
import { randomUUID } from "crypto";
import type { ReviewTargetType, UserReview } from "@/lib/review-types";

export type { ReviewStatus, ReviewTargetType, UserReview } from "@/lib/review-types";

type Store = { items: UserReview[] };

const STORE_PATH = path.join(process.cwd(), "data", "reviews.json");

/** Détecte les liens / URLs (interdits dans les avis) */
export function containsLink(text: string): boolean {
  const patterns = [
    /https?:\/\//i,
    /www\./i,
    /\b[a-z0-9-]+\.(com|fr|net|org|io|xyz|me|co|info|be|uk|de|app|tv|online|shop|store)\b/i,
    /\[[^\]]+\]\([^)]+\)/,
    /href\s*=/i,
    /bit\.ly|t\.co|tinyurl|goo\.gl/i,
  ];
  return patterns.some((re) => re.test(text));
}

export function validateReviewInput(input: {
  author: string;
  comment: string;
  rating: number;
  slug: string;
  type: string;
}):
  | { ok: true; data: Omit<UserReview, "id" | "status" | "createdAt"> }
  | { ok: false; error: string } {
  const author = input.author.trim().slice(0, 60);
  const comment = input.comment.trim().slice(0, 800);
  const rating = Number(input.rating);
  const slug = input.slug.trim().slice(0, 120);
  const type =
    input.type === "server" ? "server" : input.type === "app" ? "app" : null;

  if (!type) return { ok: false, error: "Type invalide." };
  if (!slug) return { ok: false, error: "Fiche invalide." };
  if (author.length < 2) {
    return {
      ok: false,
      error: "Indiquez votre prénom ou pseudo (2 caractères min.).",
    };
  }
  if (comment.length < 10) {
    return { ok: false, error: "L’avis doit contenir au moins 10 caractères." };
  }
  if (!Number.isFinite(rating) || rating < 1 || rating > 5) {
    return { ok: false, error: "La note doit être entre 1 et 5." };
  }
  if (containsLink(author) || containsLink(comment)) {
    return {
      ok: false,
      error: "Les liens et URL ne sont pas autorisés dans les avis.",
    };
  }

  return {
    ok: true,
    data: { author, comment, rating, slug, type },
  };
}

async function readStore(): Promise<Store> {
  try {
    const raw = await fs.readFile(STORE_PATH, "utf8");
    const parsed = JSON.parse(raw) as Store;
    if (!parsed.items || !Array.isArray(parsed.items)) return { items: [] };
    return parsed;
  } catch {
    return { items: [] };
  }
}

async function writeStore(store: Store): Promise<void> {
  await fs.writeFile(STORE_PATH, JSON.stringify(store, null, 2), "utf8");
}

export async function getApprovedReviews(
  slug: string,
  type: ReviewTargetType,
): Promise<UserReview[]> {
  const store = await readStore();
  return store.items
    .filter(
      (r) => r.status === "approved" && r.slug === slug && r.type === type,
    )
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    );
}

export async function submitReview(input: {
  author: string;
  comment: string;
  rating: number;
  slug: string;
  type: string;
}): Promise<{ ok: true } | { ok: false; error: string }> {
  const validated = validateReviewInput(input);
  if (!validated.ok) return validated;

  const store = await readStore();
  const review: UserReview = {
    id: randomUUID(),
    ...validated.data,
    status: "pending",
    createdAt: new Date().toISOString(),
  };

  store.items.push(review);
  try {
    await writeStore(store);
  } catch {
    return {
      ok: false,
      error:
        "Impossible d’enregistrer l’avis pour le moment. Réessayez plus tard.",
    };
  }

  return { ok: true };
}
