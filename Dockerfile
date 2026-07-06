# Build multi-étapes : image finale légère basée sur le build standalone de
# Next.js (cf. output: "standalone" dans next.config.ts).

# ---- Dépendances ----
FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# ---- Build ----
FROM node:22-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Les polices next/font (Google) se téléchargent à la build : réseau requis.
RUN npm run build

# ---- Exécution ----
FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Utilisateur non-root.
RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nextjs

# Serveur standalone + assets statiques + dossier public.
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
CMD ["node", "server.js"]
