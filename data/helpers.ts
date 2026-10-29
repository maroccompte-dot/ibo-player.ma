import type {
  ContentCategory,
  FaqItem,
  ReviewItem,
  SeoContent,
} from "./types";
import { siteConfig } from "@/lib/site";

function slugify(name: string): string {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, " et ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

type Seed = {
  name: string;
  category: ContentCategory;
  shortDescription: string;
  fullReview: string;
  features: string[];
  installationSteps?: string[];
  pricingSummary?: string;
  faq?: ReviewItem["faq"];
  rating?: number;
  externalRedirectUrl?: string;
  logo?: string;
  slug?: string;
  /** Surcharge SEO optionnelle */
  seo?: Partial<SeoContent>;
};

function generateSeo(
  name: string,
  category: ContentCategory,
  shortDescription: string,
  override?: Partial<SeoContent>,
): SeoContent {
  const isPlayer = category === "player";

  const base: SeoContent = isPlayer
    ? {
        title: `${name} IPTV Maroc : activation Fire Stick & Android`,
        description: `${shortDescription.slice(0, 120)}${shortDescription.length > 120 ? "…" : ""} Guide ${name} au Maroc — activation IPTV IBO PLAYER (Casablanca).`,
        keywords: [
          name,
          `${name} IPTV`,
          `${name} Maroc`,
          `${name} activation`,
          `${name} Fire Stick`,
          "lecteur IPTV Maroc",
          "application IPTV Maroc",
          "IPTV Casablanca",
        ],
        h1: `${name} — Lecteur IPTV au Maroc : activation & installation`,
        h2Presentation: `Présentation de ${name}`,
        h3Why: `Pourquoi choisir ${name} au Maroc ?`,
        h2Features: `Fonctionnalités de ${name}`,
        h2Install: `Comment installer ${name} au Maroc`,
        h3Prerequisites: `Prérequis pour ${name}`,
        h3Steps: `Étapes d’installation ${name}`,
        h2Pricing: `Tarifs et activation ${name} au Maroc`,
        h2Faq: `FAQ ${name}`,
        h2Reviews: `Avis sur ${name}`,
      }
    : {
        title: `${name} IPTV Maroc : abonnement, Xtream & activation`,
        description: `${shortDescription.slice(0, 120)}${shortDescription.length > 120 ? "…" : ""} Abonnement ${name} au Maroc — souscription IPTV IBO PLAYER (Casablanca).`,
        keywords: [
          name,
          `${name} IPTV`,
          `${name} Maroc`,
          `abonnement ${name}`,
          `${name} Xtream`,
          "serveur IPTV Maroc",
          "abonnement IPTV Maroc",
          "IPTV Casablanca",
        ],
        h1: `${name} — Abonnement IPTV au Maroc : guide & activation`,
        h2Presentation: `Présentation de l’abonnement ${name}`,
        h3Why: `Pour qui est fait ${name} au Maroc ?`,
        h2Features: `Ce que propose ${name}`,
        h2Install: `Comment installer ${name} au Maroc`,
        h3Prerequisites: `Prérequis pour utiliser ${name}`,
        h3Steps: `Étapes pour activer ${name}`,
        h2Pricing: `Tarifs et formules ${name} au Maroc`,
        h2Faq: `FAQ abonnement ${name}`,
        h2Reviews: `Avis sur ${name}`,
      };

  return { ...base, ...override };
}

const defaultInstallPlayer = [
  "Contactez IPTV IBO PLAYER (boutique ou e-mail) pour obtenir votre licence / activation.",
  "Installez l’application sur votre Fire Stick, Android TV, Smart TV ou smartphone.",
  "Notez l’adresse MAC (ou le device ID) affichée au premier lancement.",
  "Transmettez la MAC à notre équipe pour activation, puis ajoutez votre abonnement IPTV.",
  "Vérifiez quelques chaînes et contactez-nous en cas de besoin.",
];

const defaultInstallServer = [
  "Choisissez votre durée d’abonnement auprès d’IPTV IBO PLAYER (magasin ou contact en ligne).",
  "Recevez vos identifiants Xtream Codes ou le lien M3U.",
  "Ouvrez votre lecteur (IBO Player, TiviMate, Smarters, etc.) et ajoutez la source.",
  "Chargez l’EPG si disponible, puis parcourez les bouquets.",
  "En cas de souci de connexion, notre équipe IPTV IBO PLAYER peut vous dépanner.",
];

/** FAQ communes installation + appareils — ajoutées à chaque fiche */
function commonFaq(name: string, category: ContentCategory): FaqItem[] {
  const isPlayer = category === "player";

  if (isPlayer) {
    return [
      {
        question: `Comment installer ${name} ?`,
        answer: `Chez IPTV IBO PLAYER, nous installons ${name} pour vous (Fire Stick, Android TV, box…). Chez vous : téléchargez l’app, notez la MAC ou le code affiché, faites activer, puis ajoutez vos identifiants Xtream Codes ou le lien M3U. Un guide d’installation étape par étape est aussi sur cette page.`,
      },
      {
        question: `Quels appareils sont compatibles avec ${name} ?`,
        answer: `${name} fonctionne en général sur Amazon Fire Stick / Fire TV, box Android TV, certaines Smart TV Android, et selon la version sur smartphone ou tablette Android. Apportez votre appareil : on vérifie la compatibilité avant activation.`,
      },
      {
        question: `Peut-on utiliser ${name} / l’IPTV sur téléphone ?`,
        answer: `Oui, dans beaucoup de cas sur Android (téléphone). Sur iPhone, cela dépend du lecteur : certains players sont Android-only (ex. TiviMate). Chez IPTV IBO PLAYER, on vous indique l’app adaptée pour regarder l’IPTV sur mobile et on configure l’abonnement.`,
      },
      {
        question: "L’IPTV fonctionne-t-il sur tablette (Android ou iPad) ?",
        answer:
          "Oui sur tablette Android avec un lecteur compatible. Sur iPad, il faut une app iOS adaptée (pas tous les players TV existent sur Apple). On vous oriente vers la bonne combinaison lecteur + abonnement pour tablette.",
      },
      {
        question: `${name} marche-t-il sur Fire Stick et Android TV ?`,
        answer: `Oui, Fire Stick et Android TV sont les usages les plus courants pour ${name}. L’installation et l’activation se font souvent en quelques minutes chez IPTV IBO PLAYER.`,
      },
      {
        question: "Faut-il un ordinateur pour installer ?",
        answer:
          "Non obligatoire. La plupart des installs se font directement sur la box ou le stick. Un PC peut servir pour télécharger un APK, mais en boutique on s’occupe de tout sans que vous ayez besoin d’un ordinateur.",
      },
      {
        question: "Puis-je regarder sur plusieurs appareils en même temps ?",
        answer:
          "Cela dépend de votre abonnement (nombre de connexions simultanées) et parfois de la licence du player. Dites-nous combien de TV / téléphones / tablettes vous utilisez : on dimensionne l’offre.",
      },
      {
        question: `Où activer ou acheter ${name} ?`,
        answer:
          "Chez IPTV IBO PLAYER, ou par e-mail à contact@ibo-player.ma. Utilisez aussi le bouton « Accéder » / « Voir les abonnements » sur cette page.",
      },
    ];
  }

  return [
    {
      question: `Comment installer l’abonnement ${name} ?`,
      answer: `Après souscription chez IPTV IBO PLAYER, vous recevez vos identifiants Xtream Codes (URL, username, password) ou un lien M3U. Ouvrez votre lecteur (IBO Player, TiviMate, IPTV Smarters Pro, etc.), ajoutez la source, chargez les chaînes et l’EPG. On peut tout configurer pour vous sur place.`,
    },
    {
      question: `Sur quels appareils fonctionne ${name} ?`,
      answer: `${name} n’est pas une app : c’est un abonnement / serveur. Il fonctionne sur tous les appareils où vous installez un lecteur compatible — Fire Stick, Android TV, Smart TV, téléphone, tablette, parfois PC.`,
    },
    {
      question: `Peut-on utiliser ${name} sur téléphone ?`,
      answer: `Oui. Installez un lecteur IPTV mobile compatible (ex. IPTV Smarters Pro ou autre selon OS), saisissez les codes ${name}, et regardez en Wi-Fi ou 4G/5G. Attention au nombre de connexions si la TV tourne en même temps.`,
    },
    {
      question: `L’abonnement ${name} marche-t-il sur tablette ?`,
      answer: `Oui sur tablette Android avec un player adapté. Sur iPad, choisissez une app iOS compatible Xtream/M3U. Chez IPTV IBO PLAYER, on vous indique quelle app installer sur tablette avec ${name}.`,
    },
    {
      question: `Quels lecteurs sont compatibles avec ${name} ?`,
      answer: `Les lecteurs majeurs : IBO Player, IBO Player Pro, TiviMate, IPTV Smarters Pro, BOB Player, et la plupart des apps supportant Xtream Codes ou M3U. On branche ${name} sur le player de votre choix.`,
    },
    {
      question: "Fire Stick, Smart TV, box : lequel choisir ?",
      answer:
        "Fire Stick et box Android TV sont les plus simples pour débuter. Certaines Smart TV marchent aussi. Téléphone et tablette sont parfaits en complément (déplacements, deuxième écran). On vous conseille selon votre matériel.",
    },
    {
      question: "Combien d’appareils en même temps avec mon abonnement ?",
      answer: `Le quota dépend de la formule ${name} (1, 2, 3 connexions…). TV + téléphone = souvent 2 connexions si les deux streamment ensemble. Clarifiez toujours avant l’achat chez IPTV IBO PLAYER.`,
    },
    {
      question: `Où acheter ou renouveler ${name} ?`,
      answer:
        "Chez IPTV IBO PLAYER, ou par e-mail à contact@ibo-player.ma. Le bouton « Accéder » / « Voir les abonnements » vous oriente vers le contact.",
    },
  ];
}

function mergeFaq(specific: FaqItem[] | undefined, common: FaqItem[]): FaqItem[] {
  const result = [...(specific ?? [])];
  const existing = new Set(
    result.map((f) => f.question.toLowerCase().replace(/\s+/g, " ").trim()),
  );

  for (const item of common) {
    const key = item.question.toLowerCase().replace(/\s+/g, " ").trim();
    // skip near-duplicates (same start / same topic keywords)
    const isDup = [...existing].some(
      (q) =>
        q === key ||
        (q.includes("installer") && key.includes("installer")) ||
        (q.includes("appareils") &&
          q.includes("compatible") &&
          key.includes("appareils")) ||
        (q.includes("téléphone") && key.includes("téléphone")) ||
        (q.includes("tablette") && key.includes("tablette")) ||
        (q.includes("où activer") && key.includes("où activer")) ||
        (q.includes("où acheter") && key.includes("où acheter")),
    );
    if (!isDup) {
      result.push(item);
      existing.add(key);
    }
  }
  return result;
}

export function buildItem(seed: Seed): ReviewItem {
  const slug = seed.slug ?? slugify(seed.name);
  return {
    name: seed.name,
    slug,
    logo: seed.logo ?? "",
    category: seed.category,
    shortDescription: seed.shortDescription,
    fullReview: seed.fullReview,
    features: seed.features,
    installationSteps:
      seed.installationSteps ??
      (seed.category === "player" ? defaultInstallPlayer : defaultInstallServer),
    pricingSummary:
      seed.pricingSummary ??
      "Tarifs sur demande chez IPTV IBO PLAYER ou par e-mail. Formules selon durée et nombre d’appareils.",
    faq: mergeFaq(seed.faq, commonFaq(seed.name, seed.category)),
    externalRedirectUrl:
      seed.externalRedirectUrl ?? siteConfig.defaultPartnerUrl,
    seo: generateSeo(
      seed.name,
      seed.category,
      seed.shortDescription,
      seed.seo,
    ),
    rating: seed.rating ?? 4.5,
  };
}
