import { createOgShareImageResponse, ogShareAlt, ogShareSize } from "@/lib/og-share-image";

export const alt = ogShareAlt;
export const size = ogShareSize;
export const contentType = "image/png";

export const runtime = "nodejs";

export default async function Image() {
  return createOgShareImageResponse(false);
}
