import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { CalBooking } from "@/components/CalBooking";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Prendre rendez-vous",
  description:
    "Réservez en ligne votre rendez-vous avec SANAD CLEAN pour un ménage à domicile ou une prestation de nettoyage à Nîmes.",
  alternates: { canonical: "/rendez-vous" },
};

export default function RendezVousPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", href: "/" },
          { name: "Rendez-vous", href: "/rendez-vous" },
        ])}
      />
      <PageHero
        eyebrow="Prise de rendez-vous"
        title="Choisissez votre créneau en ligne"
        description="Réservez le moment qui vous arrange. Nous confirmons rapidement et préparons votre intervention."
        breadcrumb={[
          { name: "Accueil", href: "/" },
          { name: "Rendez-vous", href: "/rendez-vous" },
        ]}
      />
      <section className="py-16">
        <Container className="max-w-3xl">
          <Reveal>
            <CalBooking />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
