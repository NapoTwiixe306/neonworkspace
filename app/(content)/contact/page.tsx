import type { Metadata } from "next";
import { SITE, SOCIAL } from "@/src/lib/site";
import { breadcrumbSchema } from "@/src/lib/schema";
import ContactForm from "@/src/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Une idée de site, une refonte ou une application web ? Décrivez votre projet à Julien Milants, développeur web freelance à Liège, et obtenez une réponse rapide.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Accueil", path: "/" },
              { name: "Contact", path: "/contact" },
            ]),
          ),
        }}
      />

      <section className="mb-12">
        <p className="text-sm font-medium text-sky-300">Parlons de votre projet</p>
        <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          Contact
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/65">
          Un site, une refonte ou une application web ? Décrivez votre besoin en
          quelques lignes. Je vous réponds rapidement avec un premier avis et,
          s&apos;il y a lieu, un devis clair.
        </p>
      </section>

      <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
        <ContactForm />
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/55">
        <span>Ou directement :</span>
        <a
          href={`mailto:${SITE.author.email}`}
          className="transition-colors hover:text-white"
        >
          {SITE.author.email}
        </a>
        {SOCIAL.map((s) => (
          <a
            key={s.href}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer me"
            className="transition-colors hover:text-white"
          >
            {s.label}
          </a>
        ))}
      </div>
    </>
  );
}
