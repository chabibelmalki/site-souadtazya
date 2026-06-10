import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "linear-gradient(135deg, #0d9488 0%, #115e59 60%, #042f2e 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              background: "rgba(255,255,255,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 38,
            }}
          >
            ✨
          </div>
          <div style={{ fontSize: 38, fontWeight: 800, letterSpacing: -1 }}>
            SANAD CLEAN
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 68,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            Ménage & nettoyage à Nîmes
          </div>
          <div style={{ fontSize: 34, color: "#ccfbf1" }}>
            Ménage à domicile dès 15 €/h après crédit d&apos;impôt
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              background: "#fbbf24",
              color: "#0f172a",
              padding: "12px 24px",
              borderRadius: 999,
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            Crédit d&apos;impôt 50 %
          </div>
          <div style={{ fontSize: 28, color: "#e2e8f0" }}>{site.phone}</div>
        </div>
      </div>
    ),
    size
  );
}
