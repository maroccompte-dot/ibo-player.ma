import type { ServerItem } from "./types";
import { buildItem } from "./helpers";

/**
 * Serveurs / abonnements IPTV — contenu SEO riche.
 * Boutique : IPTV IBO PLAYER.
 */
export const servers: ServerItem[] = [
  buildItem({
    name: "Crystal",
    logo: "/logos/crystal.png",
    category: "abonnement",
    seo: {
      title: "Abonnement IPTV Crystal Maroc : avis, Xtream Codes, activation",
      description:
        "Crystal IPTV : avis abonnement quotidien, compatible IBO Player & TiviMate. Activation partout au Maroc chez IPTV IBO PLAYER.",
      keywords: [
        "abonnement Crystal",
        "Crystal IPTV",
        "Crystal Xtream Codes",
        "IPTV Crystal Maroc",
      ],
    },
    shortDescription:
      "Abonnement IPTV Crystal Maroc : avis, live & VOD, Xtream Codes, compatible IBO & TiviMate.",
    fullReview: `Crystal est un abonnement IPTV très demandé dans les recherches « IPTV Crystal », « Crystal Xtream Codes » et « abonnement Crystal Maroc ». Il vise un usage quotidien : chaînes marocaines et internationales, internationales et VOD selon la formule.

La force de Crystal : un bon équilibre stabilité / catalogue pour le foyer. Branché sur IBO Player, TiviMate ou Smarters Pro, il couvre JT, divertissement et une base sport correcte selon l’offre du moment.

Chez IPTV IBO PLAYER, vous repartez avec les identifiants Xtream, le player installé, et une vérification live. Nous expliquons le renouvellement pour éviter la coupure le jour J.

Crystal convient si vous voulez un serveur « polyvalent » sans forcément viser l’UHD extrême. Pour le 4K/8K agressif, voyez Strong 8K, Dream 4K ou Delta 4K.`,
    features: [
      "Chaînes live Maroc, arabes & internationales",
      "VOD selon offre",
      "Xtream Codes API",
      "Compatible IBO, TiviMate, Smarters",
      "Activation IPTV IBO PLAYER",
      "Renouvellement simple",
    ],
    installationSteps: [
      "Choisissez la durée Crystal (1, 3, 6, 12 mois) en boutique ou par e-mail.",
      "Recevez URL / username / password Xtream.",
      "Ajoutez le compte dans IBO Player, TiviMate ou Smarters Pro.",
      "Chargez l’EPG si disponible.",
      "Vérifiez TNT, une chaîne sport et une VOD.",
      "Notez la date d’expiration pour le renouvellement.",
    ],
    pricingSummary:
      "Formules Crystal selon durée et connexions simultanées. Devis chez IPTV IBO PLAYER.",
    faq: [
      {
        question: "Crystal est-il compatible IBO Player ?",
        answer:
          "Oui. Nous saisissons les Xtream Codes directement dans IBO Player après activation MAC.",
      },
      {
        question: "Combien d’écrans avec Crystal ?",
        answer:
          "Selon l’offre achetée (1, 2, 3 connexions…). Clarifiez toujours avant paiement.",
      },
      {
        question: "Que faire si Crystal buffer le samedi soir ?",
        answer:
          "Vérifiez d’abord votre Wi-Fi. Si le réseau est bon, contactez-nous : on regarde le panel / une alternative.",
      },
      {
        question: "Où acheter Crystal près de Casablanca ?",
        answer:
          "Chez IPTV IBO PLAYER. Maps sur notre site.",
      },
    ],
    rating: 4.5,
  }),
  buildItem({
    name: "Dream 4K",
    logo: "/logos/dream-4k.png",
    category: "abonnement",
    seo: {
      title: "Dream 4K IPTV : abonnement UHD, avis fibre Maroc 2026",
      description:
        "Dream 4K : abonnement IPTV ultra HD pour fibre. Comparatif Strong 8K, activation IPTV IBO PLAYER partout au Maroc.",
      keywords: [
        "Dream 4K IPTV",
        "abonnement IPTV 4K",
        "Dream 4K Xtream",
        "IPTV UHD Maroc",
      ],
    },
    shortDescription:
      "Dream 4K IPTV : abonnement ultra HD, sport & cinéma, avis fibre Maroc.",
    fullReview: `Dream 4K répond aux recherches « Dream 4K IPTV », « abonnement IPTV 4K » et « Dream 4K Xtream ». L’offre cible les foyers fibre avec TV 4K qui veulent une image plus nette sur cinéma et sport.

Sans un débit correct, le 4K devient un buffering permanent. C’est pourquoi nous validons souvent la connexion avant de pousser Dream 4K : Ethernet recommandé, Wi-Fi 5 GHz acceptable si proche de la box.

Compatible KING 4K Player, TiviMate, IBO Player. IPTV IBO PLAYER configure le panel, vérifie une scène UHD et une chaîne sport HD pour comparer.

Dream 4K n’est pas obligatoire pour tout le monde : un excellent FHD stable peut suffire. On vous le dit si votre setup n’est pas prêt.`,
    features: [
      "Flux 4K / UHD sélectionnés",
      "Sport & cinéma",
      "Panel Xtream",
      "Conseil fibre / Ethernet",
      "Players 4K compatibles",
      "Contrôle qualité en magasin",
    ],
    installationSteps: [
      "Audit débit + TV 4K.",
      "Souscription Dream 4K.",
      "Remise des identifiants.",
      "Config player (KING 4K / TiviMate / IBO).",
      "Vérification UHD + fallback HD.",
    ],
    pricingSummary:
      "Abonnement Dream 4K selon durée. Pack player UHD possible. Devis chez IPTV IBO PLAYER.",
    faq: [
      {
        question: "Quel débit pour Dream 4K ?",
        answer:
          "Plus votre débit réel est élevé et stable, mieux c’est. On mesure en magasin si besoin. Ethernet > Wi-Fi.",
      },
      {
        question: "Dream 4K vs Strong 8K ?",
        answer:
          "Deux positionnements UHD. Strong 8K pousse plus loin ; Dream 4K reste une excellente porte d’entrée 4K. Comparatif en boutique.",
      },
      {
        question: "Ma TV est Full HD : utile ?",
        answer:
          "Peu d’intérêt UHD. Préférez un serveur HD/FHD moins cher et plus stable.",
      },
    ],
    rating: 4.6,
  }),
  buildItem({
    name: "Eagle",
    slug: "eagle",
    logo: "/logos/eagle.webp",
    category: "serveur",
    shortDescription:
      "Serveur IPTV Eagle (Eagel) : avis catalogue large, stabilité, abonnement.",
    fullReview: `Eagle — parfois orthographié « Eagel » dans les recherches — est un serveur IPTV à catalogue large. Les requêtes « IPTV Eagle », « Eagle Xtream » et « abonnement Eagle » correspondent à une demande familiale polyvalente.

L’intérêt : couverture live correcte pour un foyer (infos, kids, international) avec une stabilité raisonnable quand le panel est bien choisi. Branchable sur IBO, TiviMate, Smarters, BOB Player.

IPTV IBO PLAYER fournit Eagle selon disponibilité, installe le player, et explique comment renouveler. Nous évitons les promesses « 50 000 chaînes » irréalistes : on parle usage réel.

Si vous cherchez surtout le sport ultra critique, comparez aussi Lion ou Strong 8K. Eagle reste un bon « daily driver ».`,
    features: [
      "Catalogue large",
      "Usage familial",
      "Xtream / M3U",
      "Multi-lecteurs",
      "SAV chez IPTV IBO PLAYER",
    ],
    installationSteps: [
      "Vérifier dispo Eagle du jour.",
      "Choisir durée + connexions.",
      "Recevoir codes.",
      "Ajouter au player.",
      "Vérifier catégories principales.",
    ],
    pricingSummary:
      "Tarifs Eagle selon durée. Dispo variable — demandez en magasin.",
    faq: [
      {
        question: "C’est Eagle ou Eagel ?",
        answer:
          "Les deux orthographes circulent. Chez nous la fiche s’appelle Eagle ; on retrouve le produit en boutique.",
      },
      {
        question: "Eagle pour débuter ?",
        answer:
          "Oui. Polyvalent et simple à configurer avec notre aide.",
      },
      {
        question: "Compatible Fire Stick ?",
        answer:
          "Oui via IBO Player / Smarters / etc. Le serveur n’est pas lié à une seule app.",
      },
    ],
    rating: 4.4,
  }),
  buildItem({
    name: "Magnum",
    logo: "/logos/magnum.png",
    category: "abonnement",
    shortDescription:
      "Magnum IPTV abonnement : avis qualité-prix, live & VOD, activation chez IPTV IBO PLAYER.",
    fullReview: `Magnum IPTV apparaît dans les recherches « Magnum IPTV », « abonnement Magnum » et « Magnum Xtream Codes ». Positionnement polyvalent : live TV + VOD sans exploser le budget.

Idéal pour un premier abonnement sérieux après une période d’essai / bas de gamme décevante. Nous configurons Magnum sur le player de votre choix et validons les bouquets utiles (FR, sport, cinéma).

Chez IPTV IBO PLAYER, Magnum se vend souvent en 3 ou 6 mois pour lisser le prix. Le renouvellement se fait au magasin ou à distance.

Si vous voulez du 4K agressif, Magnum n’est pas forcément la première reco — on oriente alors vers Dream 4K / Ott4k / Strong 8K.`,
    features: [
      "Bon rapport qualité-prix",
      "Live polyvalent",
      "VOD selon offre",
      "Activation rapide",
      "Support IPTV IBO PLAYER",
    ],
    installationSteps: [
      "Devis Magnum (durée / écrans).",
      "Paiement & remise codes.",
      "Config player.",
      "Vérification live + VOD.",
      "Rappel date de fin.",
    ],
    pricingSummary:
      "Abonnement Magnum 1–12 mois. Pack player possible.",
    faq: [
      {
        question: "Magnum pour 2 TV ?",
        answer:
          "Prenez l’offre multi-connexions. Sinon la 2ᵉ TV coupe la 1ʳᵉ.",
      },
      {
        question: "Magnum vs Crystal ?",
        answer:
          "Deux polyvalents. La dispo / le feeling catalogue du moment tranche — on compare au comptoir.",
      },
      {
        question: "Paiement en ligne ?",
        answer:
          "Contactez contact@ibo-player.ma pour les modalités. Boutique physique aussi.",
      },
    ],
    rating: 4.4,
  }),
  buildItem({
    name: "Golden",
    logo: "/logos/golden.svg",
    category: "abonnement",
    shortDescription:
      "Golden IPTV premium : avis abonnement international, sport, config.",
    fullReview: `Golden se positionne premium dans les recherches « Golden IPTV », « Golden abonnement » et « IPTV Golden premium ». L’idée : qualité perçue + bouquets internationaux pour une audience exigeante.

Les clients sport / diaspora apprécient souvent la richesse internationale. Nous branchons Golden sur TiviMate ou IBO et organisons les favoris (pays, ligues, cinéma).

IPTV IBO PLAYER vérifie la dispo Golden, active le compte, et reste joignable pour le SAV — critère #1 face aux sites anonymes.

Golden n’est pas le moins cher : c’est assumé. Si le budget est serré, Magnum / Sansat / Crystal peuvent mieux coller.`,
    features: [
      "Positionnement premium",
      "International & sport",
      "HD/FHD selon chaînes",
      "Config magasin",
      "SAV local",
    ],
    installationSteps: [
      "Brief besoins (pays / sport).",
      "Offre Golden adaptée.",
      "Codes + player.",
      "Favoris personnalisés.",
      "Contrôle qualité 24–48h après (retour magasin si souci).",
    ],
    pricingSummary:
      "Tarifs premium Golden selon durée. Devis personnalisé chez IPTV IBO PLAYER.",
    faq: [
      {
        question: "Golden vaut le premium ?",
        answer:
          "Si vous regardez beaucoup l’international / le sport, souvent oui. Sinon un polyvalent suffit.",
      },
      {
        question: "Compatible Smarters Pro ?",
        answer:
          "Oui via Xtream/M3U.",
      },
      {
        question: "Essai possible ?",
        answer:
          "Selon périodes. Demandez en magasin la politique du moment.",
      },
    ],
    rating: 4.5,
  }),
  buildItem({
    name: "Pure",
    logo: "/logos/pure.webp",
    category: "serveur",
    shortDescription:
      "Pure IPTV serveur : avis fluidité, abonnement quotidien, IBO & TiviMate.",
    fullReview: `Pure mise sur la fluidité (« Pure IPTV », « serveur Pure », « Pure Xtream »). Moins de marketing tape-à-l’œil, plus d’usage quotidien net : zapper, regarder, renouveler.

Excellent duo avec IBO Player ou TiviMate. Les clients qui ont souffert de freezes sur des panels saturés regardent Pure avec intérêt.

Chez IPTV IBO PLAYER, nous installons Pure, vérifions le prime time, et documentons les identifiants. Renouvellement simple pour ne pas couper le salon le dimanche.

Pure n’est pas forcément le plus « 8K showcase » : c’est un serveur de tous les jours. Pour l’UHD showroom, Strong 8K / Dream 4K.`,
    features: [
      "Fluidité / daily use",
      "Xtream / M3U",
      "Compatible lecteurs majeurs",
      "Renouvellement facile",
      "SAV boutique",
    ],
    installationSteps: [
      "Souscrire Pure.",
      "Recevoir panel.",
      "Ajouter au player.",
      "Vérification soirée type (JT + série).",
      "Planifier renouvellement.",
    ],
    pricingSummary:
      "Abonnement Pure selon durée et connexions. Pack player dispo.",
    faq: [
      {
        question: "Pure pour sport ?",
        answer:
          "Oui selon bouquet. Pour ultra sport critique, comparez Lion / Strong 8K.",
      },
      {
        question: "Pure vs Trex ?",
        answer:
          "Trex est très répandu ; Pure mise sur la sensation de fluidité. Essai / conseil en magasin.",
      },
      {
        question: "Multi-TV ?",
        answer:
          "Oui avec offre multi-connexions.",
      },
    ],
    rating: 4.4,
  }),
  buildItem({
    name: "Sansat",
    logo: "/logos/sansat.webp",
    category: "abonnement",
    shortDescription:
      "Sansat IPTV : abonnement débutant, avis qualité-prix, installation.",
    fullReview: `Sansat est populaire sur les requêtes « Sansat IPTV », « abonnement Sansat » et « Sansat code ». Souvent choisi en première souscription grâce au rapport qualité-prix.

Nous l’installons pour les débutants : explication télécommande, catégories, redémarrage player. Objectif : autonomie en 10 minutes.

Sansat + IBO Player ou Smarters Pro = combo fréquent en IPTV IBO PLAYER. Pour monter en gamme plus tard, on migre vers Crystal, Trex ou du 4K sans tout recommencer depuis zéro (selon conditions).

Parfait si vous vérifiez l’IPTV avant d’investir dans une offre premium longue durée.`,
    features: [
      "Idéal débutants",
      "Rapport qualité-prix",
      "Live MA / arabes / FR",
      "Config simple",
      "Aide magasin",
    ],
    installationSteps: [
      "Offre Sansat découverte / durée courte possible.",
      "Codes remis.",
      "Player installé.",
      "Mini formation utilisateur.",
      "Coordonnées SAV.",
    ],
    pricingSummary:
      "Sansat entrée / milieu de gamme. Durées flexibles.",
    faq: [
      {
        question: "Sansat fiable ?",
        answer:
          "Comme tout panel : ça dépend du moment et de votre réseau. Notre SAV local fait la différence.",
      },
      {
        question: "Passer à Trex plus tard ?",
        answer:
          "Souvent oui. On conserve le player et on change les codes.",
      },
      {
        question: "Sansat 4K ?",
        answer:
          "Pas le positionnement principal. Voyez Dream 4K / Ott4k pour l’UHD.",
      },
    ],
    rating: 4.3,
  }),
  buildItem({
    name: "Dino",
    logo: "/logos/dino.jpg",
    category: "serveur",
    shortDescription:
      "Dino IPTV : avis serveur Android box, live & VOD, démo IPTV IBO PLAYER.",
    fullReview: `Dino IPTV apparaît dans « Dino IPTV », « serveur Dino » et « Dino Xtream ». Serveur dynamique, bien adapté aux box Android et sticks TV que nous activons (IBO, BOB, Smarters).

Selon périodes, une démo courte peut être proposée en magasin — demandez au comptoir. L’objectif : juger le zapping avant d’acheter 6 ou 12 mois.

IPTV IBO PLAYER gère l’activation panel + player. Dino entre dans les alternatives quand un serveur star est saturé ou en rupture.

Toujours clarifier connexions simultanées et contenu VOD inclus pour éviter les malentendus.`,
    features: [
      "Compatible box / sticks",
      "Live & VOD selon offre",
      "Démo possible (selon période)",
      "Support Maroc",
      "Alternative panels stars",
    ],
    installationSteps: [
      "Demander dispo / démo Dino.",
      "Choisir durée.",
      "Config player.",
      "Vérification catégories.",
      "Validation client.",
    ],
    pricingSummary:
      "Tarifs Dino sur demande. Démo non garantie en continu.",
    faq: [
      {
        question: "Dino vs Python ?",
        answer:
          "Deux serveurs techniques / alternatifs. Dispo et feeling catalogue tranchent.",
      },
      {
        question: "Marche avec BOB Player ?",
        answer:
          "Oui si Xtream/M3U fourni.",
      },
      {
        question: "Abonnement 12 mois ?",
        answer:
          "Souvent possible. On calcule le prix au mois pour comparer.",
      },
    ],
    rating: 4.3,
  }),
  buildItem({
    name: "Smart x2",
    logo: "/logos/smart-x2.jpg",
    category: "abonnement",
    shortDescription:
      "Smart x2 IPTV : abonnement multi-écrans, avis 2 TV, connexions simultanées.",
    fullReview: `Smart x2 est pensé multi-écrans (« Smart x2 IPTV », « abonnement IPTV 2 connexions », « Smart x2 multi TV »). Si vous avez salon + chambre, c’est souvent le bon réflexe.

Le piège classique : acheter un serveur 1 connexion et s’étonner que la 2ᵉ TV coupe. Smart x2 met le multi au centre de l’offre. Nous alignons aussi le player (IBO Player Pro, BOB PRO…) sur ce quota.

Chez IPTV IBO PLAYER : deux appareils activés, vérification simultané (JT + dessin animé, ou match + série). Si ça tient en magasin, ça tient chez vous (réseau permettant).

Pour 3–4 écrans, demandez une offre supérieure plutôt que de forcer Smart x2 hors spec.`,
    features: [
      "Focus multi-écrans",
      "Connexions simultanées",
      "Live familial",
      "Conseil offre claire",
      "Vérification 2 devices en magasin",
    ],
    installationSteps: [
      "Compter les TV réellement utilisées en parallèle.",
      "Choisir Smart x2 adapté.",
      "Activer players.",
      "Vérification simultané.",
      "Rappel règles anti-coupures.",
    ],
    pricingSummary:
      "Smart x2 tarifé selon connexions + durée. Pack multi-TV disponible.",
    faq: [
      {
        question: "2 TV mais jamais en même temps : Smart x2 utile ?",
        answer:
          "Une offre 1 connexion peut suffire. Smart x2 devient utile dès que le parallèle arrive.",
      },
      {
        question: "Téléphone + TV = 2 connexions ?",
        answer:
          "Oui si les deux streamment ensemble. On dimensionne en conséquence.",
      },
      {
        question: "Compatible TiviMate ?",
        answer:
          "Oui. Chaque device a son playlist / compte selon setup.",
      },
    ],
    rating: 4.4,
  }),
  buildItem({
    name: "Mi TV",
    slug: "mi-tv",
    logo: "/logos/mi-tv.jpg",
    category: "abonnement",
    shortDescription:
      "Mi TV IPTV : abonnement compatible Mi Box / Android TV, avis installation chez IPTV IBO PLAYER.",
    fullReview: `Mi TV IPTV cible les propriétaires de Mi Box / Android TV (« Mi TV IPTV », « abonnement Mi Box », « Mi TV Xtream »). L’écosystème Xiaomi est répandu : autant partir sur un panel bien configuré.

Nous installons le player (TiviMate est excellent sur Mi Box) + codes Mi TV, puis formons sur la télécommande Bluetooth Xiaomi (parfois capricieuse pour le sideload).

IPTV IBO PLAYER paramètre favoris et EPG. Si votre Mi Box chauffe / rame, on allège (un seul player, cache, Ethernet).

Mi TV n’est pas réservé aux boxes Xiaomi : le nom commercial peut cohabiter avec Fire Stick. On vérifie la compatibilité réelle en boutique.`,
    features: [
      "Optimisé Mi Box / Android TV",
      "Live",
      "Paramétrage inclus",
      "Conseil TiviMate",
      "SAV chez IPTV IBO PLAYER",
    ],
    installationSteps: [
      "Diagnostic Mi Box (stockage / Wi-Fi).",
      "Install player recommandé.",
      "Ajout abonnement Mi TV.",
      "EPG + favoris.",
      "Astuces télécommande / sideload.",
    ],
    pricingSummary:
      "Abonnement Mi TV selon durée. Pack Mi Box + player sur devis.",
    faq: [
      {
        question: "Mi TV = application officielle Xiaomi ?",
        answer:
          "Non : ici « Mi TV » désigne notre offre / serveur IPTV orienté écosystème Mi Box.",
      },
      {
        question: "Marche sur Fire Stick ?",
        answer:
          "Souvent oui via IBO/Smarters. On vérifie en magasin.",
      },
      {
        question: "Mi Box 4K S supportée ?",
        answer:
          "Oui dans la majorité des cas. Apportez-la.",
      },
    ],
    rating: 4.3,
  }),
  buildItem({
    name: "Lion",
    logo: "/logos/lion.jpg",
    category: "serveur",
    shortDescription:
      "Lion IPTV sport : avis serveur matchs en direct, HD, anti-buffer.",
    fullReview: `Lion est plébiscité pour le sport (« Lion IPTV », « serveur IPTV sport », « Lion Xtream match »). Les soirs de grands matchs, la différence entre un panel fragile et un panel costaud se voit tout de suite.

Nous recommandons Lion avec une fibre stable, idéalement Ethernet, et un player fiable (TiviMate / IBO). Réglages buffer + favoris sport préparés en magasin.

IPTV IBO PLAYER prévient : même Lion peut souffrir si 4 appareils saturent une box Wi-Fi poussive. Le serveur n’est qu’une partie de la chaîne.

Pour l’UHD sport, croisez avec Strong 8K / Dream 4K selon budget.`,
    features: [
      "Focus sport / live events",
      "HD",
      "Astuces anti-buffer",
      "Favoris ligues",
      "SAV match day",
    ],
    installationSteps: [
      "Lister compétitions suivies.",
      "Offre Lion + connexions.",
      "Player + favoris sport.",
      "Vérification match / flux secondaire.",
      "Plan B (autre catégorie / backup) expliqué.",
    ],
    pricingSummary:
      "Lion selon durée. Pack « sport + player » disponible.",
    faq: [
      {
        question: "Lion garantit 0 freeze ?",
        answer:
          "Aucun serveur ne peut le garantir à 100 %. On maximise stabilité (réseau + panel + player).",
      },
      {
        question: "Lion en 4K ?",
        answer:
          "Selon chaînes. Demandez les flux UHD dispo au moment de l’achat.",
      },
      {
        question: "Deux matchs en parallèle ?",
        answer:
          "Il faut multi-connexions. Smart x2 / offres multi + Lion.",
      },
    ],
    rating: 4.5,
  }),
  buildItem({
    name: "Sup",
    logo: "/logos/sup.webp",
    category: "abonnement",
    shortDescription:
      "Sup IPTV (Sup TV) : abonnement simple, renouvellement rapide — IPTV IBO PLAYER.",
    fullReview: `Sup (logo / usage « Sup TV ») est une offre concise pour démarrer ou renouveler vite (« Sup IPTV », « Sup TV abonnement »). Moins de discours, plus d’activation express.

Cas d’usage : client pressé, une TV, besoin de live immédiatement. Codes + player en une visite chez IPTV IBO PLAYER.

Ce n’est pas forcément le catalogue le plus premium : c’est l’efficacité. Pour monter en gamme ensuite, on bascule panel sans forcément changer de Fire Stick.

Idéal aussi en dépannage temporaire quand un autre abonnement expire le week-end.`,
    features: [
      "Activation simple",
      "Renouvellement rapide",
      "Live",
      "Passage boutique express",
      "Prix d’entrée accessible",
    ],
    installationSteps: [
      "Demande Sup / durée courte possible.",
      "Paiement.",
      "Codes + config.",
      "Vérification 2–3 chaînes.",
      "Ticket renouvellement.",
    ],
    pricingSummary:
      "Sup / Sup TV : tarifs d’entrée. Idéal 1 mois ou dépannage.",
    faq: [
      {
        question: "Sup = Sup TV ?",
        answer:
          "Oui, même offre côté boutique ; le logo porte parfois « Sup TV ».",
      },
      {
        question: "Assez bien pour la famille ?",
        answer:
          "Pour un usage simple oui. Famille multi-TV : regardez Smart x2 / Crystal.",
      },
      {
        question: "Renouveler en ligne ?",
        answer:
          "Mail contact@ibo-player.ma ou magasin.",
      },
    ],
    rating: 4.2,
  }),
  buildItem({
    name: "Maxott",
    logo: "/logos/maxott.png",
    category: "abonnement",
    shortDescription:
      "Maxott IPTV / OTT : avis abonnement VOD + live, formules flexibles.",
    fullReview: `Maxott brille sur « Maxott IPTV », « Maxott OTT » et « abonnement Maxott VOD ». L’offre combine logique OTT (films/séries) et live selon formule.

Parfait pour les gros consommateurs de VOD qui veulent aussi zapper les chaînes info / sport. Nous aidons à ranger catégories et favoris pour ne pas se perdre dans le catalogue.

Players conseillés : Smarters Pro, TiviMate, IBO. IPTV IBO PLAYER aligne la durée Maxott sur vos habitudes (3 mois pour démarrer, 12 mois pour optimiser le prix).

Si vous ne regardez que le live sport, Lion peut être plus pertinent. Maxott tire son épingle sur le mix OTT.`,
    features: [
      "OTT + live",
      "VOD riche selon offre",
      "Formules flexibles",
      "Conseil boutique",
      "Organisation favoris",
    ],
    installationSteps: [
      "Brief : plutôt films ou live ?",
      "Choix formule Maxott.",
      "Config player.",
      "Tour VOD + live.",
      "Astuces recherche titres.",
    ],
    pricingSummary:
      "Maxott selon durée. Pack OTT + player 4K possible.",
    faq: [
      {
        question: "Maxott vs Megaott ?",
        answer:
          "Deux grosses offres OTT. Catalogue et dispo du moment tranchent — comparatif magasin.",
      },
      {
        question: "Maxott sur téléphone ?",
        answer:
          "Oui selon player mobile. Attention au quota connexions.",
      },
      {
        question: "Qualité 4K VOD ?",
        answer:
          "Variable par titre. Fibre recommandée.",
      },
    ],
    rating: 4.5,
  }),
  buildItem({
    name: "4Matic 4K",
    logo: "/logos/4matic-4k.jpeg",
    category: "abonnement",
    shortDescription:
      "4Matic 4K IPTV : abonnement UHD fibre, avis cinéma & sport.",
    fullReview: `4Matic 4K vise l’UHD (« 4Matic 4K IPTV », « abonnement 4Matic »). Cinéma et sport en haute définition quand le réseau suit.

Nous vérifions sur place si possible, puis livrons identifiants + player (KING 4K, TiviMate…). Ethernet fortement conseillé.

4Matic 4K s’adresse aux clients déjà équipés TV 4K / box récente. Sur une vieille stick HD, l’intérêt chute.

Pack fréquent : 4Matic 4K + KING 4K Player + câble Ethernet. IPTV IBO PLAYER le monte en une visite.`,
    features: [
      "Abonnement 4K",
      "Fibre / Ethernet recommandé",
      "Cinéma & sport",
      "Vérification magasin",
      "Players UHD",
    ],
    installationSteps: [
      "Check TV 4K + débit.",
      "Souscription 4Matic 4K.",
      "Player UHD.",
      "Vérification scène 4K.",
      "Conseils Wi-Fi si pas d’Ethernet.",
    ],
    pricingSummary:
      "4Matic 4K tarif UHD selon durée. Pack matériel conseil en boutique.",
    faq: [
      {
        question: "4Matic vs Delta 4K ?",
        answer:
          "Deux UHD. Feeling flux / prix du moment. On compare.",
      },
      {
        question: "Obligatoire d’avoir KING 4K Player ?",
        answer:
          "Non. TiviMate / IBO marchent aussi ; KING est une option orientée UHD.",
      },
      {
        question: "Buffer en 4K : normal ?",
        answer:
          "Non si le réseau est bon. Diagnostic SAV chez IPTV IBO PLAYER.",
      },
    ],
    rating: 4.6,
  }),
  buildItem({
    name: "Ott4k",
    logo: "/logos/ott4k.jpg",
    category: "abonnement",
    shortDescription:
      "Ott4k IPTV : abonnement OTT 4K films & séries, avis installation Maroc.",
    fullReview: `Ott4k combine OTT et 4K (« Ott4k IPTV », « OTT 4K abonnement », « Ott4k VOD »). Idéal cinéphiles / séries qui veulent une image soignée.

Excellent avec KING 4K Player ou TiviMate Premium. IPTV IBO PLAYER configure recherche VOD, favoris et éventuellement un second device.

Ott4k n’est pas qu’une « liste de chaînes » : l’expérience VOD compte. On vérifie que les catégories films se chargent correctement.

Pour un mix live sport prioritaire, croisez avec Lion. Pour du full UHD showroom, Strong 8K reste un concurrent direct.`,
    features: [
      "OTT 4K",
      "Films & séries",
      "Xtream",
      "Player UHD recommandé",
      "SAV VOD",
    ],
    installationSteps: [
      "Profil usage VOD.",
      "Abonnement Ott4k.",
      "Player + vérification titres 4K.",
      "Favoris séries.",
      "Tips recherche.",
    ],
    pricingSummary:
      "Ott4k selon durée. Pack avec player 4K sur devis.",
    faq: [
      {
        question: "Ott4k vs Premium OTT ?",
        answer:
          "Deux logiques premium VOD. On regarde le catalogue actuel ensemble.",
      },
      {
        question: "Sous-titres FR / AR ?",
        answer:
          "Dépend des fichiers / flux. Variable par titre.",
      },
      {
        question: "Chromecast ?",
        answer:
          "Selon player. Beaucoup préfèrent stick Android dédié.",
      },
    ],
    rating: 4.5,
  }),
  buildItem({
    name: "Delta 4K",
    slug: "delta-4k",
    logo: "/logos/delta-4k.jpg",
    category: "abonnement",
    shortDescription:
      "Delta 4K IPTV (Dlta4k) : avis serveur UHD, config anti-freeze, IPTV IBO PLAYER.",
    fullReview: `Delta 4K — aussi cherché « Dlta4k » / « Delta 4K IPTV » — s’adresse aux utilisateurs exigeants sur l’image. UHD, config box/TV validée, freezes limités grâce à un setup propre.

Nous contrôlons compatibilité HDMI, box, et parfois DNS. Le diable est dans les détails : un player mal réglé gâche un bon panel Delta 4K.

IPTV IBO PLAYER active Delta 4K, vérifie le flux, et reste dispo si une catégorie 4K manque (bascule HD le temps du fix).

Client type : fibre, TV OLED/QLED, stick 4K Max, veut du « wow » cinéma.`,
    features: [
      "Qualité 4K exigente",
      "Config optimisée",
      "Live UHD",
      "Support technique magasin",
      "Alias Dlta4k connu",
    ],
    installationSteps: [
      "Audit setup UHD.",
      "Souscription Delta 4K.",
      "Réglages player (buffer, héo).",
      "Vérifications multi-chaînes 4K.",
      "Consignes réseau.",
    ],
    pricingSummary:
      "Delta 4K premium UHD. Devis selon durée / connexions.",
    faq: [
      {
        question: "Dlta4k ou Delta 4K ?",
        answer:
          "Même offre ; « Dlta » est une abréviation fréquente. Fiche officielle : Delta 4K.",
      },
      {
        question: "Delta 4K vs 4Matic 4K ?",
        answer:
          "Comparatif flux / prix en boutique selon dispo.",
      },
      {
        question: "Marche en Wi-Fi ?",
        answer:
          "Possible en 5 GHz fort. Ethernet reste roi.",
      },
    ],
    rating: 4.5,
  }),
  buildItem({
    name: "Trex",
    logo: "/logos/trex.webp",
    category: "serveur",
    seo: {
      title: "Trex IPTV : avis serveur, abonnement & renouvellement Maroc",
      description:
        "Trex IPTV : avis serveur populaire, Xtream Codes, renouvellement. Activation et SAV IPTV IBO PLAYER — partout au Maroc.",
      keywords: [
        "Trex IPTV",
        "abonnement Trex",
        "Trex Xtream Codes",
        "renouvellement Trex",
        "serveur Trex Maroc",
      ],
    },
    shortDescription:
      "Trex IPTV : avis serveur populaire, abonnement, renouvellement & SAV.",
    fullReview: `Trex est l’un des serveurs les plus recherchés (« Trex IPTV », « Trex Xtream Codes », « renouvellement Trex »). Catalogue large, habitude utilisateur forte, renouvellements fréquents en boutique.

IPTV IBO PLAYER vend et renouvelle Trex, dépannage login inclus. Codes remis clairement (URL, user, pass) + config player.

Trex plaît parce que « tout le monde connaît » — attention aux vendeurs anonymes. Un panneau Trex + SAV chez IPTV IBO PLAYER, c’est le combo rassurant.

Que vous soyez sur IBO, Smarters ou TiviMate, Trex se branche en quelques minutes.`,
    features: [
      "Très demandé",
      "Catalogue large",
      "Renouvellement facilité",
      "Dépannage Maroc",
      "Multi-players",
    ],
    installationSteps: [
      "Offre Trex durée / connexions.",
      "Remise panel.",
      "Ajout player.",
      "Vérification bouquets.",
      "Note échéance renouvellement.",
    ],
    pricingSummary:
      "Trex 1–12 mois. Renouvellement magasin ou mail.",
    faq: [
      {
        question: "Mon Trex a expiré ce week-end : que faire ?",
        answer:
          "Passez au magasin ou e-mail rapide. On renouvelle dès que possible.",
      },
      {
        question: "Trex officiel ?",
        answer:
          "Nous fournissons l’accès panel dans le cadre de notre activité boutique. Méfiez-vous des liens douteux.",
      },
      {
        question: "Trex 4K ?",
        answer:
          "Certaines chaînes / VOD oui selon offre. Pour full UHD, voyez aussi Strong 8K / Dream 4K.",
      },
      {
        question: "Où trouver Trex ?",
        answer:
          "Chez IPTV IBO PLAYER.",
      },
    ],
    rating: 4.6,
  }),
  buildItem({
    name: "Strong 8K",
    slug: "strong-8k",
    logo: "/logos/strong-8k.webp",
    category: "abonnement",
    seo: {
      title: "Strong 8K IPTV : avis abonnement UHD, fibre & Ethernet Maroc",
      description:
        "Strong 8K : abonnement IPTV UHD exigeant. Prérequis fibre/Ethernet, avis boutique IPTV IBO PLAYER — activation partout au Maroc.",
      keywords: [
        "Strong 8K IPTV",
        "abonnement Strong 8K",
        "IPTV 8K Maroc",
        "Strong IPTV UHD",
      ],
    },
    shortDescription:
      "Strong 8K IPTV : avis abonnement 8K/UHD, sport & cinéma, fibre.",
    fullReview: `Strong 8K (ex Strong 4K dans certaines recherches) pousse la qualité d’image (« Strong 8K IPTV », « Strong IPTV 8K », « abonnement Strong 8K »). Sport et cinéma en ultra haute définition pour setups musclés.

Exigences : TV compatible, box récente, fibre, Ethernet de préférence. Sans ça, Strong 8K se comporte comme un bon HD… avec plus de risque de buffer.

IPTV IBO PLAYER monte le pack Strong 8K + player (KING 4K / TiviMate) et valide des scènes UHD. On refuse parfois de vendre du 8K « pour la plaque » si le réseau est insuffisant — mieux vaut un client satisfait.

Renouvellements et multi-connexions : à clarifier dès l’achat pour les soirs de match.`,
    features: [
      "8K / UHD",
      "Sport & cinéma",
      "Box récentes",
      "Conseil fibre",
      "Pack player UHD",
    ],
    installationSteps: [
      "Audit éligibilité UHD.",
      "Souscription Strong 8K.",
      "Player + Ethernet.",
      "Vérifications 8K/4K/HD.",
      "Réglages anti-buffer.",
    ],
    pricingSummary:
      "Strong 8K premium selon durée. Devis transparent en boutique.",
    faq: [
      {
        question: "Strong 4K ou Strong 8K ?",
        answer:
          "Notre offre actuelle s’appelle Strong 8K. Les anciennes recherches « Strong 4K » pointent vers ce produit.",
      },
      {
        question: "Obligé d’avoir une TV 8K ?",
        answer:
          "Non. Une bonne TV 4K profite déjà largement. Le label 8K dépend aussi des flux réellement fournis.",
      },
      {
        question: "Strong 8K vs Dream 4K ?",
        answer:
          "Strong 8K = poussée UHD max ; Dream 4K = porte d’entrée 4K. Budget et fibre tranchent.",
      },
    ],
    rating: 4.6,
  }),
  buildItem({
    name: "Zen4k",
    logo: "/logos/zen4k.webp",
    category: "abonnement",
    shortDescription:
      "Zen4k IPTV : abonnement 4K seul, avis UHD quotidien, activation chez IPTV IBO PLAYER.",
    fullReview: `Zen4k est désormais une fiche dédiée (séparé de Neo 4k). Recherches : « Zen4k IPTV », « Zen 4k abonnement », « Zen4k Xtream ».

Positionnement : UHD pour le quotidien, image soignée sans forcément viser le marketing 8K. Config player + fibre chez IPTV IBO PLAYER.

Comparez Zen4k et Neo 4k en magasin : catalogues et tarifs évoluent. On vous dit lequel est le plus pertinent ce mois-ci.

Idéal foyer fibre avec TV 4K qui regarde films + un peu de sport.`,
    features: [
      "Abonnement 4K dédié",
      "Live & VOD selon offre",
      "Conseil personnalisé",
      "Activation boutique",
      "Fiche séparée de Neo 4k",
    ],
    installationSteps: [
      "Choisir Zen4k (pas le pack combo).",
      "Codes.",
      "Player UHD/HD.",
      "Vérifications image.",
      "Échéance notée.",
    ],
    pricingSummary:
      "Zen4k selon durée. Comparatif Neo 4k offert en boutique.",
    faq: [
      {
        question: "Zen4k et Neo 4k ensemble ?",
        answer:
          "Ce sont deux abonnements distincts. Inutile de prendre les deux sauf besoin spécifique.",
      },
      {
        question: "Logo Zen4k manquant ?",
        answer:
          "Dès que le fichier logo arrive dans LOGO DES SERVEURS, on l’ajoute. Contenu et vente déjà OK.",
      },
      {
        question: "Compatible IBO Player ?",
        answer:
          "Oui via Xtream/M3U.",
      },
    ],
    rating: 4.5,
  }),
  buildItem({
    name: "Neo 4k",
    slug: "neo-4k",
    logo: "/logos/neo-4k.jpg",
    category: "abonnement",
    shortDescription:
      "Neo 4k IPTV : abonnement 4K séparé, sport & cinéma HD/UHD.",
    fullReview: `Neo 4k a sa propre page SEO (« Neo 4k IPTV », « Neo4k abonnement », « Neo 4k vs Zen4k »). Offre 4K distincte pour sport et cinéma.

IPTV IBO PLAYER compare Neo 4k à Zen4k / Dream 4K / Delta 4K selon votre budget. Activation player + vérification.

Utile si vous avez vu « Zen4k & Neo4k » collés ailleurs : ici chaque produit a son URL, son texte, ses FAQ — meilleur pour Google et pour vous.

Apportez votre stick : on montre la différence réelle sur votre télé.`,
    features: [
      "4K dédié",
      "Sport & cinéma",
      "Xtream / M3U",
      "SAV chez IPTV IBO PLAYER",
      "Comparatif Zen4k inclus",
    ],
    installationSteps: [
      "Sélection Neo 4k.",
      "Identifiants.",
      "Config player.",
      "Vérification sport + film.",
      "Conseils réseau.",
    ],
    pricingSummary:
      "Neo 4k sur devis. Promo éventuelle vs Zen4k selon période.",
    faq: [
      {
        question: "Neo 4k ou Neo4k ?",
        answer:
          "Même produit. Slug site : /servers/neo-4k.",
      },
      {
        question: "Mieux que Strong 8K ?",
        answer:
          "Pas forcément : Strong 8K est plus « extrême UHD ». Neo 4k peut suffire à moindre coût.",
      },
      {
        question: "Multi-TV ?",
        answer:
          "Selon offre connexions. Demandez Smart x2 logic si besoin.",
      },
    ],
    rating: 4.5,
  }),
  buildItem({
    name: "Plume4k",
    logo: "/logos/plume4k.webp",
    category: "abonnement",
    shortDescription:
      "Plume4k IPTV : abonnement 4K accessible, config rapide IBO/TiviMate.",
    fullReview: `Plume4k est l’entrée 4K accessible (« Plume4k IPTV », « Plume 4k abonnement »). Moins intimidant que les offres ultra premium, tout en visant une image au-dessus du HD classique.

Installation guidée sur IBO, TiviMate ou Smarters chez IPTV IBO PLAYER. Parfait pour « essayer le 4K » avant Strong 8K.

Si le 4K ne passe pas chez vous, on downgrade / oriente sans pression. L’honnêteté réseau fait partie du service IPTV IBO PLAYER.

Bon rapport pour TV 4K récentes en appartement fibre.`,
    features: [
      "4K accessible",
      "Config rapide",
      "Multi-players",
      "Chez IPTV IBO PLAYER",
      "Porte d’entrée UHD",
    ],
    installationSteps: [
      "Check fibre basique.",
      "Plume4k durée courte possible.",
      "Player.",
      "Vérification 4K vs HD.",
      "Décision upgrade éventuel.",
    ],
    pricingSummary:
      "Plume4k prix d’entrée UHD. Upgrade Strong/Dream possible plus tard.",
    faq: [
      {
        question: "Plume4k suffisant pour le sport ?",
        answer:
          "Souvent en HD/FHD très bon ; 4K selon flux. Lion reste une option sport dedicace.",
      },
      {
        question: "Logo à venir ?",
        answer:
          "Oui dès dépôt dans LOGO DES SERVEURS.",
      },
      {
        question: "Compatible Fire Stick 4K ?",
        answer:
          "Oui.",
      },
    ],
    rating: 4.4,
  }),
  buildItem({
    name: "Megaott",
    logo: "/logos/megaott.jpg",
    category: "abonnement",
    shortDescription:
      "Megaott IPTV : mega catalogue OTT + live, avis gros consommateurs.",
    fullReview: `Megaott cible les recherches « Megaott IPTV », « Mega OTT abonnement » et « Megaott VOD ». Gros catalogue pour ceux qui enchaînent séries, films et chaînes.

Sans organisation, on se perd. Notre valeur : favoris, catégories, parfois deux profiles (parents / kids) selon player.

IPTV IBO PLAYER configure Megaott et montre comment chercher un titre rapidement. Comparez avec Maxott / Premium OTT selon le moment.

Connexion fibre conseillée si vous streamez en haute qualité souvent.`,
    features: [
      "Gros catalogue",
      "OTT + live",
      "Organisation favoris",
      "Usage intensif",
      "SAV boutique",
    ],
    installationSteps: [
      "Profil « binge » ou familial.",
      "Offre Megaott.",
      "Player + rangement favoris.",
      "Demo recherche VOD.",
      "Quota connexions validé.",
    ],
    pricingSummary:
      "Megaott selon durée. Pack familial multi-TV sur devis.",
    faq: [
      {
        question: "Megaott vs Maxott ?",
        answer:
          "Deux grosses offres. On ouvre les catégories ensemble pour choisir.",
      },
      {
        question: "Trop de contenu ?",
        answer:
          "D’où les favoris. On les crée avec vous.",
      },
      {
        question: "Disponibilité ?",
        answer:
          "Variable. Magasin = info à jour.",
      },
    ],
    rating: 4.5,
  }),
  buildItem({
    name: "Python",
    logo: "/logos/python.png",
    category: "serveur",
    shortDescription:
      "Python IPTV : serveur Xtream polyvalent, multi-players, avis technique.",
    fullReview: `Python IPTV (« Python IPTV », « serveur Python Xtream ») est un panel technique polyvalent. Codes portables : vous changez de player sans tout racheter.

Cas typique : client passe de Smarters à TiviMate → mêmes identifiants Python. IPTV IBO PLAYER adore cette flexibilité pour le SAV.

Pas le plus « marketing » des noms, mais solide pour un usage quotidien. Dispo selon partenariats.

Idéal utilisateurs qui comparent plusieurs apps (IBO, BOB, Nino…) avant de se fixer.`,
    features: [
      "Panel Xtream",
      "Codes portables multi-players",
      "Polyvalent",
      "SAV flexible",
      "Daily use",
    ],
    installationSteps: [
      "Souscrire Python.",
      "Noter URL/user/pass.",
      "Vérifier sur player A.",
      "Option : cloner sur player B.",
      "Choisir player final.",
    ],
    pricingSummary:
      "Python sur devis. Avantage : liberté de player.",
    faq: [
      {
        question: "Python IPTV légal / officiel ?",
        answer:
          "Nous commercialisons des accès dans le cadre de notre activité. Renseignez-vous sur l’usage conforme chez vous.",
      },
      {
        question: "Python vs Trex ?",
        answer:
          "Trex = star très connue ; Python = flex technique. Goûts et dispo.",
      },
      {
        question: "Bon pour débutant ?",
        answer:
          "Oui avec notre config. Seul, le jargon Xtream peut intimider.",
      },
    ],
    rating: 4.3,
  }),
  buildItem({
    name: "Crazy",
    logo: "/logos/crazy.jpg",
    category: "serveur",
    shortDescription:
      "Crazy IPTV : avis serveur, dispo variable, live & VOD — demandez chez IPTV IBO PLAYER.",
    fullReview: `Crazy IPTV (« Crazy IPTV abonnement », « serveur Crazy ») porte un nom fun pour un usage sérieux : live et VOD selon offre et stock.

La dispo varie. IPTV IBO PLAYER indique clairement si Crazy est fourni aujourd’hui, plutôt que de promettre un panel absent.

Quand disponible, config classique Xtream + player. Alternative si Trex/Crystal sont en tension.

Demandez toujours prix, durée, connexions — Crazy ou pas, les bases restent les mêmes.`,
    features: [
      "Dispo variable",
      "Live & VOD",
      "Tarifs sur demande",
      "Alternative panels",
      "Transparence magasin",
    ],
    installationSteps: [
      "Check dispo Crazy.",
      "Devis.",
      "Codes si OK.",
      "Player.",
      "Vérification des chaînes.",
    ],
    pricingSummary:
      "Crazy : prix annoncé seulement si dispo réelle.",
    faq: [
      {
        question: "Crazy en stock ?",
        answer:
          "Variable. Contactez le magasin ou contact@ibo-player.ma.",
      },
      {
        question: "Fiable ?",
        answer:
          "On ne pousse un panel que s’il passe nos contrôles du moment.",
      },
      {
        question: "Puis-je réserver ?",
        answer:
          "Selon période. Demandez au comptoir.",
      },
    ],
    rating: 4.2,
  }),
  buildItem({
    name: "Aurora",
    logo: "/logos/aurora.png",
    category: "abonnement",
    shortDescription:
      "Aurora IPTV : abonnement familial simple, avis installation salon.",
    fullReview: `Aurora (« Aurora IPTV », « abonnement Aurora ») vise le setup familial simple : une TV salon, parents + enfants, pas d’usine à gaz.

Nous installons le player sur la TV du salon, créons favoris kids / info / cinéma, et expliquons 4 gestes de base (zapper, retour, VOD, redémarrer l’app).

Moins « geek » que TiviMate poussé à fond, plus rassurant pour les familles. Serveur stable > options obscures.

Chez IPTV IBO PLAYER, Aurora se vend bien en 6–12 mois pour arrêter de renouveler tous les mois.`,
    features: [
      "Usage familial",
      "Simple",
      "Live",
      "Explications inclus",
      "Favoris kids",
    ],
    installationSteps: [
      "Profil famille.",
      "Aurora durée.",
      "Player salon.",
      "Favoris + parental si besoin.",
      "Mini formation 5 min.",
    ],
    pricingSummary:
      "Aurora familial selon durée. Pack 12 mois avantageux souvent.",
    faq: [
      {
        question: "Aurora pour grands-parents ?",
        answer:
          "Oui : UI simple + formation sur place.",
      },
      {
        question: "2 TV famille ?",
        answer:
          "Prendre multi-connexions / Smart x2 logic.",
      },
      {
        question: "Aurora pour kids ?",
        answer:
          "Oui : favoris enfants + contrôle parental selon le lecteur.",
      },
    ],
    rating: 4.4,
  }),
  buildItem({
    name: "Premium OTT",
    logo: "/logos/premium-ott.png",
    category: "abonnement",
    shortDescription:
      "Premium OTT IPTV : formule haut de gamme films & séries, avis qualité image.",
    fullReview: `Premium OTT (« Premium OTT IPTV », « abonnement OTT premium ») cible films et séries en qualité soignée. Moins « zapping 200 chaînes », plus expérience cinéma.

Couplez avec un player 4K si fibre OK. IPTV IBO PLAYER active Premium OTT, vérifie quelques titres phares, et explique les limites éventuelles (sous-titres, langues).

Comparez à Ott4k / Maxott / Megaott. « Premium » doit se justifier sur le catalogue du moment — on l’ouvre avec vous.

SAV chez IPTV IBO PLAYER, pas un chatbot anonyme.`,
    features: [
      "OTT premium",
      "Films & séries",
      "HD/4K selon offre",
      "SAV boutique",
      "Focus qualité perçue",
    ],
    installationSteps: [
      "Goûts cinéma / séries.",
      "Offre Premium OTT.",
      "Player.",
      "Demo 2–3 titres.",
      "Réglages langue / sub si dispo.",
    ],
    pricingSummary:
      "Premium OTT tarif haut de gamme. Devis durée 3–12 mois.",
    faq: [
      {
        question: "Premium OTT remplace une plateforme VOD classique ?",
        answer:
          "Ce n’est pas le même cadre légal / service. On parle d’une offre IPTV/OTT tierce — on vous explique le périmètre en magasin.",
      },
      {
        question: "Live inclus ?",
        answer:
          "Selon formule. Parfois OTT-first ; live en complément.",
      },
      {
        question: "4K garanti sur tous les films ?",
        answer:
          "Non. Titre par titre.",
      },
    ],
    rating: 4.6,
  }),
  buildItem({
    name: "Iplay",
    logo: "/logos/iplay.png",
    category: "abonnement",
    shortDescription:
      "Iplay IPTV : abonnement multi-appareils, devis flexible 1–12 mois.",
    fullReview: `Iplay (« Iplay IPTV », « abonnement Iplay ») se configure vite sur les lecteurs que nous activons. Devis flexible : 1, 3, 6, 12 mois.

Intérêt multi-appareils selon offre. IPTV IBO PLAYER aligne Iplay avec IBO / Smarters / TiviMate et clarifie le quota.

Bon choix « pragmatique » quand vous voulez une durée courte pour vérifier un foyer complet, puis engager l’annuel.

Passez en boutique pour le prix du jour et la dispo réelle.`,
    features: [
      "Multi-appareils selon offre",
      "Devis flexible",
      "Live",
      "Activation boutique",
      "Durées 1–12 mois",
    ],
    installationSteps: [
      "Compter les devices.",
      "Devis Iplay.",
      "Codes.",
      "Config chaque player.",
      "Vérification parallèle si multi.",
    ],
    pricingSummary:
      "Iplay au mois ou à l’année. Prix annoncé en magasin / mail.",
    faq: [
      {
        question: "Iplay vs Crystal ?",
        answer:
          "Deux polyvalents. Dispo et promo du moment.",
      },
      {
        question: "Engagement ?",
        answer:
          "Vous choisissez la durée. Pas d’engagement caché au-delà.",
      },
      {
        question: "Logo Iplay ?",
        answer:
          "Ajoutable dès que vous déposez le fichier.",
      },
    ],
    rating: 4.3,
  }),
];

export function getServerBySlug(slug: string): ServerItem | undefined {
  return servers.find((server) => server.slug === slug);
}

export function getAllServerSlugs(): string[] {
  return servers.map((server) => server.slug);
}
