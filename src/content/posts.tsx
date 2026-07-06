import type { Post, PostMeta } from "@/src/content/post-types";
import { agenceOuFreelanceLiege } from "@/src/content/articles/agence-web-ou-freelance-liege";
import { subsidesSiteWebWallonie } from "@/src/content/articles/subsides-site-web-wallonie";
import { wordpressOuSurMesure } from "@/src/content/articles/wordpress-ou-site-sur-mesure";
import { prixSiteWebLiege } from "@/src/content/articles/prix-site-web-liege";
import { pourquoiNextjs } from "@/src/content/articles/pourquoi-nextjs-site-entreprise";
import { referencementLocalLiege } from "@/src/content/articles/referencement-local-liege";
import { delaiCreationSiteWeb } from "@/src/content/articles/delai-creation-site-web";
import { refonteSiteInternetSeo } from "@/src/content/articles/refonte-site-internet-seo";
import { shopifyWooCommerceOuSurMesure } from "@/src/content/articles/shopify-woocommerce-ou-sur-mesure";
import { siteInternetIndependantBelgique } from "@/src/content/articles/site-internet-independant-belgique";
import { googleBusinessProfileGuide } from "@/src/content/articles/google-business-profile-guide";
import { siteMultilingueBelgique } from "@/src/content/articles/site-multilingue-belgique";
import { siteWebSansClients } from "@/src/content/articles/site-web-sans-clients";

export type { Post, PostMeta };

// Registre des articles. Un fichier par article dans src/content/articles/.
// L'ordre d'affichage du blog est trié par date dans la page, pas ici.
export const posts: Post[] = [
  subsidesSiteWebWallonie,
  agenceOuFreelanceLiege,
  wordpressOuSurMesure,
  delaiCreationSiteWeb,
  refonteSiteInternetSeo,
  shopifyWooCommerceOuSurMesure,
  siteInternetIndependantBelgique,
  googleBusinessProfileGuide,
  siteMultilingueBelgique,
  siteWebSansClients,
  referencementLocalLiege,
  pourquoiNextjs,
  prixSiteWebLiege,
];

export const postList: PostMeta[] = posts.map(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ({ Body, ...meta }) => meta,
);

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
