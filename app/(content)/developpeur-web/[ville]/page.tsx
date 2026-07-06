import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { villes, getVille } from "@/src/content/villes";
import { metiers } from "@/src/content/metiers";
import { SITE } from "@/src/lib/site";
import { breadcrumbSchema, faqSchema } from "@/src/lib/schema";
import {
  TarifsSection,
  ProcessusSection,
  EngagementsSection,
  RealisationsSection,
  GuidesSection,
} from "@/src/components/PseoSections";

// Pages locales (PSEO) : une page complète par commune de la province de
// Liège. Le contenu unique (contexte économique, besoins, FAQ) vient de
// src/content/villes.ts ; les sections d'offre (tarifs, processus,
// engagements, réalisations, guides) sont partagées avec les pages métiers.

export function generateStaticParams() {
  return villes.map((v) => ({ ville: v.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ ville: string }>;
}): Promise<Metadata> {
  const { ville: slug } = await params;
  const ville = getVille(slug);
  if (!ville) return {};
  return {
    title: ville.metaTitle,
    description: ville.metaDescription,
    alternates: { canonical: `/developpeur-web/${ville.slug}` },
  };
}

const linkCls =
  "text-sky-300 underline decoration-sky-400/40 underline-offset-2 transition-colors hover:text-sky-200";

export default async function VillePage({
  params,
}: {
  params: Promise<{ ville: string }>;
}) {
  const { ville: slug } = await params;
  const ville = getVille(slug);
  if (!ville) notFound();

  const autres = villes.filter((v) => v.slug !== ville.slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Accueil", path: "/" },
              { name: "Développeur web Liège", path: "/developpeur-web-liege" },
              { name: ville.name, path: `/developpeur-web/${ville.slug}` },
            ]),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(ville.faq)),
        }}
      />

      {/* ---- Hero localisé ---- */}
      <section className="mb-14">
        <p className="text-sm font-medium text-sky-300">
          Province de Liège · {ville.name}
        </p>
        <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          Développeur web {ville.locative}
        </h1>
        <div className="mt-5 max-w-2xl space-y-4 text-lg leading-relaxed text-white/65">
          {ville.intro.map((p) => (
            <p key={p.slice(0, 32)}>{p}</p>
          ))}
        </div>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="rounded-xl border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/15"
          >
            Décrire mon projet
          </Link>
          <Link
            href="/projets"
            className="rounded-xl border border-white/10 px-5 py-2.5 text-sm text-white/70 transition-colors hover:text-white"
          >
            Voir mes réalisations
          </Link>
        </div>
      </section>

      {/* ---- Besoins du tissu local (contenu unique) ---- */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold tracking-tight">
          Des sites pensés pour le tissu économique de {ville.name}
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ville.besoins.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
            >
              <h3 className="text-lg font-semibold text-white">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {b.body}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/50">
          Votre secteur a ses propres codes en ligne : consultez aussi mes
          pages dédiées, par exemple{" "}
          {metiers.slice(0, 3).map((m, i) => (
            <span key={m.slug}>
              <Link href={`/site-internet/${m.slug}`} className={linkCls}>
                site pour {m.label}
              </Link>
              {i < 2 ? ", " : ""}
            </span>
          ))}{" "}
          et{" "}
          <Link href="/site-internet/artisan" className={linkCls}>
            les autres secteurs
          </Link>
          .
        </p>
      </section>

      {/* ---- Méthode SEO local ---- */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold tracking-tight">
          Être trouvé {ville.locative} : la méthode
        </h2>
        <div className="mt-5 space-y-4 text-[0.975rem] leading-relaxed text-white/65">
          <p>
            Ressortir sur « votre métier + {ville.name} » ne doit rien au
            hasard. La méthode tient en trois piliers, construits ensemble :
            un <strong className="font-semibold text-white">site
            techniquement irréprochable</strong> (chargement quasi instantané,
            parfait sur mobile, données structurées qui disent à Google qui
            vous êtes et où vous opérez), une{" "}
            <strong className="font-semibold text-white">fiche Google
            Business exploitée à fond</strong> (catégories précises, zone
            desservie, photos et avis réguliers), et du{" "}
            <strong className="font-semibold text-white">contenu qui
            répond aux vraies recherches locales</strong>, page par page.
          </p>
          <p>
            Je livre les trois : le site avec le SEO local dans les
            fondations, la fiche Google configurée et optimisée à la mise en
            ligne, et un plan d&apos;action simple pour entretenir vos
            positions en quelques minutes par semaine. La méthode complète
            est publique, dans{" "}
            <Link href="/blog/referencement-local-liege" className={linkCls}>
              mon guide du référencement local
            </Link>{" "}
            : appliquez-la vous-même, ou confiez-la moi.
          </p>
        </div>
      </section>

      <TarifsSection />
      <ProcessusSection />
      <EngagementsSection />
      <RealisationsSection />

      {/* ---- FAQ locale (contenu unique) ---- */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold tracking-tight">
          Questions fréquentes {ville.locative}
        </h2>
        <div className="mt-6 space-y-4">
          {ville.faq.map((item) => (
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

      <GuidesSection />

      {/* ---- Zone d'intervention et maillage ---- */}
      <section className="mb-14">
        <h2 className="text-xl font-semibold tracking-tight">
          Zone d&apos;intervention
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-white/60">
          Autour de {ville.name}, j&apos;interviens aussi à{" "}
          {ville.voisines.join(", ")}, ainsi que dans toute la province de
          Liège :{" "}
          {autres.map((v, i) => (
            <span key={v.slug}>
              <Link href={`/developpeur-web/${v.slug}`} className={linkCls}>
                {v.name}
              </Link>
              {i < autres.length - 1 ? ", " : ""}
            </span>
          ))}{" "}
          et bien sûr{" "}
          <Link href="/developpeur-web-liege" className={linkCls}>
            Liège
          </Link>
          .
        </p>
      </section>

      {/* ---- CTA final ---- */}
      <aside className="rounded-2xl border border-sky-500/20 bg-gradient-to-br from-sky-500/10 to-fuchsia-500/5 p-8 text-center">
        <h2 className="text-xl font-semibold">
          Un projet web {ville.locative} ?
        </h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-white/60">
          Décrivez votre besoin en quelques lignes : premier avis honnête et
          devis fixe, sans engagement. Rendez-vous sur place ou en visio, au
          choix.
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
