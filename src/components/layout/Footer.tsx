import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Logo } from "./Logo";
import { site, telLink, mailLink, waLink } from "@/lib/site";
import { catalog } from "@/lib/pricing";

export function Footer() {
  const year = 2026;
  return (
    <footer className="mt-24 bg-ink text-slate-300">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          <div>
            <Logo variant="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-400">
              Ménage à domicile avec crédit d&apos;impôt, nettoyage de locaux
              professionnels, remise en état et traitement des nuisibles à Nîmes
              et alentours.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white">
                Crédit d&apos;impôt 50 %
              </span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white">
                Devis gratuit
              </span>
            </div>
          </div>

          <nav aria-label="Prestations">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Prestations
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {catalog.slice(0, 6).map((c) => (
                <li key={c.id}>
                  <Link
                    href="/services"
                    className="text-slate-400 transition-colors hover:text-brand-300"
                  >
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Liens utiles">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Le site
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {[
                { href: "/a-propos", label: "À propos" },
                { href: "/tarifs", label: "Tarifs" },
                { href: "/credit-impot", label: "Crédit d'impôt" },
                { href: "/rendez-vous", label: "Prendre rendez-vous" },
                { href: "/zone-intervention", label: "Zone d'intervention" },
                { href: "/faq", label: "FAQ" },
                { href: "/devis", label: "Demander un devis" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-slate-400 transition-colors hover:text-brand-300"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-brand-400" />
                <span className="text-slate-400">
                  {site.address.street}
                  <br />
                  {site.address.postalCode} {site.address.city}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-brand-400" />
                <a href={telLink} className="hover:text-brand-300">
                  {site.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4 shrink-0 text-brand-400" />
                <a href={mailLink} className="break-all hover:text-brand-300">
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="size-4 shrink-0 text-brand-400" />
                <span className="text-slate-400">{site.hours}</span>
              </li>
            </ul>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-white transition-transform hover:scale-105"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName} · SIREN {site.siren} · APE {site.ape}
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/mentions-legales" className="hover:text-slate-300">
              Mentions légales
            </Link>
            <Link href="/confidentialite" className="hover:text-slate-300">
              Confidentialité
            </Link>
            <span>
              Crédit d&apos;impôt via la coopérative {site.sapPartner.name}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
