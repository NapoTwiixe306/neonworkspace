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

// Intention pratique locale : « google business profile », « fiche google
// entreprise », « apparaître sur google maps ».
export const googleBusinessProfileGuide: Post = {
  slug: "google-business-profile-guide",
  title:
    "Google Business Profile : le guide complet pour une entreprise liégeoise",
  description:
    "Créer, optimiser et faire vivre sa fiche Google Business Profile : catégories, photos, avis, posts et erreurs à éviter. Le levier gratuit le plus puissant du référencement local, expliqué pas à pas.",
  date: "2026-07-06",
  readingTime: "14 min",
  tags: ["Google Business", "SEO local", "Liège", "Guide"],
  faq: [
    {
      question: "Google Business Profile est-il vraiment gratuit ?",
      answer:
        "Oui, entièrement : la création, la gestion, les photos, les posts et les statistiques ne coûtent rien. Méfiez-vous des démarcheurs téléphoniques qui facturent « le référencement de votre fiche Google » : tout ce qu'ils vendent se fait gratuitement en quelques heures.",
    },
    {
      question: "Comment apparaître dans les 3 premiers résultats avec la carte ?",
      answer:
        "Le « pack local » se gagne sur trois critères officiels de Google : la pertinence (fiche complète, bonnes catégories), la distance (votre adresse par rapport au chercheur) et la notoriété (avis, mentions, liens). Vous ne contrôlez pas la distance, mais une fiche complète avec un flux d'avis réguliers surclasse la plupart des concurrents locaux.",
    },
    {
      question: "Faut-il une adresse physique pour avoir une fiche ?",
      answer:
        "Non : les entreprises de services à domicile (artisans, coachs...) peuvent créer une fiche en zone desservie, sans afficher d'adresse. Vous définissez les communes couvertes et la fiche apparaît sur les recherches de cette zone.",
    },
    {
      question: "Que faire face à un avis négatif injuste ?",
      answer:
        "Répondez calmement et factuellement : la réponse est lue par tous vos futurs clients, c'est pour eux que vous écrivez. Si l'avis viole les règles de Google (faux avis, conflit d'intérêts, propos haineux), signalez-le pour demander sa suppression, mais ne comptez pas dessus : la meilleure défense est un flux régulier d'avis positifs authentiques.",
    },
    {
      question: "La fiche Google remplace-t-elle un site web ?",
      answer:
        "Non, elles se renforcent : la fiche capte la carte et les recherches très locales, le site capte les recherches d'information, rassure en profondeur et vous appartient. Google croise d'ailleurs les deux : un site cohérent avec la fiche renforce la confiance de l'algorithme.",
    },
  ],
  Body: () => (
    <>
      <TLDR>
        <p>
          La fiche Google Business Profile est le levier{" "}
          <Strong>gratuit</Strong> le plus puissant du référencement local :
          c&apos;est elle qui vous place sur Google Maps et dans le « pack
          local », les trois résultats avec la carte qui captent
          l&apos;essentiel des clics locaux.
        </p>
        <p>
          La méthode tient en quatre habitudes : une fiche{" "}
          <Strong>complète à 100 %</Strong> (catégories précises, services,
          zone), de <Strong>vraies photos</Strong> renouvelées, un{" "}
          <Strong>flux d&apos;avis</Strong> demandés systématiquement (avec
          réponse à chacun), et une <Strong>cohérence parfaite</Strong> entre
          la fiche, votre site et vos autres présences en ligne.
        </p>
      </TLDR>

      <Toc
        items={[
          { id: "pourquoi", label: "Pourquoi la fiche pèse autant" },
          { id: "criteres", label: "Les 3 critères officiels de classement" },
          { id: "creation", label: "Créer (ou récupérer) sa fiche" },
          { id: "optimisation", label: "L'optimisation champ par champ" },
          { id: "avis", label: "Les avis : la machine à confiance" },
          { id: "vivre", label: "Faire vivre la fiche (10 min par semaine)" },
          { id: "erreurs", label: "Les 6 erreurs qui plombent une fiche" },
          { id: "arnaques", label: "Les arnaques au référencement de fiche" },
          { id: "conclusion", label: "En résumé" },
          { id: "sources", label: "Sources" },
        ]}
      />

      <P>
        Si vous ne deviez faire qu&apos;une seule chose pour votre visibilité
        locale, ce serait celle-ci. La fiche Google Business Profile
        (l&apos;encart avec carte, photos, avis et horaires qui
        s&apos;affiche quand on cherche une entreprise) décide d&apos;une
        part énorme des choix locaux : restaurant, garagiste, coiffeur,
        avocat, tout se présélectionne sur la carte. Et pourtant, la majorité
        des fiches liégeoises sont incomplètes, sans photos récentes, avec
        des avis sans réponse. Autrement dit : la place est à prendre, et
        elle est gratuite.
      </P>

      <H2 id="pourquoi">Pourquoi la fiche pèse autant</H2>
      <P>
        Quand quelqu&apos;un cherche « boulangerie Liège » ou « plombier +
        commune », Google affiche avant les résultats classiques un{" "}
        <Strong>pack local</Strong> : trois établissements, avec carte, note
        et bouton d&apos;itinéraire. Ce bloc capte l&apos;essentiel des
        clics des recherches locales, particulièrement sur mobile où il
        occupe tout l&apos;écran. Y figurer, c&apos;est exister ; ne pas y
        figurer, c&apos;est laisser les trois concurrents affichés se
        partager la demande.
      </P>
      <P>
        La fiche alimente aussi Google Maps (les recherches « près de moi »),
        les fiches d&apos;itinéraire, et de plus en plus les réponses des
        moteurs IA quand on leur demande une recommandation locale. Un seul
        actif, gratuit, alimente donc tous ces canaux.
      </P>

      <H2 id="criteres">Les 3 critères officiels de classement</H2>
      <P>
        Google documente publiquement les trois facteurs du classement
        local :
      </P>
      <Table
        head={["Critère", "Ce que c'est", "Ce que vous contrôlez"]}
        rows={[
          [
            <Strong key="p">Pertinence</Strong>,
            "La correspondance entre la fiche et la recherche",
            "Tout : catégories, services, description, attributs complets",
          ],
          [
            <Strong key="d">Distance</Strong>,
            "La proximité entre l'établissement et le chercheur",
            "Rien (sauf la zone desservie pour les services à domicile)",
          ],
          [
            <Strong key="n">Notoriété</Strong>,
            "La réputation en ligne : avis, mentions, liens, cohérence",
            "Beaucoup : flux d'avis, réponses, site cohérent, présence locale",
          ],
        ]}
      />
      <P>
        Traduction pratique : vous ne pouvez rien à la distance, donc tout se
        joue sur la pertinence (remplir la fiche à fond) et la notoriété
        (les avis et la cohérence avec votre site). C&apos;est exactement le
        programme des sections suivantes.
      </P>

      <H2 id="creation">Créer (ou récupérer) sa fiche</H2>
      <P>
        Trois cas de figure au départ :
      </P>
      <UL>
        <LI>
          <Strong>Aucune fiche n&apos;existe :</Strong> créez-la sur
          business.google.com avec votre compte Google. La vérification se
          fait selon les cas par courrier, téléphone, email ou vidéo.
        </LI>
        <LI>
          <Strong>Une fiche existe déjà, non revendiquée :</Strong> Google
          crée parfois des fiches automatiquement. Cherchez votre
          établissement sur Maps et cliquez « Revendiquer cet
          établissement ».
        </LI>
        <LI>
          <Strong>Une fiche existe, revendiquée par un ancien prestataire :</Strong>{" "}
          cas fréquent et pénible. Demandez le transfert de propriété via la
          fiche ; sans réponse en 7 jours, Google propose une procédure de
          récupération. Ne recréez jamais une fiche en double.
        </LI>
      </UL>
      <Callout>
        <Strong>À retenir :</Strong> la fiche doit être détenue par VOTRE
        compte Google, pas celui d&apos;un prestataire. Comme pour le nom de
        domaine de votre site, c&apos;est un actif de l&apos;entreprise :
        vous pouvez donner un accès « gestionnaire » à qui vous voulez, mais
        la propriété reste chez vous.
      </Callout>

      <H2 id="optimisation">L&apos;optimisation champ par champ</H2>
      <H3>La catégorie principale : le choix le plus important</H3>
      <P>
        La catégorie principale pèse plus que tout autre champ. Soyez
        précis : « Boulangerie-pâtisserie » plutôt que « Magasin
        d&apos;alimentation », « Kinésithérapeute » plutôt que « Centre
        médical ». Ajoutez ensuite des catégories secondaires pour vos autres
        activités réelles, sans en abuser.
      </P>
      <H3>Les services et leurs descriptions</H3>
      <P>
        Listez chaque service avec sa description (et son prix si
        pertinent) : ces champs nourrissent la pertinence de la fiche sur
        les recherches précises (« débouchage canalisation », « balayage »)
        que la catégorie seule ne couvre pas.
      </P>
      <H3>La zone desservie</H3>
      <P>
        Pour les services à domicile, définissez honnêtement vos communes
        d&apos;intervention. Inutile de déclarer toute la Wallonie : Google
        privilégie de toute façon la proximité réelle, et une zone crédible
        sert votre pertinence.
      </P>
      <H3>Les photos : le champ le plus négligé</H3>
      <P>
        Les fiches avec des photos récentes et authentiques reçoivent
        nettement plus de clics et de demandes d&apos;itinéraire. Devanture,
        intérieur, équipe, produits ou réalisations : de vraies photos,
        renouvelées régulièrement, prises au smartphone en bonne lumière.
        Jamais de banque d&apos;images, ça se voit et ça détruit la
        confiance.
      </P>
      <H3>Horaires, téléphone, site : la cohérence absolue</H3>
      <P>
        Les informations de la fiche doivent être identiques à celles de
        votre site et de vos réseaux, au caractère près pour le nom,
        l&apos;adresse et le téléphone. Google croise ces sources : les
        incohérences érodent la confiance de l&apos;algorithme, et celle des
        clients qui trouvent porte close.
      </P>

      <H2 id="avis">Les avis : la machine à confiance</H2>
      <P>
        Les avis pèsent double : dans l&apos;algorithme (notoriété) et dans
        la décision du client (personne ne choisit l&apos;établissement à
        3,2 étoiles à côté de celui à 4,8). Le système qui fonctionne :
      </P>
      <UL>
        <LI>
          <Strong>Demandez systématiquement</Strong>, au moment où la
          satisfaction est la plus haute : fin de prestation réussie,
          livraison, compliment spontané. Un lien direct vers le formulaire
          d&apos;avis (généré depuis votre fiche) envoyé par SMS ou email
          multiplie les passages à l&apos;acte.
        </LI>
        <LI>
          <Strong>Visez la régularité, pas le volume.</Strong> Dix avis
          récents pèsent plus que cinquante avis d&apos;il y a trois ans :
          Google et les clients regardent la fraîcheur.
        </LI>
        <LI>
          <Strong>Répondez à tout</Strong>, positif comme négatif, en
          quelques lignes personnalisées. La réponse au négatif est votre
          meilleure publicité : elle montre à tous les lecteurs comment vous
          traitez un problème.
        </LI>
        <LI>
          <Strong>N&apos;achetez jamais d&apos;avis</Strong> : les faux avis
          violent les règles de Google (suspension de fiche possible) et la
          loi sur les pratiques du marché. Le risque est réel et le gain,
          nul.
        </LI>
      </UL>

      <H2 id="vivre">Faire vivre la fiche : 10 minutes par semaine</H2>
      <Table
        head={["Fréquence", "Action", "Impact"]}
        rows={[
          [
            "Chaque semaine",
            "Un post (actualité, offre, réalisation) avec photo",
            "Fiche active = fiche favorisée, et contenu visible des chercheurs",
          ],
          [
            "Chaque semaine",
            "Répondre aux nouveaux avis et questions",
            "Notoriété et taux de conversion",
          ],
          [
            "Chaque mois",
            "Ajouter 2 ou 3 photos récentes",
            "Clics et demandes d'itinéraire en hausse",
          ],
          [
            "Chaque trimestre",
            "Vérifier horaires, services et attributs",
            "Zéro information périmée",
          ],
          [
            "Jours fériés",
            "Renseigner les horaires spéciaux à l'avance",
            "Pas de « fermé alors qu'annoncé ouvert », l'erreur qui fâche",
          ],
        ]}
      />

      <H2 id="erreurs">Les 6 erreurs qui plombent une fiche</H2>
      <UL>
        <LI>
          <Strong>1. Le bourrage de mots-clés dans le nom.</Strong>{" "}
          « Plomberie Dupont ★ meilleur plombier Liège pas cher » viole les
          règles : le nom de la fiche doit être votre vrai nom commercial,
          rien d&apos;autre. Google suspend des fiches pour ça.
        </LI>
        <LI>
          <Strong>2. La catégorie fourre-tout</Strong> qui dilue la
          pertinence sur toutes les recherches précises.
        </LI>
        <LI>
          <Strong>3. Les avis sans réponse</Strong>, qui signalent un
          établissement absent, à l&apos;algorithme comme aux clients.
        </LI>
        <LI>
          <Strong>4. Les doublons de fiche</Strong> (déménagement, ancien
          propriétaire) qui divisent avis et signaux entre deux fiches.
          Fusionnez ou signalez, ne laissez pas traîner.
        </LI>
        <LI>
          <Strong>5. Les horaires faux</Strong>, première cause d&apos;avis
          négatifs vengeurs (« fermé alors que la fiche disait ouvert »).
        </LI>
        <LI>
          <Strong>6. La fiche orpheline, sans site derrière.</Strong> La
          fiche capte la carte, mais le client qui veut en savoir plus doit
          atterrir quelque part qui vous appartient et qui convertit. Fiche
          et site travaillent{" "}
          <A href="/blog/referencement-local-liege">ensemble</A>.
        </LI>
      </UL>

      <H2 id="arnaques">Les arnaques au « référencement de fiche »</H2>
      <P>
        Le démarchage téléphonique autour de Google Business est une
        industrie : « votre fiche n&apos;est pas conforme », « vous allez
        disparaître de Google », « nous sommes partenaires officiels
        Google ». Les règles simples pour ne jamais se faire avoir :
      </P>
      <UL>
        <LI>
          Google ne démarche pas par téléphone pour vendre du référencement
          de fiche. Jamais.
        </LI>
        <LI>
          Tout ce que ces sociétés facturent en abonnement mensuel se fait
          gratuitement, en suivant ce guide.
        </LI>
        <LI>
          Ne donnez jamais la propriété de votre fiche : un accès
          gestionnaire suffit à n&apos;importe quel prestataire légitime.
        </LI>
      </UL>

      <H2 id="conclusion">En résumé</H2>
      <P>
        Une fiche complète à 100 %, de vraies photos renouvelées, des avis
        demandés systématiquement et une réponse à chacun, dix minutes
        d&apos;entretien par semaine : c&apos;est toute la méthode, et elle
        est gratuite. Combinée à un site rapide et cohérent, elle forme le
        socle du référencement local, celui que je détaille dans{" "}
        <A href="/blog/referencement-local-liege">
          le guide du SEO local à Liège
        </A>{" "}
        avec son plan d&apos;action sur 30 jours.
      </P>
      <P>
        Je configure et optimise la fiche Google Business avec chaque site
        que je livre (c&apos;est inclus dans{" "}
        <A href="/developpeur-web-liege">
          mes prestations de référencement local
        </A>
        ), avec une formation de dix minutes pour l&apos;entretenir
        vous-même. Un doute sur l&apos;état de votre fiche actuelle ?{" "}
        <A href="/contact">Envoyez-moi son lien</A>, je vous fais un
        diagnostic gratuit.
      </P>

      <H2 id="sources">Sources</H2>
      <UL>
        <LI>
          <A href="https://support.google.com/business/answer/7091?hl=fr">
            Google, « Améliorer votre classement local »
          </A>{" "}
          : les trois critères officiels (pertinence, distance, notoriété).
        </LI>
        <LI>
          <A href="https://support.google.com/business/">
            Centre d&apos;aide Google Business Profile
          </A>{" "}
          : règles de représentation des établissements, gestion des avis.
        </LI>
      </UL>
    </>
  ),
};
