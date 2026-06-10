"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { CalendarClock, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { site, telLink, waLink } from "@/lib/site";

const calLink = process.env.NEXT_PUBLIC_CAL_LINK;

export function CalBooking() {
  useEffect(() => {
    if (!calLink) return;
    (async () => {
      const cal = await getCalApi();
      cal("ui", {
        theme: "light",
        cssVarsPerTheme: {
          light: { "cal-brand": "#0d9488" },
          dark: { "cal-brand": "#0d9488" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  if (calLink) {
    return (
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <Cal
          calLink={calLink}
          style={{ width: "100%", height: "100%", minHeight: 600 }}
          config={{ layout: "month_view" }}
        />
      </div>
    );
  }

  // Repli tant que l'agenda Cal.com n'est pas configuré
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-12">
      <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-brand-50 text-brand-600">
        <CalendarClock className="size-7" />
      </span>
      <h2 className="mt-5 text-2xl font-bold text-ink">
        Réservez votre créneau
      </h2>
      <p className="mx-auto mt-2 max-w-md text-slate-600">
        Pour fixer un rendez-vous, le plus simple est de nous appeler ou de nous
        écrire sur WhatsApp : nous trouvons ensemble le créneau idéal.
      </p>
      <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Button href={telLink} size="lg">
          <Phone className="size-5" /> Appeler le {site.phone}
        </Button>
        <Button href={waLink()} variant="whatsapp" size="lg">
          <MessageCircle className="size-5" /> WhatsApp
        </Button>
      </div>
      <p className="mt-6 text-sm text-slate-500">
        ou{" "}
        <a href="/devis" className="font-semibold text-brand-700 hover:underline">
          demandez un devis en ligne
        </a>{" "}
        et nous vous rappelons.
      </p>
    </div>
  );
}
