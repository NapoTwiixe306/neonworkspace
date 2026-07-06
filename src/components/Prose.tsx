import type { ReactNode } from "react";
import Link from "next/link";

export function Prose({ children }: { children: ReactNode }) {
  return <div className="space-y-6">{children}</div>;
}

export function H2({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <h2
      id={id}
      className="scroll-mt-24 pt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl"
    >
      {children}
    </h2>
  );
}

export function H3({ children }: { children: ReactNode }) {
  return (
    <h3 className="pt-2 text-lg font-semibold text-white sm:text-xl">
      {children}
    </h3>
  );
}

export function P({ children }: { children: ReactNode }) {
  return (
    <p className="text-[0.975rem] leading-relaxed text-white/70">{children}</p>
  );
}

export function UL({ children }: { children: ReactNode }) {
  return (
    <ul className="list-disc space-y-2 pl-5 text-[0.975rem] leading-relaxed text-white/70 marker:text-sky-400/70">
      {children}
    </ul>
  );
}

export function LI({ children }: { children: ReactNode }) {
  return <li>{children}</li>;
}

export function Callout({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-sky-500/20 bg-sky-500/5 p-5 text-[0.95rem] leading-relaxed text-white/80">
      {children}
    </div>
  );
}

export function Strong({ children }: { children: ReactNode }) {
  return <strong className="font-semibold text-white">{children}</strong>;
}

// Lien dans le corps d'un article : interne (maillage) ou externe (source).
export function A({ href, children }: { href: string; children: ReactNode }) {
  const cls =
    "text-sky-300 underline decoration-sky-400/40 underline-offset-2 transition-colors hover:text-sky-200";
  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

// Encart « L'essentiel » placé en tête d'article : la réponse courte pour le
// lecteur pressé, et un passage citables par les moteurs IA.
export function TLDR({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-sky-500/25 bg-sky-500/[0.07] p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-sky-300">
        L&apos;essentiel en 30 secondes
      </p>
      <div className="mt-3 space-y-2 text-[0.95rem] leading-relaxed text-white/80">
        {children}
      </div>
    </div>
  );
}

// Sommaire cliquable (ancres vers les H2 de l'article).
export function Toc({ items }: { items: { id: string; label: string }[] }) {
  return (
    <nav
      aria-label="Sommaire"
      className="rounded-2xl border border-white/10 bg-white/[0.02] p-5"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40">
        Sommaire
      </p>
      <ol className="mt-3 space-y-1.5 text-sm">
        {items.map((item, i) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="text-white/60 transition-colors hover:text-white"
            >
              {i + 1}. {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

// Tableau comparatif scrollable sur mobile.
export function Table({
  head,
  rows,
}: {
  head: string[];
  rows: ReactNode[][];
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-white/10">
      <table className="w-full min-w-[480px] text-sm">
        <thead className="bg-white/[0.04] text-left">
          <tr>
            {head.map((h) => (
              <th key={h} className="px-4 py-3 font-semibold text-white">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5 text-white/70">
          {rows.map((cells, i) => (
            <tr key={i}>
              {cells.map((cell, j) => (
                <td key={j} className="px-4 py-3 align-top leading-relaxed">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
