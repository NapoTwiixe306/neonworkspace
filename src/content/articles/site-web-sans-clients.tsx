import {
  H2,
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

// Intention diagnostic : « site web ne génère pas de clients », « site
// internet inutile », « améliorer conversion site ».
export const siteWebSansClients: Post = {
  slug: "site-web-sans-clients",
  title:
    "Votre site ne génère pas de clients ? Les 7 causes (et leurs remèdes)",
  description:
    "Un site en ligne mais zéro contact : diagnostic méthodique des 7 causes réelles, de l'invisibilité Google au formulaire cassé, avec le remède et le coût de chaque correction. Auto-diagnostic en 15 minutes inclus.",
  date: "2026-07-06",
  readingTime: "14 min",
  tags: ["Conversion", "Diagnostic", "SEO", "Site web"],
  faq: [
    {
      question: "Comment savoir si mon site reçoit des visiteurs ?",
      answer:
        "Sans outil de mesure, impossible de le savoir, et c'est le premier problème à régler : installez un analytics respectueux (Umami, Plausible ou équivalent) ou vérifiez la Search Console de Google, gratuite, qui montre vos impressions et clics dans les résultats de recherche. Diagnostiquer sans données, c'est deviner.",
    },
    {
      question: "Mon site est joli mais ne convertit pas : pourquoi ?",
      answer:
        "Le design n'est qu'un des sept facteurs, et rarement le premier coupable. Les causes les plus fréquentes : personne ne trouve le site (SEO), il est lent sur mobile, l'offre n'est pas claire en 5 secondes, ou la prise de contact demande trop d'efforts. Le diagnostic méthodique de l'article identifie la vôtre.",
    },
    {
      question: "Combien coûte la correction d'un site qui ne convertit pas ?",
      answer:
        "Tout dépend du diagnostic : un formulaire cassé se répare en une heure, une optimisation de vitesse et de contenu se chiffre en centaines d'euros (à partir de 500-900 €), une refonte complète en milliers. C'est précisément pourquoi le diagnostic précède le devis : payer une refonte quand le problème était le formulaire, c'est le pire scénario.",
    },
    {
      question: "En combien de temps un site corrigé produit-il des résultats ?",
      answer:
        "Les corrections de conversion (formulaire, clarté, appels à l'action) agissent immédiatement sur les visiteurs existants. Les corrections de visibilité (SEO, fiche Google) prennent 2 à 4 mois pour s'installer. D'où l'intérêt de traiter les deux fronts en parallèle.",
    },
  ],
  Body: () => (
    <>
      <TLDR>
        <p>
          Un site qui ne génère aucun contact souffre de l&apos;un de ces
          deux maux (souvent des deux) : <Strong>personne ne le
          trouve</Strong> (visibilité) ou <Strong>ceux qui le trouvent ne
          passent pas à l&apos;action</Strong> (conversion). Les 7 causes
          concrètes : invisibilité Google, lenteur mobile, offre confuse,
          absence de preuves, prise de contact laborieuse, informations
          périmées, et zéro mesure.
        </p>
        <p>
          Avant tout devis de refonte, faites le diagnostic : la moitié des
          sites « qui ne marchent pas » se réparent pour une fraction du prix
          d&apos;un site neuf.
        </p>
      </TLDR>

      <Toc
        items={[
          { id: "methode", label: "La méthode : visibilité ou conversion ?" },
          { id: "cause1", label: "Cause 1 : personne ne vous trouve" },
          { id: "cause2", label: "Cause 2 : la lenteur qui fait fuir" },
          { id: "cause3", label: "Cause 3 : l'offre incompréhensible en 5 secondes" },
          { id: "cause4", label: "Cause 4 : zéro preuve, zéro confiance" },
          { id: "cause5", label: "Cause 5 : le parcours du combattant pour vous joindre" },
          { id: "cause6", label: "Cause 6 : le site fantôme" },
          { id: "cause7", label: "Cause 7 : vous naviguez sans instruments" },
          { id: "diagnostic", label: "L'auto-diagnostic en 15 minutes" },
          { id: "conclusion", label: "En résumé" },
        ]}
      />

      <P>
        « J&apos;ai payé un site il y a deux ans, il ne m&apos;a jamais
        rapporté un client. » C&apos;est peut-être la phrase que
        j&apos;entends le plus souvent en premier rendez-vous, et elle
        recouvre des réalités très différentes : parfois le site est
        excellent mais invisible, parfois il est visible mais repoussant,
        parfois le formulaire est simplement cassé depuis huit mois et
        personne ne s&apos;en est aperçu. Ce guide déroule le diagnostic
        méthodique, cause par cause, avec le remède et son coût réel.
      </P>

      <H2 id="methode">La méthode : visibilité ou conversion ?</H2>
      <P>
        Première bifurcation du diagnostic, elle conditionne tout le reste :
      </P>
      <Table
        head={["Symptôme", "Famille de problème", "Où chercher"]}
        rows={[
          [
            "Peu ou pas de visiteurs",
            "Visibilité",
            "Causes 1 et 2 : SEO, indexation, vitesse",
          ],
          [
            "Des visiteurs, mais pas de contacts",
            "Conversion",
            "Causes 3 à 6 : clarté, preuves, parcours, fraîcheur",
          ],
          [
            "Aucune idée du trafic",
            "Mesure",
            "Cause 7 d'abord : impossible de diagnostiquer sans données",
          ],
        ]}
      />

      <H2 id="cause1">Cause 1 : personne ne vous trouve</H2>
      <P>
        Le cas le plus fréquent. Trois tests en cinq minutes :
      </P>
      <UL>
        <LI>
          Tapez <Strong>site:votredomaine.be</Strong> dans Google : si rien
          ne s&apos;affiche, votre site n&apos;est pas indexé du tout
          (problème technique grave mais réparable).
        </LI>
        <LI>
          Cherchez <Strong>« votre métier + votre ville »</Strong> : si vous
          n&apos;apparaissez ni dans la carte ni dans les deux premières
          pages, vous n&apos;existez pas pour les nouveaux clients.
        </LI>
        <LI>
          Cherchez <Strong>votre nom commercial</Strong> : si même votre
          propre nom ne vous affiche pas en premier, le problème est profond.
        </LI>
      </UL>
      <P>
        <Strong>Le remède</Strong> dépend du niveau : indexation à réparer
        (rapide), ou vrai chantier SEO local : contenu géolocalisé, données
        structurées, fiche{" "}
        <A href="/blog/google-business-profile-guide">
          Google Business optimisée
        </A>{" "}
        et le plan d&apos;action détaillé dans{" "}
        <A href="/blog/referencement-local-liege">
          le guide du référencement local
        </A>
        . Comptez 2 à 4 mois pour des résultats installés, à partir de 500 €
        pour un travail sérieux.
      </P>

      <H2 id="cause2">Cause 2 : la lenteur qui fait fuir</H2>
      <P>
        Chaque seconde de chargement supplémentaire fait abandonner une part
        des visiteurs, surtout sur mobile où se font la majorité des
        recherches locales. Et Google intègre cette vitesse (les Core Web
        Vitals) dans son classement : la lenteur coûte donc deux fois, en
        conversion et en visibilité.
      </P>
      <P>
        <Strong>Le test</Strong> : passez votre site dans PageSpeed Insights
        (gratuit). Sous 70 en mobile, vous perdez des clients ; sous 50, le
        site travaille contre vous. <Strong>Le remède</Strong> : optimisation
        ciblée (images, scripts, cache) quand la base est saine, à partir de
        900 € ; refonte quand la technologie est en cause, comme expliqué
        dans{" "}
        <A href="/blog/refonte-site-internet-seo">
          le guide de la refonte
        </A>
        .
      </P>

      <H2 id="cause3">Cause 3 : l&apos;offre incompréhensible en 5 secondes</H2>
      <P>
        Le test des 5 secondes : montrez votre page d&apos;accueil à
        quelqu&apos;un qui ne connaît pas votre activité, fermez-la après 5
        secondes, et demandez : que fait cette entreprise, pour qui, où ?
        S&apos;il hésite, vos visiteurs hésitent aussi, et un visiteur qui
        hésite ferme l&apos;onglet.
      </P>
      <P>
        Les suspects habituels : un slogan poétique à la place d&apos;une
        phrase claire (« Passionnément vôtre depuis 1987 » ne dit pas ce que
        vous vendez), des photos génériques, aucune mention de votre zone
        d&apos;intervention. <Strong>Le remède</Strong> est du travail de
        contenu, pas de technique : une phrase d&apos;ouverture qui dit
        métier + bénéfice + zone, et une page structurée autour de ce que le
        client cherche. C&apos;est le moins cher des remèdes et souvent le
        plus rentable.
      </P>

      <H2 id="cause4">Cause 4 : zéro preuve, zéro confiance</H2>
      <P>
        Votre visiteur vous compare à deux concurrents dans des onglets
        voisins. Ce qui fait pencher la balance : les preuves. Avis clients
        visibles, photos réelles de vos réalisations ou de votre équipe,
        chiffres concrets, mentions légales en règle. Un site sans preuves
        est une affirmation ; un site avec preuves est un dossier.
      </P>
      <UL>
        <LI>
          <Strong>Vraies photos</Strong> plutôt que banque d&apos;images : le
          visiteur fait la différence inconsciemment, et il choisit le réel.
        </LI>
        <LI>
          <Strong>Avis Google intégrés</Strong> au site, avec le lien pour en
          laisser.
        </LI>
        <LI>
          <Strong>Réalisations documentées</Strong> : avant/après, études de
          cas, même modestes.
        </LI>
      </UL>

      <H2 id="cause5">Cause 5 : le parcours du combattant pour vous joindre</H2>
      <P>
        Des contacts se perdent à la dernière marche, et c&apos;est la cause
        la plus bête et la plus fréquente que je rencontre en audit :
      </P>
      <UL>
        <LI>
          <Strong>Le formulaire cassé</Strong> qui n&apos;envoie rien (ou
          envoie vers une boîte que personne ne lit). Testez le vôtre
          maintenant : envoyez-vous un message. Vous seriez surpris du nombre
          de sites où ce test échoue.
        </LI>
        <LI>
          <Strong>Le numéro non cliquable</Strong> sur mobile : chaque
          manipulation en plus perd des appels.
        </LI>
        <LI>
          <Strong>Le formulaire interrogatoire</Strong> : douze champs
          obligatoires pour une simple demande. Nom, contact, message :
          tout le reste attendra le premier échange.
        </LI>
        <LI>
          <Strong>L&apos;appel à l&apos;action invisible</Strong> : aucun
          bouton clair sur la page ; le visiteur convaincu ne sait
          littéralement pas quoi faire.
        </LI>
      </UL>

      <H2 id="cause6">Cause 6 : le site fantôme</H2>
      <P>
        Horaires d&apos;avant le déménagement, « actualités » de 2023,
        services que vous ne proposez plus, copyright figé trois ans en
        arrière : chaque signe d&apos;abandon dit au visiteur « cette
        entreprise ne fait pas attention », et il transpose sur votre
        travail. Google aussi préfère les sites vivants. <Strong>Le
        remède</Strong> : une passe de mise à jour immédiate, puis un
        rythme minimal tenable (une actualité ou un contenu par mois, et une
        revue trimestrielle des informations pratiques).
      </P>

      <H2 id="cause7">Cause 7 : vous naviguez sans instruments</H2>
      <P>
        Sans mesure, chaque discussion sur « le site qui ne marche pas » est
        une discussion d&apos;opinions. Deux outils gratuits suffisent : la{" "}
        <Strong>Search Console</Strong> de Google (vos impressions et clics
        dans les résultats de recherche, les requêtes qui vous affichent) et
        un <Strong>analytics respectueux de la vie privée</Strong> (Umami,
        Plausible) qui montre les pages vues et les parcours sans bannière
        de consentement. Trente minutes d&apos;installation, et tous vos
        futurs choix reposent sur des faits.
      </P>

      <H2 id="diagnostic">L&apos;auto-diagnostic en 15 minutes</H2>
      <Callout>
        <Strong>Cochez ce qui est vrai pour votre site :</Strong> il apparaît
        sur « métier + ville » (page 1 ou carte) · PageSpeed mobile au-dessus
        de 70 · l&apos;offre est claire en 5 secondes pour un inconnu · au
        moins 5 avis récents visibles · le formulaire testé aujourd&apos;hui
        fonctionne · le téléphone est cliquable sur mobile · les
        informations datent de moins de 6 mois · un analytics ou la Search
        Console est en place. <Strong>7-8 cases :</Strong> votre site est
        sain, le problème est ailleurs (offre, marché, volume de recherche).{" "}
        <Strong>4-6 :</Strong> des corrections ciblées suffiront
        probablement. <Strong>0-3 :</Strong> un diagnostic professionnel
        s&apos;impose avant toute dépense, et une refonte est plausible.
      </Callout>

      <H2 id="conclusion">En résumé</H2>
      <P>
        Un site qui ne rapporte rien n&apos;est pas une fatalité, c&apos;est
        un symptôme : soit on ne vous trouve pas, soit on ne vous croit pas,
        soit on ne parvient pas à vous joindre. Le diagnostic méthodique
        évite la double erreur classique : payer une refonte complète quand
        500 € de corrections auraient suffi, ou saupoudrer des rustines sur
        un site condamné. Les prix du marché pour chaque scénario sont dans{" "}
        <A href="/blog/prix-site-web-liege">le guide des prix</A>.
      </P>
      <P>
        Vous voulez un œil professionnel plutôt qu&apos;un auto-diagnostic ?{" "}
        <A href="/contact">Envoyez-moi l&apos;adresse de votre site</A> : je
        vous fais un diagnostic gratuit et honnête, y compris quand la
        conclusion est « votre site va bien, cherchez ailleurs ».
      </P>
    </>
  ),
};
