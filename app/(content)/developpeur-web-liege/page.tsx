import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/src/lib/site";
import { villes } from "@/src/content/villes";
import { metiers } from "@/src/content/metiers";
import { breadcrumbSchema, faqSchema } from "@/src/lib/schema";

export const metadata: Metadata = {
  title: "Développeur web & front-end freelance à Liège",
  description:
    "Développeur web freelance à Liège : création de sites vitrines, e-commerce et applications sur mesure en Next.js, React et TypeScript. Rapides, accessibles et bien référencés.",
  alternates: { canonical: "/developpeur-web-liege" },
};

// Tarifs de lancement : volontairement sous la fourchette basse du marché
// liégeois (cf. l'article de blog sur les prix : vitrine 1 500-5 000 €),
// cohérents avec un début d'activité freelance adossé à de vrais produits
// livrés (Korli, BluePortel).
const services = [
  {
    title: "Sites vitrines",
    price: "à partir de 1 200 €",
    body: "Un site professionnel qui inspire confiance, se charge en un instant et vous fait trouver sur Google. Idéal pour PME, commerces et indépendants liégeois.",
  },
  {
    title: "Applications web sur mesure",
    price: "à partir de 3 500 €",
    body: "Espace client, tableau de bord, outil métier : je développe des applications React/Next.js fiables et évolutives, pensées pour vos usages réels.",
  },
  {
    title: "Refonte & performance",
    price: "à partir de 900 €",
    body: "Votre site est lent ou daté ? Je le reconstruis sur des bases modernes : Core Web Vitals au vert, design actuel et SEO intégré.",
  },
  {
    title: "Référencement (SEO & local)",
    price: "à partir de 500 €",
    body: "Structure technique, données structurées, contenu et SEO local Liège pour apparaître là où vos clients vous cherchent.",
  },
];

const stack = ["Next.js", "React", "TypeScript", "Tailwind CSS", "SEO", "Accessibilité"];

// Déroulé type d'un projet : rassure un client qui n'a jamais commandé de site.
const steps = [
  {
    title: "Premier échange",
    body: "Vous me décrivez votre projet (formulaire, email ou appel). On clarifie ensemble le besoin, le périmètre et le budget — sans jargon et sans engagement.",
  },
  {
    title: "Devis clair et détaillé",
    body: "Vous recevez une proposition écrite : ce qui est inclus, les délais et le prix. Pas de surprise en cours de route.",
  },
  {
    title: "Maquette et validation",
    body: "Je conçois l'interface et vous la valide avant la moindre ligne de code. Les allers-retours sont prévus, pas subis.",
  },
  {
    title: "Développement",
    body: "Je développe le site avec des points d'étape réguliers : vous voyez l'avancement sur une URL de test, pas seulement à la fin.",
  },
  {
    title: "Mise en ligne et suivi",
    body: "Nom de domaine, hébergement, référencement, mise en production : je m'occupe de tout, puis je reste disponible après la livraison.",
  },
];

const faq = [
  {
    question: "Quel type de projets web réalisez-vous à Liège ?",
    answer:
      "Je réalise des sites vitrines, des sites e-commerce et des applications web sur mesure pour des entreprises et indépendants de Liège et de toute la Wallonie, principalement avec Next.js, React et TypeScript.",
  },
  {
    question: "Travaillez-vous uniquement à Liège ?",
    answer:
      "Je suis basé à Liège et je travaille avec des clients de toute la région (Seraing, Herstal, Verviers, Huy et l'ensemble de la Wallonie), ainsi qu'à distance.",
  },
  {
    question: "Combien coûte un site web ?",
    answer:
      "Mes sites vitrines démarrent à 1 200 € et les applications sur mesure à 3 500 €, des tarifs de lancement sous la fourchette habituelle du marché liégeois (1 500 € à 5 000 € pour un site vitrine). Chaque projet fait l'objet d'un devis clair et détaillé.",
  },
];

export default function DeveloppeurWebLiege() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Accueil", path: "/" },
              { name: "Développeur web Liège", path: "/developpeur-web-liege" },
            ]),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faq)) }}
      />

      <section className="mb-16">
        <p className="text-sm font-medium text-sky-300">
          Freelance · Liège &amp; Wallonie
        </p>
        <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          Développeur web &amp; front-end à Liège
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/65">
          Je conçois des sites et des applications web modernes, rapides,
          accessibles et bien référencés, avec Next.js, React et TypeScript. De
          la première maquette à la mise en ligne, vous avez un seul
          interlocuteur : moi.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="rounded-xl border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/15"
          >
            Démarrer un projet
          </Link>
          <Link
            href="/blog"
            className="rounded-xl border border-white/10 px-5 py-2.5 text-sm text-white/70 transition-colors hover:text-white"
          >
            Lire le blog
          </Link>
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {stack.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/55"
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold tracking-tight">
          Ce que je peux faire pour vous
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <h3 className="text-lg font-semibold text-white">{s.title}</h3>
                <p className="text-sm font-medium text-sky-300">{s.price}</p>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {s.body}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-5 text-sm leading-relaxed text-white/50">
          Des tarifs de lancement volontairement accessibles : je développe mon
          activité freelance, avec la même exigence que sur mes propres
          produits (Korli, BluePortel). Chaque projet fait l&apos;objet
          d&apos;un devis précis, sans frais cachés.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold tracking-tight">
          Pourquoi travailler avec un développeur local
        </h2>
        <div className="mt-5 space-y-4 text-[0.975rem] leading-relaxed text-white/65">
          <p>
            Travailler avec un développeur basé à Liège, c&apos;est un
            interlocuteur disponible, qui connaît le tissu économique local et
            avec qui l&apos;on peut se rencontrer. C&apos;est aussi un projet
            mené de bout en bout, sans chaîne d&apos;intermédiaires : vous parlez
            directement à la personne qui conçoit et code votre site.
          </p>
          <p>
            J&apos;interviens dans toute la province de Liège et en Wallonie,
            en présentiel comme à distance :{" "}
            {villes.map((v, i) => (
              <span key={v.slug}>
                <Link
                  href={`/developpeur-web/${v.slug}`}
                  className="text-sky-300 underline decoration-sky-400/40 underline-offset-2 transition-colors hover:text-sky-200"
                >
                  {v.name}
                </Link>
                {i < villes.length - 1 ? ", " : ""}
              </span>
            ))}
            , et les communes alentour.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold tracking-tight">
          Des sites pensés pour votre secteur
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/60">
          Chaque métier a ses codes en ligne : ce qui convertit pour un
          restaurant ne convertit pas pour un cabinet d&apos;avocat. J&apos;ai
          détaillé les enjeux, fonctionnalités et budgets secteur par secteur :
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {metiers.map((m) => (
            <Link
              key={m.slug}
              href={`/site-internet/${m.slug}`}
              className="rounded-full border border-white/10 bg-white/[0.02] px-3.5 py-1.5 text-sm text-white/70 transition-colors hover:border-white/25 hover:text-white"
            >
              {m.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold tracking-tight">
          Comment ça se passe
        </h2>
        <ol className="mt-6 space-y-4">
          {steps.map((step, i) => (
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
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold tracking-tight">
          Questions fréquentes
        </h2>
        <div className="mt-6 space-y-4">
          {faq.map((item) => (
            <details
              key={item.question}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-5"
            >
              <summary className="cursor-pointer list-none font-medium text-white marker:hidden">
                {item.question}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      <aside className="rounded-2xl border border-sky-500/20 bg-gradient-to-br from-sky-500/10 to-fuchsia-500/5 p-8 text-center">
        <h2 className="text-xl font-semibold">Parlons de votre projet</h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-white/60">
          Un site, une refonte, une application ? Décrivez-moi votre besoin, je
          vous réponds rapidement avec un premier avis et un devis clair.
        </p>
        <div className="mt-5 flex flex-col items-center gap-3">
          <Link
            href="/contact"
            className="inline-block rounded-xl border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/15"
          >
            Décrire mon projet
          </Link>
          <a
            href={`mailto:${SITE.author.email}`}
            className="text-sm text-white/50 transition-colors hover:text-white"
          >
            ou par email : {SITE.author.email}
          </a>
        </div>
      </aside>
    </>
  );
}
