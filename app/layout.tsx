import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { Inter_Tight, IBM_Plex_Serif, Space_Grotesk } from "next/font/google";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { DomainProvider } from "@/components/DomainProvider";
import { SITE_URL } from "@/lib/utils";
import { isNewDomainServer, RESERVE_DOMAIN } from "@/lib/domain";
import "./globals.css";

const SITE_NAME = "XForge Phone";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const ibmPlexSerif = IBM_Plex_Serif({
  variable: "--font-ibm-plex-serif",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#050505",
};

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const host = headersList.get("host");
  const isNew = isNewDomainServer(host);

  const baseUrl = isNew ? `https://${RESERVE_DOMAIN}` : SITE_URL;

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: "Meet XForge. The AI smartphone that pays it forward.",
      template: `%s | ${SITE_NAME}`,
    },
    description:
      "XForge is a premium Android smartphone powered by on-device AI built to reward you.",
    keywords: [
      "XForge",
      "XForge Phone",
      "smartphone",
      "decentralized",
      "DePIN",
      "crypto phone",
      "passive income phone",
      "earn rewards",
      "blockchain phone",
      ...(isNew ? [] : ["Kickstarter phone"]),
      "Web3 phone",
      "mining phone",
    ],
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: SITE_URL,
      siteName: SITE_NAME,
      title: "Meet XForge. The AI smartphone that pays it forward.",
      description:
        "XForge is a premium Android smartphone powered by on-device AI built to reward you.",
      images: [
        {
          url: isNew ? "/reserve/opengraph-image" : "/ks-og/opengraph-image",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Meet XForge. The AI smartphone that pays it forward.",
      description:
        "XForge is a premium Android smartphone powered by on-device AI built to reward you.",
      images: [isNew ? "/reserve/twitter-image" : "/ks-og/twitter-image"],
    },
    alternates: {
      canonical: SITE_URL,
    },
    category: "technology",
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const isNew = isNewDomainServer(headersList.get("host"));

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${interTight.variable} ${ibmPlexSerif.variable} ${spaceGrotesk.variable} antialiased font-sans`}
      >
        <GoogleAnalytics />
        <DomainProvider isNew={isNew}>{children}</DomainProvider>
      </body>
    </html>
  );
}
