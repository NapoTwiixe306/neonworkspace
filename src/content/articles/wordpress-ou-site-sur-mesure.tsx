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

// Article comparatif technique grand public : « wordpress ou site sur mesure »,
// « alternative wordpress pme », « wordpress avis 2026 ». Données W3Techs.
export const wordpressOuSurMesure: Post = {
  slug: "wordpress-ou-site-sur-mesure",
  title:
    "WordPress ou site sur mesure : le comparatif honnête pour une PME en 2026",
  description:
    "WordPress fait tourner 4 sites sur 10 dans le monde, et pourtant ce n'est pas toujours le bon choix. Coûts réels, sécurité, performance, SEO : comparatif chiffré entre WordPress et un site sur mesure, avec un verdict clair par profil.",
  date: "2026-07-06",
  readingTime: "17 min",
  tags: ["WordPress", "Next.js", "Sur mesure", "Comparatif", "Technique"],
  faq: [
    {
      question: "WordPress est-il gratuit ?",
      answer:
        "Le logiciel est gratuit, le site ne l'est pas. Un site WordPress professionnel additionne un thème premium (50 à 90 €), des extensions payantes (100 à 400 € par an), un hébergement (60 à 300 € par an) et surtout une maintenance indispensable, car un WordPress non mis à jour devient une cible. Sur 3 ans, un WordPress « gratuit » coûte souvent plus cher qu'un site sur mesure équivalent.",
    },
    {
      question: "WordPress est-il mauvais pour la sécurité ?",
      answer:
        "Le cœur de WordPress est correctement sécurisé. Le problème vient de l'écosystème : 97 % des vulnérabilités connues proviennent des extensions et des thèmes, et la popularité de WordPress en fait la cible numéro un des attaques automatisées. Un WordPress bien maintenu est sûr ; un WordPress laissé sans mise à jour six mois ne l'est plus.",
    },
    {
      question: "Un site sur mesure est-il plus rapide que WordPress ?",
      answer:
        "À travail égal, oui. Un site sur mesure en Next.js sert des pages statiques pré-générées sans base de données à interroger à chaque visite, ce qui donne des temps de chargement quasi instantanés et de bons Core Web Vitals par défaut. Un WordPress peut être rapide, mais il faut l'optimiser activement (cache, images, extensions limitées) et le rester dans le temps.",
    },
    {
      question: "Quand WordPress est-il le bon choix ?",
      answer:
        "Quand la publication de contenu est le cœur du besoin et que l'équipe veut une autonomie totale : blog éditorial nourri chaque semaine, site avec de nombreux rédacteurs, budget de départ minimal. Dans ces cas, l'écosystème WordPress reste imbattable en rapidité de mise en route.",
    },
    {
      question: "Peut-on migrer de WordPress vers un site sur mesure ?",
      answer:
        "Oui, et c'est une demande de refonte fréquente. Le contenu (pages, articles, images) s'exporte et se migre, les URL se redirigent proprement pour préserver le référencement. Le coût dépend du volume de contenu, mais la migration préserve l'acquis SEO si elle est faite dans les règles.",
    },
  ],
  Body: () => (
    <>
      <TLDR>
        <p>
          <Strong>WordPress domine le web</Strong> : 41,9 % de tous les sites
          du monde en 2026 selon W3Techs. C&apos;est un excellent outil de
          publication, et le bon choix si votre besoin central est de publier
          beaucoup de contenu en autonomie avec un budget de départ minimal.
        </p>
        <p>
          <Strong>Le sur mesure gagne</Strong> dès que la performance, la
          sécurité et la différenciation comptent : pas d&apos;extensions
          tierces (source de 97 % des failles WordPress connues), des pages
          statiques quasi instantanées, et un site qui ne ressemble à aucun
          autre. Le coût initial est plus élevé, le coût sur 3 ans souvent
          comparable, voire inférieur.
        </p>
      </TLDR>

      <Toc
        items={[
          { id: "chiffres", label: "WordPress en chiffres réels" },
          { id: "sur-mesure", label: "Ce que « sur mesure » veut vraiment dire" },
          { id: "couts", label: "Les coûts réels sur 3 ans" },
          { id: "performance", label: "Performance et Core Web Vitals" },
          { id: "securite", label: "Sécurité : le vrai dossier" },
          { id: "seo", label: "SEO : match plus serré qu'on ne croit" },
          { id: "autonomie", label: "Autonomie de publication" },
          { id: "test", label: "Le test : quel profil êtes-vous ?" },
          { id: "verdict", label: "Mon verdict, cas par cas" },
          { id: "sources", label: "Sources" },
        ]}
      />

      <P>
        « On m&apos;a dit de faire ça sur WordPress. » Cette phrase ouvre une
        bonne partie des premières discussions que j&apos;ai avec des
        indépendants et des PME de la région liégeoise. Elle est
        compréhensible : WordPress est partout, tout le monde connaît
        quelqu&apos;un qui l&apos;utilise, et « gratuit » est un argument qui
        porte. Mais entre la réputation et la réalité de 2026, il y a un
        écart, dans les deux sens.
      </P>
      <P>
        Carte sur table : je développe des sites sur mesure, principalement
        avec Next.js (j&apos;explique{" "}
        <A href="/blog/pourquoi-nextjs-site-entreprise">
          pourquoi dans cet article
        </A>
        ). J&apos;ai donc un camp. Raison de plus pour appuyer ce comparatif
        sur des chiffres vérifiables plutôt que sur mon avis, et pour vous
        dire clairement dans quels cas WordPress reste le meilleur choix,
        parce que ces cas existent.
      </P>

      <H2 id="chiffres">WordPress en chiffres réels</H2>
      <P>
        Commençons par rendre à WordPress ce qui lui appartient. Les données
        de W3Techs, l&apos;observatoire de référence des technologies web,
        sont sans appel :
      </P>
      <UL>
        <LI>
          <Strong>41,9 % de tous les sites web du monde</Strong> tournent sous
          WordPress en 2026, soit plus de 4 sites sur 10.
        </LI>
        <LI>
          Parmi les sites utilisant un CMS identifiable, WordPress détient{" "}
          <Strong>60,4 % de part de marché</Strong>, loin devant Shopify
          (environ 5 % du web), Wix (4 %) et Squarespace (2,4 %).
        </LI>
        <LI>
          Son écosystème compte plus de <Strong>63 000 extensions
          gratuites</Strong> et environ 14 000 thèmes gratuits.
        </LI>
      </UL>
      <P>
        Un outil qui fait tourner presque la moitié du web n&apos;est pas un
        mauvais outil. La vraie question n&apos;est pas « WordPress est-il
        bon ? » mais « est-il bon <Strong>pour votre besoin précis</Strong>,
        comparé à l&apos;alternative ? ». Et pour répondre, il faut comprendre
        ce que cache l&apos;alternative.
      </P>

      <H2 id="sur-mesure">Ce que « sur mesure » veut vraiment dire</H2>
      <P>
        « Site sur mesure » ne veut pas dire « plus joli ». Ça veut dire que
        le site est <Strong>construit en code</Strong>, spécifiquement pour
        votre besoin, avec un framework moderne (dans mon cas Next.js, avec
        React et TypeScript), au lieu d&apos;assembler des blocs génériques
        dans un CMS.
      </P>
      <P>Concrètement, trois différences structurelles :</P>
      <UL>
        <LI>
          <Strong>Pas de couche générique.</Strong> WordPress embarque tout ce
          dont n&apos;importe quel site pourrait avoir besoin. Un site sur
          mesure n&apos;embarque que ce dont votre site a besoin. Moins de
          code, c&apos;est moins de lenteur et moins de surface
          d&apos;attaque.
        </LI>
        <LI>
          <Strong>Pas de dépendance aux extensions tierces.</Strong> Chaque
          fonctionnalité est développée ou intégrée consciemment, pas ajoutée
          via une extension écrite par un inconnu et abandonnée deux ans plus
          tard.
        </LI>
        <LI>
          <Strong>Des pages statiques par défaut.</Strong> Un site vitrine sur
          mesure moderne est pré-généré : le serveur envoie du HTML tout
          prêt, sans interroger une base de données à chaque visite.
        </LI>
      </UL>

      <H2 id="couts">Les coûts réels sur 3 ans</H2>
      <P>
        Le « WordPress gratuit contre le sur mesure cher » est le mythe le
        plus tenace du marché. Posons les vrais chiffres pour un site vitrine
        professionnel, sur trois ans :
      </P>
      <Table
        head={["Poste", "WordPress « pro »", "Sur mesure (Next.js)"]}
        rows={[
          [
            "Création initiale",
            "800 € à 3 000 € (thème adapté) ",
            "1 200 € à 5 000 €",
          ],
          [
            "Thème premium + extensions payantes",
            "150 € à 500 € / an",
            "0 €",
          ],
          [
            "Hébergement adapté",
            "60 € à 300 € / an",
            "0 € à 120 € / an (statique ou petit serveur)",
          ],
          [
            "Maintenance / mises à jour",
            "300 € à 900 € / an (indispensable)",
            "100 € à 400 € / an (léger)",
          ],
          [
            <Strong key="t">Total indicatif sur 3 ans</Strong>,
            <Strong key="t1">2 330 € à 8 100 €</Strong>,
            <Strong key="t2">1 500 € à 6 560 €</Strong>,
          ],
        ]}
      />
      <P>
        Les fourchettes sont larges parce que les projets le sont, mais la
        structure du coût est claire : WordPress est moins cher à
        l&apos;entrée et plus cher à l&apos;entretien ; le sur mesure inverse
        la courbe. La maintenance WordPress n&apos;est pas une option de
        confort : c&apos;est elle qui maintient le site sûr (on y revient
        juste en dessous). Pour situer ces montants dans le marché liégeois,
        voyez aussi <A href="/blog/prix-site-web-liege">le guide complet des
        prix</A>.
      </P>

      <H2 id="performance">Performance et Core Web Vitals</H2>
      <P>
        Google mesure l&apos;expérience réelle de vos visiteurs via les Core
        Web Vitals (vitesse d&apos;affichage, réactivité, stabilité visuelle),
        et en tient compte dans son classement. Sur ce terrain, la différence
        d&apos;architecture parle :
      </P>
      <UL>
        <LI>
          Un <Strong>WordPress typique</Strong> exécute du PHP et interroge
          une base de données à chaque visite, charge le CSS et le JavaScript
          de son thème et de chaque extension active. Il peut être rendu
          rapide, mais c&apos;est un travail d&apos;optimisation actif
          (cache, compression d&apos;images, tri des extensions) à refaire à
          mesure que le site vit.
        </LI>
        <LI>
          Un <Strong>site sur mesure en Next.js</Strong> sert des pages
          statiques pré-générées, optimise les images automatiquement et ne
          charge que le code nécessaire à chaque page. La performance est le
          comportement par défaut, pas une couche ajoutée.
        </LI>
      </UL>
      <P>
        Ce n&apos;est pas théorique : ce site que vous lisez est un Next.js
        statique, et vous pouvez tester sa vitesse (et celle de{" "}
        <A href="/projets">mes autres réalisations</A>) dans PageSpeed
        Insights, l&apos;outil gratuit de Google. Faites le même test sur
        trois sites WordPress de votre entourage : la différence se voit à
        l&apos;œil nu sur mobile.
      </P>

      <H2 id="securite">Sécurité : le vrai dossier</H2>
      <P>
        Dire « WordPress est troué » est injuste. Dire « WordPress est sûr »
        est naïf. Voici le dossier factuel :
      </P>
      <UL>
        <LI>
          <Strong>97 % des vulnérabilités</Strong> recensées dans
          l&apos;écosystème WordPress proviennent des extensions et des
          thèmes, pas du cœur du logiciel (données des rapports de sécurité
          WPScan).
        </LI>
        <LI>
          Sa popularité en fait la <Strong>cible numéro un des attaques
          automatisées</Strong> : des dizaines de milliers de tentatives par
          minute balaient le web à la recherche de WordPress mal mis à jour
          (mesures Wordfence).
        </LI>
        <LI>
          La conséquence logique : un WordPress professionnel exige une{" "}
          <Strong>maintenance de sécurité permanente</Strong> (mises à jour du
          cœur, du thème et de chaque extension, sauvegardes testées).
        </LI>
      </UL>
      <P>
        Un site sur mesure n&apos;est pas magiquement invulnérable, mais son
        exposition est structurellement plus faible : pas d&apos;extensions
        tierces, pas d&apos;interface d&apos;administration standard connue de
        tous les robots d&apos;attaque, et pour un site vitrine statique, pas
        de base de données à compromettre. Moins de pièces mobiles, moins de
        choses à casser.
      </P>
      <Callout>
        <Strong>À retenir :</Strong> si vous choisissez WordPress, budgétez la
        maintenance comme une assurance obligatoire, pas comme une option. Un
        WordPress à l&apos;abandon depuis six mois est un site compromis en
        sursis. Beaucoup de « sites piratés » d&apos;indépendants sont
        simplement des WordPress jamais mis à jour.
      </Callout>

      <H2 id="seo">SEO : match plus serré qu&apos;on ne le croit</H2>
      <P>
        Soyons honnêtes : WordPress, bien configuré avec une extension SEO
        sérieuse, permet un bon référencement. Des millions de sites bien
        classés le prouvent. Les différences se jouent sur deux points :
      </P>
      <UL>
        <LI>
          <Strong>La vitesse</Strong>, qui est un facteur de classement et
          surtout un facteur de conversion : chaque seconde de chargement en
          plus fait fuir des visiteurs. Avantage structurel au statique.
        </LI>
        <LI>
          <Strong>La finesse technique</Strong> : sur un site sur mesure, les
          données structurées, le sitemap, les balises et le maillage sont
          écrits exactement comme il faut pour votre cas, sans dépendre des
          choix d&apos;une extension généraliste. C&apos;est le genre de
          détail qui compte sur des requêtes locales disputées, comme je le
          montre dans{" "}
          <A href="/blog/referencement-local-liege">
            le guide du référencement local à Liège
          </A>
          .
        </LI>
      </UL>

      <H2 id="autonomie">Autonomie de publication : le vrai point fort de WordPress</H2>
      <P>
        Là où WordPress reste roi, c&apos;est l&apos;autonomie éditoriale.
        Son interface d&apos;administration permet à n&apos;importe qui de
        publier un article, changer une photo ou créer une page sans toucher
        au code. Si votre site vit par son contenu (un article par semaine,
        plusieurs rédacteurs, des mises à jour quotidiennes), cette autonomie
        vaut de l&apos;or.
      </P>
      <P>
        Le sur mesure a des réponses (interfaces d&apos;administration
        dédiées, CMS headless branchés sur un site statique), mais elles
        ajoutent du coût. Pour un besoin purement éditorial à petit budget,
        WordPress garde l&apos;avantage, et un développeur honnête doit vous
        le dire.
      </P>

      <H2 id="test">Le test : quel profil êtes-vous ?</H2>
      <P>Comptez vos « oui » dans chaque colonne.</P>
      <H3>Profil A</H3>
      <UL>
        <LI>Nous publierons du contenu plusieurs fois par semaine.</LI>
        <LI>Plusieurs personnes non techniques doivent pouvoir publier.</LI>
        <LI>Le budget de départ est le critère numéro un.</LI>
        <LI>Le site est un blog ou un magazine avant tout.</LI>
      </UL>
      <H3>Profil B</H3>
      <UL>
        <LI>
          Le site doit se démarquer visuellement de la concurrence.
        </LI>
        <LI>
          La vitesse et le référencement sont des enjeux commerciaux directs.
        </LI>
        <LI>
          Je ne veux pas gérer (ni payer) des mises à jour de sécurité
          permanentes.
        </LI>
        <LI>
          Le site doit évoluer vers des fonctionnalités spécifiques
          (réservation, espace client, outil métier).
        </LI>
      </UL>
      <Callout>
        <Strong>Résultat.</Strong> Majorité de « oui » en A : prenez
        WordPress, avec un professionnel qui le configure proprement et un
        contrat de maintenance sérieux. Majorité en B : le sur mesure vous
        rendra plus de valeur, dès la première année. Égalité : faites
        chiffrer les deux sur 3 ans, pas sur le seul devis initial ; le
        tableau des coûts plus haut vous donne la grille.
      </Callout>

      <H2 id="verdict">Mon verdict, cas par cas</H2>
      <P>
        <Strong>Blog éditorial, média local, site associatif nourri par des
        bénévoles :</Strong> WordPress, sans hésiter. L&apos;autonomie de
        publication écrase les autres critères.
      </P>
      <P>
        <Strong>Site vitrine d&apos;indépendant ou de PME dont le but est
        d&apos;être trouvé et de convaincre :</Strong> sur mesure. Le site
        change peu, la performance et l&apos;image comptent énormément, et la
        maintenance légère fait gagner sur 3 ans.
      </P>
      <P>
        <Strong>Site de réservation, espace client, outil métier :</Strong>{" "}
        sur mesure, presque par définition : c&apos;est précisément ce que
        « sur mesure » veut dire. C&apos;est le cas de{" "}
        <A href="/projets/blueportel">BluePortel</A>, un site de réservation
        directe que j&apos;ai construit en Next.js, ou de mon SaaS{" "}
        <A href="/projets/korli">Korli</A>.
      </P>
      <P>
        <Strong>E-commerce :</Strong> le match se joue plutôt entre Shopify,
        WooCommerce (WordPress) et le sur mesure selon le volume et les
        besoins d&apos;intégration. Sujet pour un futur article.
      </P>
      <P>
        Vous hésitez pour votre cas précis ? Décrivez-le moi via{" "}
        <A href="/contact">le formulaire de contact</A> : je vous dirai
        honnêtement quelle option je choisirais à votre place, y compris
        quand la réponse est WordPress.
      </P>

      <H2 id="sources">Sources</H2>
      <UL>
        <LI>
          <A href="https://w3techs.com/technologies/details/cm-wordpress">
            W3Techs, Usage statistics of WordPress
          </A>{" "}
          : parts de marché mesurées en continu (41,9 % du web, 60,4 % des
          CMS, juin 2026).
        </LI>
        <LI>
          <A href="https://w3techs.com/technologies/overview/content_management">
            W3Techs, Content Management Systems overview
          </A>{" "}
          : comparaison Shopify, Wix, Squarespace, Joomla, Drupal.
        </LI>
        <LI>
          <A href="https://wpscan.com/">WPScan</A> : base de données des
          vulnérabilités WordPress (répartition cœur / extensions / thèmes).
        </LI>
        <LI>
          <A href="https://www.wordfence.com/">Wordfence</A> : mesures des
          attaques automatisées ciblant WordPress.
        </LI>
      </UL>
    </>
  ),
};
