"use client";

import { useState } from "react";
import { Sparkles, TrendingDown } from "lucide-react";
import { pricing } from "@/lib/content";
import { formatEUR } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const WEEKS_PER_MONTH = 4.33;

export function Simulator({ compact = false }: { compact?: boolean }) {
  const [hoursPerWeek, setHoursPerWeek] = useState(3);

  const monthlyHours = hoursPerWeek * WEEKS_PER_MONTH;
  const billedMonthly = monthlyHours * pricing.domicileSAP;
  const netMonthly = monthlyHours * pricing.domicileSAPNet;
  const savedMonthly = billedMonthly - netMonthly;
  const savedYearly = savedMonthly * 12;
  const overCeiling = billedMonthly * 12 > pricing.creditCeiling;

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-brand-600/5">
      <div className="bg-brand-gradient px-7 py-5">
        <div className="flex items-center gap-2 text-white">
          <Sparkles className="size-5" />
          <h3 className="font-display text-lg font-bold">
            Simulateur crédit d&apos;impôt
          </h3>
        </div>
        <p className="mt-1 text-sm text-brand-50">
          Estimez votre coût réel après les 50 % de crédit d&apos;impôt.
        </p>
      </div>

      <div className="p-7">
        <label
          htmlFor="hours"
          className="flex items-end justify-between text-sm font-medium text-slate-700"
        >
          Heures de ménage par semaine
          <span className="text-2xl font-bold text-brand-700">
            {hoursPerWeek} h
          </span>
        </label>
        <input
          id="hours"
          type="range"
          min={1}
          max={15}
          step={1}
          value={hoursPerWeek}
          onChange={(e) => setHoursPerWeek(Number(e.target.value))}
          className="mt-3 w-full accent-brand-600"
        />
        <div className="mt-1 flex justify-between text-xs text-slate-400">
          <span>1 h</span>
          <span>15 h</span>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
              Prix facturé / mois
            </p>
            <p className="mt-1 text-xl font-bold text-slate-400 line-through">
              {formatEUR(Math.round(billedMonthly))}
            </p>
          </div>
          <div className="rounded-2xl bg-brand-50 p-4 ring-1 ring-brand-100">
            <p className="text-xs font-medium uppercase tracking-wide text-brand-600">
              Votre coût réel / mois
            </p>
            <p className="mt-1 text-xl font-bold text-brand-700">
              {formatEUR(Math.round(netMonthly))}
            </p>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-3 rounded-2xl bg-amber-50 p-4 ring-1 ring-amber-100">
          <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-accent-500 text-white">
            <TrendingDown className="size-5" />
          </span>
          <div>
            <p className="text-sm text-amber-700">
              Vous économisez{" "}
              <span className="font-bold">
                {formatEUR(Math.round(savedYearly))}
              </span>{" "}
              par an
            </p>
            <p className="text-xs text-amber-600">
              grâce au crédit d&apos;impôt de 50 %
            </p>
          </div>
        </div>

        {overCeiling && (
          <p className="mt-3 text-xs text-slate-500">
            ⚠️ Au-delà de {formatEUR(pricing.creditCeiling)} de dépenses
            annuelles, le crédit d&apos;impôt est plafonné.
          </p>
        )}

        {!compact && (
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button href="/devis" size="lg" className="flex-1">
              Demander un devis gratuit
            </Button>
            <Button
              href="/credit-impot"
              variant="outline"
              size="lg"
              className="flex-1"
            >
              En savoir plus
            </Button>
          </div>
        )}

        <p className="mt-4 text-center text-xs text-slate-400">
          Estimation indicative. Crédit d&apos;impôt via la coopérative Accès
          SAP, sur les prestations à domicile.
        </p>
      </div>
    </div>
  );
}
