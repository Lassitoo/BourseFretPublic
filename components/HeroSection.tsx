import { Button } from "@/components/ui/button";
import { Apple, Smartphone } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#00A6B8] to-[#0088a0] py-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>

      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Bourse Fret Public
          </h1>
          <p className="mt-6 text-xl text-white/90 max-w-3xl mx-auto">
            Trouvez votre prochain chargement en quelques clics
          </p>

          <div className="mt-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Le Futur du Transport Routier
            </h2>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-2 tracking-tight">
              commence ici
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}