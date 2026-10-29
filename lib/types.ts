export type PetType = "dog" | "cat" | "bird";
export type PetSize = "small" | "medium" | "large";

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Service {
  id: "full-grooming" | "pet-bath" | "daycare" | "nail-trim";
  name: string;
  price: number;
  duration: string;
}

export interface BookingDraft {
  petType: PetType | null;
  breed: string;
  size: PetSize | null;
  serviceId: Service["id"] | null;
  date: string;
  timeSlot: string;
  name: string;
  phone: string;
  email: string;
}
