# ── build stage ──────────────────────────────────
FROM node:20-alpine AS builder
WORKDIR /app

# Dependências de build para módulos nativos (better-sqlite3)
RUN apk add --no-cache python3 make g++

COPY package*.json ./
RUN npm install
COPY prisma ./prisma
RUN npx prisma generate
COPY tsconfig.json ./
COPY src ./src
RUN npm run build

# Remove as devDependencies, mantendo os módulos nativos já compilados
RUN npm prune --omit=dev

# ── production stage ──────────────────────────────
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY package*.json ./

# Copia node_modules já compilado do builder (inclui better-sqlite3 + prisma)
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY prisma ./prisma

EXPOSE 3000
CMD ["sh", "-c", "npx prisma migrate deploy && node dist/server.js"]