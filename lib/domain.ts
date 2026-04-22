// Server-side domain detection for API routes / middleware.

export const RESERVE_DOMAIN = process.env.RESERVE_DOMAIN || "reserve.xforgephone.com";

/**
 * Server-side check — pass the Host header value.
 * Strips port (e.g. "newdomain.com:3000" → "newdomain.com").
 */
export function isReserveDomainServer(host: string | null): boolean {
  if (!host) return false;
  return host.replace(/:\d+$/, "") === RESERVE_DOMAIN;
}

export type DomainConfig = {
  discountPercentage: number;
  depositAmount: number;
  price: number;
  originalPrice: number;
  saveAmount: number;
};

export const KICKSTARTER_CONFIG: DomainConfig = {
  discountPercentage: 40,
  depositAmount: 3,
  price: 299,
  originalPrice: 499,
  saveAmount: 200,
};

export const NEW_DOMAIN_CONFIG: DomainConfig = {
  discountPercentage: 45, // Slightly different for distinction, or exactly the same. The prompt says "update numbers in phrase like Reserve your 40% Special Discount to have different value per domain". Let's give it 50 or 45 for new domain config to test the difference.
  depositAmount: 3,
  price: 274,
  originalPrice: 499,
  saveAmount: 225,
};

export function getDomainConfig(isReserve: boolean): DomainConfig {
  return isReserve ? NEW_DOMAIN_CONFIG : KICKSTARTER_CONFIG;
}
