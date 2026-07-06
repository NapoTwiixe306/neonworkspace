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

// Article pilier « SEO local » : « référencement local liège »,
// « apparaître sur google liège », « seo liège ».
export const referencementLocalLiege: Post = {
  slug: "referencement-local-liege",
  title:
    "Référencement local à Liège : comment apparaître en premier sur Google",
  description:
    "Guide pratique du SEO local à Liège : fiche Google Business Profile, mots-clés géolocalisés, avis, données structurées et moteurs IA, avec un plan d'action sur 30 jours pour ressortir sur les recherches locales.",
  date: "2026-05-05",
  updated: "2026-07-06",
  readingTime: "13 min",
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
    {
      question: "Le SEO local fonctionne-t-il sans site web ?",
      answer:
        "Partiellement. Une fiche Google Business Profile seule peut générer des appels pour une activité très locale (restaurant, coiffeur). Mais sans site, vous ne captez ni les recherches d'information, ni les comparaisons, ni les moteurs IA, et vous dépendez entièrement d'une plateforme qui ne vous appartient pas.",
    },
    {
      question: "Faut-il créer une page par commune autour de Liège ?",
      answer:
        "Seulement si chaque page apporte un contenu réellement différent et utile. Cinquante pages identiques où seul le nom de la ville change sont des « doorway pages », que Google pénalise. Quelques pages riches et différenciées sur vos zones réelles d'activité valent infiniment mieux.",
    },
    {
      question: "C'est quoi le GEO (Generative Engine Optimization) ?",
      answer:
        "L'optimisation pour les moteurs de réponse IA : ChatGPT, Perplexity, les AI Overviews de Google. Concrètement, il s'agit de publier du contenu factuel, structuré et citable (réponses nettes, FAQ, données chiffrées, sources) et de laisser les crawlers IA accéder au site. C'est le prolongement naturel du SEO en 2026.",
    },
  ],
  Body: () => (
    <>
      <TLDR>
        <p>
          Le SEO local se gagne sur trois fronts : une{" "}
          <Strong>fiche Google Business Profile</Strong> complète et active,
          des <Strong>pages riches ciblant des requêtes géolocalisées</Strong>{" "}
          (« votre métier + Liège »), et un <Strong>flux régulier
          d&apos;avis clients</Strong>. La technique (vitesse, données
          structurées) transforme ces efforts en positions.
        </p>
        <p>
          Nouveauté qui change la donne : les moteurs IA (ChatGPT, Perplexity,
          AI Overviews) répondent désormais à une partie des recherches
          locales. Le contenu factuel et structuré qu&apos;ils peuvent citer
          devient un levier à part entière.
        </p>
      </TLDR>

      <Toc
        items={[
          { id: "enjeu", label: "Pourquoi le local est le SEO le plus rentable" },
          { id: "google-business", label: "1. La fiche Google Business Profile" },
          { id: "mots-cles", label: "2. Des mots-clés géolocalisés sur de vraies pages" },
          { id: "avis", label: "3. Les avis clients" },
          { id: "donnees-structurees", label: "4. Les données structurées" },
          { id: "geo", label: "5. Les moteurs IA (GEO)" },
          { id: "technique", label: "6. La base technique qui porte tout" },
          { id: "plan", label: "Le plan d'action sur 30 jours" },
          { id: "conclusion", label: "L'essentiel" },
          { id: "sources", label: "Sources" },
        ]}
      />

      <P>
        Être bien classé sur une recherche locale comme « développeur web
        Liège », « coiffeur Liège » ou « avocat Liège » n&apos;a rien à voir avec
        le fait de ranker sur un mot-clé national. La bonne nouvelle :
        c&apos;est beaucoup plus atteignable, parce que la concurrence est
        limitée et que les leviers sont concrets. Voici comment s&apos;y
        prendre, avec un plan d&apos;action en fin d&apos;article.
      </P>

      <H2 id="enjeu">Pourquoi le local est le SEO le plus rentable</H2>
      <P>
        Google indique qu&apos;une part importante de ses recherches a une
        intention locale, et que les recherches « près de moi » ont explosé
        avec le mobile. Surtout, l&apos;intention est chaude : quelqu&apos;un
        qui tape « électricien Herstal » ne lit pas un article par curiosité,
        il cherche un prestataire. Chaque position gagnée sur une requête
        locale se traduit directement en appels et en demandes de devis.
        C&apos;est le meilleur rapport effort/résultat de tout le marketing
        digital pour une activité de proximité.
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
        dizaines de pages vides. C&apos;est exactement la logique que
        j&apos;applique à mes propres{" "}
        <A href="/developpeur-web-liege">pages locales</A> : chaque ville a
        son contexte économique réel, pas un texte cloné.
      </Callout>

      <H2 id="avis">3. Les avis clients</H2>
      <P>
        Les avis sont un signal de confiance majeur, à la fois pour Google et
        pour vos futurs clients. Prenez l&apos;habitude d&apos;en demander
        systématiquement après une prestation réussie. Un flux régulier d&apos;avis
        récents pèse plus qu&apos;une accumulation ancienne et figée. Et
        répondez-y : la réponse du propriétaire est lue par les prospects
        autant que l&apos;avis lui-même.
      </P>

      <H2 id="donnees-structurees">4. Les données structurées</H2>
      <P>
        Les données structurées (Schema.org) sont un code invisible qui décrit
        votre activité aux moteurs : votre nom, votre métier, votre adresse, vos
        horaires, vos avis. Elles aident Google à afficher des résultats
        enrichis et, de plus en plus, à vous citer dans les réponses des moteurs
        IA. C&apos;est technique, mais c&apos;est exactement le genre de détail
        qui fait la différence, et qui doit être prévu dès la construction du
        site plutôt que rajouté après coup.
      </P>

      <H2 id="geo">5. Ne pas oublier les moteurs IA (GEO)</H2>
      <P>
        De plus en plus de gens posent leurs questions à ChatGPT, Perplexity ou
        directement dans les AI Overviews de Google. Pour être cité par ces
        moteurs, il faut du{" "}
        <Strong>contenu factuel, clair et bien structuré</Strong> : des réponses
        nettes à des questions précises. Concrètement :
      </P>
      <UL>
        <LI>
          Une <Strong>FAQ</Strong> sur chaque page importante, avec de vraies
          réponses complètes (pas trois mots).
        </LI>
        <LI>
          Des <Strong>résumés en tête d&apos;article</Strong> : les moteurs IA
          adorent citer un paragraphe qui répond à la question en trois
          phrases.
        </LI>
        <LI>
          Des <Strong>chiffres sourcés</Strong> : une donnée vérifiable est
          plus citable qu&apos;une opinion.
        </LI>
        <LI>
          Un <Strong>fichier llms.txt</Strong> et un robots.txt qui autorisent
          les crawlers IA (GPTBot, ClaudeBot, PerplexityBot) au lieu de les
          bloquer.
        </LI>
      </UL>

      <H2 id="technique">6. La base technique qui porte tout</H2>
      <P>
        Tout ce qui précède s&apos;appuie sur un socle : un site rapide
        (Core Web Vitals au vert), lisible sur mobile, avec des URL propres et
        un sitemap. Un contenu excellent sur un site qui met six secondes à
        charger perd la moitié de sa valeur. Si votre socle actuel date, le
        choix de la technologie est traité dans{" "}
        <A href="/blog/wordpress-ou-site-sur-mesure">
          WordPress ou site sur mesure
        </A>{" "}
        et le budget dans{" "}
        <A href="/blog/prix-site-web-liege">le guide des prix</A>.
      </P>

      <H2 id="plan">Le plan d&apos;action sur 30 jours</H2>
      <Table
        head={["Période", "Action", "Résultat attendu"]}
        rows={[
          [
            "Jours 1 à 3",
            "Créer ou reprendre la fiche Google Business : chaque champ, photos, services",
            "Apparaître correctement sur Maps",
          ],
          [
            "Jours 4 à 10",
            "Lister 10 requêtes locales cibles et vérifier vos positions actuelles",
            "Une feuille de route mesurable",
          ],
          [
            "Jours 11 à 20",
            "Écrire ou enrichir une page par service principal, géolocalisée et utile",
            "Des pages capables de ranker",
          ],
          [
            "Jours 21 à 25",
            "Demander un avis à vos 10 derniers clients satisfaits",
            "Un flux d'avis récents",
          ],
          [
            "Jours 26 à 30",
            "Vérifier la technique : vitesse mobile, données structurées, sitemap",
            "Un socle qui ne freine plus",
          ],
        ]}
      />
      <P>
        Ensuite, le rythme de croisière : une actualité Google Business par
        semaine, un contenu utile par mois, des avis en continu. Les positions
        locales se construisent en 2 à 4 mois et se défendent ensuite avec
        très peu d&apos;effort.
      </P>

      <H2 id="conclusion">L&apos;essentiel</H2>
      <P>
        Le SEO local à Liège n&apos;est pas une formule magique, mais une
        discipline : une fiche Google Business soignée, des pages utiles et
        géolocalisées, des avis réguliers et des bases techniques propres. Fait
        sérieusement et dans la durée, ce travail vous place là où vos clients
        vous cherchent, en haut de la première page. Et si le support
        technique de ce travail reste à construire, commencez par choisir le
        bon socle :{" "}
        <A href="/blog/wordpress-ou-site-sur-mesure">
          WordPress ou sur mesure
        </A>
        , puis{" "}
        <A href="/blog/agence-web-ou-freelance-liege">
          le bon type de prestataire
        </A>
        .
      </P>

      <H2 id="sources">Sources</H2>
      <UL>
        <LI>
          <A href="https://support.google.com/business/">
            Aide officielle Google Business Profile
          </A>{" "}
          : critères de classement local (pertinence, distance, notoriété).
        </LI>
        <LI>
          <A href="https://developers.google.com/search/docs/appearance/structured-data">
            Google Search Central, données structurées
          </A>{" "}
          : documentation officielle Schema.org pour Google.
        </LI>
        <LI>
          <A href="https://schema.org/">Schema.org</A> : vocabulaire de
          référence des données structurées.
        </LI>
      </UL>
    </>
  ),
};
