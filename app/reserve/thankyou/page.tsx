// Thank You page — shown after successful payment reservation.
// Figma node: 10197:11045
// Reuses: S.btnNotify (lib/animations), icon-notification.svg, nav-logos.svg

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { S } from "@/lib/animations";
import { KICKSTARTER_URL } from "@/lib/utils";
import { trackKickstarterClick } from "@/lib/analytics";
import { useIsNewDomain } from "@/lib/use-domain";

const VIP_GROUP_URL = "https://chat.whatsapp.com/Lb8Qe7sNYRZ7QatHAZyle0";

export default function ThankYouPage() {
  const isNew = useIsNewDomain();
  const ctaLabel = isNew ? "Join VIP Group" : "Notify me on Kickstarter";
  const ctaHref = isNew ? VIP_GROUP_URL : KICKSTARTER_URL;

  return (
    <main className="relative w-full min-h-screen bg-xforge-black overflow-hidden flex items-center justify-center">
      {/* Background "Thank you" ghost text — matches Figma IBM Plex Serif SemiBold Italic */}
      <p
        aria-hidden="true"
        className="pointer-events-none select-none absolute font-serif italic font-semibold text-white/10 whitespace-nowrap text-[clamp(120px,20vw,299px)] leading-[1] z-0"
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
      >
        Thank you
      </p>

      {/* Card */}
      <div className="relative z-10 w-full max-w-[513px] mx-4 bg-white rounded-[20px] border border-xforge-border shadow-[0px_4px_32px_0px_rgba(0,0,0,0.18)] flex flex-col items-center px-[10px] py-[47px] gap-0">

        {/* Checkmark icon — 80×80 */}
        <div className="flex items-center justify-center w-[80px] h-[80px] mb-[28px]">
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <circle cx="40" cy="40" r="37" stroke="#05CE78" strokeWidth="4" />
            <path
              d="M24 40L34.5 51L56 29"
              stroke="#05CE78"
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Heading */}
        <h1 className="w-full text-center font-sans font-medium text-[30px] leading-[36px] tracking-[0.4px] text-[#101828] mb-[16px]">
          Thanks for your payment
        </h1>

        {/* Sub-text */}
        <div className="font-sans font-normal text-[16px] leading-[24px] tracking-[-0.3px] text-[#4A5565] text-center mb-[28px] whitespace-pre-wrap">
          <p className="mb-0">Your order has been successfully processed.{" "}</p>
          <p>A confirmation email has been sent to your email address.</p>
        </div>

        {/* Notify me on Kickstarter button — reuses S.btnNotify from lib/animations */}
        <div className="w-full max-w-[419px] flex flex-col items-center gap-[8px] mb-[28px]">
          <motion.a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => !isNew && trackKickstarterClick("thank_you_page")}
            whileHover="wiggle"
            whileTap={{
              scale: 0.97,
              boxShadow:
                "0px 0px 14px 3px rgba(200,200,200,0.4), 0px 0px 0px 1px #f5f5f5, 0px 1px 2px 0px rgba(0,0,0,0.3)",
            }}
            className={`${S.btnNotify} flex items-center justify-center gap-[8px] h-[44px] w-full rounded-[12px] text-[14px] font-medium hover:scale-[1.04] font-sans`}
          >
            <motion.span
              variants={{ wiggle: { rotate: [0, -3, 3, -2, 1.5, 0] } }}
              transition={{ duration: 0.5 }}
              style={{ display: "inline-block", transformOrigin: "center bottom" }}
            >
              {ctaLabel}
            </motion.span>
            {!isNew && (
              <motion.div
                variants={{ wiggle: { rotate: [0, -14, 12, -10, 8, -4, 0] } }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="/placeholders/icon-notification.svg"
                  alt=""
                  width={16}
                  height={16}
                  aria-hidden="true"
                />
              </motion.div>
            )}
          </motion.a>
        </div>

        {/* XForge × Kickstarter logos (XForge-only on new domain) */}
        <div className="flex items-center justify-center">
          <Image
            src={isNew ? "/placeholders/xforge-logo-dark.svg" : "/placeholders/nav-logos.svg"}
            alt={isNew ? "XForge" : "XForge × Kickstarter"}
            width={isNew ? 68 : 239}
            height={15}
            className="h-[15px] w-auto"
          />
        </div>
      </div>
    </main>
  );
}
