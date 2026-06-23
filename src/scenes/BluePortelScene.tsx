"use client";

import ProjectScene from "@/src/components/ProjectScene";

export default function BluePortelScene() {
  return (
    <ProjectScene
      scene="blueportel"
      kicker="Site client"
      name="BluePortel"
      tagline="Location de mobil-homes vue mer, à Le Portel."
      description={[
        "Un site de réservation directe pour deux mobil-homes face à la mer, sur la Côte d'Opale. Galeries, comparaison des offres, tarifs et réservation en ligne, sans intermédiaire qui prend sa commission.",
        "Je l'ai conçu et développé pour mon père : à lui les réservations au meilleur tarif, sans plateforme qui rogne sur sa marge.",
      ]}
      tech={["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "Stripe"]}
      screenshot="/projects/blueportel.png"
      link={{ label: "Voir BluePortel", href: "https://blueportel.fr" }}
    />
  );
}
