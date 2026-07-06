import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page introuvable",
  robots: { index: false, follow: false },
};

// 404 personnalisée, aux couleurs néon du site, avec de quoi repartir.
export default function NotFound() {
  return (
    <div className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-6 text-center">
      <div
        aria-hidden
        className="absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/15 blur-[120px]"
      />

      <div className="relative z-10 flex flex-col items-center gap-6">
        <p className="font-mono text-7xl font-light tracking-tight text-white sm:text-8xl">
          404
        </p>
        <div className="max-w-md space-y-2">
          <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">
            Cette page n&apos;existe pas (ou plus)
          </h1>
          <p className="text-sm leading-relaxed text-white/60">
            Le lien est peut-être cassé, ou la page a été déplacée. Pas de
            panique : tout le reste est bien là.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="rounded-xl border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/15"
          >
            Retour à l&apos;accueil
          </Link>
          <Link
            href="/projets"
            className="rounded-xl border border-white/10 px-5 py-2.5 text-sm text-white/70 transition-colors hover:text-white"
          >
            Voir mes projets
          </Link>
          <Link
            href="/contact"
            className="rounded-xl border border-white/10 px-5 py-2.5 text-sm text-white/70 transition-colors hover:text-white"
          >
            Me contacter
          </Link>
        </div>
      </div>
    </div>
  );
}
