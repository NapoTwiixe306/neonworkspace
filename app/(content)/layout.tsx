import Link from "next/link";
import Image from "next/image";
import { NAV, SITE } from "@/src/lib/site";

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
            <span>Julien&nbsp;M</span>
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
        <div className="mx-auto flex max-w-3xl flex-col gap-2 px-6 py-10 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.author.name} · Développeur web à{" "}
            {SITE.geo.city}
          </p>
          <a
            href={`mailto:${SITE.author.email}`}
            className="transition-colors hover:text-white"
          >
            {SITE.author.email}
          </a>
        </div>
      </footer>
    </div>
  );
}
