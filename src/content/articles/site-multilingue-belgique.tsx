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

// Intention très belge : « site multilingue belgique », « site fr nl »,
// « hreflang », « traduire son site ».
export const siteMultilingueBelgique: Post = {
  slug: "site-multilingue-belgique",
  title:
    "Créer un site multilingue en Belgique (FR/NL/DE/EN) : le guide complet",
  description:
    "Faut-il traduire votre site en néerlandais, allemand ou anglais ? Quand le multilingue est rentable, comment l'implémenter proprement (URLs, hreflang, SEO par langue) et les erreurs qui coûtent cher. Guide pour entreprises belges.",
  date: "2026-07-06",
  readingTime: "15 min",
  tags: ["Multilingue", "Belgique", "hreflang", "SEO", "Technique"],
  faq: [
    {
      question: "Un site belge doit-il obligatoirement être multilingue ?",
      answer:
        "Non, aucune obligation générale : la langue de votre site est libre pour une entreprise privée. La question est purement commerciale : si une part significative de votre clientèle réelle ou visée est néerlandophone, germanophone ou internationale, chaque langue manquante est un marché laissé aux concurrents.",
    },
    {
      question: "Que coûte la traduction d'un site ?",
      answer:
        "Comptez deux postes : la structure technique multilingue (environ 30 à 50 % du prix du site en plus, une fois pour toutes) et la traduction des contenus (au mot chez un traducteur professionnel, ou votre temps si vous êtes bilingue). Pour un site vitrine, la version supplémentaire complète se situe souvent entre 500 € et 1 500 € tout compris.",
    },
    {
      question: "La traduction automatique suffit-elle ?",
      answer:
        "Pour comprendre, oui ; pour convaincre, non. Un néerlandophone repère une traduction automatique en quelques secondes, et l'effet sur la confiance est négatif. Le bon compromis : traduction automatique comme premier jet, relue et corrigée par un locuteur natif, surtout sur les pages commerciales.",
    },
    {
      question: "C'est quoi hreflang, et pourquoi c'est important ?",
      answer:
        "hreflang est une balise qui indique aux moteurs quelles versions linguistiques d'une page existent et pour quel public. Sans elle, Google peut afficher la mauvaise langue au mauvais visiteur ou traiter vos versions comme du contenu dupliqué. C'est la fondation technique du SEO multilingue, invisible mais indispensable.",
    },
    {
      question: "Faut-il un domaine par langue (.be, .nl, .de) ?",
      answer:
        "Généralement non : pour une PME, des sous-répertoires sur un seul domaine (votresite.be/nl/, /de/) concentrent toute l'autorité SEO sur un seul site et simplifient la gestion. Les domaines séparés ne se justifient que pour de vraies filiales par pays avec des stratégies distinctes.",
    },
  ],
  Body: () => (
    <>
      <TLDR>
        <p>
          En Belgique, le multilingue n&apos;est pas un luxe mais un calcul :
          environ 60 % du pays parle néerlandais, l&apos;Allemagne et les
          Pays-Bas sont à moins d&apos;une heure de Liège, et chaque langue
          ajoutée ouvre les recherches Google de ce public.{" "}
          <Strong>La règle : traduisez quand votre clientèle réelle le
          justifie, jamais « au cas où ».</Strong>
        </p>
        <p>
          Techniquement, un multilingue propre repose sur trois choses : des{" "}
          <Strong>URLs par langue</Strong> (/nl/, /de/), des{" "}
          <Strong>balises hreflang</Strong> correctes, et des{" "}
          <Strong>traductions humaines</Strong> sur les pages qui vendent.
          Coût typique : 30 à 50 % du site en plus pour la structure, puis la
          traduction des contenus.
        </p>
      </TLDR>

      <Toc
        items={[
          { id: "contexte", label: "La Belgique, cas d'école du multilingue" },
          { id: "rentable", label: "Quand la traduction est rentable (et quand non)" },
          { id: "langues", label: "Quelles langues, pour qui : le tableau" },
          { id: "technique", label: "L'implémentation technique propre" },
          { id: "hreflang", label: "hreflang sans migraine" },
          { id: "traduction", label: "Traduire : humain, machine ou hybride ?" },
          { id: "seo", label: "Le SEO par langue : plus que traduire" },
          { id: "erreurs", label: "Les 5 erreurs classiques" },
          { id: "conclusion", label: "En résumé" },
          { id: "sources", label: "Sources" },
        ]}
      />

      <P>
        Une entreprise liégeoise est dans une position linguistique unique en
        Europe : à moins d&apos;une heure de route, on parle néerlandais
        (Flandre, Pays-Bas), allemand (communauté germanophone, Allemagne) et
        français. Pour certains secteurs (tourisme, logistique, e-commerce,
        B2B industriel), ces marchés voisins représentent un potentiel réel
        et accessible. Pour d&apos;autres, la traduction serait de
        l&apos;argent jeté. Ce guide vous aide à trancher, puis à
        implémenter proprement si la réponse est oui.
      </P>

      <H2 id="contexte">La Belgique, cas d&apos;école du multilingue</H2>
      <P>
        Les chiffres qui cadrent la décision : le néerlandais est la langue
        d&apos;environ 60 % des Belges, le français d&apos;environ 40 %, et
        la communauté germanophone (autour d&apos;Eupen, à 40 minutes de
        Liège) compte environ 77 000 habitants. Ajoutez les Pays-Bas
        (Maastricht est à 30 minutes de Visé) et la Rhénanie allemande, et
        le rayon commercial d&apos;une entreprise liégeoise couvre trois
        langues sans quitter l&apos;autoroute.
      </P>
      <P>
        Concrètement pour votre site : un client flamand, néerlandais ou
        allemand <Strong>cherche dans sa langue</Strong>. « Gîte Spa » et
        « vakantiehuis Spa » sont deux recherches différentes, avec deux
        concurrences différentes, et votre site en français est absent de la
        seconde. C&apos;est tout l&apos;enjeu.
      </P>

      <H2 id="rentable">Quand la traduction est rentable (et quand non)</H2>
      <H3>Le multilingue se justifie clairement si...</H3>
      <UL>
        <LI>
          <Strong>Votre clientèle réelle est déjà multilingue</Strong> : des
          clients flamands ou néerlandais franchissent déjà votre porte, des
          demandes arrivent en anglais. Le site ne crée pas cette demande, il
          la sert mieux.
        </LI>
        <LI>
          <Strong>Vous êtes dans le tourisme en province de Liège</Strong> :
          Spa, les Fagnes, l&apos;Ourthe-Amblève vivent des visiteurs
          flamands, néerlandais et allemands. Un hébergement monolingue
          abandonne ces réservations aux plateformes.
        </LI>
        <LI>
          <Strong>Votre B2B vise la Flandre ou l&apos;Allemagne</Strong> :
          logistique autour de l&apos;aéroport, sous-traitance industrielle,
          export. L&apos;acheteur évalue dans sa langue.
        </LI>
        <LI>
          <Strong>Vous êtes en zone frontalière</Strong> : Visé, la
          Basse-Meuse, les cantons de l&apos;Est vivent naturellement en deux
          langues.
        </LI>
      </UL>
      <H3>Le multilingue est prématuré si...</H3>
      <UL>
        <LI>
          Votre clientèle est 100 % locale et francophone (commerce de
          quartier, services de proximité) : investissez d&apos;abord dans{" "}
          <A href="/blog/referencement-local-liege">le SEO local</A>, le
          retour y est immédiat.
        </LI>
        <LI>
          Vous n&apos;avez personne pour répondre dans la langue : un site en
          néerlandais qui aboutit sur un répondeur francophone déçoit plus
          qu&apos;il ne convertit.
        </LI>
        <LI>
          Le budget forcerait une traduction automatique brute des pages
          commerciales : mieux vaut une langue excellente que deux médiocres.
        </LI>
      </UL>

      <H2 id="langues">Quelles langues, pour qui : le tableau</H2>
      <Table
        head={["Votre situation", "Langues recommandées", "Priorité"]}
        rows={[
          [
            "Tourisme, hébergement (Spa, Ardennes)",
            "FR + NL, puis DE et EN",
            "NL d'abord : la clientèle flamande et néerlandaise domine",
          ],
          [
            "B2B logistique / industrie",
            "FR + EN, puis NL ou DE selon les marchés",
            "EN comme langue d'affaires par défaut",
          ],
          [
            "Commerce frontalier (Basse-Meuse)",
            "FR + NL",
            "Le réflexe naturel de la clientèle limbourgeoise",
          ],
          [
            "Cantons de l'Est, Eupen",
            "FR + DE",
            "Le DE y est langue officielle et attendue",
          ],
          [
            "Commerce et services locaux liégeois",
            "FR seul",
            "Le multilingue attendra que la demande existe",
          ],
        ]}
      />

      <H2 id="technique">L&apos;implémentation technique propre</H2>
      <P>
        Trois architectures existent ; pour une PME belge, le choix est vite
        fait :
      </P>
      <UL>
        <LI>
          <Strong>Sous-répertoires (recommandé)</Strong> : votresite.be,
          votresite.be/nl/, votresite.be/de/. Un seul domaine qui concentre
          toute l&apos;autorité SEO, une seule maintenance, des coûts
          minimaux.
        </LI>
        <LI>
          <Strong>Sous-domaines</Strong> (nl.votresite.be) : possible, mais
          Google les traite plus comme des sites séparés ; l&apos;autorité se
          disperse sans bénéfice pour une PME.
        </LI>
        <LI>
          <Strong>Domaines par pays</Strong> (.be/.nl/.de) : réservé aux
          vraies structures par pays. Coût et gestion multipliés.
        </LI>
      </UL>
      <P>
        Chaque page doit avoir <Strong>son URL propre par langue</Strong>{" "}
        (jamais de traduction « en place » via un widget JavaScript qui garde
        la même URL : invisible pour Google, donc inutile pour le SEO), et le
        sélecteur de langue doit mener vers <Strong>la page équivalente</Strong>,
        pas vers l&apos;accueil de l&apos;autre langue.
      </P>

      <H2 id="hreflang">hreflang sans migraine</H2>
      <P>
        La balise hreflang dit aux moteurs : « cette page existe aussi en
        néerlandais, ici, pour ce public ». Bien posée, elle garantit que le
        chercheur flamand voit votre version NL dans ses résultats, et que
        Google ne considère pas vos versions comme du contenu dupliqué. Les
        règles d&apos;or :
      </P>
      <UL>
        <LI>
          <Strong>Réciprocité totale</Strong> : chaque version référence
          toutes les autres ET elle-même. Un lien manquant invalide le
          groupe.
        </LI>
        <LI>
          <Strong>Codes corrects</Strong> : « nl-BE » cible les
          néerlandophones de Belgique, « nl » tous les néerlandophones (donc
          aussi les Pays-Bas). Pour la Belgique + Pays-Bas, « nl » simple est
          souvent le bon choix.
        </LI>
        <LI>
          <Strong>Un x-default</Strong> pour la version de repli des autres
          langues.
        </LI>
        <LI>
          <Strong>Ne déclarez que ce qui existe</Strong> : un hreflang vers
          une page non traduite ou vide fait plus de mal que pas de hreflang
          du tout. C&apos;est la raison pour laquelle ce site-ci, 100 %
          francophone, n&apos;en porte pas encore.
        </LI>
      </UL>
      <Callout>
        <Strong>À retenir :</Strong> hreflang est une plomberie invisible que
        beaucoup de sites belges ont fausse (codes inventés, réciprocité
        cassée, liens vers des pages inexistantes). Si vous faites traduire
        votre site, exigez de votre prestataire la validation hreflang, et
        vérifiez dans la Search Console après mise en ligne.
      </Callout>

      <H2 id="traduction">Traduire : humain, machine ou hybride ?</H2>
      <P>
        Le pragmatisme commande une approche par étages :
      </P>
      <UL>
        <LI>
          <Strong>Pages commerciales (accueil, services, réservation) :</Strong>{" "}
          traduction humaine, ou au minimum une relecture native d&apos;un
          premier jet automatique. C&apos;est là que la nuance vend.
        </LI>
        <LI>
          <Strong>Pages informatives (FAQ, articles) :</Strong> traduction
          automatique de qualité + relecture rapide : le rapport
          coût/bénéfice est excellent.
        </LI>
        <LI>
          <Strong>Mentions légales et CGV :</Strong> attention, une
          traduction approximative de clauses juridiques peut se retourner
          contre vous. Traduction sérieuse ou pas de traduction (avec mention
          que la version française fait foi).
        </LI>
      </UL>

      <H2 id="seo">Le SEO par langue : plus que traduire</H2>
      <P>
        Traduire les mots ne suffit pas : les <Strong>recherches</Strong>{" "}
        diffèrent d&apos;une langue à l&apos;autre. Le Flamand ne cherche
        pas la traduction littérale de votre mot-clé français ; il a ses
        propres formulations, et parfois d&apos;autres attentes. Le travail
        par langue comprend : les mots-clés réellement tapés (vérifiés, pas
        devinés), les balises titres et descriptions rédigées dans la
        langue, et les données structurées avec l&apos;attribut de langue
        correct. C&apos;est ce qui distingue un site traduit d&apos;un site
        qui ranke dans les deux langues.
      </P>

      <H2 id="erreurs">Les 5 erreurs classiques</H2>
      <UL>
        <LI>
          <Strong>1. Le widget de traduction JavaScript</Strong> : même URL,
          contenu traduit à la volée, invisible pour Google. Zéro valeur SEO.
        </LI>
        <LI>
          <Strong>2. La demi-traduction</Strong> : la moitié des pages en NL,
          l&apos;autre renvoyant au français. Le visiteur se sent dans un
          site à l&apos;abandon, l&apos;effet confiance s&apos;inverse.
        </LI>
        <LI>
          <Strong>3. Le hreflang faux ou absent</Strong>, qui fait afficher
          la mauvaise langue et disperse le référencement.
        </LI>
        <LI>
          <Strong>4. Le formulaire monolingue au bout du parcours</Strong> :
          tout le site en allemand, et le formulaire de contact (ou les
          emails de confirmation) en français. La conversion meurt à la
          dernière marche.
        </LI>
        <LI>
          <Strong>5. Traduire avant d&apos;avoir un site sain</Strong> : le
          multilingue multiplie tout, y compris les défauts. Un site lent en
          une langue devient un site lent en trois. Fondations d&apos;abord
          (voyez{" "}
          <A href="/blog/wordpress-ou-site-sur-mesure">
            le choix de la technologie
          </A>
          ), langues ensuite.
        </LI>
      </UL>

      <H2 id="conclusion">En résumé</H2>
      <P>
        Traduisez quand votre clientèle réelle le justifie : tourisme, B2B
        exportateur et zones frontalières y gagnent presque toujours,
        commerce de proximité presque jamais. Implémentez proprement :
        sous-répertoires, URLs par langue, hreflang réciproque, traduction
        humaine sur les pages qui vendent. Et budgétez honnêtement : la
        structure multilingue ajoute 30 à 50 % au projet, chaque langue
        ajoute ses contenus.
      </P>
      <P>
        Je construis tous mes sites avec la structure multilingue prête à
        activer : on lance en français, on ajoute le néerlandais ou
        l&apos;allemand le jour où votre marché le demande, sans refonte.
        Votre cas est frontalier ou touristique ?{" "}
        <A href="/contact">Décrivez-le moi</A>, je vous dirai quelles langues
        prioriser et à quel coût réel.
      </P>

      <H2 id="sources">Sources</H2>
      <UL>
        <LI>
          <A href="https://developers.google.com/search/docs/specialty/international/localized-versions?hl=fr">
            Google Search Central, versions localisées et hreflang
          </A>{" "}
          : la documentation officielle de l&apos;implémentation.
        </LI>
        <LI>
          <A href="https://www.ostbelgienlive.be/">
            Communauté germanophone de Belgique
          </A>{" "}
          : données sur la population germanophone.
        </LI>
      </UL>
    </>
  ),
};
