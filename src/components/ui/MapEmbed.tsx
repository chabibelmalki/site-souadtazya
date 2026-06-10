import { ExternalLink } from "lucide-react";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Carte OpenStreetMap — gratuite et sans cookie (RGPD-friendly,
 * aucun bandeau de consentement nécessaire).
 */
export function MapEmbed({
  className,
  height = 420,
}: {
  className?: string;
  height?: number;
}) {
  const { lat, lon } = site.geo;
  const dx = 0.045;
  const dy = 0.03;
  const bbox = `${lon - dx},${lat - dy},${lon + dx},${lat + dy}`;
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lon}`;
  const fullMap = `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}#map=14/${lat}/${lon}`;

  return (
    <div
      className={cn(
        "overflow-hidden rounded-3xl border border-slate-200 shadow-sm",
        className
      )}
    >
      <iframe
        title={`Localisation de ${site.name} à ${site.address.city}`}
        src={src}
        className="w-full"
        style={{ height }}
        loading="lazy"
      />
      <a
        href={fullMap}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-1.5 border-t border-slate-100 bg-white py-2.5 text-xs font-medium text-slate-500 transition-colors hover:text-brand-700"
      >
        Ouvrir dans OpenStreetMap <ExternalLink className="size-3.5" />
      </a>
    </div>
  );
}
