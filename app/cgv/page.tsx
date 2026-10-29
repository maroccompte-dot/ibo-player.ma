import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { buildPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Conditions générales de vente",
  description: `Conditions générales de vente (CGV) de ${siteConfig.name}.`,
  path: "/cgv",
});

export default function CgvPage() {
  const { company } = siteConfig;

  return (
    <LegalPage
      title="Conditions générales de vente (CGV)"
      updatedAt="24 octobre 2026"
    >
      <section>
        <h2>1. Objet</h2>
        <p className="mt-3">
          Les présentes conditions générales de vente (CGV) encadrent l’accès et
          l’utilisation du site {siteConfig.name}, édité par {company.name}. Ce
          site propose principalement des contenus éditoriaux (guides,
          présentations) et des liens vers des offres de tiers.
        </p>
      </section>

      <section>
        <h2>2. Nature du service</h2>
        <p className="mt-3">
          Sauf mention contraire explicite, {siteConfig.name} ne vend pas
          directement les abonnements IPTV ni les licences d’applications
          présentés. Les boutons « Voir Plus » redirigent vers des sites
          partenaires ou éditeurs, dont les conditions propres s’appliquent.
        </p>
      </section>

      <section>
        <h2>3. Contenu informatif</h2>
        <p className="mt-3">
          Les guides et présentations sont fournis à titre informatif. Ils ne constituent
          pas une garantie de résultat, de disponibilité des services tiers, ni
          un conseil juridique concernant l’usage de contenus audiovisuels.
          L’utilisateur reste responsable du respect des lois applicables dans
          son pays.
        </p>
      </section>

      <section>
        <h2>4. Prix et paiements (si vente directe)</h2>
        <p className="mt-3">
          Lorsque {company.name} vend un abonnement ou une prestation en
          direct, les prix sont indiqués avant validation. Les modalités de
          remboursement sont détaillées dans la{" "}
          <a
            href="/politique-remboursement"
            className="text-[var(--ma-green)] underline-offset-2 hover:underline"
          >
            politique de remboursement
          </a>{" "}
          (remboursement possible sous 15 jours, garantie pendant toute la
          durée de l’abonnement, traitement sous 3 à 7 jours ouvrables, même
          moyen de paiement).
        </p>
      </section>

      <section>
        <h2>5. Droit de rétractation / remboursement</h2>
        <p className="mt-3">
          Pour les services numériques exécutés immédiatement avec accord
          préalable, le droit de rétractation peut être limité selon le droit
          marocain applicable. Indépendamment, {company.name} applique sa
          politique commerciale de remboursement sous 15 jours et une garantie
          de service pendant toute la période d’abonnement — voir{" "}
          <a
            href="/politique-remboursement"
            className="text-[var(--ma-green)] underline-offset-2 hover:underline"
          >
            /politique-remboursement
          </a>
          .
        </p>
      </section>

      <section>
        <h2>6. Responsabilité</h2>
        <p className="mt-3">
          L’éditeur s’efforce d’assurer l’exactitude des informations publiées
          mais ne saurait être tenu responsable des interruptions du site, des
          erreurs involontaires, ni des dommages liés à l’utilisation de
          services tiers accessibles via les liens externes.
        </p>
      </section>

      <section>
        <h2>7. Propriété intellectuelle</h2>
        <p className="mt-3">
          Les marques et logos des applications / serveurs cités appartiennent à
          leurs détenteurs respectifs. Leur mention n’implique pas
          nécessairement un partenariat exclusif.
        </p>
      </section>

      <section>
        <h2>8. Droit applicable</h2>
        <p className="mt-3">
          Les présentes CGV sont régies par le droit marocain. En cas de litige,
          et à défaut de résolution amiable, les tribunaux compétents marocains
          seront saisis, sous réserve des règles impératives de protection du
          consommateur.
        </p>
      </section>

      <section>
        <h2>9. Contact</h2>
        <p className="mt-3">
          Pour toute question relative aux présentes CGV :{" "}
          <a
            href={`mailto:${company.email}`}
            className="text-[var(--ma-green)] underline-offset-2 hover:underline"
          >
            {company.email}
          </a>
          .
        </p>
      </section>
    </LegalPage>
  );
}
