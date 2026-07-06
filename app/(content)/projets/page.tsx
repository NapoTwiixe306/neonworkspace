import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/src/content/projects";
import { breadcrumbSchema } from "@/src/lib/schema";

export const metadata: Metadata = {
  title: "Projets — SaaS et sites web réalisés",
  description:
    "Une sélection de projets web réalisés par Julien Milants, développeur à Liège : Korli (SaaS), BluePortel (site de réservation) et GridBase (données motorsport, en construction). Next.js, TypeScript, Prisma, Stripe.",
  alternates: { canonical: "/projets" },
};

export default function ProjetsIndex() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Accueil", path: "/" },
              { name: "Projets", path: "/projets" },
            ]),
          ),
        }}
      />

      <header className="mb-12">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Projets
        </h1>
        <p className="mt-3 max-w-2xl text-white/60">
          Des produits que j&apos;ai conçus et développés de bout en bout : un
          SaaS lancé en solo, un site client en production, et une plateforme
          de données motorsport en construction. Next.js, TypeScript, Prisma,
          Stripe.
        </p>
      </header>

      <div className="space-y-5">
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/projets/${p.slug}`}
            className="group grid gap-5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-colors hover:border-white/20 hover:bg-white/[0.04] sm:grid-cols-[1fr_1.1fr] sm:items-center sm:p-6"
          >
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-sky-300/80">
                {p.kicker}
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-white group-hover:text-sky-300">
                {p.name}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {p.tagline}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-white/50"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-white/10">
              {p.screenshot ? (
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={p.screenshot}
                    alt={`Aperçu du projet ${p.name}`}
                    fill
                    sizes="(min-width: 640px) 22rem, 90vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              ) : (
                /* Aperçu terminal pour les projets sans interface (API). */
                <div className="aspect-[16/10] w-full bg-black p-4 font-mono text-[11px] leading-relaxed">
                  <p>
                    <span className="text-red-400">❯</span>{" "}
                    <span className="text-white/85">{p.terminal?.command}</span>
                  </p>
                  <div className="mt-2 text-white/50">
                    {p.terminal?.lines.slice(0, 8).map((line, i) => (
                      <p key={i} className="whitespace-pre">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
