"use client";

import Image from "next/image";
import { CollarLineIcon } from "@/components/ui/brand-icons";

const PETS = [
  {
    name: "AFRICAN MACAW",
    src: "/images/macaw-card-hd.jpg",
    bg: "bg-[#FA8F37]",
    alt: "Blue and gold African Macaw parrot",
  },
  {
    name: "SPANISH BULLDOG",
    src: "/images/bulldog-card.jpg",
    bg: "bg-[#FDE047]",
    alt: "French Bulldog wearing a patterned sweater",
  },
  {
    name: "SPANIEL DOG",
    src: "/images/spaniel-card.jpg",
    bg: "bg-[#2CB7FF]",
    alt: "Cavalier King Charles Spaniel smiling",
  },
];

export function PetCollection() {
  return (
    <section id="grooming" className="pb-16 pt-4 md:pb-28">
      <div className="container-site">
        {/* Header row */}
        <header className="mb-8 flex flex-col gap-3 sm:mb-12 md:flex-row md:items-center md:justify-between">
          <h2 className="font-display text-[1.65rem] leading-[1.02] tracking-tight text-ink sm:text-[2.35rem] lg:text-[2.65rem]">
            WELL GROOMED PET COLLECTION
          </h2>
          <div className="flex items-center justify-between gap-4 md:justify-end md:gap-6">
            <p className="text-xs sm:text-[0.82rem] font-medium leading-relaxed text-ink/85">
              We have huge collection of
              <br />
              domestic animal.
            </p>
            <CollarLineIcon className="w-11 sm:w-14 h-auto shrink-0" />
          </div>
        </header>

        {/* 3 Clean, Vibrant Pet Cards */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-3 md:gap-7 lg:gap-9">
          {PETS.map((pet) => (
            <div key={pet.name} className="flex flex-col items-center">
              <a
                href="#book"
                className="group relative block w-full focus-visible:outline-none"
              >
                <div
                  className={`relative aspect-square w-full overflow-hidden rounded-[22px] sm:rounded-[26px] ${pet.bg} transition-transform duration-300 group-hover:-translate-y-1.5`}
                >
                  <Image
                    src={pet.src}
                    alt={pet.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 90vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Bottom label */}
                <h3 className="mt-4 text-center font-display text-lg sm:text-xl tracking-tight uppercase text-ink transition-colors group-hover:text-sky">
                  {pet.name}
                </h3>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
