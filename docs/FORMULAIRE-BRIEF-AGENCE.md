# Spécification — Formulaire de brief client (site agence Minhaj)

> **But de ce document** : décrire le **formulaire d'intake** à intégrer plus tard
> sur le site de l'agence (Minhaj). On le donnera à **Claude Code** (avec le skill
> `/site-vitrine`) pour qu'il génère ce formulaire. Le formulaire, une fois rempli
> par un prospect ou par toi, produit un **brief** prêt à redonner à Claude Code
> pour **créer le site du client**.
>
> ⚠️ **Générique** : ce formulaire n'est PAS lié à un métier. Il doit convenir à
> **tout type d'activité** — prestataire de **services**, **vente de produits**,
> ou **les deux**.

---

## 1. Principes

- **Largeur maximale** : aucun champ spécifique à un secteur. Le « métier » est un
  champ libre.
- **Type d'activité** (champ pivot) : `Services` · `Vente de produits` · `Les deux`.
  Quelques libellés s'adaptent à ce choix (voir colonne « Adaptation »).
- **Court & guidé** : 6 sections, champs requis minimaux marqués `*`.
- **Sortie** : un **brief Markdown** structuré (voir §4), à copier ou télécharger.

---

## 2. Sections & champs

### Section 1 — L'entreprise
| Champ | Type | Requis | Adaptation / notes |
|---|---|---|---|
| Nom commercial | texte | ✅ | |
| Type d'activité | select : Services / Vente de produits / Les deux | ✅ | **pivot** |
| Métier / secteur | texte libre | ✅ | ex. « plombier », « boutique de déco », « restaurant »… |
| Dirigeant·e | texte | | |
| Statut juridique + SIREN | texte | | |
| Code APE | texte | | si connu |
| Adresse | texte | | |
| Téléphone | tel | ✅ | |
| WhatsApp | tel | | si différent |
| E-mail de réception des demandes | email | ✅ | → deviendra `LEAD_TO` |
| Horaires | texte | | ex. « 24h/24 7j/7 » |
| Zone d'intervention / de livraison | texte | | services → zone d'intervention ; vente → zone de livraison / « en ligne » |

### Section 2 — Identité visuelle
| Champ | Type | Requis | Notes |
|---|---|---|---|
| Logo | texte | | lien, ou « à créer » |
| Couleurs / ambiance | texte | | ou « au choix de l'agence » |
| Style | select : Moderne & épuré / Chaleureux / Premium / Dynamique / Au choix | | |
| Langue(s) | texte | | défaut : Français |
| Photos / visuels | url | | lien Drive / WeTransfer (prestations, produits, équipe, avant/après) |

### Section 3 — L'offre
| Champ | Type | Requis | Adaptation |
|---|---|---|---|
| Vos produits et/ou prestations | textarea | ✅ | un par ligne, avec prix si possible. Libellé adapté au type d'activité |
| Affichage des prix | select : Prix affichés / Sur devis / Catalogue / Mix | | « Catalogue » surtout pour la vente |
| Aides / dispositifs / atouts | texte | | ex. crédit d'impôt, urgence 24/7, livraison offerte, garanties, label… |

### Section 4 — Fonctionnalités souhaitées (cases à cocher, multi)
Proposer une liste **large** couvrant services ET vente :
- Demande de devis
- Prise de commande / panier *(vente)*
- Paiement en ligne *(vente)*
- Catalogue de produits *(vente)*
- Click & collect / livraison *(vente)*
- Prise de rendez-vous en ligne
- Configurateur / simulateur de prix
- Bouton WhatsApp · Appel direct
- Galerie / réalisations / portfolio
- Avis clients (Google)
- Pages par commune (SEO local)
- Blog / actualités
- Multilingue
> Cocher par défaut : Demande de devis (ou commande), WhatsApp, Appel.

### Section 5 — Présence en ligne
| Champ | Type | Requis | Notes |
|---|---|---|---|
| Nom de domaine | texte | | acheté ? souhaité ? |
| Fiche Google Business | select : Existe / À créer / Je ne sais pas | | |
| Réseaux sociaux | texte | | liens |

### Section 6 — Pour aller plus loin
| Champ | Type | Requis | Notes |
|---|---|---|---|
| Ce qui rend l'entreprise unique | textarea | | argument différenciant |
| Sites aimés (inspiration) | texte | | liens |
| Notes libres | textarea | | |

---

## 3. Comportement attendu du formulaire (pour Claude Code)

- **Validation** : champs `*` requis ; e-mail et téléphone au bon format.
- **Photos** : pas d'upload serveur — demander un **lien** (Drive/WeTransfer).
- **Anti-spam** : honeypot caché.
- **Responsive**, accessible, sobre (identité Minhaj).
- **Action principale** « Générer le brief » → produit le Markdown du §4 et l'affiche
  dans une zone copiable, avec **« Copier »** et **« Télécharger .md »**.
- **Option d'envoi** : possibilité d'envoyer aussi le brief par e-mail à l'agence
  via l'**architecture mail mutualisée** (Resend, domaine Minhaj — voir
  `.env.example` du projet pilote et le skill `/site-vitrine`).

---

## 4. Format de sortie (le brief généré)

Le formulaire doit produire **exactement** ce gabarit (n'afficher que les champs
remplis) :

```markdown
# Brief client — <Nom commercial>

## Entreprise
- Nom commercial : …
- Type d'activité : Services | Vente de produits | Les deux
- Métier / secteur : …
- Dirigeant·e : …
- Statut + SIREN : …
- Code APE : …
- Adresse : …
- Téléphone : …
- WhatsApp : …
- E-mail (réception des demandes → LEAD_TO) : …
- Horaires : …
- Zone d'intervention / de livraison : …

## Identité visuelle
- Logo : …
- Couleurs / ambiance : …
- Style : …
- Langue(s) : …
- Photos (lien) : …

## Offre
Produits / prestations :
<liste telle que saisie>
- Affichage des prix : …
- Aides / dispositifs / atouts : …

## Fonctionnalités souhaitées
- [x] …

## Présence en ligne
- Nom de domaine : …
- Fiche Google Business : …
- Réseaux sociaux : …

## Pour aller plus loin
- Différenciant : …
- Inspirations : …
- Notes : …

---
Pour Claude Code : « Utilise le skill /site-vitrine et crée le site à partir de ce brief. »
```

---

## 5. Rappel du flux global

1. Le prospect remplit ce formulaire sur le site **Minhaj**.
2. Le brief (§4) est généré → récupéré par l'agence.
3. On lance Claude Code avec **`/site-vitrine`** + ce brief → le **site client est créé**.
4. Déploiement Vercel ; e-mails des leads via le **domaine Minhaj** mutualisé
   (`LEAD_TO` = boîte du client). Voir le skill `/site-vitrine`.
