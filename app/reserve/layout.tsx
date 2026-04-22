import type { Metadata } from "next";
import { headers } from "next/headers";
import { SITE_URL } from "@/lib/utils";
import { isReserveDomainServer, getDomainConfig } from "@/lib/domain";

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const host = headersList.get("host");
  const isReserve = isReserveDomainServer(host);

  const config = getDomainConfig(isReserve);

  return {
    title: `Reserve for $${config.depositAmount} — ${config.discountPercentage}% Off XForge Phone`,
    description: isReserve
      ? `Lock in your ${config.discountPercentage}% discount on the XForge Phone with a $${config.depositAmount} refundable deposit. 100% money-back guarantee.`
      : `Lock in your ${config.discountPercentage}% discount on the XForge Phone with a $${config.depositAmount} refundable deposit. 100% money-back guarantee. Launching soon on Kickstarter.`,
    openGraph: {
      title: `Reserve Your XForge Phone — ${config.discountPercentage}% Off`,
      description:
        `Lock in the lowest price ever with a $${config.depositAmount} refundable deposit. Cancel anytime, no questions asked.`,
      url: `${SITE_URL}/reserve`,
    },
    twitter: {
      title: `Reserve Your XForge Phone — ${config.discountPercentage}% Off`,
      description:
        `Lock in the lowest price ever with a $${config.depositAmount} refundable deposit. Cancel anytime.`,
    },
    alternates: {
      canonical: `${SITE_URL}/reserve`,
    },
  };
}

export default function ReserveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

