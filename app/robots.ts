import type { MetadataRoute } from "next";
import { SITE_URL } from "@/src/lib/site";

// Autorise explicitement les crawlers classiques ET les crawlers IA (GPTBot,
// ClaudeBot, PerplexityBot…) : c'est la base du GEO, on veut être lisible et
// citable par les moteurs de réponse IA.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-Web", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
