import HeroSection from "@/components/HeroSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import FunctionalitiesSection from "@/components/FunctionalitiesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <AdvantagesSection />
        <FunctionalitiesSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}
