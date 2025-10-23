import Footer from "@/components/Footer";
import Link from "next/link";
import {
  CheckCircle2,
  ShieldCheck,
  Timer,
  Truck,
  Wallet,
  Headphones,
  ArrowRight,
  BarChart3,
  Route,
  Gauge,
} from "lucide-react";

export const metadata = {
  title: "BFP | Pour les transporteurs",
  description:
    "Remplissez mieux vos camions, réduisez les kilomètres à vide et trouvez des chargements fiables avec BFP.",
};

export default function TransportersPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-b from-[#E8FAFC] to-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-flex items-center rounded-full bg-[#00A6B8]/10 px-3 py-1 text-xs font-semibold text-[#007F8E] mb-4">
                Transporteurs
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-gray-900">
                Trouvez des chargements, réduisez vos retours à vide
              </h1>
              <p className="mt-4 text-base md:text-lg text-gray-600">
                Accédez à des demandes qualifiées en Europe et au Maghreb. Optimisez votre taux de remplissage, sécurisez vos paiements et gardez une visibilité complète sur vos trajets.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link
                  href="#inscription"
                  className="inline-flex items-center justify-center rounded-md bg-[#00A6B8] px-6 py-3 text-white font-semibold shadow hover:bg-[#008a9a] transition-colors"
                >
                  Devenir transporteur
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="#features"
                  className="inline-flex items-center justify-center rounded-md border border-[#00A6B8] px-6 py-3 text-[#00A6B8] font-semibold hover:bg-[#00A6B8]/5 transition-colors"
                >
                  Découvrir les avantages
                </Link>
              </div>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm text-gray-700">
                <div>
                  <div className="text-2xl font-bold text-gray-900">-20%</div>
                  <div>Kilomètres à vide</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">+30%</div>
                  <div>Taux de remplissage</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">48h</div>
                  <div>Paiement accéléré</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">24/7</div>
                  <div>Support dédié</div>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute -top-6 -left-6 h-24 w-24 rounded-2xl bg-[#00A6B8]/10" />
              <div className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-[#00A6B8]/10" />
              <div className="relative rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg border border-gray-100 p-4">
                    <Route className="h-6 w-6 text-[#00A6B8]" />
                    <p className="mt-2 text-sm font-semibold">Trajets optimisés</p>
                    <p className="text-xs text-gray-500">Moins de retours à vide</p>
                  </div>
                  <div className="rounded-lg border border-gray-100 p-4">
                    <Truck className="h-6 w-6 text-[#00A6B8]" />
                    <p className="mt-2 text-sm font-semibold">Chargements fiables</p>
                    <p className="text-xs text-gray-500">Réseau d'expéditeurs</p>
                  </div>
                  <div className="rounded-lg border border-gray-100 p-4">
                    <ShieldCheck className="h-6 w-6 text-[#00A6B8]" />
                    <p className="mt-2 text-sm font-semibold">Sécurité & conformité</p>
                    <p className="text-xs text-gray-500">Contrats & documents</p>
                  </div>
                  <div className="rounded-lg border border-gray-100 p-4">
                    <BarChart3 className="h-6 w-6 text-[#00A6B8]" />
                    <p className="mt-2 text-sm font-semibold">Performance</p>
                    <p className="text-xs text-gray-500">KPI & visibilité</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Avantages */}
        <section id="features" className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
              Pourquoi les transporteurs choisissent BFP
            </h2>
            <p className="mt-3 text-gray-600 text-center max-w-2xl mx-auto">
              Des fonctionnalités conçues pour développer votre activité et simplifier votre quotidien.
            </p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FeatureCard icon={<Route className="h-6 w-6 text-[#00A6B8]" />} title="Moins de retours à vide" desc="Optimisez vos itinéraires et réduisez les kilomètres inutiles grâce à des chargements complémentaires." />
              <FeatureCard icon={<Truck className="h-6 w-6 text-[#00A6B8]" />} title="Accès à des chargements" desc="Recevez des opportunités qualifiées correspondant à vos capacités et à vos trajets." />
              <FeatureCard icon={<Wallet className="h-6 w-6 text-[#00A6B8]" />} title="Paiements sécurisés" desc="Bénéficiez de paiements rapides et sécurisés avec un suivi clair de la facturation." />
              <FeatureCard icon={<Timer className="h-6 w-6 text-[#00A6B8]" />} title="Réservation rapide" desc="Acceptez des chargements en quelques clics et gardez le contrôle de votre planning." />
              <FeatureCard icon={<ShieldCheck className="h-6 w-6 text-[#00A6B8]" />} title="Confiance & conformité" desc="Partenaires vérifiés, documents à jour et assistance dédiée en cas de besoin." />
              <FeatureCard icon={<Gauge className="h-6 w-6 text-[#00A6B8]" />} title="Performance optimisée" desc="Suivez vos KPI: taux de remplissage, ponctualité, satisfaction clients." />
            </div>
          </div>
        </section>

        {/* Comment ça marche */}
        <section className="bg-[#F6FEFF] py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:3xl md:text-3xl font-bold text-gray-900 text-center">
              Comment ça marche ?
            </h2>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              <StepCard step="1" title="Paramétrez vos trajets" desc="Indiquez vos zones, vos disponibilités et votre type de camion." />
              <StepCard step="2" title="Recevez des demandes" desc="Recevez des offres adaptées et acceptez celles qui vous conviennent." />
              <StepCard step="3" title="Livrez et soyez payé" desc="Effectuez la prestation, validez la POD et suivez votre paiement." />
            </div>
          </div>
        </section>

        {/* Points clés */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <ul className="space-y-4">
              {[
                "Chargements qualifiés et réguliers",
                "Réduction des kilomètres à vide",
                "Visibilité en temps réel et documents digitaux",
                "Assistance dédiée 24/7",
              ].map((item) => (
                <li key={item} className="flex items-start">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#00A6B8]" />
                  <span className="ml-3 text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="rounded-2xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-xl font-semibold">Boostez votre rentabilité</h3>
              <p className="mt-2 text-gray-600">
                Remplissez mieux vos camions, gagnez du temps sur l'administratif et accédez à un réseau d'expéditeurs fiables pour développer votre activité.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="inscription" className="py-16 md:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-[#00A6B8] text-white p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold">Prêt à prendre la route avec BFP ?</h3>
              <p className="mt-2 text-white/90">
                Créez votre compte transporteur et commencez à recevoir des demandes adaptées à vos trajets.
              </p>
              <div className="mt-6">
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-[#00A6B8] font-semibold shadow hover:bg-white/90 transition-colors"
                >
                  Créer un compte transporteur
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow bg-white">
      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#00A6B8]/10">
        {icon}
      </div>
      <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-1 text-gray-600 text-sm">{desc}</p>
    </div>
  );
}

function StepCard({
  step,
  title,
  desc,
}: {
  step: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border border-gray-100 p-6 bg-white">
      <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#00A6B8]/10 text-[#00A6B8] font-bold">
        {step}
      </div>
      <h4 className="mt-3 text-lg font-semibold text-gray-900">{title}</h4>
      <p className="mt-1 text-gray-600 text-sm">{desc}</p>
    </div>
  );
}
