"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, Phone, MessageCircle } from "lucide-react";
import { leadSchema, serviceOptions, type LeadInput } from "@/lib/lead-schema";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { site, telLink, waLink } from "@/lib/site";

const labelClass = "block text-sm font-medium text-slate-700";
const inputClass =
  "mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-ink shadow-sm outline-none transition-colors placeholder:text-slate-400 focus:border-brand-400 focus:ring-2 focus:ring-brand-100";
const errorClass = "mt-1 text-xs font-medium text-red-500";

export function LeadForm({ type = "devis" }: { type?: "devis" | "contact" }) {
  const [done, setDone] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LeadInput>({
    resolver: zodResolver(leadSchema),
    defaultValues: { type, consent: false },
  });

  async function onSubmit(values: LeadInput) {
    setServerError(null);
    try {
      const res = await fetch("/api/devis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Une erreur est survenue.");
      }
      setDone(true);
    } catch (err) {
      setServerError(
        err instanceof Error ? err.message : "Une erreur est survenue."
      );
    }
  }

  if (done) {
    return (
      <div className="rounded-3xl border border-brand-200 bg-brand-50/50 p-8 text-center sm:p-12">
        <span className="mx-auto grid size-16 place-items-center rounded-full bg-brand-600 text-white">
          <CheckCircle2 className="size-8" />
        </span>
        <h3 className="mt-5 text-2xl font-bold text-ink">Message envoyé !</h3>
        <p className="mx-auto mt-2 max-w-md text-slate-600">
          Merci, votre demande a bien été transmise. Nous vous recontactons très
          rapidement. Pour une réponse immédiate, appelez-nous ou écrivez sur
          WhatsApp.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href={telLink} variant="outline">
            <Phone className="size-4" /> {site.phone}
          </Button>
          <Button href={waLink()} variant="whatsapp">
            <MessageCircle className="size-4" /> WhatsApp
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <input type="hidden" {...register("type")} value={type} />

      {/* Honeypot anti-spam */}
      <div className="absolute left-[-9999px]" aria-hidden>
        <label>
          Ne pas remplir
          <input tabIndex={-1} autoComplete="off" {...register("company")} />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Nom complet *
          </label>
          <input
            id="name"
            className={inputClass}
            placeholder="Prénom Nom"
            {...register("name")}
          />
          {errors.name && <p className={errorClass}>{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            Téléphone *
          </label>
          <input
            id="phone"
            type="tel"
            className={inputClass}
            placeholder="06 12 34 56 78"
            {...register("phone")}
          />
          {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            E-mail
          </label>
          <input
            id="email"
            type="email"
            className={inputClass}
            placeholder="vous@exemple.fr"
            {...register("email")}
          />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="city" className={labelClass}>
            Ville
          </label>
          <select id="city" className={inputClass} defaultValue="" {...register("city")}>
            <option value="">Choisir votre ville…</option>
            {site.serviceAreas.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
            <option value="Autre commune">Autre commune</option>
          </select>
        </div>

        {type === "devis" && (
          <div className="sm:col-span-2">
            <label htmlFor="service" className={labelClass}>
              Prestation souhaitée
            </label>
            <select id="service" className={inputClass} {...register("service")}>
              <option value="">Choisir…</option>
              {serviceOptions.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelClass}>
            {type === "devis"
              ? "Détails de votre besoin"
              : "Votre message"}
          </label>
          <textarea
            id="message"
            rows={4}
            className={cn(inputClass, "resize-y")}
            placeholder={
              type === "devis"
                ? "Surface, fréquence souhaitée, type de logement…"
                : "Votre message…"
            }
            {...register("message")}
          />
        </div>
      </div>

      <div className="mt-5 flex items-start gap-3">
        <input
          id="consent"
          type="checkbox"
          className="mt-1 size-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500"
          {...register("consent")}
        />
        <label htmlFor="consent" className="text-sm text-slate-600">
          J&apos;accepte que mes informations soient utilisées pour traiter ma
          demande, conformément à la{" "}
          <a
            href="/confidentialite"
            className="font-medium text-brand-700 hover:underline"
          >
            politique de confidentialité
          </a>
          . *
        </label>
      </div>
      {errors.consent && <p className={errorClass}>{errors.consent.message}</p>}

      {serverError && (
        <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
          {serverError}
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="mt-6 w-full"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="size-5 animate-spin" /> Envoi…
          </>
        ) : type === "devis" ? (
          "Envoyer ma demande de devis"
        ) : (
          "Envoyer le message"
        )}
      </Button>
      <p className="mt-3 text-center text-xs text-slate-400">
        Réponse rapide · Gratuit et sans engagement
      </p>
    </form>
  );
}
