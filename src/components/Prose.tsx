import type { ReactNode } from "react";

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
