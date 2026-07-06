import type { Scene } from "@/src/store/ui-store";

export interface Project {
  slug: string;
  // Scène associée dans l'expérience immersive (couleur, dock).
  scene: Extract<Scene, "korli" | "gridbase" | "blueportel">;
  // "saas" => SoftwareApplication, "site" => CreativeWork (données structurées).
  type: "saas" | "site";
  kicker: string;
  name: string;
  tagline: string;
  // Description courte (1 à 2 paragraphes), utilisée dans la scène animée.
  description: string[];
  tech: string[];
  // Capture du site. Absente pour un projet sans interface (API) : on affiche
  // alors le mockup terminal ci-dessous à la place de la fenêtre navigateur.
  screenshot?: string;
  terminal?: { command: string; lines: string[] };
  link: { label: string; href: string };
  // Contenu enrichi pour la page indexable /projets/[slug].
  role: string;
  intro: string;
  highlights: string[];
  // Métadonnées de page.
  metaTitle: string;
  metaDescription: string;
}

const korli: Project = {
  slug: "korli",
  scene: "korli",
  type: "saas",
  kicker: "SaaS · Projet perso",
  name: "Korli",
  tagline: "Le link-in-bio qui transforme le trafic en revenus.",
  description: [
    "Un seul lien qui s'adapte à chaque source de trafic : TikTok, Instagram, newsletter. Korli réorganise la page selon d'où vient le visiteur, capture les emails et montre noir sur blanc ce qui rapporte vraiment.",
    "C'est mon SaaS, mené de l'idée au produit en ligne : dashboard, analytics, A/B testing et abonnements gérés via Stripe.",
  ],
  tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "Stripe"],
  screenshot: "/projects/korli.png",
  link: { label: "Voir Korli en ligne", href: "https://korli.fr" },
  role: "Conception, design et développement (projet personnel)",
  intro:
    "Korli est une plateforme de link-in-bio intelligente. Là où la plupart des pages de liens affichent la même chose à tout le monde, Korli adapte dynamiquement le contenu au visiteur selon sa source de trafic, pour convertir une audience organique en abonnés et en revenus.",
  highlights: [
    "Règles intelligentes qui réorganisent la page selon la source (TikTok, Instagram, newsletter…).",
    "Capture d'emails intégrée pour générer des leads avant que le visiteur ne reparte.",
    "Analytics par source : clics, leads et impact sur le revenu, mesurés précisément.",
    "A/B testing et simulations pour repérer les fuites de conversion.",
    "Abonnements et paiements gérés via Stripe, configuration sans code.",
  ],
  metaTitle: "Korli — SaaS link-in-bio intelligent (étude de cas)",
  metaDescription:
    "Korli, mon SaaS de link-in-bio qui adapte la page à chaque source de trafic. Next.js, TypeScript, Prisma, Stripe. Conception et développement de A à Z.",
};

const blueportel: Project = {
  slug: "blueportel",
  scene: "blueportel",
  type: "site",
  kicker: "Site client",
  name: "BluePortel",
  tagline: "Location de mobil-homes vue mer, à Le Portel.",
  description: [
    "Un site de réservation directe pour deux mobil-homes face à la mer, sur la Côte d'Opale. Galeries, comparaison des offres, tarifs et réservation en ligne, sans intermédiaire qui prend sa commission.",
    "Je l'ai conçu et développé pour mon père : à lui les réservations au meilleur tarif, sans plateforme qui rogne sur sa marge.",
  ],
  tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "Stripe"],
  screenshot: "/projects/blueportel.png",
  link: { label: "Voir BluePortel en ligne", href: "https://blueportel.fr" },
  role: "Conception et développement (projet client)",
  intro:
    "BluePortel est une plateforme de réservation directe pour des séjours balnéaires en Côte d'Opale. L'objectif : permettre aux propriétaires de louer leurs mobil-homes au meilleur tarif, sans passer par une plateforme qui prélève une commission sur chaque réservation.",
  highlights: [
    "Présentation des deux mobil-homes (Prestige 6 personnes, Horizon 4 personnes) avec comparaison détaillée.",
    "Galeries photos immersives et informations sur les tarifs, services et activités autour.",
    "Réservation en ligne directe, sans intermédiaire ni commission.",
    "FAQ complète et témoignages clients pour rassurer avant de réserver.",
    "Accueil personnalisé mis en avant, contact direct avec les propriétaires.",
  ],
  metaTitle: "BluePortel — Site de réservation de mobil-homes (étude de cas)",
  metaDescription:
    "BluePortel, site de réservation directe de mobil-homes vue mer à Le Portel, développé en Next.js, TypeScript et Stripe. Projet client de A à Z.",
};

const gridbaseApi: Project = {
  slug: "gridbase-api",
  scene: "gridbase",
  type: "saas",
  kicker: "Open source · API REST",
  name: "GridBase API",
  tagline: "L'API ouverte des données motorsport : F1, WEC et IMSA.",
  description: [
    "Pilotes, équipes, engagés : GridBase API centralise les données de trois grandes disciplines du sport automobile dans une API REST propre, typée et documentée, sous licence open source.",
    "Construite en TypeScript avec Fastify, Prisma et MySQL, c'est la fondation de GridBase, la plateforme motorsport que je développe actuellement. Le code est public sur GitHub.",
  ],
  tech: ["TypeScript", "Fastify", "Prisma", "MySQL"],
  terminal: {
    command: "curl gridbase-api/v1/drivers?series=f1",
    lines: [
      "{",
      "  \"data\": [",
      "    {",
      "      \"name\": \"Max Verstappen\",",
      "      \"team\": \"Red Bull Racing\",",
      "      \"series\": \"F1\",",
      "      \"number\": 1",
      "    },",
      "    ...",
      "  ],",
      "  \"count\": 20",
      "}",
    ],
  },
  link: {
    label: "Voir le code sur GitHub",
    href: "https://github.com/NapoTwiixe306/gridbase-api",
  },
  role: "Conception et développement (projet open source, en cours)",
  intro:
    "GridBase API est une API REST open source qui centralise les données du sport automobile : pilotes, équipes et engagés à travers la Formule 1, le WEC (endurance) et l'IMSA. Elle sert de fondation à GridBase, la plateforme web en cours de construction qui exploitera ces données. Le projet est né d'un constat simple : les données motorsport sont éparpillées, hétérogènes et rarement accessibles proprement pour les développeurs.",
  highlights: [
    "Trois disciplines couvertes : Formule 1, WEC (endurance) et IMSA, dans un modèle de données unifié.",
    "API REST construite avec Fastify : rapide, typée de bout en bout en TypeScript.",
    "Modèle de données géré avec Prisma sur MySQL : migrations propres et schéma versionné.",
    "Open source sous licence AGPL : le code est public et réutilisable sur GitHub.",
    "Fondation de GridBase, la plateforme web motorsport en cours de développement.",
  ],
  metaTitle: "GridBase API — API open source de données motorsport",
  metaDescription:
    "GridBase API, mon API REST open source de données motorsport : pilotes, équipes et engagés en F1, WEC et IMSA. TypeScript, Fastify, Prisma, MySQL. Code public sur GitHub.",
};

export const projects: Project[] = [korli, gridbaseApi, blueportel];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
