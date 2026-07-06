# Neon Workspace — Portfolio de Julien M

Portfolio de développeur web & front-end freelance (Liège, Belgique), pensé
comme une double expérience :

- **`/` — l'expérience immersive** : un "workspace" néon plein écran, piloté
  par un dock façon macOS, avec preloader, scènes animées (accueil, projets,
  à propos, contact) et transitions Framer Motion.
- **Les pages de contenu** (`/projets`, `/blog`, `/developpeur-web-liege`,
  `/contact`) : rendues côté serveur, scrollables, sobres, entièrement
  optimisées pour le SEO local et le GEO (moteurs de réponse IA).

## Stack

- [Next.js 16](https://nextjs.org) (App Router, React 19, Server Actions)
- TypeScript
- Tailwind CSS 4
- Framer Motion (animations et transitions de scènes)
- Zustand (état de la scène active)
- Nodemailer (formulaire de contact via SMTP)

## Architecture

```
app/
  (experience)/        # Expérience immersive plein écran (route /)
  (content)/           # Pages SSR indexables : blog, projets, contact, landing SEO
  sitemap.ts robots.ts manifest.ts icon.tsx opengraph-image.tsx …
src/
  scenes/              # Une scène animée par vue du workspace
  components/          # Dock, preloader, formulaire de contact, prose du blog…
  content/             # Projets et articles de blog (données typées en TS)
  lib/                 # Config du site, schémas JSON-LD, thème, server actions
  store/               # Store Zustand (scène active)
```

Points notables :

- Les deux univers sont isolés par des route groups : le verrouillage du
  scroll et le preloader ne s'appliquent qu'à l'expérience immersive.
- SEO complet : données structurées Schema.org (Person, ProfessionalService,
  BlogPosting, FAQPage, BreadcrumbList), sitemap, robots.txt ouvert aux
  crawlers IA (GPTBot, ClaudeBot, PerplexityBot…), `llms.txt`, images Open
  Graph générées dynamiquement (`next/og`).
- Le formulaire de contact est une Server Action avec honeypot anti-spam et
  rate limiting par IP.

## Lancer le projet

```bash
npm install
npm run dev        # http://localhost:3000
```

Pour le formulaire de contact et l'analytics, copie `.env.example` en
`.env.local` et renseigne tes valeurs (SMTP + Umami, les deux optionnels en
dev).

```bash
npm run build      # build de production
npm start          # sert le build
```

## Déploiement

Hébergé sur un VPS (build Next.js standalone ou `npm start` derrière un
reverse proxy). Avant la mise en production, adapter `SITE_URL` dans
`src/lib/site.ts` : tout le SEO (canonicals, sitemap, Open Graph, JSON-LD)
en dépend.
