// Server-side domain detection for API routes / middleware.

export const RESERVE_DOMAIN = process.env.RESERVE_DOMAIN || "reserve.xforgephone.com";

/**
 * Server-side check — pass the Host header value.
 * Strips port (e.g. "newdomain.com:3000" → "newdomain.com").
 */
export function isNewDomainServer(host: string | null): boolean {
  if (!host) return false;
  return host.replace(/:\d+$/, "") === RESERVE_DOMAIN;
}
