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

// Article comparatif à forte intention locale : « agence web liège »,
// « freelance site internet liège », « agence ou freelance site web ».
export const agenceOuFreelanceLiege: Post = {
  slug: "agence-web-ou-freelance-liege",
  title:
    "Agence web ou freelance à Liège : que choisir pour votre site en 2026 ?",
  description:
    "Agence ou freelance pour créer votre site web à Liège ? Comparaison honnête des prix réels en Belgique, des délais, des forces et des limites de chaque option, avec un test en 6 questions pour trancher.",
  date: "2026-07-06",
  readingTime: "16 min",
  tags: ["Agence", "Freelance", "Liège", "Site web", "Comparatif"],
  faq: [
    {
      question: "Une agence web coûte-t-elle vraiment plus cher qu'un freelance ?",
      answer:
        "Oui, à périmètre égal. En Belgique, un site vitrine facturé par une agence se situe généralement entre 3 000 € et 10 000 €, contre 1 500 € à 4 000 € chez un freelance. L'écart s'explique par les frais de structure de l'agence (locaux, commerciaux, chefs de projet), pas nécessairement par une différence de qualité.",
    },
    {
      question: "Quand faut-il préférer une agence à un freelance ?",
      answer:
        "Quand le projet exige plusieurs métiers en parallèle et en continu : gros e-commerce avec flux logistiques, campagnes publicitaires gérées en même temps que le site, ou besoin d'une équipe qui reste disponible même pendant les congés d'une personne. Pour un site vitrine ou une application de taille raisonnable, un bon freelance couvre tout le périmètre.",
    },
    {
      question: "Un freelance est-il fiable pour un projet d'entreprise ?",
      answer:
        "Oui, à condition de vérifier trois choses : des réalisations en ligne que vous pouvez tester vous-même, un devis écrit et détaillé, et un plan clair pour la maintenance après la mise en ligne. Un freelance sérieux vous donne les accès complets (domaine, hébergement, code) : vous n'êtes jamais prisonnier.",
    },
    {
      question: "Quel est le prix d'un site vitrine à Liège en 2026 ?",
      answer:
        "Entre 1 500 € et 5 000 € chez un professionnel indépendant selon le niveau de sur-mesure, et de 3 000 € à 10 000 € en agence. Les formules d'abonnement démarrent vers 69 € par mois mais vous ne possédez généralement pas le site à la fin.",
    },
    {
      question: "Comment vérifier le sérieux d'un prestataire web à Liège ?",
      answer:
        "Testez ses réalisations réelles : vitesse de chargement (PageSpeed Insights), affichage mobile, positions Google de ses clients. Demandez qui possède le nom de domaine et l'hébergement à la fin du projet, et ce que couvre exactement la maintenance. Les réponses floues sont un signal d'alarme.",
    },
  ],
  Body: () => (
    <>
      <TLDR>
        <p>
          <Strong>Pour un site vitrine ou une application de taille
          raisonnable</Strong>, un freelance coûte 30 à 50 % de moins
          qu&apos;une agence en Belgique (1 500 € à 4 000 € contre 3 000 € à
          10 000 € pour un site vitrine) avec un interlocuteur unique qui code
          lui-même votre site.
        </p>
        <p>
          <Strong>L&apos;agence se justifie</Strong> sur les gros projets qui
          mobilisent plusieurs métiers en continu : e-commerce complexe,
          marketing et développement menés de front, équipes de remplacement.
        </p>
        <p>
          Le vrai critère n&apos;est pas le statut du prestataire, mais ce que
          vous pouvez vérifier : réalisations en ligne, devis détaillé,
          propriété du site à la livraison.
        </p>
      </TLDR>

      <Toc
        items={[
          { id: "difference", label: "Agence et freelance : la vraie différence" },
          { id: "prix", label: "Les prix réels en Belgique en 2026" },
          { id: "agence-forces", label: "Ce qu'une agence fait mieux" },
          { id: "freelance-forces", label: "Ce qu'un freelance fait mieux" },
          { id: "pieges", label: "Les pièges des deux côtés" },
          { id: "abonnement", label: "Le cas des sites en abonnement" },
          { id: "test", label: "Le test en 6 questions" },
          { id: "verifier", label: "Comment vérifier un prestataire" },
          { id: "verdict", label: "Mon verdict" },
          { id: "sources", label: "Sources" },
        ]}
      />

      <P>
        « Agence ou freelance ? » est la deuxième question que se posent les
        indépendants et PME de la région liégeoise quand ils lancent un projet
        web, juste après{" "}
        <A href="/blog/prix-site-web-liege">« combien ça coûte ? »</A>. Et
        c&apos;est une bonne question, parce que la réponse change le budget du
        simple au triple pour un résultat parfois identique.
      </P>
      <P>
        Transparence totale avant de commencer : je suis développeur web
        indépendant à Liège. J&apos;ai donc un biais évident, et plutôt que de
        le cacher, je vais faire l&apos;inverse : vous donner les cas précis où
        je vous dirais moi-même d&apos;aller voir une agence. Vous aurez les
        deux faces de la médaille, chiffres à l&apos;appui.
      </P>

      <H2 id="difference">Agence et freelance : la vraie différence</H2>
      <P>
        On imagine souvent que la différence est une question de qualité :
        l&apos;agence serait « pro », le freelance « bricoleur ». C&apos;est
        faux dans les deux sens. La vraie différence est structurelle.
      </P>
      <P>
        Une <Strong>agence web</Strong> est une entreprise avec des frais de
        structure : des locaux, un ou plusieurs commerciaux, des chefs de
        projet, des développeurs salariés, parfois des designers et des
        spécialistes marketing. Quand vous payez une agence, vous payez ce
        collectif et sa coordination. C&apos;est ce qui explique l&apos;écart
        de prix, pas une différence magique de qualité de code.
      </P>
      <P>
        Un <Strong>freelance</Strong> est une personne seule (ou un tout petit
        collectif) qui vend directement son temps et son expertise. Pas de
        commercial entre vous et lui : la personne qui vous répond au premier
        rendez-vous est celle qui conçoit et code votre site. Les frais de
        structure sont quasi nuls, et ça se voit sur le devis.
      </P>
      <Callout>
        <Strong>À retenir :</Strong> à compétence égale, vous ne payez pas la
        qualité du site, vous payez la structure qui le produit. La question
        utile n&apos;est donc pas « agence ou freelance ? » mais « mon projet
        a-t-il besoin d&apos;une équipe entière, ou d&apos;une seule personne
        compétente ? »
      </Callout>

      <H2 id="prix">Les prix réels en Belgique en 2026</H2>
      <P>
        Voici les fourchettes constatées sur le marché belge en 2026, croisées
        entre plusieurs sources (plateformes de mise en relation comme
        Sortlist, grilles publiques d&apos;agences belges, et mes propres
        devis). Elles concernent des sites professionnels, pas des pages
        bricolées sur un builder gratuit.
      </P>
      <Table
        head={["Type de projet", "Freelance", "Agence"]}
        rows={[
          [
            <Strong key="v">Site vitrine (5 à 10 pages)</Strong>,
            "1 500 € à 4 000 €",
            "3 000 € à 10 000 €",
          ],
          [
            <Strong key="o">One-page / landing</Strong>,
            "900 € à 2 000 €",
            "2 500 € à 5 000 €",
          ],
          [
            <Strong key="e">E-commerce</Strong>,
            "4 000 € à 12 000 €",
            "5 000 € à 15 000 € et plus",
          ],
          [
            <Strong key="a">Application sur mesure</Strong>,
            "à partir de 3 500 €",
            "à partir de 8 000 €",
          ],
          [
            <Strong key="m">Maintenance mensuelle</Strong>,
            "20 € à 100 € / mois",
            "80 € à 300 € / mois",
          ],
        ]}
      />
      <P>
        Deux remarques honnêtes sur ce tableau. D&apos;abord, les fourchettes
        se recouvrent : un freelance senior très demandé peut coûter plus cher
        qu&apos;une petite agence. Ensuite, le bas de fourchette agence cache
        souvent un site à base de template peu personnalisé : à 3 000 € en
        agence, la part du budget qui va réellement dans votre site, une fois
        retirés les frais de structure, est inférieure à ce que le même montant
        achète chez un indépendant.
      </P>
      <P>
        Pour situer mes propres tarifs dans ce paysage : mes{" "}
        <A href="/developpeur-web-liege">sites vitrines démarrent à 1 200 €</A>{" "}
        et mes applications sur mesure à 3 500 €. Ce sont des tarifs de
        lancement assumés : je développe mon activité indépendante en
        m&apos;appuyant sur des produits que j&apos;ai déjà construits et que
        vous pouvez <A href="/projets">tester en ligne</A>.
      </P>

      <H2 id="agence-forces">Ce qu&apos;une agence fait mieux</H2>
      <P>
        Promis, ce n&apos;est pas une section alibi. Il y a des situations où
        l&apos;agence est objectivement le bon choix, et où un freelance
        honnête devrait vous le dire.
      </P>
      <H3>Les projets qui mobilisent plusieurs métiers en continu</H3>
      <P>
        Un gros e-commerce avec gestion de stocks, connexion à un ERP,
        campagnes publicitaires, photos produits et emailing, c&apos;est
        quatre ou cinq métiers différents qui doivent avancer en même temps
        pendant des mois. Une agence coordonne ça nativement. Un freelance
        devra sous-traiter ou vous laisser coordonner vous-même.
      </P>
      <H3>La continuité de service garantie contractuellement</H3>
      <P>
        Si votre activité ne peut pas tolérer 48 heures d&apos;indisponibilité
        de votre prestataire (plateforme de réservation critique, site qui
        génère l&apos;essentiel de votre chiffre d&apos;affaires), une agence
        avec une équipe et des astreintes offre une garantie qu&apos;une
        personne seule ne peut pas promettre. Un freelance part en vacances,
        tombe malade, a d&apos;autres clients.
      </P>
      <H3>Les marchés publics et les grandes organisations</H3>
      <P>
        Beaucoup d&apos;appels d&apos;offres publics et de grands comptes
        exigent des garanties (assurances spécifiques, certifications, taille
        minimale) qu&apos;une structure remplit plus facilement qu&apos;un
        indépendant.
      </P>

      <H2 id="freelance-forces">Ce qu&apos;un freelance fait mieux</H2>
      <H3>Le circuit court, sans téléphone arabe</H3>
      <P>
        En agence, votre demande passe par un chef de projet avant
        d&apos;arriver au développeur, et la réponse fait le chemin inverse.
        Chaque intermédiaire ajoute du délai et de la déperdition. Avec un
        freelance, vous parlez à la personne qui a le code sous les yeux.
        Une modification discutée le matin peut être en ligne l&apos;après-midi.
      </P>
      <H3>Un budget qui va dans le produit</H3>
      <P>
        À 2 500 € chez un indépendant, la quasi-totalité du montant finance de
        la conception et du développement. Le même chèque en agence finance
        d&apos;abord la structure. C&apos;est mécanique, et c&apos;est pour ça
        qu&apos;un freelance livre souvent « plus de site » pour le même prix.
      </P>
      <H3>La responsabilité totale, donc l&apos;implication totale</H3>
      <P>
        Quand une seule personne conçoit, développe et met en ligne votre
        site, elle ne peut s&apos;abriter derrière personne. Mon nom est
        associé à chaque projet que je livre : c&apos;est ma vitrine autant que
        la vôtre. Cette incitation-là ne figure dans aucun contrat
        d&apos;agence.
      </P>
      <H3>La cohérence technique de bout en bout</H3>
      <P>
        Un site rapide et bien référencé se joue dans l&apos;articulation entre
        le design, le code et le SEO. Quand ces trois casquettes sont portées
        par la même tête, il n&apos;y a pas de perte entre les étapes :
        l&apos;interface est pensée pour la performance dès la maquette, et le{" "}
        <A href="/blog/referencement-local-liege">référencement local</A> est
        intégré dès la structure des pages, pas rajouté à la fin.
      </P>

      <H2 id="pieges">Les pièges des deux côtés</H2>
      <H3>Côté agence : le projet « petit client »</H3>
      <P>
        Le risque principal en agence, quand votre budget est modeste, est
        d&apos;être un petit dossier confié au profil le plus junior, sur une
        base de template industrialisée. Vous payez le prix de la structure
        sans profiter de ses seniors. Demandez toujours qui travaillera
        concrètement sur votre projet.
      </P>
      <H3>Côté freelance : l&apos;amateur déguisé</H3>
      <P>
        Le statut d&apos;indépendant ne garantit rien : n&apos;importe qui peut
        se déclarer « créateur de sites web » après un week-end de tutoriels.
        Les signaux d&apos;alarme : pas de réalisations vérifiables en ligne,
        pas de devis écrit, aucune réponse claire sur la maintenance, et des
        prix anormalement bas (un site vitrine « pro » à 300 € n&apos;existe
        pas, comme je le détaille dans{" "}
        <A href="/blog/prix-site-web-liege">mon guide des prix</A>).
      </P>
      <H3>Des deux côtés : la dépendance organisée</H3>
      <P>
        Certains prestataires, agences comme indépendants, gardent la
        propriété du nom de domaine, de l&apos;hébergement ou du code pour
        vous rendre captif. C&apos;est le piège le plus coûteux à long terme :
        le jour où vous voulez partir, vous repartez de zéro. Exigez par écrit
        que le domaine soit enregistré à votre nom et que vous receviez tous
        les accès à la livraison.
      </P>
      <Callout>
        <Strong>À retenir :</Strong> le critère décisif n&apos;est ni le
        statut ni la taille du prestataire, mais la réponse à trois questions.
        Qui possède le domaine et le site à la fin ? Qui travaille
        concrètement sur mon projet ? Que couvre exactement la maintenance ?
      </Callout>

      <H2 id="abonnement">Le cas des sites en abonnement</H2>
      <P>
        Troisième acteur du marché belge : les formules par abonnement,
        généralement entre 69 € et 199 € par mois avec engagement de 12 mois
        minimum, maintenance incluse. Séduisant sur le papier : pas
        d&apos;investissement de départ.
      </P>
      <P>
        Faites le calcul sur trois ans : à 99 € par mois, vous aurez payé
        3 564 €, soit le prix d&apos;un très bon site vitrine sur mesure qui
        vous appartient. Avec l&apos;abonnement, dans la plupart des formules,
        le site ne vous appartient pas : vous arrêtez de payer, le site
        disparaît. C&apos;est de la location, pas un investissement. Cela peut
        se défendre pour tester une activité pendant un an, rarement au-delà.
      </P>

      <H2 id="test">Le test en 6 questions</H2>
      <P>
        Répondez par oui ou par non. Comptez vos « oui », le verdict est
        en dessous.
      </P>
      <UL>
        <LI>
          Mon projet nécessite plus de trois métiers en parallèle pendant
          plusieurs mois (développement, publicité, contenu, photo, logistique).
        </LI>
        <LI>
          Une indisponibilité de 48 heures de mon prestataire mettrait mon
          activité en difficulté.
        </LI>
        <LI>Mon budget dépasse 15 000 €.</LI>
        <LI>
          Je réponds à un marché public ou mon organisation impose des
          certifications à ses fournisseurs.
        </LI>
        <LI>
          J&apos;ai besoin d&apos;une équipe marketing qui gère mes campagnes
          en continu, en plus du site.
        </LI>
        <LI>
          Je préfère un interlocuteur commercial dédié, même si je ne parle
          jamais au développeur.
        </LI>
      </UL>
      <Callout>
        <Strong>Résultat.</Strong> Trois « oui » ou plus : orientez-vous vers
        une agence, votre projet a besoin d&apos;une structure. Un ou deux
        « oui » : les deux options se valent, comparez des devis détaillés.
        Zéro « oui » : un freelance compétent vous donnera plus de résultat
        par euro investi, avec un circuit de décision beaucoup plus court.
      </Callout>

      <H2 id="verifier">Comment vérifier un prestataire, concrètement</H2>
      <P>
        Que vous penchiez agence ou freelance, la vérification est la même, et
        elle prend vingt minutes.
      </P>
      <UL>
        <LI>
          <Strong>Testez ses réalisations vous-même.</Strong> Ouvrez les sites
          livrés sur votre téléphone. Passez-les dans PageSpeed Insights
          (outil gratuit de Google) : en dessous de 70 en mobile, méfiance.
        </LI>
        <LI>
          <Strong>Cherchez ses clients sur Google.</Strong> Un prestataire qui
          vend du référencement doit avoir des clients qui ressortent sur
          leurs requêtes locales.
        </LI>
        <LI>
          <Strong>Exigez un devis détaillé</Strong> : ce qui est inclus, ce qui
          ne l&apos;est pas, les délais, le nombre d&apos;allers-retours sur la
          maquette.
        </LI>
        <LI>
          <Strong>Posez la question de la propriété</Strong> : domaine,
          hébergement, code. La réponse doit être « tout est à vous », sans
          hésitation.
        </LI>
        <LI>
          <Strong>Clarifiez l&apos;après.</Strong> Que se passe-t-il en cas de
          bug un mois après la livraison ? Que coûte une modification ?
        </LI>
      </UL>

      <H2 id="verdict">Mon verdict</H2>
      <P>
        Si votre projet est un site vitrine, un site de réservation ou une
        application de taille raisonnable, et que votre budget se situe sous
        les 10 000 €, un freelance sérieux est presque toujours le meilleur
        choix : mêmes compétences techniques, circuit de décision direct, et
        30 à 50 % d&apos;économie qui peuvent financer ce qui manque le plus
        souvent, du contenu de qualité et du référencement.
      </P>
      <P>
        Si votre projet mobilise une équipe entière en continu, si la
        disponibilité 24h/24 est critique ou si vous répondez à un marché
        public, prenez une agence, et choisissez-la avec la même grille de
        vérification.
      </P>
      <P>
        Et dans les deux cas : ne signez jamais sans avoir vu des réalisations
        en ligne, un devis détaillé et une réponse écrite sur la propriété du
        site. C&apos;est ce trio qui sépare les bons prestataires des
        mauvais, bien plus que le statut juridique.
      </P>
      <P>
        Si vous voulez comparer concrètement, mes réalisations sont{" "}
        <A href="/projets">en ligne et testables</A>, mes prix de départ sont
        publics sur <A href="/developpeur-web-liege">ma page services</A>, et
        le premier échange est gratuit et sans engagement via{" "}
        <A href="/contact">le formulaire de contact</A>.
      </P>

      <H2 id="sources">Sources</H2>
      <UL>
        <LI>
          <A href="https://www.sortlist.be/fr/blog/combien-coute-un-site-internet/">
            Sortlist, « Combien coûte un site internet ? »
          </A>{" "}
          : fourchettes de prix du marché belge, agences et indépendants.
        </LI>
        <LI>
          <A href="https://www.onemorepixel.be/fr/articles/tarifs-site-internet-belgique-2025/">
            One More Pixel, tarifs des sites internet en Belgique
          </A>{" "}
          : grilles tarifaires publiques d&apos;une agence wallonne.
        </LI>
        <LI>
          Mes propres devis et projets livrés (
          <A href="/projets/blueportel">BluePortel</A>,{" "}
          <A href="/projets/korli">Korli</A>), consultables en ligne.
        </LI>
      </UL>
    </>
  ),
};
