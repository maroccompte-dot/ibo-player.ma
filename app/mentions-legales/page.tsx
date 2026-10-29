import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { buildPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Mentions légales",
  description: `Mentions légales et informations éditeur de ${siteConfig.name} — ${siteConfig.company.name}.`,
  path: "/mentions-legales",
});

export default function MentionsLegalesPage() {
  const { company, mapsUrl } = siteConfig;
  const hasPhone = Boolean(company.phone?.trim() && company.phoneHref?.trim());
  const hasSiret =
    Boolean(company.siret?.trim()) && !company.siret.includes("à compléter");
  const hasVat =
    Boolean(company.vat?.trim()) && !company.vat.includes("à compléter");

  return (
    <LegalPage title="Mentions légales" updatedAt="26 octobre 2026">
      <section>
        <h2>1. Éditeur du site</h2>
        <p className="mt-3">
          Le site <strong>{siteConfig.name}</strong> est édité par :
        </p>
        <ul className="mt-3">
          <li>Raison sociale : {company.name}</li>
          <li>Forme juridique : {company.legalForm}</li>
          <li>
            Siège : {company.address}, {company.postalCode} {company.city},{" "}
            {company.country}
          </li>
          {hasSiret && <li>ICE : {company.siret}</li>}
          <li>RC : {company.rcs}</li>
          {hasVat && <li>IF / identifiant fiscal : {company.vat}</li>}
          <li>
            E-mail :{" "}
            <a
              href={`mailto:${company.email}`}
              className="text-[var(--ma-green)] underline-offset-2 hover:underline"
            >
              {company.email}
            </a>
          </li>
          {hasPhone && (
            <li>
              Téléphone :{" "}
              <a
                href={company.phoneHref}
                className="text-[var(--ma-green)] underline-offset-2 hover:underline"
              >
                {company.phone}
              </a>
            </li>
          )}
          <li>Directeur de la publication : {company.director}</li>
          <li>
            Fiche établissement :{" "}
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--ma-green)] underline-offset-2 hover:underline"
            >
              Google Maps — IPTV IBO PLAYER
            </a>
          </li>
        </ul>
        <p className="mt-3 text-sm text-slate-600">
          Couverture : activation IPTV partout au Maroc. Siège à{" "}
          {company.city}.
        </p>
      </section>

      <section>
        <h2>2. Hébergeur</h2>
        <p className="mt-3">
          Le site est hébergé par :
          <br />
          <strong>{company.host.name}</strong>
          <br />
          {company.host.address}
        </p>
        <p className="mt-4">
          DNS et CDN ({company.dns.role}) :
          <br />
          <strong>{company.dns.name}</strong>
          <br />
          {company.dns.address}
        </p>
      </section>

      <section>
        <h2>3. Propriété intellectuelle</h2>
        <p className="mt-3">
          Les contenus originaux du site (textes, structure, éléments graphiques
          propres) sont protégés. Les marques et logos de tiers restent la
          propriété de leurs détenteurs. Voir aussi la{" "}
          <a
            href="/dmca"
            className="text-[var(--ma-green)] underline-offset-2 hover:underline"
          >
            politique DMCA
          </a>
          .
        </p>
      </section>

      <section>
        <h2>4. Contact</h2>
        <p className="mt-3">
          Pour toute question :{" "}
          <a
            href={`mailto:${company.email}`}
            className="text-[var(--ma-green)] underline-offset-2 hover:underline"
          >
            {company.email}
          </a>{" "}
          ou la{" "}
          <a
            href="/contact"
            className="text-[var(--ma-green)] underline-offset-2 hover:underline"
          >
            page contact
          </a>
          .
        </p>
      </section>
    </LegalPage>
  );
}
