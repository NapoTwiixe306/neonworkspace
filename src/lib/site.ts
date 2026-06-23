// Configuration centrale du site. ⚠️ À ADAPTER : remplace SITE_URL par ton vrai
// domaine en production (utilisé pour le sitemap, les canonicals, l'Open Graph
// et les données structurées). Tout le SEO dépend de ces constantes.
export const SITE_URL = "https://www.jmcorp.fr";

export const SITE = {
  url: SITE_URL,
  name: "Julien M, développeur web & front-end à Liège",
  shortName: "Julien M",
  // Personne derrière le site (données structurées Person / LocalBusiness).
  author: {
    name: "Julien M",
    jobTitle: "Développeur web & front-end freelance",
    email: "julien.milants@gmail.com",
    image: `${SITE_URL}/julien.png`,
    sameAs: [
      // ⚠️ Ajoute ici tes profils publics : ils renforcent le E-E-A-T et le GEO.
      // "https://github.com/ton-pseudo",
      // "https://www.linkedin.com/in/ton-profil",
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
  description:
    "Développeur web et front-end freelance à Liège. Création de sites et d'applications modernes (Next.js, React, TypeScript) rapides, accessibles et bien référencés.",
  locale: "fr_BE",
} as const;

export const NAV = [
  { href: "/", label: "Accueil" },
  { href: "/developpeur-web-liege", label: "Développeur web Liège" },
  { href: "/blog", label: "Blog" },
] as const;
