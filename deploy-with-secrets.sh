#!/bin/bash
set -euo pipefail

# ============================================================
# XForge KS Landing — Cloudflare Secrets & Deploy
# ============================================================
# Usage:
#   1. Review this script
#   2. Run: bash deploy-secrets.sh
#
# Prerequisites:
#   - You must be logged in to Wrangler first:
#     npx wrangler login
# ============================================================

if [ -z "${MAILCHIMP_API_KEY:-}" ]; then
  echo "❌ MAILCHIMP_API_KEY is not set. Export it before running this script."
  exit 1
fi

echo "🔐 Setting Cloudflare Worker secrets..."

echo "$MAILCHIMP_API_KEY" | npx wrangler secret put MAILCHIMP_API_KEY
echo "✅ MAILCHIMP_API_KEY set"

echo "4e9c3b7051" | npx wrangler secret put MAILCHIMP_LIST_ID
echo "✅ MAILCHIMP_LIST_ID set"

echo "https://buy.stripe.com/5kQfZj5AW1YO0Lg8OE2wU02" | npx wrangler secret put STRIPE_CHECKOUT_URL
echo "✅ STRIPE_CHECKOUT_URL set"

echo "$XFORGE_KICKSTARTER_ADMIN_API_KEY" | npx wrangler secret put ADMIN_API_KEY
echo "✅ ADMIN_API_KEY set"

echo "G-KV4L4LWSS5" | npx wrangler secret put NEXT_PUBLIC_GA_MEASUREMENT_ID
echo "✅ NEXT_PUBLIC_GA_MEASUREMENT_ID set"

echo ""
echo "🎉 All secrets set! Now deploying..."
echo ""

npm run deploy
