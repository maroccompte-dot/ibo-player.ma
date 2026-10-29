export type ContentCategory = "player" | "abonnement" | "serveur" | "guide";

export interface FaqItem {
  question: string;
  answer: string;
}

/** Titres SEO & hiérarchie Hn uniques par fiche */
export interface SeoContent {
  title: string;
  description: string;
  keywords: string[];
  h1: string;
  h2Presentation: string;
  h3Why: string;
  h2Features: string;
  h2Install: string;
  h3Prerequisites: string;
  h3Steps: string;
  h2Pricing: string;
  h2Faq: string;
  h2Reviews: string;
}

export interface ReviewItem {
  name: string;
  slug: string;
  logo: string;
  category: ContentCategory;
  shortDescription: string;
  fullReview: string;
  features: string[];
  installationSteps: string[];
  pricingSummary: string;
  faq: FaqItem[];
  externalRedirectUrl: string;
  seo: SeoContent;
  rating?: number;
}

export type AppItem = ReviewItem;
export type ServerItem = ReviewItem;
