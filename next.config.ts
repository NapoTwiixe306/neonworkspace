import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Plusieurs lockfiles existent (un parasite dans ~). On épingle la racine
  // du workspace sur ce projet pour éviter une résolution de modules erronée.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
