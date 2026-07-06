import type { Metadata } from "next";
import Link from "next/link";
import { SITE, SITE_URL } from "@/src/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales du site jmcorp.fr : éditeur, hébergement, propriété intellectuelle et responsabilité.",
  alternates: { canonical: "/mentions-legales" },
  robots: { index: false, follow: true },
};

// Situation actuelle : portfolio personnel, activité indépendante en cours de
// lancement (pas encore de numéro BCE). À compléter dès l'inscription à la
// Banque-Carrefour des Entreprises : numéro d'entreprise, TVA le cas échéant.
export default function MentionsLegales() {
  return (
    <article className="space-y-8">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Mentions légales
        </h1>
        <p className="mt-3 text-sm text-white/50">
          Dernière mise à jour : juillet 2026
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Éditeur du site</h2>
        <p className="text-[0.975rem] leading-relaxed text-white/70">
          Ce site est le portfolio personnel de <strong className="font-semibold text-white">{SITE.author.name}</strong>,
          développeur web et front-end basé à {SITE.geo.city}, Belgique.
        </p>
        <ul className="list-disc space-y-1.5 pl-5 text-[0.975rem] leading-relaxed text-white/70">
          <li>
            Contact :{" "}
            <a
              href={`mailto:${SITE.author.email}`}
              className="text-sky-300 underline decoration-sky-400/40 underline-offset-2 hover:text-sky-200"
            >
              {SITE.author.email}
            </a>
          </li>
          <li>Site : {SITE_URL}</li>
        </ul>
        <p className="text-[0.975rem] leading-relaxed text-white/70">
          L&apos;activité indépendante est en cours de lancement : le numéro
          d&apos;entreprise (BCE) et, le cas échéant, le numéro de TVA seront
          ajoutés à cette page dès l&apos;inscription à la Banque-Carrefour des
          Entreprises. Les prestations présentées sur ce site sont proposées
          dans ce cadre en cours de constitution.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Hébergement</h2>
        <p className="text-[0.975rem] leading-relaxed text-white/70">
          Le site est hébergé sur un serveur privé virtuel (VPS) situé dans
          l&apos;Union européenne, administré par l&apos;éditeur du site.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">
          Propriété intellectuelle
        </h2>
        <p className="text-[0.975rem] leading-relaxed text-white/70">
          L&apos;ensemble du contenu de ce site (textes, design, code,
          illustrations, captures d&apos;écran des projets) est la propriété de{" "}
          {SITE.author.name}, sauf mention contraire. Toute reproduction,
          représentation ou diffusion, totale ou partielle, sans autorisation
          écrite préalable est interdite. Les marques et logos de tiers cités
          (notamment dans les articles du blog) restent la propriété de leurs
          détenteurs respectifs.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Responsabilité</h2>
        <p className="text-[0.975rem] leading-relaxed text-white/70">
          Les informations publiées sur ce site, notamment les articles du
          blog (prix du marché, dispositifs d&apos;aides, obligations légales),
          sont fournies à titre informatif, vérifiées à leur date de
          publication et susceptibles d&apos;évoluer. Elles ne constituent ni
          un conseil juridique, ni un conseil comptable ou fiscal : validez
          toute décision avec les sources officielles citées ou un
          professionnel compétent. Les liens externes sont fournis pour la
          commodité du lecteur ; l&apos;éditeur n&apos;est pas responsable de
          leur contenu.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">
          Données personnelles
        </h2>
        <p className="text-[0.975rem] leading-relaxed text-white/70">
          Le traitement des données personnelles (formulaire de contact,
          mesure d&apos;audience) est détaillé dans la{" "}
          <Link
            href="/vie-privee"
            className="text-sky-300 underline decoration-sky-400/40 underline-offset-2 hover:text-sky-200"
          >
            politique de vie privée
          </Link>
          .
        </p>
      </section>
    </article>
  );
}
