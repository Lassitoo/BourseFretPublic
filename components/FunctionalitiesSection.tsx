import { Gavel, Truck, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function FunctionalitiesSection() {
  const functionalities = [
    {
      icon: Gavel,
      title: "Enchères",
      description:
        "Enchérissez sur les offres de fret qui correspondent à votre itinéraire. Système transparent et en temps réel pour maximiser vos opportunités.",
      features: [
        "Accès aux offres en temps réel",
        "Système d'enchères transparent",
        "Notifications instantanées",
      ],
    },
    {
      icon: Truck,
      title: "Disponibilité Camion",
      description:
        "Publiez la disponibilité de vos véhicules et recevez des propositions adaptées à vos trajets et capacités.",
      features: [
        "Publication simple et rapide",
        "Matching automatique",
        "Gestion de flotte",
      ],
    },
    {
      icon: Target,
      title: "Matching Automatique",
      description:
        "Notre algorithme intelligent vous propose automatiquement les chargements les plus pertinents selon vos critères.",
      features: [
        "Algorithme intelligent",
        "Suggestions personnalisées",
        "Gain de temps optimal",
      ],
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Fonctionnalités Clés
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Tout ce dont vous avez besoin pour optimiser votre activité
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {functionalities.map((functionality, index) => {
            const Icon = functionality.icon;
            return (
              <Card
                key={index}
                className="hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-[#00A6B8]">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-gray-900">
                    {functionality.title}
                  </h3>
                  <p className="mt-4 text-base text-gray-600 leading-relaxed">
                    {functionality.description}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {functionality.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-sm text-gray-600"
                      >
                        <svg
                          className="h-5 w-5 text-[#00A6B8] mr-2 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
