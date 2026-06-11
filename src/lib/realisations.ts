/**
 * Photos « avant / après » des chantiers SANAD CLEAN.
 * Chaque image est déjà un montage avant/après (les deux côtés dans un seul
 * visuel). Ratio ~3:4 — affichées en `object-cover` dans une grille uniforme.
 */

export type Realisation = {
  src: string;
  /** Texte alternatif (accessibilité + SEO) */
  alt: string;
  /** Légende courte affichée sous la photo */
  title: string;
  width: number;
  height: number;
};

const dir = "/avant_apres_photo";

export const realisations: Realisation[] = [
  {
    src: `${dir}/1781211164446.jpg`,
    alt: "Avant / après : escalier en pierre encrassé puis nettoyé et dégraissé par SANAD CLEAN",
    title: "Escalier en pierre redonné à neuf",
    width: 896,
    height: 1195,
  },
  {
    src: `${dir}/1781211162273.jpg`,
    alt: "Avant / après : pièce au sol couvert de saletés puis entièrement remise en état",
    title: "Pièce remise en état après débarras",
    width: 896,
    height: 1195,
  },
  {
    src: `${dir}/file_00000000ff2c71f4b37da4aee2ca8d13.jpg`,
    alt: "Avant / après : salle de bain encrassée puis nettoyée et désinfectée",
    title: "Salle de bain nettoyée et désinfectée",
    width: 1086,
    height: 1448,
  },
  {
    src: `${dir}/1781211328317.jpg`,
    alt: "Avant / après : WC fortement entartrés puis détartrés et désinfectés",
    title: "Sanitaires détartrés et désinfectés",
    width: 704,
    height: 937,
  },
  {
    src: `${dir}/1781211223539.jpg`,
    alt: "Avant / après : local technique encombré de débris puis dégagé et nettoyé",
    title: "Local technique dégagé et nettoyé",
    width: 896,
    height: 1195,
  },
  {
    src: `${dir}/1781211277499.jpg`,
    alt: "Avant / après : cave jonchée de gravats puis débarrassée et sol nettoyé",
    title: "Cave débarrassée, sol nettoyé",
    width: 896,
    height: 1195,
  },
];
