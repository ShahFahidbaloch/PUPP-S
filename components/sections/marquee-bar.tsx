"use client";

import {
  BowCircleBadge,
  CapsulePillEmoji,
  FishboneSvg,
  GlossyHeartBadge,
  PuppyFaceEmoji,
} from "@/components/ui/brand-icons";

const ITEMS = [
  {
    label: "GROOMING",
    renderIcon: () => <BowCircleBadge className="size-9 sm:size-10" />,
  },
  {
    label: "HEALTH",
    renderIcon: () => <CapsulePillEmoji className="size-8 sm:size-9" />,
  },
  {
    label: "FEEDING",
    renderIcon: () => (
      <FishboneSvg className="w-10 sm:w-11 h-auto -rotate-[35deg]" />
    ),
  },
  {
    label: "LOVE",
    renderIcon: () => <GlossyHeartBadge className="size-8 sm:size-9" />,
  },
  {
    label: "SITTING",
    renderIcon: () => <PuppyFaceEmoji className="size-8 sm:size-9" />,
  },
];

export function MarqueeBar() {
  return (
    <div className="w-full overflow-hidden bg-[#FFDF3B] py-1.5 select-none">
      <div className="border-y border-white/80 py-3 sm:py-3.5">
        <div className="flex w-max animate-marquee items-center">
          {[...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 sm:gap-6 px-4 sm:px-6"
            >
              <span className="font-display text-xl sm:text-2xl tracking-tight uppercase text-ink">
                {item.label}
              </span>
              {item.renderIcon()}
              <span
                aria-hidden="true"
                className="ml-2 sm:ml-4 h-5 w-px bg-ink/45"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
