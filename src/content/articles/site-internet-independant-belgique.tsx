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

// Intention guide + locale : « site internet indépendant belgique »,
// « créer site web indépendant », « obligations site web belgique ».
export const siteInternetIndependantBelgique: Post = {
  slug: "site-internet-independant-belgique",
  title:
    "Site internet pour indépendant en Belgique : le guide complet 2026",
  description:
    "Tout ce qu'un indépendant belge doit savoir avant de créer son site : mentions légales obligatoires (numéro BCE), RGPD, choix du domaine .be, budget réel après déduction fiscale, contenu qui convertit et erreurs à éviter.",
  date: "2026-07-06",
  readingTime: "15 min",
  tags: ["Indépendant", "Belgique", "Site web", "Guide", "Liège"],
  faq: [
    {
      question: "Quelles mentions sont obligatoires sur le site d'un indépendant belge ?",
      answer:
        "Le Code de droit économique impose d'afficher clairement : votre nom ou dénomination, votre numéro d'entreprise (BCE), l'adresse de votre siège, un moyen de contact rapide (email) et, le cas échéant, votre numéro de TVA et votre autorité de contrôle pour les professions réglementées. Une politique de confidentialité conforme au RGPD s'ajoute dès que le site collecte la moindre donnée (un simple formulaire de contact suffit).",
    },
    {
      question: "Combien coûte un site d'indépendant en Belgique ?",
      answer:
        "Entre 900 € et 2 000 € pour un one-page professionnel, 1 500 € à 5 000 € pour un site vitrine complet. C'est une charge professionnelle déductible : selon votre taux d'imposition, le coût réel descend souvent de 40 % ou plus. Les frais récurrents (domaine, hébergement, maintenance) tournent autour de 20 € à 100 € par mois et sont également déductibles.",
    },
    {
      question: "Faut-il un domaine .be ou .com ?",
      answer:
        "Pour une activité belge, le .be est le meilleur choix par défaut : il signale votre ancrage local à vos visiteurs comme à Google, et il est généralement disponible et bon marché (une dizaine d'euros par an). Prenez aussi le .com si votre marque le permet, ne serait-ce que pour le protéger et le rediriger vers le .be.",
    },
    {
      question: "Un indépendant a-t-il vraiment besoin d'un site avec les réseaux sociaux ?",
      answer:
        "Les réseaux sociaux sont un canal loué : l'algorithme décide qui voit vos publications, et le compte peut disparaître du jour au lendemain. Le site est le seul actif en ligne qui vous appartient, il capte les recherches Google locales (là où l'intention d'achat est la plus forte) et il rassure quiconque vous vérifie avant de vous contacter. Les deux se complètent, mais le socle, c'est le site.",
    },
    {
      question: "Google Business Profile suffit-il sans site web ?",
      answer:
        "Pour être trouvé sur Maps, la fiche est indispensable et gratuite. Mais sans site derrière, vous perdez les visiteurs qui veulent en savoir plus avant d'appeler, vous n'existez pas sur les recherches d'information, et les moteurs IA n'ont rien à citer sur vous. Fiche plus site est la combinaison qui fonctionne.",
    },
  ],
  Body: () => (
    <>
      <TLDR>
        <p>
          Pour un indépendant belge, un site professionnel coûte{" "}
          <Strong>900 € à 5 000 €</Strong> selon l&apos;ampleur, montant{" "}
          <Strong>fiscalement déductible</Strong> (coût réel souvent réduit de
          40 % ou plus). Trois obligations légales à connaître : afficher
          votre <Strong>numéro BCE</Strong> et vos coordonnées, respecter le{" "}
          <Strong>RGPD</Strong> dès le premier formulaire, et des mentions
          spécifiques pour les professions réglementées.
        </p>
        <p>
          Côté efficacité : un domaine .be, une page par service, des preuves
          (réalisations, avis) et une fiche Google Business active. Le site
          est le seul actif en ligne qui vous appartient vraiment.
        </p>
      </TLDR>

      <Toc
        items={[
          { id: "pourquoi", label: "Pourquoi un site quand on est indépendant" },
          { id: "legal", label: "Les obligations légales belges" },
          { id: "domaine", label: "Le nom de domaine : .be, .com et les pièges" },
          { id: "contenu", label: "Le contenu qui convertit (structure type)" },
          { id: "budget", label: "Le budget réel, fiscalité comprise" },
          { id: "visibilite", label: "Être trouvé : la combinaison gagnante" },
          { id: "erreurs", label: "Les 6 erreurs classiques des indépendants" },
          { id: "conclusion", label: "En résumé" },
          { id: "sources", label: "Sources" },
        ]}
      />

      <P>
        Plus d&apos;un million de personnes exercent une activité
        indépendante en Belgique, et une grande partie n&apos;a toujours pas
        de site, ou traîne un site qui dessert plus qu&apos;il ne sert. Ce
        guide rassemble ce qu&apos;un indépendant belge doit réellement
        savoir : les obligations légales propres à la Belgique, le budget
        honnête, et ce qui fait qu&apos;un site amène des clients au lieu de
        décorer.
      </P>

      <H2 id="pourquoi">Pourquoi un site quand on est indépendant</H2>
      <P>
        Trois raisons concrètes, par ordre d&apos;importance :
      </P>
      <UL>
        <LI>
          <Strong>La vérification.</Strong> Avant de vous appeler, vos
          prospects vous cherchent sur Google. Pas de site, ou un site daté,
          et une partie d&apos;entre eux passe au concurrent suivant sans que
          vous le sachiez jamais.
        </LI>
        <LI>
          <Strong>Les recherches locales.</Strong> « Votre métier + votre
          ville » est tapé chaque jour par des gens prêts à acheter.
          C&apos;est l&apos;intention la plus chaude de tout le marketing, et
          seul un site (avec une fiche Google Business) peut la capter.
        </LI>
        <LI>
          <Strong>La propriété.</Strong> Instagram, Facebook ou TikTok sont
          des canaux loués : l&apos;algorithme décide de votre visibilité, et
          un compte peut être suspendu sans recours. Le site est le seul
          actif en ligne qui vous appartient.
        </LI>
      </UL>

      <H2 id="legal">Les obligations légales belges</H2>
      <P>
        C&apos;est le point le plus ignoré, et il est vérifiable en deux
        clics par n&apos;importe qui, y compris par l&apos;inspection
        économique. Le Code de droit économique impose à tout site
        professionnel belge d&apos;afficher clairement :
      </P>
      <UL>
        <LI>
          Votre <Strong>nom</Strong> (ou dénomination sociale) et votre{" "}
          <Strong>statut</Strong>.
        </LI>
        <LI>
          Votre <Strong>numéro d&apos;entreprise</Strong> (BCE), le fameux
          numéro à dix chiffres, qui sert aussi de numéro de TVA le cas
          échéant.
        </LI>
        <LI>
          L&apos;<Strong>adresse de votre siège</Strong> et un moyen de
          contact rapide et direct (au minimum une adresse email).
        </LI>
        <LI>
          Pour les <Strong>professions réglementées</Strong> (santé, droit,
          construction, immobilier...) : le titre professionnel, l&apos;ordre
          ou l&apos;autorité de contrôle dont vous dépendez.
        </LI>
      </UL>
      <P>
        S&apos;y ajoute le <Strong>RGPD</Strong> dès que votre site collecte
        une donnée personnelle, ce qui inclut un simple formulaire de
        contact : une politique de confidentialité lisible (quelles données,
        pour quoi faire, combien de temps), et une bannière cookies uniquement
        si vous déposez des cookies non essentiels (un site sobre avec un
        analytics respectueux comme Umami peut s&apos;en passer, c&apos;est
        d&apos;ailleurs le choix que j&apos;ai fait sur ce site).
      </P>
      <Callout>
        <Strong>À retenir :</Strong> une page « Mentions légales » complète et
        une page « Vie privée » couvrent l&apos;essentiel pour un indépendant.
        Un prestataire sérieux les intègre d&apos;office ; si votre devis
        n&apos;en parle pas, posez la question. En cas de doute sur votre
        situation précise, le SPF Économie publie des fiches claires et
        gratuites.
      </Callout>

      <H2 id="domaine">Le nom de domaine : .be, .com et les pièges</H2>
      <P>
        Pour une activité belge, le <Strong>.be</Strong> est le choix par
        défaut : il coûte une dizaine d&apos;euros par an, il signale votre
        ancrage local aux visiteurs comme aux moteurs, et il inspire confiance
        à une clientèle belge. Les règles qui évitent les regrets :
      </P>
      <UL>
        <LI>
          <Strong>Enregistrez-le à votre nom</Strong>, jamais au nom de votre
          prestataire. C&apos;est votre actif, vous devez pouvoir changer de
          prestataire sans le perdre.
        </LI>
        <LI>
          <Strong>Court et dictable</Strong> : vous le donnerez au téléphone.
          Évitez les tirets multiples et les orthographes ambiguës.
        </LI>
        <LI>
          <Strong>Protégez les variantes</Strong> si votre marque compte :
          prendre aussi le .com et rediriger vers le .be coûte quelques euros
          et évite qu&apos;un concurrent ou un squatteur s&apos;en empare.
        </LI>
      </UL>

      <H2 id="contenu">Le contenu qui convertit : la structure type</H2>
      <P>
        Pour un indépendant, la structure qui fait ses preuves tient en cinq
        pages, chacune avec un travail précis :
      </P>
      <Table
        head={["Page", "Son travail", "L'élément décisif"]}
        rows={[
          [
            <Strong key="a">Accueil</Strong>,
            "Dire en 5 secondes qui vous êtes, pour qui, où",
            "Une phrase claire + un appel à l'action visible",
          ],
          [
            <Strong key="s">Services</Strong>,
            "Détailler chaque prestation (une section ou page par service)",
            "Des prix ou fourchettes affichés : ils filtrent et rassurent",
          ],
          [
            <Strong key="r">Réalisations / avis</Strong>,
            "Prouver, pas affirmer",
            "Photos réelles, résultats concrets, avis récents",
          ],
          [
            <Strong key="p">À propos</Strong>,
            "Créer la confiance : on achète une personne",
            "Une vraie photo de vous, votre parcours en quelques lignes",
          ],
          [
            <Strong key="c">Contact</Strong>,
            "Rendre la prise de contact sans friction",
            "Formulaire court + téléphone + zone d'intervention",
          ],
        ]}
      />
      <P>
        Deux détails qui changent les résultats : affichez votre{" "}
        <Strong>zone d&apos;intervention</Strong> (Google et vos visiteurs
        doivent savoir où vous opérez) et vos <Strong>prix de départ</Strong>{" "}
        quand votre métier le permet. Un prix affiché fait fuir les curieux
        sans budget et rassure les vrais prospects, j&apos;en parle
        d&apos;expérience : c&apos;est ce que je fais sur{" "}
        <A href="/developpeur-web-liege">ma propre page services</A>.
      </P>

      <H2 id="budget">Le budget réel, fiscalité comprise</H2>
      <P>
        Les fourchettes du marché sont détaillées dans{" "}
        <A href="/blog/prix-site-web-liege">le guide des prix</A> ; pour un
        indépendant, retenez : one-page 900 € à 2 000 €, site vitrine 1 500 €
        à 5 000 €, plus 20 € à 100 € par mois de frais récurrents. Le point
        que trop d&apos;indépendants oublient : <Strong>tout est
        déductible</Strong> comme charge professionnelle, création comme
        frais récurrents. Au taux marginal plein, un site à 1 500 € revient à
        environ 850 € à 900 € d&apos;effort réel. Le mécanisme complet, aides
        wallonnes comprises, est dans{" "}
        <A href="/blog/subsides-site-web-wallonie">
          le guide des subsides et aides
        </A>
        .
      </P>

      <H2 id="visibilite">Être trouvé : la combinaison gagnante</H2>
      <P>
        Un site sans visibilité est une plaquette dans un tiroir. La
        combinaison qui fonctionne pour un indépendant local :
      </P>
      <UL>
        <LI>
          <Strong>Fiche Google Business Profile</Strong> complète et active :
          gratuite, et c&apos;est elle qui vous met sur Maps.
        </LI>
        <LI>
          <Strong>Un site rapide et géolocalisé</Strong> : vos pages mentionnent
          naturellement votre métier et votre région, avec des données
          structurées propres.
        </LI>
        <LI>
          <Strong>Des avis en continu</Strong> : demandez-en un après chaque
          prestation réussie.
        </LI>
      </UL>
      <P>
        Le plan d&apos;action complet sur 30 jours est dans{" "}
        <A href="/blog/referencement-local-liege">
          le guide du référencement local à Liège
        </A>
        . Comptez 2 à 4 mois pour voir les positions s&apos;installer :
        lancez le site avant d&apos;en avoir un besoin urgent.
      </P>

      <H2 id="erreurs">Les 6 erreurs classiques des indépendants</H2>
      <UL>
        <LI>
          <Strong>1. Le site « carte de visite » vide</Strong> : trois lignes
          et un logo. Sans contenu utile, ni Google ni vos prospects
          n&apos;ont de raison de s&apos;y attarder.
        </LI>
        <LI>
          <Strong>2. Le domaine au nom du prestataire</Strong> : le jour du
          désaccord, vous perdez votre adresse et votre référencement.
        </LI>
        <LI>
          <Strong>3. Aucune mention légale</Strong> : vérifiable en deux
          clics, et c&apos;est une amende potentielle en cas de contrôle.
        </LI>
        <LI>
          <Strong>4. Les photos de banque d&apos;images partout</Strong> : vos
          clients achètent une personne réelle. Une vraie photo de vous vaut
          dix images de stock souriantes.
        </LI>
        <LI>
          <Strong>5. Tout miser sur Instagram</Strong> : excellent canal
          d&apos;appoint, dangereux comme unique présence (algorithme,
          suspension, zéro capture des recherches Google).
        </LI>
        <LI>
          <Strong>6. Mettre en ligne puis ne plus jamais y toucher</Strong> :
          un site avec des horaires faux ou des services disparus détruit
          la confiance qu&apos;il devait créer.
        </LI>
      </UL>

      <H2 id="conclusion">En résumé</H2>
      <P>
        Un site d&apos;indépendant réussi en Belgique, c&apos;est : les
        mentions légales en règle (numéro BCE, RGPD), un domaine .be à votre
        nom, cinq pages qui prouvent au lieu d&apos;affirmer, des prix
        affichés quand c&apos;est possible, et la combinaison site plus fiche
        Google plus avis pour être trouvé. Budget réaliste : 1 500 € à
        3 000 € pour un site vitrine sérieux, réduit de 40 % ou plus par la
        déductibilité.
      </P>
      <P>
        Vous êtes indépendant à Liège ou en province et vous voulez un avis
        sur votre projet (ou votre site actuel) ? Écrivez-moi via{" "}
        <A href="/contact">le formulaire de contact</A> : premier échange
        gratuit, réponse honnête, y compris si ma réponse est « votre site
        actuel tient la route, gardez votre argent ».
      </P>

      <H2 id="sources">Sources</H2>
      <UL>
        <LI>
          <A href="https://economie.fgov.be/fr">SPF Économie</A> : obligations
          d&apos;information des sites professionnels (Code de droit
          économique) et guides e-commerce.
        </LI>
        <LI>
          <A href="https://www.autoriteprotectiondonnees.be/">
            Autorité de protection des données
          </A>{" "}
          : RGPD appliqué aux indépendants et PME belges.
        </LI>
        <LI>
          <A href="https://www.dnsbelgium.be/fr">DNS Belgium</A> : le registre
          officiel des noms de domaine .be.
        </LI>
        <LI>
          <A href="https://www.1890.be/">1890.be</A> : le point de contact des
          entrepreneurs wallons.
        </LI>
      </UL>
    </>
  ),
};
