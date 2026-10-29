"use client";

import Image from "next/image";
import { GlossyHeartBadge } from "@/components/ui/brand-icons";

const BULLETS = [
  { label: "Adoption", active: true },
  { label: "Fostering", active: false },
  { label: "Vaccination", active: false },
  { label: "Grooming", active: false },
];

/**
 * 100% Native SVG Scalloped Postage Stamp Ticket for Cat (matches right_zoom.png)
 */
function CatPostageStamp() {
  const stampPath =
    "M 0 0 L 5 0 A 2.2 2.2 0 0 0 15 0 A 2.2 2.2 0 0 0 25 0 A 2.2 2.2 0 0 0 35 0 A 2.2 2.2 0 0 0 45 0 A 2.2 2.2 0 0 0 55 0 A 2.2 2.2 0 0 0 65 0 A 2.2 2.2 0 0 0 75 0 A 2.2 2.2 0 0 0 85 0 A 2.2 2.2 0 0 0 95 0 A 2.2 2.2 0 0 0 105 0 A 2.2 2.2 0 0 0 115 0 A 2.2 2.2 0 0 0 125 0 A 2.2 2.2 0 0 0 135 0 A 2.2 2.2 0 0 0 145 0 A 2.2 2.2 0 0 0 155 0 A 2.2 2.2 0 0 0 165 0 A 2.2 2.2 0 0 0 175 0 L 180 0 L 180 4 A 2.2 2.2 0 0 0 180 14 A 2.2 2.2 0 0 0 180 24 A 2.2 2.2 0 0 0 180 34 A 2.2 2.2 0 0 0 180 44 A 2.2 2.2 0 0 0 180 54 A 2.2 2.2 0 0 0 180 64 A 2.2 2.2 0 0 0 180 74 A 2.2 2.2 0 0 0 180 84 A 2.2 2.2 0 0 0 180 94 A 2.2 2.2 0 0 0 180 104 A 2.2 2.2 0 0 0 180 114 L 180 118 L 175 118 A 2.2 2.2 0 0 0 165 118 A 2.2 2.2 0 0 0 155 118 A 2.2 2.2 0 0 0 145 118 A 2.2 2.2 0 0 0 135 118 A 2.2 2.2 0 0 0 125 118 A 2.2 2.2 0 0 0 115 118 A 2.2 2.2 0 0 0 105 118 A 2.2 2.2 0 0 0 95 118 A 2.2 2.2 0 0 0 85 118 A 2.2 2.2 0 0 0 75 118 A 2.2 2.2 0 0 0 65 118 A 2.2 2.2 0 0 0 55 118 A 2.2 2.2 0 0 0 45 118 A 2.2 2.2 0 0 0 35 118 A 2.2 2.2 0 0 0 25 118 A 2.2 2.2 0 0 0 15 118 A 2.2 2.2 0 0 0 5 118 L 0 118 L 0 114 A 2.2 2.2 0 0 0 0 104 A 2.2 2.2 0 0 0 0 94 A 2.2 2.2 0 0 0 0 84 A 2.2 2.2 0 0 0 0 74 A 2.2 2.2 0 0 0 0 64 A 2.2 2.2 0 0 0 0 54 A 2.2 2.2 0 0 0 0 44 A 2.2 2.2 0 0 0 0 34 A 2.2 2.2 0 0 0 0 24 A 2.2 2.2 0 0 0 0 14 A 2.2 2.2 0 0 0 0 4 Z";

  return (
    <div className="relative w-36 sm:w-44 lg:w-46 aspect-[180/118] -rotate-[3deg] transition-transform duration-200 hover:scale-105 cursor-pointer drop-shadow-sm select-none">
      <svg
        viewBox="0 0 180 118"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Scalloped Postage Stamp Base */}
        <path d={stampPath} fill="#4FD0FD" />

        {/* Inner Border Box */}
        <rect
          x="12"
          y="11"
          width="156"
          height="96"
          rx="2"
          stroke="#111827"
          strokeWidth="1.5"
          fill="none"
        />

        {/* Horizontal Divider Line */}
        <line
          x1="12"
          y1="46"
          x2="168"
          y2="46"
          stroke="#111827"
          strokeWidth="1.5"
        />

        {/* Headline "CAT" */}
        <text
          x="20"
          y="37"
          fontFamily="var(--font-lilita), cursive, sans-serif"
          fontWeight="900"
          fontSize="24"
          fill="#111827"
          letterSpacing="0.5"
        >
          CAT
        </text>

        {/* Subtitle Lines */}
        <text
          x="20"
          y="69"
          fontFamily="var(--font-dm-sans), sans-serif"
          fontWeight="600"
          fontSize="11"
          fill="#111827"
        >
          Your furry friend is
        </text>
        <text
          x="20"
          y="85"
          fontFamily="var(--font-dm-sans), sans-serif"
          fontWeight="600"
          fontSize="11"
          fill="#111827"
        >
          waiting for you.
        </text>
      </svg>
    </div>
  );
}

export function ServiceBreakdown() {
  return (
    <section id="services" className="container-site py-12 sm:py-20 overflow-hidden">
      <div className="grid items-center gap-12 lg:grid-cols-[1.18fr_1fr] lg:gap-12">
        {/* ── Left Side: Straight Text over Tilted Grid Paper + Bullets & Man Holding Puppy Cutout Card ── */}
        <div className="relative mx-auto w-full max-w-xl lg:mx-0 py-4">
          {/* Tilted Graph-Paper Sheet in Background ONLY (text stays straight!) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-x-4 -inset-y-4 -z-10 -rotate-[7deg] opacity-75"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(17,17,17,0.065) 1px, transparent 1px), linear-gradient(to bottom, rgba(17,17,17,0.065) 1px, transparent 1px)",
              backgroundSize: "52px 52px",
              maskImage:
                "radial-gradient(ellipse 82% 78% at 45% 50%, black 45%, transparent 95%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 82% 78% at 45% 50%, black 45%, transparent 95%)",
            }}
          />

          {/* Headline (Straight, bold Lilita display) */}
          <h2 className="font-display text-[clamp(1.95rem,8.8vw,2.35rem)] sm:text-[3rem] lg:text-[3.35rem] leading-[0.98] tracking-tight uppercase text-ink">
            <span className="block">HOW WE SERVE OUR</span>
            <span className="block mt-0.5">PET PARENTS</span>
          </h2>

          {/* Subtitle */}
          <p className="mt-4 max-w-md text-xs sm:text-[0.88rem] leading-[1.6] text-ink/85 font-medium">
            making pet rearing simpler for you. Our entire, well
            <br className="hidden sm:inline" /> rounded routine is created with
            love.
          </p>

          {/* Bullets & Man-holding-puppy Card Row */}
          <div className="mt-8 flex flex-row items-center justify-between gap-4 sm:gap-6 max-w-lg pr-2 sm:pr-0">
            {/* Radio / Bullet items */}
            <div className="space-y-3 sm:space-y-3.5">
              {BULLETS.map((b) => (
                <div key={b.label} className="flex items-center gap-2.5 sm:gap-3.5">
                  <span
                    className={`grid size-4.5 sm:size-5 place-items-center rounded-full border border-ink ${
                      b.active ? "bg-[#FFEB2A]" : "bg-white"
                    }`}
                  >
                    <span className="size-1.5 rounded-full bg-ink" />
                  </span>

                  <span
                    className={`text-xs sm:text-[0.95rem] ${
                      b.active
                        ? "font-bold text-ink"
                        : "font-semibold text-ink/65"
                    }`}
                  >
                    {b.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Full HD Man in Red Sweater Holding White Puppy Card with Pop-Out Head & 3D Glossy Heart */}
            <div className="relative mt-2 sm:mt-0 w-40 sm:w-52 h-32 sm:h-38 shrink-0 select-none">
              {/* Tilted Coral Back Card */}
              <div
                aria-hidden="true"
                className="absolute inset-0 rotate-[4deg] rounded-[14px] border border-ink bg-[#F78C6B]"
              />
              {/* Tilted Peach Front Card */}
              <div className="relative h-full w-full -rotate-[4deg] rounded-[14px] border border-ink bg-[#F3DEC8]">
                {/* Man + White Puppy Cutout popping out above top border */}
                <div className="pointer-events-none absolute inset-x-2 -top-7 bottom-0 z-10 overflow-hidden rounded-b-[13px]">
                  <Image
                    src="/images/serve/hd-man-puppy-cutout.png"
                    alt="Happy pet parent holding white puppy"
                    fill
                    sizes="240px"
                    className="object-contain object-bottom"
                  />
                </div>
              </div>
              {/* 3D Glossy Red Heart Badge on Top-Right Corner */}
              <div className="absolute -right-3.5 -top-3.5 z-20">
                <GlossyHeartBadge className="size-9 sm:size-10" />
              </div>
            </div>
          </div>
        </div>

        {/* ── Right Side: Exact 2-Column Staggered Multi-Pet Badges & Cat Postage Ticket ── */}
        <div className="flex items-center justify-center lg:justify-end">
          <div className="grid grid-cols-2 gap-x-5 sm:gap-x-7 gap-y-5 sm:gap-y-6 items-center w-fit">
            {/* ── ROW 1 ── */}
            {/* Column 1, Row 1: BIRD Text Card */}
            <div className="size-28 sm:size-34 lg:size-36 flex items-center justify-center rounded-[18px] border border-ink bg-[#EFECE6] transition-transform hover:-translate-y-1">
              <span className="font-display text-xl sm:text-2xl tracking-tight uppercase text-ink">
                BIRD
              </span>
            </div>

            {/* Column 2, Row 1: BIRD Avatar Circle (Full HD Scarlet Macaw on warm cream circle) */}
            <div className="size-28 sm:size-34 lg:size-36 rounded-full overflow-hidden relative bg-[#EFE5DC] transition-transform hover:scale-105">
              <Image
                src="/images/serve/hd-bird.jpg"
                alt="Scarlet Macaw bird"
                fill
                sizes="160px"
                className="object-cover object-top"
              />
            </div>

            {/* ── ROW 2 ── */}
            {/* Column 1, Row 2: CAT Avatar Circle (Full HD Ginger Kitten on yellow circle) */}
            <div className="size-28 sm:size-34 lg:size-36 rounded-full overflow-hidden relative bg-[#FFDF4A] transition-transform hover:scale-105">
              <Image
                src="/images/serve/hd-cat.jpg"
                alt="Ginger kitten in yellow circle"
                fill
                sizes="160px"
                className="object-cover object-top"
              />
            </div>

            {/* Column 2, Row 2: CAT Postage Stamp Ticket */}
            <div className="flex items-center justify-center">
              <CatPostageStamp />
            </div>

            {/* ── ROW 3 ── */}
            {/* Column 1, Row 3: DOGS Text Card */}
            <div className="size-28 sm:size-34 lg:size-36 flex items-center justify-center rounded-[18px] border border-ink bg-[#EAD8C3] transition-transform hover:-translate-y-1">
              <span className="font-display text-xl sm:text-2xl tracking-tight uppercase text-ink">
                DOGS
              </span>
            </div>

            {/* Column 2, Row 3: DOGS Avatar Circle (Full HD Brindle Dog on orange circle) */}
            <div className="size-28 sm:size-34 lg:size-36 rounded-full overflow-hidden relative bg-[#FA9A4B] transition-transform hover:scale-105">
              <Image
                src="/images/serve/hd-dog.jpg"
                alt="Happy dog in orange circle"
                fill
                sizes="160px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
