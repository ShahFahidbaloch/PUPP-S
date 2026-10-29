"use client";

import { Scissors, Droplets, MousePointer2, PawPrint, Wind } from "lucide-react";

const HYGIENE_SERVICES = [
  {
    name: "Full Grooming",
    price: "$80",
    duration: "90 min",
    icon: Scissors,
    desc: "Complete breed-standard groom with bath, blow-dry, cut & style.",
  },
  {
    name: "Hydrobath",
    price: "$45",
    duration: "45 min",
    icon: Droplets,
    desc: "Deep-cleaning hydrobath with premium shampoo & conditioner.",
  },
  {
    name: "Nail Trim",
    price: "$20",
    duration: "15 min",
    icon: MousePointer2,
    desc: "Precise nail clipping & filing for comfort & safety.",
  },
  {
    name: "Paw Pad Care",
    price: "$15",
    duration: "10 min",
    icon: PawPrint,
    desc: "Moisturising balm & trim for healthy, crack-free pads.",
  },
  {
    name: "De-shedding",
    price: "$55",
    duration: "60 min",
    icon: Wind,
    desc: "Undercoat removal to reduce shedding & prevent matting.",
  },
];

export function HygieneSpa() {
  return (
    <section id="hygiene" className="container-site pb-20 md:pb-28">
      <header className="mb-12 text-center">
        <h2 className="text-[2.2rem] font-bold leading-none sm:text-h2">
          HYGIENE & SPA DETAILS
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-muted">
          Professional grooming services tailored to your pet&apos;s breed, coat
          and comfort. Every visit includes a health check.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {HYGIENE_SERVICES.map((service) => (
          <article
            key={service.name}
            className="group relative flex flex-col items-center text-center p-5 rounded-card border-[1.5px] border-ink bg-paper shadow-[3px_3px_0px_#111827] transition-all duration-300 hover:-translate-y-1 hover:shadow-[5px_5px_0px_#111827]"
          >
            <span className="mb-3 grid size-12 place-items-center rounded-full border-[1.5px] border-ink bg-sky-soft shadow-[2px_2px_0px_#111827] transition-transform duration-300 group-hover:scale-110">
              <service.icon className="size-5 stroke-ink" strokeWidth={2} />
            </span>
            <h3 className="font-display text-sm tracking-wide uppercase text-ink">
              {service.name}
            </h3>
            <div className="mt-1.5 flex items-center justify-center gap-3 text-xs font-semibold text-muted">
              <span>{service.price}</span>
              <span className="text-ink/30">·</span>
              <span>{service.duration}</span>
            </div>
            <p className="mt-2 text-[0.75rem] leading-relaxed text-muted">
              {service.desc}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}