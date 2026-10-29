import type { NavItem, Service } from "./types";

export const SITE = {
  name: "PUPP'S",
  phone: "+64 4 555 0137",
  phoneHref: "tel:+6445550137",
  email: "hello@pupps.co.nz",
  locations: ["Wellington", "Auckland"],
} as const;

/* Nav labels match the reference comp exactly */
export const NAV: NavItem[] = [
  { label: "About", href: "#about" },
  {
    label: "Treats",
    href: "#treats",
    children: [
      { label: "Meal Bowls", href: "#treats" },
      { label: "Snacks", href: "#treats" },
    ],
  },
  { label: "Training", href: "#training" },
  { label: "Accessories", href: "#accessories" },
  { label: "Grooming", href: "#grooming" },
];

export const SERVICES: Service[] = [
  { id: "full-grooming", name: "Full Grooming", price: 80, duration: "90 min" },
  { id: "pet-bath", name: "Pet Bath", price: 45, duration: "45 min" },
  { id: "daycare", name: "Daycare", price: 61, duration: "Full day" },
  { id: "nail-trim", name: "Nail Trim", price: 20, duration: "15 min" },
];

export const MARQUEE = [
  { label: "GROOMING", emoji: "🎀" },
  { label: "HEALTH", emoji: "💊" },
  { label: "FEEDING", emoji: "🦴" },
  { label: "LOVE", emoji: "💖" },
  { label: "SITTING", emoji: "🐶" },
];
