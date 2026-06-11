/**
 * Contenu éditorial transverse : tarif "ménage à domicile" (pour le
 * simulateur), FAQ et navigation. Le catalogue complet des prestations est
 * dans `pricing.ts`.
 */

export const pricing = {
  // Tarif facturé pour le ménage à domicile (via Accès SAP)
  domicileSAP: 30,
  // Reste à charge réel pour le client après crédit d'impôt 50 %
  domicileSAPNet: 15,
  creditRate: 0.5,
  creditCeiling: 12000,
};

export type FaqItem = { question: string; answer: string };

export const faq: FaqItem[] = [
  {
    question: "Comment fonctionne le crédit d'impôt de 50 % ?",
    answer:
      "Pour le ménage à votre domicile, vous bénéficiez d'un crédit d'impôt égal à 50 % des sommes versées (plafond de 12 000 € par an et par foyer). Concrètement, une heure facturée 30 € ne vous coûte réellement que 15 €. SANAD CLEAN travaille via la coopérative Accès SAP, déclarée services à la personne, ce qui vous ouvre ce droit.",
  },
  {
    question: "Qu'est-ce que l'avance immédiate ?",
    answer:
      "Grâce à l'avance immédiate de crédit d'impôt (URSSAF), vous ne payez tout de suite que la moitié restant à votre charge, sans attendre votre déclaration d'impôts de l'année suivante. Le dispositif est géré via la coopérative Accès SAP.",
  },
  {
    question: "Le crédit d'impôt s'applique-t-il au nettoyage de bureaux ?",
    answer:
      "Non. Le crédit d'impôt de 50 % concerne uniquement les prestations réalisées au domicile d'un particulier. Le nettoyage de locaux professionnels, la remise en état et le traitement des nuisibles sont facturés sur devis, sans crédit d'impôt.",
  },
  {
    question: "Dans quelles communes intervenez-vous ?",
    answer:
      "Nous intervenons à Nîmes et dans les communes alentours (Caissargues, Marguerittes, Saint-Gilles, Bouillargues, Manduel, Milhaud…). Contactez-nous pour confirmer votre secteur.",
  },
  {
    question: "Puis-je payer en CESU ?",
    answer:
      "Oui, le paiement en CESU est accepté pour le ménage à domicile. Avec le crédit d'impôt, votre coût réel revient à 15 €/h.",
  },
  {
    question: "Comment obtenir un devis ?",
    answer:
      "C'est gratuit et sans engagement : remplissez le formulaire de demande de devis, appelez-nous, ou écrivez-nous sur WhatsApp. Nous vous répondons rapidement avec une estimation adaptée à votre besoin.",
  },
  {
    question: "Utilisez-vous des produits écologiques ?",
    answer:
      "Nous adaptons les produits à vos préférences et pouvons utiliser des produits respectueux de l'environnement sur demande, notamment en présence d'enfants ou d'animaux.",
  },
];

export const mainNav = [
  { href: "/services", label: "Services" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/credit-impot", label: "Crédit d'impôt" },
  { href: "/contact", label: "Contact" },
];
