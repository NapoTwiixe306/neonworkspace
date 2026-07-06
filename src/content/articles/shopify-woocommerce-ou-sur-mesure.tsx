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

// Intention comparative e-commerce : « shopify ou woocommerce »,
// « créer boutique en ligne belgique », « e-commerce pme ».
export const shopifyWooCommerceOuSurMesure: Post = {
  slug: "shopify-woocommerce-ou-sur-mesure",
  title:
    "Shopify, WooCommerce ou sur mesure : quel e-commerce pour une PME belge ?",
  description:
    "Comparatif 2026 des trois voies de l'e-commerce pour une PME belge : Shopify (dès 33 € par mois plus frais de transaction), WooCommerce (gratuit mais coûteux à entretenir) et le sur mesure. Coûts réels sur 3 ans et verdict par profil.",
  date: "2026-07-06",
  readingTime: "16 min",
  tags: ["E-commerce", "Shopify", "WooCommerce", "Comparatif", "Belgique"],
  faq: [
    {
      question: "Combien coûte Shopify par mois en 2026 ?",
      answer:
        "Le plan Basic démarre autour de 33 € par mois (moins cher en facturation annuelle), auxquels s'ajoutent les frais de transaction : environ 2,1 % plus 0,30 € par paiement carte sur le plan Basic via Shopify Payments, davantage si vous utilisez un autre prestataire de paiement. Une boutique professionnelle réaliste, applications comprises, se situe plutôt entre 100 € et 600 € par mois.",
    },
    {
      question: "WooCommerce est-il vraiment gratuit ?",
      answer:
        "L'extension est gratuite, la boutique ne l'est pas. Il faut ajouter l'hébergement, les extensions premium (paiement, livraison, facturation belge), la maintenance de sécurité indispensable à tout WordPress et les heures de développeur. Une boutique WooCommerce qui tourne bien coûte en pratique 100 € à 500 € par mois tout compris.",
    },
    {
      question: "Quel chiffre d'affaires faut-il pour rentabiliser une boutique en ligne ?",
      answer:
        "Avec des coûts de plateforme de 150 € par mois et une marge brute de 30 %, il faut environ 500 € de ventes mensuelles juste pour payer l'outil, hors publicité et logistique. C'est pourquoi je conseille de valider la demande (précommandes, ventes via les réseaux ou un simple formulaire) avant d'investir dans une vraie boutique.",
    },
    {
      question: "Peut-on vendre en ligne sans boutique e-commerce complète ?",
      answer:
        "Oui, et c'est souvent le bon premier pas : un site vitrine avec un module de paiement simple (lien de paiement, formulaire de commande, réservation avec acompte) couvre les catalogues restreints pour une fraction du coût. C'est l'approche que j'ai utilisée pour BluePortel, qui prend des réservations en direct sans la lourdeur d'une plateforme e-commerce.",
    },
    {
      question: "Quelles obligations légales pour un e-commerce en Belgique ?",
      answer:
        "Les principales : mentions légales complètes (numéro d'entreprise BCE, siège, contact), conditions générales de vente, droit de rétractation de 14 jours pour les consommateurs, affichage clair des prix TVA comprise et politique de confidentialité conforme au RGPD. Un comptable et les guides du SPF Économie vous cadrent le détail.",
    },
  ],
  Body: () => (
    <>
      <TLDR>
        <p>
          Trois voies pour vendre en ligne en 2026 :{" "}
          <Strong>Shopify</Strong> (dès 33 € par mois plus environ 2,1 % et
          0,30 € par transaction, le plus rapide à lancer),{" "}
          <Strong>WooCommerce</Strong> (logiciel gratuit mais 100 € à 500 €
          par mois en coûts réels, le plus flexible à budget maîtrisé) et le{" "}
          <Strong>sur mesure</Strong> (l&apos;investissement le plus élevé,
          pour des besoins que les plateformes ne couvrent pas).
        </p>
        <p>
          Mon conseil le plus utile n&apos;est pas un choix de plateforme :
          validez la demande avant d&apos;investir, et si votre catalogue est
          restreint, un site avec paiement simple bat souvent une boutique
          complète.
        </p>
      </TLDR>

      <Toc
        items={[
          { id: "avant", label: "La question à se poser avant la plateforme" },
          { id: "shopify", label: "Shopify : la vitesse contre la rente" },
          { id: "woocommerce", label: "WooCommerce : la liberté qui s'entretient" },
          { id: "sur-mesure", label: "Le sur mesure : pour quels cas réels" },
          { id: "couts", label: "Les coûts réels sur 3 ans" },
          { id: "belgique", label: "Les spécificités belges à ne pas rater" },
          { id: "test", label: "Le test : quelle voie pour vous ?" },
          { id: "verdict", label: "Mon verdict" },
          { id: "sources", label: "Sources" },
        ]}
      />

      <P>
        L&apos;e-commerce est le projet web où les écarts de coûts sont les
        plus violents : entre la boutique Shopify lancée à 33 € par mois et le
        projet sur mesure à cinq chiffres, on parle pourtant du même objectif,
        vendre en ligne. Cet article compare les trois voies avec les prix
        réels de 2026, du point de vue d&apos;une PME ou d&apos;un indépendant
        belge. Et il commence par la question que trop peu de prestataires
        posent.
      </P>

      <H2 id="avant">La question à se poser avant la plateforme</H2>
      <P>
        <Strong>Avez-vous déjà des acheteurs ?</Strong> Une boutique en ligne
        n&apos;invente pas la demande, elle la sert. Si personne
        n&apos;achète encore vos produits, commencez par valider : vendez via
        les réseaux sociaux, un marché, des précommandes par formulaire. Une
        boutique complète construite avant la demande est la première cause
        d&apos;e-commerce abandonné au bout d&apos;un an, tous outils
        confondus.
      </P>
      <P>
        Deuxième question : <Strong>combien de produits, vraiment ?</Strong>{" "}
        Pour 3 à 10 références stables (des paniers cadeaux, des séjours, des
        formations), une page de vente avec un paiement simple (lien Stripe,
        formulaire de commande, réservation avec acompte) coûte une fraction
        d&apos;une boutique et convertit souvent mieux. C&apos;est
        l&apos;approche de{" "}
        <A href="/projets/blueportel">BluePortel</A>, qui vend des séjours en
        réservation directe sans plateforme e-commerce. La suite de cet
        article suppose que vous avez besoin d&apos;une vraie boutique :
        catalogue, panier, gestion des commandes.
      </P>

      <H2 id="shopify">Shopify : la vitesse contre la rente</H2>
      <P>
        Shopify est la solution la plus rapide pour avoir une boutique
        professionnelle en ligne : hébergement, sécurité, paiements et mises à
        jour sont gérés par la plateforme. Les chiffres 2026 :
      </P>
      <UL>
        <LI>
          <Strong>Abonnement</Strong> : plan Basic autour de 33 € par mois
          (réduction en facturation annuelle), plans supérieurs jusqu&apos;à
          plusieurs centaines d&apos;euros mensuels.
        </LI>
        <LI>
          <Strong>Frais de transaction</Strong> : environ 2,1 % plus 0,30 €
          par paiement carte sur Basic via Shopify Payments. Sur 100 € de
          vente, 2,40 € partent chez Shopify. Et si vous utilisez un autre
          prestataire de paiement, Shopify ajoute une pénalité de 0,5 à 2 %.
        </LI>
        <LI>
          <Strong>Applications</Strong> : le piège budgétaire classique. Avis
          clients, facturation conforme, options de livraison : chaque brique
          est une app souvent payante, et les boutiques réelles finissent
          fréquemment entre 100 € et 600 € par mois tout compris.
        </LI>
      </UL>
      <Callout>
        <Strong>À retenir :</Strong> Shopify transforme des coûts fixes en
        coûts proportionnels à vos ventes. Génial pour démarrer (vous payez
        peu tant que vous vendez peu), de plus en plus cher à mesure que vous
        grandissez : c&apos;est une rente sur votre chiffre d&apos;affaires,
        qu&apos;il faut accepter en connaissance de cause.
      </Callout>

      <H2 id="woocommerce">WooCommerce : la liberté qui s&apos;entretient</H2>
      <P>
        WooCommerce est l&apos;extension e-commerce de WordPress : gratuite,
        open source, installée sur votre propre hébergement. Vous possédez
        tout, aucun pourcentage sur vos ventes (hors frais bancaires du
        prestataire de paiement), et une liberté totale de personnalisation.
      </P>
      <P>
        La contrepartie est la même que pour tout WordPress, en plus critique
        parce qu&apos;une boutique manipule des paiements et des données
        clients : la <Strong>maintenance n&apos;est pas une option</Strong>.
        Mises à jour du cœur, de WooCommerce et de chaque extension,
        sauvegardes testées, surveillance : en pratique, une boutique
        WooCommerce sérieuse coûte 100 € à 500 € par mois en additionnant
        hébergement, extensions premium et maintenance. J&apos;ai détaillé
        cette mécanique dans{" "}
        <A href="/blog/wordpress-ou-site-sur-mesure">
          WordPress ou site sur mesure
        </A>{" "}
        ; elle s&apos;applique doublement à une boutique.
      </P>

      <H2 id="sur-mesure">Le sur mesure : pour quels cas réels</H2>
      <P>
        Développer sa boutique sur mesure coûte plus cher à l&apos;entrée (à
        partir de 4 000 € à 12 000 € selon l&apos;ampleur, voyez{" "}
        <A href="/blog/prix-site-web-liege">le guide des prix</A>) et ne se
        justifie que dans des cas précis, mais réels :
      </P>
      <UL>
        <LI>
          <Strong>Un parcours de vente non standard</Strong> : configurateur,
          devis dynamique, réservation avec règles métier, abonnements
          complexes. Les plateformes excellent sur le panier classique et
          coincent dès qu&apos;on en sort.
        </LI>
        <LI>
          <Strong>L&apos;intégration profonde</Strong> avec vos outils :
          ERP, gestion de stock physique, logistique spécifique.
        </LI>
        <LI>
          <Strong>La performance comme avantage concurrentiel</Strong> : pages
          produits quasi instantanées, expérience mobile parfaite, SEO
          finement contrôlé.
        </LI>
        <LI>
          <Strong>Zéro commission et zéro dépendance</Strong> : pas de rente
          sur les ventes, pas de plateforme qui change ses prix ou ses règles.
        </LI>
      </UL>

      <H2 id="couts">Les coûts réels sur 3 ans</H2>
      <P>
        Pour une boutique de taille modeste (100 à 500 références, quelques
        dizaines de commandes par semaine), voici les ordres de grandeur tout
        compris :
      </P>
      <Table
        head={["Poste", "Shopify", "WooCommerce", "Sur mesure"]}
        rows={[
          [
            "Mise en place",
            "500 € à 3 000 € (thème, config)",
            "2 000 € à 6 000 €",
            "4 000 € à 12 000 €",
          ],
          [
            "Coût mensuel réel",
            "100 € à 600 €",
            "100 € à 500 €",
            "50 € à 200 €",
          ],
          [
            "Commission sur ventes",
            "≈ 2,1 % + 0,30 € / transaction",
            "Frais bancaires seuls",
            "Frais bancaires seuls",
          ],
          [
            <Strong key="t">Total indicatif 3 ans (hors commissions)</Strong>,
            <Strong key="t1">4 100 € à 24 600 €</Strong>,
            <Strong key="t2">5 600 € à 24 000 €</Strong>,
            <Strong key="t3">5 800 € à 19 200 €</Strong>,
          ],
        ]}
      />
      <P>
        Lecture honnête : sur trois ans, les trois voies se recoupent
        largement. La différence se joue moins sur le total que sur la
        structure du coût (faible à l&apos;entrée et proportionnel aux ventes
        chez Shopify, étalé et technique chez WooCommerce, concentré au début
        puis léger en sur mesure) et sur ce que chaque voie rend possible.
      </P>

      <H2 id="belgique">Les spécificités belges à ne pas rater</H2>
      <UL>
        <LI>
          <Strong>Les moyens de paiement locaux.</Strong> Bancontact est
          incontournable en Belgique : vérifiez qu&apos;il est proposé
          nativement par votre prestataire de paiement (c&apos;est le cas via
          Stripe ou Mollie) avant de choisir votre plateforme.
        </LI>
        <LI>
          <Strong>Les obligations légales.</Strong> Numéro d&apos;entreprise
          BCE visible, conditions générales de vente, droit de rétractation de
          14 jours, prix TVA comprise, RGPD : le SPF Économie publie des
          guides clairs, et votre comptable valide la TVA (notamment si vous
          vendez hors Belgique).
        </LI>
        <LI>
          <Strong>Les aides wallonnes.</Strong> Un projet e-commerce est
          exactement le type de projet structurant pour lequel le chèque
          maturité numérique peut financer 50 % de l&apos;accompagnement :
          conditions et démarches dans{" "}
          <A href="/blog/subsides-site-web-wallonie">
            le guide des subsides
          </A>
          .
        </LI>
      </UL>

      <H2 id="test">Le test : quelle voie pour vous ?</H2>
      <H3>Choisissez Shopify si...</H3>
      <UL>
        <LI>Vous voulez vendre dans les 30 jours.</LI>
        <LI>Votre catalogue et votre parcours d&apos;achat sont standards.</LI>
        <LI>
          Vous acceptez la commission comme prix de la tranquillité technique.
        </LI>
      </UL>
      <H3>Choisissez WooCommerce si...</H3>
      <UL>
        <LI>
          Vous avez déjà un site WordPress qui fonctionne bien et une
          maintenance sérieuse en place.
        </LI>
        <LI>
          Vous voulez la propriété complète sans commission, et vous en
          acceptez l&apos;entretien.
        </LI>
      </UL>
      <H3>Choisissez le sur mesure si...</H3>
      <UL>
        <LI>
          Votre parcours de vente sort du standard (réservation,
          configurateur, règles métier).
        </LI>
        <LI>
          La performance et l&apos;expérience sont votre différenciation.
        </LI>
        <LI>
          Vous pensez à 5 ans et refusez toute rente sur votre chiffre
          d&apos;affaires.
        </LI>
      </UL>

      <H2 id="verdict">Mon verdict</H2>
      <P>
        Pour une première boutique au parcours standard : Shopify, sans état
        d&apos;âme, et réévaluez quand la commission mensuelle dépassera le
        coût d&apos;une alternative. Pour un catalogue restreint ou de la
        réservation : un site sur mesure avec paiement simple, la voie la
        plus sous-estimée du marché. Pour un parcours de vente spécifique ou
        une intégration profonde : le sur mesure complet, budgété avec{" "}
        <A href="/blog/delai-creation-site-web">des délais réalistes</A> (6 à
        12 semaines minimum).
      </P>
      <P>
        Vous hésitez entre deux voies pour votre cas précis ? Décrivez-moi
        votre catalogue et votre parcours de vente via{" "}
        <A href="/contact">le formulaire de contact</A> : je vous réponds avec
        une recommandation argumentée, y compris quand la réponse est « prenez
        Shopify, vous n&apos;avez pas besoin de moi ».
      </P>

      <H2 id="sources">Sources</H2>
      <UL>
        <LI>
          <A href="https://www.shopify.com/pricing">
            Shopify, grille tarifaire officielle
          </A>{" "}
          : abonnements et frais de transaction en vigueur.
        </LI>
        <LI>
          <A href="https://woocommerce.com/">WooCommerce</A> : extension et
          écosystème officiel.
        </LI>
        <LI>
          <A href="https://economie.fgov.be/fr">
            SPF Économie
          </A>{" "}
          : obligations légales de la vente en ligne en Belgique.
        </LI>
        <LI>
          <A href="https://litextension.com/blog/woocommerce-vs-shopify/">
            LitExtension, WooCommerce vs Shopify 2026
          </A>{" "}
          : comparatif des coûts réels constatés.
        </LI>
      </UL>
    </>
  ),
};
