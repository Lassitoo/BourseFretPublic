import { Button } from "@/components/ui/button";
import { Apple, Smartphone } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#00A6B8] to-[#0088a0] py-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>

      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Transporteurs
          </h1>
          <p className="mt-6 text-xl text-white/90 max-w-3xl mx-auto">
            Trouvez votre prochain chargement en quelques clics
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-black hover:bg-gray-900 text-white px-6 py-6 text-base"
            >
              <Apple className="mr-2 h-5 w-5" />
              Télécharger sur App Store
            </Button>
            <Button
              size="lg"
              className="bg-white hover:bg-gray-100 text-gray-900 px-6 py-6 text-base"
            >
              <Smartphone className="mr-2 h-5 w-5" />
              Disponible sur Google Play
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
