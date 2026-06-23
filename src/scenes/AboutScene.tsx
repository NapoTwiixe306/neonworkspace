import Link from "next/link";

export default function AboutScene() {
  return (
    <section className="flex h-full w-full flex-col items-center justify-center gap-6 overflow-hidden px-6 text-center">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
        À propos
      </h1>
      <div className="max-w-2xl space-y-4 text-sm leading-relaxed text-white/65 sm:text-base">
        <p>
          Développeur web et front-end basé à Liège, je transforme des idées en
          interfaces soignées et performantes. Mon terrain de jeu : Next.js,
          React, TypeScript et tout ce qui rend un produit web rapide et
          agréable à utiliser.
        </p>
        <p>
          De la landing page au tableau de bord applicatif, je porte un projet
          de la conception à la mise en ligne, avec une attention constante à la
          performance, à l&apos;accessibilité et au référencement.
        </p>
      </div>
      <Link
        href="/developpeur-web-liege"
        className="rounded-xl border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/15"
      >
        Travailler ensemble
      </Link>
    </section>
  );
}
