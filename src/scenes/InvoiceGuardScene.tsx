"use client";

import ProjectScene from "@/src/components/ProjectScene";

export default function InvoiceGuardScene() {
  return (
    <ProjectScene
      scene="invoiceguard"
      kicker="SaaS · Projet perso"
      name="InvoiceGuard"
      tagline="Le pare-feu anti-impayés des freelances."
      description={[
        "Relancer un client qui tarde à payer, c'est pénible, et on finit toujours par repousser. InvoiceGuard s'en occupe à votre place : relances automatiques, plans de paiement échelonnés et escalade jusqu'à la mise en demeure.",
        "C'est mon deuxième SaaS, avec un score de fiabilité mutualisé entre freelances et les paiements gérés via Stripe.",
      ]}
      tech={["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "Stripe"]}
      screenshot="/projects/invoiceguard.png"
      link={{ label: "Voir InvoiceGuard", href: "https://invoiceguard.fr" }}
    />
  );
}
