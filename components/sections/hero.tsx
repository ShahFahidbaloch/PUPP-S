"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import {
  BrandPawIcon,
  FishboneSvg,
  GlossyHeartBadge,
  PuppyFaceEmoji,
} from "@/components/ui/brand-icons";

const rise: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.07 * i, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
};

/**
 * Yellow Circular Rotating Stamp on the right of the Spaniel Arch
 * Text: "BETTER AND HEALTHY • MAKES TOMORROW •" with black paw in center
 */
function BetterHealthyStamp() {
  return (
    <div className="relative grid size-24 sm:size-28 place-items-center rounded-full border border-ink bg-[#FFEB2A] shadow-[0_10px_22px_-6px_rgba(17,17,17,0.22),inset_0_2px_3px_rgba(255,255,255,0.75)] select-none">
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 size-full animate-spin-slow"
        aria-hidden="true"
      >
        <defs>
          <path
            id="hero-stamp-circle"
            d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0"
          />
        </defs>
        <text className="fill-ink text-[8.3px] font-bold uppercase tracking-[0.14em]">
          <textPath href="#hero-stamp-circle">
            BETTER AND HEALTHY • MAKES TOMORROW •
          </textPath>
        </text>
      </svg>
      <BrandPawIcon className="size-7 rotate-[15deg]" color="#141414" />
    </div>
  );
}

/**
 * White Circular 3D Dog Biscuit Badge on the left of the Spaniel Arch
 */
function DogBiscuitBadge() {
  return (
    <div
      className="grid size-14 sm:size-16 place-items-center rounded-full bg-white animate-float select-none"
      style={{
        boxShadow:
          "0 12px 26px -4px rgba(17,17,17,0.16), inset 0 2px 4px rgba(255,255,255,0.95), inset 0 -3px 6px rgba(0,0,0,0.06)",
      }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 64 44" className="w-10 sm:w-11 -rotate-[18deg]">
        <defs>
          <linearGradient id="biscuit-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F3D5A3" />
            <stop offset="50%" stopColor="#DCA963" />
            <stop offset="100%" stopColor="#B87E38" />
          </linearGradient>
          <linearGradient id="biscuit-rim" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFF0D4" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#8F5B1D" stopOpacity="0.45" />
          </linearGradient>
        </defs>
        {/* Soft 3D cast shadow */}
        <path
          d="M15 14C11.5 10.5 6 12.5 6 17.5C6 20.5 8 22.5 10 23C8 24 6.5 26.5 7.5 29.5C8.5 33 13.5 34 17 30.5L47 30.5C50.5 34 55.5 33 56.5 29.5C57.5 26.5 56 24 54 23C56 22.5 58 20.5 58 17.5C58 12.5 52.5 10.5 49 14L15 14Z"
          fill="rgba(110,68,20,0.24)"
          transform="translate(1.5, 3)"
        />
        {/* Lower baked crust thickness */}
        <path
          d="M15 14C11.5 10.5 6 12.5 6 17.5C6 20.5 8 22.5 10 23C8 24 6.5 26.5 7.5 29.5C8.5 33 13.5 34 17 30.5L47 30.5C50.5 34 55.5 33 56.5 29.5C57.5 26.5 56 24 54 23C56 22.5 58 20.5 58 17.5C58 12.5 52.5 10.5 49 14L15 14Z"
          fill="#9E6827"
          transform="translate(0.5, 1.6)"
        />
        {/* Biscuit body */}
        <path
          d="M15 14C11.5 10.5 6 12.5 6 17.5C6 20.5 8 22.5 10 23C8 24 6.5 26.5 7.5 29.5C8.5 33 13.5 34 17 30.5L47 30.5C50.5 34 55.5 33 56.5 29.5C57.5 26.5 56 24 54 23C56 22.5 58 20.5 58 17.5C58 12.5 52.5 10.5 49 14L15 14Z"
          fill="url(#biscuit-grad)"
          stroke="url(#biscuit-rim)"
          strokeWidth="1"
        />
        {/* Top specular bevel */}
        <path
          d="M16 15.8L48 15.8"
          stroke="#FFF3DB"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.7"
        />
        {/* Recessed dock holes with highlight */}
        <g>
          <circle cx="23" cy="22" r="1.25" fill="#8C581C" />
          <circle cx="23.3" cy="22.4" r="0.8" fill="#F7DEB4" opacity="0.5" />
          <circle cx="32" cy="19.5" r="1.25" fill="#8C581C" />
          <circle cx="32.3" cy="20" r="0.8" fill="#F7DEB4" opacity="0.5" />
          <circle cx="32" cy="24.5" r="1.25" fill="#8C581C" />
          <circle cx="32.3" cy="25" r="0.8" fill="#F7DEB4" opacity="0.5" />
          <circle cx="41" cy="22" r="1.25" fill="#8C581C" />
          <circle cx="41.3" cy="22.4" r="0.8" fill="#F7DEB4" opacity="0.5" />
        </g>
      </svg>
    </div>
  );
}

/**
 * Orange Scalloped Postage-Stamp Ticket ("FISH CUTLET / Ingredient- Pumpkin, Meat, Fish Cutlet")
 */
function FishCutletTicket() {
  // Generate scalloped postage stamp path (width 260, height 108)
  const w = 260;
  const h = 108;
  const r = 3.2;
  const step = 10;

  let d = "M 0 0";
  for (let x = 4; x <= w - step; x += step) {
    d += ` L ${x} 0 A ${r} ${r} 0 0 0 ${x + 6.4} 0`;
  }
  d += ` L ${w} 0`;
  for (let y = 4; y <= h - step; y += step) {
    d += ` L ${w} ${y} A ${r} ${r} 0 0 0 ${w} ${y + 6.4}`;
  }
  d += ` L ${w} ${h}`;
  for (let x = w - 4; x >= step; x -= step) {
    d += ` L ${x} ${h} A ${r} ${r} 0 0 0 ${x - 6.4} ${h}`;
  }
  d += ` L 0 ${h}`;
  for (let y = h - 4; y >= step; y -= step) {
    d += ` L 0 ${y} A ${r} ${r} 0 0 0 0 ${y - 6.4}`;
  }
  d += " Z";

  return (
    <div className="relative w-[14.25rem] sm:w-[17rem] aspect-[260/108] -rotate-[2deg] drop-shadow-[0_8px_18px_rgba(249,115,22,0.22)] select-none">
      <svg
        viewBox={`0 0 ${w} ${h}`}
        className="absolute inset-0 size-full"
        fill="none"
         aria-hidden="true"
      >
        <path d={d} fill="#FF7328" />
      </svg>
      {/* Inner White Border Table */}
      <div className="relative z-10 h-full w-full p-2.5 sm:p-3">
        <div className="grid h-full w-full grid-cols-[0.85fr_1.48fr] border border-white/85">
          {/* Left Cell: Fishbone */}
          <div className="flex items-center justify-center border-r border-white/85 p-1.5 sm:p-2">
            <FishboneSvg className="w-12 sm:w-16 h-auto" />
          </div>
          {/* Right Cell: Divided into 2 rows */}
          <div className="flex flex-col justify-between">
            <div className="flex items-center border-b border-white/85 px-2.5 sm:px-3 py-1 sm:py-2">
              <span className="text-[0.64rem] sm:text-xs font-bold uppercase tracking-wider text-white">
                FISH CUTLET
              </span>
            </div>
            <div className="flex flex-1 items-center px-2.5 sm:px-3 py-1">
              <p className="text-[0.58rem] sm:text-[0.68rem] font-medium leading-tight sm:leading-snug text-white/95 whitespace-nowrap">
                Ingredient- Pumpkin,
                <br />
                Meat, Fish Cutlet
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="about" className="relative overflow-x-clip pt-10 pb-14 sm:pt-14 sm:pb-20 md:pt-16 md:pb-24">
      <div className="container-site grid items-start gap-12 md:grid-cols-[1.08fr_0.92fr] md:gap-6 lg:gap-10">
        {/* ── Left Column: Tilted Grid Backdrop + Headline + CTA ── */}
        <motion.div initial="hidden" animate="show" className="relative z-10 md:pt-2">
          {/* Tilted Graph-Paper Grid behind headline (matches reference comp) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-x-6 -top-8 -bottom-10 -z-10 -rotate-[8deg] opacity-75"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(17,17,17,0.065) 1px, transparent 1px), linear-gradient(to bottom, rgba(17,17,17,0.065) 1px, transparent 1px)",
              backgroundSize: "52px 52px",
              maskImage:
                "radial-gradient(ellipse 80% 75% at 45% 50%, black 45%, transparent 95%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 80% 75% at 45% 50%, black 45%, transparent 95%)",
            }}
          />

          <h1 className="text-[clamp(2.65rem,11vw,3.35rem)] leading-[0.94] tracking-tight text-ink sm:text-[4.35rem] lg:text-[5.1rem]">
            {/* Row 1: YOUR + French Bulldog in Yellow Hoodie popping out of Sky-Blue Pill */}
            <motion.span
              variants={rise}
              custom={0}
              className="flex flex-wrap items-center gap-2.5 sm:gap-4"
            >
              <span>YOUR</span>
              <span className="relative inline-block h-[0.98em] w-[1.48em] shrink-0 align-middle -mt-[0.26em] select-none">
                <Image
                  src="/images/hero-hoodie-pill-hd.png"
                  alt="French Bulldog puppy wearing a yellow hoodie in sky-blue pill"
                  fill
                  sizes="220px"
                  className="object-contain object-bottom drop-shadow-[0_6px_14px_rgba(44,183,255,0.25)]"
                  priority
                />
              </span>
            </motion.span>

            {/* Row 2: PUPP'S BEST */}
            <motion.span variants={rise} custom={1} className="block mt-1">
              PUPP&apos;S BEST
            </motion.span>

            {/* Row 3: FRIEND + 3D Glossy Red Heart Badge */}
            <motion.span
              variants={rise}
              custom={2}
              className="mt-1 flex items-center gap-2.5 sm:gap-4"
            >
              <span>FRIEND</span>
              <GlossyHeartBadge className="size-9 sm:size-12 lg:size-13" />
            </motion.span>
          </h1>

          {/* Subtitle */}
          <motion.p
            variants={rise}
            custom={3}
            className="mt-5 sm:mt-6 max-w-[21rem] sm:max-w-[23rem] text-[0.84rem] sm:text-[0.94rem] font-medium leading-[1.6] text-ink/85"
          >
            Training, grooming to nutrition &amp; exercise, there&apos;s
            <br className="hidden sm:inline" /> caring worth often becomes the
            family.
          </motion.p>

          {/* CTA Pill Button: "Book a Schedule | 🐶" */}
          <motion.div variants={rise} custom={4} className="mt-6 sm:mt-8">
            <a
              href="#book"
              id="hero-book"
              className="group inline-flex items-center gap-3 rounded-full border border-ink bg-[#FFEB2A] px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-ink transition-all hover:-translate-y-0.5 hover:shadow-[3px_3px_0_0_#111111] active:translate-y-0"
            >
              <span>Book a Schedule</span>
              <span className="text-ink/40 font-normal">|</span>
              <PuppyFaceEmoji className="size-5 sm:size-5.5 transition-transform duration-200 group-hover:scale-110" />
            </a>
          </motion.div>
        </motion.div>

        {/* ── Right Column: Sky-Blue Arch + Cutout Spaniel Popping Out Top + Badges ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
          className="relative mx-auto w-full max-w-[20.5rem] sm:max-w-[25.5rem] pt-10 sm:pt-14 pb-8 md:ml-auto md:mr-4"
        >
          {/* Sky-Blue Arch Backdrop (starts below the dog's top head/ears so head pops out!) */}
          <div className="relative mx-auto w-[80%] aspect-[3.6/4.0] rounded-t-full bg-[#2CB7FF]">
            {/* Spaniel Cutout overflowing top and sides of the arch */}
            <div className="pointer-events-none absolute -inset-x-[10%] -top-[14%] bottom-0 z-10">
              <Image
                src="/images/spaniel-cutout.png"
                alt="Smiling Cavalier King Charles Spaniel"
                fill
                sizes="(min-width: 768px) 440px, 92vw"
                priority
                className="object-contain object-bottom"
              />
            </div>

            {/* White Circular Dog Biscuit Badge (Left edge of arch) */}
            <div className="absolute -left-3 sm:-left-8 top-[20%] z-20">
              <DogBiscuitBadge />
            </div>

            {/* Yellow Rotating Circular Stamp (Right edge of arch) */}
            <div className="absolute -right-3 sm:-right-9 bottom-[26%] sm:bottom-[16%] z-20">
              <BetterHealthyStamp />
            </div>

            {/* Orange Scalloped Postage Stamp "FISH CUTLET" (Bottom-Left of arch) */}
            <div className="absolute -bottom-6 -left-3 sm:-left-14 z-30">
              <FishCutletTicket />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
