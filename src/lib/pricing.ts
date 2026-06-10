/**
 * Catalogue tarifaire SANAD CLEAN.
 * Prix "normaux" (sans aide). Le crédit d'impôt de 50 % s'applique aux
 * prestations marquées `creditImpot: true` (services à la personne réalisés
 * au domicile d'un particulier, via la coopérative Accès SAP).
 */

export type Tier = {
  label: string;
  price: number | null; // null = sur devis
  from?: boolean; // "à partir de"
};

export type HourlyPrestation = {
  id: string;
  kind: "hourly";
  name: string;
  creditImpot: boolean;
  rate: number; // €/h sans fourniture de matériel
  materialSupplement: number; // +€/h si matériel fourni par SANAD CLEAN
  note?: string;
};

export type TierPrestation = {
  id: string;
  kind: "tiers";
  name: string;
  creditImpot: boolean;
  tiers: Tier[];
  note?: string;
};

export type Prestation = HourlyPrestation | TierPrestation;

export type Category = {
  id: string;
  title: string;
  emoji: string;
  short: string;
  prestations: Prestation[];
};

export const CREDIT_RATE = 0.5;

export const catalog: Category[] = [
  {
    id: "menage",
    title: "Ménage & nettoyage",
    emoji: "🧹",
    short: "Entretien régulier de votre logement ou grand nettoyage de printemps.",
    prestations: [
      {
        id: "menage-regulier",
        kind: "hourly",
        name: "Ménage régulier",
        creditImpot: true,
        rate: 30,
        materialSupplement: 5,
        note: "Tarif sans fourniture de matériel. Matériel fourni par SANAD CLEAN : +5 €/h.",
      },
      {
        id: "grand-nettoyage",
        kind: "tiers",
        name: "Grand nettoyage de printemps",
        creditImpot: true,
        tiers: [
          { label: "Studio / T1", price: 150 },
          { label: "T2", price: 220 },
          { label: "T3", price: 290 },
          { label: "T4", price: 380 },
        ],
      },
    ],
  },
  {
    id: "remise-en-etat",
    title: "Remise en état",
    emoji: "🏠",
    short: "Nettoyage en profondeur après travaux, déménagement ou avant état des lieux.",
    prestations: [
      {
        id: "remise-en-etat",
        kind: "tiers",
        name: "",
        creditImpot: true,
        tiers: [
          { label: "Studio / T1", price: 250, from: true },
          { label: "T2", price: 350, from: true },
          { label: "T3", price: 450, from: true },
          { label: "T4", price: 600, from: true },
        ],
      },
    ],
  },
  {
    id: "canape",
    title: "Nettoyage canapé & fauteuil",
    emoji: "🛋️",
    short: "Nettoyage et désincrustation de vos canapés, fauteuils et textiles.",
    prestations: [
      {
        id: "nettoyage-canape",
        kind: "tiers",
        name: "",
        creditImpot: true,
        tiers: [
          { label: "Fauteuil", price: 60 },
          { label: "Canapé 2 places", price: 90 },
          { label: "Canapé 3 places", price: 120 },
          { label: "Canapé d'angle", price: 150 },
        ],
      },
    ],
  },
  {
    id: "vitres",
    title: "Nettoyage de vitres",
    emoji: "🪟",
    short: "Vitres, baies et miroirs impeccables, sans traces, intérieur et extérieur.",
    prestations: [
      {
        id: "vitres",
        kind: "tiers",
        name: "",
        creditImpot: true,
        tiers: [
          { label: "Appartement", price: 90, from: true },
          { label: "Maison", price: 140, from: true },
          { label: "Villa", price: 180, from: true },
        ],
      },
    ],
  },
  {
    id: "terrasse",
    title: "Nettoyage de terrasse",
    emoji: "🌿",
    short: "Nettoyage et dégraissage de vos terrasses et sols extérieurs.",
    prestations: [
      {
        id: "terrasse",
        kind: "tiers",
        name: "",
        creditImpot: true,
        tiers: [
          { label: "Jusqu'à 20 m²", price: 90 },
          { label: "20 à 50 m²", price: 150 },
          { label: "Plus de 50 m²", price: null },
        ],
      },
    ],
  },
  {
    id: "herbes",
    title: "Coupe d'herbes hautes",
    emoji: "🌱",
    short: "Débroussaillage et coupe des herbes hautes de votre jardin.",
    prestations: [
      {
        id: "herbes",
        kind: "tiers",
        name: "",
        creditImpot: true,
        tiers: [
          { label: "Petit jardin", price: 80 },
          { label: "Jardin moyen", price: 150 },
          { label: "Grand jardin", price: null },
        ],
      },
    ],
  },
  {
    id: "diogene",
    title: "Nettoyage extrême – syndrome de Diogène",
    emoji: "♻️",
    short: "Débarras, nettoyage et désinfection complets des logements très encombrés.",
    prestations: [
      {
        id: "diogene",
        kind: "tiers",
        name: "",
        creditImpot: true,
        note: "Comprend : débarras, évacuation des déchets, nettoyage, désinfection et remise en état.",
        tiers: [
          { label: "Studio", price: 600, from: true },
          { label: "T2", price: 900, from: true },
          { label: "T3", price: 1200, from: true },
          { label: "T4 et plus", price: null },
        ],
      },
    ],
  },
  {
    id: "cafards",
    title: "Traitement des cafards",
    emoji: "🐜",
    short: "Désinsectisation ciblée contre les cafards et blattes.",
    prestations: [
      {
        id: "cafards",
        kind: "tiers",
        name: "",
        creditImpot: false,
        tiers: [
          { label: "Studio / T1", price: 140 },
          { label: "T2", price: 180 },
          { label: "T3", price: 240 },
          { label: "T4", price: 300 },
        ],
      },
    ],
  },
  {
    id: "punaises",
    title: "Traitement des punaises de lit",
    emoji: "🛏️",
    short: "Traitement professionnel des punaises de lit, chambre par chambre.",
    prestations: [
      {
        id: "punaises",
        kind: "tiers",
        name: "",
        creditImpot: false,
        tiers: [
          { label: "1 chambre", price: 250 },
          { label: "2 chambres", price: 390 },
          { label: "3 chambres", price: 490 },
          { label: "Logement complet", price: null },
        ],
      },
    ],
  },
  {
    id: "moisissures",
    title: "Traitement des moisissures",
    emoji: "🍄",
    short: "Élimination des moisissures et assainissement des surfaces touchées.",
    prestations: [
      {
        id: "moisissures",
        kind: "tiers",
        name: "",
        creditImpot: false,
        tiers: [
          { label: "Petite surface", price: 120 },
          { label: "Mur complet", price: 220 },
          { label: "Plusieurs pièces", price: null },
        ],
      },
    ],
  },
  {
    id: "bureaux",
    title: "Nettoyage de bureaux",
    emoji: "🏢",
    short: "Entretien régulier de vos bureaux, commerces et locaux professionnels.",
    prestations: [
      {
        id: "bureaux",
        kind: "tiers",
        name: "",
        creditImpot: false,
        tiers: [
          { label: "Jusqu'à 50 m²", price: 90 },
          { label: "50 à 100 m²", price: 150 },
          { label: "Plus de 100 m²", price: null },
        ],
      },
    ],
  },
];

export const pricingNotes = [
  "🚗 Déplacement offert sur Nîmes et 20 km alentours.",
  "📋 Devis gratuit sous 24 h, sans engagement.",
];

/** Une catégorie est éligible au crédit d'impôt si ses prestations le sont. */
export function categoryEligible(cat: Category): boolean {
  return cat.prestations.some((p) => p.creditImpot);
}

/** Prix indicatif affiché sur les cartes de services. */
export function priceHint(cat: Category): string {
  const hourly = cat.prestations.find(
    (p): p is HourlyPrestation => p.kind === "hourly"
  );
  if (hourly) return `${hourly.rate} €/h`;
  const prices = cat.prestations
    .flatMap((p) => (p.kind === "tiers" ? p.tiers.map((t) => t.price) : []))
    .filter((v): v is number => v !== null);
  if (prices.length === 0) return "Sur devis";
  return `dès ${Math.min(...prices)} €`;
}
