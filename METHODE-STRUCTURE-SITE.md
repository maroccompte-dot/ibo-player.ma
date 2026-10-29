# Méthode & structure — template site SEO (ibo-player.ma)

Clone du modèle **iptv-iboplayer.fr**, adapté Maroc : même stack et arborescence, thème drapeau marocain, domaine `ibo-player.ma`.

Stack : **Next.js 15 (App Router) + TypeScript + Tailwind 4 + Vercel + Cloudflare DNS**.

---

## Différences vs le modèle FR

| Élément | FR | MA (ce repo) |
|--------|----|----------------|
| Domaine | iptv-iboplayer.fr | **ibo-player.ma** |
| Locale | fr_FR | **fr_MA** |
| Couleurs | bleu / blanc / rouge | **rouge `#C1272D` + vert `#006233`** |
| CSS vars | `--fr-*` | **`--ma-red` / `--ma-green`** |
| Siège | Nanterre | **Casablanca** |
| Légal data | SIRET / CNIL | **ICE / RC / CNDP (loi 09-08)** |
| Config | `lib/site.ts` | idem — **fichier de vérité** |

Le reste (dossiers `app/`, `data/`, `components/`, SEO helpers, WhatsApp, cookies, sitemap) est **identique en méthode**.

---

## Checklist rapide

1. Remplir `lib/site.ts` (ICE, RC, Maps, WhatsApp, e-mail)
2. Logos / favicon / OG (`public/`)
3. Contenu `data/*` orienté Maroc
4. `npm run build` puis `npx vercel deploy --yes --prod`
5. Cloudflare DNS → Vercel + TXT GSC
6. Soumettre `https://ibo-player.ma/sitemap.xml`

Voir le guide complet du modèle FR : `../iptv-iboplayer.fr/METHODE-STRUCTURE-SITE.md`.
