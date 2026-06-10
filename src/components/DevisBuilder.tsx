"use client";

import { useMemo, useRef, useState } from "react";
import {
  Plus,
  Minus,
  Trash2,
  Check,
  Loader2,
  Phone,
  MessageCircle,
  ShoppingBasket,
  Info,
  Sparkles,
  ArrowDown,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { formatEUR, cn } from "@/lib/utils";
import {
  catalog,
  pricingNotes,
  CREDIT_RATE,
  type Prestation,
} from "@/lib/pricing";
import { site, telLink, waLink } from "@/lib/site";

type SelItem = {
  key: string;
  label: string;
  billed: number | null; // null = sur devis
  creditImpot: boolean;
  qty: number;
};

const inputClass =
  "mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-ink shadow-sm outline-none transition-colors placeholder:text-slate-400 focus:border-brand-400 focus:ring-2 focus:ring-brand-100";

export function DevisBuilder() {
  const [withCredit, setWithCredit] = useState(true);
  const [selection, setSelection] = useState<SelItem[]>([]);

  // forfait horaire
  const [hours, setHours] = useState(2);
  const [material, setMaterial] = useState(false);

  // formulaire
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<number | null>(null);
  const [hourlyAdded, setHourlyAdded] = useState(false);
  const hourlyTimer = useRef<number | null>(null);

  function flash(msg: string) {
    setToast(msg);
    if (toastTimer.current) window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast(null), 2200);
  }

  function scrollToRecap() {
    setToast(null);
    document
      .getElementById("recap")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function scrollToForm() {
    setToast(null);
    document
      .getElementById("devis-form")
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  function addItem(item: Omit<SelItem, "qty">, replace = false) {
    setSelection((prev) => {
      const existing = prev.find((p) => p.key === item.key);
      if (existing) {
        return prev.map((p) =>
          p.key === item.key
            ? { ...p, ...item, qty: replace ? 1 : p.qty + 1 }
            : p
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
    flash("Ajouté à votre devis");
  }

  function changeQty(key: string, delta: number) {
    setSelection((prev) =>
      prev
        .map((p) => (p.key === key ? { ...p, qty: p.qty + delta } : p))
        .filter((p) => p.qty > 0)
    );
  }

  function removeItem(key: string) {
    setSelection((prev) => prev.filter((p) => p.key !== key));
  }

  const hourlyRate = 30 + (material ? 5 : 0);
  const hourlyBilled = hourlyRate * hours;

  function addHourly() {
    addItem(
      {
        key: "menage-regulier",
        label: `Ménage régulier — ${hours} h${
          material ? " (matériel fourni)" : ""
        }`,
        billed: hourlyBilled,
        creditImpot: true,
      },
      true
    );
    setHourlyAdded(true);
    if (hourlyTimer.current) window.clearTimeout(hourlyTimer.current);
    hourlyTimer.current = window.setTimeout(() => setHourlyAdded(false), 1000);
  }

  const itemCount = selection.reduce((n, s) => n + s.qty, 0);

  const totals = useMemo(() => {
    let billed = 0;
    let credit = 0;
    let hasDevis = false;
    for (const it of selection) {
      if (it.billed === null) {
        hasDevis = true;
        continue;
      }
      const line = it.billed * it.qty;
      billed += line;
      if (it.creditImpot) credit += line * CREDIT_RATE;
    }
    return { billed, credit, net: billed - credit, hasDevis };
  }, [selection]);

  async function submit() {
    setError(null);
    if (selection.length === 0) {
      setError("Sélectionnez au moins un service.");
      return;
    }
    if (name.trim().length < 2) return setError("Indiquez votre nom.");
    if (phone.trim().length < 8) return setError("Indiquez un téléphone valide.");
    if (!consent) return setError("Veuillez accepter la politique de confidentialité.");

    setSubmitting(true);
    try {
      const res = await fetch("/api/devis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "devis",
          name,
          phone,
          email,
          city,
          message,
          consent: true,
          withCredit,
          estimateBilled: totals.billed,
          estimateNet: totals.net,
          items: selection.map((s) => ({
            label: s.label,
            qty: s.qty,
            price: s.billed,
          })),
        }),
      });
      if (!res.ok) {
        const d = await res.json().catch(() => ({}));
        throw new Error(d.error ?? "Une erreur est survenue.");
      }
      setDone(true);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Une erreur est survenue.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="pb-20 lg:pb-0">
      {/* Toast de confirmation (mobile) */}
      {toast && (
        <button
          type="button"
          onClick={scrollToRecap}
          className="fixed left-1/2 top-20 z-50 flex -translate-x-1/2 items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-sm font-semibold text-white shadow-xl ring-1 ring-white/10 lg:hidden"
        >
          <Check className="size-4 text-brand-300" />
          {toast}
          <span className="ml-0.5 rounded-full bg-white/15 px-2 py-0.5 text-xs">
            Voir le devis
          </span>
        </button>
      )}

      {/* Barre total épinglée (mobile) — à gauche des boutons flottants */}
      {!done && selection.length > 0 && (
        <button
          type="button"
          onClick={scrollToForm}
          aria-label="Aller au formulaire de demande"
          className="fixed bottom-5 left-4 right-[5.5rem] z-40 flex items-center justify-between gap-3 rounded-full bg-brand-600 px-5 py-3 text-white shadow-xl shadow-brand-700/30 transition-transform active:scale-95 lg:hidden"
        >
          <span className="flex items-center gap-2 text-sm font-semibold">
            <span className="grid size-6 place-items-center rounded-full bg-white/20 text-xs font-bold">
              {itemCount}
            </span>
            article{itemCount > 1 ? "s" : ""}
          </span>
          <span className="flex items-center gap-1.5 text-sm font-bold">
            {formatEUR(withCredit ? totals.net : totals.billed)}
            <ArrowDown className="size-4" />
          </span>
        </button>
      )}

      {/* Bascule crédit d'impôt */}
      <div className="flex flex-col items-start gap-4 rounded-2xl border border-slate-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-2 text-sm text-slate-600">
          <Info className="mt-0.5 size-4 shrink-0 text-brand-600" />
          <p>
            Le <strong>crédit d&apos;impôt de 50 %</strong> s&apos;applique aux
            prestations à domicile éligibles (services à la personne).
          </p>
        </div>
        <div className="flex w-full shrink-0 rounded-full bg-slate-100 p-1 sm:w-auto">
          <button
            type="button"
            onClick={() => setWithCredit(false)}
            className={cn(
              "flex-1 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors sm:flex-none",
              !withCredit ? "bg-white text-ink shadow-sm" : "text-slate-500"
            )}
          >
            Prix normal
          </button>
          <button
            type="button"
            onClick={() => setWithCredit(true)}
            className={cn(
              "flex-1 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors sm:flex-none",
              withCredit ? "bg-brand-600 text-white shadow-sm" : "text-slate-500"
            )}
          >
            Après crédit d&apos;impôt −50 %
          </button>
        </div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_380px]">
        {/* Catalogue */}
        <div className="space-y-10">
          {/* Forfait horaire */}
          <section>
            <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-slate-500">
              <Sparkles className="size-4 text-brand-500" /> Forfait horaire
            </h3>
            <div className="mt-4 rounded-3xl border border-brand-200 bg-white p-6 shadow-sm ring-1 ring-brand-100">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-lg font-bold text-ink">🧹 Ménage régulier</p>
                  <p className="mt-1 text-sm text-slate-500">
                    {formatEUR(30)}/h — matériel fourni par SANAD CLEAN : +5 €/h.
                  </p>
                </div>
                <PriceBadge
                  billed={hourlyRate}
                  unit="/h"
                  creditImpot
                  withCredit={withCredit}
                />
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-4">
                <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 p-1">
                  <button
                    type="button"
                    aria-label="Moins une heure"
                    onClick={() => setHours((h) => Math.max(1, h - 1))}
                    className="grid size-9 place-items-center rounded-full hover:bg-slate-100"
                  >
                    <Minus className="size-4" />
                  </button>
                  <span className="min-w-12 text-center font-semibold text-ink">
                    {hours} h
                  </span>
                  <button
                    type="button"
                    aria-label="Une heure de plus"
                    onClick={() => setHours((h) => Math.min(40, h + 1))}
                    className="grid size-9 place-items-center rounded-full hover:bg-slate-100"
                  >
                    <Plus className="size-4" />
                  </button>
                </div>

                <label className="inline-flex cursor-pointer items-center gap-2 text-sm text-slate-700">
                  <input
                    type="checkbox"
                    checked={material}
                    onChange={(e) => setMaterial(e.target.checked)}
                    className="size-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500"
                  />
                  Matériel fourni (+5 €/h)
                </label>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                <div className="text-sm text-slate-500">
                  Total :{" "}
                  <span className="font-bold text-ink">
                    {formatEUR(
                      withCredit ? hourlyBilled * CREDIT_RATE : hourlyBilled
                    )}
                  </span>
                  {withCredit && (
                    <span className="ml-1 text-slate-400 line-through">
                      {formatEUR(hourlyBilled)}
                    </span>
                  )}
                </div>
                <Button
                  size="sm"
                  onClick={addHourly}
                  className={hourlyAdded ? "bg-emerald-500 hover:bg-emerald-500" : ""}
                >
                  {hourlyAdded ? (
                    <>
                      <Check className="size-4" /> Ajouté
                    </>
                  ) : (
                    <>
                      <Plus className="size-4" /> Ajouter
                    </>
                  )}
                </Button>
              </div>
            </div>
          </section>

          {/* Services à la carte */}
          <section>
            <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-slate-500">
              <ShoppingBasket className="size-4 text-brand-500" /> Services à la
              carte
            </h3>
            <div className="mt-4 space-y-5">
              {catalog
                .map((cat) => ({
                  ...cat,
                  prestations: cat.prestations.filter(
                    (p) => p.id !== "menage-regulier"
                  ),
                }))
                .filter((cat) => cat.prestations.length > 0)
                .map((cat) => (
                  <div
                    key={cat.id}
                    className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <h4 className="text-base font-bold text-ink">
                        <span className="mr-1.5">{cat.emoji}</span>
                        {cat.title}
                      </h4>
                      {cat.prestations[0].creditImpot ? (
                        <span className="rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-accent-600 ring-1 ring-inset ring-amber-200">
                          −50 % crédit d&apos;impôt
                        </span>
                      ) : (
                        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-500">
                          Non éligible
                        </span>
                      )}
                    </div>

                    {cat.prestations.map((p) => (
                      <PrestationTiers
                        key={p.id}
                        prestation={p}
                        categoryTitle={cat.title}
                        withCredit={withCredit}
                        onAdd={addItem}
                      />
                    ))}
                  </div>
                ))}
            </div>

            <ul className="mt-5 space-y-1 text-sm text-slate-500">
              {pricingNotes.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          </section>
        </div>

        {/* Récapitulatif */}
        <div id="recap" className="lg:sticky lg:top-24 lg:self-start">
          {done ? (
            <div className="rounded-3xl border border-brand-200 bg-brand-50/50 p-7 text-center">
              <span className="mx-auto grid size-14 place-items-center rounded-full bg-brand-600 text-white">
                <Check className="size-7" />
              </span>
              <h3 className="mt-4 text-xl font-bold text-ink">
                Demande envoyée !
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Merci, votre sélection a été transmise à SANAD CLEAN. Vous serez
                recontacté rapidement.
              </p>
              <div className="mt-5 flex flex-col gap-2">
                <Button href={telLink} variant="outline" size="sm">
                  <Phone className="size-4" /> {site.phone}
                </Button>
                <Button href={waLink()} variant="whatsapp" size="sm">
                  <MessageCircle className="size-4" /> WhatsApp
                </Button>
              </div>
            </div>
          ) : (
            <div className="rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center gap-2 border-b border-slate-100 px-6 py-4">
                <ShoppingBasket className="size-5 text-brand-600" />
                <h3 className="font-bold text-ink">Votre sélection</h3>
                {selection.length > 0 && (
                  <span className="ml-auto rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-bold text-brand-700">
                    {selection.reduce((n, s) => n + s.qty, 0)}
                  </span>
                )}
              </div>

              <div className="max-h-72 overflow-y-auto px-6 py-4">
                {selection.length === 0 ? (
                  <p className="py-6 text-center text-sm text-slate-400">
                    Ajoutez des services pour construire votre devis.
                  </p>
                ) : (
                  <ul className="space-y-3">
                    {selection.map((it) => (
                      <li key={it.key} className="flex items-start gap-2 text-sm">
                        <div className="flex-1">
                          <p className="font-medium text-ink">{it.label}</p>
                          <p className="text-slate-500">
                            {it.billed === null
                              ? "Sur devis"
                              : formatEUR(
                                  (withCredit && it.creditImpot
                                    ? it.billed * CREDIT_RATE
                                    : it.billed) * it.qty
                                )}
                          </p>
                        </div>
                        <div className="flex items-center gap-1">
                          <button
                            type="button"
                            aria-label="Retirer un"
                            onClick={() => changeQty(it.key, -1)}
                            className="grid size-6 place-items-center rounded-md text-slate-500 hover:bg-slate-100"
                          >
                            <Minus className="size-3.5" />
                          </button>
                          <span className="w-5 text-center text-xs font-semibold">
                            {it.qty}
                          </span>
                          <button
                            type="button"
                            aria-label="Ajouter un"
                            onClick={() => changeQty(it.key, 1)}
                            className="grid size-6 place-items-center rounded-md text-slate-500 hover:bg-slate-100"
                          >
                            <Plus className="size-3.5" />
                          </button>
                          <button
                            type="button"
                            aria-label="Supprimer"
                            onClick={() => removeItem(it.key)}
                            className="ml-1 grid size-6 place-items-center rounded-md text-red-400 hover:bg-red-50"
                          >
                            <Trash2 className="size-3.5" />
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {selection.length > 0 && (
                <div className="space-y-1.5 border-t border-slate-100 px-6 py-4 text-sm">
                  <div className="flex justify-between text-slate-500">
                    <span>Sous-total</span>
                    <span>{formatEUR(totals.billed)}</span>
                  </div>
                  {withCredit && totals.credit > 0 && (
                    <div className="flex justify-between text-accent-600">
                      <span>Crédit d&apos;impôt −50 %</span>
                      <span>− {formatEUR(totals.credit)}</span>
                    </div>
                  )}
                  <div className="flex justify-between pt-1 text-base font-bold text-ink">
                    <span>{withCredit ? "À votre charge" : "Total"}</span>
                    <span>{formatEUR(withCredit ? totals.net : totals.billed)}</span>
                  </div>
                  {totals.hasDevis && (
                    <p className="pt-1 text-xs text-slate-400">
                      + certains services sur devis (chiffrés après visite).
                    </p>
                  )}
                </div>
              )}

              {/* Coordonnées */}
              <div
                id="devis-form"
                className="space-y-3 border-t border-slate-100 px-6 py-5"
              >
                <div className="grid grid-cols-2 gap-3">
                  <input
                    className={inputClass}
                    placeholder="Nom *"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    className={inputClass}
                    placeholder="Téléphone *"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <input
                  className={inputClass}
                  placeholder="E-mail (facultatif)"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <select
                  className={inputClass}
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                >
                  <option value="">Votre ville…</option>
                  {site.serviceAreas.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                  <option value="Autre commune">Autre commune</option>
                </select>
                <textarea
                  className={cn(inputClass, "resize-y")}
                  rows={2}
                  placeholder="Précisions (facultatif)"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <label className="flex items-start gap-2 text-xs text-slate-500">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-0.5 size-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500"
                  />
                  <span>
                    J&apos;accepte la{" "}
                    <a
                      href="/confidentialite"
                      className="font-medium text-brand-700 hover:underline"
                    >
                      politique de confidentialité
                    </a>
                    . *
                  </span>
                </label>

                {error && (
                  <p className="rounded-lg bg-red-50 px-3 py-2 text-xs text-red-600">
                    {error}
                  </p>
                )}

                <Button
                  size="lg"
                  className="w-full"
                  onClick={submit}
                  disabled={submitting}
                >
                  {submitting ? (
                    <>
                      <Loader2 className="size-5 animate-spin" /> Envoi…
                    </>
                  ) : (
                    "Demander une intervention"
                  )}
                </Button>
                <p className="text-center text-xs text-slate-400">
                  Gratuit et sans engagement · Réponse rapide
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* --- Prix affiché (badge) --- */
function PriceBadge({
  billed,
  unit = "",
  creditImpot,
  withCredit,
}: {
  billed: number;
  unit?: string;
  creditImpot: boolean;
  withCredit: boolean;
}) {
  const showNet = withCredit && creditImpot;
  return (
    <div className="text-right">
      <p className="text-2xl font-extrabold text-brand-700">
        {formatEUR(showNet ? billed * CREDIT_RATE : billed)}
        <span className="text-sm font-medium text-slate-400">{unit}</span>
      </p>
      {showNet && (
        <p className="text-xs text-slate-400 line-through">
          {formatEUR(billed)}
          {unit}
        </p>
      )}
    </div>
  );
}

/* --- Bouton "+" avec animation de confirmation (+ → ✓ pendant 1 s) --- */
function AddButton({
  onClick,
  label,
}: {
  onClick: () => void;
  label: string;
}) {
  const [added, setAdded] = useState(false);
  const timer = useRef<number | null>(null);
  function handle() {
    onClick();
    setAdded(true);
    if (timer.current) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setAdded(false), 1000);
  }
  return (
    <button
      type="button"
      aria-label={label}
      onClick={handle}
      className={cn(
        "grid size-10 shrink-0 place-items-center rounded-full text-white transition-all duration-200",
        added ? "scale-110 bg-emerald-500" : "bg-brand-600 hover:bg-brand-700"
      )}
    >
      {added ? <Check className="size-4" /> : <Plus className="size-4" />}
    </button>
  );
}

/* --- Lignes de paliers d'une prestation --- */
function PrestationTiers({
  prestation,
  categoryTitle,
  withCredit,
  onAdd,
}: {
  prestation: Prestation;
  categoryTitle: string;
  withCredit: boolean;
  onAdd: (item: Omit<SelItem, "qty">) => void;
}) {
  if (prestation.kind !== "tiers") return null;
  const contextName = prestation.name || categoryTitle;
  return (
    <div className="mt-4">
      {prestation.name && (
        <p className="mb-2 text-sm font-semibold text-slate-700">
          {prestation.name}
        </p>
      )}
      <div className="grid gap-2 sm:grid-cols-2">
        {prestation.tiers.map((t) => {
          const eligible = prestation.creditImpot && withCredit;
          const net = t.price !== null ? t.price * CREDIT_RATE : null;
          return (
            <div
              key={t.label}
              className="flex items-center justify-between gap-2 rounded-xl border border-slate-100 bg-slate-50/60 px-3 py-2"
            >
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-ink">
                  {t.label}
                </p>
                <p className="text-xs text-slate-500">
                  {t.price === null ? (
                    "Sur devis"
                  ) : (
                    <>
                      {t.from && "dès "}
                      <span
                        className={eligible ? "text-brand-700 font-semibold" : ""}
                      >
                        {formatEUR(eligible ? (net as number) : t.price)}
                      </span>
                      {eligible && (
                        <span className="ml-1 text-slate-400 line-through">
                          {formatEUR(t.price)}
                        </span>
                      )}
                    </>
                  )}
                </p>
              </div>
              <AddButton
                label={`Ajouter ${t.label}`}
                onClick={() =>
                  onAdd({
                    key: `${prestation.id}::${t.label}`,
                    label: `${contextName} — ${t.label}`,
                    billed: t.price,
                    creditImpot: prestation.creditImpot,
                  })
                }
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
