"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  PawPrint,
  Sparkles,
  X,
} from "lucide-react";

export type PetType = "dog" | "cat" | "bird" | "other";

interface ServiceItem {
  id: string;
  name: string;
  price: number;
  duration: string;
  desc: string;
  icon: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: "groom",
    name: "Full Groom & Spa",
    price: 80,
    duration: "75 min",
    desc: "Hydrobath, coat styling, blow dry, ear clean & paw balm",
    icon: "✂️",
  },
  {
    id: "bath",
    name: "Fresh Pet Bath",
    price: 45,
    duration: "45 min",
    desc: "Hypoallergenic shampoo lather, warm blow dry & brush out",
    icon: "🛁",
  },
  {
    id: "daycare",
    name: "Daycare & Play",
    price: 61,
    duration: "Full Day",
    desc: "Supervised indoor/outdoor park play, puzzle toys & naps",
    icon: "🎾",
  },
  {
    id: "nails",
    name: "Nail Trim & Hygiene",
    price: 20,
    duration: "20 min",
    desc: "Gentle nail clipping, paw pad trim & ear sanitizing",
    icon: "💅",
  },
  {
    id: "nutrition",
    name: "Nutritional Consult",
    price: 35,
    duration: "30 min",
    desc: "Certified diet review & personalized healthy meal plan",
    icon: "🥗",
  },
];

const ADDONS = [
  { id: "flea", name: "Flea & Tick Defense", price: 15 },
  { id: "balm", name: "Organic Paw Balm", price: 10 },
  { id: "teeth", name: "Teeth Brush & Minty Breath", price: 12 },
];

const TIME_SLOTS = [
  "09:00 AM",
  "10:30 AM",
  "11:45 AM",
  "01:30 PM",
  "03:00 PM",
  "04:30 PM",
];

export function BookingModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  // Form State
  const [petType, setPetType] = useState<PetType>("dog");
  const [petName, setPetName] = useState("");
  const [petSize, setPetSize] = useState<"Small" | "Medium" | "Large">("Medium");

  const [selectedService, setSelectedService] = useState<string>("groom");
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const [selectedDate, setSelectedDate] = useState("Tomorrow");
  const [selectedTime, setSelectedTime] = useState("10:30 AM");

  const [ownerName, setOwnerName] = useState("");
  const [ownerPhone, setOwnerPhone] = useState("");
  const [ownerEmail, setOwnerEmail] = useState("");

  // Global listener for "#book" links and custom events
  useEffect(() => {
    function handleHashChange() {
      if (window.location.hash === "#book") {
        setIsOpen(true);
      }
    }

    function handleDocClick(e: MouseEvent) {
      const target = (e.target as HTMLElement).closest('a[href="#book"], button[data-book="true"]');
      if (target) {
        e.preventDefault();
        setIsOpen(true);
      }
    }

    function handleCustomOpen() {
      setIsOpen(true);
    }

    window.addEventListener("hashchange", handleHashChange);
    document.addEventListener("click", handleDocClick);
    window.addEventListener("open-booking-modal", handleCustomOpen);

    // Initial check
    if (window.location.hash === "#book") {
      queueMicrotask(() => setIsOpen(true));
    }

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      document.removeEventListener("click", handleDocClick);
      window.removeEventListener("open-booking-modal", handleCustomOpen);
    };
  }, []);

  // Body scroll lock & Escape key
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setIsOpen(false);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen]);

  const activeServiceObj = SERVICES.find((s) => s.id === selectedService) || SERVICES[0];
  const addonsTotal = selectedAddons.reduce((sum, addId) => {
    const found = ADDONS.find((a) => a.id === addId);
    return sum + (found ? found.price : 0);
  }, 0);
  const totalPrice = activeServiceObj.price + addonsTotal;

  function toggleAddon(id: string) {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  }

  function handleReset() {
    setStep(1);
    setPetName("");
    setSelectedAddons([]);
    setOwnerName("");
    setOwnerPhone("");
    setOwnerEmail("");
    setIsOpen(false);
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
          
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-[#111827]/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ type: "spring", damping: 25, stiffness: 320 }}
            className="relative z-10 w-full max-w-xl rounded-[28px] sm:rounded-[34px] border-2 border-ink bg-[#FFFDF8] p-5 sm:p-8 shadow-[8px_8px_0px_#111827] my-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b-2 border-ink/10 pb-4">
              <div className="flex items-center gap-2.5">
                <span className="grid size-9 place-items-center rounded-full bg-[#FED230] border-[1.5px] border-ink text-ink shadow-[2px_2px_0px_#111827]">
                  <PawPrint className="size-4.5" />
                </span>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl uppercase tracking-wide text-ink leading-tight">
                    BOOK A PET SESSION
                  </h3>
                  <p className="text-xs text-ink/70 font-medium">
                    30-Second Hassle-Free Intake
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close modal"
                className="grid size-9 place-items-center rounded-full border-[1.5px] border-ink bg-white text-ink shadow-[2px_2px_0px_#111827] transition-all hover:bg-ink hover:text-white active:scale-95"
              >
                <X className="size-4.5" />
              </button>
            </div>

            {/* Stepper Indicator */}
            {step < 4 && (
              <div className="mt-5 flex items-center justify-between gap-2 px-1">
                {[
                  { n: 1, title: "Pet Info" },
                  { n: 2, title: "Services" },
                  { n: 3, title: "Schedule" },
                ].map((s) => (
                  <div key={s.n} className="flex-1">
                    <div className="flex items-center gap-2">
                      <span
                        className={`grid size-6 place-items-center rounded-full text-xs font-bold border-[1.5px] border-ink ${
                          step >= s.n
                            ? "bg-[#FED230] text-ink"
                            : "bg-white text-ink/40"
                        }`}
                      >
                        {step > s.n ? <Check className="size-3 stroke-[3]" /> : s.n}
                      </span>
                      <span
                        className={`text-xs font-bold uppercase tracking-wider hidden sm:inline ${
                          step >= s.n ? "text-ink" : "text-ink/40"
                        }`}
                      >
                        {s.title}
                      </span>
                    </div>
                    <div
                      className={`mt-2 h-1.5 w-full rounded-full border border-ink/20 ${
                        step >= s.n ? "bg-[#FED230]" : "bg-ink/10"
                      }`}
                    />
                  </div>
                ))}
              </div>
            )}

            {/* ── STEP 1: PET DETAILS ── */}
            {step === 1 && (
              <div className="mt-6 space-y-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-2">
                    1. Choose Pet Type
                  </label>
                  <div className="grid grid-cols-4 gap-2.5 sm:gap-3">
                    {[
                      { id: "dog", label: "Dog", icon: "🐶" },
                      { id: "cat", label: "Cat", icon: "🐱" },
                      { id: "bird", label: "Bird", icon: "🦜" },
                      { id: "other", label: "Other", icon: "🐰" },
                    ].map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setPetType(t.id as PetType)}
                        className={`flex flex-col items-center justify-center p-3 rounded-2xl border-[1.5px] border-ink text-center transition-all ${
                          petType === t.id
                            ? "bg-[#FED230] shadow-[3px_3px_0px_#111827] -translate-y-0.5"
                            : "bg-white hover:bg-neutral-50"
                        }`}
                      >
                        <span className="text-2xl">{t.icon}</span>
                        <span className="mt-1 font-bold text-xs uppercase tracking-wide text-ink">
                          {t.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-1.5">
                    2. Pet&apos;s Name
                  </label>
                  <input
                    type="text"
                    value={petName}
                    onChange={(e) => setPetName(e.target.value)}
                    placeholder="e.g. Milo, Luna, Sasha"
                    className="w-full rounded-2xl border-[1.5px] border-ink bg-white px-4 py-3 font-medium text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-[#FED230] shadow-[2px_2px_0px_#111827]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-2">
                    3. Approximate Size
                  </label>
                  <div className="grid grid-cols-3 gap-2.5">
                    {[
                      { id: "Small", label: "Small (< 10kg)" },
                      { id: "Medium", label: "Medium (10-25kg)" },
                      { id: "Large", label: "Large (25kg+)" },
                    ].map((s) => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setPetSize(s.id as "Small" | "Medium" | "Large")}
                        className={`py-2.5 px-2 rounded-xl border-[1.5px] border-ink text-center text-xs font-bold transition-all ${
                          petSize === s.id
                            ? "bg-ink text-[#FED230] shadow-[2px_2px_0px_#FED230]"
                            : "bg-white text-ink hover:bg-neutral-50"
                        }`}
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-full flex items-center justify-center gap-2 rounded-full border-2 border-ink bg-[#FED230] py-3.5 text-base font-bold text-ink shadow-[4px_4px_0px_#111827] transition-all hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
                  >
                    Select Services
                    <ChevronRight className="size-5" />
                  </button>
                </div>
              </div>
            )}

            {/* ── STEP 2: SERVICE SELECTION ── */}
            {step === 2 && (
              <div className="mt-5 space-y-4">
                <div className="max-h-[260px] overflow-y-auto pr-1 space-y-2.5">
                  {SERVICES.map((srv) => (
                    <div
                      key={srv.id}
                      onClick={() => setSelectedService(srv.id)}
                      className={`flex items-start justify-between p-3.5 rounded-2xl border-[1.5px] border-ink cursor-pointer transition-all ${
                        selectedService === srv.id
                          ? "bg-[#FED230]/25 border-ink shadow-[3px_3px_0px_#111827]"
                          : "bg-white hover:bg-neutral-50"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-2xl mt-0.5">{srv.icon}</span>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-bold text-sm sm:text-base text-ink">
                              {srv.name}
                            </h4>
                            <span className="text-[11px] font-semibold text-ink/60 bg-ink/5 px-2 py-0.5 rounded-md">
                              {srv.duration}
                            </span>
                          </div>
                          <p className="text-xs text-ink/75 mt-0.5 leading-relaxed">
                            {srv.desc}
                          </p>
                        </div>
                      </div>
                      <span className="font-display text-lg text-ink font-bold">
                        ${srv.price}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Add-ons */}
                <div className="pt-2 border-t border-ink/10">
                  <span className="block text-xs font-bold uppercase tracking-wider text-ink mb-2">
                    Recommended Add-ons (Optional)
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {ADDONS.map((add) => {
                      const active = selectedAddons.includes(add.id);
                      return (
                        <button
                          key={add.id}
                          type="button"
                          onClick={() => toggleAddon(add.id)}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border-[1.5px] border-ink text-xs font-bold transition-all ${
                            active
                              ? "bg-[#38BDF8] text-white shadow-[2px_2px_0px_#111827]"
                              : "bg-white text-ink hover:bg-neutral-50"
                          }`}
                        >
                          <span>{active ? "✓" : "+"}</span>
                          <span>{add.name}</span>
                          <span className="text-ink/70">(${add.price})</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Subtotal & Nav */}
                <div className="flex items-center justify-between pt-3 border-t border-ink/10">
                  <div className="leading-tight">
                    <span className="text-xs text-ink/70 font-semibold block">Total Estimate</span>
                    <span className="font-display text-2xl text-ink font-bold">${totalPrice}</span>
                  </div>

                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-4 py-2.5 rounded-full border-[1.5px] border-ink bg-white font-bold text-xs text-ink shadow-[2px_2px_0px_#111827] active:scale-95"
                    >
                      <ChevronLeft className="size-4 inline mr-1" />
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="px-6 py-2.5 rounded-full border-[1.5px] border-ink bg-[#FED230] font-bold text-xs text-ink shadow-[2px_2px_0px_#111827] active:scale-95 flex items-center gap-1"
                    >
                      Choose Slot
                      <ChevronRight className="size-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* ── STEP 3: SCHEDULE & CONTACT ── */}
            {step === 3 && (
              <div className="mt-5 space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-1.5">
                    Preferred Day
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {["Today", "Tomorrow", "Saturday", "Sunday"].map((d) => (
                      <button
                        key={d}
                        type="button"
                        onClick={() => setSelectedDate(d)}
                        className={`py-2 px-1 text-center rounded-xl border-[1.5px] border-ink text-xs font-bold transition-all ${
                          selectedDate === d
                            ? "bg-[#FED230] shadow-[2px_2px_0px_#111827]"
                            : "bg-white text-ink hover:bg-neutral-50"
                        }`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-1.5">
                    Available Time Slot
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {TIME_SLOTS.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedTime(slot)}
                        className={`py-2 px-2 text-center rounded-xl border-[1.5px] border-ink text-xs font-bold transition-all ${
                          selectedTime === slot
                            ? "bg-ink text-[#FED230] shadow-[2px_2px_0px_#FED230]"
                            : "bg-white text-ink hover:bg-neutral-50"
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Owner info */}
                <div className="space-y-2 pt-1 border-t border-ink/10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <input
                      type="text"
                      value={ownerName}
                      onChange={(e) => setOwnerName(e.target.value)}
                      placeholder="Your Full Name"
                      className="rounded-xl border-[1.5px] border-ink bg-white px-3 py-2 text-xs font-medium text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-[#FED230]"
                    />
                    <input
                      type="tel"
                      value={ownerPhone}
                      onChange={(e) => setOwnerPhone(e.target.value)}
                      placeholder="Mobile (+64 4 555 0137)"
                      className="rounded-xl border-[1.5px] border-ink bg-white px-3 py-2 text-xs font-medium text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-[#FED230]"
                    />
                  </div>
                  <input
                    type="email"
                    value={ownerEmail}
                    onChange={(e) => setOwnerEmail(e.target.value)}
                    placeholder="Email Address (for instant confirmation)"
                    className="w-full rounded-xl border-[1.5px] border-ink bg-white px-3 py-2 text-xs font-medium text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-[#FED230]"
                  />
                </div>

                {/* Buttons */}
                <div className="flex items-center justify-between pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-4 py-2.5 rounded-full border-[1.5px] border-ink bg-white font-bold text-xs text-ink shadow-[2px_2px_0px_#111827] active:scale-95"
                  >
                    <ChevronLeft className="size-4 inline mr-1" />
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(4)}
                    className="flex-1 ml-3 py-3 rounded-full border-2 border-ink bg-[#FED230] font-bold text-sm text-ink shadow-[4px_4px_0px_#111827] transition-all hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none flex items-center justify-center gap-2"
                  >
                    Confirm Appointment 🐾
                  </button>
                </div>
              </div>
            )}

            {/* ── STEP 4: SUCCESS CONFIRMATION TICKET ── */}
            {step === 4 && (
              <div className="mt-4 text-center">
                <div className="inline-grid size-14 place-items-center rounded-full bg-[#FED230] border-2 border-ink shadow-[3px_3px_0px_#111827] mb-3 animate-bounce">
                  <Sparkles className="size-7 text-ink" />
                </div>

                <h3 className="font-display text-2xl sm:text-3xl text-ink uppercase tracking-wide">
                  YOU&apos;RE ALL BOOKED!
                </h3>
                <p className="text-xs sm:text-sm text-ink/75 max-w-sm mx-auto mt-1">
                  We have reserved your appointment slot. Our groomers are excited to meet{" "}
                  <strong className="text-ink">{petName || "your pet"}</strong>!
                </p>

                {/* Stylized Confirmation Ticket */}
                <div className="mt-4 mx-auto max-w-sm rounded-2xl border-2 border-dashed border-ink bg-[#FFF9E6] p-4 text-left shadow-[4px_4px_0px_#111827]">
                  <div className="flex items-center justify-between border-b border-ink/20 pb-2">
                    <span className="font-display text-sm tracking-wider uppercase text-ink">
                      PUPP&apos;S APPOINTMENT PASS
                    </span>
                    <span className="text-[11px] font-bold bg-[#FED230] px-2 py-0.5 rounded-full border border-ink">
                      VERIFIED
                    </span>
                  </div>

                  <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-ink/60 font-medium block">Pet</span>
                      <strong className="text-ink capitalize">
                        {petName || "Pet"} ({petType})
                      </strong>
                    </div>
                    <div>
                      <span className="text-ink/60 font-medium block">Service</span>
                      <strong className="text-ink">{activeServiceObj.name}</strong>
                    </div>
                    <div>
                      <span className="text-ink/60 font-medium block">When</span>
                      <strong className="text-ink">
                        {selectedDate} • {selectedTime}
                      </strong>
                    </div>
                    <div>
                      <span className="text-ink/60 font-medium block">Total Estimate</span>
                      <strong className="text-ink font-bold text-sm text-[#E11D48]">
                        ${totalPrice}
                      </strong>
                    </div>
                  </div>

                  <div className="mt-3 pt-2 border-t border-ink/20 text-[11px] text-ink/70 flex items-center justify-between">
                    <span>📍 Auckland Central Studio</span>
                    <span>📞 +64 4 555 0137</span>
                  </div>
                </div>

                <div className="mt-5 flex gap-3 justify-center">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-8 py-3 rounded-full border-2 border-ink bg-ink text-paper font-bold text-xs uppercase tracking-wider shadow-[3px_3px_0px_#FED230] active:scale-95"
                  >
                    Done & Close
                  </button>
                </div>
              </div>
            )}

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
