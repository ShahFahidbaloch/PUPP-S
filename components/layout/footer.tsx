"use client";

import { Mail } from "lucide-react";
import { Logo } from "./navbar";
import { BrandPawIcon } from "@/components/ui/brand-icons";

export function Footer() {
  return (
    <footer className="w-full bg-[#161616] text-white pb-24 md:pb-0">
      <div className="container-site pt-12 pb-10 sm:pt-14 sm:pb-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-0 md:divide-x md:divide-white/10">
          {/* ── Column 1: Quick Links ── */}
          <div className="md:pr-8 lg:pr-12">
            <h3 className="text-xs font-bold tracking-wide text-white">
              Quick Links
            </h3>
            <div className="mt-4 grid grid-cols-2 gap-6 max-w-[15rem] text-xs text-white/65">
              <ul className="space-y-2.5">
                <li>
                  <a href="#about" className="transition-colors hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#training" className="transition-colors hover:text-white">
                    Training
                  </a>
                </li>
                <li>
                  <a href="#accessories" className="transition-colors hover:text-white">
                    Accessories
                  </a>
                </li>
                <li>
                  <a href="#grooming" className="transition-colors hover:text-white">
                    Grooming
                  </a>
                </li>
              </ul>
              <ul className="space-y-2.5">
                <li>
                  <a href="#treats" className="transition-colors hover:text-white">
                    Treatments
                  </a>
                </li>
                <li>
                  <a href="#reviews" className="transition-colors hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#services" className="transition-colors hover:text-white">
                    Services
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* ── Column 2: Centered Brand & Socials ── */}
          <div className="flex flex-col items-start md:items-center justify-center md:px-8">
            <Logo light />
            <p className="mt-3 text-xs font-medium text-white/80">
              Leave your pets in safe hands
            </p>
            <div className="mt-5 flex items-center gap-2.5">
              {/* LinkedIn */}
              <a
                href="#book"
                aria-label="LinkedIn"
                className="grid size-8 place-items-center rounded-md border border-white/20 text-[0.7rem] font-bold text-white/85 transition-colors hover:border-[#2CB7FF] hover:text-[#2CB7FF]"
              >
                in
              </a>
              {/* Facebook */}
              <a
                href="#book"
                aria-label="Facebook"
                className="grid size-8 place-items-center rounded-md border border-white/20 text-xs font-bold text-white/85 transition-colors hover:border-[#2CB7FF] hover:text-[#2CB7FF]"
              >
                f
              </a>
              {/* Instagram */}
              <a
                href="#book"
                aria-label="Instagram"
                className="grid size-8 place-items-center rounded-md border border-white/20 text-white/85 transition-colors hover:border-[#2CB7FF] hover:text-[#2CB7FF]"
              >
                <svg viewBox="0 0 24 24" className="size-3.5 fill-none stroke-current" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              {/* Twitter */}
              <a
                href="#book"
                aria-label="Twitter"
                className="grid size-8 place-items-center rounded-md border border-white/20 text-white/85 transition-colors hover:border-[#2CB7FF] hover:text-[#2CB7FF]"
              >
                <svg viewBox="0 0 24 24" className="size-3.5 fill-current">
                  <path d="M22 5.8a8.4 8.4 0 0 1-2.4.7 4.2 4.2 0 0 0 1.8-2.3 8.3 8.3 0 0 1-2.6 1 4.1 4.1 0 0 0-7 3.8 11.7 11.7 0 0 1-8.5-4.3 4.1 4.1 0 0 0 1.3 5.5 4.1 4.1 0 0 1-1.9-.5v.1a4.1 4.1 0 0 0 3.3 4 4.2 4.2 0 0 1-1.9.1 4.1 4.1 0 0 0 3.8 2.9A8.3 8.3 0 0 1 2 18.4a11.7 11.7 0 0 0 6.3 1.8c7.5 0 11.7-6.3 11.7-11.7v-.5A8.4 8.4 0 0 0 22 5.8Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* ── Column 3: Subscribe & Contact ── */}
          <div className="md:pl-8 lg:pl-12">
            <h3 className="text-xs font-bold tracking-wide text-white">
              Subscribe
            </h3>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-3 flex w-full max-w-[15.5rem] items-center rounded-full border border-white/15 bg-[#202020] py-1 pl-4 pr-1"
            >
              <input
                type="email"
                placeholder="Email"
                aria-label="Email address"
                className="w-full bg-transparent text-xs text-white placeholder:text-white/45 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="grid size-7 shrink-0 place-items-center rounded-full bg-[#FF7B29] transition-transform hover:scale-105 active:scale-95"
              >
                <BrandPawIcon className="size-4 rotate-12" color="#161616" />
              </button>
            </form>

            <div className="mt-4 space-y-1.5">
              <a
                href="mailto:mail@pupp.com"
                className="flex items-center gap-2 text-xs text-white/70 transition-colors hover:text-white"
              >
                <Mail className="size-3.5 text-white/60" />
                <span>mail@pupp.com</span>
              </a>
              <a
                href="tel:+3025550137"
                className="block text-xs font-bold tracking-wider text-white transition-colors hover:text-[#FFDF3B]"
              >
                +302-555-0137
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Divider + Copyright */}
        <div className="mt-10 border-t border-white/10 pt-5 text-center">
          <p className="text-[0.68rem] text-white/50">
            All rights reserved @pupp.com
          </p>
        </div>
      </div>
    </footer>
  );
}
