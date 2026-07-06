import {
  H2,
  H3,
  P,
  UL,
  LI,
  Callout,
  Strong,
  A,
  TLDR,
  Toc,
  Table,
} from "@/src/components/Prose";
import type { Post } from "@/src/content/post-types";

// Article pilier « prix » : intention commerciale locale forte
// (« prix site web liège », « combien coûte un site internet »).
export const prixSiteWebLiege: Post = {
  slug: "prix-site-web-liege",
  title: "Combien coûte un site web à Liège en 2026 ? Guide complet des prix",
  description:
    "Prix réels d'un site web à Liège en 2026 : site vitrine, e-commerce, application sur mesure. Fourchettes détaillées, coût réel après fiscalité, ce qui fait varier le tarif et comment éviter les mauvaises surprises.",
  date: "2026-02-10",
  updated: "2026-07-06",
  readingTime: "13 min",
  tags: ["Prix", "Site web", "Liège", "Freelance"],
  faq: [
    {
      question: "Combien coûte un site vitrine à Liège ?",
      answer:
        "Un site vitrine professionnel à Liège coûte généralement entre 1 500 € et 5 000 € chez un indépendant selon le nombre de pages, le sur-mesure du design et les fonctionnalités (formulaires, multilingue, blog), et de 3 000 € à 10 000 € en agence. Un site one-page simple peut démarrer autour de 900 €.",
    },
    {
      question: "Pourquoi les prix varient autant d'un développeur à l'autre ?",
      answer:
        "L'écart vient surtout du sur-mesure : un template adapté coûte beaucoup moins cher qu'un design et un développement réalisés de zéro. Les performances, l'accessibilité, le SEO intégré et la maintenance font aussi varier le tarif.",
    },
    {
      question: "Vaut-il mieux un freelance ou une agence à Liège ?",
      answer:
        "Un freelance est souvent 30 à 50 % moins cher qu'une agence pour un résultat équivalent sur un site vitrine ou une petite application, avec un interlocuteur unique. Une agence se justifie surtout pour les très gros projets nécessitant plusieurs métiers en parallèle.",
    },
    {
      question: "Un site web est-il déductible fiscalement en Belgique ?",
      answer:
        "Oui. Pour un indépendant ou une société, la création et l'entretien d'un site professionnel sont des charges déductibles. Selon votre taux d'imposition, le coût réel d'un site à 2 000 € descend souvent sous les 1 200 €. Pour les projets structurants, la Wallonie subventionne en plus 50 % de l'accompagnement via les chèques-entreprises.",
    },
    {
      question: "Que coûte un site web par mois après la mise en ligne ?",
      answer:
        "Comptez un budget récurrent de 20 € à 100 € par mois : nom de domaine (environ 15 € par an), hébergement, mises à jour de sécurité et petites évolutions. Un site statique moderne se situe dans le bas de cette fourchette, un site WordPress plutôt dans le haut à cause de la maintenance obligatoire.",
    },
  ],
  Body: () => (
    <>
      <TLDR>
        <p>
          À Liège en 2026, comptez <Strong>900 € à 2 000 €</Strong> pour un
          one-page, <Strong>1 500 € à 5 000 €</Strong> pour un site vitrine
          professionnel, <Strong>4 000 € à 15 000 €</Strong> pour un
          e-commerce et <Strong>à partir de 8 000 €</Strong> pour une
          application sur mesure en agence (à partir de 3 500 € chez un
          indépendant).
        </p>
        <p>
          Le prix affiché n&apos;est pas le coût réel : un site professionnel
          est fiscalement déductible, ce qui ramène souvent l&apos;effort réel
          à 55 ou 60 % du devis. Et le vrai critère n&apos;est pas le prix le
          plus bas, mais le retour sur investissement.
        </p>
      </TLDR>

      <Toc
        items={[
          { id: "fourchettes", label: "Les fourchettes de prix par type de site" },
          { id: "tableau", label: "Le tableau récapitulatif" },
          { id: "facteurs", label: "Ce qui fait vraiment varier le prix" },
          { id: "cout-reel", label: "Le coût réel après fiscalité et aides" },
          { id: "freelance-agence", label: "Freelance ou agence à Liège ?" },
          { id: "maintenance", label: "La maintenance, le coût qu'on oublie" },
          { id: "arnaques", label: "Les signaux d'alarme sur un devis" },
          { id: "conclusion", label: "En résumé" },
          { id: "sources", label: "Sources" },
        ]}
      />

      <P>
        C&apos;est la première question que l&apos;on me pose, et c&apos;est
        normal. Le problème, c&apos;est qu&apos;on trouve tout et son contraire
        en ligne : « un site à 300 € » côtoie « un site à 25 000 € ». Les deux
        existent, mais ils ne désignent pas la même chose. Voici des fourchettes
        honnêtes, basées sur le marché liégeois et wallon en 2026, croisées
        avec les grilles publiques d&apos;agences belges et mes propres devis,
        et surtout ce qui fait réellement bouger le prix.
      </P>

      <H2 id="fourchettes">Les fourchettes de prix par type de site</H2>
      <P>
        Un site web n&apos;est pas un produit standard : c&apos;est un projet sur
        mesure. Voici les ordres de grandeur que vous pouvez raisonnablement
        attendre à Liège.
      </P>
      <UL>
        <LI>
          <Strong>Site one-page / landing :</Strong> 900 € à 2 000 €. Idéal pour
          un indépendant, une carte de visite digitale ou le lancement
          d&apos;un produit.
        </LI>
        <LI>
          <Strong>Site vitrine (5 à 10 pages) :</Strong> 1 500 € à 5 000 €. Le
          standard pour une PME, un commerce ou un cabinet qui veut une présence
          crédible et bien référencée.
        </LI>
        <LI>
          <Strong>Site e-commerce :</Strong> 4 000 € à 15 000 €. Le prix dépend
          du nombre de produits, des moyens de paiement, de la gestion des
          stocks et des intégrations (comptabilité, logistique).
        </LI>
        <LI>
          <Strong>Application web sur mesure :</Strong> à partir de 8 000 € en
          agence, à partir de 3 500 € chez un indépendant. Tableau de bord,
          espace client, outil métier : on est ici dans du développement
          spécifique.
        </LI>
      </UL>
      <Callout>
        Ces chiffres incluent la conception, le développement et la mise en
        ligne. Méfiez-vous des devis très en dessous : le coût « caché » se paie
        souvent plus tard en lenteur, en bugs ou en refonte complète.
      </Callout>

      <H2 id="tableau">Le tableau récapitulatif</H2>
      <Table
        head={["Type de site", "Indépendant", "Agence", "Délai typique"]}
        rows={[
          ["One-page / landing", "900 € à 2 000 €", "2 500 € à 5 000 €", "1 à 2 semaines"],
          ["Site vitrine", "1 500 € à 5 000 €", "3 000 € à 10 000 €", "3 à 6 semaines"],
          ["E-commerce", "4 000 € à 12 000 €", "5 000 € à 15 000 € et plus", "6 à 12 semaines"],
          ["Application sur mesure", "à partir de 3 500 €", "à partir de 8 000 €", "2 à 6 mois"],
        ]}
      />
      <P>
        Pour le détail des délais ligne par ligne, j&apos;ai consacré{" "}
        <A href="/blog/delai-creation-site-web">
          un article complet aux délais réels de création
        </A>
        , étape par étape.
      </P>

      <H2 id="facteurs">Ce qui fait vraiment varier le prix</H2>
      <H3>Le sur-mesure du design</H3>
      <P>
        Adapter un template existant prend quelques jours. Concevoir une
        interface unique, alignée sur votre marque, en prend beaucoup plus.
        C&apos;est le premier facteur de prix, et souvent celui qui distingue un
        site « comme les autres » d&apos;un site dont on se souvient.
      </P>
      <H3>Les performances et l&apos;accessibilité</H3>
      <P>
        Un site rapide et accessible ne se fait pas par hasard. Le travail
        d&apos;optimisation (images, chargement, Core Web Vitals) demande du
        temps, mais il a un impact direct sur votre référencement et votre taux
        de conversion. C&apos;est un investissement, pas une ligne à couper.
      </P>
      <H3>Le référencement intégré dès le départ</H3>
      <P>
        Un site pensé pour le SEO dès la conception (structure, données
        structurées, contenu, vitesse) coûte un peu plus cher qu&apos;un site
        « juste joli », mais il vous évite de tout refaire six mois plus tard
        quand vous réaliserez que personne ne vous trouve sur Google. Les
        leviers concrets sont détaillés dans{" "}
        <A href="/blog/referencement-local-liege">
          mon guide du référencement local à Liège
        </A>
        .
      </P>
      <H3>La technologie choisie</H3>
      <P>
        Un site sous WordPress est souvent moins cher à créer et plus cher à
        entretenir ; un site sur mesure inverse la courbe. La comparaison
        complète, coûts sur 3 ans à l&apos;appui, est dans{" "}
        <A href="/blog/wordpress-ou-site-sur-mesure">
          WordPress ou site sur mesure
        </A>
        .
      </P>

      <H2 id="cout-reel">Le coût réel après fiscalité et aides</H2>
      <P>
        Le montant du devis n&apos;est pas ce que le site vous coûte
        réellement. Deux mécanismes réduisent la facture :
      </P>
      <UL>
        <LI>
          <Strong>La déductibilité fiscale.</Strong> Pour un indépendant ou une
          société, le site est une charge professionnelle. Selon votre taux
          marginal d&apos;imposition et de cotisations, un site à 2 000 €
          revient souvent à 1 100 € ou 1 200 € d&apos;effort réel.
        </LI>
        <LI>
          <Strong>Les aides wallonnes.</Strong> Pour les projets structurants
          (e-commerce, digitalisation), le chèque « maturité numérique »
          couvre 50 % de l&apos;accompagnement, avec un plafond de 50 000 €
          HTVA sur 3 ans.
        </LI>
      </UL>
      <P>
        J&apos;ai détaillé les deux mécanismes, avec les conditions exactes et
        des exemples chiffrés, dans{" "}
        <A href="/blog/subsides-site-web-wallonie">
          le guide des subsides et aides en Wallonie
        </A>
        .
      </P>

      <H2 id="freelance-agence">Freelance ou agence à Liège ?</H2>
      <P>
        Pour un site vitrine ou une petite application, un{" "}
        <Strong>freelance</Strong> est généralement 30 à 50 % moins cher
        qu&apos;une agence, avec un avantage décisif : vous parlez directement à
        la personne qui code votre site, sans intermédiaire. Une{" "}
        <Strong>agence</Strong> prend tout son sens sur les très gros projets,
        quand plusieurs métiers doivent travailler en parallèle. J&apos;ai
        détaillé ce choix, chiffres et pièges compris, dans{" "}
        <A href="/blog/agence-web-ou-freelance-liege">
          le comparatif agence ou freelance à Liège
        </A>
        .
      </P>

      <H2 id="maintenance">La maintenance, le coût qu&apos;on oublie</H2>
      <P>
        Un site est vivant : mises à jour de sécurité, hébergement, petites
        évolutions. Comptez un budget récurrent de 20 € à 100 € par mois selon
        vos besoins et la technologie. C&apos;est ce qui garantit qu&apos;un an
        plus tard, votre site est toujours rapide, sûr et à jour. Sur un site
        statique moderne, ce poste est dans le bas de la fourchette ; sur un
        WordPress, la maintenance n&apos;est pas négociable, c&apos;est elle
        qui maintient le site sûr.
      </P>

      <H2 id="arnaques">Les signaux d&apos;alarme sur un devis</H2>
      <UL>
        <LI>
          <Strong>Un prix global sans détail.</Strong> Un devis sérieux liste
          ce qui est inclus : nombre de pages, allers-retours sur la maquette,
          SEO, formation, maintenance.
        </LI>
        <LI>
          <Strong>La propriété floue.</Strong> Le nom de domaine doit être
          enregistré à votre nom et tous les accès remis à la livraison. Si la
          réponse hésite, passez votre chemin.
        </LI>
        <LI>
          <Strong>Le « référencement garanti première page ».</Strong>{" "}
          Personne ne peut garantir une position Google. Ceux qui le promettent
          vendent du vent.
        </LI>
        <LI>
          <Strong>Des mensualités sans fin de contrat claire.</Strong> À 99 €
          par mois pendant 3 ans, vous avez payé un vrai site sur mesure, sans
          rien posséder.
        </LI>
      </UL>

      <H2 id="conclusion">En résumé</H2>
      <P>
        À Liège en 2026, un site vitrine professionnel se situe dans la
        fourchette 1 500 € à 5 000 €, et son coût réel après déduction fiscale
        est nettement inférieur. Le bon réflexe n&apos;est pas de chercher
        le moins cher, mais le meilleur rapport entre le prix, la qualité
        technique et le retour sur investissement. Un site bien construit se
        rentabilise par les clients qu&apos;il vous amène.
      </P>
      <P>
        Pour situer mes propres tarifs : mes{" "}
        <A href="/developpeur-web-liege">
          prix de départ sont publics sur ma page services
        </A>{" "}
        (sites vitrines à partir de 1 200 €), et mes réalisations sont{" "}
        <A href="/projets">testables en ligne</A>.
      </P>

      <H2 id="sources">Sources</H2>
      <UL>
        <LI>
          <A href="https://www.sortlist.be/fr/blog/combien-coute-un-site-internet/">
            Sortlist, « Combien coûte un site internet ? »
          </A>{" "}
          : fourchettes du marché belge.
        </LI>
        <LI>
          <A href="https://www.cheques-entreprises.be/">
            Chèques-entreprises (portail officiel wallon)
          </A>{" "}
          : dispositifs d&apos;aides en vigueur.
        </LI>
        <LI>
          Mes propres devis et projets livrés à Liège et en province,
          consultables sur <A href="/projets">la page projets</A>.
        </LI>
      </UL>
    </>
  ),
};
