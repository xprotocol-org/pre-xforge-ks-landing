// "How XForge Works" section — responsive 2×4 photo grid with hover scale,
// tagline text, and email subscription.
//
// Gallery versions (revert by name):
//   "circular"  — commit ba773d8
//   "crossfade" — commit f7cdaad
//   "scatter"   — previous version
//   "grid"      — this version

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import EmailSubscription from "./how-it-works/EmailSubscription";

const GRID_PHOTOS = [
  { src: "/placeholders/carousel-5.png", alt: "Gaming on XForge" },
  { src: "/placeholders/carousel-4.png", alt: "Camera with dog", objectPosition: "35% center" },
  { src: "/placeholders/carousel-6.png", alt: "XForge on desk" },
  { src: "/placeholders/carousel-8.png", alt: "Holding XForge" },
  { src: "/placeholders/carousel-1.png", alt: "App home screen" },
  { src: "/placeholders/carousel-3.png", alt: "XForge packaging" },
  { src: "/placeholders/carousel-2.png", alt: "Rewards dashboard" },
  { src: "/placeholders/carousel-7.png", alt: "Back view" },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white text-black py-12 lg:py-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2×4 photo grid — 2 cols on mobile, 4 cols on md+ */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
          {GRID_PHOTOS.map((photo) => (
            <motion.div
              key={photo.src}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative aspect-[350/378] rounded-[16px] sm:rounded-[24px] md:rounded-[28px] overflow-hidden shadow-[0px_6px_6px_rgba(0,0,0,0.25)] cursor-pointer"
              style={{
                background:
                  "radial-gradient(ellipse at center top, #050505, #141414 50%, #2a2a2a 62.5%, #404040 75%, #565656 87.5%, #6d6d6d 100%)",
              }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
                style={
                  photo.objectPosition
                    ? { objectPosition: photo.objectPosition }
                    : undefined
                }
              />
            </motion.div>
          ))}
        </div>

        {/* Tagline */}
        <p className="mt-8 lg:mt-10 text-[14px] sm:text-[16px] lg:text-[20px] leading-[1.4] text-center px-2 lg:whitespace-nowrap">
          <span className="font-bold italic text-black">
            Beautifully crafted and incredibly smart,
          </span>{" "}
          <span className="text-[#707070]">
            it is designed to help power a better internet and quietly reward
            you along the way.
          </span>
        </p>

        {/* Email subscription */}
        <div className="flex justify-center mt-8 lg:mt-10">
          <EmailSubscription />
        </div>
      </div>
    </section>
  );
}
