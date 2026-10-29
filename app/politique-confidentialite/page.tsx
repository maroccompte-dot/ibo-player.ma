import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { buildPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Politique de confidentialité",
  description: `Politique de confidentialité (loi 09-08 / CNDP) de ${siteConfig.name}.`,
  path: "/politique-confidentialite",
});

export default function PolitiqueConfidentialitePage() {
  const { company } = siteConfig;

  return (
    <LegalPage
      title="Politique de confidentialité"
      updatedAt="29 octobre 2026"
    >
      <section>
        <h2>1. Responsable du traitement</h2>
        <p className="mt-3">
          Le responsable du traitement des données est {company.name}, joignable
          à{" "}
          <a
            href={`mailto:${company.email}`}
            className="text-[var(--ma-green)] underline-offset-2 hover:underline"
          >
            {company.email}
          </a>
          .
        </p>
      </section>

      <section>
        <h2>2. Données collectées</h2>
        <p className="mt-3">Nous pouvons collecter :</p>
        <ul className="mt-3">
          <li>
            Données techniques liées à l’hébergement et au réseau (ex. journaux
            serveur / adresse IP traitées par l’hébergeur Vercel et, le cas
            échéant, le DNS/CDN Cloudflare) pour la sécurité et le bon
            fonctionnement ;
          </li>
          <li>
            Données que vous nous transmettez volontairement (e-mail de contact,
            message, ou conversation WhatsApp) ;
          </li>
          <li>
            Préférence d’information cookies stockée localement dans votre
            navigateur (localStorage), uniquement pour ne pas réafficher le
            bandeau.
          </li>
        </ul>
      </section>

      <section>
        <h2>3. Finalités et bases légales</h2>
        <ul className="mt-3">
          <li>
            Fonctionnement et sécurité du site — intérêt légitime /
            obligation technique ;
          </li>
          <li>
            Réponse à vos demandes de contact (e-mail ou WhatsApp) — exécution
            de mesures précontractuelles / intérêt légitime / consentement
            lorsque vous initiez volontairement la conversation.
          </li>
        </ul>
        <p className="mt-3">
          Aucun outil d’analytics / mesure d’audience tiers n’est installé à
          ce jour sur ibo-player.ma.
        </p>
      </section>

      <section>
        <h2>4. Cookies</h2>
        <p className="mt-3">
          Nous n’utilisons pas de cookies publicitaires ni de cookies de
          mesure d’audience. Le bandeau d’information rappelle ce point ; votre
          choix (« J’accepte ») est enregistré localement dans le navigateur
          et n’est pas transmis à des tiers. L’hébergeur peut déposer des
          cookies strictement techniques nécessaires au fonctionnement du site
          / CDN. Le bouton WhatsApp n’installe pas de cookie de tracking sur
          notre site : il ouvre une page / application tierce (Meta).
        </p>
      </section>

      <section>
        <h2>5. Contact via WhatsApp</h2>
        <p className="mt-3">
          Un bouton flottant permet de nous écrire via WhatsApp (service édité
          par Meta Platforms). En cliquant, vous quittez notre site et vos
          données (numéro, message, métadonnées techniques) sont traitées par
          WhatsApp / Meta selon leur propre politique de confidentialité. Ce
          canal est facultatif : vous pouvez aussi nous écrire à{" "}
          <a
            href={`mailto:${company.email}`}
            className="text-[var(--ma-green)] underline-offset-2 hover:underline"
          >
            {company.email}
          </a>
          . Un transfert hors de l’Espace économique européen est possible via
          Meta ; en poursuivant la conversation, vous en êtes informé.
        </p>
      </section>

      <section>
        <h2>6. Durée de conservation</h2>
        <p className="mt-3">
          Les données de contact sont conservées le temps nécessaire au
          traitement de votre demande, puis archivées ou supprimées selon les
          délais légaux applicables. Les logs techniques sont conservés pour une
          durée limitée compatible avec la sécurité du service. Les messages
          WhatsApp suivent également les règles de conservation de Meta /
          WhatsApp.
        </p>
      </section>

      <section>
        <h2>7. Destinataires</h2>
        <p className="mt-3">
          Les données peuvent être traitées par nos prestataires techniques
          (hébergeur Vercel, DNS/CDN Cloudflare) et, si vous utilisez WhatsApp,
          par Meta / WhatsApp, uniquement dans le cadre du contact demandé.
        </p>
      </section>

      <section>
        <h2>8. Vos droits (loi 09-08 / CNDP)</h2>
        <p className="mt-3">
          Conformément à la loi n° 09-08 relative à la protection des personnes
          physiques à l’égard du traitement des données à caractère personnel,
          vous disposez d’un droit d’accès, de rectification et d’opposition.
          Vous pouvez également demander la suppression de vos données lorsque
          cela est applicable.
        </p>
        <p className="mt-3">
          Pour exercer vos droits :{" "}
          <a
            href={`mailto:${company.email}`}
            className="text-[var(--ma-green)] underline-offset-2 hover:underline"
          >
            {company.email}
          </a>
          . Vous pouvez introduire une réclamation auprès de la CNDP (
          <a
            href="https://www.cndp.ma"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--ma-green)] underline-offset-2 hover:underline"
          >
            www.cndp.ma
          </a>
          ).
        </p>
      </section>

      <section>
        <h2>9. Transferts hors Maroc</h2>
        <p className="mt-3">
          L’hébergement (Vercel), le DNS/CDN (Cloudflare) et WhatsApp / Meta
          peuvent impliquer un traitement ou un transfert de données hors du
          Maroc. Des garanties appropriées (contrats prestataires, politiques
          des services) s’appliquent selon chaque acteur. Pour WhatsApp,
          reportez-vous également à la politique de Meta.
        </p>
      </section>
    </LegalPage>
  );
}
