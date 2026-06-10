/**
 * Données centrales du site SANAD CLEAN.
 * Toute information « métier » (coordonnées, services, tarifs, FAQ) est ici
 * pour rester cohérente sur l'ensemble du site (et dans le JSON-LD SEO).
 */

export const site = {
  name: "SANAD CLEAN",
  legalName: "SANAD CLEAN — Souad Tazya (EI)",
  owner: "Souad Tazya",
  tagline: "Ménage à domicile & nettoyage professionnel à Nîmes",
  description:
    "SANAD CLEAN, entreprise de nettoyage à Nîmes : ménage à domicile (crédit d'impôt 50 %, soit 15 €/h pour vous), nettoyage de locaux professionnels, remise en état et traitement des nuisibles. Devis gratuit.",
  // URL de production (à mettre à jour une fois le domaine acheté)
  url: "https://www.sanadclean.fr",
  siren: "980 872 543",
  ape: "81.21Z",
  apeLabel: "Nettoyage courant des bâtiments",
  email: "sanadclean30@gmail.com",
  phone: "07 67 02 97 62",
  phoneIntl: "+33767029762",
  whatsappIntl: "33767029762",
  address: {
    street: "20 rue Général Delestraint",
    postalCode: "30000",
    city: "Nîmes",
    region: "Gard",
    country: "France",
  },
  // Coordonnées de Nîmes (pour la carte OpenStreetMap, sans cookie)
  geo: { lat: 43.8367, lon: 4.3601 },
  // Coopérative qui porte l'agrément services à la personne
  sapPartner: {
    name: "Accès SAP",
    url: "https://www.acces-sap.com",
  },
  hours: "Disponible 24h/24, 7j/7",
  serviceAreas: [
    "Nîmes",
    "Caissargues",
    "Bouillargues",
    "Rodilhan",
    "Marguerittes",
    "Garons",
    "Saint-Gervasy",
    "Poulx",
    "Caveirac",
    "Clarensac",
    "Milhaud",
    "Bernis",
    "Manduel",
    "Saint-Gilles",
    "Uchaud",
    "Vergèze",
    "Générac",
    "Vauvert",
  ],
} as const;

export const waLink = (msg?: string) =>
  `https://wa.me/${site.whatsappIntl}${
    msg ? `?text=${encodeURIComponent(msg)}` : ""
  }`;

export const telLink = `tel:${site.phoneIntl}`;
export const mailLink = `mailto:${site.email}`;
