import { site } from "./site";
import { faq } from "./content";

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "CleaningService",
    "@id": `${site.url}/#business`,
    name: site.name,
    legalName: site.legalName,
    description: site.description,
    url: site.url,
    telephone: site.phoneIntl,
    email: site.email,
    image: `${site.url}/opengraph-image`,
    priceRange: "€€",
    currenciesAccepted: "EUR",
    paymentAccepted: "CESU, Virement, Espèces",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      postalCode: site.address.postalCode,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: "FR",
    },
    areaServed: site.serviceAreas.map((name) => ({
      "@type": "City",
      name,
    })),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    makesOffer: [
      {
        "@type": "Offer",
        name: "Ménage à domicile (crédit d'impôt 50 %)",
        priceCurrency: "EUR",
        price: "15",
        description:
          "Ménage et entretien du domicile via la coopérative Accès SAP, 15 €/h après crédit d'impôt.",
      },
      {
        "@type": "Offer",
        name: "Nettoyage de locaux professionnels",
        description: "Bureaux, commerces et copropriétés, sur devis.",
      },
    ],
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.href}`,
    })),
  };
}
