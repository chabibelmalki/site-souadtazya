import type { Metadata } from "next";
import Image from "next/image";
import { Heart, ShieldCheck, Leaf, Clock, BadgeCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "À propos de SANAD CLEAN",
  description:
    "SANAD CLEAN, entreprise de nettoyage à Nîmes fondée par Souad Tazya, femme de ménage indépendante. Sérieux, discrétion et soin du détail pour les particuliers et les professionnels.",
  alternates: { canonical: "/a-propos" },
};

const values = [
  {
    icon: ShieldCheck,
    title: "Confiance & discrétion",
    text: "Nous entrons chez vous avec respect. Sérieux, ponctualité et discrétion sont notre marque de fabrique.",
  },
  {
    icon: Heart,
    title: "Le soin du détail",
    text: "Chaque recoin compte. Nous prenons le temps de bien faire, comme si c'était chez nous.",
  },
  {
    icon: Leaf,
    title: "Produits adaptés",
    text: "Sur demande, nous utilisons des produits respectueux de votre intérieur, des enfants et des animaux.",
  },
  {
    icon: Clock,
    title: "Disponible 24h/24, 7j/7",
    text: "Prestations ponctuelles ou régulières, à l'horaire qui vous arrange — y compris les urgences.",
  },
];

export default function AProposPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", href: "/" },
          { name: "À propos", href: "/a-propos" },
        ])}
      />
      <PageHero
        eyebrow="À propos"
        title="SANAD CLEAN, le nettoyage de confiance à Nîmes"
        description="Une entreprise à taille humaine, attentive et rigoureuse, au service des particuliers et des professionnels."
        breadcrumb={[
          { name: "Accueil", href: "/" },
          { name: "À propos", href: "/a-propos" },
        ]}
      />

      {/* Portrait + présentation */}
      <section className="py-16">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[400px_1fr] lg:gap-16">
            <Reveal>
              <div className="relative mx-auto max-w-xs sm:max-w-sm">
                <div className="absolute -inset-3 -z-10 rounded-[2.5rem] bg-brand-200/50 blur-2xl" />
                <div className="overflow-hidden rounded-[2rem] border border-white/70 shadow-2xl shadow-brand-700/15">
                  <Image
                    src="/souad-tazya.jpg"
                    alt="Souad Tazya, fondatrice de SANAD CLEAN, en tenue professionnelle de femme de ménage indépendante"
                    width={800}
                    height={1485}
                    priority
                    className="h-auto w-full"
                    sizes="(max-width: 1024px) 80vw, 400px"
                  />
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white px-5 py-2 text-center shadow-lg ring-1 ring-slate-100">
                  <p className="text-sm font-bold text-ink">Souad Tazya</p>
                  <p className="text-xs text-brand-600">Fondatrice de SANAD CLEAN</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <Badge variant="accent" className="mb-4">
                <BadgeCheck className="size-3.5" />
                Femme de ménage indépendante
              </Badge>
              <h2 className="text-3xl font-bold text-ink">
                Le nettoyage, mon métier et ma fierté
              </h2>
              <div className="mt-5 space-y-4 text-lg leading-relaxed text-slate-700">
                <p>
                  Je suis <strong>Souad Tazya</strong>, fondatrice de SANAD
                  CLEAN. J&apos;ai fait du nettoyage bien plus qu&apos;un
                  métier : une véritable passion du travail soigné. En tant que
                  professionnelle indépendante, je m&apos;investis
                  personnellement dans chaque intervention, à {site.address.city}{" "}
                  et dans les communes alentours.
                </p>
                <p>
                  J&apos;accompagne aussi bien les <strong>particuliers</strong>{" "}
                  — avec le ménage à domicile éligible au crédit d&apos;impôt de
                  50 % — que les <strong>professionnels</strong> : bureaux,
                  commerces, remise en état, vitres, traitement des nuisibles et
                  bien plus. Tenue professionnelle, matériel adapté et produits
                  respectueux sur demande : tout est pensé pour votre confort et
                  votre tranquillité.
                </p>
                <p>
                  Mon engagement : un intérieur impeccable, dans le respect, la
                  discrétion et la confiance. Pour le ménage à domicile, je
                  travaille avec la coopérative{" "}
                  <strong>{site.sapPartner.name}</strong>, déclarée services à la
                  personne, pour vous faire bénéficier simplement de votre
                  avantage fiscal.
                </p>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <Button href="/devis">Demander un devis gratuit</Button>
                <Button href="/services" variant="outline">
                  Découvrir mes services
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Valeurs */}
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.05}>
                <div className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6">
                  <span className="grid size-12 place-items-center rounded-2xl bg-brand-50 text-brand-600">
                    <v.icon className="size-6" />
                  </span>
                  <h3 className="mt-4 font-bold text-ink">{v.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                    {v.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
