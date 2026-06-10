import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  type Category,
  categoryEligible,
  priceHint,
} from "@/lib/pricing";

export function CatalogCard({ category }: { category: Category }) {
  const eligible = categoryEligible(category);
  return (
    <Link
      href="/tarifs"
      className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-600/5"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="grid size-12 place-items-center rounded-2xl bg-brand-50 text-2xl transition-colors group-hover:bg-brand-100">
          {category.emoji}
        </span>
        {eligible ? (
          <span className="rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-accent-600 ring-1 ring-inset ring-amber-200">
            Crédit d&apos;impôt 50 %
          </span>
        ) : (
          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-500">
            Sur devis
          </span>
        )}
      </div>

      <h3 className="mt-4 text-lg font-bold text-ink">{category.title}</h3>
      <p className="mt-1.5 flex-1 text-sm leading-relaxed text-slate-600">
        {category.short}
      </p>

      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
        <span className="text-sm font-semibold text-brand-700">
          {priceHint(category)}
        </span>
        <span className="inline-flex items-center gap-1 text-sm font-semibold text-slate-500 transition-colors group-hover:text-brand-700">
          Voir <ArrowRight className="size-4" />
        </span>
      </div>
    </Link>
  );
}
