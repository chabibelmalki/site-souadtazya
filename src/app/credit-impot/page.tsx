import type { Metadata } from "next";
import {
  Receipt,
  Wallet,
  Clock,
  Building,
  Check,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Simulator } from "@/components/Simulator";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";
import { faq } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Crédit d'impôt 50 % pour le ménage à domicile",
  description:
    "Avec SANAD CLEAN et la coopérative Accès SAP, profitez du crédit d'impôt de 50 % sur le ménage à domicile : 30 €/h facturés, 15 €/h réellement à votre charge grâce à l'avance immédiate.",
  alternates: { canonical: "/credit-impot" },
};

const benefits = [
  {
    icon: Receipt,
    title: "50 % de crédit d'impôt",
    text: "Sur l'ensemble de vos dépenses de ménage à domicile, dans la limite de 12 000 € par an et par foyer fiscal.",
  },
  {
    icon: Wallet,
    title: "Avance immédiate",
    text: "Vous ne payez tout de suite que la moitié restant à votre charge, sans attendre votre déclaration d'impôts.",
  },
  {
    icon: Clock,
    title: "Sans avance de trésorerie",
    text: "Plus besoin d'attendre le remboursement de l'année suivante : l'économie est immédiate.",
  },
  {
    icon: Building,
    title: "Via Accès SAP",
    text: "SANAD CLEAN travaille avec la coopérative Accès SAP, déclarée services à la personne, qui ouvre ce droit à ses clients.",
  },
];

const steps = [
  "Vous réservez une prestation de ménage à votre domicile.",
  "La prestation est facturée via la coopérative Accès SAP, déclarée SAP.",
  "L'avance immédiate déduit automatiquement 50 % du montant.",
  "Vous ne réglez que le reste à charge — par exemple 15 €/h au lieu de 30 €/h.",
];

export default function CreditImpotPage() {
  return (
    <>
      <JsonLd
        data={[
          faqJsonLd(),
          breadcrumbJsonLd([
            { name: "Accueil", href: "/" },
            { name: "Crédit d'impôt", href: "/credit-impot" },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Services à la personne"
        title="Le ménage à domicile, divisé par deux"
        description="Grâce au crédit d'impôt de 50 % et à l'avance immédiate, vos prestations de ménage à domicile ne vous coûtent que la moitié. On vous explique tout simplement."
        breadcrumb={[
          { name: "Accueil", href: "/" },
          { name: "Crédit d'impôt", href: "/credit-impot" },
        ]}
      />

      {/* Avantages */}
      <section className="py-16">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.05}>
                <div className="flex h-full gap-4 rounded-3xl border border-slate-200 bg-white p-6">
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-600">
                    <b.icon className="size-6" />
                  </span>
                  <div>
                    <h3 className="font-bold text-ink">{b.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      {b.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Comment ça marche + simulateur */}
      <section className="bg-slate-50 py-16">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <Reveal>
              <SectionHeading
                align="left"
                eyebrow="Étape par étape"
                title="Comment fonctionne le dispositif"
              />
              <ol className="mt-8 space-y-5">
                {steps.map((step, i) => (
                  <li key={step} className="flex gap-4">
                    <span className="grid size-8 shrink-0 place-items-center rounded-full bg-brand-600 text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <p className="pt-1 text-slate-700">{step}</p>
                  </li>
                ))}
              </ol>
              <div className="mt-8 rounded-2xl border border-amber-100 bg-amber-50 p-5">
                <p className="text-sm text-amber-800">
                  <strong>Bon à savoir :</strong> le crédit d&apos;impôt
                  concerne uniquement les prestations à votre{" "}
                  <strong>domicile</strong>. Le nettoyage de locaux
                  professionnels n&apos;y ouvre pas droit.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <Simulator />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Exemple chiffré */}
      <section className="py-16">
        <Container className="max-w-4xl">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-slate-200">
              <div className="grid sm:grid-cols-3">
                <div className="border-b border-slate-200 p-7 text-center sm:border-b-0 sm:border-r">
                  <p className="text-sm text-slate-500">Tarif facturé</p>
                  <p className="mt-2 text-3xl font-extrabold text-slate-400 line-through">
                    30 €/h
                  </p>
                </div>
                <div className="border-b border-slate-200 p-7 text-center sm:border-b-0 sm:border-r">
                  <p className="text-sm text-slate-500">Crédit d&apos;impôt</p>
                  <p className="mt-2 text-3xl font-extrabold text-accent-600">
                    − 50 %
                  </p>
                </div>
                <div className="bg-brand-gradient p-7 text-center text-white">
                  <p className="text-sm text-brand-50">Votre coût réel</p>
                  <p className="mt-2 text-3xl font-extrabold">15 €/h</p>
                </div>
              </div>
            </div>
          </Reveal>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Paiement en CESU accepté",
              "Attestation fiscale fournie chaque année",
              "Aucune avance de trésorerie",
              `Plafond de 12 000 € de dépenses / an`,
            ].map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-slate-700">
                <Check className="size-4 shrink-0 text-brand-500" />
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-16">
        <Container className="max-w-3xl">
          <Reveal>
            <SectionHeading
              eyebrow="Vos questions"
              title="Le crédit d'impôt en clair"
            />
          </Reveal>
          <Reveal delay={0.05}>
            <div className="mt-10">
              <Accordion items={faq.slice(0, 5)} />
            </div>
          </Reveal>
          <p className="mt-6 text-center text-xs text-slate-400">
            Information donnée à titre indicatif. Dispositif géré via la
            coopérative {site.sapPartner.name}. Pour les détails officiels, voir
            urssaf.fr et servicesalapersonne.gouv.fr.
          </p>
        </Container>
      </section>

      <CtaBand title="Profitez du crédit d'impôt dès votre première prestation" />
    </>
  );
}
