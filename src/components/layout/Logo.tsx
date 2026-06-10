import Link from "next/link";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

export function Logo({
  className,
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "light";
}) {
  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center gap-2.5", className)}
      aria-label={`${site.name} — accueil`}
    >
      <span className="grid size-9 place-items-center rounded-xl bg-brand-gradient text-white shadow-md shadow-brand-600/30 transition-transform group-hover:scale-105">
        <Sparkles className="size-5" strokeWidth={2.4} />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-lg font-extrabold tracking-tight",
            variant === "light" ? "text-white" : "text-ink"
          )}
        >
          SANAD<span className="text-brand-500"> CLEAN</span>
        </span>
        <span
          className={cn(
            "mt-0.5 text-[10px] font-medium uppercase tracking-[0.18em]",
            variant === "light" ? "text-white/70" : "text-slate-400"
          )}
        >
          Nettoyage · Nîmes
        </span>
      </span>
    </Link>
  );
}
