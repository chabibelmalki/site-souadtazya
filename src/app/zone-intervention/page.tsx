import type { Metadata } from "next";
import { MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { site, telLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Zone d'intervention à Nîmes et alentours",
  description:
    "SANAD CLEAN intervient à Nîmes, Caissargues, Marguerittes, Saint-Gilles, Bouillargues, Manduel, Milhaud et les communes voisines du Gard.",
  alternates: { canonical: "/zone-intervention" },
};

export default function ZonePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", href: "/" },
          { name: "Zone d'intervention", href: "/zone-intervention" },
        ])}
      />
      <PageHero
        eyebrow="Zone d'intervention"
        title="Nous intervenons à Nîmes et dans le Gard"
        description="Basés à Nîmes, nous nous déplaçons dans toute l'agglomération et les communes alentours. Votre ville n'est pas dans la liste ? Contactez-nous, c'est peut-être possible."
        breadcrumb={[
          { name: "Accueil", href: "/" },
          { name: "Zone d'intervention", href: "/zone-intervention" },
        ]}
      />

      <section className="py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
            <Reveal>
              <MapEmbed />
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-2xl font-bold text-ink">
                Communes desservies
              </h2>
              <p className="mt-2 text-slate-600">
                Liste non exhaustive — n&apos;hésitez pas à nous demander pour
                votre secteur.
              </p>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {site.serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
                  >
                    <MapPin className="size-3.5 text-brand-500" />
                    {area}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/devis">Vérifier ma disponibilité</Button>
                <Button href={telLink} variant="outline">
                  <Phone className="size-4" /> {site.phone}
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
