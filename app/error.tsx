"use client";

import { useEffect } from "react";
import Link from "next/link";

// Écran d'erreur global (client component obligatoire pour recevoir reset()).
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Erreur non gérée :", error);
  }, [error]);

  return (
    <div className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-6 text-center">
      <div
        aria-hidden
        className="absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/10 blur-[120px]"
      />

      <div className="relative z-10 flex flex-col items-center gap-6">
        <div className="max-w-md space-y-2">
          <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">
            Oups, quelque chose a cassé
          </h1>
          <p className="text-sm leading-relaxed text-white/60">
            Une erreur inattendue s&apos;est produite. Vous pouvez réessayer,
            ou revenir à l&apos;accueil.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={reset}
            className="rounded-xl border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/15"
          >
            Réessayer
          </button>
          <Link
            href="/"
            className="rounded-xl border border-white/10 px-5 py-2.5 text-sm text-white/70 transition-colors hover:text-white"
          >
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
