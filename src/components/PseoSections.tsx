import Link from "next/link";
import { projects } from "@/src/content/projects";

// Sections partagées des pages PSEO (villes et métiers). Elles portent le
// contenu « offre » commun (tarifs, processus, engagements, réalisations,
// guides) pendant que chaque page apporte son contenu unique (contexte local
// ou métier, besoins, FAQ). Composants serveur, zéro JS côté client.

const linkCls =
  "text-sky-300 underline decoration-sky-400/40 underline-offset-2 transition-colors hover:text-sky-200";

const tarifs = [
  {
    title: "Site one-page / landing",
    price: "à partir de 900 €",
    body: "Une page unique qui présente l'activité, rassure et déclenche le contact. Idéal pour démarrer vite avec un budget maîtrisé.",
  },
  {
    title: "Site vitrine (5 à 10 pages)",
    price: "à partir de 1 200 €",
    body: "Le standard professionnel : design sur mesure, pages services, SEO local intégré, formulaire de contact et formation à la prise en main.",
  },
  {
    title: "Application web sur mesure",
    price: "à partir de 3 500 €",
    body: "Réservation, espace client, outil métier : du développement spécifique, dimensionné à votre besoin réel.",
  },
  {
    title: "Refonte & performance",
    price: "à partir de 900 €",
    body: "Reconstruction sur des bases modernes avec migration SEO complète : redirections, contenu conservé, positions protégées.",
  },
  {
    title: "Référencement local",
    price: "à partir de 500 €",
    body: "Audit, données structurées, fiche Google Business optimisée et plan d'action : être trouvé là où vos clients cherchent.",
  },
];

export function TarifsSection() {
  return (
    <section className="mb-14">
      <h2 className="text-2xl font-semibold tracking-tight">
        Tarifs de départ, sans surprise
      </h2>
      <div className="mt-6 space-y-3">
        {tarifs.map((t) => (
          <div
            key={t.title}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-5"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
              <h3 className="font-semibold text-white">{t.title}</h3>
              <p className="text-sm font-medium text-sky-300">{t.price}</p>
            </div>
            <p className="mt-1.5 text-sm leading-relaxed text-white/60">
              {t.body}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm leading-relaxed text-white/50">
        Chaque projet fait l&apos;objet d&apos;un devis fixe et détaillé avant
        engagement. Pour un indépendant ou une société, le site est une charge
        professionnelle déductible : l&apos;effort réel descend souvent de
        40 % ou plus, comme expliqué dans{" "}
        <Link href="/blog/subsides-site-web-wallonie" className={linkCls}>
          le guide des aides et de la fiscalité
        </Link>
        .
      </p>
    </section>
  );
}

const etapes = [
  {
    title: "Premier échange",
    body: "Vous décrivez votre projet (formulaire, email ou rencontre). On clarifie le besoin, le périmètre et le budget, sans jargon et sans engagement.",
  },
  {
    title: "Devis fixe et détaillé",
    body: "Ce qui est inclus, les délais, le prix : tout est écrit avant de commencer. Le prix annoncé est le prix payé.",
  },
  {
    title: "Maquette validée avant le code",
    body: "Vous voyez et validez le design avant la première ligne de code. Les allers-retours sont prévus au devis, pas subis.",
  },
  {
    title: "Développement suivi en direct",
    body: "Le site se construit sur une URL de test que vous consultez quand vous voulez : vous suivez l'avancement, pas des promesses.",
  },
  {
    title: "Mise en ligne et suivi",
    body: "Nom de domaine, hébergement, indexation Google : je m'occupe de tout, je vous forme à la prise en main, et je reste disponible après.",
  },
];

export function ProcessusSection() {
  return (
    <section className="mb-14">
      <h2 className="text-2xl font-semibold tracking-tight">
        Comment ça se passe, concrètement
      </h2>
      <ol className="mt-6 space-y-4">
        {etapes.map((step, i) => (
          <li
            key={step.title}
            className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5"
          >
            <span
              aria-hidden
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-sky-400/30 bg-sky-400/10 text-sm font-semibold text-sky-300"
            >
              {i + 1}
            </span>
            <div>
              <h3 className="font-semibold text-white">{step.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-white/60">
                {step.body}
              </p>
            </div>
          </li>
        ))}
      </ol>
      <p className="mt-4 text-sm leading-relaxed text-white/50">
        Les délais typiques : 1 à 2 semaines pour un one-page, 3 à 6 semaines
        pour un site vitrine. Le détail étape par étape est dans{" "}
        <Link href="/blog/delai-creation-site-web" className={linkCls}>
          l&apos;article sur les délais réels
        </Link>
        .
      </p>
    </section>
  );
}

const engagements = [
  {
    title: "Le site vous appartient, entièrement",
    body: "Nom de domaine à votre nom, tous les accès remis à la livraison, aucun abonnement captif. Vous pouvez partir quand vous voulez : c'est la meilleure raison de rester.",
  },
  {
    title: "Une performance mesurable",
    body: "Core Web Vitals au vert, chargement quasi instantané : vérifiable par vous-même dans PageSpeed Insights, sur mon site comme sur ceux que je livre.",
  },
  {
    title: "Le SEO local dans les fondations",
    body: "Données structurées, géolocalisation, fiche Google reliée : le référencement se construit avec le site, pas après coup en supplément.",
  },
  {
    title: "Un seul interlocuteur, qui code",
    body: "La personne qui vous répond est celle qui conçoit et développe votre site. Pas de chaîne d'intermédiaires, pas de déperdition.",
  },
];

export function EngagementsSection() {
  return (
    <section className="mb-14">
      <h2 className="text-2xl font-semibold tracking-tight">
        Mes engagements
      </h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {engagements.map((e) => (
          <div
            key={e.title}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
          >
            <h3 className="font-semibold text-white">{e.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/60">
              {e.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function RealisationsSection() {
  return (
    <section className="mb-14">
      <h2 className="text-2xl font-semibold tracking-tight">
        Des réalisations testables, pas des promesses
      </h2>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/60">
        Chaque projet ci-dessous a été conçu, designé et développé de A à Z.
        Ouvrez-les, testez leur vitesse : c&apos;est le niveau d&apos;exigence
        que je livre.
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/projets/${p.slug}`}
            className="group rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-colors hover:border-white/20 hover:bg-white/[0.04]"
          >
            <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-sky-300/80">
              {p.kicker}
            </p>
            <h3 className="mt-1.5 font-semibold text-white group-hover:text-sky-300">
              {p.name}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-white/55">
              {p.tagline}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}

const guides = [
  {
    href: "/blog/prix-site-web-liege",
    title: "Combien coûte un site web à Liège ?",
    body: "Les fourchettes honnêtes du marché, et le coût réel après fiscalité.",
  },
  {
    href: "/blog/agence-web-ou-freelance-liege",
    title: "Agence ou freelance ?",
    body: "Le comparatif chiffré, avec un test en 6 questions pour trancher.",
  },
  {
    href: "/blog/referencement-local-liege",
    title: "Le référencement local, pas à pas",
    body: "Fiche Google, avis, contenu : le plan d'action sur 30 jours.",
  },
  {
    href: "/blog/subsides-site-web-wallonie",
    title: "Subsides et aides en Wallonie",
    body: "Chèques-entreprises et déductibilité : ce qui allège vraiment la facture.",
  },
];

export function GuidesSection() {
  return (
    <section className="mb-14">
      <h2 className="text-2xl font-semibold tracking-tight">
        Avant de vous lancer : les guides utiles
      </h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {guides.map((g) => (
          <Link
            key={g.href}
            href={g.href}
            className="group rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-colors hover:border-white/20 hover:bg-white/[0.04]"
          >
            <h3 className="font-semibold text-white group-hover:text-sky-300">
              {g.title}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-white/55">
              {g.body}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
