import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { metiers, getMetier } from "@/src/content/metiers";
import { villes } from "@/src/content/villes";
import { SITE } from "@/src/lib/site";
import { breadcrumbSchema, faqSchema } from "@/src/lib/schema";
import {
  ProcessusSection,
  EngagementsSection,
  RealisationsSection,
  GuidesSection,
} from "@/src/components/PseoSections";

// Pages PSEO « métiers » : une page complète par secteur (« site internet
// pour restaurant à Liège », etc.). Le contenu unique (enjeux, fonctionnalités,
// erreurs, FAQ) vient de src/content/metiers.ts.

export function generateStaticParams() {
  return metiers.map((m) => ({ metier: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ metier: string }>;
}): Promise<Metadata> {
  const { metier: slug } = await params;
  const metier = getMetier(slug);
  if (!metier) return {};
  return {
    title: metier.metaTitle,
    description: metier.metaDescription,
    alternates: { canonical: `/site-internet/${metier.slug}` },
  };
}

const linkCls =
  "text-sky-300 underline decoration-sky-400/40 underline-offset-2 transition-colors hover:text-sky-200";

export default async function MetierPage({
  params,
}: {
  params: Promise<{ metier: string }>;
}) {
  const { metier: slug } = await params;
  const metier = getMetier(slug);
  if (!metier) notFound();

  const autres = metiers.filter((m) => m.slug !== metier.slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Accueil", path: "/" },
              { name: "Développeur web Liège", path: "/developpeur-web-liege" },
              { name: metier.h1, path: `/site-internet/${metier.slug}` },
            ]),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(metier.faq)),
        }}
      />

      {/* ---- Hero métier ---- */}
      <section className="mb-14">
        <p className="text-sm font-medium text-sky-300">
          Par secteur · {metier.label}
        </p>
        <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          {metier.h1}
        </h1>
        <div className="mt-5 max-w-2xl space-y-4 text-lg leading-relaxed text-white/65">
          {metier.intro.map((p) => (
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

      {/* ---- Enjeux du métier (contenu unique) ---- */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold tracking-tight">
          Ce que votre site doit accomplir
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {metier.enjeux.map((e) => (
            <div
              key={e.title}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
            >
              <h3 className="text-lg font-semibold text-white">{e.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {e.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---- Fonctionnalités recommandées (contenu unique) ---- */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold tracking-tight">
          Les fonctionnalités qui comptent pour un {metier.label}
        </h2>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full min-w-[480px] text-sm">
            <thead className="bg-white/[0.04] text-left">
              <tr>
                <th className="px-4 py-3 font-semibold text-white">
                  Fonctionnalité
                </th>
                <th className="px-4 py-3 font-semibold text-white">
                  Pourquoi elle compte
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-white/70">
              {metier.features.map((f) => (
                <tr key={f.name}>
                  <td className="px-4 py-3 align-top font-medium text-white/85">
                    {f.name}
                  </td>
                  <td className="px-4 py-3 align-top leading-relaxed">
                    {f.why}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ---- Budget spécifique (contenu unique) ---- */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold tracking-tight">
          Quel budget prévoir ?
        </h2>
        <p className="mt-5 max-w-2xl text-[0.975rem] leading-relaxed text-white/65">
          {metier.pricing}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-white/50">
          Les fourchettes complètes du marché liégeois sont détaillées dans{" "}
          <Link href="/blog/prix-site-web-liege" className={linkCls}>
            le guide des prix
          </Link>
          , et les aides dans{" "}
          <Link href="/blog/subsides-site-web-wallonie" className={linkCls}>
            le guide des subsides wallons
          </Link>
          .
        </p>
      </section>

      {/* ---- Erreurs du secteur (contenu unique) ---- */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold tracking-tight">
          Les erreurs qui coûtent cher dans votre secteur
        </h2>
        <div className="mt-6 space-y-4">
          {metier.erreurs.map((e, i) => (
            <div
              key={e.title}
              className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5"
            >
              <span
                aria-hidden
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-red-400/30 bg-red-400/10 text-sm font-semibold text-red-300"
              >
                {i + 1}
              </span>
              <div>
                <h3 className="font-semibold text-white">{e.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-white/60">
                  {e.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ProcessusSection />
      <EngagementsSection />
      <RealisationsSection />

      {/* ---- FAQ métier (contenu unique) ---- */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold tracking-tight">
          Questions fréquentes
        </h2>
        <div className="mt-6 space-y-4">
          {metier.faq.map((item) => (
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

      {/* ---- Maillage secteurs et villes ---- */}
      <section className="mb-14">
        <h2 className="text-xl font-semibold tracking-tight">
          Autres secteurs et zones
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-white/60">
          Votre activité est différente ? Voyez aussi :{" "}
          {autres.map((m, i) => (
            <span key={m.slug}>
              <Link href={`/site-internet/${m.slug}`} className={linkCls}>
                {m.label}
              </Link>
              {i < autres.length - 1 ? ", " : ""}
            </span>
          ))}
          . J&apos;interviens dans toute la province :{" "}
          <Link href="/developpeur-web-liege" className={linkCls}>
            Liège
          </Link>
          ,{" "}
          {villes.slice(0, 6).map((v, i) => (
            <span key={v.slug}>
              <Link href={`/developpeur-web/${v.slug}`} className={linkCls}>
                {v.name}
              </Link>
              {i < 5 ? ", " : ""}
            </span>
          ))}{" "}
          et les autres communes.
        </p>
      </section>

      {/* ---- CTA final ---- */}
      <aside className="rounded-2xl border border-sky-500/20 bg-gradient-to-br from-sky-500/10 to-fuchsia-500/5 p-8 text-center">
        <h2 className="text-xl font-semibold">
          Un projet de site pour votre {metier.label} ?
        </h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-white/60">
          Décrivez votre activité et votre besoin : premier avis honnête et
          devis fixe, sans engagement.
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
