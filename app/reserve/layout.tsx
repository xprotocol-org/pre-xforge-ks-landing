import type { Metadata } from "next";
import { headers } from "next/headers";
import { SITE_URL } from "@/lib/utils";
import { isNewDomainServer } from "@/lib/domain";

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const host = headersList.get("host");
  const isNew = isNewDomainServer(host);

  return {
    title: "Reserve for $3 — 40% Off XForge Phone",
    description: isNew
      ? "Lock in your 40% discount on the XForge Phone with a $3 refundable deposit. 100% money-back guarantee."
      : "Lock in your 40% discount on the XForge Phone with a $3 refundable deposit. 100% money-back guarantee. Launching soon on Kickstarter.",
    openGraph: {
      title: "Reserve Your XForge Phone — 40% Off",
      description:
        "Lock in the lowest price ever with a $3 refundable deposit. Cancel anytime, no questions asked.",
      url: `${SITE_URL}/reserve`,
    },
    twitter: {
      title: "Reserve Your XForge Phone — 40% Off",
      description:
        "Lock in the lowest price ever with a $3 refundable deposit. Cancel anytime.",
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

