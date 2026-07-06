import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/src/lib/site";

export const metadata: Metadata = {
  title: "Vie privée",
  description:
    "Politique de vie privée du site jmcorp.fr : données collectées par le formulaire de contact, mesure d'audience sans cookies, durées de conservation et droits RGPD.",
  alternates: { canonical: "/vie-privee" },
  robots: { index: false, follow: true },
};

export default function ViePrivee() {
  return (
    <article className="space-y-8">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Politique de vie privée
        </h1>
        <p className="mt-3 text-sm text-white/50">
          Dernière mise à jour : juillet 2026
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">En bref</h2>
        <div className="rounded-2xl border border-sky-500/20 bg-sky-500/5 p-5 text-[0.95rem] leading-relaxed text-white/80">
          Ce site collecte le strict minimum : les informations que vous
          envoyez volontairement via le formulaire de contact (nom, email,
          message), utilisées uniquement pour vous répondre. Pas de cookies
          publicitaires, pas de revente de données, pas de profilage. La
          mesure d&apos;audience, lorsqu&apos;elle est active, se fait sans
          cookie et sans identification individuelle (Umami).
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">
          Responsable du traitement
        </h2>
        <p className="text-[0.975rem] leading-relaxed text-white/70">
          {SITE.author.name}, {SITE.geo.city}, Belgique. Contact :{" "}
          <a
            href={`mailto:${SITE.author.email}`}
            className="text-sky-300 underline decoration-sky-400/40 underline-offset-2 hover:text-sky-200"
          >
            {SITE.author.email}
          </a>
          .
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">
          Données collectées et finalités
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-[0.975rem] leading-relaxed text-white/70">
          <li>
            <strong className="font-semibold text-white">
              Formulaire de contact
            </strong>{" "}
            : nom, adresse email et contenu du message. Finalité : répondre à
            votre demande. Base légale : votre consentement (article 6.1.a du
            RGPD), exprimé par l&apos;envoi volontaire du formulaire. Ces
            données sont transmises par email au responsable du traitement et
            ne sont utilisées pour aucune autre finalité (pas de newsletter,
            pas de prospection automatisée).
          </li>
          <li>
            <strong className="font-semibold text-white">
              Mesure d&apos;audience
            </strong>{" "}
            : lorsqu&apos;elle est active, elle repose sur Umami, un outil
            auto-hébergé qui fonctionne sans cookie et sans collecter de
            donnée permettant de vous identifier (pas d&apos;adresse IP
            conservée, pas d&apos;identifiant individuel). C&apos;est
            pourquoi ce site n&apos;affiche pas de bannière de consentement :
            il n&apos;y a rien à consentir.
          </li>
          <li>
            <strong className="font-semibold text-white">
              Journaux techniques du serveur
            </strong>{" "}
            : comme tout serveur web, l&apos;hébergement génère des journaux
            techniques (adresse IP, pages demandées) à des fins de sécurité,
            conservés pour une durée limitée puis supprimés.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">
          Durées de conservation
        </h2>
        <ul className="list-disc space-y-1.5 pl-5 text-[0.975rem] leading-relaxed text-white/70">
          <li>
            Messages du formulaire de contact : le temps de l&apos;échange,
            et au maximum 24 mois après le dernier contact.
          </li>
          <li>Journaux techniques du serveur : 12 mois au maximum.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Vos droits</h2>
        <p className="text-[0.975rem] leading-relaxed text-white/70">
          Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de
          rectification, d&apos;effacement, de limitation et d&apos;opposition
          sur vos données, ainsi que du droit de retirer votre consentement à
          tout moment. Pour l&apos;exercer, écrivez à{" "}
          <a
            href={`mailto:${SITE.author.email}`}
            className="text-sky-300 underline decoration-sky-400/40 underline-offset-2 hover:text-sky-200"
          >
            {SITE.author.email}
          </a>
          . Vous pouvez également introduire une réclamation auprès de
          l&apos;
          <a
            href="https://www.autoriteprotectiondonnees.be/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-300 underline decoration-sky-400/40 underline-offset-2 hover:text-sky-200"
          >
            Autorité de protection des données
          </a>{" "}
          (Belgique).
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">
          Cookies
        </h2>
        <p className="text-[0.975rem] leading-relaxed text-white/70">
          Ce site utilise un unique cookie technique (mémorisation de
          l&apos;animation d&apos;introduction déjà vue), strictement
          fonctionnel, sans aucune donnée personnelle. Aucun cookie
          publicitaire ou de suivi n&apos;est déposé.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Voir aussi</h2>
        <p className="text-[0.975rem] leading-relaxed text-white/70">
          <Link
            href="/mentions-legales"
            className="text-sky-300 underline decoration-sky-400/40 underline-offset-2 hover:text-sky-200"
          >
            Mentions légales
          </Link>
        </p>
      </section>
    </article>
  );
}
