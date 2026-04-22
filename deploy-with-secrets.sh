#!/bin/bash
set -euo pipefail

# ============================================================
# XForge KS Landing — Cloudflare Secrets & Deploy
# ============================================================
# Usage:
#   1. Export required env vars (see below)
#   2. Run: bash deploy-with-secrets.sh
#
# Prerequisites:
#   - You must be logged in to Wrangler first:
#     npx wrangler login
#
# Required env vars:
#   MAILCHIMP_API_KEY
#   XFORGE_KICKSTARTER_ADMIN_API_KEY
# ============================================================

echo "🔍 Fetching existing secrets from Cloudflare..."
EXISTING_SECRETS=$(npx wrangler secret list 2>/dev/null || echo "[]")

has_secret() {
  local secret_name="$1"
  echo "$EXISTING_SECRETS" | grep -q "\"name\": *\"$secret_name\""
}

if has_secret "MAILCHIMP_API_KEY"; then
  echo "⏭️  MAILCHIMP_API_KEY already exists in Cloudflare, skipping..."
else
  if [ -z "${MAILCHIMP_API_KEY:-}" ]; then
    echo "❌ MAILCHIMP_API_KEY is not set. Export it before running this script."
    exit 1
  fi
  echo "🔐 Setting MAILCHIMP_API_KEY..."
  echo "$MAILCHIMP_API_KEY" | npx wrangler secret put MAILCHIMP_API_KEY
  echo "✅ MAILCHIMP_API_KEY set"
fi

if has_secret "ADMIN_API_KEY"; then
  echo "⏭️  ADMIN_API_KEY already exists in Cloudflare, skipping..."
else
  if [ -z "${XFORGE_KICKSTARTER_ADMIN_API_KEY:-}" ]; then
    echo "❌ XFORGE_KICKSTARTER_ADMIN_API_KEY is not set. Export it before running this script."
    exit 1
  fi
  echo "🔐 Setting ADMIN_API_KEY..."
  echo "$XFORGE_KICKSTARTER_ADMIN_API_KEY" | npx wrangler secret put ADMIN_API_KEY
  echo "✅ ADMIN_API_KEY set"
fi

put_static_secret() {
  local secret_name="$1"
  local secret_value="$2"
  
  if has_secret "$secret_name"; then
    echo "⏭️  $secret_name already exists in Cloudflare, skipping..."
  else
    echo "🔐 Setting $secret_name..."
    echo "$secret_value" | npx wrangler secret put "$secret_name"
    echo "✅ $secret_name set"
  fi
}

put_static_secret "MAILCHIMP_LIST_ID" "4e9c3b7051"
put_static_secret "STRIPE_CHECKOUT_URL" "https://buy.stripe.com/5kQfZj5AW1YO0Lg8OE2wU02"
put_static_secret "NEW_DOMAIN_STRIPE_URL" "https://buy.stripe.com/7sYcN7e7s32S1Pkd4U2wU05"
put_static_secret "NEXT_PUBLIC_GA_MEASUREMENT_ID" "G-KV4L4LWSS5"
put_static_secret "NEXT_PUBLIC_SITE_URL" "https://kickstarter.xforgephone.com"

echo ""
echo "🎉 All secrets verified! Now deploying..."
echo ""

npm run deploy
