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

// Intention mixte info/transactionnelle : « refonte site internet »,
// « refonte site web seo », « moderniser son site sans perdre référencement ».
export const refonteSiteInternetSeo: Post = {
  slug: "refonte-site-internet-seo",
  title:
    "Refonte de site internet : moderniser sans perdre son référencement",
  description:
    "Quand refondre son site, comment budgéter, et surtout comment ne pas perdre ses positions Google : redirections 301, conservation du contenu, checklist de migration complète. Le guide de la refonte réussie en 2026.",
  date: "2026-07-06",
  readingTime: "15 min",
  tags: ["Refonte", "SEO", "Migration", "Site web"],
  faq: [
    {
      question: "Une refonte de site fait-elle perdre le référencement ?",
      answer:
        "Une refonte mal menée, oui, et parfois brutalement : URL changées sans redirections, contenus supprimés, balises perdues. Une refonte dans les règles (redirections 301 exhaustives, contenu conservé ou amélioré, données structurées maintenues) préserve les positions et les améliore souvent, grâce au gain de vitesse et de qualité technique.",
    },
    {
      question: "Quand faut-il refondre son site plutôt que le retoucher ?",
      answer:
        "Trois signaux justifient la refonte complète : un site non adapté au mobile, des Core Web Vitals durablement dans le rouge malgré les optimisations, et une technologie abandonnée ou impossible à maintenir. Si le site est techniquement sain mais visuellement daté, un relooking suffit parfois, pour un budget bien moindre.",
    },
    {
      question: "Combien coûte une refonte de site web ?",
      answer:
        "Une refonte complète coûte généralement entre 80 et 120 % du prix d'un site neuf équivalent : on économise sur la réflexion initiale (le contenu et la structure existent) mais on ajoute le travail de migration et de redirections. Comptez à partir de 900 € chez un indépendant pour un petit site vitrine, davantage si le contenu est volumineux.",
    },
    {
      question: "Combien de temps dure une refonte ?",
      answer:
        "Comptez 4 à 8 semaines pour un site vitrine : le déroulé d'un site neuf, plus la phase de migration (inventaire des URL, redirections, vérifications post-lancement). Les semaines qui suivent la mise en ligne demandent une surveillance de la Search Console pour corriger les erreurs 404 résiduelles.",
    },
    {
      question: "Faut-il garder son ancien nom de domaine lors d'une refonte ?",
      answer:
        "Oui, sauf excellente raison. Votre domaine accumule de l'ancienneté et des liens entrants qui portent votre référencement. Si un changement de domaine s'impose (changement de nom commercial), il se gère avec des redirections domaine à domaine et une déclaration dans la Search Console, mais il coûte toujours un peu de visibilité temporaire.",
    },
  ],
  Body: () => (
    <>
      <TLDR>
        <p>
          Une refonte réussie repose sur une règle d&apos;or : chaque ancienne
          URL doit mener quelque part. L&apos;inventaire complet des pages
          existantes et les <Strong>redirections 301</Strong> exhaustives sont
          ce qui sépare une refonte qui booste le référencement d&apos;une
          refonte qui le détruit.
        </p>
        <p>
          Refondez pour de bonnes raisons (mobile, vitesse, technologie en fin
          de vie), gardez votre nom de domaine et vos contenus qui rankent, et
          budgétez 80 à 120 % du prix d&apos;un site neuf équivalent.
        </p>
      </TLDR>

      <Toc
        items={[
          { id: "signaux", label: "Les signaux qui justifient une refonte" },
          { id: "risque", label: "Pourquoi une refonte peut tuer un référencement" },
          { id: "regles", label: "Les 6 règles de la migration SEO" },
          { id: "checklist", label: "La checklist complète, phase par phase" },
          { id: "budget", label: "Budget et délais réalistes" },
          { id: "apres", label: "Les 90 jours après la mise en ligne" },
          { id: "conclusion", label: "En résumé" },
          { id: "sources", label: "Sources" },
        ]}
      />

      <P>
        La refonte est le projet web le plus risqué qui soit, et c&apos;est
        rarement dit : contrairement à une création, vous avez quelque chose à
        perdre. Des positions Google construites pendant des années peuvent
        disparaître en une mise en ligne bâclée. J&apos;ai vu des entreprises
        perdre la moitié de leur trafic après une « modernisation » qui avait
        pourtant l&apos;air réussie à l&apos;écran. Ce guide couvre les deux
        questions dans l&apos;ordre : faut-il refondre, et comment refondre
        sans rien casser.
      </P>

      <H2 id="signaux">Les signaux qui justifient une refonte</H2>
      <H3>Les signaux techniques (les vrais déclencheurs)</H3>
      <UL>
        <LI>
          <Strong>Le site n&apos;est pas utilisable sur mobile.</Strong> Plus
          de la moitié des visites se font sur téléphone, et Google indexe
          d&apos;abord la version mobile. Un site non responsive perd sur les
          deux tableaux.
        </LI>
        <LI>
          <Strong>Les Core Web Vitals sont durablement au rouge.</Strong> Si
          les optimisations de surface (cache, compression) ne suffisent plus,
          le problème est structurel et la refonte est le seul remède.
        </LI>
        <LI>
          <Strong>La technologie est en fin de vie.</Strong> CMS abandonné,
          version impossible à mettre à jour, prestataire d&apos;origine
          disparu avec les accès : chaque mois d&apos;attente aggrave le
          risque de sécurité.
        </LI>
      </UL>
      <H3>Les signaux business</H3>
      <UL>
        <LI>
          Le site ne reflète plus votre activité réelle (services, équipe,
          positionnement).
        </LI>
        <LI>
          Vos concurrents directs sont passés devant, en image comme en
          positions Google.
        </LI>
        <LI>
          Le site ne génère ni contact ni vente alors que le trafic existe :
          problème de conversion, pas de visibilité.
        </LI>
      </UL>
      <Callout>
        <Strong>À retenir :</Strong> « le design est daté » seul ne justifie
        pas toujours une refonte complète. Si la technique est saine, un
        relooking (nouveau design sur la même base) coûte nettement moins
        cher. Faites diagnostiquer avant de décider : un devis de refonte
        sans audit de l&apos;existant est un signal d&apos;alarme.
      </Callout>

      <H2 id="risque">Pourquoi une refonte peut tuer un référencement</H2>
      <P>
        Votre référencement actuel repose sur trois actifs invisibles : vos
        URL (chacune a accumulé de l&apos;historique et des liens), vos
        contenus (chaque page qui ranke répond à une requête précise) et
        votre structure (le maillage que Google a appris à parcourir). Une
        refonte naïve casse les trois d&apos;un coup : nouvelles URL sans
        redirections, textes réécrits ou supprimés, navigation réorganisée.
        Google redécouvre alors un site inconnu à la place d&apos;un site
        qu&apos;il connaissait : les positions repartent de zéro.
      </P>
      <P>
        La bonne nouvelle : chacun de ces trois actifs se préserve avec de la
        méthode. C&apos;est tout l&apos;objet des règles qui suivent.
      </P>

      <H2 id="regles">Les 6 règles de la migration SEO</H2>
      <UL>
        <LI>
          <Strong>1. Inventoriez tout avant de toucher à quoi que ce soit.</Strong>{" "}
          Exportez la liste complète des URL existantes (via la Search
          Console, le sitemap et un crawler). On ne protège que ce qu&apos;on
          a recensé.
        </LI>
        <LI>
          <Strong>2. Identifiez vos pages qui performent.</Strong> Lesquelles
          reçoivent du trafic organique ? Lesquelles ont des liens entrants ?
          Ces pages-là se migrent avec un soin particulier : contenu conservé
          ou enrichi, jamais amputé.
        </LI>
        <LI>
          <Strong>3. Redirigez chaque ancienne URL en 301.</Strong> Vers son
          équivalent exact sur le nouveau site, pas vers la page
          d&apos;accueil en vrac (Google traite les redirections massives vers
          l&apos;accueil comme des pages supprimées). C&apos;est le cœur de la
          migration.
        </LI>
        <LI>
          <Strong>4. Conservez les fondations SEO.</Strong> Balises titres et
          descriptions des pages qui rankent, données structurées, sitemap
          soumis dès la mise en ligne.
        </LI>
        <LI>
          <Strong>5. Ne changez qu&apos;une chose à la fois si possible.</Strong>{" "}
          Refonte plus changement de domaine plus restructuration complète du
          contenu en même temps : c&apos;est la recette du diagnostic
          impossible si le trafic chute.
        </LI>
        <LI>
          <Strong>6. Gardez l&apos;ancien site accessible en interne</Strong>{" "}
          (copie de sauvegarde) : pour vérifier un contenu, récupérer un
          texte, comparer une page en cas de doute.
        </LI>
      </UL>

      <H2 id="checklist">La checklist complète, phase par phase</H2>
      <Table
        head={["Phase", "Actions clés", "Livrable"]}
        rows={[
          [
            <Strong key="1">Avant (audit)</Strong>,
            "Inventaire des URL, export Search Console, liste des pages à trafic et à liens",
            "Le fichier de mapping ancien vers nouveau",
          ],
          [
            <Strong key="2">Pendant (construction)</Strong>,
            "Nouveau site sur URL de test (non indexée), migration des contenus, balises et données structurées",
            "Un site complet prêt à basculer",
          ],
          [
            <Strong key="3">Bascule (jour J)</Strong>,
            "Mise en production, activation des redirections 301, nouveau sitemap soumis, tests des parcours clés",
            "Le site en ligne, zéro 404 sur les anciennes URL",
          ],
          [
            <Strong key="4">Après (90 jours)</Strong>,
            "Surveillance Search Console (404, couverture), correction des redirections manquées, suivi des positions",
            "Un trafic stable ou en hausse",
          ],
        ]}
      />

      <H2 id="budget">Budget et délais réalistes</H2>
      <P>
        Une refonte coûte généralement entre 80 et 120 % du prix d&apos;un
        site neuf équivalent : on économise la réflexion de départ (structure
        et contenus existent) mais on ajoute l&apos;audit, la migration et les
        redirections. Les fourchettes du marché liégeois sont détaillées dans{" "}
        <A href="/blog/prix-site-web-liege">le guide des prix</A> ; chez moi,
        une refonte <A href="/developpeur-web-liege">démarre à 900 €</A> pour
        un petit site vitrine. Côté calendrier, comptez 4 à 8 semaines, soit
        le déroulé d&apos;
        <A href="/blog/delai-creation-site-web">un site neuf</A> plus la
        phase de migration.
      </P>
      <P>
        C&apos;est aussi le bon moment pour poser la question de la
        technologie : une refonte est l&apos;occasion unique de sortir
        d&apos;un CMS qui vous coûte en maintenance, comme comparé dans{" "}
        <A href="/blog/wordpress-ou-site-sur-mesure">
          WordPress ou site sur mesure
        </A>
        . Et si le projet est structurant, l&apos;accompagnement peut être
        partiellement subventionné en Wallonie via{" "}
        <A href="/blog/subsides-site-web-wallonie">les chèques-entreprises</A>.
      </P>

      <H2 id="apres">Les 90 jours après la mise en ligne</H2>
      <P>
        La refonte ne s&apos;arrête pas au jour J. Pendant les premières
        semaines, Google recrawle le site et suit les redirections : des
        fluctuations de positions sont normales pendant 2 à 6 semaines. Le
        travail de cette période :
      </P>
      <UL>
        <LI>
          Surveiller les <Strong>erreurs 404</Strong> dans la Search Console
          chaque semaine, et rediriger ce qui a été oublié.
        </LI>
        <LI>
          Vérifier que les <Strong>pages stratégiques</Strong> sont bien
          indexées (inspection d&apos;URL).
        </LI>
        <LI>
          Comparer les <Strong>positions et le trafic</Strong> avec la
          période d&apos;avant refonte, à requête égale.
        </LI>
        <LI>
          Profiter de l&apos;élan : la vitesse gagnée et la structure propre
          sont le moment idéal pour pousser le{" "}
          <A href="/blog/referencement-local-liege">
            plan d&apos;action SEO local
          </A>
          .
        </LI>
      </UL>

      <H2 id="conclusion">En résumé</H2>
      <P>
        Refondez pour de vraies raisons (mobile, vitesse, technologie), pas
        seulement pour l&apos;esthétique. Inventoriez tout, redirigez tout,
        conservez ce qui ranke, et surveillez les 90 jours qui suivent. Menée
        ainsi, une refonte ne fait pas perdre le référencement : elle le
        renforce, parce que Google récompense précisément ce que la refonte
        apporte, la vitesse et la qualité technique.
      </P>
      <P>
        Votre site mérite un diagnostic avant décision ? Envoyez-moi son
        adresse via <A href="/contact">le formulaire de contact</A> : je vous
        dis gratuitement si une refonte se justifie, ou si des optimisations
        ciblées suffisent.
      </P>

      <H2 id="sources">Sources</H2>
      <UL>
        <LI>
          <A href="https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes">
            Google Search Central, migrer un site avec changement d&apos;URL
          </A>{" "}
          : la documentation officielle des redirections et migrations.
        </LI>
        <LI>
          <A href="https://developers.google.com/search/docs/appearance/core-web-vitals">
            Google, Core Web Vitals
          </A>{" "}
          : les seuils de performance pris en compte par la recherche.
        </LI>
      </UL>
    </>
  ),
};
