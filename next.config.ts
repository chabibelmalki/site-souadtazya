import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Le dossier du projet est la racine (évite la détection d'un lockfile parent)
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
