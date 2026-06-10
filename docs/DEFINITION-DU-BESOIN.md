# SANAD CLEAN — Définition du besoin (cahier des charges)

> Document de cadrage du site web de **SANAD CLEAN**.
> Statut : **brouillon de travail** — à valider avant de commencer le code.
> Dernière mise à jour : 2026-06-10

---

## 1. L'entreprise

| Donnée | Valeur |
|---|---|
| Nom commercial | **SANAD CLEAN** |
| Dirigeante | Souad Tazya |
| Statut juridique | Entreprise individuelle (EI) |
| SIREN | 980 872 543 |
| Code APE | 81.21Z — *Nettoyage courant des bâtiments* |
| Adresse | 20 rue Général Delestraint, 30000 Nîmes |
| Téléphone | 07 67 02 97 62 |
| E-mail | sanadclean30@gmail.com |
| WhatsApp | 07 67 02 97 62 (à confirmer : même numéro) |
| Zone d'intervention | Nîmes et alentours (à préciser : rayon / communes) |
| Dispositif crédit d'impôt | Via la coopérative **Accès SAP** (Souad n'est **pas** déclarée SAP en propre) |
| Langue du site | Français |

---

## 2. Objectifs du site

1. **Crédibiliser** l'entreprise (image pro, rassurer un particulier qui laisse entrer quelqu'un chez lui).
2. **Générer des contacts** : devis, prise de rendez-vous, appel, WhatsApp.
3. **Convertir** grâce à l'argument fort du **crédit d'impôt de 50 %** (services à la personne).
4. **Être trouvable** sur Google (SEO local Nîmes) **et** dans les réponses des IA/GPT (GEO).

### Cibles (à parts égales — deux parcours distincts)
- **Particuliers** : ménage / repassage à domicile (cœur de l'argument crédit d'impôt).
- **Professionnels** : nettoyage de bureaux, locaux commerciaux, copropriétés, remise en état (PAS de crédit d'impôt — voir §5).

---

## 3. Fonctionnalités demandées (par le client)

- [ ] **Contact** (téléphone, e-mail, formulaire, adresse + carte).
- [ ] **Demande de devis** en ligne (formulaire structuré → e-mail vers sanadclean30@gmail.com).
- [ ] **Bouton WhatsApp** flottant (`wa.me`) — discussion directe.
- [ ] **Bouton Appel** direct (`tel:`) — clic-pour-appeler sur mobile.
- [ ] **Prise de rendez-vous en ligne** (agenda / planning) — choix d'un créneau.
- [ ] **Simulateur de paiement SAP** : afficher le prix **après crédit d'impôt 50 %** (« reste à votre charge »).
- [ ] **SEO** moteurs de recherche classiques **+** optimisation pour les IA/GPT (GEO).

---

## 4. Fonctionnalités proposées en plus (recommandations)

- [ ] **Galerie avant / après** — preuve visuelle, très convaincant pour le nettoyage.
- [ ] **Avis clients / témoignages** + intégration des **avis Google**.
- [ ] **Fiche Google Business Profile** (à créer si absente) — *le* levier n°1 du SEO local. Sans elle, le site rank mal localement.
- [ ] **Page Zone d'intervention** avec carte + liste de communes (Nîmes, Caissargues, Marguerittes, Saint-Gilles…) → pages utiles pour le SEO local.
- [ ] **Formules d'abonnement** : ménage hebdomadaire / bimensuel (revenus récurrents).
- [ ] **Devis instantané** : estimation auto selon surface (m²) + fréquence + type de prestation.
- [ ] **Bandeau « Crédit d'impôt 50 % »** mis en avant partout (badge, page dédiée).
- [ ] **FAQ riche** (crédit d'impôt, avance immédiate, déroulé d'une prestation, produits utilisés…) → excellent pour le SEO **et** le GEO.
- [ ] **Demande de rappel gratuit** (callback) — pour qui n'aime pas remplir un formulaire.
- [ ] **Blog / conseils d'entretien** — SEO de contenu sur le long terme (phase 2).
- [ ] **Multilingue FR / AR** si une partie de la clientèle est arabophone (à confirmer).
- [ ] **Espace client léger** (suivi des RDV, factures) — phase 2.
- [ ] **PWA / installable**, ultra-rapide sur mobile (la majorité du trafic).

---

## 5. Le crédit d'impôt via la coopérative Accès SAP — comment ça marche

Point clé : **SANAD CLEAN n'est pas déclarée SAP en propre**. Souad **adhère à la coopérative Accès SAP**, qui porte l'agrément « services à la personne ». Le client bénéficie donc **quand même** du crédit d'impôt 50 %, par l'intermédiaire de la coopérative.

### Le crédit d'impôt « services à la personne »
Quand un **particulier** fait faire du ménage **à son domicile**, l'État lui accorde un **crédit d'impôt de 50 %** des sommes versées (plafond 12 000 €/an, soit jusqu'à **6 000 € de crédit**).

### Le rôle d'Accès SAP (pour Souad)
- Souad **facture sous son propre logo** via le logiciel de la coopérative, en gardant son autonomie.
- C'est **Accès SAP qui encaisse** le règlement du client, puis **reverse la somme à Souad** par virement sous 48–72 h.
- Grâce à la déclaration SAP de la coopérative, le **client a droit au crédit d'impôt 50 %** + à l'**avance immédiate** (il ne paie tout de suite que les 50 % restants).

### Conséquences pour le site
- ✅ On peut afficher **« Crédit d'impôt 50 % »** sans réserve sur le **parcours particuliers** (à domicile).
- ✅ Le simulateur reste pertinent : *« Facturé 30 €/h → **15 €/h réellement à votre charge** »*.
- Mention légale honnête : préciser que le crédit d'impôt s'applique aux prestations **à domicile** réalisées **via la coopérative Accès SAP**.
- Le **nettoyage de locaux professionnels** (B2B) **n'ouvre pas** droit au crédit d'impôt → bien séparer les deux parcours.
- On **n'intègre pas** la mécanique d'avance immédiate dans le site (gérée par Accès SAP / URSSAF) : le simulateur est un **outil marketing**.

---

## 5 bis · Services proposés & tarifs

> Tous les services doivent figurer sur le site. Le crédit d'impôt 50 % ne concerne **que** les prestations à domicile chez le particulier (via Accès SAP).

### A. Particuliers — à domicile
| Prestation | Tarif facturé | Le client paie réellement |
|---|---|---|
| **Ménage / entretien du domicile, via Accès SAP** (crédit d'impôt 50 %, réglable en CESU / avance immédiate) | 30 €/h | **15 €/h** |
| Ménage chez un particulier **sans dispositif** (« lambda », paiement direct, sans crédit d'impôt) | 25 €/h | 25 €/h |

> Le **15 €/h** est le **reste à charge** : 30 €/h facturés − 50 % de crédit d'impôt, le client réglant en CESU / avance immédiate via Accès SAP.
> C'est l'**argument commercial fort** à mettre en avant : *« 15 €/h seulement, net dans votre poche. »*

### B. Professionnels & gros chantiers — **sur devis**
| Prestation | Modalité |
|---|---|
| Remise en état (après travaux, fin de chantier, logement vacant) | Sur devis |
| Nettoyage de locaux professionnels (bureaux, commerces, copropriétés) | Sur devis |
| **Traitement des nuisibles** : cafards, punaises de lit, etc. (désinsectisation) | Sur devis |
| Grands chantiers / interventions spécifiques | Sur devis |

> Le site présente clairement **deux entrées** : « Particuliers » (tarifs + crédit d'impôt) et « Professionnels / Gros chantiers » (sur devis).

---

## 6. Stack technique recommandée

> Le client propose **Next.js** → **d'accord, c'est le meilleur choix ici** (SEO, perf, écosystème).

| Domaine | Choix recommandé | Pourquoi |
|---|---|---|
| Framework | **Next.js 15 (App Router) + TypeScript** | SEO natif (SSR/SSG), perf, métadonnées, sitemap |
| UI / style | **Tailwind CSS + shadcn/ui** | Design moderne « qui claque », rapide à construire |
| Animations | **Framer Motion** | Effets fluides et pro, sans surcharge |
| Formulaires | **React Hook Form + Zod** | Validation robuste devis/contact |
| Envoi d'e-mails | **Resend** (ou Formspree) | Devis/contact → boîte mail, simple et fiable |
| Prise de RDV | **Cal.com** (embed gratuit, RGPD, open-source) | Le plus rapide à mettre en place ; alternative sur-mesure possible (phase 2) |
| Hébergement | **Vercel** (offre gratuite suffisante) | Déploiement Next.js sans friction, HTTPS, CDN |
| Analytics | **Plausible / Umami** (sans cookies) | RGPD-friendly → **pas de bandeau cookies** nécessaire |
| Images | next/image + formats AVIF/WebP | Performance mobile |

---

## 7. SEO (Google) + GEO (IA / GPT)

### SEO classique
- Balises `metadata` par page (title, description, Open Graph, Twitter Card).
- **Données structurées JSON-LD** : `LocalBusiness` / `CleaningService` (nom, adresse, tél, horaires, zone, note).
- `sitemap.ts` + `robots.ts` générés automatiquement.
- **SEO local** : page par zone/commune, cohérence **NAP** (Name-Address-Phone) avec la fiche Google Business.
- Performance (Core Web Vitals) : score Lighthouse visé **> 95**.
- URLs propres, titres Hn hiérarchisés, alt text des images.

### GEO (visibilité dans ChatGPT / Claude / Perplexity…)
- **`llms.txt`** à la racine : résumé clair de l'activité, services, zone, contact, crédit d'impôt.
- Contenu **factuel et structuré** (FAQ, listes, tableaux) facile à citer par une IA.
- Schéma **`FAQPage`** JSON-LD sur la FAQ.
- Phrases réponses-directes (« Combien coûte un ménage à Nîmes avec crédit d'impôt ? »).

### Outils
- Plugin SEO communautaire **`huifer/claude-code-seo`** (⭐105, MIT) — *optionnel*, pour des audits ; à installer par le client via `/plugin` s'il le souhaite. L'implémentation reste faite sur-mesure.

---

## 8. Arborescence des pages

```
/                     Accueil (hero, services, crédit d'impôt, preuve sociale, CTA)
/services             Détail des prestations (particuliers + pros)
/credit-impot         Crédit d'impôt 50 % expliqué + simulateur
/tarifs               Grille tarifaire + simulateur
/rendez-vous          Prise de RDV en ligne
/devis                Demande de devis (formulaire)
/zone-intervention    Nîmes + communes (SEO local)
/avis                 Témoignages / avis clients
/a-propos             Présentation de Souad / SANAD CLEAN
/faq                  Questions fréquentes (SAP, déroulé, produits…)
/contact              Coordonnées + carte + formulaire
/mentions-legales     Obligatoire
/confidentialite      RGPD
/cgv                  Conditions générales (si vente en ligne de prestations)
```
Éléments globaux : **bouton WhatsApp flottant**, **bouton Appel** (mobile), bandeau crédit d'impôt, header + footer avec NAP.

---

## 9. Obligations légales & RGPD

- **Mentions légales** : EI, nom dirigeante, SIREN, adresse, contact, **hébergeur**, n° de déclaration SAP (si obtenu).
- **Politique de confidentialité** + consentement explicite sur les formulaires (finalité, durée, droits).
- **Bandeau cookies** : évité si l'on reste sur analytics sans cookies (Plausible/Umami).
- **Accessibilité** : viser un bon niveau WCAG/RGAA (contrastes, navigation clavier, alt).
- Affichage **honnête** du crédit d'impôt (uniquement si déclaration SAP confirmée).

---

## 10. Roadmap

### Phase 0 — Cadrage (en cours)
- Valider ce document.
- Réunir : **logo**, **photos** (prestations, Souad, avant/après), textes, **nom de domaine**.
- **Trancher le volet SAP** (déclaration DREETS + exclusivité d'activité).
- Créer/optimiser la **fiche Google Business Profile**.

### Phase 1 — MVP (site qui convertit)
- Site vitrine complet (accueil, services, à propos, zone, contact).
- Formulaires **devis** + **contact** (→ e-mail).
- **WhatsApp** + **appel** + **prise de RDV** (Cal.com).
- **Simulateur crédit d'impôt**.
- **SEO** complet (metadata, JSON-LD, sitemap, robots, llms.txt).
- Mentions légales + confidentialité.
- Déploiement Vercel + nom de domaine.

### Phase 2 — Croissance
- Avis Google intégrés, galerie avant/après, blog/conseils.
- Abonnements / formules récurrentes.
- Multilingue FR/AR (si besoin).
- Espace client léger.

---

## 11. Décisions validées (2026-06-10)

1. ✅ **Crédit d'impôt** : pas de déclaration SAP en propre — Souad passe par la **coopérative Accès SAP**. Le crédit d'impôt 50 % reste **valable pour les clients particuliers** (à domicile). → Badge + page dédiée + simulateur actifs sur le parcours particuliers.
2. ✅ **Cible** : **particuliers ET professionnels à parts égales** → site avec **deux parcours distincts** (Particuliers / Professionnels), le crédit d'impôt mis en avant uniquement sur le parcours particuliers.
3. ✅ **Prise de RDV** : **Cal.com** (embed gratuit, RGPD) pour le MVP.
4. ✅ **Contenu** : **rien de prêt** (ni domaine, ni logo, ni photos) → on démarre avec une **identité visuelle simple** que je propose + **placeholders propres** (images libres de droits / blocs photo à remplacer). Domaine à acheter avant la mise en ligne.
5. ✅ **Langue** : **français** uniquement.
6. ✅ **Tarifs** : **affichés** pour les particuliers (30 €/h → 15 €/h, CESU, 25 €/h) ; **sur devis** pour le B2B et les gros chantiers. Voir §5 bis.

### Questions encore ouvertes (non bloquantes)
- **CESU 15 €/h** : tarif net ou formule distincte ? (à clarifier pour l'affichage — voir §5 bis).
- **Nom de domaine** : préférence (`sanadclean.fr` ?) — à réserver.
- **Google Business Profile** : à créer (levier SEO local n°1).
- **Zone d'intervention** : rayon / liste de communes autour de Nîmes.
```
```
