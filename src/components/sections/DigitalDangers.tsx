import React, { useState, useEffect } from 'react';
import { 
  MessageSquare, 
  Eye, 
  UserX, 
  CreditCard, 
  Gamepad2, 
  Users, 
  AlertTriangle,
  ArrowRight,
  Target,
  Brain,
  Heart,
  GraduationCap
} from 'lucide-react';
import { TestVolDonnees } from './TestVolDonnees';

export const DigitalDangers: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [showTestVolDonnees, setShowTestVolDonnees] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = document.querySelectorAll('.danger-item');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const dangers = [
    {
      icon: MessageSquare,
      title: "Cyberharcèlement",
      color: "from-red-600 to-red-800",
      stat: "12%",
      statLabel: "des 8-18 ans victimes",
      forms: [
        "Intimidations et insultes répétées",
        "Publication de photos/vidéos compromettantes",
        "Doxxing (publication d'infos privées)",
        "Swatting (faux appels d'urgence)"
      ],
      consequences: [
        { icon: Brain, text: "Troubles psychologiques" },
        { icon: Heart, text: "Anxiété et dépression" },
        { icon: GraduationCap, text: "Décrochage scolaire" },
        { icon: AlertTriangle, text: "Risque de suicide" }
      ]
    },
    {
      icon: Eye,
      title: "Contenus Inappropriés",
      color: "from-orange-600 to-red-700",
      stat: "78%",
      statLabel: "exposés avant 18 ans",
      forms: [
        "Contenus violents et traumatisants",
        "Pornographie (y compris extrême)",
        "Contenus haineux et discriminatoires",
        "Images et vidéos choquantes"
      ],
      consequences: [
        { icon: Brain, text: "Traumatismes psychologiques" },
        { icon: Heart, text: "Normalisation de la violence" },
        { icon: Users, text: "Vision déformée des relations" },
        { icon: AlertTriangle, text: "Comportements à risque" }
      ]
    },
    {
      icon: UserX,
      title: "Vol de Données",
      color: "from-purple-600 to-red-700",
      stat: "65%",
      statLabel: "partagent trop d'infos",
      forms: [
        "Partage excessif d'informations personnelles",
        "Géolocalisation en temps réel",
        "Photos avec métadonnées",
        "Informations scolaires sensibles"
      ],
      consequences: [
        { icon: Target, text: "Usurpation d'identité" },
        { icon: CreditCard, text: "Fraudes financières" },
        { icon: Users, text: "Prédateurs en ligne" },
        { icon: AlertTriangle, text: "Chantage et extorsion" }
      ]
    },
    {
      icon: CreditCard,
      title: "Arnaques en Ligne",
      color: "from-yellow-600 to-red-700",
      stat: "23%",
      statLabel: "ciblés par des escroqueries",
      forms: [
        "Phishing (hameçonnage)",
        "Fausses promotions et concours",
        "Sites de vente frauduleux",
        "Applications malveillantes"
      ],
      consequences: [
        { icon: CreditCard, text: "Pertes financières" },
        { icon: UserX, text: "Vol d'identité" },
        { icon: Brain, text: "Perte de confiance" },
        { icon: AlertTriangle, text: "Compromission des comptes" }
      ]
    },
    {
      icon: Gamepad2,
      title: "Dépendance aux Écrans",
      color: "from-blue-600 to-red-700",
      stat: "41%",
      statLabel: "passent +4h/jour",
      forms: [
        "Jeux vidéo compulsifs",
        "Réseaux sociaux addictifs",
        "Binge-watching de vidéos",
        "Navigation compulsive"
      ],
      consequences: [
        { icon: Brain, text: "Troubles de l'attention" },
        { icon: Heart, text: "Problèmes de sommeil" },
        { icon: Users, text: "Isolement social" },
        { icon: GraduationCap, text: "Échec scolaire" }
      ]
    },
    {
      icon: Users,
      title: "Prédateurs en Ligne",
      color: "from-red-700 to-red-900",
      stat: "89%",
      statLabel: "contactés par des inconnus",
      forms: [
        "Faux profils d'enfants ou d'ados",
        "Manipulation émotionnelle",
        "Demandes de photos privées",
        "Rendez-vous physiques"
      ],
      consequences: [
        { icon: AlertTriangle, text: "Exploitation sexuelle" },
        { icon: Brain, text: "Traumatismes durables" },
        { icon: Heart, text: "Troubles du comportement" },
        { icon: Users, text: "Méfiance envers les adultes" }
      ]
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-black to-red-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Les Principaux Dangers
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl text-red-200 font-light mb-4">
            du numérique pour les jeunes
          </p>
          <div className="bg-red-900 bg-opacity-50 p-6 rounded-xl border border-red-700 max-w-2xl mx-auto">
            <p className="text-red-300 text-lg">
              <AlertTriangle className="w-6 h-6 inline mr-2" />
              Les jeunes, souvent moins conscients des risques, sont des cibles faciles
            </p>
          </div>
        </div>

        {/* Danger Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {dangers.map((danger, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-2 px-4 py-3 rounded-full transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg'
                    : 'bg-red-900 bg-opacity-30 text-red-300 hover:bg-red-800 hover:bg-opacity-50'
                }`}
              >
                <danger.icon className="w-5 h-5" />
                <span className="font-semibold">{danger.title}</span>
              </button>
            ))}
          </div>

          {/* Active Danger Detail */}
          <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl border border-red-700 p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Info */}
              <div>
                <div className="flex items-center mb-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${dangers[activeTab].color} mr-4`}>
                    {React.createElement(dangers[activeTab].icon, { className: "w-8 h-8 text-white" })}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">{dangers[activeTab].title}</h3>
                    <div className="flex items-center mt-2">
                      <span className="text-2xl font-bold text-red-300">{dangers[activeTab].stat}</span>
                      <span className="text-gray-300 ml-2">{dangers[activeTab].statLabel}</span>
                    </div>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-red-200 mb-4">Formes et manifestations :</h4>
                <ul className="space-y-3">
                  {dangers[activeTab].forms.map((form, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <ArrowRight className="w-4 h-4 text-red-400 mr-3 flex-shrink-0" />
                      {form}
                    </li>
                  ))}
                </ul>

                {/* Test Vol de Données Button */}
                {activeTab === 2 && (
                  <div className="mt-6">
                    <button
                      onClick={() => setShowTestVolDonnees(true)}
                      className="bg-gradient-to-r from-purple-600 to-red-700 hover:from-purple-700 hover:to-red-800 px-6 py-3 rounded-xl text-white font-semibold transition-all duration-300 flex items-center"
                    >
                      <Target className="w-5 h-5 mr-2" />
                      Tester la recherche de données
                    </button>
                  </div>
                )}
              </div>

              {/* Right Column - Consequences */}
              <div>
                <h4 className="text-xl font-semibold text-red-200 mb-6">Conséquences possibles :</h4>
                <div className="grid grid-cols-1 gap-4">
                  {dangers[activeTab].consequences.map((consequence, index) => (
                    <div key={index} className="bg-red-800 bg-opacity-50 p-4 rounded-lg border border-red-600">
                      <div className="flex items-center">
                        <consequence.icon className="w-6 h-6 text-red-300 mr-3" />
                        <span className="text-white font-medium">{consequence.text}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Warning Message */}
        <div 
          className={`danger-item bg-gradient-to-r from-red-800 to-red-900 p-8 rounded-2xl border border-red-600 text-center transform transition-all duration-1000 ${
            visibleItems.includes(0) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          data-index="0"
        >
          <AlertTriangle className="w-16 h-16 text-red-300 mx-auto mb-6" />
          <h3 className="text-3xl font-bold text-white mb-4">
            Ces dangers ne s'arrêtent pas aux portes de l'école
          </h3>
          <p className="text-xl text-red-200 max-w-4xl mx-auto leading-relaxed">
            Il est crucial de sensibiliser et de protéger nos enfants contre ces menaces omniprésentes 
            qui peuvent avoir des conséquences durables sur leur développement et leur bien-être.
          </p>
        </div>

        {/* Test Vol de Données Modal */}
        {showTestVolDonnees && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
            <div className="bg-gradient-to-b from-red-950 to-black rounded-2xl max-w-7xl w-full mx-4 max-h-[90vh] overflow-y-auto border border-red-600">
              <div className="sticky top-0 bg-gradient-to-r from-red-800 to-red-900 p-4 rounded-t-2xl border-b border-red-600">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold text-white">Test de Vol de Données</h3>
                  <button
                    onClick={() => setShowTestVolDonnees(false)}
                    className="text-white hover:text-red-300 transition-colors text-3xl font-bold"
                  >
                    ×
                  </button>
                </div>
              </div>
              <div className="p-0">
                <TestVolDonnees />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
