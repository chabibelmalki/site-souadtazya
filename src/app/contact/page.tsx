import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { LeadForm } from "@/components/LeadForm";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { site, telLink, mailLink, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez SANAD CLEAN à Nîmes : téléphone, e-mail, WhatsApp. Devis gratuit pour vos besoins de ménage et de nettoyage.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const coords = [
    { icon: Phone, label: site.phone, href: telLink },
    { icon: MessageCircle, label: "WhatsApp", href: waLink() },
    { icon: Mail, label: site.email, href: mailLink },
  ];

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", href: "/" },
          { name: "Contact", href: "/contact" },
        ])}
      />
      <PageHero
        eyebrow="Contact"
        title="Parlons de votre besoin"
        description="Une question, un projet ? Écrivez-nous ou appelez-nous, nous vous répondons avec plaisir."
        breadcrumb={[
          { name: "Accueil", href: "/" },
          { name: "Contact", href: "/contact" },
        ]}
      />

      <section className="py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
            <Reveal>
              <div className="space-y-4">
                {coords.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition-colors hover:border-brand-300 hover:bg-brand-50/40"
                  >
                    <span className="grid size-11 place-items-center rounded-xl bg-brand-50 text-brand-600">
                      <c.icon className="size-5" />
                    </span>
                    <span className="font-semibold text-ink">{c.label}</span>
                  </a>
                ))}

                <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                    <MapPin className="size-5" />
                  </span>
                  <span className="text-slate-700">
                    {site.address.street}
                    <br />
                    {site.address.postalCode} {site.address.city}
                  </span>
                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5">
                  <span className="grid size-11 place-items-center rounded-xl bg-brand-50 text-brand-600">
                    <Clock className="size-5" />
                  </span>
                  <span className="text-slate-700">{site.hours}</span>
                </div>

                <MapEmbed height={224} className="rounded-2xl" />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <LeadForm type="contact" />
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
