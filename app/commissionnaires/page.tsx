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
  Globe2,
  Handshake,
  Layers,
} from "lucide-react";

export const metadata = {
  title: "Cloudfret | Pour les commissionnaires",
  description:
    "Développez votre activité de commissionnaire: trouvez des capacités fiables, digitalisez vos opérations et améliorez vos marges avec Cloudfret.",
};

export default function CommissionnairesPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-b from-[#E8FAFC] to-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-flex items-center rounded-full bg-[#00A6B8]/10 px-3 py-1 text-xs font-semibold text-[#007F8E] mb-4">
                Commissionnaires
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-gray-900">
                Gagnez en visibilité, fiabilité et marge sur chaque transport
              </h1>
              <p className="mt-4 text-base md:text-lg text-gray-600">
                Accédez instantanément à des transporteurs vérifiés, digitalisez vos opérations et suivez vos dossiers en temps réel. Cloudfret est votre allié pour une croissance maîtrisée.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link
                  href="#demarrer"
                  className="inline-flex items-center justify-center rounded-md bg-[#00A6B8] px-6 py-3 text-white font-semibold shadow hover:bg-[#008a9a] transition-colors"
                >
                  Demarrer maintenant
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
                  <div className="text-2xl font-bold text-gray-900">+10k</div>
                  <div>Transporteurs</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">-15%</div>
                  <div>Coûts d'exploitation</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">24/7</div>
                  <div>Support dédié</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">Temps réel</div>
                  <div>Suivi & KPI</div>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute -top-6 -left-6 h-24 w-24 rounded-2xl bg-[#00A6B8]/10" />
              <div className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-[#00A6B8]/10" />
              <div className="relative rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg border border-gray-100 p-4">
                    <Handshake className="h-6 w-6 text-[#00A6B8]" />
                    <p className="mt-2 text-sm font-semibold">Partenaires fiables</p>
                    <p className="text-xs text-gray-500">Réseau qualifié</p>
                  </div>
                  <div className="rounded-lg border border-gray-100 p-4">
                    <Layers className="h-6 w-6 text-[#00A6B8]" />
                    <p className="mt-2 text-sm font-semibold">Dossiers simplifiés</p>
                    <p className="text-xs text-gray-500">Devis à facturation</p>
                  </div>
                  <div className="rounded-lg border border-gray-100 p-4">
                    <ShieldCheck className="h-6 w-6 text-[#00A6B8]" />
                    <p className="mt-2 text-sm font-semibold">Conformité</p>
                    <p className="text-xs text-gray-500">Documents & assurance</p>
                  </div>
                  <div className="rounded-lg border border-gray-100 p-4">
                    <BarChart3 className="h-6 w-6 text-[#00A6B8]" />
                    <p className="mt-2 text-sm font-semibold">Performance</p>
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
              Pourquoi les commissionnaires choisissent Cloudfret
            </h2>
            <p className="mt-3 text-gray-600 text-center max-w-2xl mx-auto">
              Gagnez en fiabilité, accédez à plus de capacités et digitalisez votre cycle de transport pour améliorer votre marge et la satisfaction client.
            </p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FeatureCard icon={<Handshake className="h-6 w-6 text-[#00A6B8]" />} title="Réseau qualifié" desc="Accédez à un large réseau de transporteurs vérifiés pour garantir la qualité de service." />
              <FeatureCard icon={<Wallet className="h-6 w-6 text-[#00A6B8]" />} title="Meilleure marge" desc="Optimisez vos coûts et maximisez la rentabilité de vos dossiers." />
              <FeatureCard icon={<ShieldCheck className="h-6 w-6 text-[#00A6B8]" />} title="Conformité & assurance" desc="Documents à jour, conformité réglementaire et assurance incluse pour chaque transport." />
              <FeatureCard icon={<Timer className="h-6 w-6 text-[#00A6B8]" />} title="Opérations accélérées" desc="Gagnez du temps sur la recherche, la réservation, le suivi et la facturation." />
              <FeatureCard icon={<Globe2 className="h-6 w-6 text-[#00A6B8]" />} title="Couverture étendue" desc="Europe et Maghreb, FTL / LTL en fonction de vos besoins." />
              <FeatureCard icon={<Headphones className="h-6 w-6 text-[#00A6B8]" />} title="Support 24/7" desc="Un accompagnement dédié pour vos opérations et vos clients finaux." />
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
              <StepCard step="1" title="Publiez votre dossier" desc="Décrivez le besoin, l'origine, la destination, la marchandise et l'échéance." />
              <StepCard step="2" title="Trouvez le bon transporteur" desc="Recevez des offres de transporteurs vérifiés et réservez en quelques clics." />
              <StepCard step="3" title="Suivez et facturez" desc="Suivi en temps réel, POD digital et facturation simplifiée." />
            </div>
          </div>
        </section>

        {/* Points clés */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <ul className="space-y-4">
              {[
                "Capacités fiables et vérifiées",
                "Process digital de bout en bout",
                "Visibilité en temps réel pour vous et vos clients",
                "Réduction du risque et de la charge administrative",
              ].map((item) => (
                <li key={item} className="flex items-start">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#00A6B8]" />
                  <span className="ml-3 text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="rounded-2xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-xl font-semibold">ROI augmenté</h3>
              <p className="mt-2 text-gray-600">
                Augmentez votre productivité et votre marge grâce à un sourcing plus rapide, une gestion simplifiée des dossiers et une visibilité totale.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="demarrer" className="py-16 md:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-[#00A6B8] text-white p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold">Prêt à développer votre activité ?</h3>
              <p className="mt-2 text-white/90">
                Créez votre compte commissionnaire et accédez immédiatement au réseau Cloudfret.
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
