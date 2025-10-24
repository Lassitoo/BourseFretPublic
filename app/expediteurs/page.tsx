import Footer from "@/components/Footer";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, Timer, Truck, Wallet, Headphones, ArrowRight, BarChart3, Globe2 } from "lucide-react";

export const metadata = {
  title: "BFP | Pour les expéditeurs",
  description:
    "Optimisez vos expéditions: trouvez des camions disponibles, réduisez vos coûts et suivez vos envois en temps réel avec BFP.",
};

export default function ExpediteursPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-b from-[#E8FAFC] to-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-flex items-center rounded-full bg-[#00A6B8]/10 px-3 py-1 text-xs font-semibold text-[#007F8E] mb-4">
                Expéditeurs
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-gray-900">
                Expédiez plus vite, au meilleur prix, en toute confiance
              </h1>
              <p className="mt-4 text-base md:text-lg text-gray-600">
                Accédez instantanément à un réseau fiable de transporteurs et réservez vos camions en quelques clics. Optimisez votre logistique et gardez le contrôle de A à Z.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link
                  href="#demarrer"
                  className="inline-flex items-center justify-center rounded-md bg-[#00A6B8] px-6 py-3 text-white font-semibold shadow hover:bg-[#008a9a] transition-colors"
                >
                  Commencer maintenant
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
                  <div className="text-2xl font-bold text-gray-900">24/7</div>
                  <div>Support</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">-15%</div>
                  <div>Coûts de transport</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">+10k</div>
                  <div>Camions disponibles</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">Temps réel</div>
                  <div>Suivi & visibilité</div>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute -top-6 -left-6 h-24 w-24 rounded-2xl bg-[#00A6B8]/10" />
              <div className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-[#00A6B8]/10" />
              <div className="relative rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg border border-gray-100 p-4">
                    <Truck className="h-6 w-6 text-[#00A6B8]" />
                    <p className="mt-2 text-sm font-semibold">Camions disponibles</p>
                    <p className="text-xs text-gray-500">FTL, LTL, Europe & Maghreb</p>
                  </div>
                  <div className="rounded-lg border border-gray-100 p-4">
                    <Timer className="h-6 w-6 text-[#00A6B8]" />
                    <p className="mt-2 text-sm font-semibold">Réservation rapide</p>
                    <p className="text-xs text-gray-500">En quelques clics</p>
                  </div>
                  <div className="rounded-lg border border-gray-100 p-4">
                    <ShieldCheck className="h-6 w-6 text-[#00A6B8]" />
                    <p className="mt-2 text-sm font-semibold">Transporteurs vérifiés</p>
                    <p className="text-xs text-gray-500">Confiance & conformité</p>
                  </div>
                  <div className="rounded-lg border border-gray-100 p-4">
                    <BarChart3 className="h-6 w-6 text-[#00A6B8]" />
                    <p className="mt-2 text-sm font-semibold">Visibilité totale</p>
                    <p className="text-xs text-gray-500">Suivi & KPI</p>
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
              Pourquoi les expéditeurs choisissent BFP
            </h2>
            <p className="mt-3 text-gray-600 text-center max-w-2xl mx-auto">
              Des fonctionnalités pensées pour vos besoins: fiabilité, économies et simplicité.
            </p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FeatureCard icon={<Truck className="h-6 w-6 text-[#00A6B8]" />} title="Capacité à la demande" desc="Accédez à un vaste réseau de camions pour couvrir vos pics d'activité, en Europe et au Maghreb." />
              <FeatureCard icon={<Wallet className="h-6 w-6 text-[#00A6B8]" />} title="Optimisation des coûts" desc="Profitez de tarifs compétitifs et d'une meilleure utilisation des retours à vide." />
              <FeatureCard icon={<ShieldCheck className="h-6 w-6 text-[#00A6B8]" />} title="Fiabilité & conformité" desc="Transporteurs vérifiés, documents à jour et assurance incluse pour chaque transport." />
              <FeatureCard icon={<Timer className="h-6 w-6 text-[#00A6B8]" />} title="Réservation rapide" desc="Publiez votre demande et recevez des propositions immédiates. Réservez en quelques clics." />
              <FeatureCard icon={<Globe2 className="h-6 w-6 text-[#00A6B8]" />} title="Couverture internationale" desc="Expédiez à l'échelle européenne et entre l'Europe et le Maghreb sans complexité." />
              <FeatureCard icon={<Headphones className="h-6 w-6 text-[#00A6B8]" />} title="Support dédié" desc="Une assistance disponible 24/7 pour vous accompagner à chaque étape." />
            </div>
          </div>
        </section>

        {/* Comment ça marche */}
        <section className="bg-[#F6FEFF] py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
              Comment ça marche ?
            </h2>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              <StepCard step="1" title="Publiez votre besoin" desc="Décrivez votre chargement, l'origine, la destination et la date souhaitée." />
              <StepCard step="2" title="Recevez des offres" desc="Comparez les propositions des transporteurs vérifiés et choisissez la meilleure." />
              <StepCard step="3" title="Suivez votre expédition" desc="Bénéficiez d'une visibilité en temps réel et de preuves de livraison." />
            </div>
          </div>
        </section>

        {/* Points clés */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <ul className="space-y-4">
              {[
                "Réseau vaste et qualifié de transporteurs",
                "Réservation simple et rapide",
                "Suivi en temps réel et documents digitaux",
                "Service client réactif et disponible",
              ].map((item) => (
                <li key={item} className="flex items-start">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#00A6B8]" />
                  <span className="ml-3 text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="rounded-2xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-xl font-semibold">ROI immédiat</h3>
              <p className="mt-2 text-gray-600">
                Réduisez vos coûts logistiques et gagnez du temps dès la première utilisation grâce à l'automatisation et à une meilleure allocation des ressources.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="demarrer" className="py-16 md:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-[#00A6B8] text-white p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold">
                Prêt à expédier plus simplement ?
              </h3>
              <p className="mt-2 text-white/90">
                Créez votre compte et accédez immédiatement aux meilleures capacités de transport.
              </p>
              <div className="mt-6">
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-[#00A6B8] font-semibold shadow hover:bg-white/90 transition-colors"
                >
                  Créer un compte
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
    <div className="rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow bg-white text-center flex flex-col items-center">
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
    <div className="rounded-2xl border border-gray-100 p-6 bg-white text-center flex flex-col items-center">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#00A6B8]/10 text-[#00A6B8] font-bold">
        {step}
      </div>
      <h4 className="mt-3 text-lg font-semibold text-gray-900">{title}</h4>
      <p className="mt-1 text-gray-600 text-sm">{desc}</p>
    </div>
  );
}