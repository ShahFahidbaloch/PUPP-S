import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { QuickCare } from "@/components/sections/quick-care";
import { PetCollection } from "@/components/sections/pet-collection";
import { FeatureNutrition } from "@/components/sections/feature-nutrition";
import { ServiceBreakdown } from "@/components/sections/service-breakdown";
import { Testimonials } from "@/components/sections/testimonials";
import { MarqueeBar } from "@/components/sections/marquee-bar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <QuickCare />
        <PetCollection />
        <FeatureNutrition />
        <ServiceBreakdown />
        <Testimonials />
        <MarqueeBar />
      </main>
      <Footer />
    </>
  );
}
