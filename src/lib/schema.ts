// Générateurs de données structurées Schema.org (JSON-LD). Injectées en SSR
// dans les pages : c'est ce que Google et les moteurs IA (AI Overviews,
// Perplexity, ChatGPT) lisent pour comprendre QUI tu es et OÙ tu opères.
import { SITE, SITE_URL } from "@/src/lib/site";

const personId = `${SITE_URL}/#person`;
const businessId = `${SITE_URL}/#localbusiness`;

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId,
    name: SITE.author.name,
    jobTitle: SITE.author.jobTitle,
    email: `mailto:${SITE.author.email}`,
    image: SITE.author.image,
    url: SITE_URL,
    sameAs: SITE.author.sameAs,
    knowsAbout: [
      "Développement web",
      "Développement front-end",
      "Next.js",
      "React",
      "TypeScript",
      "Référencement SEO",
      "Accessibilité web",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.geo.city,
      addressRegion: SITE.geo.region,
      addressCountry: SITE.geo.country,
    },
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": businessId,
    name: SITE.name,
    image: SITE.author.image,
    url: SITE_URL,
    email: `mailto:${SITE.author.email}`,
    priceRange: "€€",
    founder: { "@id": personId },
    description: SITE.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.geo.city,
      addressRegion: SITE.geo.region,
      addressCountry: SITE.geo.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    areaServed: SITE.geo.areaServed.map((name) => ({ "@type": "City", name })),
    knowsLanguage: ["fr", "en"],
  };
}

export function articleSchema(post: {
  title: string;
  description: string;
  slug: string;
  date: string;
  updated?: string;
}) {
  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: post.title,
    description: post.description,
    url,
    mainEntityOfPage: url,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    inLanguage: "fr-BE",
    author: { "@id": personId },
    publisher: { "@id": personId },
    image: SITE.author.image,
  };
}

export function projectSchema(project: {
  slug: string;
  name: string;
  type: "saas" | "site";
  tagline: string;
  intro: string;
  link: { href: string };
  screenshot?: string;
}) {
  const url = `${SITE_URL}/projets/${project.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": project.type === "saas" ? "SoftwareApplication" : "CreativeWork",
    "@id": `${url}#project`,
    name: project.name,
    headline: project.tagline,
    description: project.intro,
    url,
    // Fallback sur le portrait si le projet n'a pas de capture (API).
    image: project.screenshot
      ? `${SITE_URL}${project.screenshot}`
      : SITE.author.image,
    inLanguage: "fr",
    author: { "@id": personId },
    creator: { "@id": personId },
    ...(project.type === "saas"
      ? { applicationCategory: "BusinessApplication", operatingSystem: "Web" }
      : {}),
    // Le produit réellement en ligne.
    sameAs: project.link.href,
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

// Petit composant utilitaire pour injecter un objet JSON-LD dans le <head>/SSR.
export function jsonLd(data: object) {
  return {
    type: "application/ld+json",
    dangerouslySetInnerHTML: { __html: JSON.stringify(data) },
  };
}
