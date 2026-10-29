"use client";

import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import { BoneDoodleSvg } from "@/components/ui/brand-icons";

export function FeatureNutrition() {
  return (
    <section id="accessories" className="container-site pt-12 sm:pt-16 pb-20 md:pb-28 overflow-x-clip">
      {/* ── Top Split: Girl with Frenchie Popping Out of Arch & Nutrition Headline ── */}
      <div className="grid items-center gap-12 md:grid-cols-[1fr_1.1fr] lg:gap-16">
        {/* Left: Sky-Blue Arch with Cutout Girl + Frenchie popping out top & sides */}
        <div className="relative mx-auto w-full max-w-[22rem] sm:max-w-[24rem] pt-14 sm:pt-16">
          <div className="relative mx-auto w-[78%] aspect-[3.5/4.0] rounded-t-full bg-[#2CB7FF]">
            <div className="pointer-events-none absolute -inset-x-[12%] -top-[18%] bottom-0 z-10">
              <Image
                src="/images/girl-frenchie-cutout.png"
                alt="Smiling woman cuddling French Bulldog in sweater"
                fill
                sizes="(min-width: 1024px) 440px, 90vw"
                className="object-contain object-bottom"
              />
            </div>
          </div>
        </div>

        {/* Right: Tilted Grid Backdrop + Headline + Order Now | 🛍️ */}
        <div className="relative z-10 flex flex-col items-start py-4">
          {/* Tilted Graph-Paper Grid behind headline */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-x-6 -inset-y-6 -z-10 rotate-[7deg] opacity-75"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(17,17,17,0.065) 1px, transparent 1px), linear-gradient(to bottom, rgba(17,17,17,0.065) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
              maskImage:
                "radial-gradient(ellipse 80% 75% at 50% 50%, black 45%, transparent 95%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 80% 75% at 50% 50%, black 45%, transparent 95%)",
            }}
          />

          <h2 className="font-display text-[clamp(2.15rem,9.5vw,2.6rem)] leading-[0.96] tracking-tight text-ink sm:text-[3.2rem] lg:text-[3.6rem]">
            <span className="block">THE BEST FOOD</span>
            <span className="mt-1 flex flex-wrap items-center gap-2 sm:gap-3">
              <span>FOR</span>
              {/* Orange Pill with Coral Circle on Left + Cutout Golden Puppy Popping Out Top */}
              <span className="relative inline-flex h-[0.74em] w-[1.52em] items-center rounded-full bg-[#FA8F37] px-1 align-middle select-none">
                <span
                  aria-hidden="true"
                  className="size-[0.58em] shrink-0 rounded-full bg-[#F75532] shadow-xs"
                />
                <span className="pointer-events-none absolute right-0.5 -top-[0.22em] bottom-0 w-[0.98em] z-10 overflow-hidden rounded-b-full">
                  <Image
                    src="/images/food-pill-puppy.png"
                    alt="Golden puppy"
                    fill
                    loading="eager"
                    sizes="96px"
                    className="object-contain object-bottom scale-110"
                  />
                </span>
              </span>
              <span>YOUR</span>
            </span>
            <span className="mt-1 block">FURRY FRIEND</span>
          </h2>

          <p className="mt-4 sm:mt-5 max-w-sm text-xs sm:text-[0.88rem] font-medium leading-[1.6] text-ink/80">
            To provide your pet balanced and healthy
            <br />
            life, to reduce sickness.
          </p>

          <a
            href="#book"
            id="nutrition-order-now"
            className="group mt-6 sm:mt-7 inline-flex items-center gap-3 rounded-full border border-ink bg-white px-6 py-2.5 text-xs sm:text-sm font-bold text-ink transition-all hover:bg-ink hover:text-white active:scale-95"
          >
            <span>Order Now</span>
            <span className="opacity-40 font-normal">|</span>
            <ShoppingBag className="size-4 transition-transform group-hover:scale-110" />
          </a>
        </div>
      </div>

      {/* ── Bottom Yellow Banner: 3 Supplement Pouches + Assistance Copy ── */}
      <div className="relative mt-24 sm:mt-28 rounded-[24px] bg-[#FFE552] px-5 pt-9 pb-7 sm:p-9 lg:p-11">
        {/* Bone Doodle + Peeking Shih Tzu Puppy resting paws on top-right border */}
        <div className="pointer-events-none absolute -top-16 right-3 sm:-top-22 sm:right-12 lg:right-20 z-20 flex items-center gap-1.5 sm:gap-2.5">
          <BoneDoodleSvg className="w-10 h-7 sm:w-14 sm:h-10 -mt-3 sm:-mt-4 opacity-85" />
          <div className="relative h-21 w-24 sm:h-29 sm:w-32">
            <Image
              src="/images/peeking-shih-tzu-hd.png"
              alt="Cute fluffy Shih Tzu puppy resting paws on top of banner"
              fill
              sizes="160px"
              className="object-contain object-bottom drop-shadow-[0_6px_12px_rgba(17,17,17,0.14)]"
            />
          </div>
        </div>

        <div className="grid items-center gap-8 md:grid-cols-[1.25fr_1fr] lg:gap-12">
          {/* Left: 3 Supplement Pouches in White Bordered Cards */}
          <div className="grid grid-cols-3 gap-3 sm:gap-5">
            {[
              {
                src: "/images/pouch-green-hd.png",
                alt: "PUPP'S Carrot & Salmon green supplement pouch",
              },
              {
                src: "/images/pouch-orange-hd.png",
                alt: "PUPP'S Beef Meat & Grain orange supplement pouch",
              },
              {
                src: "/images/pouch-blue-hd.png",
                alt: "PUPP'S Chicken & Duck, Rice blue supplement pouch",
              },
            ].map((pouch) => (
              <div
                key={pouch.src}
                className="group flex aspect-[1/1.15] items-center justify-center rounded-[18px] sm:rounded-[22px] border border-ink bg-white p-2.5 sm:p-4 shadow-[0_6px_16px_rgba(17,17,17,0.05)] transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="relative h-full w-full">
                  <Image
                    src={pouch.src}
                    alt={pouch.alt}
                    fill
                    sizes="(min-width: 640px) 160px, 30vw"
                    className="object-contain drop-shadow-[0_8px_14px_rgba(17,17,17,0.16)] transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Right: Headline + Description */}
          <div className="flex flex-col items-start">
            <h3 className="font-display text-xl sm:text-2xl lg:text-[1.75rem] leading-[1.08] tracking-tight uppercase text-ink">
              GET OUR ASSISTANCE TO
              <br />
              BENEFIT YOUR PET
            </h3>
            <p className="mt-3 max-w-xs text-xs sm:text-[0.82rem] font-medium leading-relaxed text-ink/85">
              Pups are rich in vitamins, minerals, and fiber.
              <br />
              Also a good source of antioxidants.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
