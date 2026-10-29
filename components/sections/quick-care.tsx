"use client";

import Image from "next/image";
import { CircleText } from "@/components/ui/circle-text";

export function QuickCare() {
  return (
    <section
      id="training"
      aria-label="Quick care guides"
      className="container-site pt-8 pb-16 sm:pt-12 md:pb-24"
    >
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-8 items-end">
        {/* ── Card 1: Beagle Popping Out + "LEARN HOW TO CARE PUPPY'S" + "$13 MONTH" ── */}
        <article className="relative pt-7 sm:pt-10">
          {/* Card Border Box */}
          <div className="relative grid grid-cols-[5.5rem_1fr_6.5rem] sm:grid-cols-[7.5rem_1fr_9.5rem] items-stretch rounded-[20px] border border-ink bg-white min-h-[9.5rem] sm:min-h-[11rem]">
            {/* Spacer column for Beagle on all screens */}
            <div />

            {/* Middle Text Column */}
            <div className="flex flex-col justify-center py-4 px-2 sm:py-5 sm:px-5">
              <h2 className="font-display text-[1rem] sm:text-[1.4rem] leading-[1.12] tracking-tight uppercase text-ink">
                LEARN HOW TO
                <br />
                CARE PUPPY&apos;S
              </h2>
              <a
                href="#book"
                id="quick-care-read-more"
                className="mt-2.5 sm:mt-3.5 inline-block w-fit text-[0.72rem] sm:text-[0.8rem] font-semibold text-ink underline decoration-ink underline-offset-4 transition-colors hover:text-sky"
              >
                Read Article
              </a>
            </div>

            {/* Right Stamp Column with full-height vertical divider */}
            <div className="flex items-center justify-center border-l border-ink px-2 py-3 sm:px-5 sm:py-4">
              <CircleText
                text="GROOMING • EXERCISE • TRAINING • "
                className="size-20 sm:size-28 shrink-0"
              >
                <div className="text-center leading-none">
                  <span className="font-display block text-base sm:text-2xl font-bold text-ink">
                    $13
                  </span>
                  <span className="mt-0.5 block text-[0.48rem] sm:text-[0.55rem] font-extrabold uppercase tracking-wider text-ink">
                    MONTH
                  </span>
                </div>
              </CircleText>
            </div>
          </div>

          {/* Beagle Puppy Cutout sitting on left & popping above top border */}
          <div className="pointer-events-none absolute left-0 sm:-left-3 -bottom-1.5 sm:-bottom-2 z-20 h-42 w-24 sm:h-52 sm:w-34">
            <Image
              src="/images/beagle.png"
              alt="Beagle puppy sitting"
              fill
              sizes="160px"
              loading="eager"
              className="object-contain object-bottom"
            />
          </div>
        </article>

        {/* ── Card 2: Blue Meat Ball Pouch Popping Out + "BASIC NUTRITION MEAT BALL" ── */}
        <article id="treats" className="relative pt-7 sm:pt-10">
          <div className="relative grid grid-cols-[6.75rem_1fr] sm:grid-cols-[10rem_1fr] items-stretch rounded-[20px] border border-ink bg-white min-h-[9.5rem] sm:min-h-[11rem]">
            {/* Left Pouch Column with full-height vertical divider */}
            <div className="relative border-r border-ink">
              <div className="pointer-events-none absolute inset-x-1.5 sm:inset-x-2 -top-6 sm:-top-8 bottom-1.5 sm:bottom-2 z-20">
                <Image
                  src="/images/meatball-pouch-hd.png"
                  alt="100% Natural Puppy Care Meat Ball pouch"
                  fill
                  sizes="180px"
                  loading="eager"
                  className="object-contain object-bottom drop-shadow-[0_10px_16px_rgba(17,17,17,0.16)]"
                />
              </div>
            </div>

            {/* Right Text Column */}
            <div className="flex flex-col justify-center px-4 py-4 sm:px-8 sm:py-5">
              <h2 className="font-display text-[1.08rem] sm:text-[1.4rem] leading-[1.12] tracking-tight uppercase text-ink">
                BASIC NUTRITION
                <br />
                MEAT BALL
              </h2>
              <a
                href="#book"
                id="quick-care-explore"
                className="mt-2.5 sm:mt-3.5 inline-block w-fit text-[0.72rem] sm:text-[0.8rem] font-semibold text-ink underline decoration-ink underline-offset-4 transition-colors hover:text-sky"
              >
                Shop Now
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
