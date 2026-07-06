import type { MetadataRoute } from "next";
import { SITE_URL } from "@/src/lib/site";
import { postList } from "@/src/content/posts";
import { projects } from "@/src/content/projects";
import { villes } from "@/src/content/villes";
import { metiers } from "@/src/content/metiers";

export default function sitemap(): MetadataRoute.Sitemap {
  // Pas de lastModified sur les pages statiques et projets : un faux "modifié
  // à chaque build" dilue le signal auprès de Google. Seuls les articles de
  // blog portent leur vraie date de publication/mise à jour.
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: "monthly", priority: 1 },
    {
      url: `${SITE_URL}/developpeur-web-liege`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    { url: `${SITE_URL}/projets`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/blog`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/contact`, changeFrequency: "yearly", priority: 0.8 },
  ];

  const projectPages: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${SITE_URL}/projets/${p.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const villePages: MetadataRoute.Sitemap = villes.map((v) => ({
    url: `${SITE_URL}/developpeur-web/${v.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const metierPages: MetadataRoute.Sitemap = metiers.map((m) => ({
    url: `${SITE_URL}/site-internet/${m.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const posts: MetadataRoute.Sitemap = postList.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.updated ?? p.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...villePages,
    ...metierPages,
    ...projectPages,
    ...posts,
  ];
}
