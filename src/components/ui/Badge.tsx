import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
  variant = "brand",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "brand" | "accent" | "neutral";
}) {
  const variants = {
    brand: "bg-brand-50 text-brand-700 ring-brand-200",
    accent: "bg-amber-50 text-accent-600 ring-amber-200",
    neutral: "bg-slate-100 text-slate-600 ring-slate-200",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
