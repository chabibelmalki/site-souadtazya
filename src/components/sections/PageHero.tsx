import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumb?: { name: string; href: string }[];
}) {
  return (
    <section className="hero-mesh border-b border-slate-100">
      <Container className="py-14 lg:py-20">
        {breadcrumb && (
          <nav
            aria-label="Fil d'Ariane"
            className="mb-5 flex items-center gap-1.5 text-sm text-slate-500"
          >
            {breadcrumb.map((b, i) => (
              <span key={b.href} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight className="size-3.5 text-slate-300" />}
                {i < breadcrumb.length - 1 ? (
                  <Link href={b.href} className="hover:text-brand-700">
                    {b.name}
                  </Link>
                ) : (
                  <span className="font-medium text-slate-700">{b.name}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && <Badge className="mb-4">{eyebrow}</Badge>}
        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
