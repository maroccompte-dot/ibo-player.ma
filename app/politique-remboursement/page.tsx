import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { buildPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Politique de remboursement",
  description: `Politique de remboursement ${siteConfig.name} : 15 jours, garantie pendant toute la durée de l’abonnement, délai 3 à 7 jours ouvrables.`,
  path: "/politique-remboursement",
});

export default function PolitiqueRemboursementPage() {
  const { company } = siteConfig;

  return (
    <LegalPage
      title="Politique de remboursement"
      updatedAt="26 octobre 2026"
    >
      <section>
        <h2>1. Champ d’application</h2>
        <p className="mt-3">
          La présente politique s’applique aux abonnements et prestations
          vendus directement par <strong>{company.name}</strong> via{" "}
          {siteConfig.name} ou en magasin ({company.address},{" "}
          {company.postalCode} {company.city}). Elle ne couvre pas les achats
          effectués auprès de tiers (ex. Amazon pour le matériel Box TV), dont
          les conditions de retour propres s’appliquent.
        </p>
      </section>

      <section>
        <h2>2. Remboursement sous 15 jours</h2>
        <p className="mt-3">
          Un remboursement est possible dans un délai de{" "}
          <strong>15 jours</strong> à compter de la date d’achat / d’activation
          de l’abonnement, sous réserve d’une demande motivée adressée à{" "}
          <a
            href={`mailto:${company.email}`}
            className="font-semibold text-[var(--ma-green)] underline-offset-2 hover:underline"
          >
            {company.email}
          </a>{" "}
          ou via la{" "}
          <Link
            href="/contact"
            className="font-semibold text-[var(--ma-green)] underline-offset-2 hover:underline"
          >
            page contact
          </Link>
          .
        </p>
        <p className="mt-3">
          La demande doit préciser : identité, date d’achat, type
          d’abonnement, et motif. Nous pouvons demander une preuve de paiement.
        </p>
      </section>

      <section>
        <h2>3. Garantie pendant toute la durée de l’abonnement</h2>
        <p className="mt-3">
          Les abonnements souscrits auprès de {company.name} sont{" "}
          <strong>garantis durant toute la période de l’abonnement</strong>{" "}
          (selon la durée choisie : 1, 3, 6, 12 mois, etc.). En cas de panne
          imputable au service (accès / panel), nous nous engageons à un
          remplacement, une réactivation ou une solution équivalente pendant
          cette période, dans la limite de nos moyens techniques et des
          conditions de l’offre.
        </p>
      </section>

      <section>
        <h2>4. Délai de traitement</h2>
        <p className="mt-3">
          Une fois la demande de remboursement acceptée et complète, le délai
          de traitement est de <strong>3 à 7 jours ouvrables</strong>. Ce délai
          correspond au traitement interne ; l’apparition des fonds sur votre
          compte peut ensuite dépendre de votre banque ou opérateur de
          paiement.
        </p>
      </section>

      <section>
        <h2>5. Mode de remboursement</h2>
        <p className="mt-3">
          Le remboursement du montant est effectué{" "}
          <strong>par le même moyen de paiement</strong> que celui utilisé lors
          de l’achat (carte, virement, etc.), sauf impossibilité technique
          signalée — auquel cas un mode alternatif équivalent pourra être
          proposé d’un commun accord.
        </p>
      </section>

      <section>
        <h2>6. Cas particuliers</h2>
        <ul className="mt-3">
          <li>
            Abus, partage non autorisé des identifiants, ou non-respect des
            conditions d’usage peuvent entraîner un refus de remboursement.
          </li>
          <li>
            Les problèmes liés uniquement à votre réseau (Wi-Fi saturé, débit
            insuffisant) ne constituent pas, à eux seuls, un motif de
            remboursement si le service fonctionne sur un setup conforme.
          </li>
          <li>
            Matériel acheté sur Amazon ou autre marketplace : retours selon la
            politique du vendeur / Amazon.
          </li>
        </ul>
      </section>

      <section>
        <h2>7. Contact</h2>
        <p className="mt-3">
          {company.name}
          <br />
          {company.address}, {company.postalCode} {company.city},{" "}
          {company.country}
          <br />
          E-mail :{" "}
          <a
            href={`mailto:${company.email}`}
            className="font-semibold text-[var(--ma-green)] underline-offset-2 hover:underline"
          >
            {company.email}
          </a>
          {company.phone && company.phoneHref ? (
            <>
              <br />
              Téléphone :{" "}
              <a
                href={company.phoneHref}
                className="font-semibold text-[var(--ma-green)] underline-offset-2 hover:underline"
              >
                {company.phone}
              </a>
            </>
          ) : null}
        </p>
      </section>
    </LegalPage>
  );
}
