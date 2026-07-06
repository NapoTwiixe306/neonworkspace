import Link from "next/link";
import Image from "next/image";
import { NAV, SITE, SOCIAL } from "@/src/lib/site";

// Layout des pages de contenu (blog + landing SEO). Pas de BootGate : rendu
// serveur, scrollable, sobre. Le data-experience n'est PAS posé ici, donc le
// scroll reste libre (cf. globals.css).
export default function ContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2.5 font-semibold">
            <Image
              src="/julien.png"
              alt={SITE.author.name}
              width={32}
              height={32}
              className="h-8 w-8 rounded-full object-cover object-top"
            />
            <span>Julien&nbsp;Milants</span>
          </Link>
          <ul className="flex items-center gap-5 text-sm text-white/60">
            {NAV.filter((n) => n.href !== "/").map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-12 sm:py-16">{children}</main>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-3xl px-6 py-12">
          <div className="grid gap-10 sm:grid-cols-[1.4fr_1fr_1fr]">
            {/* Identité */}
            <div>
              <div className="flex items-center gap-2.5">
                <Image
                  src="/julien.png"
                  alt=""
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-full object-cover object-top"
                />
                <span className="font-semibold text-white">
                  {SITE.author.name}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/50">
                Développeur web &amp; front-end à {SITE.geo.city}. Des produits
                web rapides, accessibles et soignés, de l&apos;idée à la mise
                en ligne.
              </p>
            </div>

            {/* Navigation */}
            <nav aria-label="Navigation du pied de page">
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-white/40">
                Navigation
              </p>
              <ul className="mt-4 space-y-2.5 text-sm">
                {NAV.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-white/60 transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Contact & réseaux */}
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-white/40">
                Contact
              </p>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <a
                    href={`mailto:${SITE.author.email}`}
                    className="text-white/60 transition-colors hover:text-white"
                  >
                    {SITE.author.email}
                  </a>
                </li>
                {SOCIAL.map((s) => (
                  <li key={s.href}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer me"
                      className="text-white/60 transition-colors hover:text-white"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {SITE.author.name} · {SITE.geo.city},
              Belgique ·{" "}
              <Link
                href="/mentions-legales"
                className="transition-colors hover:text-white"
              >
                Mentions légales
              </Link>{" "}
              ·{" "}
              <Link
                href="/vie-privee"
                className="transition-colors hover:text-white"
              >
                Vie privée
              </Link>
            </p>
            <p>Conçu et développé maison, avec Next.js</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
