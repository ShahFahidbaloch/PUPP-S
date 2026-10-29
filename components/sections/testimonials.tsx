"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { CareDogLineIcon, PuppyFaceEmoji } from "@/components/ui/brand-icons";

export function Testimonials() {
  return (
    <section id="reviews" className="container-site pb-20 pt-4 md:pb-24">
      {/* ── Large 3-Column Testimonial Table Card (matches reference comp) ── */}
      <div className="overflow-hidden rounded-[24px] border border-ink bg-[#F0EFEA] grid grid-cols-1 md:grid-cols-[1.15fr_1.2fr_0.95fr] divide-y md:divide-y-0 md:divide-x divide-ink">
        {/* ── Column 1: What We Care The Most? ── */}
        <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
          <CareDogLineIcon className="mb-5 size-12" />

          <h3 className="font-display text-2xl sm:text-[1.85rem] leading-[1.05] tracking-tight uppercase text-ink">
            WHAT WE CARE
            <br />
            THE MOST?
          </h3>

          <p className="mt-5 text-xs sm:text-[0.82rem] font-medium leading-[1.7] text-ink/85">
            <span className="font-display text-base sm:text-lg tracking-tight text-ink">
              PUPP&apos;S
            </span>{" "}
            — has a unique pet service, starts with anatomic research, analyzes,
            and provides precise growth, and health.
          </p>
        </div>

        {/* ── Column 2: Clients Testimonial (3 Horizontal Rows) ── */}
        <div className="flex flex-col divide-y divide-ink">
          {/* Top Row: Label + 01 - */}
          <div className="flex items-center justify-between px-7 py-5 sm:px-9 sm:py-6">
            <span className="text-xs font-bold leading-tight text-ink">
              Clients
              <br />
              Testimonial
            </span>
            <span className="font-display text-3xl sm:text-4xl tracking-tight text-ink">
              01 -
            </span>
          </div>

          {/* Middle Row: Orange Quote Circle + Review Copy */}
          <div className="flex-1 px-7 py-6 sm:px-9 sm:py-7">
            <span
              className="mb-3.5 inline-grid size-7 place-items-center rounded-full bg-[#FF7328] font-display text-base leading-none text-white"
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <p className="text-xs sm:text-[0.8rem] font-medium leading-[1.68] text-ink/90">
              Thanks for your patient to take care my Pudding for the whole
              week. Great care taker. Will definitely send my Pudding to you for
              home boarding again.
            </p>
          </div>

          {/* Bottom Row: Author */}
          <div className="flex py-5 md:py-0 md:h-[5.5rem] flex-col justify-center px-7 sm:px-9">
            <h4 className="font-display text-base sm:text-lg tracking-tight uppercase text-ink">
              SHANNON PAPPERT
            </h4>
            <p className="text-[0.7rem] font-medium text-ink/70">
              Adventure Travellers
            </p>
          </div>
        </div>

        {/* ── Column 3: Emerald Frenchie Card + Bottom Book a Schedule Row ── */}
        <div className="flex flex-col divide-y divide-ink">
          {/* Top Area: Frenchie in Emerald Square with Orange Play Button */}
          <div className="flex flex-1 flex-col items-center justify-center p-7 sm:p-8">
            <div className="relative w-36 sm:w-40 aspect-square">
              <div className="relative size-full overflow-hidden rounded-[18px] bg-[#16A36A]">
                <Image
                  src="/images/bulldog.png"
                  alt="French Bulldog on green backdrop"
                  fill
                  sizes="170px"
                  className="object-cover object-top scale-110 translate-y-2"
                />
              </div>
              {/* Floating Orange Play Badge on right border */}
              <span
                className="absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 grid size-7 place-items-center rounded-full bg-[#FF7328] text-white shadow-md"
                aria-hidden="true"
              >
                <Play className="size-3 fill-current ml-0.5" />
              </span>
            </div>

            <p className="mt-3.5 text-center text-xs font-bold text-ink">
              Never miss a moment!
            </p>
          </div>

          {/* Bottom Row (aligned with SHANNON PAPPERT): Book a Schedule | 🐶 */}
          <div className="flex py-5 md:py-0 md:h-[5.5rem] items-center justify-center px-6">
            <a
              href="#book"
              id="testimonial-book"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-ink bg-white px-5 py-2.5 text-xs font-bold text-ink transition-all hover:bg-ink hover:text-white active:scale-95"
            >
              <span>Book a Schedule</span>
              <span className="opacity-40 font-normal">|</span>
              <PuppyFaceEmoji className="size-4.5 transition-transform group-hover:scale-110" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
