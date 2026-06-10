import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Phone } from "lucide-react";
import { site, telLink, waLink } from "@/lib/site";

export function CtaBand({
  title = "Prêt à retrouver un intérieur impeccable ?",
  subtitle = "Devis gratuit et sans engagement. Réponse rapide par téléphone, WhatsApp ou e-mail.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="py-20">
      <Container>
        <div className="relative overflow-hidden rounded-4xl bg-brand-gradient px-7 py-14 text-center shadow-2xl shadow-brand-700/20 sm:px-14">
          <div className="hero-mesh pointer-events-none absolute inset-0" aria-hidden />
          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
            <p className="mt-4 text-lg text-brand-50">{subtitle}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/devis" variant="white" size="lg">
                Demander un devis gratuit
              </Button>
              <Button href={telLink} variant="whatsapp" size="lg" className="bg-white/15 text-white hover:bg-white/25">
                <Phone className="size-5" /> {site.phone}
              </Button>
            </div>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm font-medium text-brand-50 underline-offset-4 hover:underline"
            >
              ou écrivez-nous sur WhatsApp →
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
