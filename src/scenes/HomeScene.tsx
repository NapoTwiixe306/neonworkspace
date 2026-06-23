import Image from "next/image";
import Link from "next/link";

export default function HomeScene() {
  return (
    <section className="flex h-full w-full flex-col items-center justify-center gap-7 overflow-hidden px-6 text-center">
      {/* Portrait : flottement vertical infini léger (sans halo) */}
      <div className="animate-float relative">
        <div className="relative h-40 w-40 overflow-hidden rounded-full border border-white/10 bg-white/5 sm:h-48 sm:w-48">
          <Image
            src="/julien.png"
            alt="Julien M, développeur web et front-end à Liège"
            fill
            priority
            sizes="(min-width: 640px) 12rem, 10rem"
            className="object-cover object-top"
          />
        </div>
      </div>

      <div className="max-w-2xl space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          Julien M
        </h1>
        <p className="text-base text-sky-300/90 sm:text-lg">
          Développeur web &amp; front-end freelance à Liège
        </p>
        <p className="text-sm leading-relaxed text-white/60 sm:text-base">
          Je construis des sites et des applications web qui vont vite, qui se
          lisent bien et qui finissent par ramener des clients. De l&apos;idée
          au site en ligne, je m&apos;occupe de tout, et vous gardez un seul
          interlocuteur.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/developpeur-web-liege"
          className="rounded-xl border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/15"
        >
          Mes services à Liège
        </Link>
        <Link
          href="/blog"
          className="rounded-xl border border-white/10 px-5 py-2.5 text-sm text-white/70 transition-colors hover:text-white"
        >
          Lire le blog
        </Link>
      </div>
    </section>
  );
}
