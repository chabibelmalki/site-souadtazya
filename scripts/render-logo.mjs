import sharp from "sharp";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const pub = fileURLToPath(new URL("../public/", import.meta.url));
const app = fileURLToPath(new URL("../src/app/", import.meta.url));

const mark = await readFile(pub + "logo-mark.svg");
const lockup = await readFile(pub + "logo.svg");

async function svgToPng(svg, out, width, opts = {}) {
  let img = sharp(svg, { density: 384 }).resize({ width });
  if (opts.flatten) img = img.flatten({ background: "#ffffff" });
  await img.png().toFile(out);
  console.log("✓", out.split("/").pop(), `(${width}px)`);
}

// Logo horizontal (transparent) — usage web, e-mail, documents
await svgToPng(lockup, pub + "logo.png", 1720);
// Logo horizontal sur fond blanc — usage print / fonds sombres
await svgToPng(lockup, pub + "logo-on-white.png", 1720, { flatten: true });

// Icône seule (transparent) — avatar, réseaux, app
await svgToPng(mark, pub + "logo-mark.png", 1024);
// Icône carrée — fiche Google Business / profil
await svgToPng(mark, pub + "logo-square-512.png", 512);

// Favicons & icônes d'application du site
await svgToPng(mark, app + "icon.png", 512);
await svgToPng(mark, app + "apple-icon.png", 180);

console.log("Terminé.");
