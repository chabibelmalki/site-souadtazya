import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const routes = [
  { path: "/", priority: 1, freq: "weekly" as const },
  { path: "/services", priority: 0.9, freq: "monthly" as const },
  { path: "/tarifs", priority: 0.9, freq: "monthly" as const },
  { path: "/credit-impot", priority: 0.9, freq: "monthly" as const },
  { path: "/rendez-vous", priority: 0.8, freq: "monthly" as const },
  { path: "/devis", priority: 0.8, freq: "monthly" as const },
  { path: "/zone-intervention", priority: 0.7, freq: "monthly" as const },
  { path: "/a-propos", priority: 0.6, freq: "yearly" as const },
  { path: "/faq", priority: 0.7, freq: "monthly" as const },
  { path: "/contact", priority: 0.7, freq: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-06-10");
  return routes.map((r) => ({
    url: `${site.url}${r.path}`,
    lastModified,
    changeFrequency: r.freq,
    priority: r.priority,
  }));
}
