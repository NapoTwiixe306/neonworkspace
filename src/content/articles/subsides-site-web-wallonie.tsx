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

// Article à très forte intention locale : « subside site internet wallonie »,
// « chèques entreprises site web », « aide création site web belgique ».
// Basé sur les dispositifs officiels vérifiés en juillet 2026.
export const subsidesSiteWebWallonie: Post = {
  slug: "subsides-site-web-wallonie",
  title:
    "Subsides et aides pour créer un site web en Wallonie : le guide 2026",
  description:
    "Chèques-entreprises, chèque maturité numérique, déductibilité fiscale : les aides réellement disponibles en 2026 pour financer un site web ou un projet numérique en Wallonie, conditions et démarches détaillées.",
  date: "2026-07-06",
  readingTime: "15 min",
  tags: ["Subsides", "Wallonie", "Aides", "Chèques-entreprises", "Liège"],
  faq: [
    {
      question: "Existe-t-il un subside wallon pour créer un site internet ?",
      answer:
        "Pas directement. La Wallonie ne finance pas le développement du site lui-même, mais le chèque « maturité numérique » du dispositif chèques-entreprises couvre 50 % (max 50 000 € HTVA sur 3 ans) de l'accompagnement autour du projet : diagnostic numérique, plan de mise en œuvre, rédaction du cahier des charges et accompagnement de la mise en place. Le développement reste à votre charge, mais il est fiscalement déductible.",
    },
    {
      question: "Qui peut bénéficier des chèques-entreprises en Wallonie ?",
      answer:
        "Les PME et indépendants inscrits à la Banque-Carrefour des Entreprises avec un siège d'exploitation en Wallonie : moins de 250 personnes, chiffre d'affaires sous 50 millions d'euros ou total de bilan sous 43 millions. Certains secteurs (agriculture, pêche, sylviculture) sont exclus par le règlement de minimis européen.",
    },
    {
      question: "Combien de temps prend une demande de chèque-entreprise ?",
      answer:
        "Le délai d'accord de l'administration est de 5 jours ouvrables, et la demande est automatiquement acceptée si ce délai est dépassé. Attention : la demande doit impérativement être introduite avant le début de la prestation, jamais après.",
    },
    {
      question: "Un site web est-il fiscalement déductible en Belgique ?",
      answer:
        "Oui. Pour un indépendant ou une société, la création d'un site web professionnel est une charge professionnelle : soit déduite en une fois, soit amortie sur plusieurs années selon le montant et votre situation comptable. Sur un site à 2 500 €, l'économie d'impôt réelle est souvent de plusieurs centaines d'euros. Validez le traitement exact avec votre comptable.",
    },
    {
      question: "Les chèques « Relance par le numérique » existent-ils encore ?",
      answer:
        "Non. Ce dispositif, qui couvrait jusqu'à 90 % de certains projets numériques, a été supprimé le 24 novembre 2023. Beaucoup d'articles en ligne en parlent encore : vérifiez toujours la date de publication et la source officielle (cheques-entreprises.be) avant de bâtir un budget sur un subside.",
    },
  ],
  Body: () => (
    <>
      <TLDR>
        <p>
          <Strong>Il n&apos;existe pas de subside wallon qui paie directement
          votre site web.</Strong> Mais trois leviers réels allègent la
          facture en 2026 : le chèque « maturité numérique »
          (50 % de l&apos;accompagnement, plafond de 50 000 € HTVA sur 3 ans),
          la déductibilité fiscale du site comme charge professionnelle, et
          des tarifs de départ raisonnables si vous choisissez bien votre
          prestataire.
        </p>
        <p>
          Conditions clés : être une PME ou un indépendant avec siège
          d&apos;exploitation en Wallonie, et introduire la demande{" "}
          <Strong>avant</Strong> le début de la mission sur
          cheques-entreprises.be.
        </p>
      </TLDR>

      <Toc
        items={[
          { id: "pourquoi", label: "Pourquoi la Wallonie subsidie le numérique" },
          { id: "dispositif", label: "Les chèques-entreprises expliqués simplement" },
          { id: "maturite", label: "Le chèque maturité numérique en détail" },
          { id: "pas-couvert", label: "Ce que le chèque ne couvre pas" },
          { id: "eligibilite", label: "Êtes-vous éligible ? La checklist" },
          { id: "demarches", label: "Les démarches, étape par étape" },
          { id: "fiscal", label: "La déductibilité fiscale, l'aide oubliée" },
          { id: "exemple", label: "Exemple chiffré : ce que ça change" },
          { id: "erreurs", label: "Les 5 erreurs qui font perdre l'aide" },
          { id: "sources", label: "Sources officielles" },
        ]}
      />

      <P>
        Quand on cherche « subside site internet Wallonie » sur Google, on
        tombe sur un champ de mines : des articles périmés qui promettent des
        aides supprimées depuis 2023, des pages d&apos;agences qui gonflent
        les montants pour attirer le clic, et très peu d&apos;information
        sourcée. Cet article fait le tri, avec les chiffres officiels
        vérifiés en juillet 2026 et les liens vers les sources primaires.
        Les dispositifs évoluent : quand vous lirez ceci, revalidez toujours
        les montants sur{" "}
        <A href="https://www.cheques-entreprises.be/">
          cheques-entreprises.be
        </A>
        , le portail officiel wallon.
      </P>

      <H2 id="pourquoi">Pourquoi la Wallonie subsidie le numérique</H2>
      <P>
        La Région wallonne investit dans la transformation numérique de ses
        PME via l&apos;agence Digital Wallonia, pour une raison simple : les
        entreprises wallonnes accusent un retard de digitalisation par rapport
        à la Flandre et aux pays voisins, et ce retard coûte des parts de
        marché. Le principe des aides est donc d&apos;encourager les
        entreprises à se faire accompagner par des experts, pas de distribuer
        des sites web gratuits.
      </P>
      <P>
        Cette nuance est la clé de tout l&apos;article : la Wallonie
        subventionne <Strong>le conseil et l&apos;accompagnement</Strong>{" "}
        autour de votre projet numérique, pas l&apos;exécution technique
        elle-même. Comprendre ça vous évite les deux erreurs les plus
        courantes : renoncer à un projet en croyant qu&apos;aucune aide
        n&apos;existe, ou bâtir un budget sur une aide qui ne couvrira pas ce
        que vous pensez.
      </P>

      <H2 id="dispositif">Les chèques-entreprises expliqués simplement</H2>
      <P>
        Le dispositif <Strong>chèques-entreprises</Strong> est le guichet
        unique wallon des aides à la formation, au conseil et au coaching.
        Concrètement, c&apos;est une plateforme en ligne où chaque entreprise
        wallonne dispose d&apos;un portefeuille électronique pouvant aller
        jusqu&apos;à <Strong>200 000 € sur 3 ans</Strong> (maximum 100 000 €
        par année civile), à répartir entre différents « chèques »
        thématiques : création d&apos;entreprise, innovation, transmission,
        et celui qui nous intéresse ici, le numérique.
      </P>
      <P>Le fonctionnement tient en trois principes :</P>
      <UL>
        <LI>
          <Strong>Vous choisissez un prestataire labellisé</Strong> par la
          Région pour la mission de conseil (la liste est publique sur la
          plateforme).
        </LI>
        <LI>
          <Strong>Vous introduisez la demande avant la mission.</Strong>{" "}
          L&apos;administration répond sous 5 jours ouvrables, et
          l&apos;accord est automatique si elle dépasse ce délai.
        </LI>
        <LI>
          <Strong>Vous ne payez que votre part.</Strong> La Région verse sa
          quote-part directement, vous n&apos;avancez pas la totalité.
        </LI>
      </UL>
      <Callout>
        <Strong>À retenir :</Strong> l&apos;ancien dispositif « chèques
        Relance par le numérique », qui couvrait jusqu&apos;à 90 % de certains
        projets, <Strong>n&apos;existe plus depuis le 24 novembre 2023</Strong>.
        Si un article ou un prestataire vous le promet encore, fuyez : soit
        l&apos;information est périmée, soit on essaie de vous vendre du rêve.
      </Callout>

      <H2 id="maturite">Le chèque maturité numérique en détail</H2>
      <P>
        Le chèque <Strong>« maturité numérique »</Strong> est aujourd&apos;hui
        la principale aide wallonne pour un projet web ou e-commerce. Voici
        ses paramètres officiels, tels que publiés sur la plateforme
        chèques-entreprises :
      </P>
      <Table
        head={["Paramètre", "Valeur"]}
        rows={[
          [
            <Strong key="t">Taux d&apos;intervention</Strong>,
            "50 % du coût HTVA de la mission",
          ],
          [
            <Strong key="m">Plafond</Strong>,
            "50 000 € HTVA sur 3 ans",
          ],
          [
            <Strong key="b">Bénéficiaires</Strong>,
            "PME et indépendants avec siège d'exploitation en Wallonie",
          ],
          [
            <Strong key="p">Prestataire</Strong>,
            "Obligatoirement labellisé par la Région wallonne",
          ],
          [
            <Strong key="d">Délai d&apos;accord</Strong>,
            "5 jours ouvrables (acceptation automatique au-delà)",
          ],
        ]}
      />
      <P>Ce que le chèque finance concrètement :</P>
      <UL>
        <LI>
          <Strong>Un diagnostic de maturité numérique</Strong> : où en sont
          vos processus, votre présence en ligne, vos outils.
        </LI>
        <LI>
          <Strong>Un plan de mise en œuvre</Strong> : quelle stratégie
          digitale, quels outils, dans quel ordre, pour quel budget.
        </LI>
        <LI>
          <Strong>La rédaction d&apos;un cahier des charges</Strong> : le
          document qui décrit précisément le site ou l&apos;outil à
          construire, et qui vous évite les devis flous.
        </LI>
        <LI>
          <Strong>L&apos;accompagnement de la mise en œuvre</Strong> : un
          expert qui suit le projet et challenge les prestataires à votre
          place.
        </LI>
      </UL>
      <P>
        Pour un projet e-commerce ou une digitalisation plus large, cet
        accompagnement a une vraie valeur : un bon cahier des charges peut
        faire économiser des milliers d&apos;euros en évitant les
        malentendus, les fonctionnalités inutiles et les devis gonflés.
      </P>

      <H2 id="pas-couvert">Ce que le chèque ne couvre pas (soyons honnêtes)</H2>
      <P>
        C&apos;est le point que beaucoup de contenus commerciaux laissent dans
        le flou, alors disons-le clairement : le chèque maturité numérique
        finance du <Strong>conseil</Strong>, pas du{" "}
        <Strong>développement</Strong>. Les heures passées à designer et coder
        votre site vitrine ne sont pas subventionnées par ce dispositif.
      </P>
      <P>
        Conséquence pratique : pour un simple site vitrine à 1 500 € ou
        2 500 €, monter un dossier de chèque n&apos;a généralement pas de
        sens. La mission de conseil subventionnable (diagnostic, cahier des
        charges) coûterait plus cher que le site lui-même. L&apos;aide devient
        pertinente à partir de projets plus structurants : e-commerce,
        digitalisation de processus internes, application métier, refonte
        stratégique de votre présence en ligne.
      </P>
      <Callout>
        <Strong>À retenir :</Strong> petit projet web = jouez la carte
        fiscale (voir plus bas) et un prestataire aux tarifs justes. Projet
        structurant (e-commerce, application, digitalisation) = le chèque
        maturité numérique peut financer la moitié de l&apos;accompagnement,
        et cet accompagnement en vaut la peine.
      </Callout>

      <H2 id="eligibilite">Êtes-vous éligible ? La checklist</H2>
      <P>
        Cochez mentalement : il faut pouvoir répondre oui aux cinq critères.
      </P>
      <UL>
        <LI>
          Vous êtes une <Strong>personne physique ou morale exerçant une
          activité économique</Strong> (indépendant en personne physique
          compris).
        </LI>
        <LI>
          Vous êtes <Strong>inscrit à la Banque-Carrefour des Entreprises</Strong>{" "}
          (BCE), avec un numéro d&apos;entreprise actif.
        </LI>
        <LI>
          Votre <Strong>siège principal d&apos;exploitation est en
          Wallonie</Strong> (Liège, province de Liège, ou ailleurs en Région
          wallonne).
        </LI>
        <LI>
          Vous êtes une <Strong>PME</Strong> : moins de 250 personnes, et
          chiffre d&apos;affaires annuel sous 50 millions d&apos;euros ou
          total de bilan sous 43 millions.
        </LI>
        <LI>
          Votre secteur n&apos;est <Strong>pas exclu</Strong> par le règlement
          de minimis européen (agriculture primaire, pêche, sylviculture).
        </LI>
      </UL>
      <P>
        En cas de doute sur votre situation, le portail{" "}
        <A href="https://www.1890.be/">1890.be</A> (le point de contact
        officiel des entrepreneurs wallons) répond gratuitement et vous
        oriente vers le bon dispositif.
      </P>

      <H2 id="demarches">Les démarches, étape par étape</H2>
      <P>Le parcours complet, dans l&apos;ordre :</P>
      <UL>
        <LI>
          <Strong>1. Créez votre compte</Strong> sur{" "}
          <A href="https://www.cheques-entreprises.be/">
            cheques-entreprises.be
          </A>{" "}
          avec votre numéro BCE. C&apos;est le guichet unique, tout se passe
          là.
        </LI>
        <LI>
          <Strong>2. Choisissez un prestataire labellisé</Strong> dans
          l&apos;annuaire de la plateforme pour la mission de conseil. Le
          label est obligatoire : une facture d&apos;un prestataire non
          labellisé ne sera pas remboursée.
        </LI>
        <LI>
          <Strong>3. Introduisez la demande avant le début de la mission.</Strong>{" "}
          C&apos;est la règle la plus importante du dispositif : toute
          prestation commencée avant l&apos;accord est définitivement exclue.
        </LI>
        <LI>
          <Strong>4. Attendez l&apos;accord</Strong> : 5 jours ouvrables
          maximum, acceptation automatique au-delà.
        </LI>
        <LI>
          <Strong>5. La mission se déroule</Strong>, le prestataire dépose ses
          livrables sur la plateforme, vous validez, et chacun est payé de sa
          part.
        </LI>
      </UL>

      <H2 id="fiscal">La déductibilité fiscale, l&apos;aide oubliée</H2>
      <P>
        Pendant que tout le monde cherche des subsides, l&apos;aide la plus
        accessible est fiscale, et elle concerne <Strong>tous</Strong> les
        projets web professionnels, même un petit site vitrine : la création
        de votre site est une <Strong>charge professionnelle déductible</Strong>.
      </P>
      <P>
        Selon le montant et votre situation, votre comptable la passera en
        charge de l&apos;année ou l&apos;amortira sur plusieurs exercices. Les
        frais récurrents (nom de domaine, hébergement, maintenance) sont eux
        aussi déductibles chaque année. L&apos;économie réelle dépend de votre
        taux marginal d&apos;imposition et de cotisations sociales : pour un
        indépendant en personne physique taxé au taux plein, l&apos;économie
        combinée dépasse souvent 40 % du montant investi.
      </P>
      <Callout>
        <Strong>Important :</Strong> je suis développeur, pas comptable. Les
        ordres de grandeur ci-dessus sont vérifiables et prudents, mais le
        traitement exact (charge directe ou amortissement, taux applicable)
        dépend de votre dossier. Validez-le avec votre comptable avant de
        décider, c&apos;est une question à cinq minutes pour lui.
      </Callout>

      <H2 id="exemple">Exemple chiffré : ce que ça change sur la facture</H2>
      <P>
        Prenons deux cas concrets avec{" "}
        <A href="/developpeur-web-liege">mes tarifs de départ</A>, pour rendre
        les ordres de grandeur tangibles.
      </P>
      <H3>Cas 1 : site vitrine d&apos;un indépendant liégeois</H3>
      <P>
        Site vitrine à 1 500 €. Pas de chèque pertinent (le projet est trop
        petit pour une mission de conseil subventionnée). Mais en charge
        professionnelle, pour un indépendant taxé au taux marginal plein,
        le coût réel après impôts et cotisations descend aux alentours de
        850 € à 950 €. Le site qui « coûte 1 500 € » ne les coûte jamais
        vraiment.
      </P>
      <H3>Cas 2 : PME qui lance un e-commerce</H3>
      <P>
        Projet e-commerce à 8 000 € de développement, précédé d&apos;une
        mission d&apos;accompagnement (diagnostic + cahier des charges +
        suivi) à 4 000 € HTVA chez un prestataire labellisé. Le chèque
        maturité numérique prend 50 % de la mission de conseil, soit 2 000 €
        d&apos;aide directe. Le tout est ensuite déductible. Sur un budget
        total de 12 000 €, l&apos;effort réel de trésorerie après aide et
        fiscalité se situe, selon la situation de la société, autour de 7 000
        à 7 500 €.
      </P>
      <P>
        Ces deux exemples utilisent des hypothèses prudentes. Le message
        n&apos;est pas « c&apos;est gratuit », il est : le vrai coût
        d&apos;un projet web bien mené est nettement inférieur au montant du
        devis, à condition d&apos;utiliser les leviers dans le bon ordre.
      </P>

      <H2 id="erreurs">Les 5 erreurs qui font perdre l&apos;aide</H2>
      <UL>
        <LI>
          <Strong>Commencer la mission avant l&apos;accord.</Strong>{" "}
          Élimination définitive, sans recours. La demande se fait toujours
          avant.
        </LI>
        <LI>
          <Strong>Choisir un prestataire non labellisé</Strong> pour la partie
          conseil. La facture ne sera tout simplement pas prise en compte.
        </LI>
        <LI>
          <Strong>Se baser sur des articles périmés.</Strong> Les dispositifs
          wallons changent régulièrement (les chèques « Relance par le
          numérique » ont disparu en novembre 2023). Une seule source fait
          foi : la plateforme officielle.
        </LI>
        <LI>
          <Strong>Monter un dossier pour un trop petit projet.</Strong> Sous
          quelques milliers d&apos;euros, le jeu n&apos;en vaut pas la
          chandelle : la carte fiscale suffit.
        </LI>
        <LI>
          <Strong>Oublier de garder les preuves.</Strong> Livrables, rapports,
          factures : la plateforme les exige pour libérer le paiement.
        </LI>
      </UL>

      <P>
        Dernier conseil pratique : les aides récompensent les projets
        préparés. Avant même de penser subside, clarifiez ce que votre site
        doit accomplir (être trouvé sur Google ? vendre en ligne ? gérer des
        réservations ?). Si le sujet est la visibilité locale, commencez par{" "}
        <A href="/blog/referencement-local-liege">
          mon guide du référencement local à Liège
        </A>{" "}
        ; si c&apos;est le budget global, par{" "}
        <A href="/blog/prix-site-web-liege">le guide des prix</A> ; et si vous
        hésitez encore sur le type de prestataire, par{" "}
        <A href="/blog/agence-web-ou-freelance-liege">
          le comparatif agence ou freelance
        </A>
        .
      </P>

      <H2 id="sources">Sources officielles</H2>
      <UL>
        <LI>
          <A href="https://www.cheques-entreprises.be/cheques/maturite-numerique/">
            Chèques-entreprises, fiche officielle du chèque maturité numérique
          </A>{" "}
          : taux, plafonds et fonctionnement.
        </LI>
        <LI>
          <A href="https://www.digitalwallonia.be/fr/publications/aides-transformation-numerique/">
            Digital Wallonia, aides à la transformation numérique
          </A>{" "}
          : vue d&apos;ensemble du dispositif et du portefeuille électronique.
        </LI>
        <LI>
          <A href="https://www.wallonie.be/fr">Wallonie.be</A> : démarches
          administratives officielles.
        </LI>
        <LI>
          <A href="https://www.1890.be/">1890.be</A> : le point de contact
          gratuit des entrepreneurs wallons, pour valider votre éligibilité.
        </LI>
      </UL>
    </>
  ),
};
