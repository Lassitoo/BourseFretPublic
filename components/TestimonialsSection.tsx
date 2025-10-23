import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Jean-Pierre Martin",
      role: "Transporteur Indépendant",
      rating: 5,
      text: "Cloudfret a révolutionné ma façon de trouver des chargements. Plus de retours à vide et des paiements rapides. Je recommande vivement !",
    },
    {
      name: "Sophie Durand",
      role: "Directrice de Flotte",
      rating: 5,
      text: "Interface intuitive et fonctionnalités parfaitement adaptées à nos besoins. L'équipe a gagné un temps précieux dans la gestion quotidienne.",
    },
    {
      name: "Michel Lefebvre",
      role: "Gérant Transport",
      rating: 5,
      text: "Le système de matching automatique est impressionnant. On trouve des chargements pertinents sans effort. Excellent retour sur investissement.",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Ce que disent nos transporteurs
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Rejoignez des milliers de professionnels satisfaits
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
