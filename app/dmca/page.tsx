import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { buildPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "DMCA & Disclaimer Copyright",
  description: `Politique DMCA, disclaimer copyright et signalement des ayants droit — ${siteConfig.name}.`,
  path: "/dmca",
});

export default function DmcaPage() {
  const { company, name, url } = siteConfig;
  const hostname = url.replace(/^https?:\/\//, "");

  return (
    <LegalPage
      title="DMCA & Disclaimer Copyright"
      updatedAt="26 octobre 2026"
    >
      <section>
        <h2>1. Service indépendant</h2>
        <p className="mt-3">
          <strong>{company.name}</strong> ({name}) est un prestataire
          indépendant. Ce site n’est affilié, partenaire, sponsorisé ni
          approuvé par aucun éditeur de chaînes, studio, ligue sportive,
          compétition, marque ou ayant droit. Toute marque, logo, nom
          commercial ou œuvre protégée appartient exclusivement à ses
          propriétaires respectifs.
        </p>
        <p className="mt-3">
          Nous n’utilisons pas, sur ce site, de noms de chaînes, de marques
          tierces ni de compétitions sportives pour présenter notre offre.
        </p>
      </section>

      <section>
        <h2>2. Aucun hébergement de contenus protégés</h2>
        <p className="mt-3">
          {company.name} n’héberge pas de fichiers vidéo, audio, replay, VOD
          protégés ou flux de diffusion sur ses serveurs web. Ce site est une
          vitrine commerciale et d’information. Nous ne revendiquons aucun
          droit sur des programmes, événements sportifs ou catalogues
          appartenant à des tiers.
        </p>
      </section>

      <section>
        <h2>3. Responsabilité de l’utilisateur</h2>
        <p className="mt-3">
          L’utilisateur est seul responsable de l’usage qu’il fait du service
          et du respect des lois de son pays, notamment le droit d’auteur et
          les droits voisins. {company.name} n’encourage pas l’accès à des
          contenus sans autorisation des ayants droit.
        </p>
      </section>

      <section>
        <h2>4. Politique DMCA</h2>
        <p className="mt-3">
          Nous respectons le Digital Millennium Copyright Act (DMCA) et les
          notifications de droits d’auteur. Si vous êtes titulaire de droits,
          ou son représentant, et estimez qu’un élément de ce site porte
          atteinte à vos droits, envoyez une notification complète à :
        </p>
        <p className="mt-3">
          E-mail DMCA :{" "}
          <a
            href={`mailto:${company.email}`}
            className="font-semibold text-[var(--ma-green)] underline-offset-2 hover:underline"
          >
            {company.email}
          </a>
        </p>
        <p className="mt-3">Votre notification doit inclure :</p>
        <ul className="mt-3">
          <li>
            Votre nom, prénom, société et coordonnées (e-mail, téléphone,
            adresse postale).
          </li>
          <li>La description précise de l’œuvre protégée.</li>
          <li>
            L’URL exacte de la page ou de l’élément concerné sur {hostname}.
          </li>
          <li>
            Une déclaration de bonne foi indiquant que l’usage n’est pas
            autorisé par le titulaire, son agent ou la loi.
          </li>
          <li>
            Une déclaration sous peine de parjure que les informations sont
            exactes et que vous êtes le titulaire ou son représentant.
          </li>
          <li>Votre signature électronique ou physique.</li>
        </ul>
        <p className="mt-3">
          Dès réception d’une notification valide, nous examinons la demande
          dans les meilleurs délais et, le cas échéant, retirons ou corrigeons
          l’élément signalé. Les notifications incomplètes peuvent être
          ignorées.
        </p>
      </section>

      <section>
        <h2>5. Contre-notification</h2>
        <p className="mt-3">
          Si un contenu a été retiré et que vous estimez qu’il a été retiré
          par erreur, vous pouvez envoyer une contre-notification au même
          e-mail, avec votre identité, l’URL retirée, les motifs de
          contestation et votre consentement à la juridiction compétente.
        </p>
      </section>

      <section>
        <h2>6. Marques et visuels</h2>
        <p className="mt-3">
          Les visuels, textes et logos présents sur ce site, hors éléments
          expressément identifiés comme appartenant à des tiers, sont la
          propriété de {company.name}. Toute reproduction non autorisée est
          interdite. Les éventuelles ressemblances avec des marques ou
          événements tiers sont involontaires et ne constituent pas une
          revendication d’affiliation.
        </p>
      </section>

      <section>
        <h2>7. Signalement rapide</h2>
        <p className="mt-3">
          Pour toute réclamation copyright, abus ou demande de retrait :{" "}
          <a
            href={`mailto:${company.email}`}
            className="font-semibold text-[var(--ma-green)] underline-offset-2 hover:underline"
          >
            {company.email}
          </a>
          {company.phone && company.phoneHref && (
            <>
              {" "}
              ou téléphone au {company.phone}
            </>
          )}
          .
        </p>
        <p className="mt-3 text-sm text-slate-600">
          Magasin : {company.address}, {company.postalCode} {company.city},{" "}
          {company.country}.
        </p>
      </section>

      <section>
        <h2>8. English notice for rights holders</h2>
        <p className="mt-3">
          {company.name} ({hostname}) is an independent service and is not
          affiliated with any TV network, studio, sports league, competition
          or trademark owner. This website does not host copyrighted media
          files. To file a DMCA notice, email{" "}
          <a
            href={`mailto:${company.email}`}
            className="font-semibold text-[var(--ma-green)] underline-offset-2 hover:underline"
          >
            {company.email}
          </a>{" "}
          with your contact details, a description of the copyrighted work,
          the exact URL, a good-faith statement, a perjury statement and your
          signature. Valid notices are reviewed promptly.
        </p>
      </section>
    </LegalPage>
  );
}
