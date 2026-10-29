/** Avis Google Business — IPTV IBO PLAYER (fiche Maps, oct. 2026) */
export const googleReviewsMeta = {
  ratingValue: 4.6,
  reviewCount: 8,
  bestRating: 5,
  worstRating: 1,
  sourceLabel: "Google",
  sourceUrl: "https://maps.app.goo.gl/mLQ6ZKgBcsfUVNST9",
  writeReviewUrl: "https://maps.app.goo.gl/mLQ6ZKgBcsfUVNST9",
} as const;

export type GoogleReview = {
  author: string;
  rating: number;
  text: string;
  relativeTime: string;
  visitMonth?: string;
};

/** Textes visibles sur la fiche (7/8 — 1 avis sans texte lisible sur le screenshot) */
export const googleReviews: GoogleReview[] = [
  {
    author: "Abdel Habla",
    rating: 5,
    text: "Service support au top, réactif et à l’écoute.",
    relativeTime: "Il y a 2 jours",
    visitMonth: "octobre",
  },
  {
    author: "el bakkali assia",
    rating: 5,
    text: "Très très bien le service clientèle au top. Je suis satisfaite à 100%. Je conseille, garantie satisfaction.",
    relativeTime: "Il y a 2 jours",
    visitMonth: "août",
  },
  {
    author: "Idriss Boudouh",
    rating: 5,
    text: "Bonne expérience avec Mohamed très serviable et bon service après vente. Je le recommande vivement.",
    relativeTime: "Il y a 2 jours",
    visitMonth: "octobre",
  },
  {
    author: "Faribi Mehdi",
    rating: 5,
    text: "Excellent service. Réponse rapide et service après vente impeccable.",
    relativeTime: "Il y a 2 jours",
    visitMonth: "octobre",
  },
  {
    author: "Youssef B",
    rating: 5,
    text: "Services extrêmement rapide. Réponse dans les 5 min et assistance.",
    relativeTime: "Il y a 2 jours",
    visitMonth: "octobre",
  },
  {
    author: "Mohamedou Ly",
    rating: 5,
    text: "Pas mal franchement.",
    relativeTime: "Il y a 2 jours",
    visitMonth: "octobre",
  },
  {
    author: "Adil Tarzout",
    rating: 5,
    text: "",
    relativeTime: "Il y a 2 jours",
    visitMonth: "octobre",
  },
].filter((r) => r.text.trim().length > 0);
