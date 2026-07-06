// Pages locales programmatiques (PSEO) : une page par commune de la province
// de Liège, avec un contenu RÉELLEMENT différencié (contexte économique local,
// besoins types, FAQ localisée). Règle absolue : jamais de texte cloné où seul
// le nom de la ville change — c'est la définition des doorway pages que Google
// pénalise (et que notre propre article SEO dénonce).

export interface Ville {
  slug: string;
  name: string;
  // « à Verviers », « à Huy »...
  locative: string;
  metaTitle: string;
  metaDescription: string;
  // Deux paragraphes d'introduction ancrés dans la réalité locale.
  intro: string[];
  // Besoins web typiques du tissu économique local.
  besoins: { title: string; body: string }[];
  faq: { question: string; answer: string }[];
  // Communes voisines couvertes (mentionnées en fin de page).
  voisines: string[];
}

export const villes: Ville[] = [
  {
    slug: "verviers",
    name: "Verviers",
    locative: "à Verviers",
    metaTitle: "Développeur web à Verviers : création de sites internet",
    metaDescription:
      "Développeur web pour Verviers et l'arrondissement : création de sites vitrines, e-commerce et applications en Next.js. Sites rapides, bien référencés localement, à partir de 1 200 €.",
    intro: [
      "Ancienne capitale mondiale de la laine, Verviers est aujourd'hui une ville de commerces, d'artisans et de PME en pleine reconstruction, au sens propre depuis les inondations de 2021. Pour beaucoup d'activités verviétoises, la clientèle se cherche désormais d'abord sur Google : « votre métier + Verviers » se tape tous les jours, et les premières positions se prennent encore facilement.",
      "Basé à Liège, à vingt minutes de Verviers, je crée des sites rapides et bien référencés pour les indépendants et PME de l'arrondissement, avec la possibilité de se rencontrer en vrai plutôt que de tout faire par visioconférence.",
    ],
    besoins: [
      {
        title: "Commerces et horeca du centre-ville",
        body: "Un site vitrine avec horaires, carte ou catalogue et itinéraire, relié à une fiche Google Business active : le duo qui ramène du passage en boutique.",
      },
      {
        title: "Artisans et métiers du bâtiment",
        body: "La reconstruction fait tourner les carnets de commandes : un site qui montre vos chantiers et capte les demandes de devis de toute la vallée de la Vesdre.",
      },
      {
        title: "PME et services B2B",
        body: "Sites d'entreprise crédibles et applications métier sur mesure, pour des sociétés qui rayonnent de Verviers vers Liège et l'Allemagne toute proche.",
      },
    ],
    faq: [
      {
        question: "Travaillez-vous sur place à Verviers ?",
        answer:
          "Oui. Je suis basé à Liège, à une vingtaine de minutes : premier rendez-vous chez vous ou en visioconférence, au choix. Le reste du projet se pilote à distance avec des points d'étape réguliers sur une URL de test.",
      },
      {
        question: "Combien coûte un site pour un commerce verviétois ?",
        answer:
          "Un site vitrine professionnel démarre à 1 200 € (one-page dès 900 €), fiscalement déductible pour un indépendant. Le devis est fixe et détaillé avant tout engagement.",
      },
      {
        question: "Combien de temps pour ressortir sur « mon métier + Verviers » ?",
        answer:
          "Sur une requête locale verviétoise peu disputée, comptez 2 à 4 mois après la mise en ligne avec un site techniquement propre et une fiche Google Business active. Certaines niches se prennent plus vite : je vous donne une estimation honnête après un premier audit gratuit de la concurrence locale.",
      },
    ],
    voisines: ["Dison", "Pepinster", "Theux", "Heusy", "Ensival", "Limbourg"],
  },
  {
    slug: "seraing",
    name: "Seraing",
    locative: "à Seraing",
    metaTitle: "Développeur web à Seraing : création de sites internet",
    metaDescription:
      "Développeur web pour Seraing et la basse Meuse : sites vitrines, e-commerce et applications Next.js pour indépendants et PME. Rapides, bien référencés, à partir de 1 200 €.",
    intro: [
      "Seraing écrit la suite de son histoire industrielle : autour des anciens sites sidérurgiques, la ville se reconvertit et voit émerger des indépendants, des commerces et des PME de services, avec le Val Saint-Lambert en emblème. Dans cette transition, la visibilité en ligne fait souvent la différence entre l'activité qui décolle et celle qui reste invisible.",
      "À dix minutes de Seraing, je construis des sites qui placent les entrepreneurs sérésiens sur les recherches locales, du site vitrine de quartier à l'application sur mesure, avec un interlocuteur unique du premier rendez-vous à la mise en ligne.",
    ],
    besoins: [
      {
        title: "Indépendants en reconversion ou en lancement",
        body: "Un one-page ou un site vitrine efficace pour exister proprement sur Google dès le lancement, sans exploser le budget de départ.",
      },
      {
        title: "Commerces et services de proximité",
        body: "Boulangeries, garages, instituts, professions libérales : un site relié à votre fiche Google Business pour capter la clientèle de Seraing, Jemeppe et Ougrée.",
      },
      {
        title: "PME industrielles et techniques",
        body: "Le tissu industriel reste bien vivant : sites B2B crédibles, catalogues techniques et outils métier qui reflètent le sérieux de votre production.",
      },
    ],
    faq: [
      {
        question: "Pourquoi choisir un développeur proche de Seraing ?",
        answer:
          "Parce que le référencement local se travaille avec quelqu'un qui comprend la géographie réelle : un client de Jemeppe, d'Ougrée ou du Sart-Tilman ne cherche pas pareil. Et parce qu'un rendez-vous en vrai reste possible à tout moment du projet.",
      },
      {
        question: "Faites-vous aussi les petites structures et ASBL ?",
        answer:
          "Oui. Un one-page démarre à 900 € et couvre très bien le besoin d'une petite structure : présentation claire, contact facile, présence propre sur Google. Le site est déductible pour les indépendants.",
      },
      {
        question: "Mon ancien site Seraing ne ressort plus sur Google, que faire ?",
        answer:
          "C'est le cas classique du site construit il y a des années et jamais entretenu : lenteur, mobile cassé, contenu daté. Je commence par un diagnostic gratuit (vitesse, indexation, positions), puis je vous dis honnêtement si des optimisations suffisent ou si une refonte se justifie, chiffres à l'appui.",
      },
    ],
    voisines: ["Jemeppe", "Ougrée", "Boncelles", "Flémalle", "Neupré"],
  },
  {
    slug: "herstal",
    name: "Herstal",
    locative: "à Herstal",
    metaTitle: "Développeur web à Herstal : création de sites internet",
    metaDescription:
      "Développeur web pour Herstal et les Hauts-Sarts : sites d'entreprise, e-commerce et applications sur mesure en Next.js pour PME et indépendants de la basse Meuse.",
    intro: [
      "Entre la FN et le zoning des Hauts-Sarts, l'un des plus grands parcs d'activités économiques de Wallonie, Herstal concentre une densité rare de PME industrielles, de sociétés de services et de sous-traitants. Un tissu très B2B, où le site web sert moins à « faire joli » qu'à rassurer un donneur d'ordre qui vous évalue avant de signer.",
      "Je travaille à un quart d'heure d'Herstal et je construis exactement ce type de sites : sobres, rapides, crédibles, avec un référencement pensé pour les recherches professionnelles autant que locales.",
    ],
    besoins: [
      {
        title: "PME et sous-traitants des Hauts-Sarts",
        body: "Un site d'entreprise qui présente vos capacités, vos certifications et vos références : c'est souvent la première chose qu'un acheteur consulte avant un appel d'offres.",
      },
      {
        title: "Sociétés de services B2B",
        body: "Transport, logistique, maintenance, IT : des sites clairs orientés prise de contact, avec des pages par service qui ressortent sur les bonnes requêtes.",
      },
      {
        title: "Commerces et indépendants herstaliens",
        body: "Un site vitrine relié à Google Business pour capter la clientèle locale de Herstal, Milmort et Vottem.",
      },
    ],
    faq: [
      {
        question: "Faites-vous des sites « corporate » pour l'industrie ?",
        answer:
          "Oui, c'est même un terrain qui me convient bien : des sites sobres et rapides, avec catalogue de capacités, références et données structurées propres. L'objectif est qu'un donneur d'ordre qui vous google soit rassuré en trente secondes.",
      },
      {
        question: "Pouvez-vous intégrer nos outils existants (ERP, catalogue) ?",
        answer:
          "Selon le cas, oui : c'est le cœur du développement sur mesure. On en discute au premier rendez-vous, et je vous dis honnêtement ce qui est raisonnable d'intégrer et ce qui ne l'est pas.",
      },
      {
        question: "Nos clients sont pros, pas locaux : le SEO local sert-il encore ?",
        answer:
          "Oui, différemment : un acheteur B2B qui cherche un sous-traitant tape souvent « votre spécialité + région liégeoise » ou vérifie votre société sur Google avant un rendez-vous. Le site doit ressortir sur vos spécialités techniques ET rassurer sur votre réalité locale (adresse, équipe, références). Les deux se travaillent ensemble.",
      },
    ],
    voisines: ["Milmort", "Vottem", "Oupeye", "Liers", "Rocourt"],
  },
  {
    slug: "huy",
    name: "Huy",
    locative: "à Huy",
    metaTitle: "Développeur web à Huy : création de sites internet",
    metaDescription:
      "Développeur web pour Huy et le Condroz : sites vitrines, réservation en ligne et e-commerce en Next.js pour commerces, tourisme et indépendants hutois.",
    intro: [
      "À mi-chemin entre Liège et Namur, Huy vit de son commerce, de son tourisme (le fort, la collégiale, la Meuse) et d'un tissu dense d'indépendants qui rayonnent sur tout le Condroz et la vallée mosane. Une position qui a une conséquence directe : votre zone de chalandise en ligne est large, et un bon référencement local y capte des clients bien au-delà de la ville.",
      "Je crée pour les Hutois des sites qui exploitent cette position : vitrines rapides et bien référencées, réservation en ligne pour l'horeca et le tourisme, boutiques pour les commerçants qui veulent vendre au-delà du centre-ville.",
    ],
    besoins: [
      {
        title: "Tourisme et horeca",
        body: "Gîtes, restaurants, activités : un site avec réservation directe, sans commission de plateforme, comme je l'ai construit pour un hébergement touristique avec BluePortel.",
      },
      {
        title: "Commerces du centre et du Condroz",
        body: "Vitrine en ligne, catalogue et fiche Google Business optimisée pour capter Huy, Wanze, Marchin et les villages alentour.",
      },
      {
        title: "Indépendants et professions libérales",
        body: "Un site sobre et crédible avec prise de rendez-vous, pour une clientèle qui compare entre Liège et Namur avant de choisir.",
      },
    ],
    faq: [
      {
        question: "La réservation en ligne sans commission, comment ça marche ?",
        answer:
          "Je développe la réservation directement sur votre site (calendrier, acompte ou paiement via Stripe) : le client réserve chez vous, pas sur une plateforme qui prélève 15 à 25 % de commission. C'est exactement le modèle de BluePortel, visible dans mes projets.",
      },
      {
        question: "Vous déplacez-vous jusqu'à Huy ?",
        answer:
          "Oui, Huy est à une demi-heure de Liège : premier rendez-vous sur place ou en visioconférence, au choix, et des points d'étape réguliers pendant le projet.",
      },
      {
        question: "Je vise Huy ET Namur : une page pour chaque ville ?",
        answer:
          "Seulement si chaque page a un vrai contenu propre, sinon Google les traite comme des pages clonées et les ignore. La bonne approche pour une activité hutoise qui rayonne : une page principale solide, une zone d'intervention explicite, et des pages locales riches uniquement pour vos 2 ou 3 vraies zones fortes.",
      },
    ],
    voisines: ["Wanze", "Marchin", "Amay", "Villers-le-Bouillet", "Modave"],
  },
  {
    slug: "waremme",
    name: "Waremme",
    locative: "à Waremme",
    metaTitle: "Développeur web à Waremme : création de sites internet",
    metaDescription:
      "Développeur web pour Waremme et la Hesbaye : sites vitrines, e-commerce et sites d'entreprise en Next.js pour commerces, agroalimentaire et indépendants hesbignons.",
    intro: [
      "Capitale de la Hesbaye liégeoise, Waremme est le centre commerçant d'une des régions agricoles les plus productives du pays : autour des commerces du centre gravitent producteurs, entreprises agroalimentaires et une population d'indépendants qui dessert des dizaines de villages. Ici, un site bien référencé capte une clientèle très dispersée géographiquement, que la vitrine physique seule ne peut pas toucher.",
      "Je crée pour les acteurs hesbignons des sites qui font ce travail : être trouvé depuis n'importe quel village de la Hesbaye, présenter clairement l'offre et transformer la visite en contact, en commande ou en itinéraire vers chez vous.",
    ],
    besoins: [
      {
        title: "Producteurs et circuits courts",
        body: "Vente à la ferme, paniers, produits du terroir : un site avec catalogue et commande en ligne qui fidélise au-delà du marché hebdomadaire.",
      },
      {
        title: "Commerces et services waremmiens",
        body: "Un site vitrine relié à Google Business pour ressortir sur « votre métier + Waremme » et capter les villages alentour, de Hannut à Remicourt.",
      },
      {
        title: "Entreprises agroalimentaires et PME",
        body: "Des sites d'entreprise sérieux, en français et si besoin en plusieurs langues, pour des acteurs qui vendent bien au-delà de la région.",
      },
    ],
    faq: [
      {
        question: "Un site vaut-il la peine pour une clientèle rurale ?",
        answer:
          "Plus qu'ailleurs : en zone rurale, la recherche Google remplace le passage devant la vitrine. Quelqu'un à Hannut ou Berloz qui cherche votre service ne passera jamais devant votre commerce par hasard, mais il vous trouvera en ligne si votre site et votre fiche Google sont bien faits.",
      },
      {
        question: "Proposez-vous la vente en ligne pour les producteurs ?",
        answer:
          "Oui, avec une approche pragmatique : pour un catalogue restreint, un système de commande simple avec paiement Stripe suffit largement, sans la lourdeur ni le coût d'une grosse plateforme e-commerce. On dimensionne l'outil au besoin réel.",
      },
      {
        question: "Quel budget prévoir pour un commerce de Waremme ?",
        answer:
          "Un one-page propre démarre à 900 €, un site vitrine complet à 1 200 €. C'est déductible fiscalement pour un indépendant, ce qui ramène l'effort réel autour de 40 % de moins. Et le devis est fixe : le prix annoncé est le prix payé.",
      },
    ],
    voisines: ["Hannut", "Remicourt", "Berloz", "Faimes", "Geer", "Oreye"],
  },
  {
    slug: "spa",
    name: "Spa",
    locative: "à Spa",
    metaTitle: "Développeur web à Spa : création de sites internet",
    metaDescription:
      "Développeur web pour Spa et les Ardennes bleues : sites avec réservation directe pour hôtels, gîtes et restaurants, sites vitrines pour commerces et indépendants spadois.",
    intro: [
      "Ville thermale classée à l'UNESCO, porte des Fagnes et voisine du circuit de Francorchamps, Spa vit du tourisme comme peu de villes en Belgique : hôtels, gîtes, restaurants et commerces y servent une clientèle qui vient de Flandre, des Pays-Bas et d'Allemagne, et qui réserve presque toujours en ligne. La question n'est donc pas d'avoir un site, mais d'avoir un site qui convertit mieux que les plateformes à commission.",
      "C'est ma spécialité la plus concrète : j'ai construit BluePortel, un site de réservation directe d'hébergements touristiques, précisément pour rendre leurs marges aux propriétaires. Je mets la même mécanique au service des acteurs spadois.",
    ],
    besoins: [
      {
        title: "Hébergements : gîtes, chambres, hôtels",
        body: "Un site avec réservation directe (calendrier, acompte, paiement en ligne) qui récupère les 15 à 25 % de commission laissés aux plateformes, réservation après réservation.",
      },
      {
        title: "Horeca et activités touristiques",
        body: "Restaurants, wellness, activités outdoor : un site multilingue-ready, rapide sur mobile (vos clients réservent depuis leur téléphone), relié aux avis Google.",
      },
      {
        title: "Commerces et indépendants spadois",
        body: "Une vitrine en ligne soignée pour capter à la fois la clientèle locale et les visiteurs de passage, week-ends de Grand Prix compris.",
      },
    ],
    faq: [
      {
        question: "Pouvez-vous vraiment remplacer Booking ou Airbnb ?",
        answer:
          "Pas les remplacer : les compléter intelligemment. Les plateformes restent un canal d'acquisition, mais chaque client fidélisé qui rebooke en direct sur votre site vous fait économiser la commission. Le site de réservation directe se rentabilise généralement en quelques dizaines de réservations.",
      },
      {
        question: "Gérez-vous les sites multilingues pour la clientèle touristique ?",
        answer:
          "Oui. Pour Spa, un site français-anglais voire néerlandais et allemand a du sens vu la clientèle. On peut démarrer en français et ajouter les langues progressivement, la structure technique le prévoit dès le départ.",
      },
      {
        question: "Mon gîte est déjà complet via les plateformes, pourquoi un site ?",
        answer:
          "Complet aujourd'hui, mais à quel coût ? 15 à 25 % de commission sur chaque nuitée, et zéro fichier client à vous. Le site direct sert d'abord à convertir vos clients satisfaits en réservations directes la fois suivante, puis à capter les recherches Google (« gîte Spa », « hébergement Francorchamps ») sans intermédiaire.",
      },
    ],
    voisines: ["Theux", "Stavelot", "Malmedy", "Francorchamps", "Jalhay"],
  },
  {
    slug: "ans",
    name: "Ans",
    locative: "à Ans",
    metaTitle: "Développeur web à Ans : création de sites internet",
    metaDescription:
      "Développeur web pour Ans et l'ouest liégeois : sites vitrines, e-commerce et sites d'entreprise en Next.js pour commerces et PME d'Ans, Alleur et Loncin.",
    intro: [
      "Porte d'entrée ouest de Liège, Ans combine des quartiers commerçants denses et le parc d'activités d'Alleur, qui aligne PME, distribution et sociétés de services le long de l'autoroute. Résultat : une concurrence locale réelle sur Google, où les activités ansoises se disputent les mêmes recherches que celles de Liège toute proche.",
      "À quelques minutes d'Ans, j'aide commerces et PME à sortir de cette masse : des sites plus rapides et mieux structurés que la moyenne locale, qui ressortent sur « votre métier + Ans » comme sur les requêtes liégeoises.",
    ],
    besoins: [
      {
        title: "Commerces des axes ansois",
        body: "Un site vitrine efficace avec horaires, itinéraire et avis, pour transformer les recherches mobiles de proximité en visites en boutique.",
      },
      {
        title: "PME du zoning d'Alleur",
        body: "Sites d'entreprise crédibles et pages services bien construites pour des sociétés B2B qui recrutent leurs clients bien au-delà de la commune.",
      },
      {
        title: "Indépendants et professions libérales",
        body: "Présence en ligne sobre et rassurante, avec prise de contact simple, pour une patientèle et clientèle qui compare avec les prestataires de Liège.",
      },
    ],
    faq: [
      {
        question: "Ans est collée à Liège : faut-il viser les deux sur Google ?",
        answer:
          "Oui, et c'est tout l'enjeu : votre clientèle tape autant « votre métier + Ans » que « + Liège ». La bonne stratégie combine une page locale forte, une fiche Google Business bien géolocalisée et un contenu qui mentionne naturellement vos quartiers réels (Ans, Alleur, Loncin), sans dupliquer les pages.",
      },
      {
        question: "Que coûte un site pour un commerce d'Ans ?",
        answer:
          "One-page dès 900 €, site vitrine complet à partir de 1 200 €, déductible fiscalement pour un indépendant. Devis fixe et détaillé avant engagement, avec les délais annoncés dès le départ.",
      },
      {
        question: "Pouvez-vous reprendre un site existant plutôt que tout refaire ?",
        answer:
          "Oui, quand la base technique tient la route. Je fais d'abord un diagnostic gratuit (vitesse, mobile, indexation) et je vous dis honnêtement si des optimisations ciblées suffisent, à partir de 900 €, ou si une refonte est plus rentable.",
      },
    ],
    voisines: ["Alleur", "Loncin", "Awans", "Saint-Nicolas", "Rocourt"],
  },
  {
    slug: "awans",
    name: "Awans",
    locative: "à Awans",
    metaTitle: "Développeur web à Awans : création de sites internet",
    metaDescription:
      "Développeur web pour Awans et l'axe E40 : sites d'entreprise, vitrines et e-commerce en Next.js pour PME, logistique et indépendants entre Liège et la Hesbaye.",
    intro: [
      "Entre l'E40, la proximité immédiate de l'aéroport de Liège et l'entrée de la Hesbaye, Awans occupe un carrefour logistique stratégique : zonings, transporteurs, sociétés de services et commerces s'y côtoient avec les villages agricoles. Un tissu économique tourné vers l'extérieur, où le site web sert autant à rassurer un partenaire qu'à capter la clientèle locale.",
      "Je construis pour les entreprises awansoises des sites qui font les deux : crédibles pour un donneur d'ordre qui vous vérifie, et bien positionnés sur les recherches locales entre Liège et Waremme.",
    ],
    besoins: [
      {
        title: "Transport, logistique et services B2B",
        body: "Un site d'entreprise clair : flotte, zones desservies, certifications et demande de devis en deux clics, pour des clients qui vous évaluent en ligne avant d'appeler.",
      },
      {
        title: "Commerces et indépendants de la commune",
        body: "Vitrine locale reliée à Google Business pour capter Awans, Othée, Villers-l'Évêque et les communes voisines.",
      },
      {
        title: "Activités en croissance",
        body: "Des sites évolutifs en Next.js : on démarre vitrine, on ajoute réservation, catalogue ou espace client quand l'activité le demande, sans tout reconstruire.",
      },
    ],
    faq: [
      {
        question: "Notre société travaille au national : pourquoi une page Awans ?",
        answer:
          "Parce que vos prospects vérifient qui vous êtes : une adresse réelle, un ancrage local net et des informations cohérentes partout (site, Google, annuaires) renforcent la confiance et le référencement. La page locale n'empêche pas de ressortir au national, elle solidifie la base.",
      },
      {
        question: "Faites-vous des sites avec espace client ou suivi ?",
        answer:
          "Oui, c'est du développement sur mesure : suivi de dossier, documents, formulaires métier. À partir de 3 500 € selon le périmètre, avec un devis précis après le premier échange.",
      },
      {
        question: "Quels délais pour être en ligne ?",
        answer:
          "Un site vitrine se livre en 3 à 6 semaines, un one-page en 1 à 2 semaines si vos contenus sont prêts. Je donne un planning ferme au devis, et vous suivez l'avancement sur une URL de test.",
      },
    ],
    voisines: ["Othée", "Villers-l'Évêque", "Fooz", "Hognoul", "Ans", "Crisnée"],
  },
  {
    slug: "aywaille",
    name: "Aywaille",
    locative: "à Aywaille",
    metaTitle: "Développeur web à Aywaille : création de sites internet",
    metaDescription:
      "Développeur web pour Aywaille et l'Ourthe-Amblève : sites avec réservation pour le tourisme, vitrines pour commerces et indépendants, e-commerce. Next.js, à partir de 1 200 €.",
    intro: [
      "Porte de l'Ourthe-Amblève, Aywaille vit à la croisée de deux économies : le tourisme (les grottes de Remouchamps, les vallées, les kilomètres de balades qui attirent promeneurs et cyclistes) et un vrai centre commerçant qui dessert toute la région jusqu'aux portes des Ardennes. Deux clientèles, deux façons de vous chercher en ligne.",
      "Je conçois pour les acteurs aqualiens des sites qui parlent aux deux : au touriste qui prépare son week-end depuis Anvers ou Maastricht, et à l'habitant de la vallée qui cherche un artisan ou un commerce de confiance.",
    ],
    besoins: [
      {
        title: "Tourisme et loisirs",
        body: "Gîtes, activités outdoor, horeca : un site rapide sur mobile avec réservation directe et de vraies photos, qui convertit sans reverser de commission aux plateformes.",
      },
      {
        title: "Commerces du centre d'Aywaille",
        body: "Vitrine en ligne avec horaires et itinéraire, reliée à la fiche Google Business, pour capter la zone de chalandise réelle : toute la vallée, pas seulement la commune.",
      },
      {
        title: "Artisans et indépendants de la vallée",
        body: "Un site sobre qui montre vos réalisations et capte les demandes de devis de Sprimont à Stoumont.",
      },
    ],
    faq: [
      {
        question: "Ma clientèle touristique est flamande et néerlandaise : le site doit-il être multilingue ?",
        answer:
          "Idéalement oui, au moins français-néerlandais pour l'Ourthe-Amblève. On peut lancer en français et ajouter les langues ensuite : je structure le site pour que l'ajout soit propre (URLs par langue, balises hreflang), sans refonte.",
      },
      {
        question: "La réservation directe est-elle rentable pour un petit gîte ?",
        answer:
          "Souvent oui : à 20 % de commission sur des nuitées à 120 €, la plateforme prélève des centaines d'euros par saison. Un module de réservation directe se rentabilise en quelques dizaines de réservations, et le fichier client devient le vôtre.",
      },
      {
        question: "Vous déplacez-vous en Ourthe-Amblève ?",
        answer:
          "Oui, Aywaille est à 25 minutes de Liège : premier rendez-vous sur place possible, puis un suivi à distance avec des points réguliers. Vous voyez le site avancer sur une URL de test à chaque étape.",
      },
    ],
    voisines: ["Remouchamps", "Sougné", "Harzé", "Sprimont", "Comblain-au-Pont", "Stoumont"],
  },
  {
    slug: "chaudfontaine",
    name: "Chaudfontaine",
    locative: "à Chaudfontaine",
    metaTitle: "Développeur web à Chaudfontaine : création de sites internet",
    metaDescription:
      "Développeur web pour Chaudfontaine, Embourg et Vaux-sous-Chèvremont : sites vitrines haut de gamme, prise de rendez-vous en ligne et e-commerce pour indépendants et professions libérales.",
    intro: [
      "Entre sa source thermale mondialement connue et ses quartiers résidentiels d'Embourg et de Beaufays, Chaudfontaine concentre une clientèle exigeante et un tissu dense de professions libérales, d'indépendants et de commerces de qualité. Ici, un site daté ou lent se remarque immédiatement : votre présence en ligne doit être au niveau de votre prestation.",
      "Je crée pour les Calidifontains des sites à la hauteur de cette exigence : design soigné, chargement instantané, prise de rendez-vous fluide, et un référencement local qui couvre la vallée de la Vesdre et les hauteurs.",
    ],
    besoins: [
      {
        title: "Professions libérales et bien-être",
        body: "Médical, paramédical, conseil, wellness : un site rassurant avec prise de rendez-vous en ligne et une présentation impeccable de votre pratique.",
      },
      {
        title: "Commerces et services haut de gamme",
        body: "Une vitrine dont le design reflète le positionnement, avec de vraies photos et un référencement qui capte Embourg, Beaufays et Vaux-sous-Chèvremont.",
      },
      {
        title: "Indépendants et TPE",
        body: "Un site professionnel qui tient la comparaison avec Liège toute proche, pour une clientèle qui vérifie systématiquement avant de choisir.",
      },
    ],
    faq: [
      {
        question: "Proposez-vous la prise de rendez-vous en ligne ?",
        answer:
          "Oui, deux approches selon le besoin : intégration propre d'un outil existant (agenda en ligne que vous utilisez déjà) ou module sur mesure avec confirmation automatique. On choisit en fonction de votre pratique et de votre budget au premier rendez-vous.",
      },
      {
        question: "Un design « haut de gamme » coûte-t-il beaucoup plus cher ?",
        answer:
          "Pas nécessairement : mes sites vitrines démarrent à 1 200 € avec un design sur mesure, pas un template rhabillé. Le soin du détail est ma façon normale de travailler, mon portfolio en témoigne.",
      },
      {
        question: "Ma patientèle vient aussi de Liège : comment ressortir des deux côtés ?",
        answer:
          "Avec une page principale bien géolocalisée sur Chaudfontaine, une fiche Google Business précise et du contenu qui mentionne naturellement votre zone réelle (Embourg, Beaufays, Chênée, Liège). Google comprend très bien les zones de chalandise cohérentes ; ce qu'il pénalise, ce sont les pages clonées par ville.",
      },
    ],
    voisines: ["Embourg", "Beaufays", "Vaux-sous-Chèvremont", "Chênée", "Trooz"],
  },
  {
    slug: "esneux",
    name: "Esneux",
    locative: "à Esneux",
    metaTitle: "Développeur web à Esneux : création de sites internet",
    metaDescription:
      "Développeur web pour Esneux et Tilff : sites vitrines, prise de rendez-vous et e-commerce en Next.js pour indépendants, horeca et professions libérales de la vallée de l'Ourthe.",
    intro: [
      "Lovée dans les boucles de l'Ourthe, Esneux (avec Tilff) est une commune résidentielle très vivante : professions libérales, horeca de bord d'eau, indépendants et associations y servent à la fois les habitants et les promeneurs qui descendent la vallée le week-end. Une clientèle double, qui se cherche presque exclusivement en ligne.",
      "À un quart d'heure de Liège par la vallée, je crée pour les Esneutois des sites qui captent ces deux publics : visibles sur les recherches locales de la vallée, agréables sur mobile pour le visiteur de passage.",
    ],
    besoins: [
      {
        title: "Horeca et loisirs de bord d'Ourthe",
        body: "Restaurants, cafés, locations : un site rapide sur mobile avec menu, horaires et réservation, pour convertir le promeneur qui cherche « où manger à Tilff » depuis le RAVeL.",
      },
      {
        title: "Professions libérales et bien-être",
        body: "Un site rassurant avec prise de rendez-vous en ligne, pour une patientèle qui compare entre la vallée et Liège.",
      },
      {
        title: "Indépendants et artisans de la vallée",
        body: "Vitrine sobre et efficace, reliée à Google Business, qui capte les demandes d'Esneux à Comblain.",
      },
    ],
    faq: [
      {
        question: "Un petit indépendant d'Esneux a-t-il besoin d'un « vrai » site ?",
        answer:
          "Un one-page bien fait (dès 900 €) suffit souvent : présentation claire, contact facile, fiche Google reliée. L'important n'est pas la taille du site mais sa qualité technique : rapide, lisible sur téléphone, correctement géolocalisé.",
      },
      {
        question: "Pouvez-vous gérer la réservation pour un restaurant ?",
        answer:
          "Oui : intégration propre d'un outil existant ou module sur mesure selon votre fonctionnement. L'objectif est le même : que la réservation se fasse en deux clics depuis un téléphone.",
      },
      {
        question: "Le premier rendez-vous est-il vraiment sans engagement ?",
        answer:
          "Oui : on clarifie le besoin, je vous donne un premier avis honnête et un devis fixe. Si votre site actuel tient la route, je vous le dis aussi, ça m'est déjà arrivé de déconseiller une refonte.",
      },
    ],
    voisines: ["Tilff", "Méry", "Hony", "Comblain-au-Pont", "Neupré", "Sprimont"],
  },
  {
    slug: "flemalle",
    name: "Flémalle",
    locative: "à Flémalle",
    metaTitle: "Développeur web à Flémalle : création de sites internet",
    metaDescription:
      "Développeur web pour Flémalle et la vallée mosane : sites d'entreprise, vitrines et outils métier en Next.js pour PME, indépendants et commerces en reconversion.",
    intro: [
      "Commune de la vallée mosane au passé industriel dense, Flémalle se réinvente : autour des zonings et des anciennes friches, PME techniques, sociétés de services et commerces de proximité composent un tissu économique en pleine transition. Une transition qui se joue aussi en ligne, où beaucoup d'activités flémalloises restent sous-représentées par rapport à leur réalité.",
      "Je construis pour les entrepreneurs flémallois des sites à l'image de ce renouveau : modernes, rapides, crédibles, et positionnés sur les recherches locales de la rive gauche, de Jemeppe à Engis.",
    ],
    besoins: [
      {
        title: "PME techniques et industrielles",
        body: "Un site d'entreprise sérieux : capacités, parc machines, références et demande de devis, pour des donneurs d'ordre qui vous évaluent en ligne.",
      },
      {
        title: "Commerces et services de proximité",
        body: "Vitrine locale reliée à Google Business pour capter Flémalle-Grande, Flémalle-Haute et les Awirs.",
      },
      {
        title: "Indépendants en lancement",
        body: "Un one-page propre et abordable pour exister sur Google dès le premier jour d'activité, déductible fiscalement.",
      },
    ],
    faq: [
      {
        question: "Notre PME n'a jamais eu de site : par où commencer ?",
        answer:
          "Par un site vitrine simple et solide : qui vous êtes, ce que vous faites, vos références, comment vous joindre. À partir de 1 200 €, livré en 3 à 6 semaines. On peut toujours enrichir ensuite ; l'erreur serait de vouloir tout, tout de suite.",
      },
      {
        question: "Peut-on être trouvé face aux grosses enseignes de la vallée ?",
        answer:
          "Sur les recherches locales, oui : Google privilégie la proximité et la pertinence, pas la taille. Une fiche Google soignée, un site rapide et des pages services bien écrites suffisent à passer devant des concurrents plus gros mais négligents en ligne.",
      },
      {
        question: "Travaillez-vous avec les ASBL et clubs flémallois ?",
        answer:
          "Oui, avec des formules adaptées aux petits budgets : un one-page dès 900 € couvre l'essentiel (présentation, agenda, contact). L'important est d'avoir une présence propre et à jour plutôt qu'une page Facebook seule.",
      },
    ],
    voisines: ["Jemeppe", "Engis", "Grâce-Hollogne", "Seraing", "Les Awirs"],
  },
  {
    slug: "fleron",
    name: "Fléron",
    locative: "à Fléron",
    metaTitle: "Développeur web à Fléron : création de sites internet",
    metaDescription:
      "Développeur web pour Fléron et le plateau : sites vitrines, e-commerce et prise de rendez-vous en Next.js pour commerces, indépendants et professions libérales de l'est liégeois.",
    intro: [
      "À l'entrée du pays de Herve, Fléron est l'un des pôles commerçants les plus denses de l'est liégeois : ses axes commerciaux drainent une clientèle qui vient de tout le plateau, de Beyne-Heusay à Soumagne. Une densité qui a un revers : sur Google aussi, la concurrence locale y est réelle, et les premières positions se méritent.",
      "J'aide les commerces et indépendants fléronnais à prendre ces positions : sites plus rapides que la moyenne, fiches Google exploitées à fond, contenu qui colle aux recherches réelles du plateau.",
    ],
    besoins: [
      {
        title: "Commerces des axes fléronnais",
        body: "Un site vitrine orienté visite en boutique : horaires, itinéraire, avis et promotions, relié à une fiche Google Business active.",
      },
      {
        title: "Professions libérales et santé",
        body: "Médical et paramédical sont très présents sur le plateau : un site rassurant avec prise de rendez-vous en ligne fait la différence.",
      },
      {
        title: "Services et artisans de l'est liégeois",
        body: "Un site qui montre vos réalisations et capte les demandes de devis de Fléron à Herve.",
      },
    ],
    faq: [
      {
        question: "La concurrence locale est forte : combien de temps pour ressortir ?",
        answer:
          "Sur les requêtes commerçantes fléronnaises, comptez 3 à 5 mois de travail régulier (site rapide, fiche active, avis en continu). Je commence toujours par auditer gratuitement vos concurrents directs pour vous dire où sont les places à prendre.",
      },
      {
        question: "J'ai déjà une page Facebook qui marche : pourquoi un site ?",
        answer:
          "Facebook touche vos abonnés ; le site capte ceux qui ne vous connaissent pas encore et qui cherchent sur Google. Les deux se complètent, mais seul le site vous appartient et ressort sur « votre métier + Fléron ».",
      },
      {
        question: "Proposez-vous la vente en ligne pour un commerce local ?",
        answer:
          "Oui, dimensionnée au besoin : du simple click-and-collect avec paiement Stripe à la boutique complète. Pour un commerce de plateau, le retrait en magasin est souvent le meilleur premier pas.",
      },
    ],
    voisines: ["Beyne-Heusay", "Soumagne", "Chaudfontaine", "Romsée", "Magnée"],
  },
  {
    slug: "grace-hollogne",
    name: "Grâce-Hollogne",
    locative: "à Grâce-Hollogne",
    metaTitle: "Développeur web à Grâce-Hollogne : création de sites internet",
    metaDescription:
      "Développeur web pour Grâce-Hollogne et Liège Airport : sites d'entreprise, logistique et e-commerce en Next.js pour PME, transporteurs et indépendants de l'ouest liégeois.",
    intro: [
      "Avec Liège Airport, l'un des tout premiers aéroports cargo d'Europe, et ses zonings logistiques qui s'étendent d'année en année, Grâce-Hollogne est devenue une plaque tournante du fret et de l'e-commerce européen. Autour de ce moteur gravitent transporteurs, prestataires logistiques, sociétés de services et tout un tissu de commerces et d'indépendants.",
      "Je construis pour les acteurs gracieux-hollognois des sites au niveau de cet environnement : crédibles pour des partenaires internationaux, efficaces pour la clientèle locale, et prêts pour le multilingue quand votre marché le demande.",
    ],
    besoins: [
      {
        title: "Logistique, transport et services au fret",
        body: "Un site d'entreprise clair, si besoin bilingue français-anglais : services, zones couvertes, certifications, demande de cotation rapide.",
      },
      {
        title: "PME des zonings",
        body: "Sites B2B sobres et rapides qui rassurent un donneur d'ordre en trente secondes, avec des pages services qui ressortent sur vos spécialités.",
      },
      {
        title: "Commerces et indépendants locaux",
        body: "Vitrine reliée à Google Business pour capter Grâce-Hollogne, Bierset et les communes de l'ouest liégeois.",
      },
    ],
    faq: [
      {
        question: "Nos clients sont internationaux : français-anglais dès le départ ?",
        answer:
          "Pour la logistique autour de l'aéroport, souvent oui. Je structure le site pour le multilingue propre (URLs par langue, balises hreflang) : on peut lancer les deux langues ensemble ou commencer par le français et ajouter l'anglais sans refonte.",
      },
      {
        question: "Faites-vous des outils métier (suivi, cotation) ?",
        answer:
          "Oui, c'est du sur mesure : formulaires de cotation intelligents, espaces clients, suivi de dossier. À partir de 3 500 € selon le périmètre, devis précis après le premier échange.",
      },
      {
        question: "Quel budget pour un site d'entreprise correct ?",
        answer:
          "Un site vitrine B2B sérieux se situe entre 1 200 € et 3 000 € selon le nombre de pages et le multilingue. C'est déductible, et le devis est fixe : pas de surprise en cours de projet.",
      },
    ],
    voisines: ["Bierset", "Horion-Hozémont", "Awans", "Flémalle", "Saint-Georges"],
  },
  {
    slug: "hannut",
    name: "Hannut",
    locative: "à Hannut",
    metaTitle: "Développeur web à Hannut : création de sites internet",
    metaDescription:
      "Développeur web pour Hannut et la Hesbaye occidentale : sites vitrines, e-commerce et sites d'entreprise en Next.js pour commerces, indépendants et PME en croissance.",
    intro: [
      "Pôle commerçant de la Hesbaye occidentale, Hannut est l'une des communes les plus dynamiques de la province : sa population croît, ses commerces drainent les villages à des kilomètres à la ronde, et son tissu d'indépendants s'étoffe d'année en année. Cette croissance attire aussi la concurrence : être visible en ligne y devient chaque année un peu plus décisif.",
      "Je crée pour les Hannutois des sites qui verrouillent cette visibilité : bien positionnés sur les recherches locales entre Liège, Namur et le Brabant wallon, et conçus pour transformer la visite en contact ou en passage en boutique.",
    ],
    besoins: [
      {
        title: "Commerces du centre hannutois",
        body: "Un site vitrine orienté trafic en boutique, relié à une fiche Google Business exploitée à fond, pour capter une zone de chalandise qui dépasse largement la commune.",
      },
      {
        title: "Indépendants et professions libérales",
        body: "Présence en ligne sobre et rassurante avec prise de rendez-vous, pour une clientèle qui compare entre Hannut, Waremme et Jodoigne.",
      },
      {
        title: "PME et agro-entreprises de Hesbaye",
        body: "Sites d'entreprise sérieux et évolutifs, du catalogue produits à la commande en ligne pour les circuits courts.",
      },
    ],
    faq: [
      {
        question: "Hannut est entre trois provinces : comment cibler la bonne zone ?",
        answer:
          "En géolocalisant proprement : contenu qui mentionne vos vraies zones (Hannut, Waremme, Jodoigne, Landen selon votre activité), fiche Google avec zone desservie explicite et données structurées cohérentes. Google restitue très bien une zone de chalandise réelle.",
      },
      {
        question: "Que coûte un site pour un commerce de Hannut ?",
        answer:
          "One-page dès 900 €, site vitrine complet à partir de 1 200 €, e-commerce à partir de 4 000 €. Déductible fiscalement, devis fixe, et les délais annoncés dès le départ (3 à 6 semaines pour un vitrine).",
      },
      {
        question: "Vous déplacez-vous jusqu'à Hannut ?",
        answer:
          "Oui, Hannut est à 35 minutes de Liège : premier rendez-vous sur place ou en visio, au choix. Ensuite, tout se suit à distance sur une URL de test, avec des points d'étape réguliers.",
      },
    ],
    voisines: ["Waremme", "Lincent", "Wasseiges", "Braives", "Landen", "Jodoigne"],
  },
  {
    slug: "oupeye",
    name: "Oupeye",
    locative: "à Oupeye",
    metaTitle: "Développeur web à Oupeye : création de sites internet",
    metaDescription:
      "Développeur web pour Oupeye et la Basse-Meuse : sites vitrines, e-commerce et sites d'entreprise en Next.js pour commerces, indépendants et PME de Hermalle à Haccourt.",
    intro: [
      "Entre le canal Albert et les coteaux de la Basse-Meuse, Oupeye aligne des villages résidentiels dynamiques (Hermalle, Haccourt, Vivegnis, Hermée) et un tissu solide de PME, d'artisans et de commerces qui servent tout le nord de Liège. Une clientèle fidèle mais dispersée, que la recherche Google locale relie mieux que n'importe quelle vitrine physique.",
      "Je crée pour les Oupéens des sites qui exploitent cette géographie : correctement positionnés sur chaque village de la commune, rapides, et pensés pour générer des appels et des demandes de devis.",
    ],
    besoins: [
      {
        title: "Artisans et métiers du bâtiment",
        body: "Très demandés en Basse-Meuse : un site qui montre vos chantiers et capte les demandes de devis d'Oupeye à Visé.",
      },
      {
        title: "Commerces et horeca des villages",
        body: "Vitrine locale avec horaires et itinéraire, reliée à Google Business, pour ressortir village par village.",
      },
      {
        title: "PME et services de la Basse-Meuse",
        body: "Sites d'entreprise crédibles pour des sociétés qui travaillent entre Liège, Visé et la frontière néerlandaise.",
      },
    ],
    faq: [
      {
        question: "Ma commune a plusieurs villages : le site doit-il tous les citer ?",
        answer:
          "Naturellement, oui : mentionner Hermalle, Haccourt ou Vivegnis là où c'est pertinent aide Google à comprendre votre zone réelle. Ce qu'il ne faut pas faire, c'est créer une page clonée par village : une page riche vaut mieux que dix pages vides.",
      },
      {
        question: "Un artisan a-t-il vraiment besoin d'autre chose que du bouche-à-oreille ?",
        answer:
          "Le bouche-à-oreille reste roi, mais il passe désormais par Google : on vous recommande, puis on vous cherche en ligne avant d'appeler. Sans site, une partie de ces recommandations se perd chez le concurrent qui, lui, est visible.",
      },
      {
        question: "Quels délais et quel budget pour démarrer ?",
        answer:
          "One-page dès 900 € en 1 à 2 semaines, site vitrine dès 1 200 € en 3 à 6 semaines. Déductible fiscalement, devis fixe avant engagement, et vous suivez l'avancement sur une URL de test.",
      },
    ],
    voisines: ["Hermalle-sous-Argenteau", "Haccourt", "Vivegnis", "Hermée", "Visé", "Herstal"],
  },
  {
    slug: "saint-nicolas",
    name: "Saint-Nicolas",
    locative: "à Saint-Nicolas",
    metaTitle: "Développeur web à Saint-Nicolas : création de sites internet",
    metaDescription:
      "Développeur web pour Saint-Nicolas et Montegnée : sites vitrines et e-commerce en Next.js pour commerces, indépendants et services de proximité de l'ouest liégeois.",
    intro: [
      "L'une des communes les plus densément peuplées de Wallonie, Saint-Nicolas (avec Montegnée et Tilleur) vit par ses commerces et services de proximité : ici, la clientèle est littéralement à votre porte, et la recherche Google mobile (« ouvert maintenant », « près de moi ») pèse plus lourd que partout ailleurs.",
      "Je crée pour les commerçants et indépendants nicolaïtes des sites conçus pour cette réalité : ultra-rapides sur téléphone, parfaitement reliés à la fiche Google Business, et pensés pour transformer la recherche de proximité en visite immédiate.",
    ],
    besoins: [
      {
        title: "Commerces et services de proximité",
        body: "Horaires à jour, itinéraire en un clic, avis visibles : le trio qui convertit les recherches « près de moi » en passages en boutique.",
      },
      {
        title: "Indépendants et petits métiers",
        body: "Un one-page abordable et professionnel pour exister proprement sur Google, sans dépendre uniquement de Facebook.",
      },
      {
        title: "Santé et paramédical",
        body: "Un site rassurant avec prise de rendez-vous, pour une patientèle dense qui choisit d'abord à la proximité et aux avis.",
      },
    ],
    faq: [
      {
        question: "Avec la densité de la commune, comment se démarquer ?",
        answer:
          "Par l'exécution : la plupart des concurrents locaux ont des sites lents ou pas de site du tout. Un site rapide, une fiche Google complète et quelques avis récents suffisent souvent à prendre le pack local (les trois résultats avec la carte) sur votre métier.",
      },
      {
        question: "Le budget est serré : quelle est l'option minimale sérieuse ?",
        answer:
          "Le one-page à 900 € : une page unique bien construite (services, photos, avis, contact, itinéraire), reliée à votre fiche Google. C'est déductible fiscalement, et largement suffisant pour un commerce de proximité qui démarre.",
      },
      {
        question: "Pouvez-vous aussi gérer ma fiche Google Business ?",
        answer:
          "Je la configure et l'optimise avec vous à la livraison du site (catégories, zone, services, photos), et je vous apprends à l'entretenir en dix minutes par semaine. C'est inclus dans mes prestations de référencement local, à partir de 500 €.",
      },
    ],
    voisines: ["Montegnée", "Tilleur", "Ans", "Grâce-Hollogne", "Seraing"],
  },
  {
    slug: "soumagne",
    name: "Soumagne",
    locative: "à Soumagne",
    metaTitle: "Développeur web à Soumagne : création de sites internet",
    metaDescription:
      "Développeur web pour Soumagne et le pays de Herve : sites vitrines, e-commerce et sites d'entreprise en Next.js pour indépendants, commerces et PME de l'est liégeois.",
    intro: [
      "Entre l'agglomération liégeoise et le pays de Herve, Soumagne fait partie de ces communes en forte croissance résidentielle : de nouveaux habitants, de nouveaux besoins, et un tissu d'indépendants, de commerces et de PME qui grandit avec eux. Chaque nouvel arrivant qui cherche un prestataire commence par Google : autant que ce soit vous qu'il trouve.",
      "Je crée pour les Soumagnards des sites qui captent cette demande neuve : bien référencés sur la commune et le plateau, rapides, et conçus pour déclencher le contact.",
    ],
    besoins: [
      {
        title: "Artisans et construction",
        body: "La croissance résidentielle fait tourner le bâtiment : un site qui montre vos chantiers capte les demandes de devis des nouveaux habitants.",
      },
      {
        title: "Commerces et services locaux",
        body: "Vitrine reliée à Google Business pour ressortir de Soumagne à Micheroux, face aux pôles voisins de Fléron et Herve.",
      },
      {
        title: "Indépendants et professions libérales",
        body: "Un site sobre avec prise de contact ou de rendez-vous simple, pour une clientèle résidentielle qui compare en ligne.",
      },
    ],
    faq: [
      {
        question: "Les nouveaux habitants cherchent-ils vraiment sur Google ?",
        answer:
          "Systématiquement : un ménage qui emménage n'a aucun réseau local et choisit tout en ligne, du boulanger au chauffagiste. C'est la clientèle la plus facile à capter pour un site bien référencé, et la plus fidèle ensuite.",
      },
      {
        question: "Que comprend concrètement un site vitrine à 1 200 € ?",
        answer:
          "Conception sur mesure (pas de template rhabillé), 5 à 8 pages, adaptation mobile, optimisation vitesse, SEO local de base (données structurées, géolocalisation), formulaire de contact et formation à la prise en main. Devis détaillé ligne par ligne avant engagement.",
      },
      {
        question: "Et après la mise en ligne, je me débrouille seul ?",
        answer:
          "Non : je reste disponible, et je propose une maintenance légère (à partir de 20 €/mois) qui garde le site rapide, sûr et à jour. Sur un site statique moderne, ce poste reste volontairement minime.",
      },
    ],
    voisines: ["Micheroux", "Ayeneux", "Fléron", "Herve", "Olne", "Blegny"],
  },
  {
    slug: "sprimont",
    name: "Sprimont",
    locative: "à Sprimont",
    metaTitle: "Développeur web à Sprimont : création de sites internet",
    metaDescription:
      "Développeur web pour Sprimont et l'Ourthe-Amblève : sites d'entreprise, vitrines et e-commerce en Next.js pour PME, carrières, artisans et indépendants.",
    intro: [
      "Connue pour sa pierre, extraite et travaillée ici depuis des générations, Sprimont a gardé une vraie culture d'entreprise : carrières, transformation, construction et tout un écosystème de PME et d'artisans qui rayonnent sur l'Ourthe-Amblève et bien au-delà. Des savoir-faire solides, souvent sous-représentés en ligne par rapport à leur réputation réelle.",
      "Je construis pour les entreprises sprimontoises des sites au niveau de ce savoir-faire : des vitrines B2B qui montrent la matière et les réalisations, et des sites locaux efficaces pour les indépendants de la commune.",
    ],
    besoins: [
      {
        title: "Pierre, construction et aménagement",
        body: "Vos réalisations sont votre meilleur argument : un site visuel, avec galeries de chantiers et demande de devis, qui valorise la matière comme elle le mérite.",
      },
      {
        title: "PME et sous-traitants",
        body: "Sites d'entreprise sobres et crédibles, avec pages spécialités bien construites pour ressortir sur vos requêtes techniques.",
      },
      {
        title: "Indépendants et commerces des villages",
        body: "Vitrine locale reliée à Google Business pour capter Sprimont, Louveigné, Dolembreux et la vallée.",
      },
    ],
    faq: [
      {
        question: "Nos réalisations sont notre vitrine : comment les mettre en valeur ?",
        answer:
          "Avec de vraies photos optimisées (chargement rapide malgré la qualité), des galeries par type de réalisation et des pages qui racontent les chantiers. Je m'occupe de l'optimisation technique des images, vous fournissez la matière brute.",
      },
      {
        question: "Notre clientèle dépasse la région : le site local suffit-il ?",
        answer:
          "Le site est à la fois local et national : la géolocalisation renforce la confiance et le référencement de proximité, tandis que les pages spécialités ressortent sur les requêtes métier sans limite géographique. Les deux se construisent ensemble.",
      },
      {
        question: "Quel budget pour un site avec galeries de réalisations ?",
        answer:
          "Comptez 1 200 € à 2 500 € selon le volume de contenu et le niveau de sur-mesure. C'est déductible, livré en 3 à 6 semaines, et le devis détaillé est fixe.",
      },
    ],
    voisines: ["Louveigné", "Dolembreux", "Gomzé-Andoumont", "Aywaille", "Esneux", "Trooz"],
  },
  {
    slug: "vise",
    name: "Visé",
    locative: "à Visé",
    metaTitle: "Développeur web à Visé : création de sites internet",
    metaDescription:
      "Développeur web pour Visé et la Basse-Meuse : sites vitrines, e-commerce et sites d'entreprise en Next.js pour commerces, horeca et PME jusqu'à la frontière néerlandaise.",
    intro: [
      "Dernière ville belge avant Maastricht, Visé cultive une double identité : cité commerçante et gourmande au bord de la Meuse (son oie est une institution), et pôle économique de la Basse-Meuse dont la zone de chalandise déborde naturellement sur le Limbourg néerlandais. Une position frontalière qui change la donne en ligne : vos clients potentiels cherchent en français et en néerlandais.",
      "Je crée pour les Visétois des sites qui exploitent cette position : bien référencés sur la Basse-Meuse, prêts pour le bilingue quand votre clientèle le justifie, et conçus pour convertir aussi bien l'habitant que le visiteur néerlandais de passage.",
    ],
    besoins: [
      {
        title: "Horeca et commerces du centre",
        body: "Un site appétissant et rapide sur mobile, avec menu, horaires et réservation, qui capte les visiteurs de la Basse-Meuse et du Limbourg tout proche.",
      },
      {
        title: "PME et services transfrontaliers",
        body: "Sites d'entreprise, si besoin bilingues français-néerlandais, pour des sociétés qui travaillent des deux côtés de la frontière.",
      },
      {
        title: "Indépendants de la Basse-Meuse",
        body: "Vitrine sobre reliée à Google Business pour ressortir de Visé à Bassenge et jusqu'à Fourons.",
      },
    ],
    faq: [
      {
        question: "Le néerlandais vaut-il l'investissement pour un commerce visétois ?",
        answer:
          "Souvent oui, surtout pour l'horeca et le tourisme : Maastricht est à un quart d'heure et les visiteurs néerlandophones sont nombreux. Je structure le site pour un bilinguisme propre (URLs par langue, hreflang) qu'on peut activer dès le lancement ou plus tard.",
      },
      {
        question: "Que coûte un site bilingue par rapport à un site simple ?",
        answer:
          "Comptez environ 30 à 50 % de plus qu'un site monolingue équivalent, essentiellement pour l'intégration des contenus traduits (la traduction elle-même peut venir de vous ou d'un traducteur). Le devis distingue clairement les deux postes.",
      },
      {
        question: "Vous occupez-vous du référencement côté néerlandophone ?",
        answer:
          "La base technique, oui (hreflang, métadonnées et données structurées par langue). Pour le contenu néerlandais, je travaille avec vos traductions : un texte natif convertit toujours mieux qu'une traduction automatique.",
      },
    ],
    voisines: ["Lixhe", "Lanaye", "Cheratte", "Bassenge", "Oupeye", "Fourons"],
  },
];

export function getVille(slug: string): Ville | undefined {
  return villes.find((v) => v.slug === slug);
}
