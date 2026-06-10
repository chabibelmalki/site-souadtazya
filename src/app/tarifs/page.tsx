import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { DevisBuilder } from "@/components/DevisBuilder";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Tarifs ménage & nettoyage à Nîmes",
  description:
    "Tarifs SANAD CLEAN : ménage 30 €/h (15 €/h après crédit d'impôt), grand nettoyage, remise en état, vitres, canapé, traitement des nuisibles, bureaux. Composez votre devis en ligne.",
  alternates: { canonical: "/tarifs" },
};

export default function TarifsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", href: "/" },
          { name: "Tarifs", href: "/tarifs" },
        ])}
      />
      <PageHero
        eyebrow="Tarifs & devis en ligne"
        title="Composez votre devis en quelques clics"
        description="Choisissez vos prestations, ajustez les options, et visualisez votre prix — avec ou sans crédit d'impôt. Envoyez ensuite votre sélection à SANAD CLEAN en un clic."
        breadcrumb={[
          { name: "Accueil", href: "/" },
          { name: "Tarifs", href: "/tarifs" },
        ]}
      />

      <section className="py-12">
        <Container>
          <DevisBuilder />
        </Container>
      </section>

      <CtaBand title="Un besoin particulier ou un grand chantier ?" subtitle="Appelez-nous ou écrivez sur WhatsApp : on vous établit un devis précis et gratuit." />
    </>
  );
}
