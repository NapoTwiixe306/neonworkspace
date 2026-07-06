import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Build autonome pour Docker : .next/standalone contient le serveur et ses
  // dépendances, sans node_modules complet (image finale légère).
  output: "standalone",
  // Plusieurs lockfiles existent (un parasite dans ~). On épingle la racine
  // du workspace sur ce projet pour éviter une résolution de modules erronée.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
