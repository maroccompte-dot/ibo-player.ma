/**
 * Boutique Box TV — produits Amazon.
 * Envoyez les liens Amazon : on remplit photo, description et prix.
 */
export type BoxProduct = {
  name: string;
  slug: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  /** Prix affiché (texte libre, ex. "à partir de 39,99 €") */
  priceLabel: string;
  amazonUrl: string;
  brand?: string;
  /** Mis en avant comme recommandation boutique */
  recommended?: boolean;
  /** Produit éco / entrée de gamme */
  eco?: boolean;
  seoTitle: string;
  seoDescription: string;
};

/**
 * Liste des box TV à vendre.
 * Ajoutez un objet ici après réception du lien Amazon.
 */
export const boxes: BoxProduct[] = [
  {
    name: "Formuler Z10 Neo",
    slug: "formuler-z10-neo",
    image: "/images/boxes/formuler-z10-neo.jpg",
    shortDescription:
      "Box Android 10 4K HDR10+ — notre recommandation IPTV IBO PLAYER pour IBO, TiviMate et Smarters.",
    fullDescription: `La Formuler Z10 Neo est la box Android que nous recommandons en premier chez IPTV IBO PLAYER à Casablanca. Android 10, sortie 4K 60 fps HDR10+, 2 Go de RAM et 4 Go de stockage : un socle solide pour installer IBO Player, TiviMate, IPTV Smarters Pro et vos abonnements.

Ethernet 10/100 et Wi-Fi 2,4 GHz : pour le streaming IPTV quotidien, nous conseillons le câble réseau dès que possible. La télécommande et le câble HDMI sont fournis — branché sur votre TV, on active le player et l’abonnement en boutique.

Idéale si vous voulez une vraie box Formuler plutôt qu’un stick basique : interface stable, mises à jour OTA fabricant, et usage multi-apps sans friction.

Achetez sur Amazon, puis passez chez IPTV IBO PLAYER pour l’installation et l’abonnement.`,
    features: [
      "Android 10",
      "4K 60 fps HDR10+",
      "2 Go RAM / 4 Go ROM",
      "Ethernet + Wi-Fi 2,4 GHz",
      "Compatible IBO / TiviMate / Smarters",
      "Recommandée par IPTV IBO PLAYER",
    ],
    priceLabel: "Voir le prix sur Amazon",
    amazonUrl: "https://www.amazon.fr/dp/B0D6PCPTSM",
    brand: "Formuler",
    recommended: true,
    seoTitle: "Formuler Z10 Neo Maroc — Box Android 4K IPTV",
    seoDescription:
      "Formuler Z10 Neo au Maroc : box Android 10 4K recommandée IPTV IBO PLAYER. Activation IBO / TiviMate à Casablanca.",
  },
  {
    name: "Formuler Z12 Ultra",
    slug: "formuler-z12-ultra",
    image: "/images/boxes/formuler-z12-ultra.jpg",
    shortDescription:
      "Box Android 12 flagship 4K — Dolby Vision / Atmos, Wi-Fi 6E, télécommande Bluetooth rétroéclairée.",
    fullDescription: `La Formuler Z12 Ultra est le modèle haut de gamme Formuler : Android 12, 4 Go de RAM DDR4, 128 Go de stockage, Dolby Vision et Dolby Atmos, Gigabit LAN et Wi-Fi 6E. Idéale si vous voulez le maximum pour le 4K IPTV et le multitâche apps (IBO Player, TiviMate, Smarters…).

Décodage 4K 60 fps 10 bits (AV1, H.265, HDR10+, HLG). La télécommande GTV-BT3 Bluetooth vocale rétroéclairée (touches programmables, Find My Remote) change vraiment l’usage salon.

Chez IPTV IBO PLAYER à Casablanca, on l’installe après achat Amazon : player + abonnement, réglages réseau (Ethernet Gigabit recommandé pour le 4K).

Plus puissante et plus chère que la Z10 Neo — choisissez-la si vous visez le premium Formuler.`,
    features: [
      "Android 12",
      "4 Go RAM / 128 Go ROM",
      "Dolby Vision & Dolby Atmos",
      "Gigabit LAN + Wi-Fi 6E",
      "4K 60 fps HDR10+ / AV1",
      "Télécommande Bluetooth rétroéclairée",
      "Compatible IBO / TiviMate / Smarters",
    ],
    priceLabel: "Voir le prix sur Amazon",
    amazonUrl: "https://www.amazon.fr/dp/B0FNN1DJMS",
    brand: "Formuler",
    seoTitle: "Formuler Z12 Ultra Maroc — Box 4K Dolby Vision IPTV",
    seoDescription:
      "Formuler Z12 Ultra : Android 12, 4 Go/128 Go, Dolby Vision/Atmos, Wi-Fi 6E. Achetez sur Amazon, activation IPTV chez IPTV IBO PLAYER Casablanca.",
  },
  {
    name: "Xiaomi Mi Stick 4K (2nd Gen)",
    slug: "xiaomi-mi-stick-2nd-gen",
    image: "/images/boxes/xiaomi-mi-stick-2nd-gen.jpg",
    shortDescription:
      "Stick HDMI 4K compact — Dolby Vision, Wi-Fi 6, idéal pour démarrer en IPTV sans grosse box.",
    fullDescription: `Le Xiaomi Mi Smart TV Stick 4K (2e génération) transforme une TV classique en smart TV : branchement HDMI, télécommande fournie, interface fluide. Décodage 4K, Dolby Vision / HDR10+, Dolby Atmos et DTS:X, Wi-Fi 6 bi-bande — un format stick léger et abordable.

Processeur quad-core A55 2,5 GHz, 8 Go de stockage : assez pour installer IBO Player, TiviMate ou Smarters et vos apps de streaming du quotidien. Parfait en second salon, camping-car ou TV secondaire.

Chez IPTV IBO PLAYER à Casablanca, on active le player et l’abonnement après votre achat Amazon. Pour du 4K intensif au salon principal, comparez avec Formuler Z10 Neo / Z12 Ultra ; pour un budget stick, le Xiaomi reste un excellent rapport qualité-prix.`,
    features: [
      "Stick HDMI 4K",
      "Dolby Vision & HDR10+",
      "Dolby Atmos / DTS:X",
      "Wi-Fi 6 bi-bande",
      "8 Go de stockage",
      "Compatible IBO / TiviMate / Smarters",
      "Format compact & portable",
    ],
    priceLabel: "Voir le prix sur Amazon",
    amazonUrl: "https://www.amazon.fr/dp/B0FFN6NRTZ",
    brand: "Xiaomi",
    seoTitle: "Xiaomi Mi Stick 4K Maroc — Stick HDMI IPTV",
    seoDescription:
      "Xiaomi Mi Stick 4K (2e gén.) : stick HDMI 4K Dolby Vision Wi-Fi 6. Achetez sur Amazon, activation IPTV chez IPTV IBO PLAYER Casablanca.",
  },
  {
    name: "Fire TV Stick HD + Ethernet",
    slug: "fire-tv-stick-hd-ethernet",
    image: "/images/boxes/fire-tv-stick.jpg",
    shortDescription:
      "Produit éco — stick Amazon HD + adaptateur Ethernet USB-C, Wi-Fi 6, idéal pour démarrer en IPTV.",
    fullDescription: `Produit éco de la boutique IPTV IBO PLAYER : bundle Amazon Fire TV Stick HD (dernière génération) avec adaptateur Ethernet USB-C à angle droit. Stick Full HD rapide, Wi-Fi 6, profil ultra-portable branché directement sur le HDMI — plus l’adaptateur réseau pour une connexion filaire plus stable en IPTV.

Interface Fire TV 2026 : apps de streaming, navigation simplifiée. L’adaptateur Ethernet USB-C (compatible Fire TV Stick HD 2e gén. USB-C, jusqu’à ~480 Mbps) limite le buffering Wi-Fi saturé — un vrai plus pour IBO Player et les abonnements live.

Chez IPTV IBO PLAYER à Casablanca, on installe le lecteur et l’abonnement après votre achat Amazon. HD (pas 4K) : excellent pour un usage quotidien ; pour le 4K, orientez-vous vers Formuler ou Xiaomi Stick 4K.`,
    features: [
      "Fire TV Stick HD (dernier modèle)",
      "Adaptateur Ethernet USB-C inclus",
      "Wi-Fi 6",
      "Full HD portable",
      "Compatible IBO Player / apps sideload",
      "Connexion filaire plus stable",
    ],
    priceLabel: "Voir le prix sur Amazon",
    amazonUrl: "https://www.amazon.fr/dp/B0GSGXPPLN",
    brand: "Amazon",
    eco: true,
    seoTitle: "Fire TV Stick HD Maroc — Stick IPTV + Ethernet",
    seoDescription:
      "Fire TV Stick HD dernière gén. + adaptateur Ethernet USB-C. Achetez sur Amazon, activation IBO Player chez IPTV IBO PLAYER Casablanca.",
  },
];

export function getBoxBySlug(slug: string): BoxProduct | undefined {
  return boxes.find((b) => b.slug === slug);
}

export function getAllBoxSlugs(): string[] {
  return boxes.map((b) => b.slug);
}
