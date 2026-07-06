import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects, getProject } from "@/src/content/projects";
import { breadcrumbSchema, projectSchema } from "@/src/lib/schema";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.metaTitle,
    description: project.metaDescription,
    alternates: { canonical: `/projets/${project.slug}` },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const domain = project.link.href.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Accueil", path: "/" },
              { name: "Projets", path: "/projets" },
              { name: project.name, path: `/projets/${project.slug}` },
            ]),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema(project)) }}
      />

      <nav className="mb-8 text-sm text-white/45">
        <Link href="/projets" className="transition-colors hover:text-white">
          ← Tous les projets
        </Link>
      </nav>

      <header className="mb-10">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-sky-300/80">
          {project.kicker}
        </p>
        <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          {project.name}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/70">
          {project.tagline}
        </p>
      </header>

      {/* Aperçu : fenêtre navigateur (site) ou terminal (API) */}
      <div className="mb-10 overflow-hidden rounded-xl border border-white/10 bg-black shadow-2xl">
        <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-3 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
          <div className="ml-2 flex-1 truncate rounded-md bg-white/[0.06] px-3 py-1 text-[11px] text-white/45">
            {project.screenshot
              ? domain
              : `${project.name.toLowerCase().replace(/\s+/g, "-")} — zsh`}
          </div>
        </div>
        {project.screenshot ? (
          <div className="relative aspect-[16/10] w-full">
            <Image
              src={project.screenshot}
              alt={`Aperçu du site ${project.name}`}
              fill
              sizes="(min-width: 768px) 48rem, 90vw"
              className="object-cover object-top"
              priority
            />
          </div>
        ) : (
          <div className="p-5 font-mono text-xs leading-relaxed sm:text-sm">
            <p>
              <span className="text-red-400">❯</span>{" "}
              <span className="text-white/85">{project.terminal?.command}</span>
            </p>
            <div className="mt-2 text-white/50">
              {project.terminal?.lines.map((line, i) => (
                <p key={i} className="whitespace-pre">
                  {line}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="space-y-4 text-[0.975rem] leading-relaxed text-white/70">
        <p>{project.intro}</p>
      </div>

      <section className="mt-10">
        <h2 className="text-xl font-semibold tracking-tight">Ce que fait le produit</h2>
        <ul className="mt-4 space-y-3">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-3 text-sm leading-relaxed text-white/65">
              <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <h3 className="text-sm font-medium text-white/50">Mon rôle</h3>
          <p className="mt-2 text-sm text-white/75">{project.role}</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <h3 className="text-sm font-medium text-white/50">Stack technique</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-white/60"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href={project.link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/15"
        >
          {project.link.label}
        </a>
        <Link
          href="/contact"
          className="rounded-xl border border-white/10 px-5 py-2.5 text-sm text-white/70 transition-colors hover:text-white"
        >
          Un projet similaire ? Parlons-en
        </Link>
      </div>
    </>
  );
}
