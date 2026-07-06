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

// Intention informationnelle à conversion : « combien de temps pour créer un
// site web », « délai création site internet ».
export const delaiCreationSiteWeb: Post = {
  slug: "delai-creation-site-web",
  title:
    "Combien de temps pour créer un site web ? Les délais réels en 2026",
  description:
    "Délais réels de création d'un site web : 1 à 2 semaines pour un one-page, 3 à 6 semaines pour un site vitrine, 2 à 6 mois pour une application. Planning détaillé semaine par semaine et les 5 facteurs qui font vraiment traîner un projet.",
  date: "2026-07-06",
  readingTime: "14 min",
  tags: ["Délais", "Site web", "Méthode", "Liège"],
  faq: [
    {
      question: "Combien de temps faut-il pour créer un site vitrine ?",
      answer:
        "Comptez 3 à 6 semaines pour un site vitrine professionnel de 5 à 10 pages, de la première réunion à la mise en ligne : une semaine de cadrage et maquette, deux à trois semaines de développement, une semaine de contenu, tests et mise en ligne. Le facteur qui fait le plus varier ce délai n'est pas le développeur, c'est la disponibilité de vos contenus.",
    },
    {
      question: "Peut-on créer un site web en une semaine ?",
      answer:
        "Oui, pour un one-page dont les textes et les images sont prêts dès le départ. C'est irréaliste pour un site vitrine complet : la conception, les allers-retours sur la maquette et l'intégration du contenu demandent physiquement plus de temps si l'on veut un résultat professionnel.",
    },
    {
      question: "Pourquoi les projets web prennent-ils du retard ?",
      answer:
        "Dans la grande majorité des cas, le retard vient du contenu : textes, photos et validations qui arrivent au compte-gouttes côté client. Les autres causes classiques sont un périmètre qui gonfle en cours de route et des retours de validation trop lents. Un bon prestataire cadre ces trois points dès le devis.",
    },
    {
      question: "Quand faut-il lancer le projet pour être en ligne à une date précise ?",
      answer:
        "Prenez le délai type de votre projet (par exemple 4 à 6 semaines pour un site vitrine), ajoutez deux semaines de marge pour les imprévus et la préparation du contenu, et remontez le calendrier. Pour être en ligne début décembre, un site vitrine doit démarrer mi-octobre au plus tard.",
    },
  ],
  Body: () => (
    <>
      <TLDR>
        <p>
          Délais réalistes en 2026, de la première réunion à la mise en
          ligne : <Strong>1 à 2 semaines</Strong> pour un one-page,{" "}
          <Strong>3 à 6 semaines</Strong> pour un site vitrine,{" "}
          <Strong>6 à 12 semaines</Strong> pour un e-commerce,{" "}
          <Strong>2 à 6 mois</Strong> pour une application sur mesure.
        </p>
        <p>
          Le premier facteur de retard n&apos;est presque jamais le
          développement : c&apos;est le contenu (textes, photos, validations)
          qui n&apos;est pas prêt côté client. Préparez-le en amont et vous
          tiendrez les délais courts de chaque fourchette.
        </p>
      </TLDR>

      <Toc
        items={[
          { id: "tableau", label: "Les délais par type de projet" },
          { id: "vitrine", label: "Un site vitrine, semaine par semaine" },
          { id: "facteurs", label: "Les 5 facteurs qui font vraiment traîner" },
          { id: "express", label: "Les sites « en 48 h » : le vrai du faux" },
          { id: "preparer", label: "Comment préparer votre projet (checklist)" },
          { id: "retroplanning", label: "Calculer votre rétroplanning" },
          { id: "conclusion", label: "En résumé" },
        ]}
      />

      <P>
        « C&apos;est pour quand ? » est une question aussi importante que{" "}
        <A href="/blog/prix-site-web-liege">« combien ça coûte ? »</A>, et
        elle reçoit des réponses tout aussi fantaisistes : des « 48 heures
        chrono » des plateformes low cost aux six mois inexpliqués de
        certains prestataires débordés. Voici les délais réels que je
        constate et que je pratique, projet par projet, avec le détail de ce
        qui se passe chaque semaine et, surtout, ce qui fait déraper un
        calendrier.
      </P>

      <H2 id="tableau">Les délais par type de projet</H2>
      <Table
        head={["Type de projet", "Délai réaliste", "Ce qui domine le planning"]}
        rows={[
          [
            <Strong key="a">One-page / landing</Strong>,
            "1 à 2 semaines",
            "La disponibilité de vos contenus",
          ],
          [
            <Strong key="b">Site vitrine (5 à 10 pages)</Strong>,
            "3 à 6 semaines",
            "Maquette, contenus, allers-retours",
          ],
          [
            <Strong key="c">E-commerce</Strong>,
            "6 à 12 semaines",
            "Catalogue produits, paiements, livraison",
          ],
          [
            <Strong key="d">Application sur mesure</Strong>,
            "2 à 6 mois",
            "La complexité fonctionnelle",
          ],
          [
            <Strong key="e">Refonte de site existant</Strong>,
            "4 à 8 semaines",
            "La migration du contenu et du SEO",
          ],
        ]}
      />
      <P>
        Ces délais supposent un prestataire disponible et un client réactif.
        Pour la refonte, qui a ses pièges propres (notamment la préservation
        du référencement), voyez{" "}
        <A href="/blog/refonte-site-internet-seo">
          l&apos;article dédié à la refonte sans perdre son SEO
        </A>
        .
      </P>

      <H2 id="vitrine">Un site vitrine, semaine par semaine</H2>
      <P>
        Prenons le cas le plus courant, un site vitrine professionnel, et
        déroulons un planning type de cinq semaines. C&apos;est le déroulé
        que je pratique sur mes propres projets.
      </P>
      <H3>Semaine 1 : cadrage et maquette</H3>
      <P>
        Premier échange approfondi : vos objectifs, vos clients types, vos
        concurrents, ce qui doit figurer sur le site. Puis conception de la
        maquette de la page d&apos;accueil et de la structure des autres
        pages. La semaine se termine par une présentation : vous voyez à quoi
        ressemblera votre site avant qu&apos;une ligne de code ne soit écrite.
      </P>
      <H3>Semaines 2 et 3 : développement</H3>
      <P>
        La maquette validée devient un vrai site : intégration du design,
        adaptation mobile, formulaires, optimisation des images et de la
        vitesse, données structurées pour le référencement. Vous suivez
        l&apos;avancement sur une URL de test, pas dans le noir.
      </P>
      <H3>Semaine 4 : contenus et SEO</H3>
      <P>
        Intégration de vos textes et photos définitifs, réglages SEO page par
        page (titres, descriptions, maillage), relecture croisée. C&apos;est
        la semaine qui dérape si les contenus ne sont pas prêts : voyez la
        checklist plus bas pour l&apos;éviter.
      </P>
      <H3>Semaine 5 : tests et mise en ligne</H3>
      <P>
        Tests sur mobiles et navigateurs réels, vérification des formulaires,
        des performances et de l&apos;indexation, branchement du nom de
        domaine, mise en production, soumission du sitemap à Google. Le site
        est en ligne, et la période de suivi commence.
      </P>

      <H2 id="facteurs">Les 5 facteurs qui font vraiment traîner un projet</H2>
      <UL>
        <LI>
          <Strong>1. Le contenu qui n&apos;arrive pas.</Strong> La cause
          numéro un, très loin devant les autres. Un site sans textes ni
          photos est un chantier à l&apos;arrêt. Les projets qui tiennent
          leurs délais sont ceux où le contenu est prêt avant la semaine 4.
        </LI>
        <LI>
          <Strong>2. Le périmètre qui gonfle.</Strong> « Tant qu&apos;on y
          est, on pourrait ajouter... » : chaque ajout en cours de route
          coûte plus cher et prend plus de temps que s&apos;il avait été
          prévu. Les bonnes idées se notent pour la version 2.
        </LI>
        <LI>
          <Strong>3. Les validations lentes.</Strong> Une maquette qui attend
          dix jours une réponse, c&apos;est dix jours de délai en plus, et un
          prestataire qui est passé à autre chose entre-temps. Prévoyez un
          interlocuteur unique capable de décider vite.
        </LI>
        <LI>
          <Strong>4. Le prestataire surchargé.</Strong> Certains enchaînent
          les projets en parallèle et laissent le vôtre par intermittence.
          Demandez dès le devis quand le projet démarre réellement et à quel
          rythme il avancera.
        </LI>
        <LI>
          <Strong>5. Les dépendances externes.</Strong> Accès au nom de
          domaine perdu, hébergeur injoignable, photographe en retard :
          identifiez ces dépendances dès le départ et traitez-les en
          parallèle, pas au dernier moment.
        </LI>
      </UL>
      <Callout>
        <Strong>À retenir :</Strong> sur un projet bien cadré, le
        développement lui-même déborde rarement. Ce sont les entrées (contenu,
        décisions, accès) qui font le délai. La moitié de la ponctualité
        d&apos;un projet web se joue avant même son démarrage.
      </Callout>

      <H2 id="express">Les sites « en 48 heures » : le vrai du faux</H2>
      <P>
        Les offres express ne mentent pas complètement : on peut mettre en
        ligne quelque chose en 48 heures. La question est quoi. En deux
        jours, on assemble un template générique avec vos coordonnées :
        aucune réflexion sur vos clients, aucun contenu travaillé, aucun
        référencement digne de ce nom. C&apos;est une carte de visite en
        ligne, pas un outil de développement commercial.
      </P>
      <P>
        L&apos;arbitrage honnête : si votre seul besoin est d&apos;exister en
        ligne cette semaine, une solution express ou un builder font
        l&apos;affaire. Si le site doit vous amener des clients, les semaines
        de conception ne sont pas du confort, elles sont le travail. Le
        choix du type de prestataire pour ce travail est traité dans{" "}
        <A href="/blog/agence-web-ou-freelance-liege">
          agence ou freelance à Liège
        </A>
        .
      </P>

      <H2 id="preparer">Comment préparer votre projet : la checklist</H2>
      <P>
        Tout ce que vous préparez avant le démarrage raccourcit le projet.
        L&apos;idéal avant la première réunion :
      </P>
      <UL>
        <LI>
          <Strong>Vos objectifs</Strong> : que doit accomplir le site ?
          (être trouvé, rassurer, vendre, prendre des rendez-vous)
        </LI>
        <LI>
          <Strong>3 à 5 sites que vous aimez</Strong>, même hors de votre
          secteur, avec ce qui vous plaît dans chacun.
        </LI>
        <LI>
          <Strong>Vos textes existants</Strong> : plaquette, descriptions de
          services, présentation de l&apos;équipe. Même imparfaits, ils font
          gagner des jours.
        </LI>
        <LI>
          <Strong>Vos photos</Strong> : logo en bonne qualité, photos de vous,
          de vos locaux, de vos réalisations.
        </LI>
        <LI>
          <Strong>Vos accès</Strong> : nom de domaine (chez qui est-il
          enregistré ?), hébergement actuel le cas échéant.
        </LI>
        <LI>
          <Strong>Votre échéance réelle</Strong> s&apos;il y en a une (salon,
          lancement, saison haute), annoncée dès le premier échange.
        </LI>
      </UL>

      <H2 id="retroplanning">Calculer votre rétroplanning</H2>
      <P>
        Vous visez une date précise ? Le calcul est simple : prenez le haut de
        la fourchette de votre type de projet, ajoutez deux semaines de marge,
        et remontez le calendrier depuis votre date cible.
      </P>
      <Table
        head={["Objectif", "Type de projet", "Démarrage au plus tard"]}
        rows={[
          ["En ligne pour début décembre", "Site vitrine", "Mi-octobre"],
          ["En ligne pour début décembre", "E-commerce", "Début septembre"],
          ["En ligne pour la rentrée (1er septembre)", "Site vitrine", "Mi-juillet"],
          ["En ligne pour janvier", "Application sur mesure", "Juin à octobre selon l'ampleur"],
        ]}
      />
      <P>
        Et n&apos;oubliez pas que le référencement a son propre calendrier :
        un site mis en ligne aujourd&apos;hui met 2 à 4 mois à s&apos;installer
        sur ses requêtes locales, comme détaillé dans{" "}
        <A href="/blog/referencement-local-liege">
          le guide du référencement local
        </A>
        . Si le site doit générer des clients pour une échéance, c&apos;est
        elle moins quatre mois qu&apos;il faut viser pour la mise en ligne.
      </P>

      <H2 id="conclusion">En résumé</H2>
      <P>
        Un site vitrine sérieux se construit en 3 à 6 semaines, un e-commerce
        en 6 à 12, une application en quelques mois. Les délais express
        cachent un produit générique, et les retards viennent presque
        toujours du contenu et des validations, pas du code. Préparez vos
        entrées, exigez un planning clair au devis, et le calendrier tiendra.
      </P>
      <P>
        Vous avez une échéance en tête ? Décrivez-moi le projet et la date via{" "}
        <A href="/contact">le formulaire de contact</A> : je vous dirai
        honnêtement si c&apos;est tenable, et à quelles conditions.
      </P>
    </>
  ),
};
