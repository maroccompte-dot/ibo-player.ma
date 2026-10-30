export const siteConfig = {
  name: "ibo-player.ma",
  shortName: "IBO Player MA",
  url: "https://ibo-player.ma",
  description:
    "IPTV Maroc : activation lecteurs (IBO Player, TiviMate, Smarters), abonnements et SAV. Marrakech — service partout au Maroc. Fibre IAM / Inwi / Orange. Remboursement 15 jours.",
  keywords: [
    "IPTV Maroc",
    "abonnement IPTV Maroc",
    "activation IPTV Maroc",
    "IBO Player Maroc",
    "meilleur IPTV Maroc",
    "serveur IPTV Maroc",
    "IPTV Marrakech",
    "IPTV Casablanca",
    "IPTV Rabat",
    "Fire Stick IPTV Maroc",
    "TiviMate Maroc",
    "Smarters Pro Maroc",
    "fibre IPTV Maroc",
  ],

  locale: "fr_MA",
  /** Lien par défaut « Voir Plus » tant que chaque fiche n’a pas son URL partenaire */
  defaultPartnerUrl: "mailto:contact@ibo-player.ma",
  /** Fiche Google Business — IPTV MAROC */
  mapsUrl: "https://maps.app.goo.gl/mLQ6ZKgBcsfUVNST9",
  /** Carte intégrée (iframe Google Maps) */
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=31.6332579,-8.0083219&z=17&output=embed",
  /** Profils officiels pour schema sameAs (identité / E-E-A-T) */
  sameAs: [
    "https://maps.app.goo.gl/mLQ6ZKgBcsfUVNST9",
    "https://github.com/maroccompte-dot/ibo-player.ma",
  ],
  author: {
    name: "Soltane",
    jobTitle: "Directeur de publication",
    url: "/a-propos",
    description:
      "Directeur de publication d’IPTV IBO PLAYER — activation IPTV, lecteurs et abonnements au Maroc.",
  },
  company: {
    name: "IPTV IBO PLAYER SARL",
    legalForm: "SARL",
    address: "Marrakech",
    postalCode: "40000",
    city: "Marrakech",
    country: "Maroc",
    /** ICE — laisser « à compléter » pour masquer dans les mentions */
    siret: "à compléter",
    rcs: "RC Marrakech — à compléter",
    /** IF / TVA locale */
    vat: "à compléter",
    email: "contact@ibo-player.ma",
    /** Affichage : ex. 05 22 00 00 00 — laisser vide si inconnu */
    phone: "",
    /** Lien tel: international, ex. +212522000000 */
    phoneHref: "",
    /** WhatsApp international sans + ni espaces — vide = bouton masqué */
    whatsapp: "",
    director: "Soltane",
    host: {
      name: "Vercel Inc.",
      address: "440 N Barranca Ave #4133, Covina, CA 91723, États-Unis",
    },
    /** DNS / CDN (proxy) — distinct de l’hébergeur applicatif */
    dns: {
      name: "Cloudflare, Inc.",
      address: "101 Townsend St, San Francisco, CA 94107, États-Unis",
      role: "DNS et CDN",
    },
  },
  /** Chiffres accueil (estimations — à remplacer par chiffres réels) */
  stats: {
    satisfiedClients: "3 200+",
    connectedClients: "1 850+",
    /** Si vide, le site calcule apps + serveurs */
    servicesLabel: "",
  },
} as const;
