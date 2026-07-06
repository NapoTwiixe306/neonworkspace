import type { MetadataRoute } from "next";
import { SITE } from "@/src/lib/site";

// Web App Manifest : nom, couleurs et icônes du site (PWA basique, meilleur
// score Lighthouse, écran d'accueil mobile propre). Les icônes pointent vers
// les routes générées par app/icon.tsx et app/apple-icon.tsx.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: SITE.shortName,
    description: SITE.description,
    lang: "fr-BE",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
    icons: [
      { src: "/icon", sizes: "64x64", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
