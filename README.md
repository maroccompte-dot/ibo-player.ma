# ibo-player.ma

Site IPTV Maroc — même méthode / structure que `iptv-iboplayer.fr`, thème drapeau marocain.

- **Domaine :** https://ibo-player.ma  
- **Stack :** Next.js 15 + Tailwind 4 + TypeScript  
- **Config marque :** `lib/site.ts`  
- **Méthode :** `METHODE-STRUCTURE-SITE.md`

```bash
npm install
npm run dev    # http://localhost:3000
npm run build
npx vercel deploy --yes --prod
```

Compléter dans `lib/site.ts` : ICE, RC, IF, adresse Maps réelle, WhatsApp si besoin.
