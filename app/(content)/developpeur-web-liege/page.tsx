import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/src/lib/site";
import { breadcrumbSchema, faqSchema } from "@/src/lib/schema";

export const metadata: Metadata = {
  title: "Développeur web & front-end freelance à Liège",
  description:
    "Développeur web freelance à Liège : création de sites vitrines, e-commerce et applications sur mesure en Next.js, React et TypeScript. Rapides, accessibles et bien référencés.",
  alternates: { canonical: "/developpeur-web-liege" },
};

const services = [
  {
    title: "Sites vitrines",
    body: "Un site professionnel qui inspire confiance, se charge en un instant et vous fait trouver sur Google. Idéal pour PME, commerces et indépendants liégeois.",
  },
  {
    title: "Applications web sur mesure",
    body: "Espace client, tableau de bord, outil métier : je développe des applications React/Next.js fiables et évolutives, pensées pour vos usages réels.",
  },
  {
    title: "Refonte & performance",
    body: "Votre site est lent ou daté ? Je le reconstruis sur des bases modernes : Core Web Vitals au vert, design actuel et SEO intégré.",
  },
  {
    title: "Référencement (SEO & local)",
    body: "Structure technique, données structurées, contenu et SEO local Liège pour apparaître là où vos clients vous cherchent.",
  },
];

const stack = ["Next.js", "React", "TypeScript", "Tailwind CSS", "SEO", "Accessibilité"];

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
      "Un site vitrine professionnel se situe généralement entre 1 500 € et 5 000 € selon le sur-mesure et les fonctionnalités. Chaque projet fait l'objet d'un devis clair et détaillé.",
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
          <a
            href={`mailto:${SITE.author.email}`}
            className="rounded-xl border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/15"
          >
            Démarrer un projet
          </a>
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
              <h3 className="text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {s.body}
              </p>
            </div>
          ))}
        </div>
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
            J&apos;interviens pour des clients de Liège, Seraing, Herstal,
            Verviers, Huy et de toute la Wallonie, en présentiel comme à
            distance.
          </p>
        </div>
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
        <a
          href={`mailto:${SITE.author.email}`}
          className="mt-5 inline-block rounded-xl border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/15"
        >
          {SITE.author.email}
        </a>
      </aside>
    </>
  );
}
