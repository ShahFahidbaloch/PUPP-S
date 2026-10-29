"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { NAV } from "@/lib/site";
import { BrandPawIcon } from "@/components/ui/brand-icons";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" aria-label="PUPP'S home" className="inline-flex items-center gap-2">
      <BrandPawIcon className="size-7 shrink-0" color="#2CB7FF" />
      <span
        className={`font-display text-[1.45rem] leading-none tracking-tight ${
          light ? "text-white" : "text-ink"
        }`}
      >
        PUPP&apos;S
      </span>
    </Link>
  );
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 w-full pointer-events-none">
      <div className="container-site">
        <nav
          aria-label="Main"
          className="pointer-events-auto flex items-center justify-between rounded-b-[20px] border-x border-b border-stone-300/90 bg-white px-4 py-3.5 sm:px-7 sm:py-4"
        >
          {/* Logo */}
          <Logo />

          {/* Desktop Nav Links */}
          <ul className="hidden items-center gap-7 lg:gap-9 md:flex">
            {NAV.map((item) => (
              <li key={item.label} className="group relative">
                <a
                  href={item.href}
                  className="flex items-center gap-1 py-1.5 text-[0.88rem] font-medium text-ink transition-colors hover:text-sky"
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown className="size-3.5 stroke-[2.2] transition-transform duration-200 group-hover:rotate-180" />
                  )}
                </a>
                {item.children && (
                  <ul className="invisible absolute left-1/2 top-full z-50 min-w-40 -translate-x-1/2 translate-y-1 rounded-2xl border border-ink bg-white p-1.5 opacity-0 shadow-lg transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {item.children.map((c) => (
                      <li key={c.label}>
                        <a
                          href={c.href}
                          className="block rounded-xl px-3.5 py-2 text-xs font-medium text-ink hover:bg-sun-soft"
                        >
                          {c.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Right Action: Book Now Pill */}
          <div className="flex items-center gap-2.5">
            <a
              href="#book"
              id="nav-book"
              className="hidden rounded-full border border-ink bg-white px-6 py-2 text-xs font-medium text-ink transition-all hover:bg-ink hover:text-white active:scale-95 md:inline-block"
            >
              Book Now
            </a>
            <button
              id="nav-menu-toggle"
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className="grid size-10 place-items-center rounded-full border border-ink bg-white text-ink transition-colors hover:bg-stone-100 md:hidden"
            >
              {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="pointer-events-auto fixed inset-x-0 top-[4.25rem] z-50 h-[calc(100dvh-4.25rem)] border-t border-stone-200 bg-white md:hidden"
          >
            <div className="container-site flex h-full flex-col justify-between pb-28 pt-6">
              <ul className="flex flex-col divide-y divide-stone-200">
                {NAV.map((item, i) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="font-display block py-4 text-2xl uppercase tracking-wide text-ink transition-colors hover:text-sky"
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <a
                href="#book"
                onClick={() => setMobileOpen(false)}
                className="flex w-full items-center justify-center rounded-full border border-ink bg-[#FFEB2A] py-3.5 text-sm font-bold text-ink"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
