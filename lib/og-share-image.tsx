/* eslint-disable @next/next/no-img-element -- next/og Satori markup; not browser DOM */
import { ImageResponse } from "next/og";
import { Buffer } from "node:buffer";

export const ogShareSize = { width: 1200, height: 630 } as const;
export const ogShareAlt = "XForge Phone — AI smartphone that pays it forward";

/**
 * Social preview image: product photo + XForge wordmark + headline (conditionally add Kickstarter branding).
 * Background is `og-share-background.png` (1200×630 export from reserve-photo) — Satori
 * does not reliably decode WebP in img elements during OG generation.
 */
export async function createOgShareImageResponse(isReserve: boolean = false): Promise<ImageResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://reserve.xforgephone.com";
  const bgUrl = new URL("/placeholders/og-share-background.png", baseUrl).toString();
  const logoUrl = new URL("/placeholders/xforge-logo-light.svg", baseUrl).toString();

  const [bgRes, logoRes] = await Promise.all([
    fetch(bgUrl),
    fetch(logoUrl),
  ]);

  const [bgArr, logoSvg] = await Promise.all([
    bgRes.arrayBuffer(),
    logoRes.text(),
  ]);

  const bgBase64 = Buffer.from(bgArr).toString("base64");
  const bgSrc = `data:image/png;base64,${bgBase64}`;
  const logoSrc = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(logoSvg)}`;

  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: "#050505",
        }}
      >
        <img
          src={bgSrc}
          alt=""
          width={1200}
          height={630}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.35)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "52%",
            backgroundColor: "rgba(0,0,0,0.55)",
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            width: "100%",
            height: "100%",
            paddingTop: 52,
            paddingRight: 56,
            paddingBottom: 56,
            paddingLeft: 56,
            boxSizing: "border-box",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img src={logoSrc} alt="" height={36} width={160} />
            <div style={{ display: "flex", flexDirection: "column", marginTop: 22 }}>
              <span
                style={{
                  fontSize: 46,
                  fontWeight: 600,
                  color: "#ffffff",
                  fontFamily: "system-ui, sans-serif",
                  lineHeight: 1.08,
                }}
              >
                AI Smartphone that
              </span>
              <span
                style={{
                  marginTop: 6,
                  fontSize: 58,
                  fontWeight: 400,
                  fontStyle: "italic",
                  color: "#ffbc0e",
                  fontFamily: "Georgia, serif",
                  lineHeight: 1.05,
                }}
              >
                Pays It Forward
              </span>
              {isReserve ? null : (
                <span
                  style={{
                    marginTop: 16,
                    fontSize: 28,
                    fontWeight: 600,
                    color: "#05ce78",
                    fontFamily: "system-ui, sans-serif",
                    letterSpacing: "0.05em",
                  }}
                >
                  LAUNCHING SOON ON KICKSTARTER
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    ),
    { ...ogShareSize },
  );
}
