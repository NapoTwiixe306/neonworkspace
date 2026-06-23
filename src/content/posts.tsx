import type { ComponentType } from "react";
import { H2, H3, P, UL, LI, Callout, Strong } from "@/src/components/Prose";

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO (date de publication)
  updated?: string; // ISO (dernière mise à jour)
  readingTime: string;
  tags: string[];
  faq?: { question: string; answer: string }[];
}

interface Post extends PostMeta {
  Body: ComponentType;
}

// Article 1 : intention commerciale locale forte (« prix site web Liège »)
const prixSiteWebLiege: Post = {
  slug: "prix-site-web-liege",
  title: "Combien coûte un site web à Liège en 2026 ? Guide complet des prix",
  description:
    "Prix réels d'un site web à Liège en 2026 : site vitrine, e-commerce, application sur mesure. Fourchettes détaillées, ce qui fait varier le tarif et comment éviter les mauvaises surprises.",
  date: "2026-02-10",
  updated: "2026-06-20",
  readingTime: "8 min",
  tags: ["Prix", "Site web", "Liège", "Freelance"],
  faq: [
    {
      question: "Combien coûte un site vitrine à Liège ?",
      answer:
        "Un site vitrine professionnel à Liège coûte généralement entre 1 500 € et 5 000 € selon le nombre de pages, le sur-mesure du design et les fonctionnalités (formulaires, multilingue, blog). Un site one-page simple peut démarrer autour de 900 €.",
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
  ],
  Body: () => (
    <>
      <P>
        C&apos;est la première question que l&apos;on me pose, et c&apos;est
        normal. Le problème, c&apos;est qu&apos;on trouve tout et son contraire
        en ligne : « un site à 300 € » côtoie « un site à 25 000 € ». Les deux
        existent, mais ils ne désignent pas la même chose. Voici des fourchettes
        honnêtes, basées sur le marché liégeois et wallon en 2026, et surtout ce
        qui fait réellement bouger le prix.
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
          <Strong>Application web sur mesure :</Strong> à partir de 8 000 €, sans
          réel plafond. Tableau de bord, espace client, outil métier : on est ici
          dans du développement spécifique.
        </LI>
      </UL>
      <Callout>
        Ces chiffres incluent la conception, le développement et la mise en
        ligne. Méfiez-vous des devis très en dessous : le coût « caché » se paie
        souvent plus tard en lenteur, en bugs ou en refonte complète.
      </Callout>

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
        quand vous réaliserez que personne ne vous trouve sur Google.
      </P>

      <H2 id="freelance-agence">Freelance ou agence à Liège ?</H2>
      <P>
        Pour un site vitrine ou une petite application, un{" "}
        <Strong>freelance</Strong> est généralement 30 à 50 % moins cher
        qu&apos;une agence, avec un avantage décisif : vous parlez directement à
        la personne qui code votre site, sans intermédiaire. Une{" "}
        <Strong>agence</Strong> prend tout son sens sur les très gros projets,
        quand plusieurs métiers doivent travailler en parallèle.
      </P>

      <H2 id="maintenance">N&apos;oubliez pas la maintenance</H2>
      <P>
        Un site est vivant : mises à jour de sécurité, hébergement, petites
        évolutions. Comptez un budget récurrent de 20 € à 100 € par mois selon
        vos besoins. C&apos;est ce qui garantit qu&apos;un an plus tard, votre
        site est toujours rapide, sûr et à jour.
      </P>

      <H2 id="conclusion">En résumé</H2>
      <P>
        À Liège en 2026, un site vitrine professionnel se situe dans la
        fourchette 1 500 € à 5 000 €. Le bon réflexe n&apos;est pas de chercher
        le moins cher, mais le meilleur rapport entre le prix, la qualité
        technique et le retour sur investissement. Un site bien construit se
        rentabilise par les clients qu&apos;il vous amène.
      </P>
    </>
  ),
};

// Article 2 : autorité technique (« pourquoi Next.js »)
const pourquoiNextjs: Post = {
  slug: "pourquoi-nextjs-site-entreprise",
  title: "Pourquoi je choisis Next.js pour les sites d'entreprise",
  description:
    "Next.js, React, rendu serveur, performance et SEO : pourquoi cette stack est aujourd'hui mon choix par défaut pour des sites d'entreprise rapides et bien référencés.",
  date: "2026-03-18",
  readingTime: "7 min",
  tags: ["Next.js", "React", "Performance", "Technique"],
  faq: [
    {
      question: "Next.js est-il adapté à un petit site vitrine ?",
      answer:
        "Oui. Next.js génère des pages statiques ultra-rapides, parfaites pour un site vitrine, tout en laissant la porte ouverte à des fonctionnalités dynamiques si le projet grandit. On ne paie pas la complexité tant qu'on n'en a pas besoin.",
    },
    {
      question: "Next.js est-il bon pour le SEO ?",
      answer:
        "Excellent. Le rendu côté serveur livre du HTML complet aux moteurs de recherche et aux crawlers IA, avec une gestion native des métadonnées, des sitemaps et des données structurées. C'est l'un de ses plus gros atouts.",
    },
  ],
  Body: () => (
    <>
      <P>
        Le choix d&apos;une technologie n&apos;est jamais neutre : il détermine
        la vitesse de votre site, sa facilité d&apos;évolution et sa visibilité
        sur Google. Depuis quelques années, mon choix par défaut pour les sites
        et applications d&apos;entreprise est <Strong>Next.js</Strong>. Voici
        pourquoi, sans jargon inutile.
      </P>

      <H2 id="rendu-serveur">Le rendu serveur, clé du SEO et de la vitesse</H2>
      <P>
        Beaucoup de sites modernes construisent leurs pages dans le navigateur,
        en JavaScript. Le souci : un moteur de recherche ou un crawler IA peut
        arriver sur une page quasi vide avant que le contenu ne s&apos;affiche.
        Next.js, lui, peut livrer une page{" "}
        <Strong>déjà rendue côté serveur</Strong> : du HTML complet, immédiatement
        lisible par Google et Bing, mais aussi par ChatGPT ou Perplexity.
        C&apos;est un avantage SEO décisif.
      </P>

      <H2 id="performance">Une performance par défaut</H2>
      <P>
        Next.js intègre nativement des optimisations qu&apos;il faudrait
        autrement bricoler : découpage automatique du code, optimisation des
        images, génération de pages statiques. Concrètement, vos visiteurs
        attendent moins, et Google récompense cette rapidité via les Core Web
        Vitals.
      </P>
      <UL>
        <LI>Images compressées et dimensionnées automatiquement.</LI>
        <LI>Pages statiques servies depuis un CDN, donc quasi instantanées.</LI>
        <LI>Chargement progressif : on n&apos;envoie que le code nécessaire.</LI>
      </UL>

      <H2 id="evolutivite">Un socle qui grandit avec vous</H2>
      <P>
        On peut démarrer avec un simple site vitrine, puis ajouter un blog, un
        espace client, un paiement en ligne ou une API, sans tout reconstruire.
        C&apos;est rare : la plupart des solutions vous enferment, soit dans le
        « trop simple », soit dans le « trop complexe ». Next.js permet de
        rester juste au bon niveau.
      </P>

      <H2 id="ecosysteme">React, TypeScript et un écosystème mûr</H2>
      <P>
        Next.js s&apos;appuie sur React, la bibliothèque d&apos;interface la plus
        utilisée au monde, et sur TypeScript, qui réduit drastiquement les bugs.
        Concrètement pour vous : un projet plus fiable, plus facile à reprendre
        et à faire évoluer, par moi ou par n&apos;importe quel développeur
        compétent par la suite.
      </P>
      <Callout>
        Ce site lui-même tourne sous Next.js : l&apos;expérience animée que vous
        voyez en page d&apos;accueil cohabite avec ce blog rendu côté serveur,
        rapide et indexable. La preuve par l&apos;exemple.
      </Callout>

      <H2 id="conclusion">Le bon outil pour le bon objectif</H2>
      <P>
        Aucune technologie n&apos;est magique, et Next.js n&apos;est pas toujours
        la réponse. Mais pour un site d&apos;entreprise qui doit être rapide,
        bien référencé et capable d&apos;évoluer, c&apos;est aujourd&apos;hui
        l&apos;un des meilleurs choix disponibles, et c&apos;est pour ça que je
        l&apos;utilise au quotidien.
      </P>
    </>
  ),
};

// Article 3 : autorité thématique locale (« référencement local Liège »)
const referencementLocalLiege: Post = {
  slug: "referencement-local-liege",
  title: "Référencement local à Liège : comment apparaître en premier sur Google",
  description:
    "Guide pratique du SEO local à Liège : fiche Google Business Profile, mots-clés géolocalisés, avis, contenu et données structurées pour ressortir sur les recherches locales.",
  date: "2026-05-05",
  readingTime: "9 min",
  tags: ["SEO", "Référencement local", "Liège", "Google"],
  faq: [
    {
      question: "Comment apparaître en premier sur Google à Liège ?",
      answer:
        "Trois leviers comptent le plus pour le SEO local à Liège : une fiche Google Business Profile complète et active, des pages avec du contenu réellement utile ciblant des mots-clés géolocalisés, et des avis clients réguliers. Les données structurées et la vitesse du site renforcent le tout.",
    },
    {
      question: "Combien de temps pour ranker sur une requête locale à Liège ?",
      answer:
        "Sur une requête locale peu concurrentielle, on peut voir des résultats en 2 à 4 mois avec un travail régulier. La fiche Google Business peut générer des contacts encore plus vite. Le SEO reste un investissement de fond, pas un interrupteur.",
    },
  ],
  Body: () => (
    <>
      <P>
        Être bien classé sur une recherche locale comme « développeur web
        Liège », « coiffeur Liège » ou « avocat Liège » n&apos;a rien à voir avec
        le fait de ranker sur un mot-clé national. La bonne nouvelle :
        c&apos;est beaucoup plus atteignable, parce que la concurrence est
        limitée et que les leviers sont concrets. Voici comment s&apos;y prendre.
      </P>

      <H2 id="google-business">1. La fiche Google Business Profile</H2>
      <P>
        C&apos;est le levier numéro un du SEO local, et il est gratuit. C&apos;est
        elle qui vous fait apparaître dans le « pack local » (les trois
        résultats avec la carte) et sur Google Maps. Pour qu&apos;elle performe :
      </P>
      <UL>
        <LI>Remplissez <Strong>chaque champ</Strong> : catégorie précise, horaires, zone desservie, services.</LI>
        <LI>Ajoutez de vraies photos régulièrement.</LI>
        <LI>Publiez des actualités (oui, comme un mini réseau social).</LI>
        <LI>Répondez à <Strong>tous</Strong> les avis, positifs comme négatifs.</LI>
      </UL>

      <H2 id="mots-cles">2. Des mots-clés géolocalisés sur de vraies pages</H2>
      <P>
        Google doit comprendre <Strong>où</Strong> vous opérez. Cela passe par
        des pages dédiées avec un contenu réellement utile : titre, sous-titres,
        texte qui mentionne naturellement Liège et votre activité. Attention au
        piège classique :
      </P>
      <Callout>
        Ne créez pas 50 pages identiques « service à [commune] » en changeant
        juste le nom de la ville. Google appelle ça des « doorway pages » et les
        sanctionne. Mieux vaut quelques pages riches et différenciées que des
        dizaines de pages vides.
      </Callout>

      <H2 id="avis">3. Les avis clients</H2>
      <P>
        Les avis sont un signal de confiance majeur, à la fois pour Google et
        pour vos futurs clients. Prenez l&apos;habitude d&apos;en demander
        systématiquement après une prestation réussie. Un flux régulier d&apos;avis
        récents pèse plus qu&apos;une accumulation ancienne et figée.
      </P>

      <H2 id="donnees-structurees">4. Les données structurées</H2>
      <P>
        Les données structurées (Schema.org) sont un code invisible qui décrit
        votre activité aux moteurs : votre nom, votre métier, votre adresse, vos
        horaires, vos avis. Elles aident Google à afficher des résultats
        enrichis et, de plus en plus, à vous citer dans les réponses des moteurs
        IA. C&apos;est technique, mais c&apos;est exactement le genre de détail
        qui fait la différence.
      </P>

      <H2 id="geo">5. Ne pas oublier les moteurs IA (GEO)</H2>
      <P>
        De plus en plus de gens posent leurs questions à ChatGPT, Perplexity ou
        directement dans les AI Overviews de Google. Pour être cité par ces
        moteurs, il faut du{" "}
        <Strong>contenu factuel, clair et bien structuré</Strong> : des réponses
        nettes à des questions précises. Une bonne section FAQ,
        des titres explicites et un texte sans ambiguïté valent de l&apos;or.
      </P>

      <H2 id="conclusion">L&apos;essentiel</H2>
      <P>
        Le SEO local à Liège n&apos;est pas une formule magique, mais une
        discipline : une fiche Google Business soignée, des pages utiles et
        géolocalisées, des avis réguliers et des bases techniques propres. Fait
        sérieusement et dans la durée, ce travail vous place là où vos clients
        vous cherchent, en haut de la première page.
      </P>
    </>
  ),
};

export const posts: Post[] = [
  referencementLocalLiege,
  pourquoiNextjs,
  prixSiteWebLiege,
];

export const postList: PostMeta[] = posts.map(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ({ Body, ...meta }) => meta,
);

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
