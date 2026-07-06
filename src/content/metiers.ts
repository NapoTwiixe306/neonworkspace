// Pages PSEO « métiers » : une page par secteur d'activité (« site internet
// pour restaurant à Liège », « ... pour coiffeur », etc.). Même exigence que
// pour les pages villes : un contenu réellement spécifique au métier (enjeux,
// fonctionnalités recommandées, erreurs types, FAQ), jamais de texte cloné.

export interface Metier {
  slug: string;
  // « restaurant », « salon de coiffure »...
  label: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  // Introduction ancrée dans la réalité du métier (2 à 3 paragraphes).
  intro: string[];
  // Ce que le site doit accomplir pour CE métier.
  enjeux: { title: string; body: string }[];
  // Fonctionnalités recommandées, avec leur justification (tableau).
  features: { name: string; why: string }[];
  // Budget spécifique au métier.
  pricing: string;
  // Erreurs récurrentes du secteur en ligne.
  erreurs: { title: string; body: string }[];
  faq: { question: string; answer: string }[];
}

export const metiers: Metier[] = [
  {
    slug: "restaurant",
    label: "restaurant",
    h1: "Site internet pour restaurant à Liège",
    metaTitle: "Site internet pour restaurant à Liège : le guide et les prix",
    metaDescription:
      "Création de sites pour restaurants à Liège : menu toujours à jour, réservation en ligne sans commission, photos qui donnent faim et SEO local. À partir de 1 200 €, exemples et FAQ.",
    intro: [
      "Un client qui cherche où manger à Liège fait toujours la même chose : il sort son téléphone, tape « restaurant + quartier » ou regarde la carte Google, compare trois établissements en deux minutes et choisit celui qui l'a rassuré. Menu introuvable, photos sombres, horaires douteux : chacun de ces détails envoie des tables chez le concurrent, tous les jours.",
      "Un bon site de restaurant n'est pas une carte de visite : c'est un serveur qui travaille 24h/24. Il montre la carte à jour, donne faim avec de vraies photos, prend les réservations sans commission et indique sans ambiguïté où vous êtes et quand vous êtes ouvert. Voici exactement comment je construis ça, et à quel prix.",
    ],
    enjeux: [
      {
        title: "Être choisi dans les 2 minutes de comparaison",
        body: "Le choix d'un restaurant se joue sur mobile, vite : votre site doit charger instantanément, montrer la carte et les photos sans friction, et afficher les avis. Chaque seconde de lenteur est une table perdue.",
      },
      {
        title: "Reprendre la main sur la réservation",
        body: "Les plateformes de réservation prélèvent des frais par couvert et gardent le fichier client. Une réservation intégrée à votre site vous rend les deux : la marge et la relation.",
      },
      {
        title: "Dominer votre quartier sur Google",
        body: "« Restaurant italien Liège », « où manger Outremeuse » : ces recherches se gagnent avec un site géolocalisé propre et une fiche Google Business exploitée à fond, les deux étant reliés.",
      },
    ],
    features: [
      {
        name: "Menu consultable et modifiable facilement",
        why: "Le menu est la page la plus vue d'un site de restaurant. Un PDF scanné illisible sur mobile fait fuir ; une carte HTML propre, mise à jour en deux minutes, convertit.",
      },
      {
        name: "Réservation en ligne intégrée",
        why: "Sans commission par couvert : le client réserve chez vous, vous recevez la notification, le fichier client vous appartient.",
      },
      {
        name: "Photos optimisées",
        why: "On mange d'abord avec les yeux : de vraies photos de vos plats, compressées pour charger vite, font plus que n'importe quel texte.",
      },
      {
        name: "Horaires, adresse et itinéraire en un clic",
        why: "Les informations pratiques doivent être trouvables en 5 secondes, cohérentes avec votre fiche Google (Google vérifie cette cohérence).",
      },
      {
        name: "Données structurées « Restaurant »",
        why: "Le balisage Schema.org spécifique aux restaurants (cuisine, fourchette de prix, horaires) aide Google à vous afficher en résultat enrichi et les moteurs IA à vous recommander.",
      },
    ],
    pricing:
      "Pour un restaurant, comptez 1 200 € à 2 500 € selon le niveau de sur-mesure et la réservation intégrée : one-page avec menu et infos pratiques dès 1 200 €, site complet avec réservation en ligne autour de 2 000 € à 2 500 €. C'est déductible fiscalement, et souvent rentabilisé en quelques mois de commissions de plateforme économisées.",
    erreurs: [
      {
        title: "Le menu en PDF scanné",
        body: "Illisible sur mobile, invisible pour Google, jamais à jour. C'est l'erreur numéro un du secteur, et la plus simple à corriger.",
      },
      {
        title: "Tout miser sur Facebook et Instagram",
        body: "Excellents pour fidéliser, mais ils ne captent pas celui qui cherche « restaurant + votre quartier » sur Google : cette recherche-là, seul un site la gagne.",
      },
      {
        title: "Des horaires contradictoires entre le site, Google et la porte",
        body: "Rien ne détruit plus vite la confiance (et le référencement local) que des informations incohérentes. Une seule source de vérité, partout.",
      },
    ],
    faq: [
      {
        question: "Combien coûte un site de restaurant à Liège ?",
        answer:
          "De 1 200 € pour un one-page soigné (menu, photos, infos pratiques, lien réservation) à environ 2 500 € pour un site complet avec réservation en ligne intégrée. Déductible fiscalement, devis fixe avant engagement.",
      },
      {
        question: "Puis-je mettre à jour ma carte moi-même ?",
        answer:
          "Oui, c'est prévu dès la conception : la carte se modifie sans toucher au code, en quelques minutes. Je vous forme à la livraison, et je reste disponible si besoin.",
      },
      {
        question: "La réservation intégrée remplace-t-elle les plateformes ?",
        answer:
          "Elle les complète : gardez les plateformes comme canal d'acquisition si elles vous amènent du monde, mais basculez vos habitués et les recherches Google directes vers la réservation sans commission. C'est là que la marge se récupère.",
      },
      {
        question: "Faites-vous les photos ?",
        answer:
          "Non, je ne suis pas photographe, et c'est un poste qui mérite un pro (ou un smartphone récent bien utilisé, je vous donne les consignes). Mon travail : optimiser techniquement vos photos pour qu'elles soient belles ET rapides à charger.",
      },
    ],
  },
  {
    slug: "coiffeur",
    label: "salon de coiffure",
    h1: "Site internet pour coiffeur à Liège",
    metaTitle: "Site internet pour coiffeur à Liège : rendez-vous en ligne et SEO local",
    metaDescription:
      "Création de sites pour salons de coiffure et barbiers à Liège : prise de rendez-vous en ligne, réduction des no-shows, galerie de réalisations et référencement de quartier. Dès 900 €.",
    intro: [
      "Le réflexe d'un nouveau client qui cherche un coiffeur n'a pas changé depuis des années : Google, « coiffeur + quartier », un œil aux avis, un œil aux photos, et il choisit celui chez qui il peut réserver immédiatement, souvent le soir après la fermeture. Si la réservation passe uniquement par le téléphone aux heures d'ouverture, une partie de cette clientèle file chez le salon d'à côté.",
      "Un site de salon efficace fait trois choses : il montre votre travail (les photos avant/après font la décision), il prend les rendez-vous 24h/24, et il verrouille votre visibilité de quartier sur Google. Le tout sans vous coûter un abonnement mensuel disproportionné.",
    ],
    enjeux: [
      {
        title: "Capter les réservations hors horaires",
        body: "Une grande partie des prises de rendez-vous se fait le soir et le dimanche. La réservation en ligne transforme ces intentions en créneaux remplis au lieu de les perdre.",
      },
      {
        title: "Réduire les no-shows",
        body: "Rappels automatiques par email ou SMS via l'outil de réservation : les rendez-vous oubliés chutent, et votre planning respire.",
      },
      {
        title: "Gagner la bataille du quartier",
        body: "La coiffure est un marché de proximité pure : le pack local Google (les 3 résultats avec la carte) capte l'essentiel des nouveaux clients. Site + fiche Google cohérents = places dans le pack.",
      },
    ],
    features: [
      {
        name: "Prise de rendez-vous en ligne",
        why: "Intégration propre de votre outil existant (Planity, Treatwell, agenda maison) ou solution dédiée : le client réserve en trois clics, à toute heure.",
      },
      {
        name: "Galerie de réalisations",
        why: "Les photos avant/après sont l'argument de vente numéro un du métier : une galerie rapide et bien organisée fait la décision.",
      },
      {
        name: "Tarifs affichés clairement",
        why: "Un client qui connaît les prix avant de venir est un client détendu qui ne discute pas la facture. Les tarifs cachés font fuir.",
      },
      {
        name: "Avis Google mis en avant",
        why: "La preuve sociale du métier : vos meilleurs avis affichés sur le site, et un lien direct pour en laisser un nouveau après la visite.",
      },
      {
        name: "Page par prestation",
        why: "« Balayage Liège », « barbier Liège » : chaque prestation phare mérite sa page pour ressortir sur sa propre recherche.",
      },
    ],
    pricing:
      "Pour un salon, un one-page avec galerie, tarifs et lien de réservation démarre à 900 € ; un site complet avec pages par prestation et réservation intégrée se situe entre 1 200 € et 2 000 €. À comparer aux abonnements « site + agenda » à 60-100 €/mois qui, sur trois ans, coûtent plus cher sans que le site vous appartienne.",
    erreurs: [
      {
        title: "Dépendre à 100 % d'Instagram",
        body: "Instagram montre votre travail à vos abonnés ; il ne capte pas le nouveau client qui cherche « coiffeur + quartier » sur Google. Les deux ensemble, oui ; Instagram seul, non.",
      },
      {
        title: "Le site-annuaire sans réservation",
        body: "Un site qui affiche juste un numéro de téléphone perd les réservations du soir et du week-end, précisément celles des nouveaux clients.",
      },
      {
        title: "Zéro gestion des avis",
        body: "Ne pas demander d'avis (et ne pas répondre à ceux qui existent) laisse votre note stagner pendant que le salon d'en face grimpe. C'est gratuit et ça pèse lourd.",
      },
    ],
    faq: [
      {
        question: "Puis-je garder mon outil de réservation actuel ?",
        answer:
          "Oui : j'intègre proprement Planity, Treatwell ou votre agenda en ligne actuel dans le site. Si vous n'en avez pas encore, je vous aide à choisir en fonction de vos besoins et de votre budget mensuel.",
      },
      {
        question: "Que coûte un site de salon de coiffure ?",
        answer:
          "À partir de 900 € pour un one-page professionnel, 1 200 € à 2 000 € pour un site complet avec pages prestations. Sans abonnement obligatoire : le site vous appartient, seule la maintenance légère (dès 20 €/mois) est optionnelle.",
      },
      {
        question: "Le site peut-il ressortir sur plusieurs quartiers de Liège ?",
        answer:
          "Votre fiche Google est liée à votre adresse physique, donc le pack local privilégie votre quartier réel. Le site, lui, peut ressortir plus largement sur les recherches de prestations (« balayage Liège »). Les deux se travaillent ensemble, sans tricher.",
      },
      {
        question: "En combien de temps le site est-il en ligne ?",
        answer:
          "Un one-page en 1 à 2 semaines, un site complet en 3 à 5 semaines, si vos photos et tarifs sont prêts. Je vous donne un planning ferme au devis.",
      },
    ],
  },
  {
    slug: "institut-de-beaute",
    label: "institut de beauté",
    h1: "Site internet pour institut de beauté à Liège",
    metaTitle: "Site internet pour institut de beauté à Liège : réservation et visibilité",
    metaDescription:
      "Création de sites pour instituts de beauté, onglerie et esthétique à Liège : réservation en ligne, pages par soin, bons cadeaux et référencement local. À partir de 900 €.",
    intro: [
      "L'esthétique est un des secteurs les plus concurrentiels du commerce de proximité liégeois : entre les instituts établis, les indépendantes à domicile et les enseignes, la cliente qui cherche « institut de beauté Liège » ou « manucure + quartier » a l'embarras du choix. Elle choisit en quelques minutes, sur trois critères visibles en ligne : les photos, les avis, et la facilité à réserver.",
      "Votre site doit donc exceller sur ces trois points, et un quatrième qui fait la différence en fin d'année : la vente de bons cadeaux en ligne, qui transforme décembre en meilleur mois de l'année sans un rendez-vous de plus.",
    ],
    enjeux: [
      {
        title: "Réserver sans friction, à toute heure",
        body: "Vos clientes réservent le soir, entre deux obligations : la prise de rendez-vous en ligne capte ces créneaux que le téléphone laisse filer.",
      },
      {
        title: "Rassurer sur l'hygiène et le professionnalisme",
        body: "Photos réelles de l'institut, diplômes et marques utilisées, avis récents : la confiance se construit avant la première visite.",
      },
      {
        title: "Vendre au-delà des rendez-vous",
        body: "Bons cadeaux en ligne avec paiement immédiat, cures et abonnements : le site devient un canal de revenus, pas juste un agenda.",
      },
    ],
    features: [
      {
        name: "Réservation en ligne par soin",
        why: "Chaque soin a sa durée et son prix : la réservation doit les gérer proprement, avec rappels automatiques anti no-show.",
      },
      {
        name: "Pages par famille de soins",
        why: "Épilation, onglerie, soins visage : chaque famille ressort sur ses propres recherches locales et rassure avec ses propres photos et tarifs.",
      },
      {
        name: "Bons cadeaux en ligne",
        why: "Paiement Stripe, bon envoyé par email : le pic de décembre et des fêtes se capte automatiquement, même institut fermé.",
      },
      {
        name: "Avis et avant/après",
        why: "La preuve visuelle et sociale, mise en avant sans surcharge, décide la nouvelle cliente hésitante.",
      },
      {
        name: "SEO local par quartier",
        why: "Fiche Google reliée, données structurées et contenu géolocalisé : l'institut ressort dans le pack local sur son quartier et ses soins phares.",
      },
    ],
    pricing:
      "Un one-page avec soins, tarifs et réservation démarre à 900 € ; un site complet avec pages par famille de soins et bons cadeaux en ligne se situe entre 1 500 € et 2 500 €. Le module bons cadeaux se rentabilise souvent à lui seul dès les premières fêtes de fin d'année.",
    erreurs: [
      {
        title: "La liste de prix sans photos",
        body: "L'esthétique se vend à l'image : une grille tarifaire brute ne convainc personne. Chaque soin phare mérite sa photo réelle.",
      },
      {
        title: "Réservation par message Instagram uniquement",
        body: "Les DM se perdent, ne se rappellent pas automatiquement et ne remplissent pas un agenda. L'outil de réservation existe pour ça.",
      },
      {
        title: "Ignorer les recherches par soin",
        body: "On ne cherche pas « institut de beauté » mais « épilation définitive Liège » ou « manucure gel + quartier » : sans page dédiée par soin, ces recherches vont ailleurs.",
      },
    ],
    faq: [
      {
        question: "Combien coûte un site d'institut de beauté ?",
        answer:
          "À partir de 900 € pour un one-page avec réservation, 1 500 € à 2 500 € pour un site complet avec pages soins et bons cadeaux en ligne. Déductible fiscalement, devis fixe et détaillé avant engagement.",
      },
      {
        question: "Les bons cadeaux en ligne, c'est compliqué à gérer ?",
        answer:
          "Non : la cliente paie en ligne (Stripe), reçoit son bon par email avec un code unique, et vous validez le code lors de la visite. Pas de stock, pas de logistique, et l'argent est encaissé immédiatement.",
      },
      {
        question: "Je débute en indépendante : par quoi commencer ?",
        answer:
          "Un one-page à 900 € avec vos soins, vos tarifs, vos photos et la réservation : c'est suffisant pour exister proprement sur Google dès le lancement. On enrichit ensuite quand l'activité le justifie, sans refaire.",
      },
      {
        question: "Pouvez-vous reprendre mon site Wix ou mon abonnement actuel ?",
        answer:
          "Oui : je récupère vos contenus et je reconstruis proprement, avec un site qui vous appartient. Sur trois ans, un site à vous coûte généralement moins cher que l'abonnement, pour un résultat plus rapide et mieux référencé.",
      },
    ],
  },
  {
    slug: "artisan",
    label: "artisan du bâtiment",
    h1: "Site internet pour artisan à Liège (bâtiment et rénovation)",
    metaTitle: "Site internet pour artisan à Liège : devis, chantiers et SEO local",
    metaDescription:
      "Création de sites pour artisans du bâtiment à Liège : électriciens, plombiers, chauffagistes, menuisiers. Photos de chantiers, demandes de devis qualifiées et référencement local. Dès 900 €.",
    intro: [
      "Électricien, plombier, chauffagiste, menuisier, carreleur : en province de Liège, la demande pour les métiers du bâtiment dépasse l'offre, et pourtant beaucoup d'artisans laissent les plateformes de mise en relation prélever leur marge sur des contacts que Google leur aurait apportés directement. « Plombier Liège », « rénovation salle de bain + commune » : ces recherches à très forte intention se tapent chaque jour.",
      "Un site d'artisan n'a pas besoin d'être sophistiqué, il doit être crédible et efficace : montrer de vrais chantiers, annoncer clairement la zone d'intervention, et transformer la visite en demande de devis en moins d'une minute. C'est exactement ce que je construis, avec le référencement local en fondation.",
    ],
    enjeux: [
      {
        title: "Capter les demandes de devis en direct",
        body: "Chaque contact qui arrive par votre site est un contact sans commission de plateforme et sans concurrence frontale avec trois confrères sur le même lead.",
      },
      {
        title: "Prouver par le chantier",
        body: "Vos réalisations sont votre CV : des photos réelles, organisées par type de travaux, rassurent plus que n'importe quel texte.",
      },
      {
        title: "Couvrir votre vraie zone d'intervention",
        body: "Un artisan rayonne sur 20 à 40 km : le site doit dire clairement où vous intervenez pour ressortir sur les recherches des bonnes communes.",
      },
    ],
    features: [
      {
        name: "Galeries de chantiers par type de travaux",
        why: "Avant/après, organisées par prestation (salle de bain, toiture, électricité...) : le client se projette et vous présélectionne.",
      },
      {
        name: "Formulaire de devis intelligent",
        why: "Quelques questions ciblées (type de travaux, commune, délai) : vous recevez des demandes qualifiées, pas des messages vides.",
      },
      {
        name: "Zone d'intervention explicite",
        why: "Une carte ou une liste claire des communes couvertes, comprise par les visiteurs comme par Google.",
      },
      {
        name: "Avis clients et certifications",
        why: "Labels, agréments (habilitations, certifications) et avis Google : les signaux de confiance du secteur, mis en avant.",
      },
      {
        name: "Pages par prestation phare",
        why: "« Installation pompe à chaleur », « rénovation électrique » : chaque spécialité rentable mérite sa page pour capter sa recherche.",
      },
    ],
    pricing:
      "Un one-page avec chantiers, zone et formulaire de devis démarre à 900 € ; un site complet avec pages par prestation se situe entre 1 200 € et 2 200 €. Un seul chantier signé via le site rembourse généralement l'investissement, qui est en outre déductible.",
    erreurs: [
      {
        title: "Compter uniquement sur les plateformes de leads",
        body: "Les plateformes vendent le même contact à plusieurs artisans et prélèvent leur part. Utile en appoint, ruineux comme canal unique : le site direct inverse le rapport de force.",
      },
      {
        title: "Des photos de banque d'images",
        body: "Le client repère immédiatement le chantier « trop parfait » issu d'une banque d'images. Vos vraies réalisations, même imparfaitement photographiées, convainquent plus.",
      },
      {
        title: "Aucune mention de la zone d'intervention",
        body: "Sans communes citées, Google ne sait pas où vous montrer, et le client ne sait pas si vous vous déplacez chez lui. Deux pertes pour une ligne manquante.",
      },
    ],
    faq: [
      {
        question: "Combien coûte un site d'artisan à Liège ?",
        answer:
          "À partir de 900 € pour un one-page efficace, 1 200 € à 2 200 € pour un site complet avec pages par prestation. Déductible fiscalement : l'effort réel descend souvent sous les 60 % du devis.",
      },
      {
        question: "Je n'ai pas le temps de m'occuper d'un site : qui gère quoi ?",
        answer:
          "Vous fournissez les photos de chantiers et validez les textes que je rédige à partir de notre premier échange ; je m'occupe de tout le reste, mise en ligne comprise. Ensuite, le site vit tout seul, avec une maintenance légère optionnelle.",
      },
      {
        question: "En combien de temps les demandes de devis arrivent-elles ?",
        answer:
          "La fiche Google Business optimisée peut générer des appels en quelques semaines ; le référencement du site s'installe en 2 à 4 mois sur les recherches locales. Je vous donne une estimation honnête par métier et par commune après audit gratuit de la concurrence.",
      },
      {
        question: "Puis-je ajouter mes nouveaux chantiers moi-même ?",
        answer:
          "Oui, c'est prévu : l'ajout d'un chantier (photos + description courte) se fait sans toucher au code. Chaque chantier publié renforce d'ailleurs votre référencement local.",
      },
    ],
  },
  {
    slug: "avocat",
    label: "cabinet d'avocat",
    h1: "Site internet pour avocat à Liège",
    metaTitle: "Site internet pour avocat à Liège : crédibilité, matières et déontologie",
    metaDescription:
      "Création de sites pour avocats et cabinets à Liège : présentation des matières, prise de rendez-vous, respect de la déontologie et référencement sur vos domaines de pratique. Dès 1 200 €.",
    intro: [
      "Le justiciable qui cherche un avocat ne feuillette plus l'annuaire du barreau : il tape « avocat droit du travail Liège » ou « avocat divorce + commune », lit deux ou trois sites et prend contact avec celui qui lui a semblé à la fois compétent et accessible. Pour un cabinet, le site est devenu le premier rendez-vous : il se joue avant même votre premier échange.",
      "Le secteur a ses règles : la communication de l'avocat est encadrée par la déontologie (dignité, loyauté, pas de démarchage ni de comparaison). Bonne nouvelle : un site sobre, informatif et bien référencé sur vos matières coche toutes les cases déontologiques ET commerciales. C'est précisément le style que je pratique.",
    ],
    enjeux: [
      {
        title: "Être trouvé par matière, pas seulement par nom",
        body: "On vous cherche par besoin (« avocat bail Liège », « droit des sociétés ») : chaque matière principale du cabinet mérite sa page claire et pédagogique.",
      },
      {
        title: "Inspirer confiance en 30 secondes",
        body: "Photo professionnelle, parcours, barreau, matières et honoraires expliqués : le justiciable stressé cherche de la clarté, pas du jargon.",
      },
      {
        title: "Faciliter le premier contact",
        body: "Formulaire structuré ou prise de rendez-vous en ligne : abaisser la barrière du premier contact, souvent la plus haute pour le client.",
      },
    ],
    features: [
      {
        name: "Pages par matière",
        why: "Droit familial, pénal, commercial, du travail : chaque matière ressort sur ses propres recherches et rassure avec ses propres explications.",
      },
      {
        name: "Présentation des honoraires",
        why: "Expliquer les modes de facturation (taux horaire, forfait, provision) désamorce la crainte numéro un du justiciable et filtre les demandes hors budget.",
      },
      {
        name: "Prise de rendez-vous ou formulaire qualifié",
        why: "Quelques questions ciblées orientent la demande vers la bonne matière et préparent le premier entretien.",
      },
      {
        name: "Contenu pédagogique (FAQ, articles)",
        why: "Répondre clairement aux questions fréquentes de vos matières installe l'autorité et capte les recherches d'information qui précèdent la prise de contact.",
      },
      {
        name: "Sobriété conforme à la déontologie",
        why: "Design sérieux, informations vérifiables, aucune promesse de résultat : le style qui respecte les règles du barreau est aussi celui qui convertit le mieux.",
      },
    ],
    pricing:
      "Pour un cabinet, comptez 1 200 € à 3 000 € selon le nombre de matières et le contenu pédagogique souhaité. C'est une charge déductible du cabinet, et l'investissement se compare au coût d'un seul dossier apporté par le site.",
    erreurs: [
      {
        title: "Le site carte de visite d'une page sans matières",
        body: "Nom, diplôme, adresse : sans pages par matière, le cabinet est invisible sur toutes les recherches par besoin, c'est-à-dire l'essentiel des recherches.",
      },
      {
        title: "Le jargon juridique non traduit",
        body: "Le justiciable ne cherche pas « responsabilité aquilienne » mais « accident, qui paie ? ». Écrire pour le client, pas pour les confrères.",
      },
      {
        title: "Aucune information sur les honoraires",
        body: "Le silence total sur les coûts nourrit la crainte et retient les prises de contact. Expliquer les modes de facturation suffit, sans afficher de grille.",
      },
    ],
    faq: [
      {
        question: "Un site d'avocat est-il compatible avec la déontologie ?",
        answer:
          "Oui : l'information objective sur le cabinet, les matières et les modes d'honoraires est admise ; le démarchage, les promesses de résultat et la comparaison ne le sont pas. Je construis des sites sobres et factuels qui respectent ce cadre, et votre validation finale fait foi.",
      },
      {
        question: "Combien coûte un site de cabinet d'avocat ?",
        answer:
          "De 1 200 € pour un cabinet individuel avec quelques matières à environ 3 000 € pour un cabinet à plusieurs avocats avec contenu pédagogique développé. Déductible, devis fixe et détaillé.",
      },
      {
        question: "Qui rédige les contenus juridiques ?",
        answer:
          "Vous pour le fond (vous seul maîtrisez votre matière et engagez votre responsabilité), moi pour la forme : structure des pages, clarté pour le non-juriste, optimisation pour les recherches réelles. Le processus est cadré pour vous prendre le moins de temps possible.",
      },
      {
        question: "Peut-on ressortir sur des recherches très concurrentielles ?",
        answer:
          "« Avocat Liège » seul est très disputé ; « avocat + matière + Liège » l'est beaucoup moins et convertit mieux. La stratégie réaliste cible d'abord vos matières fortes, avec un contenu réellement utile, et élargit ensuite.",
      },
    ],
  },
  {
    slug: "kine",
    label: "cabinet de kinésithérapie",
    h1: "Site internet pour kiné à Liège (et professions paramédicales)",
    metaTitle: "Site internet pour kiné à Liège : rendez-vous en ligne et patientèle",
    metaDescription:
      "Création de sites pour kinésithérapeutes, ostéopathes, logopèdes et paramédicaux à Liège : prise de rendez-vous, présentation des spécialités et référencement de proximité. Dès 900 €.",
    intro: [
      "Kiné, ostéo, logopède, podologue : les professions paramédicales liégeoises tournent à l'agenda plein, et pourtant le site web y reste décisif, pour une raison que les praticiens connaissent bien : la patientèle se renouvelle en permanence (déménagements, fins de traitement), et le nouveau patient vous cherche sur Google, souvent avec une douleur précise en tête.",
      "Un site de cabinet efficace répond en quelques secondes aux trois questions du patient : traitez-vous mon problème, où êtes-vous, et comment prendre rendez-vous maintenant. Tout le reste (spécialités, conventionnement, équipe) vient renforcer cette réponse.",
    ],
    enjeux: [
      {
        title: "Ressortir par spécialité et par motif",
        body: "« Kiné du sport Liège », « kiné vestibulaire », « ostéopathe nourrisson » : les recherches par spécialité sont moins disputées et amènent les patients qui vous correspondent.",
      },
      {
        title: "Prendre les rendez-vous sans téléphone",
        body: "Entre deux patients, le téléphone sonne dans le vide : la prise de rendez-vous en ligne remplit l'agenda sans interrompre les soins.",
      },
      {
        title: "Rassurer avant la première séance",
        body: "Déroulement d'une séance, tarifs et conventionnement, remboursements : expliquer clairement réduit les non-venues et les malentendus.",
      },
    ],
    features: [
      {
        name: "Prise de rendez-vous en ligne",
        why: "Intégration de votre solution existante (Rosa, Doctoranytime, agenda maison) : le patient réserve à toute heure, l'agenda se remplit seul.",
      },
      {
        name: "Pages par spécialité",
        why: "Chaque spécialité (sport, respiratoire, pédiatrique, périnéale...) ressort sur ses propres recherches et pré-qualifie le patient.",
      },
      {
        name: "Informations pratiques complètes",
        why: "Tarifs, conventionnement, remboursement mutuelle, accès et parking : les questions que chaque nouveau patient pose, réglées avant l'appel.",
      },
      {
        name: "Présentation de l'équipe",
        why: "Photos et parcours des praticiens : on choisit un soignant, la dimension humaine compte autant que la technique.",
      },
      {
        name: "Données structurées santé",
        why: "Le balisage Schema.org adapté aide Google à comprendre vos spécialités et votre zone, et améliore l'affichage dans les résultats.",
      },
    ],
    pricing:
      "Un site de cabinet démarre à 900 € en one-page (praticien solo) et se situe entre 1 200 € et 2 200 € pour un cabinet de groupe avec pages par spécialité et prise de rendez-vous intégrée. Déductible comme frais professionnels.",
    erreurs: [
      {
        title: "Compter uniquement sur les plateformes de rendez-vous",
        body: "Les annuaires médicaux vous listent parmi vos concurrents directs et gardent la relation. Votre site capte le patient qui vous cherche VOUS, et la plateforme reste un canal d'appoint.",
      },
      {
        title: "Rester muet sur les tarifs et le conventionnement",
        body: "C'est la première source d'appels inutiles et de malentendus. Une page claire épargne du temps à tout le cabinet.",
      },
      {
        title: "Un site sans mobile",
        body: "Le patient cherche souvent avec sa douleur, depuis son téléphone : un site lent ou illisible sur mobile le renvoie au praticien suivant de la liste.",
      },
    ],
    faq: [
      {
        question: "Combien coûte un site pour un cabinet paramédical ?",
        answer:
          "À partir de 900 € pour un praticien solo, 1 200 € à 2 200 € pour un cabinet de groupe avec spécialités et rendez-vous en ligne. Déductible fiscalement, devis fixe avant engagement.",
      },
      {
        question: "Puis-je garder Rosa ou mon agenda actuel ?",
        answer:
          "Oui : j'intègre proprement votre solution de prise de rendez-vous existante. Le site amène le patient, votre outil gère l'agenda, chacun son rôle.",
      },
      {
        question: "Un site est-il compatible avec la déontologie paramédicale ?",
        answer:
          "Oui : l'information factuelle sur le cabinet, les spécialités et les modalités pratiques est parfaitement admise. Pas de promesses thérapeutiques ni de comparaisons : un site sobre et informatif respecte le cadre et convertit mieux.",
      },
      {
        question: "Le référencement local prend combien de temps pour un cabinet ?",
        answer:
          "La fiche Google optimisée produit ses effets en quelques semaines ; les pages spécialités s'installent en 2 à 4 mois. Un cabinet avec une spécialité différenciante peut ressortir très vite sur sa niche.",
      },
    ],
  },
  {
    slug: "garage",
    label: "garage automobile",
    h1: "Site internet pour garage à Liège",
    metaTitle: "Site internet pour garage à Liège : rendez-vous atelier et occasions",
    metaDescription:
      "Création de sites pour garages et carrosseries à Liège : prise de rendez-vous atelier, vitrine des véhicules d'occasion, avis clients et référencement local. Dès 1 200 €.",
    intro: [
      "Entretien, pneus, carrosserie, occasions : le garage indépendant liégeois se bat sur deux fronts numériques à la fois. Face aux concessions et aux chaînes pour l'atelier (« garage + commune », « entretien voiture Liège »), et face aux plateformes d'annonces pour la vente de véhicules. Sur les deux fronts, un bon site change le rapport de force.",
      "Côté atelier, il capte les rendez-vous des automobilistes du coin qui cherchent un garagiste de confiance. Côté vente, il présente vos occasions sur VOTRE vitrine, avec vos photos et votre discours, au lieu de noyer vos annonces au milieu de milliers d'autres.",
    ],
    enjeux: [
      {
        title: "Remplir l'atelier avec des rendez-vous qualifiés",
        body: "Demande de rendez-vous en ligne avec type d'intervention et véhicule : le planning se remplit et les appels au comptoir diminuent.",
      },
      {
        title: "Vendre vos occasions en direct",
        body: "Une vitrine véhicules propre, avec photos, fiches détaillées et formulaire de contact, complète les plateformes et capte l'acheteur local qui vous fait déjà confiance.",
      },
      {
        title: "Construire la confiance de proximité",
        body: "Avis Google, photos réelles de l'atelier, équipe et marques travaillées : le garagiste de confiance se choisit d'abord en ligne.",
      },
    ],
    features: [
      {
        name: "Prise de rendez-vous atelier",
        why: "Type d'intervention, véhicule, disponibilités : la demande arrive qualifiée et se confirme en un appel au lieu de trois.",
      },
      {
        name: "Vitrine des véhicules d'occasion",
        why: "Fiches complètes (photos, kilométrage, historique, prix), faciles à ajouter et retirer : votre stock visible sur votre propre canal.",
      },
      {
        name: "Pages par service",
        why: "Entretien, pneus, carrosserie, climatisation : chaque service ressort sur sa recherche locale propre.",
      },
      {
        name: "Avis clients mis en avant",
        why: "Le secteur souffre d'un déficit de confiance : vos avis réels, affichés et alimentés en continu, sont votre meilleur argument.",
      },
      {
        name: "Infos pratiques irréprochables",
        why: "Horaires, adresse, téléphone cliquable, itinéraire : cohérents avec la fiche Google, accessibles en une seconde sur mobile.",
      },
    ],
    pricing:
      "Un site de garage avec services et rendez-vous démarre à 1 200 € ; avec vitrine d'occasions gérée par vous-même, comptez 1 800 € à 3 000 € selon le volume. Déductible, et vite rentabilisé : quelques entretiens ou une seule vente attribuables au site couvrent l'investissement.",
    erreurs: [
      {
        title: "Dépendre à 100 % des plateformes d'annonces",
        body: "Vos occasions y sont noyées parmi des milliers, et l'acheteur y compare au prix seul. Votre vitrine à vous vend aussi la confiance et le service après-vente.",
      },
      {
        title: "Aucune info sur les prix",
        body: "Sans fourchettes indicatives (entretien, pneus...), l'automobiliste imagine le pire et va chez la chaîne qui affiche ses prix. Des fourchettes honnêtes suffisent.",
      },
      {
        title: "Des avis ignorés",
        body: "Ne pas répondre aux avis, surtout négatifs, laisse le doute s'installer. Une réponse professionnelle à un avis mécontent rassure plus qu'une note parfaite.",
      },
    ],
    faq: [
      {
        question: "Combien coûte un site de garage à Liège ?",
        answer:
          "À partir de 1 200 € pour un site services + rendez-vous, 1 800 € à 3 000 € avec la vitrine d'occasions que vous gérez vous-même. Déductible fiscalement, devis fixe et détaillé.",
      },
      {
        question: "Puis-je gérer mes annonces d'occasions moi-même ?",
        answer:
          "Oui, c'est conçu pour : ajout d'un véhicule avec photos et caractéristiques en quelques minutes, sans toucher au code. Je vous forme à la livraison.",
      },
      {
        question: "Le site peut-il remplacer les plateformes d'annonces ?",
        answer:
          "Les compléter d'abord : les plateformes restent un canal de volume. Mais chaque acheteur local qui vous trouve en direct achète sans comparaison frontale, et vos clients atelier deviennent vos premiers acheteurs d'occasions.",
      },
      {
        question: "Combien de temps pour être visible sur ma commune ?",
        answer:
          "La fiche Google optimisée produit des appels en quelques semaines ; le site s'installe sur « garage + votre commune » en 2 à 4 mois. L'audit gratuit initial vous dit où en sont vos concurrents directs.",
      },
    ],
  },
  {
    slug: "agence-immobiliere",
    label: "agence immobilière",
    h1: "Site internet pour agence immobilière à Liège",
    metaTitle: "Site internet pour agence immobilière à Liège : biens, estimation et mandats",
    metaDescription:
      "Création de sites pour agences immobilières à Liège : vitrine des biens, demande d'estimation en ligne, pages quartiers et référencement local. L'outil qui rentre des mandats.",
    intro: [
      "Pour une agence immobilière liégeoise, le paradoxe est connu : les portails (Immoweb en tête) sont incontournables pour diffuser les biens, mais ils mettent votre vitrine au milieu de celle de tous vos concurrents. Le site de l'agence joue un autre match, plus rentable : rentrer des mandats. Le propriétaire qui hésite à vendre tape « estimation maison Liège » ou « agence immobilière + quartier », et c'est là que tout se joue.",
      "Je construis des sites d'agence pensés pour ce match : une image irréprochable, une demande d'estimation qui convertit, des pages quartiers qui installent votre autorité locale, et vos biens présentés mieux que sur n'importe quel portail.",
    ],
    enjeux: [
      {
        title: "Rentrer des mandats via l'estimation",
        body: "La demande d'estimation en ligne est le meilleur aimant à mandats : un formulaire bien conçu transforme le propriétaire curieux en rendez-vous d'estimation.",
      },
      {
        title: "Asseoir l'autorité de quartier",
        body: "Des pages par quartier ou commune, avec votre lecture du marché local, vous positionnent comme LA référence de la zone, sur Google comme dans les esprits.",
      },
      {
        title: "Présenter les biens à votre image",
        body: "Grandes photos, visites virtuelles, fiches soignées : sur votre site, le bien (et l'agence) se présente sans la mise en page imposée des portails.",
      },
    ],
    features: [
      {
        name: "Demande d'estimation en ligne",
        why: "Le formulaire structuré (type de bien, localisation, projet) alimente votre pipeline de mandats : c'est la page la plus rentable du site.",
      },
      {
        name: "Vitrine des biens",
        why: "Fiches complètes et rapides, gérables par l'équipe, avec alertes email pour les acquéreurs en recherche.",
      },
      {
        name: "Pages quartiers",
        why: "« Vendre à Cointe », « marché immobilier Outremeuse » : chaque zone forte de l'agence mérite sa page d'expertise locale.",
      },
      {
        name: "Preuves : ventes récentes et avis",
        why: "Biens vendus, délais moyens, avis de vendeurs : les chiffres qui décident un propriétaire à vous confier son bien.",
      },
      {
        name: "Présentation de l'équipe",
        why: "L'immobilier est un métier de confiance personnelle : visages, parcours et spécialités de l'équipe comptent dans la prise de contact.",
      },
    ],
    pricing:
      "Un site d'agence avec estimation et vitrine de biens se situe entre 2 500 € et 5 000 € selon le volume et les intégrations souhaitées (flux vers les portails, CRM). Un seul mandat rentré via le site couvre largement l'investissement, qui est déductible.",
    erreurs: [
      {
        title: "Être un doublon appauvri d'Immoweb",
        body: "Si votre site fait moins bien que votre page portail, il dessert l'agence. Sa mission n'est pas de dupliquer les annonces mais de rentrer des mandats et d'installer la marque.",
      },
      {
        title: "Cacher l'équipe",
        body: "Un propriétaire confie son bien à des personnes, pas à un logo. Les pages équipe anonymes ou vides coûtent des mandats.",
      },
      {
        title: "Négliger les pages locales",
        body: "Sans contenu de quartier, l'agence est invisible sur les recherches « agence + quartier » et « estimation + commune », exactement celles des futurs vendeurs.",
      },
    ],
    faq: [
      {
        question: "Combien coûte un site d'agence immobilière ?",
        answer:
          "Entre 2 500 € et 5 000 € selon la vitrine de biens, les intégrations (portails, CRM) et le nombre de pages locales. Devis précis après un premier échange sur vos outils actuels.",
      },
      {
        question: "Le site peut-il se synchroniser avec nos outils et les portails ?",
        answer:
          "Selon vos outils, oui : c'est l'intérêt du sur mesure. On étudie votre flux actuel (logiciel métier, diffusion portails) au premier rendez-vous et je vous dis précisément ce qui est intégrable.",
      },
      {
        question: "Pourquoi des pages quartiers plutôt qu'une page « nos zones » ?",
        answer:
          "Parce que le propriétaire cherche SA commune : une page riche par zone forte (marché local, biens vendus, contact dédié) ressort sur ces recherches et convertit. Dix lignes génériques ne le font pas.",
      },
      {
        question: "L'estimation en ligne donne-t-elle un prix automatique ?",
        answer:
          "Je le déconseille : un chiffre automatique anonyme fait fuir ou déçoit. Le formulaire qualifie le bien et le projet, et l'estimation reste votre expertise, délivrée en rendez-vous, là où le mandat se signe.",
      },
    ],
  },
  {
    slug: "gite",
    label: "gîte et hébergement touristique",
    h1: "Site internet pour gîte et hébergement touristique en province de Liège",
    metaTitle: "Site internet pour gîte : réservation directe sans commission",
    metaDescription:
      "Création de sites pour gîtes, chambres d'hôtes et hébergements touristiques en province de Liège : réservation directe avec paiement en ligne, calendrier et fidélisation, sans commission de plateforme.",
    intro: [
      "Des Fagnes à la vallée de l'Ourthe, la province de Liège regorge d'hébergements touristiques qui reversent 15 à 25 % de chaque nuitée aux plateformes de réservation. Sur une saison, ces commissions représentent souvent plusieurs milliers d'euros, prélevés sur des clients dont une partie serait venue en direct si le site du gîte le permettait.",
      "C'est le sujet que je connais le mieux : j'ai conçu et développé BluePortel, un site de réservation directe d'hébergements avec calendrier, comparaison des logements et paiement en ligne, précisément pour rendre leurs marges aux propriétaires. Je reproduis cette mécanique, adaptée à votre hébergement.",
    ],
    enjeux: [
      {
        title: "Convertir les clients satisfaits en réservations directes",
        body: "Le levier le plus rentable : le client qui a aimé son séjour rebooke en direct si votre site le permet, et la commission économisée tombe dans votre marge.",
      },
      {
        title: "Capter les recherches Google en direct",
        body: "« Gîte Spa », « chambre d'hôtes Ourthe » : ces recherches peuvent arriver chez vous plutôt que sur une plateforme qui revendra le clic à la commission.",
      },
      {
        title: "Vendre le séjour, pas seulement le logement",
        body: "Votre site raconte ce que les plateformes standardisent : la région, les activités, votre accueil. C'est ce qui différencie et fidélise.",
      },
    ],
    features: [
      {
        name: "Réservation directe avec calendrier",
        why: "Disponibilités en temps réel, acompte ou paiement complet via Stripe : le client réserve en trois clics, sans intermédiaire.",
      },
      {
        name: "Galeries photos immersives",
        why: "Le séjour s'achète aux photos : grandes, vraies et rapides à charger, pièce par pièce et saison par saison.",
      },
      {
        name: "Pages région et activités",
        why: "Balades, restaurants, événements : le contenu local aide vos hôtes ET votre référencement sur les recherches de destination.",
      },
      {
        name: "Multilingue prêt à l'emploi",
        why: "Clientèle flamande, néerlandaise et allemande : la structure prévoit les langues dès le départ, à activer quand vous voulez.",
      },
      {
        name: "Avis et témoignages",
        why: "Vos meilleurs avis (plateformes comprises) rapatriés sur votre site, là où ils convertissent pour vous à 100 %.",
      },
    ],
    pricing:
      "Un site vitrine d'hébergement démarre à 1 200 € ; avec réservation directe et paiement en ligne, comptez 2 000 € à 3 500 € selon le nombre de logements. À mettre en face des commissions : à 20 % sur des nuitées à 120 €, le site se rembourse en quelques dizaines de réservations directes.",
    erreurs: [
      {
        title: "Le site vitrine sans réservation",
        body: "S'il faut envoyer un email et attendre une réponse pour réserver, le client retourne sur la plateforme. La réservation directe est LE cœur du site d'hébergement.",
      },
      {
        title: "Des photos qui datent de l'ouverture",
        body: "Le client compare vos photos à celles, récentes et léchées, des plateformes. Des photos actuelles et lumineuses ne sont pas un luxe, c'est l'argument de vente.",
      },
      {
        title: "Aucun travail de fidélisation",
        body: "Laisser partir un client satisfait sans lui donner une raison de revenir en direct (carte, email, petit avantage direct) : c'est la commission de sa prochaine réservation qui s'envole.",
      },
    ],
    faq: [
      {
        question: "Que coûte un site de gîte avec réservation directe ?",
        answer:
          "De 2 000 € à 3 500 € selon le nombre de logements et les options (acompte ou paiement complet, multilingue). Un site vitrine simple sans réservation démarre à 1 200 €. Déductible, devis fixe.",
      },
      {
        question: "Comment éviter les doubles réservations avec les plateformes ?",
        answer:
          "Par la synchronisation des calendriers (iCal) entre votre site et vos annonces plateformes : une réservation d'un côté bloque les dates de l'autre. C'est prévu dans la mise en place.",
      },
      {
        question: "Ai-je un exemple concret de ce que vous avez construit ?",
        answer:
          "Oui : BluePortel, visible dans mes projets, un site de réservation directe de deux hébergements avec galeries, comparaison, tarifs et réservation en ligne. C'est exactement la mécanique que j'adapte à votre gîte.",
      },
      {
        question: "Faut-il quitter Booking et Airbnb ?",
        answer:
          "Non : gardez-les comme canal d'acquisition. La stratégie gagnante est mixte : les plateformes amènent le premier séjour, votre site capte les suivants et les recherches directes, sans commission.",
      },
    ],
  },
  {
    slug: "asbl",
    label: "ASBL et association",
    h1: "Site internet pour ASBL à Liège",
    metaTitle: "Site internet pour ASBL à Liège : visibilité, membres et subsides",
    metaDescription:
      "Création de sites pour ASBL et associations à Liège : présenter vos actions, recruter membres et bénévoles, crédibiliser vos dossiers de subsides. Des formules adaptées aux budgets associatifs.",
    intro: [
      "Une ASBL liégeoise vit de trois ressources : ses membres et bénévoles, ses partenaires et pouvoirs subsidiants, et la visibilité de ses actions. Les trois passent aujourd'hui par le web : le bénévole potentiel vous googlise avant de s'engager, et un dossier de subside s'appuie toujours mieux sur une présence en ligne propre qui documente vos activités.",
      "Le budget associatif étant ce qu'il est, je propose aux ASBL des formules sobres et efficaces : un site clair qui présente la mission, montre les actions en photos, publie l'agenda et facilite l'adhésion ou le don, sans frais superflus ni abonnement disproportionné.",
    ],
    enjeux: [
      {
        title: "Crédibiliser l'association",
        body: "Pouvoirs subsidiants, partenaires, presse locale : tous vérifient votre site. Une présence propre et à jour renforce chaque dossier et chaque demande.",
      },
      {
        title: "Recruter membres et bénévoles",
        body: "Expliquer concrètement qui vous êtes, ce que vous faites et comment aider : le site transforme la sympathie en engagement.",
      },
      {
        title: "Faire vivre les activités",
        body: "Agenda, photos des événements, inscriptions en ligne : le site devient le point de ralliement de la communauté.",
      },
    ],
    features: [
      {
        name: "Présentation claire de la mission",
        why: "En une page : qui vous êtes, pour qui, avec quels résultats concrets. C'est la base de tout dossier et de tout engagement.",
      },
      {
        name: "Agenda et inscriptions",
        why: "Événements, stages, activités : l'inscription en ligne simplifie la vie des participants et des organisateurs.",
      },
      {
        name: "Adhésion et dons en ligne",
        why: "Cotisation ou don par paiement en ligne (Stripe) : moins de friction, plus de soutiens.",
      },
      {
        name: "Galeries d'actions",
        why: "Les photos de vos activités prouvent l'impact mieux que n'importe quel rapport, pour le public comme pour les subsidiants.",
      },
      {
        name: "Espace documents",
        why: "Statuts, rapports d'activité, PV accessibles : la transparence qui rassure membres et partenaires.",
      },
    ],
    pricing:
      "Formule associative : one-page complet dès 900 €, site avec agenda et inscriptions entre 1 200 € et 1 800 €. Les frais récurrents restent minimes (hébergement léger, maintenance dès 20 €/mois), un critère important pour un budget d'ASBL.",
    erreurs: [
      {
        title: "La page Facebook comme seul site",
        body: "Utile pour l'animation, insuffisante pour la crédibilité : un subsidiant ou un journaliste qui ne trouve qu'un groupe Facebook classe le dossier différemment.",
      },
      {
        title: "Le site jamais mis à jour",
        body: "Un agenda qui affiche des événements d'il y a deux ans dessert plus qu'il ne sert. Le site doit être simple à tenir à jour par les bénévoles, c'est un critère de conception.",
      },
      {
        title: "Le site géré par un seul bénévole irremplaçable",
        body: "Quand la personne part, le site meurt avec ses accès. Je documente tout et forme plusieurs personnes : la continuité fait partie de la livraison.",
      },
    ],
    faq: [
      {
        question: "Quel budget pour un site d'ASBL ?",
        answer:
          "Dès 900 € pour un one-page complet, 1 200 € à 1 800 € avec agenda et inscriptions en ligne. Les coûts récurrents sont réduits au minimum, et le devis est pensé pour passer en conseil d'administration sans surprise.",
      },
      {
        question: "Les bénévoles pourront-ils mettre à jour le site ?",
        answer:
          "Oui, c'est un critère de conception : agenda, actualités et photos se mettent à jour simplement, et je forme plusieurs personnes à la livraison pour assurer la continuité.",
      },
      {
        question: "Peut-on collecter des dons ou cotisations en ligne ?",
        answer:
          "Oui, via un paiement en ligne simple (Stripe) : don libre, cotisation annuelle ou inscription payante à un événement. Les fonds arrivent directement sur le compte de l'ASBL.",
      },
      {
        question: "Existe-t-il des aides pour financer le site d'une ASBL ?",
        answer:
          "Selon votre secteur et votre commune, certains appels à projets et subsides de fonctionnement peuvent couvrir des frais de communication. Renseignez-vous auprès de votre pouvoir subsidiant habituel ; le site documenté que je livre s'intègre bien dans ces dossiers.",
      },
    ],
  },
];

export function getMetier(slug: string): Metier | undefined {
  return metiers.find((m) => m.slug === slug);
}
