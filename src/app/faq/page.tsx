import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";
import { faq } from "@/lib/content";

export const metadata: Metadata = {
  title: "Questions fréquentes",
  description:
    "Crédit d'impôt, avance immédiate, CESU, zone d'intervention, devis : toutes les réponses sur les services de nettoyage SANAD CLEAN à Nîmes.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={[
          faqJsonLd(),
          breadcrumbJsonLd([
            { name: "Accueil", href: "/" },
            { name: "FAQ", href: "/faq" },
          ]),
        ]}
      />
      <PageHero
        eyebrow="FAQ"
        title="Vos questions, nos réponses"
        description="Tout ce qu'il faut savoir sur nos prestations, le crédit d'impôt et le déroulement d'une intervention."
        breadcrumb={[
          { name: "Accueil", href: "/" },
          { name: "FAQ", href: "/faq" },
        ]}
      />
      <section className="py-16">
        <Container className="max-w-3xl">
          <Reveal>
            <Accordion items={faq} />
          </Reveal>
        </Container>
      </section>
      <CtaBand title="Une autre question ?" subtitle="Contactez-nous, nous vous répondons rapidement et avec plaisir." />
    </>
  );
}
