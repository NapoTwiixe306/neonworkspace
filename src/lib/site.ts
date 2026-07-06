// Configuration centrale du site. Domaine de production confirmé : jmcorp.fr.
// Tout le SEO en dépend : canonicals, sitemap, robots, Open Graph, JSON-LD.
export const SITE_URL = "https://www.jmcorp.fr";

export const SITE = {
  url: SITE_URL,
  name: "Julien Milants, développeur web & front-end à Liège",
  shortName: "Julien Milants",
  // Personne derrière le site (données structurées Person / LocalBusiness).
  author: {
    name: "Julien Milants",
    jobTitle: "Développeur web & front-end",
    email: "julien.milants@gmail.com",
    image: `${SITE_URL}/julien.png`,
    sameAs: [
      // Profils publics : ils renforcent le E-E-A-T et le GEO.
      "https://github.com/NapoTwiixe306",
      "https://twitter.com/JulienMl3",
      "https://www.instagram.com/julien.mlnts",
    ],
  },
  // Zone géographique ciblée (SEO local Liège / Wallonie).
  geo: {
    city: "Liège",
    region: "Wallonie",
    country: "BE",
    latitude: 50.6326,
    longitude: 5.5797,
    areaServed: ["Liège", "Seraing", "Herstal", "Verviers", "Huy", "Wallonie"],
  },
  // Positionnement : portfolio de développeur d'abord (CV, écoles), missions
  // freelance en second.
  description:
    "Développeur web et front-end à Liège. Je conçois des sites et des applications web modernes (Next.js, React, TypeScript), rapides, accessibles et bien référencés. Disponible pour des missions freelance.",
  locale: "fr_BE",
} as const;

export const NAV = [
  { href: "/", label: "Accueil" },
  { href: "/developpeur-web-liege", label: "Développeur web Liège" },
  { href: "/projets", label: "Projets" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

// Profils publics affichés (footer) et repris dans les données structurées.
export const SOCIAL = [
  { label: "GitHub", href: "https://github.com/NapoTwiixe306" },
  { label: "X (Twitter)", href: "https://twitter.com/JulienMl3" },
  { label: "Instagram", href: "https://www.instagram.com/julien.mlnts" },
] as const;
