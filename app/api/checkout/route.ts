// Stripe checkout redirect. Keeps the payment URL server-side so it's not
// exposed in client bundles. Set STRIPE_CHECKOUT_URL in .env.local.
// Called by: /reserve page "Reserve Discount for $3" button.
//
// Uses POST to prevent accidental triggers from prefetchers, crawlers,
// and link preview bots that would fire on a GET-based redirect.
//
// Domain-aware: new domain uses a separate Stripe link.

import { NextRequest, NextResponse } from "next/server";
import { isNewDomainServer } from "@/lib/domain";

const NEW_DOMAIN_STRIPE_URL =
  "https://buy.stripe.com/7sYcN7e7s32S1Pkd4U2wU05";

export async function POST(request: NextRequest) {
  const host = request.headers.get("host");

  if (isNewDomainServer(host)) {
    return NextResponse.json({ url: NEW_DOMAIN_STRIPE_URL });
  }

  const checkoutUrl = process.env.STRIPE_CHECKOUT_URL;

  if (!checkoutUrl) {
    return NextResponse.json(
      { error: "Checkout not configured" },
      { status: 503 }
    );
  }

  return NextResponse.json({ url: checkoutUrl });
}
