import {
  ShieldCheck,
  Star,
  Sparkles,
  Phone,
  Receipt,
  Clock,
  MapPin,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { site, telLink } from "@/lib/site";

const trust = [
  { icon: Receipt, label: "Crédit d'impôt 50 %" },
  { icon: Clock, label: "Disponible 24h/24, 7j/7" },
  { icon: ShieldCheck, label: "Pro de confiance" },
  { icon: MapPin, label: "Nîmes & alentours" },
];

export function Hero() {
  return (
    <section className="hero-mesh relative overflow-hidden">
      <Container className="relative grid items-center gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
        <div>
          <Reveal>
            <Badge variant="accent" className="mb-5">
              <Sparkles className="size-3.5" />
              Entreprise de nettoyage à Nîmes
            </Badge>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="text-4xl font-extrabold leading-[1.08] text-ink sm:text-5xl lg:text-6xl">
              Un intérieur impeccable,
              <br />à partir de{" "}
              <span className="text-gradient">15 €/h</span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              Ménage à domicile avec <strong>crédit d&apos;impôt de 50 %</strong>,
              nettoyage de locaux, remise en état et traitement des nuisibles à
              Nîmes. On s&apos;occupe de tout.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/devis" size="lg">
                Demander un devis gratuit
              </Button>
              <Button href={telLink} variant="outline" size="lg">
                <Phone className="size-5" /> {site.phone}
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
              {trust.map((t) => (
                <li key={t.label} className="flex items-center gap-2.5">
                  <span className="grid size-9 place-items-center rounded-xl bg-white text-brand-600 shadow-sm ring-1 ring-slate-100">
                    <t.icon className="size-4.5" />
                  </span>
                  <span className="text-sm font-medium text-slate-700">
                    {t.label}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Carte visuelle */}
        <Reveal delay={0.15} className="relative">
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-brand-200/40 blur-2xl" />
            <div className="overflow-hidden rounded-[2rem] border border-white/60 bg-white/70 shadow-2xl shadow-brand-700/10 backdrop-blur">
              <div className="bg-brand-gradient p-8 text-white">
                <p className="text-sm font-medium text-brand-50">
                  Ménage à domicile
                </p>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-5xl font-extrabold">15 €</span>
                  <span className="text-brand-100">/ heure</span>
                </div>
                <p className="mt-1 text-sm text-brand-100">
                  après crédit d&apos;impôt&nbsp;
                  <span className="line-through opacity-70">30 €/h</span>
                </p>
              </div>
              <div className="space-y-4 p-8">
                {[
                  "Disponible 24h/24, 7j/7",
                  "Devis gratuit sous 24 h",
                  "Personnel de confiance",
                  "Produits adaptés à votre logement",
                  "Paiement CESU accepté",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="grid size-7 place-items-center rounded-full bg-brand-50 text-brand-600">
                      <ShieldCheck className="size-4" />
                    </span>
                    <span className="text-sm font-medium text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
                <div className="flex items-center gap-1 border-t border-slate-100 pt-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="size-4 fill-accent-400 text-accent-400"
                    />
                  ))}
                  <span className="ml-2 text-sm text-slate-500">
                    Clients satisfaits à Nîmes
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
