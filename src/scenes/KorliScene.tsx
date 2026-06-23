"use client";

import ProjectScene from "@/src/components/ProjectScene";

export default function KorliScene() {
  return (
    <ProjectScene
      scene="korli"
      kicker="SaaS · Projet perso"
      name="Korli"
      tagline="Le link-in-bio qui transforme ton trafic en revenus."
      description={[
        "Un seul lien qui s'adapte à chaque source de trafic : TikTok, Instagram, newsletter. Korli réorganise la page selon d'où vient le visiteur, capture les emails et montre noir sur blanc ce qui rapporte vraiment.",
        "C'est mon premier SaaS, mené de l'idée au produit en ligne : dashboard, analytics, A/B testing et abonnements gérés via Stripe.",
      ]}
      tech={["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "Stripe"]}
      screenshot="/projects/korli.png"
      link={{ label: "Voir Korli", href: "https://korli.fr" }}
    />
  );
}
