// Server-side domain detection for API routes / middleware.

// TODO: Replace with the actual new production domain once configured.
const NEW_DOMAIN = "newdomain.com";

/**
 * Server-side check — pass the Host header value.
 * Strips port (e.g. "newdomain.com:3000" → "newdomain.com").
 */
export function isNewDomainServer(host: string | null): boolean {
  if (!host) return false;
  return host.replace(/:\d+$/, "") === NEW_DOMAIN;
}

export { NEW_DOMAIN };
