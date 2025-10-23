import { TrendingUp, Zap, Banknote } from "lucide-react";

export default function AdvantagesSection() {
  const advantages = [
    {
      icon: TrendingUp,
      title: "Zéro Retour à Vide",
      description:
        "Maximisez votre rentabilité en trouvant des chargements pour chaque trajet. Notre plateforme vous aide à éviter les kilomètres vides.",
    },
    {
      icon: Zap,
      title: "Simplicité et Rapidité",
      description:
        "Trouvez, réservez et gérez vos chargements en quelques clics. Interface intuitive conçue pour les professionnels du transport.",
    },
    {
      icon: Banknote,
      title: "Paiement Rapide Garanti",
      description:
        "Recevez vos paiements rapidement et en toute sécurité. Notre système garantit la fiabilité de vos transactions.",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            La Bourse de Fret Idéale pour les Transporteurs
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#00A6B8]/10">
                  <Icon className="h-8 w-8 text-[#00A6B8]" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">
                  {advantage.title}
                </h3>
                <p className="mt-4 text-base text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
