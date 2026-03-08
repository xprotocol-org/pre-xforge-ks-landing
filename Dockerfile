# ==============================================================================
# XForge Landing Page — Multi-stage Bun + Next.js Standalone Dockerfile
# 
# Stages:
#   1. deps     — Install production + dev dependencies
#   2. builder  — Build the Next.js standalone bundle
#   3. runner   — Minimal Bun runtime image (~150MB total)
#
# Build:  docker build -t xforge-landing .
# Run:    docker run -p 3000:3000 --env-file .env.local xforge-landing
# ==============================================================================

# --------------- Stage 1: Install dependencies --------------------------------
FROM oven/bun:1 AS deps

WORKDIR /app

# Copy lockfiles first for layer caching — re-installs only when deps change
COPY package.json bun.lock* package-lock.json* ./

# Install ALL dependencies (dev deps needed for build step)
# --frozen-lockfile ensures reproducible installs
RUN bun install --frozen-lockfile 2>/dev/null || bun install


# --------------- Stage 2: Build the Next.js app --------------------------------
FROM oven/bun:1 AS builder

WORKDIR /app

# Copy installed deps from stage 1
COPY --from=deps /app/node_modules ./node_modules

# Copy the rest of the source code
COPY . .

# Set production environment for build optimizations
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# Build Next.js (standalone output) — this creates .next/standalone
RUN bun run build


# --------------- Stage 3: Production runner ------------------------------------
FROM oven/bun:1-slim AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Don't run as root in production
RUN groupadd --system --gid 1001 nodejs && \
    useradd --system --uid 1001 --gid nodejs nextjs

# Copy the standalone server (includes bundled node_modules)
COPY --from=builder /app/.next/standalone ./

# Copy static assets (not included in standalone bundle)
COPY --from=builder /app/.next/static ./.next/static

# Copy public directory (images, videos, fonts)
COPY --from=builder /app/public ./public

# Create writable data directory for subscriber JSON (ephemeral in container)
RUN mkdir -p /app/data && chown nextjs:nodejs /app/data

# Switch to non-root user
USER nextjs

# Next.js standalone server listens on 3000 by default
EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Start the standalone Next.js server with Bun runtime
CMD ["bun", "server.js"]
