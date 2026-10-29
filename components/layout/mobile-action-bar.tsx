import { Phone } from "lucide-react";
import { SITE } from "@/lib/site";
import { PuppyFaceEmoji } from "@/components/ui/brand-icons";

/* Mobile-only sticky bottom bar: thumb-reach booking + call */
export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-stone-200 bg-white/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-md md:hidden">
      <div className="flex items-center gap-3">
        <a
          href={SITE.phoneHref}
          id="mobile-call"
          aria-label={`Call ${SITE.phone}`}
          className="grid size-11 shrink-0 place-items-center rounded-full border border-ink bg-white text-ink transition-transform active:scale-95"
        >
          <Phone className="size-4.5" />
        </a>
        <a
          href="#book"
          id="mobile-book"
          className="flex h-11 flex-1 items-center justify-center gap-2.5 rounded-full border border-ink bg-[#FFEB2A] text-xs font-bold text-ink shadow-[2px_2px_0_0_#111111] transition-all active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
        >
          <span>Book a Schedule</span>
          <span className="text-ink/40 font-normal">|</span>
          <PuppyFaceEmoji className="size-5" />
        </a>
      </div>
    </div>
  );
}
