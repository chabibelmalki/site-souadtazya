import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site SANAD CLEAN.",
  alternates: { canonical: "/mentions-legales" },
  robots: { index: false, follow: true },
};

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-slate-100 py-7 first:border-t-0">
      <h2 className="text-lg font-bold text-ink">{title}</h2>
      <div className="mt-3 space-y-2 text-sm leading-relaxed text-slate-600">
        {children}
      </div>
    </section>
  );
}

export default function MentionsLegalesPage() {
  return (
    <>
      <PageHero
        title="Mentions légales"
        breadcrumb={[
          { name: "Accueil", href: "/" },
          { name: "Mentions légales", href: "/mentions-legales" },
        ]}
      />
      <Container className="max-w-3xl py-12">
        <Block title="Éditeur du site">
          <p>
            <strong>{site.name}</strong> — {site.owner}, entreprise individuelle.
          </p>
          <p>
            Siège : {site.address.street}, {site.address.postalCode}{" "}
            {site.address.city}.
          </p>
          <p>SIREN : {site.siren}</p>
          <p>
            Code APE : {site.ape} — {site.apeLabel}
          </p>
          <p>Téléphone : {site.phone}</p>
          <p>E-mail : {site.email}</p>
        </Block>

        <Block title="Directrice de la publication">
          <p>{site.owner}</p>
        </Block>

        <Block title="Hébergement">
          <p>
            Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut,
            CA 91789, États-Unis — vercel.com.
          </p>
          <p className="text-xs text-slate-400">
            (À adapter si l&apos;hébergeur change.)
          </p>
        </Block>

        <Block title="Services à la personne">
          <p>
            Les prestations de ménage à domicile ouvrant droit au crédit
            d&apos;impôt sont réalisées via la coopérative{" "}
            {site.sapPartner.name}, déclarée au titre des services à la personne.
            Le crédit d&apos;impôt de 50 % s&apos;applique conformément à la
            réglementation en vigueur (article 199 sexdecies du CGI).
          </p>
        </Block>

        <Block title="Propriété intellectuelle">
          <p>
            L&apos;ensemble des contenus de ce site (textes, visuels, logo) est
            protégé. Toute reproduction sans autorisation est interdite.
          </p>
        </Block>

        <Block title="Données personnelles">
          <p>
            Les informations transmises via les formulaires sont utilisées
            uniquement pour répondre à votre demande. Pour en savoir plus, voir
            notre{" "}
            <a
              href="/confidentialite"
              className="font-semibold text-brand-700 hover:underline"
            >
              politique de confidentialité
            </a>
            .
          </p>
        </Block>
      </Container>
    </>
  );
}
