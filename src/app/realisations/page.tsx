import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Gallery } from "@/components/ui/Gallery";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { realisations } from "@/lib/realisations";

export const metadata: Metadata = {
  title: "Réalisations — Avant / Après",
  description:
    "Découvrez en photos des chantiers de nettoyage et de remise en état réalisés par SANAD CLEAN à Nîmes : avant / après sur escaliers, sanitaires, caves et pièces de vie.",
  alternates: { canonical: "/realisations" },
};

export default function RealisationsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", href: "/" },
          { name: "Réalisations", href: "/realisations" },
        ])}
      />
      <PageHero
        eyebrow="Réalisations"
        title="Des résultats qui parlent"
        description="Quelques chantiers avant / après. Cliquez sur une photo pour l'agrandir."
        breadcrumb={[
          { name: "Accueil", href: "/" },
          { name: "Réalisations", href: "/realisations" },
        ]}
      />

      <section className="py-16">
        <Container>
          <Gallery items={realisations} />
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
