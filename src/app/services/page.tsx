import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CatalogCard } from "@/components/ui/CatalogCard";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { catalog, categoryEligible } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Services de nettoyage à Nîmes",
  description:
    "Ménage à domicile (crédit d'impôt 50 %), grand nettoyage, remise en état, vitres, canapé, terrasse, jardin, traitement des nuisibles et nettoyage de bureaux à Nîmes.",
  alternates: { canonical: "/services" },
};

const aDomicile = catalog.filter(categoryEligible);
const specialises = catalog.filter((c) => !categoryEligible(c));

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", href: "/" },
          { name: "Services", href: "/services" },
        ])}
      />
      <PageHero
        eyebrow="Nos prestations"
        title="Tout le nettoyage, un seul prestataire"
        description="Du ménage régulier au traitement des nuisibles, SANAD CLEAN intervient avec sérieux et discrétion à Nîmes et alentours. Cliquez sur un service pour voir le détail des tarifs."
        breadcrumb={[
          { name: "Accueil", href: "/" },
          { name: "Services", href: "/services" },
        ]}
      />

      <section className="py-16">
        <Container>
          <Reveal>
            <h2 className="text-2xl font-bold text-ink">
              À domicile
              <span className="ml-3 align-middle text-sm font-semibold text-accent-600">
                Crédit d&apos;impôt 50 %
              </span>
            </h2>
            <p className="mt-2 max-w-2xl text-slate-600">
              Prestations réalisées chez les particuliers, éligibles au crédit
              d&apos;impôt — votre coût réel est divisé par deux.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {aDomicile.map((cat, i) => (
              <Reveal key={cat.id} delay={(i % 3) * 0.05}>
                <CatalogCard category={cat} />
              </Reveal>
            ))}
          </div>

          <Reveal>
            <h2 className="mt-16 text-2xl font-bold text-ink">
              Traitements spécialisés & professionnels
              <span className="ml-3 align-middle text-sm font-semibold text-slate-500">
                Sur devis
              </span>
            </h2>
            <p className="mt-2 max-w-2xl text-slate-600">
              Désinsectisation, assainissement et entretien de locaux
              professionnels — chiffrés sur devis gratuit.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {specialises.map((cat, i) => (
              <Reveal key={cat.id} delay={(i % 3) * 0.05}>
                <CatalogCard category={cat} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
