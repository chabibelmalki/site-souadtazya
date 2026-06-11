import Link from "next/link";
import {
  ArrowRight,
  ClipboardList,
  CalendarCheck,
  Sparkles,
  MapPin,
  Quote,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CatalogCard } from "@/components/ui/CatalogCard";
import { Gallery } from "@/components/ui/Gallery";
import { Accordion } from "@/components/ui/Accordion";
import { Simulator } from "@/components/Simulator";
import { Hero } from "@/components/sections/Hero";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqJsonLd } from "@/lib/jsonld";
import { faq } from "@/lib/content";
import { catalog } from "@/lib/pricing";
import { realisations } from "@/lib/realisations";
import { site } from "@/lib/site";

const steps = [
  {
    icon: ClipboardList,
    title: "1. Votre demande",
    text: "Vous nous décrivez votre besoin via le devis en ligne, par téléphone ou WhatsApp.",
  },
  {
    icon: CalendarCheck,
    title: "2. Le rendez-vous",
    text: "Nous convenons d'un créneau qui vous arrange et fixons les détails de la prestation.",
  },
  {
    icon: Sparkles,
    title: "3. C'est propre",
    text: "Nous intervenons avec soin. Pour le domicile, vous profitez du crédit d'impôt de 50 %.",
  },
];

const testimonials = [
  {
    quote:
      "Très professionnelle et minutieuse. Ma maison n'a jamais été aussi propre, et le crédit d'impôt rend le service vraiment accessible.",
    name: "Nadia B.",
    city: "Nîmes",
  },
  {
    quote:
      "Intervention de remise en état après nos travaux : impeccable et rapide. Je recommande sans hésiter.",
    name: "Julien M.",
    city: "Caissargues",
  },
  {
    quote:
      "Nous faisons appel à SANAD CLEAN pour nos bureaux chaque semaine. Sérieux, ponctuel et soigné.",
    name: "Cabinet Lestra",
    city: "Nîmes",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqJsonLd()} />
      <Hero />

      {/* Services */}
      <section className="py-16">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Nos prestations"
              title="Un seul prestataire pour tout nettoyer"
              description="Ménage, remise en état, vitres, nuisibles, bureaux : tous vos besoins à Nîmes, avec un seul interlocuteur."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {catalog.map((cat, i) => (
              <Reveal key={cat.id} delay={(i % 3) * 0.05}>
                <CatalogCard category={cat} />
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-10 text-center">
              <Button href="/tarifs" size="lg">
                Voir les tarifs & composer un devis
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Avant / Après */}
      <section className="bg-slate-50 py-16">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Avant / Après"
              title="Des résultats qui parlent"
              description="Un aperçu de nos chantiers de nettoyage et de remise en état."
            />
          </Reveal>
          <div className="mt-12">
            <Gallery items={realisations.slice(0, 3)} />
          </div>
          <Reveal>
            <div className="mt-10 text-center">
              <Button href="/realisations" variant="outline" size="lg">
                Voir toutes les réalisations <ArrowRight className="size-4" />
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Crédit d'impôt + simulateur */}
      <section className="py-16">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <SectionHeading
                align="left"
                eyebrow="Services à la personne"
                title={
                  <>
                    Le ménage à domicile vous coûte{" "}
                    <span className="text-gradient">2 fois moins cher</span>
                  </>
                }
                description="Pour le ménage à votre domicile : 30 €/h facturés, 15 €/h réellement à votre charge."
              />
              <ul className="mt-6 space-y-3">
                {[
                  "50 % de crédit d'impôt sur le ménage à domicile",
                  "Avance immédiate : ne payez tout de suite que la moitié",
                  "Paiement en CESU accepté",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-brand-600 text-white">
                      <ArrowRight className="size-3" />
                    </span>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button href="/credit-impot" variant="outline">
                  Comment ça marche ?
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <Simulator />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Comment ça marche */}
      <section className="bg-slate-50 py-16">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Simple et rapide"
              title="Comment ça se passe"
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.08}>
                <div className="relative h-full rounded-3xl border border-slate-200 bg-white p-7">
                  <span className="grid size-12 place-items-center rounded-2xl bg-brand-50 text-brand-600">
                    <step.icon className="size-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Zone d'intervention */}
      <section className="py-16">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.2fr]">
            <Reveal>
              <SectionHeading
                align="left"
                eyebrow="Zone d'intervention"
                title="À Nîmes et dans tout le Gard rhodanien"
                description="Nous intervenons à Nîmes et dans les communes voisines. Vérifiez votre secteur ou contactez-nous directement."
              />
              <Button href="/zone-intervention" variant="outline" className="mt-6">
                Voir la zone <ArrowRight className="size-4" />
              </Button>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex flex-wrap gap-2.5">
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
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Témoignages */}
      <section className="bg-slate-50 py-16">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Ils nous font confiance"
              title="Ce que disent nos clients"
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.06}>
                <figure className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                  <Quote className="size-8 text-brand-200" />
                  <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-700">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-5 border-t border-slate-100 pt-4">
                    <p className="font-semibold text-ink">{t.name}</p>
                    <p className="text-sm text-slate-500">{t.city}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-slate-400">
            Témoignages présentés à titre d&apos;exemple — à remplacer par de
            vrais avis clients (Google).
          </p>
        </Container>
      </section>

      {/* FAQ aperçu */}
      <section className="py-16">
        <Container className="max-w-3xl">
          <Reveal>
            <SectionHeading
              eyebrow="Questions fréquentes"
              title="Tout savoir avant de commencer"
            />
          </Reveal>
          <Reveal delay={0.05}>
            <div className="mt-10">
              <Accordion items={faq.slice(0, 4)} />
            </div>
          </Reveal>
          <div className="mt-8 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-1 font-semibold text-brand-700 hover:text-brand-800"
            >
              Voir toutes les questions <ArrowRight className="size-4" />
            </Link>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
