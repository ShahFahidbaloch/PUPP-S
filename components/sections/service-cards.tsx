"use client";

import { Heart, Baby, Shield, Sparkles } from "lucide-react";

const SERVICES = [
  {
    name: "Adoption",
    icon: Heart,
    desc: "Find your perfect companion through our trusted adoption network.",
  },
  {
    name: "Fostering",
    icon: Baby,
    desc: "Provide a temporary loving home for pets in transition.",
  },
  {
    name: "Vaccination",
    icon: Shield,
    desc: "Keep your pet protected with up-to-date vaccinations.",
  },
  {
    name: "Grooming",
    icon: Sparkles,
    desc: "Professional grooming tailored to breed and coat type.",
  },
];

export function ServiceCards() {
  return (
    <section id="services" className="container-site pb-20 md:pb-28">
      <header className="mb-12 text-center">
        <h2 className="text-[2.2rem] font-bold leading-none sm:text-h2">
          HOW WE SERVE OUR PET PARENTS
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-muted">
          From finding your new best friend to keeping them healthy and looking
          sharp — we&apos;re here for every step of the journey.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((service) => (
          <article
            key={service.name}
            className="group relative flex flex-col items-center text-center p-6 rounded-card border-[1.5px] border-ink bg-paper shadow-[3px_3px_0px_#111827] transition-all duration-300 hover:-translate-y-1 hover:shadow-[5px_5px_0px_#111827]"
          >
            <span className="mb-4 grid size-14 place-items-center rounded-full border-[1.5px] border-ink bg-sun shadow-[2px_2px_0px_#111827] transition-transform duration-300 group-hover:scale-110">
              <service.icon className="size-6 stroke-ink" strokeWidth={2} />
            </span>
            <h3 className="font-display text-lg tracking-wide uppercase text-ink">
              {service.name}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {service.desc}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}