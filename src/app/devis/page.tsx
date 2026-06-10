import type { Metadata } from "next";
import { Phone, MessageCircle, Clock, ShieldCheck, Receipt } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { LeadForm } from "@/components/LeadForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { site, telLink, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Demande de devis gratuit",
  description:
    "Demandez votre devis gratuit et sans engagement pour un ménage à domicile, un nettoyage de locaux ou une remise en état à Nîmes. Réponse rapide.",
  alternates: { canonical: "/devis" },
};

const reassurance = [
  { icon: Clock, text: "Réponse rapide" },
  { icon: Receipt, text: "Crédit d'impôt 50 % (domicile)" },
  { icon: ShieldCheck, text: "Sans engagement" },
];

export default function DevisPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", href: "/" },
          { name: "Devis", href: "/devis" },
        ])}
      />
      <PageHero
        eyebrow="Devis gratuit"
        title="Demandez votre devis en 1 minute"
        description="Décrivez-nous votre besoin : nous vous répondons rapidement avec une estimation claire et adaptée."
        breadcrumb={[
          { name: "Accueil", href: "/" },
          { name: "Devis", href: "/devis" },
        ]}
      />

      <section className="py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
            <Reveal>
              <LeadForm type="devis" />
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-6">
                <div className="rounded-3xl bg-brand-gradient p-7 text-white">
                  <h2 className="font-display text-xl font-bold">
                    Vous préférez parler ?
                  </h2>
                  <p className="mt-2 text-sm text-brand-50">
                    Nous sommes joignables directement, du lundi au samedi.
                  </p>
                  <div className="mt-5 space-y-3">
                    <a
                      href={telLink}
                      className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 transition-colors hover:bg-white/20"
                    >
                      <Phone className="size-5" />
                      <span className="font-semibold">{site.phone}</span>
                    </a>
                    <a
                      href={waLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 transition-colors hover:bg-white/20"
                    >
                      <MessageCircle className="size-5" />
                      <span className="font-semibold">WhatsApp</span>
                    </a>
                  </div>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-7">
                  <ul className="space-y-4">
                    {reassurance.map((r) => (
                      <li key={r.text} className="flex items-center gap-3">
                        <span className="grid size-10 place-items-center rounded-xl bg-brand-50 text-brand-600">
                          <r.icon className="size-5" />
                        </span>
                        <span className="font-medium text-slate-700">
                          {r.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
