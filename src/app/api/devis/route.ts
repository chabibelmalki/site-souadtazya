import { NextResponse } from "next/server";
import { leadSchema } from "@/lib/lead-schema";
import { site } from "@/lib/site";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide" }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Formulaire invalide", issues: parsed.error.flatten() },
      { status: 422 }
    );
  }

  const data = parsed.data;

  // Honeypot : un bot a rempli le champ caché → on ignore silencieusement
  if (data.company && data.company.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const subject =
    data.type === "devis"
      ? `Nouvelle demande de devis — ${data.name}`
      : `Nouveau message — ${data.name}`;

  const fmt = (n: number) =>
    new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: n % 1 === 0 ? 0 : 2,
    }).format(n);

  let selectionBlock: string | null = null;
  if (data.items && data.items.length > 0) {
    const itemLines = data.items.map((it) => {
      const qty = it.qty && it.qty > 1 ? ` × ${it.qty}` : "";
      const price =
        it.price === null || it.price === undefined
          ? "sur devis"
          : fmt(it.price * (it.qty ?? 1));
      return `  • ${it.label}${qty} — ${price}`;
    });
    const totals: string[] = [];
    if (typeof data.estimateBilled === "number")
      totals.push(`  Sous-total : ${fmt(data.estimateBilled)}`);
    if (data.withCredit && typeof data.estimateNet === "number")
      totals.push(`  Après crédit d'impôt : ${fmt(data.estimateNet)}`);
    selectionBlock = [
      "\nServices sélectionnés :",
      ...itemLines,
      ...totals,
    ].join("\n");
  }

  const lines = [
    `Type : ${data.type === "devis" ? "Demande de devis" : "Message de contact"}`,
    `Nom : ${data.name}`,
    `Téléphone : ${data.phone}`,
    data.email ? `E-mail : ${data.email}` : null,
    data.city ? `Ville : ${data.city}` : null,
    data.service ? `Prestation : ${data.service}` : null,
    selectionBlock,
    data.message ? `\nMessage :\n${data.message}` : null,
  ].filter(Boolean);

  const text = lines.join("\n");
  const html = `<div style="font-family:system-ui,sans-serif;font-size:15px;color:#0f172a">
    <h2 style="color:#0d9488">${subject}</h2>
    <table style="border-collapse:collapse">
      ${lines
        .map(
          (l) =>
            `<tr><td style="padding:4px 0;white-space:pre-line">${l}</td></tr>`
        )
        .join("")}
    </table>
    <p style="color:#64748b;font-size:13px;margin-top:16px">Demande envoyée depuis le site ${site.name}.</p>
  </div>`;

  const apiKey = process.env.RESEND_API_KEY;

  // Pas de clé configurée → on log côté serveur et on renvoie OK
  // (permet de tester le parcours sans configuration e-mail).
  if (!apiKey) {
    console.info("[devis] (aucune clé Resend — e-mail non envoyé)\n" + text);
    return NextResponse.json({ ok: true, delivered: false });
  }

  // Expéditeur : RESEND_FROM peut être une simple adresse (ex.
  // "leads@mon-domaine.fr") → le nom de l'entreprise est ajouté
  // automatiquement, ou un "Nom <adresse>" complet.
  const fromEnv = process.env.RESEND_FROM ?? "onboarding@resend.dev";
  const from = fromEnv.includes("<") ? fromEnv : `${site.name} <${fromEnv}>`;

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: process.env.LEAD_TO ?? site.email,
      replyTo: data.email || undefined,
      subject,
      text,
      html,
    });
    if (error) {
      console.error("[devis] Resend error", error);
      return NextResponse.json(
        { error: "L'envoi a échoué, réessayez ou appelez-nous." },
        { status: 502 }
      );
    }
    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[devis] exception", err);
    return NextResponse.json(
      { error: "Erreur serveur, réessayez plus tard." },
      { status: 500 }
    );
  }
}
