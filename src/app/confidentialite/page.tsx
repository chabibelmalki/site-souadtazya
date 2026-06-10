import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité et traitement des données personnelles du site SANAD CLEAN.",
  alternates: { canonical: "/confidentialite" },
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

export default function ConfidentialitePage() {
  return (
    <>
      <PageHero
        title="Politique de confidentialité"
        breadcrumb={[
          { name: "Accueil", href: "/" },
          { name: "Confidentialité", href: "/confidentialite" },
        ]}
      />
      <Container className="max-w-3xl py-12">
        <Block title="Responsable du traitement">
          <p>
            {site.legalName}, {site.address.street}, {site.address.postalCode}{" "}
            {site.address.city}. Contact : {site.email}.
          </p>
        </Block>

        <Block title="Données collectées">
          <p>
            Via les formulaires de devis et de contact, nous collectons les
            informations que vous nous transmettez : nom, coordonnées
            (téléphone, e-mail), adresse de la prestation et description de votre
            besoin.
          </p>
        </Block>

        <Block title="Finalité">
          <p>
            Ces données servent exclusivement à traiter votre demande, vous
            établir un devis et organiser la prestation. Elles ne sont ni
            vendues, ni cédées à des tiers à des fins commerciales.
          </p>
        </Block>

        <Block title="Durée de conservation">
          <p>
            Les données sont conservées le temps nécessaire au traitement de
            votre demande et à nos obligations légales (notamment comptables),
            puis supprimées.
          </p>
        </Block>

        <Block title="Vos droits">
          <p>
            Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de
            rectification, d&apos;effacement et d&apos;opposition sur vos
            données. Pour l&apos;exercer, écrivez-nous à {site.email}.
          </p>
        </Block>

        <Block title="Cookies & mesure d'audience">
          <p>
            Ce site n&apos;utilise pas de cookies publicitaires. Une mesure
            d&apos;audience respectueuse de la vie privée, sans cookie de suivi,
            peut être utilisée à des fins statistiques.
          </p>
        </Block>
      </Container>
    </>
  );
}
