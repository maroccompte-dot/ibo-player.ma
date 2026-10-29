import type { AppItem } from "./types";
import { buildItem } from "./helpers";

/**
 * Applications IPTV — contenu SEO riche (avis, installation, FAQ).
 * Boutique : IPTV IBO PLAYER.
 */
export const apps: AppItem[] = [
  buildItem({
    name: "IPTV Smarters Pro",
    logo: "/logos/iptv-smarters-pro.png",
    category: "player",
    seo: {
      title: "IPTV Smarters Pro : guide installation Fire Stick & Android Maroc",
      description:
        "Installer IPTV Smarters Pro au Maroc (Fire Stick, Android TV) : Xtream Codes, M3U, EPG. Activation et SAV chez IPTV IBO PLAYER — partout au Maroc.",
      keywords: [
        "IPTV Smarters Pro",
        "Smarters Pro Fire Stick",
        "installer Smarters Pro",
        "Smarters Pro Android TV",
        "lecteur IPTV Smarters",
      ],
    },
    shortDescription:
      "Guide Smarters Pro Maroc : installation Fire Stick & Android TV, Xtream Codes, M3U, EPG — activation chez IPTV IBO PLAYER.",
    fullReview: `IPTV Smarters Pro est l’un des lecteurs IPTV les plus recherchés au Maroc. Que vous tapiez « IPTV Smarters Pro Fire Stick », « Smarters Pro Android TV » ou « comment installer IPTV Smarters », ce guide répond aux questions concrètes avant l’achat.

L’application prend en charge les playlists M3U et les comptes Xtream Codes API. Vous accédez aux chaînes live, à la VOD et aux séries selon votre abonnement. L’EPG (guide TV) s’affiche lorsque le serveur le fournit. L’interface reste simple : idéal pour débuter sans se perdre dans les réglages.

Chez IPTV IBO PLAYER, nous installons Smarters Pro sur Fire Stick, box Android, Smart TV compatibles et smartphones. Nous ajoutons ensuite votre serveur (Trex, Crystal, Strong 8K, etc.) et vérifions les chaînes clés (TNT, sport, cinéma) avant que vous repartiez.

Point important : Smarters Pro est un lecteur. La qualité d’image et la stabilité dépendent de votre abonnement IPTV et de votre connexion fibre. Notre équipe vous oriente vers le serveur adapté à votre usage (familial, sport, 4K).`,
    features: [
      "Xtream Codes API & fichiers M3U",
      "Live TV, VOD et séries",
      "EPG / guide des programmes",
      "Compatible Fire Stick & Android TV",
      "Multi-appareils selon licence",
      "Interface simple pour débutants",
      "Activation et SAV chez IPTV IBO PLAYER",
    ],
    installationSteps: [
      "Passez chez IPTV IBO PLAYER ou écrivez à contact@ibo-player.ma pour la licence / l’abonnement.",
      "Sur Fire Stick : activez les sources inconnues, installez IPTV Smarters Pro via le fichier fourni ou le store conseillé.",
      "Sur Android TV / box : installez l’APK, ouvrez l’app et choisissez « Xtream Codes API » ou « M3U Playlist ».",
      "Saisissez l’URL, le username et le password fournis par IPTV IBO PLAYER (ou importez le lien M3U).",
      "Attendez le chargement des catégories, activez l’EPG si proposé, puis vérifiez 4–5 chaînes HD.",
      "En cas d’erreur de login ou de buffering, contactez le magasin pour un réglage serveur / player.",
    ],
    pricingSummary:
      "Licence applicative et abonnement IPTV sur devis. Tarifs selon durée (1, 3, 6, 12 mois) et nombre d’écrans — IPTV IBO PLAYER ou e-mail.",
    faq: [
      {
        question: "IPTV Smarters Pro est-il gratuit ?",
        answer:
          "Il existe des versions / canaux de distribution variables. Chez nous, l’installation et l’abonnement sont proposés ensemble pour un setup fiable et un SAV chez IPTV IBO PLAYER.",
      },
      {
        question: "Comment installer IPTV Smarters Pro sur Fire Stick ?",
        answer:
          "Il faut autoriser les apps de sources inconnues, installer l’APK, puis entrer vos codes Xtream. Notre boutique le fait pour vous en quelques minutes.",
      },
      {
        question: "Smarters Pro marche-t-il avec Trex ou Crystal ?",
        answer:
          "Oui. Tout serveur qui fournit Xtream Codes ou M3U est compatible. Nous configurons le panel adapté à votre formule.",
      },
      {
        question: "Quelle différence avec TiviMate ?",
        answer:
          "Smarters Pro est plus simple pour débuter. TiviMate offre un EPG et des options avancées (Premium). On vous conseille selon votre box et votre niveau.",
      },
    ],
    rating: 4.6,
  }),
  buildItem({
    name: "TiviMate",
    logo: "/logos/tivimate.jpg",
    category: "player",
    seo: {
      title: "TiviMate IPTV : avis, Premium, Xtream Codes — guide Maroc 2026",
      description:
        "TiviMate : lecteur IPTV Android référence (EPG, Premium, Xtream). Installation et configuration chez IPTV IBO PLAYER, partout au Maroc.",
      keywords: [
        "TiviMate",
        "TiviMate Premium",
        "TiviMate Xtream Codes",
        "meilleur lecteur IPTV Android",
        "TiviMate vs Smarters",
      ],
    },
    shortDescription:
      "Avis TiviMate IPTV 2026 : meilleur lecteur Android, EPG, enregistrement Premium — installation chez IPTV IBO PLAYER.",
    fullReview: `TiviMate est souvent cité comme le meilleur lecteur IPTV Android. Les recherches « TiviMate Premium », « TiviMate Xtream Codes » et « TiviMate vs Smarters » montrent une demande forte pour un player pro, stable et personnalisable.

Points forts : EPG très lisible, favoris, groupes de chaînes, contrôle parental, et en Premium : enregistrements, multi-vues, gestion avancée des playlists. TiviMate brille sur Android TV et les box (Nvidia Shield, Mi Box, etc.).

Chez IPTV IBO PLAYER, nous configurons TiviMate avec votre abonnement (Strong 8K, Dream 4K, Maxott…). Nous activons Premium si besoin, organisons vos favoris sport / cinéma et expliquons les réglages anti-buffer (timeout, buffer size).

Limite : TiviMate n’est pas sur iPhone / Apple TV nativement. Pour iOS, d’autres lecteurs sont nécessaires. Sur Fire Stick, l’installation est possible mais Android TV reste le terrain de jeu idéal.`,
    features: [
      "EPG avancé et favoris intelligents",
      "TiviMate Premium (enregistrements, multi-vues)",
      "Xtream Codes & M3U",
      "Contrôle parental",
      "Idéal Android TV / box pro",
      "Réglages buffer personnalisables",
      "Configuration chez IPTV IBO PLAYER",
    ],
    installationSteps: [
      "Installez TiviMate depuis Google Play (Android TV) ou via l’APK recommandé en boutique.",
      "Créez un nouveau playlist → Xtream Codes ou M3U Playlist.",
      "Entrez les identifiants fournis par IPTV IBO PLAYER.",
      "(Optionnel) Achetez / activez TiviMate Premium pour débloquer l’enregistrement et le multi-écran.",
      "Personnalisez l’EPG, les favoris et le parental control.",
      "Vérifiez le sport en direct aux heures de pointe pour valider la stabilité.",
    ],
    pricingSummary:
      "TiviMate Premium : achat in-app. Abonnement IPTV et aide à l’installation : devis chez IPTV IBO PLAYER.",
    faq: [
      {
        question: "TiviMate Premium vaut-il le coup ?",
        answer:
          "Oui si vous voulez enregistrer des programmes, multi-vues ou plus de playlists. Pour un usage simple live TV, la version de base peut suffire.",
      },
      {
        question: "TiviMate fonctionne-t-il sur Fire Stick ?",
        answer:
          "Oui via sideload, mais l’expérience est souvent meilleure sur Android TV. On vous guide selon votre appareil.",
      },
      {
        question: "Puis-je utiliser plusieurs serveurs ?",
        answer:
          "Avec Premium, la gestion multi-playlists est plus confortable. Demandez-nous la config adaptée à votre offre.",
      },
      {
        question: "Où configurer TiviMate près de Casablanca ?",
        answer:
          "Chez IPTV IBO PLAYER ou par e-mail à contact@ibo-player.ma.",
      },
    ],
    rating: 4.8,
  }),
  buildItem({
    name: "IBO PRO",
    logo: "/logos/ibo-pro.png",
    category: "player",
    shortDescription:
      "IBO PRO activation MAC Maroc : installation Fire Stick, multi-appareils — chez IPTV IBO PLAYER.",
    fullReview: `IBO PRO s’adresse aux utilisateurs qui cherchent une activation MAC professionnelle dans l’écosystème IBO. Les requêtes « IBO PRO activation », « IBO PRO Fire Stick » et « acheter IBO PRO Maroc » correspondent exactement à ce que nous traitons en boutique chaque semaine.

Contrairement à un simple APK « jetable », IBO PRO est pensé pour un suivi : activation de l’appareil, ajout de l’abonnement IPTV, et assistance en cas de changement de box. L’interface reste familière pour ceux qui connaissent déjà IBO Player.

IPTV IBO PLAYER active IBO PRO chez IPTV IBO PLAYER ou à distance (vous nous envoyez la MAC affichée à l’écran). Nous branchons ensuite votre serveur préféré et vérifions live + VOD.

Conseil SEO pratique : si vous hésitez entre IBO Player, IBO Player Pro et IBO PRO, venez avec votre Fire Stick — on compare les trois et on active la version adaptée à votre budget.`,
    features: [
      "Activation par adresse MAC",
      "Écosystème IBO / usage Pro",
      "Fire Stick, Android TV, Smart TV",
      "Live TV + VOD selon abonnement",
      "Activation magasin ou distance",
      "SAV francophone",
    ],
    installationSteps: [
      "Procurez-vous IBO PRO via IPTV IBO PLAYER (devis selon formule).",
      "Installez l’application sur votre appareil TV.",
      "Relevez l’adresse MAC affichée au premier lancement.",
      "Transmettez la MAC en magasin ou par e-mail pour activation.",
      "Ajoutez vos identifiants Xtream / M3U une fois l’app débloquée.",
      "Validez quelques chaînes HD et le guide EPG.",
    ],
    pricingSummary:
      "Licence IBO PRO + abonnement IPTV sur devis. Options multi-appareils disponibles en boutique.",
    faq: [
      {
        question: "Quelle différence entre IBO PRO et IBO Player ?",
        answer:
          "IBO PRO vise un usage plus pro / multi-appareils selon l’offre. IBO Player reste l’entrée de gamme très demandée. On vous oriente en magasin.",
      },
      {
        question: "L’activation MAC est-elle définitive ?",
        answer:
          "Elle est liée à l’appareil. En cas de changement de box, contactez-nous pour une migration selon les conditions de la licence.",
      },
      {
        question: "Puis-je activer IBO PRO à distance ?",
        answer:
          "Oui : envoyez la MAC à contact@ibo-player.ma après installation, puis ajoutez votre abonnement.",
      },
    ],
    rating: 4.7,
  }),
  buildItem({
    name: "IBO Player",
    logo: "/logos/ibo-player.png",
    category: "player",
    seo: {
      title: "IBO Player Maroc : activation MAC, Fire Stick & Android TV",
      description:
        "IBO Player : activation MAC, installation Fire Stick / Android TV, abonnement. Guide officiel boutique IPTV IBO PLAYER — service partout au Maroc.",
      keywords: [
        "IBO Player",
        "IBO Player activation",
        "IBO Player MAC",
        "IBO Player Fire Stick",
        "IBO Player Maroc",
      ],
    },
    shortDescription:
      "IBO Player Maroc : avis, activation MAC, installation Fire Stick & Android — chez IPTV IBO PLAYER.",
    fullReview: `IBO Player est le cœur de notre activité et l’une des apps IPTV les plus recherchées (« IBO Player activation », « IBO Player MAC », « IBO Player Fire Stick Maroc »). Ce guide vous explique le fonctionnement réel, sans jargon inutile.

Le principe : vous installez l’app, vous notez l’adresse MAC, vous activez auprès d’un revendeur (comme IPTV IBO PLAYER), puis vous chargez votre abonnement via Xtream Codes ou M3U. En quelques minutes, live TV, films et séries sont accessibles sur la télé du salon.

Pourquoi choisir IPTV IBO PLAYER ? Parce qu’une mauvaise activation ou un mauvais serveur ruine l’expérience. Nous vérifions votre fibre, choisissons le panel (Trex, Crystal, Strong 8K…) et laissons votre Fire Stick prêt à l’emploi.

IBO Player convient aux débutants comme aux utilisateurs confirmés. Si vous avez plusieurs TV, regardez aussi IBO Player Pro ou IBO PRO pour les options multi-appareils.`,
    features: [
      "Activation MAC simple et rapide",
      "Très populaire sur Amazon Fire Stick",
      "Compatible M3U et Xtream Codes",
      "EPG lorsque le serveur le fournit",
      "Live, VOD, séries",
      "Installation & SAV chez IPTV IBO PLAYER",
      "Site dédié : ibo-player.ma",
    ],
    installationSteps: [
      "Contactez IPTV IBO PLAYER, ou écrivez à contact@ibo-player.ma.",
      "Installez IBO Player sur Fire Stick / Android TV (nous pouvons le faire sur place).",
      "Notez l’adresse MAC affichée à l’écran.",
      "Faites activer l’appareil par notre équipe.",
      "Ajoutez l’URL, login et mot de passe de votre abonnement IPTV.",
      "Parcourez les bouquets, fixez vos chaînes favorites, profitez.",
    ],
    pricingSummary:
      "Activation IBO Player + abonnement IPTV : tarifs selon durée et nombre de connexions. Devis gratuit en boutique.",
    faq: [
      {
        question: "Où activer IBO Player au Maroc ?",
        answer:
          "Chez IPTV IBO PLAYER, ou à distance par e-mail avec votre adresse MAC.",
      },
      {
        question: "IBO Player fonctionne-t-il sans abonnement ?",
        answer:
          "Non. C’est un lecteur : il faut une playlist / un serveur IPTV compatible pour voir les chaînes.",
      },
      {
        question: "Que faire si l’écran reste sur « Device not activated » ?",
        answer:
          "La MAC n’est pas encore validée, ou elle a été mal copiée. Repassez en magasin ou renvoyez une photo de l’écran MAC.",
      },
      {
        question: "IBO Player vs TiviMate : lequel choisir ?",
        answer:
          "IBO Player = activation MAC et simplicité. TiviMate = EPG et options avancées sur Android. On compare avec vous selon votre box.",
      },
    ],
    rating: 4.7,
  }),
  buildItem({
    name: "IBO Player Pro",
    logo: "/logos/ibo-player-pro.png",
    category: "player",
    shortDescription:
      "IBO Player Pro : avis activation Pro, multi-TV, différence avec IBO Player classique.",
    fullReview: `IBO Player Pro répond aux recherches « IBO Player Pro activation », « IBO Player Pro vs IBO Player » et « licence Pro Fire Stick ». C’est la variante enrichie pour ceux qui veulent plus de flexibilité que la version standard.

En pratique, vous gardez le confort d’IBO Player (MAC, interface TV, live + VOD) avec une offre Pro adaptée aux foyers multi-écrans ou aux utilisateurs qui renouvellent souvent. Notre équipe clarifie toujours le nombre d’appareils inclus avant paiement.

Chez IPTV IBO PLAYER, la migration depuis IBO Player classique est fréquente : on réutilise vos codes serveur quand c’est possible, on réactive la nouvelle licence, on revérifie sport et cinéma en HD/4K.

Si votre besoin est uniquement une seule Fire Stick pour le salon, IBO Player standard peut suffire. Pour deux ou trois TV, IBO Player Pro devient vite rentable.`,
    features: [
      "Base IBO Player + avantages Pro",
      "Intérêt multi-appareils selon offre",
      "Activation assistée en boutique",
      "Compatible playlists existantes",
      "Support prioritaire",
      "Fire Stick & Android TV",
    ],
    installationSteps: [
      "Demandez un devis IBO Player Pro (nombre d’appareils + durée).",
      "Installez IBO Player Pro sur chaque appareil concerné.",
      "Relevez et transmettez chaque adresse MAC.",
      "Après activation, importez Xtream / M3U sur le premier appareil.",
      "Dupliquez la config sur les autres TV si inclus dans l’offre.",
      "Vérifiez qu’aucune connexion simultanée ne dépasse la limite du serveur.",
    ],
    pricingSummary:
      "Licence Pro selon nombre d’appareils. Abonnement IPTV facturé à part. Devis en magasin ou par mail.",
    faq: [
      {
        question: "Puis-je migrer depuis IBO Player ?",
        answer:
          "Oui dans la plupart des cas. Conservez vos identifiants serveur ; on réactive la licence Pro et on réimporte la playlist.",
      },
      {
        question: "Combien de Fire Stick avec IBO Player Pro ?",
        answer:
          "Cela dépend de la formule achetée. Demandez explicitement le quota avant de payer.",
      },
      {
        question: "IBO Player Pro est-il nécessaire pour le 4K ?",
        answer:
          "Non : le 4K dépend surtout du serveur et de la TV. Le Pro aide surtout pour le multi-appareils et le suivi licence.",
      },
    ],
    rating: 4.6,
  }),
  buildItem({
    name: "IB Player",
    logo: "/logos/ib-player.png",
    category: "player",
    shortDescription:
      "IB Player IPTV : activation MAC, avis installation Android / Fire TV — configuration chez IPTV IBO PLAYER.",
    fullReview: `IB Player fait partie de la famille de lecteurs à activation MAC très demandés au Maroc. Les utilisateurs cherchent « IB Player activation », « IB Player MAC address » et une boutique qui évite les arnaques en ligne.

Le parcours ressemble à IBO : install → MAC → activation revendeur → abonnement. L’interface est pensée pour la télécommande TV, avec accès rapide live et VOD.

IPTV IBO PLAYER installe IB Player sur place, active l’appareil et connecte votre serveur. Utile si votre box est déjà habituée à l’écosystème IB / IBO, ou si vous suivez une recommandation d’un proche.

Nous vérifions toujours la compatibilité de votre modèle (Fire Stick 4K, Xiaomi, Nokia, etc.) avant d’installer pour éviter les APK incompatibles.`,
    features: [
      "Activation MAC",
      "Interface orientée télécommande",
      "Live & VOD",
      "Compatible box Android / Fire TV",
      "Paramétrage pro en magasin",
    ],
    installationSteps: [
      "Apportez votre box en magasin ou installez IB Player chez vous.",
      "Notez la MAC affichée.",
      "Faites activer auprès d’IPTV IBO PLAYER.",
      "Ajoutez Xtream Codes ou M3U.",
      "Vérifiez chaînes FR + une chaîne sport.",
    ],
    pricingSummary:
      "Activation IB Player + abonnement sur devis. Voir tarifs chez IPTV IBO PLAYER.",
    faq: [
      {
        question: "IB Player et IBO Player sont-ils identiques ?",
        answer:
          "Ce sont des apps proches dans l’usage (MAC + playlist) mais distinctes. On vous dit laquelle est dispo / adaptée à votre appareil.",
      },
      {
        question: "Où acheter IB Player sans risque ?",
        answer:
          "Privilégiez un point de vente physique comme IPTV IBO PLAYER pour l’activation et le SAV.",
      },
      {
        question: "Que faire si IB Player ne charge pas les chaînes ?",
        answer:
          "Vérifiez d’abord l’abonnement (login/expiré), puis le réseau. Notre SAV peut revérifier le panel en magasin.",
      },
    ],
    rating: 4.4,
  }),
  buildItem({
    name: "IB Smarter Player",
    logo: "/logos/ib-smarter-player.png",
    category: "player",
    shortDescription:
      "IB Smarter Player : alternative type Smarters, playlists Xtream/M3U, guide installation Maroc.",
    fullReview: `IB Smarter Player combine une logique proche d’IPTV Smarters avec le circuit d’activation / suivi des lecteurs IB. Les recherches « IB Smarter Player », « Smarter Player IPTV » et « player type Smarters MAC » correspondent à ce profil.

Vous retrouvez une navigation par catégories, l’ajout de comptes Xtream et souvent un EPG selon le serveur. C’est un bon choix si vous aimez Smarters mais voulez un setup géré par un revendeur local.

Chez IPTV IBO PLAYER, nous installons IB Smarter Player, activons l’appareil et formons rapidement les utilisateurs (changer de catégorie, relancer l’EPG, basculer VOD).

Si vous venez de Smarters Pro, la prise en main est quasi immédiate. Si vous venez de TiviMate, attendez-vous à une UI plus simple, moins « pro » mais très efficace au quotidien.`,
    features: [
      "Logique type Smarters",
      "Xtream Codes & M3U",
      "EPG selon serveur",
      "Activation / suivi boutique",
      "Bon pour débutants Smarters",
    ],
    installationSteps: [
      "Installez IB Smarter Player (APK / store selon appareil).",
      "Activez via MAC auprès d’IPTV IBO PLAYER.",
      "Ajoutez le compte Xtream fourni.",
      "Synchronisez l’EPG.",
      "Créez une liste de favoris (info, sport, kids).",
    ],
    pricingSummary:
      "Licence + abonnement sur devis. Formules 1 à 12 mois en magasin.",
    faq: [
      {
        question: "IB Smarter remplace-t-il IPTV Smarters Pro ?",
        answer:
          "Il peut, selon vos goûts. Les deux gèrent Xtream/M3U. On vérifie les deux sur votre box si vous hésitez.",
      },
      {
        question: "Faut-il un compte Google ?",
        answer:
          "Pas forcément : beaucoup d’installations se font en sideload sur Fire Stick / box.",
      },
      {
        question: "Compatible iPhone ?",
        answer:
          "Le focus est Android / TV. Pour iOS, demandez une alternative en boutique.",
      },
    ],
    rating: 4.4,
  }),
  buildItem({
    name: "Nino Player",
    logo: "/logos/nino-player.webp",
    category: "player",
    shortDescription:
      "Nino Player IPTV avis : interface moderne, Xtream & M3U, installation box Android Maroc.",
    fullReview: `Nino Player monte en popularité grâce à une interface moderne et une lecture fluide sur de nombreuses box Android. Les requêtes « Nino Player activation », « Nino Player IPTV » et « Nino Player vs IBO » montrent un intérêt croissant.

Le player gère les sources Xtream et M3U, avec live et VOD selon l’abonnement. L’esthétique soignée plaît aux utilisateurs qui trouvent Smarters trop « basique » et TiviMate trop technique.

IPTV IBO PLAYER propose l’activation Nino Player, le branchement serveur et une vérification qualité (zapping, VOD, EPG). Nous vérifions aussi la chaleur / fluidité sur les petites box entrée de gamme.

Conseil : couplez Nino Player à un serveur stable (Trex, Pure, Crystal…) plutôt qu’à une offre low-cost saturée le week-end.`,
    features: [
      "Interface moderne",
      "Xtream Codes & M3U",
      "Live / VOD",
      "Bon feeling télécommande",
      "Activation chez IPTV IBO PLAYER",
      "Contrôle qualité inclus",
    ],
    installationSteps: [
      "Obtenez Nino Player via notre boutique.",
      "Installez sur Android TV / Fire Stick compatible.",
      "Activez selon la procédure (MAC / code) indiquée à l’écran.",
      "Ajoutez l’abonnement IPTV.",
      "Vérifiez zapping + une VOD + l’EPG.",
    ],
    pricingSummary:
      "Activation Nino Player et abonnement : devis selon durée. Paiement en magasin possible.",
    faq: [
      {
        question: "Nino Player est-il mieux qu’IBO Player ?",
        answer:
          "« Mieux » dépend de l’UI et de votre box. Beaucoup aiment le look de Nino ; IBO reste ultra répandu. On compare sur place.",
      },
      {
        question: "Nino Player lit-il le 4K ?",
        answer:
          "Si le serveur envoie du 4K et que la TV / box suit, oui. La limite est rarement le player seul.",
      },
      {
        question: "SAV si l’app plante au démarrage ?",
        answer:
          "Réinstallation + vérif mémoire box. Passez chez IPTV IBO PLAYER avec l’appareil si besoin.",
      },
    ],
    rating: 4.5,
  }),
  buildItem({
    name: "Hot Player",
    logo: "/logos/hot-player.svg",
    category: "player",
    shortDescription:
      "Hot Player IPTV : avis activation rapide, Fire Stick, guide installation.",
    fullReview: `Hot Player est recherché pour sa mise en route rapide (« Hot Player activation », « Hot Player Fire Stick », « Hot Player IPTV télécharger »). C’est un lecteur pensé pour aller vite : installer, activer, regarder.

Il convient aux utilisateurs qui veulent éviter les réglages complexes. Live TV d’abord ; VOD selon le serveur branché. Ideal en complément d’un abonnement fourni par un revendeur de confiance.

Chez IPTV IBO PLAYER, Hot Player est installé et activé en boutique, avec vérification anti-freeze sur quelques chaînes populaires. Nous expliquons aussi la différence avec Hot IPTV pour éviter la confusion entre les deux produits de la gamme « Hot ».

Si vous changez souvent de serveur, demandez-nous un player et un panel faciles à renouveler — Hot Player entre dans cette logique « simple et efficace ».`,
    features: [
      "Activation rapide",
      "Parcours débutant friendly",
      "Live TV prioritaire",
      "VOD selon abonnement",
      "Support boutique Maroc",
      "Compatible sticks & box",
    ],
    installationSteps: [
      "Contactez IPTV IBO PLAYER pour Hot Player + abonnement.",
      "Installez l’application sur votre stick / box.",
      "Activez selon MAC ou code affiché.",
      "Importez Xtream / M3U.",
      "Vérifiez info, sport et une chaîne internationale.",
    ],
    pricingSummary:
      "Pack activation Hot Player + durée d’abonnement au choix. Devis magasin / e-mail.",
    faq: [
      {
        question: "Hot Player et Hot IPTV : quelle différence ?",
        answer:
          "Deux apps de la même famille / écosystème proche mais distinctes. On vous indique laquelle activer selon stock et compatibilité appareil.",
      },
      {
        question: "Hot Player marche-t-il hors Maroc ?",
        answer:
          "Le player fonctionne partout avec Internet ; le catalogue dépend du serveur. Usage selon la législation locale.",
      },
      {
        question: "Que faire en cas de buffering ?",
        answer:
          "Vérifiez la fibre, passez en Wi-Fi 5 GHz ou Ethernet, et faites contrôler le serveur en boutique.",
      },
    ],
    rating: 4.5,
  }),
  buildItem({
    name: "Hot IPTV",
    logo: "/logos/hot-iptv.png",
    category: "player",
    shortDescription:
      "Hot IPTV application : installation TV & mobile, abonnement compatible.",
    fullReview: `Hot IPTV complète la gamme Hot pour les utilisateurs qui cherchent « Hot IPTV APK », « Hot IPTV activation » ou « Hot IPTV abonnement ». L’app cible un usage streaming quotidien sur TV et parfois mobile.

Elle se configure avec les abonnements IPTV standards (Xtream / M3U selon version). L’objectif : accès rapide aux bouquets sans menu labyrinthique.

IPTV IBO PLAYER installe Hot IPTV, active le device et connecte le serveur. Nous précisons les appareils supportés (Fire Stick, Android TV, téléphone) pour éviter les mauvaises surprises.

Astuce : si vous avez déjà Hot Player sur la TV du salon, Hot IPTV peut servir de second device (chambre, cuisine) selon les conditions de licence et du serveur.`,
    features: [
      "App Hot IPTV dédiée",
      "Usage TV et mobile selon version",
      "Compatible abonnements courants",
      "Installation assistée",
      "SAV chez IPTV IBO PLAYER",
    ],
    installationSteps: [
      "Choisissez Hot IPTV en magasin après vérif de compatibilité.",
      "Installez l’APK / l’app indiquée.",
      "Activez l’appareil.",
      "Ajoutez les identifiants IPTV.",
      "Vérifiez live sur Wi-Fi et, si possible, en Ethernet.",
    ],
    pricingSummary:
      "Activation + abonnement selon durée. Demandez le pack « TV + mobile » si besoin.",
    faq: [
      {
        question: "Hot IPTV remplace-t-il un abonnement TV box opérateur ?",
        answer:
          "C’est un usage IPTV via Internet, différent des offres Freebox / Orange TV. On vous explique le périmètre en magasin.",
      },
      {
        question: "Puis-je l’utiliser sur téléphone ?",
        answer:
          "Selon la version et la licence. Indiquez-nous votre modèle Android / iOS.",
      },
      {
        question: "Où trouver une Hot IPTV fiable ?",
        answer:
          "Évitez les APK douteux : passez par un revendeur comme IPTV IBO PLAYER.",
      },
    ],
    rating: 4.4,
  }),
  buildItem({
    name: "Nanomid Player",
    logo: "/logos/nanomid-player.jpg",
    category: "player",
    shortDescription:
      "Nanomid Player IPTV : avis lecteur léger, Xtream/M3U, installation box — guide Maroc.",
    fullReview: `Nanomid Player séduit ceux qui tapent « Nanomid Player », « Nanomid IPTV » ou « lecteur IPTV léger Android ». Moins médiatisé qu’IBO ou Smarters, il reste un choix solide quand on veut un player efficace sans options superflues.

Il lit les sources classiques Xtream / M3U et se comporte bien sur des box modestes (peu de RAM). Moins de « gadgets », plus de lecture directe des chaînes.

Chez IPTV IBO PLAYER, nous paramétrons Nanomid, validons le login serveur et contrôlons la lecture HD. Parfait pour une deuxième TV ou un budget serré avec un serveur stable.

Si vous voulez un EPG ultra avancé, préférez TiviMate. Si vous voulez l’activation MAC la plus répandue, regardez IBO Player. Nanomid se place entre les deux sur le critère « légèreté ».`,
    features: [
      "Lecteur léger (box entrée de gamme)",
      "Xtream / M3U",
      "Focus lecture live",
      "Config rapide",
      "SAV chez IPTV IBO PLAYER",
    ],
    installationSteps: [
      "Installez Nanomid Player sur la box cible.",
      "Ajoutez le compte fourni par IPTV IBO PLAYER.",
      "Laissez indexer les catégories.",
      "Vérifiez 3 chaînes HD + zapping rapide.",
      "Revenez au magasin si une catégorie reste vide.",
    ],
    pricingSummary:
      "Player + abonnement packagés sur devis. Idéal offre entrée de gamme.",
    faq: [
      {
        question: "Nanomid Player est-il gratuit ?",
        answer:
          "Le modèle économique varie. Chez nous l’intérêt est le pack installé + serveur + SAV, pas un APK isolé.",
      },
      {
        question: "Compatible Fire Stick 4K Max ?",
        answer:
          "Souvent oui. Apportez l’appareil : on vérifie avant installation.",
      },
      {
        question: "Nanomid vs Duplex ?",
        answer:
          "Deux alternatives « hors géants ». On compare UI et fluidité sur votre télécommande.",
      },
    ],
    rating: 4.3,
  }),
  buildItem({
    name: "BOB Player",
    logo: "/logos/bob-player.png",
    category: "player",
    shortDescription:
      "BOB Player IPTV activation MAC : Fire Stick, avis installation Maroc.",
    fullReview: `BOB Player revient souvent dans les recherches « BOB Player activation », « BOB Player MAC » et « BOB Player Fire Stick ». C’est un lecteur TV-friendly à activation MAC, très demandé dans les boutiques IPTV marocaines.

L’écran d’accueil privilégie la télécommande : chaînes live, catégories, VOD selon abonnement. Le parcours d’activation est familier pour quiconque a déjà utilisé IBO.

IPTV IBO PLAYER active BOB Player quotidiennement : relevé MAC, validation licence, ajout panel (Trex, Magnum, Lion…). Nous insistons sur la vérification sport le week-end si c’est votre usage principal.

Pour une version plus avancée, voir BOB PRO. Pour une seule TV salon, BOB Player standard reste un excellent rapport simplicité / résultat.`,
    features: [
      "Activation MAC",
      "UI pensée télécommande TV",
      "Live + VOD",
      "Très demandé en boutique",
      "Fire Stick & Android TV",
      "Activation magasin / distance",
    ],
    installationSteps: [
      "Installez BOB Player (nous pouvons le flasher en magasin).",
      "Notez la MAC.",
      "Activation par IPTV IBO PLAYER.",
      "Saisie Xtream Codes.",
      "Création favoris + vérification match / JT.",
    ],
    pricingSummary:
      "Activation BOB Player + abonnement selon durée. Devis immédiat en boutique.",
    faq: [
      {
        question: "BOB Player vs IBO Player ?",
        answer:
          "Usage proche (MAC + IPTV). Le choix dépend de la dispo licence, de l’UI et de votre box. Essayez les deux en magasin si besoin.",
      },
      {
        question: "BOB Player Pro existe-t-il ?",
        answer:
          "Oui : voir notre fiche BOB PRO pour la version avancée.",
      },
      {
        question: "L’activation expire-t-elle ?",
        answer:
          "Selon la licence achetée (durée). Notez la date de renouvellement ; on peut vous rappeler les échéances en magasin.",
      },
    ],
    rating: 4.5,
  }),
  buildItem({
    name: "Duplex",
    logo: "/logos/duplex.png",
    category: "player",
    shortDescription:
      "Duplex IPTV player : avis, compatibilité box, alternative IBO/Smarters — guide IPTV IBO PLAYER.",
    fullReview: `Duplex IPTV est une alternative aux lecteurs ultra connus. Les utilisateurs cherchent « Duplex IPTV », « Duplex player activation » et une comparaison honnête avec IBO ou Smarters.

Duplex vise un usage polyvalent : live et contenus à la demande selon le serveur. Il intéresse ceux qui veulent diversifier ou dont la box a un souci avec un autre APK.

Chez IPTV IBO PLAYER, nous installons Duplex, vérifions la compatibilité firmware, et branchons l’abonnement. Si Duplex n’est pas optimal sur votre appareil, on bascule sans drama vers IBO, TiviMate ou Smarters.

Le vrai critère n’est pas le logo du player : c’est la stabilité du serveur + la fibre + un SAV joignable. Duplex entre dans une offre globale que nous construisons avec vous.`,
    features: [
      "Alternative aux grands players",
      "Live & replay selon offre",
      "Compatibilité box vérifiée en magasin",
      "Configuration pro",
      "Conseil comparatif IBO / Smarters / Duplex",
    ],
    installationSteps: [
      "Diagnostic rapide de votre box en boutique.",
      "Installation Duplex si compatible.",
      "Activation / login selon procédure.",
      "Ajout serveur IPTV.",
      "Bench zapping + VOD.",
    ],
    pricingSummary:
      "Pack Duplex + abonnement sur devis. Possibilité de changer de player sans racheter le serveur (selon offre).",
    faq: [
      {
        question: "Duplex est-il toujours disponible ?",
        answer:
          "Selon stock / partenariats. Appelez ou passez au magasin pour la dispo du jour.",
      },
      {
        question: "Puis-je garder mon abonnement Trex avec Duplex ?",
        answer:
          "Oui si Trex fournit Xtream/M3U : le player change, le compte peut rester.",
      },
      {
        question: "Duplex sur Smart TV Samsung / LG ?",
        answer:
          "Variable. Beaucoup de clients sont plus stables sur Fire Stick / Android box — on vous dit franchement.",
      },
    ],
    rating: 4.3,
  }),
  buildItem({
    name: "IBOX XPLAYER",
    logo: "/logos/ibox-xplayer.png",
    category: "player",
    shortDescription:
      "IBOX XPLAYER : lecteur IPTV box Android, activation, multi-serveurs — avis Maroc.",
    fullReview: `IBOX XPLAYER cible les recherches « IBOX XPLAYER », « IBOX player IPTV » et « XPLAYER activation ». Orienté box Android, il s’intègre bien dans un foyer déjà équipé stick ou TV box.

Le player accepte les abonnements majeurs que nous vendons (Crystal, Trex, Strong 8K, Delta 4K…). L’idée : une app stable pour zapper et ouvrir la VOD sans friction.

IPTV IBO PLAYER active IBOX XPLAYER, importe le panel et forme l’utilisateur sur les catégories. Utile aussi en multi-serveurs : certains clients gardent un backup playlist.

Si vous cherchez exclusivement l’écosystème IBO « pur », restez sur IBO Player. Si votre box est déjà sur une logique IBOX / XPLAYER, on poursuit sur cette voie.`,
    features: [
      "Orienté Android box",
      "Activation assistée",
      "Multi-serveurs possibles",
      "Live + VOD",
      "Support Maroc",
    ],
    installationSteps: [
      "Vérification modèle box.",
      "Install IBOX XPLAYER.",
      "Activation licence.",
      "Ajout Xtream / M3U.",
      "Vérification multi-catégories + favoris.",
    ],
    pricingSummary:
      "Licence XPLAYER + abonnement. Tarifs selon durée — IPTV IBO PLAYER.",
    faq: [
      {
        question: "IBOX XPLAYER remplace-t-il IBO Player ?",
        answer:
          "Ce sont des produits différents. On choisit selon compatibilité et préférence UI.",
      },
      {
        question: "Puis-je mettre Strong 8K dessus ?",
        answer:
          "Oui, si vous avez les identifiants Strong 8K : on les saisit dans le player.",
      },
      {
        question: "Problème « no connection » ?",
        answer:
          "DNS / Wi-Fi / serveur expiré. Diagnostic en boutique avec votre appareil.",
      },
    ],
    rating: 4.4,
  }),
  buildItem({
    name: "Smartone Pro",
    logo: "/logos/smartone-pro.png",
    category: "player",
    shortDescription:
      "Smartone Pro IPTV : avis player familial, Xtream/M3U, installation chez IPTV IBO PLAYER.",
    fullReview: `Smartone Pro répond aux requêtes « Smartone Pro IPTV », « Smartone Player » et « Smartone Pro activation ». Positionné pour un usage familial : navigation claire, live + VOD, moins d’options intimidantes.

Les parents apprécient souvent la clarté des catégories kids / cinéma. Les sportifs ajoutent leurs chaînes en favoris. Le Pro apporte le niveau attendu pour un usage quotidien stable.

Chez IPTV IBO PLAYER, Smartone Pro est installé avec contrôle parental si demandé, plus un abonnement dimensionné (nombre d’écrans). Nous évitons de surcharger la box avec trois players inutiles.

Si vous hésitez avec Smarters Pro : Smartone Pro mise sur le confort familial ; Smarters est plus « universel » et très documenté en ligne. Les deux se configurent en magasin.`,
    features: [
      "Version Pro",
      "Usage familial / clair",
      "Xtream / M3U",
      "Aide installation",
      "Contrôle parental possible",
      "SAV local",
    ],
    installationSteps: [
      "Choix Smartone Pro selon appareil.",
      "Installation + activation.",
      "Ajout abonnement.",
      "Réglage favoris famille.",
      "Option parental sur catégories sensibles.",
    ],
    pricingSummary:
      "Pack familial Smartone Pro + abonnement. Devis selon nombre de TV.",
    faq: [
      {
        question: "Smartone Pro vs Smartone (non Pro) ?",
        answer:
          "La version Pro débloque / stabilise l’offre que nous recommandons. On détaille les écarts au comptoir.",
      },
      {
        question: "Bon pour enfants ?",
        answer:
          "Oui avec favoris kids + parental. Le contenu dépend toutefois de votre serveur.",
      },
      {
        question: "Fonctionne sur téléphone ?",
        answer:
          "Selon build. Priorité TV box / stick dans notre setup magasin.",
      },
    ],
    rating: 4.4,
  }),
  buildItem({
    name: "IBOSOL Player",
    logo: "/logos/ibosol-player.png",
    category: "player",
    shortDescription:
      "IBOSOL Player : activation MAC écosystème IBO/IBOSol, avis Fire Stick Maroc.",
    fullReview: `IBOSOL Player appartient à l’écosystème IBO / IBOSol très recherché (« IBOSOL Player », « IBOSol activation », « IBOSol MAC »). Les clients qui ont déjà connu IBO s’y retrouvent immédiatement.

Activation MAC, live, VOD, EPG selon serveur : le classique qui marche. Notre valeur ajoutée chez IPTV IBO PLAYER : activation propre, serveur adapté, vérification sport/cinéma avant départ.

IBOSOL Player est un excellent candidat si votre revendeur historique recommandait IBOSol, ou si votre Fire Stick affiche déjà cet écran d’activation.

Nous gérons aussi les renouvellements et les changements de box (nouvelle MAC) selon les conditions de licence.`,
    features: [
      "Activation MAC IBOSol",
      "Écosystème IBO familier",
      "Live & VOD",
      "Vérification en magasin",
      "Renouvellement facilité",
    ],
    installationSteps: [
      "Install IBOSOL Player.",
      "Photo / copie de la MAC.",
      "Activation IPTV IBO PLAYER.",
      "Import abonnement.",
      "Validation chaînes premium / sport.",
    ],
    pricingSummary:
      "Licence IBOSOL + abonnement. Offres 3, 6, 12 mois fréquentes.",
    faq: [
      {
        question: "IBOSOL et IBO Player : même chose ?",
        answer:
          "Même famille d’usage, apps / licences distinctes. On active la bonne selon votre écran et le stock.",
      },
      {
        question: "Puis-je renouveler uniquement le serveur ?",
        answer:
          "Oui souvent : la licence player et l’abonnement IPTV sont deux lignes. On clarifie à l’achat.",
      },
      {
        question: "Activation le jour même ?",
        answer:
          "En magasin, oui dans la majorité des cas. À distance : sous réserve de réception de la MAC.",
      },
    ],
    rating: 4.5,
  }),
  buildItem({
    name: "KING 4K Player",
    logo: "/logos/king-4k-player.png",
    category: "player",
    shortDescription:
      "KING 4K Player : avis lecteur UHD, serveurs 4K/8K, fibre — installation chez IPTV IBO PLAYER.",
    fullReview: `KING 4K Player cible les recherches « KING 4K Player », « player IPTV 4K » et « meilleur lecteur 4K Fire Stick ». L’app met l’accent sur la lecture UHD lorsque le serveur et le réseau suivent.

Attention au mythe : un player « 4K » ne crée pas de 4K magique. Il faut un abonnement 4K/8K (Strong 8K, Dream 4K, Ott4k, Delta 4K…), une TV compatible, et idéalement la fibre en Ethernet.

IPTV IBO PLAYER dimensionne le pack : KING 4K Player + serveur UHD + conseils Wi-Fi vs câble. Nous mesurons parfois le débit en magasin pour éviter les déceptions.

Si votre connexion est limitée, un excellent HD stable vaut mieux qu’un 4K qui buffer toutes les 10 secondes. On vous le dira clairement.`,
    features: [
      "Focus lecture 4K / UHD",
      "Compatible serveurs 4K & Strong 8K",
      "Android TV / box récentes",
      "Conseil débit fibre",
      "Setup anti-buffer",
    ],
    installationSteps: [
      "Audit rapide TV + box + débit.",
      "Install KING 4K Player.",
      "Activation.",
      "Ajout abonnement 4K/8K.",
      "Vérification scène 4K + sport HD pour comparer.",
    ],
    pricingSummary:
      "Player UHD + abonnement 4K/8K. Budget fibre/Ethernet recommandé — devis boutique.",
    faq: [
      {
        question: "KING 4K Player marche en Wi-Fi ?",
        answer:
          "Oui, mais l’Ethernet reste plus stable pour l’UHD. 5 GHz proche de la box si Wi-Fi obligatoire.",
      },
      {
        question: "Quel serveur avec KING 4K ?",
        answer:
          "Strong 8K, Dream 4K, Ott4k, Delta 4K, 4Matic 4K… selon dispo et budget.",
      },
      {
        question: "Ma TV est Full HD seulement ?",
        answer:
          "Le player fonctionne, mais vous ne verrez pas de vrai 4K. Un serveur HD/FHD peut suffire.",
      },
    ],
    rating: 4.5,
  }),
  buildItem({
    name: "BOB PRO",
    logo: "/logos/bob-pro.png",
    category: "player",
    shortDescription:
      "BOB PRO IPTV : version Pro de BOB Player, multi-appareils, activation chez IPTV IBO PLAYER.",
    fullReview: `BOB PRO est la montée en gamme de BOB Player (« BOB PRO activation », « BOB Player Pro », « BOB PRO multi TV »). Destiné aux foyers multi-écrans ou à un usage intensif.

Vous conservez l’ergonomie BOB avec une licence Pro. IPTV IBO PLAYER détaille le nombre d’appareils, active chaque MAC, et aligne le serveur sur le quota de connexions simultanées (sinon : coupures incompréhensibles le soir).

Cas typique : salon en BOB PRO + chambre en second device inclus. Nous documentons les MAC activées pour faciliter le SAV.

Si vous n’avez qu’une Fire Stick, BOB Player standard reste pertinent. Passez Pro quand la deuxième TV arrive.`,
    features: [
      "Version Pro de BOB Player",
      "Activation MAC multi-appareils",
      "Usage intensif / foyer",
      "Support boutique",
      "Alignement quota serveur",
    ],
    installationSteps: [
      "Devis BOB PRO (nb d’appareils).",
      "Install sur chaque device.",
      "Collecte des MAC.",
      "Activation groupée.",
      "Config serveur + vérification simultanée 2 écrans.",
    ],
    pricingSummary:
      "Licence Pro selon devices + abonnement multi-connexions. Devis IPTV IBO PLAYER.",
    faq: [
      {
        question: "Upgrade depuis BOB Player ?",
        answer:
          "Oui. On réutilise souvent le même abonnement IPTV si le quota le permet.",
      },
      {
        question: "Deux matchs en même temps ?",
        answer:
          "Il faut que le serveur autorise 2+ connexions. On vend le panel adapté.",
      },
      {
        question: "BOB PRO sur iPad ?",
        answer:
          "Focus sticks/box Android. Demandez une alternative iOS en boutique.",
      },
    ],
    rating: 4.6,
  }),
];

export function getAppBySlug(slug: string): AppItem | undefined {
  return apps.find((app) => app.slug === slug);
}

export function getAllAppSlugs(): string[] {
  return apps.map((app) => app.slug);
}
