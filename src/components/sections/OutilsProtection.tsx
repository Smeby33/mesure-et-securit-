import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Clock, 
  Filter, 
  Eye, 
  Star,
  CheckCircle,
  ArrowRight,
  X,
  ExternalLink
} from 'lucide-react';

interface Outil {
  id: string;
  nom: string;
  description: string;
  plateformes: string[];
  prix: string;
  note: number;
  caracteristiques: string[];
  avantages: string[];
  inconvenients: string[];
  image?: string;
  couleur: string;
}

const outilsProtection: Outil[] = [
  {
    id: "google-family-link",
    nom: "Google Family Link",
    description: "Solution gratuite de Google pour surveiller et contrôler l'utilisation des appareils Android et iOS par les enfants.",
    plateformes: ["Android", "iOS", "Chromebook"],
    prix: "Gratuit",
    note: 4.2,
    caracteristiques: [
      "Limitation du temps d'écran",
      "Approbation des applications",
      "Filtrage des contenus web",
      "Localisation de l'appareil",
      "Rapports d'activité détaillés"
    ],
    avantages: [
      "Complètement gratuit",
      "Interface intuitive",
      "Intégration native Android",
      "Rapports détaillés"
    ],
    inconvenients: [
      "Limité sur iOS",
      "Peut être contourné facilement",
      "Nécessite un compte Google"
    ],
    couleur: "from-blue-600 to-blue-800"
  },
  {
    id: "qustodio",
    nom: "Qustodio",
    description: "Plateforme complète de contrôle parental avec fonctionnalités avancées pour tous les appareils de la famille.",
    plateformes: ["Windows", "Mac", "Android", "iOS", "Kindle"],
    prix: "Freemium (5€-15€/mois)",
    note: 4.5,
    caracteristiques: [
      "Contrôle temps d'écran avancé",
      "Géolocalisation en temps réel",
      "Surveillance des réseaux sociaux",
      "Filtrage web intelligent",
      "Alertes en temps réel"
    ],
    avantages: [
      "Interface très complète",
      "Surveillance multi-plateformes",
      "Géolocalisation précise",
      "Support client réactif"
    ],
    inconvenients: [
      "Version gratuite limitée",
      "Prix élevé pour famille nombreuse",
      "Peut ralentir l'appareil"
    ],
    couleur: "from-green-600 to-green-800"
  },
  {
    id: "kaspersky-safe-kids",
    nom: "Kaspersky Safe Kids",
    description: "Solution de sécurité enfant par Kaspersky, alliant contrôle parental et protection antivirus.",
    plateformes: ["Windows", "Mac", "Android", "iOS"],
    prix: "Gratuit / Premium 15€/an",
    note: 4.3,
    caracteristiques: [
      "Filtrage par catégories",
      "Gestion du temps d'écran",
      "Surveillance des applications",
      "Alertes de géolocalisation",
      "Conseils psychologiques"
    ],
    avantages: [
      "Version gratuite riche",
      "Expertise sécurité Kaspersky",
      "Conseils éducatifs inclus",
      "Interface moderne"
    ],
    inconvenients: [
      "Certaines fonctions payantes",
      "Configuration complexe",
      "Notifications parfois excessives"
    ],
    couleur: "from-red-600 to-red-800"
  },
  {
    id: "norton-family",
    nom: "Norton Family",
    description: "Contrôle parental intégré à la suite de sécurité Norton, offrant protection et surveillance.",
    plateformes: ["Windows", "Mac", "Android", "iOS"],
    prix: "Inclus Norton 360 (50€/an)",
    note: 4.1,
    caracteristiques: [
      "Supervision web et email",
      "Contrôle des téléchargements",
      "Gestion des contacts",
      "Rapports mensuels",
      "Protection antivirus incluse"
    ],
    avantages: [
      "Intégré à Norton 360",
      "Protection antivirus incluse",
      "Surveillance email",
      "Rapports détaillés"
    ],
    inconvenients: [
      "Nécessite abonnement Norton",
      "Interface parfois lente",
      "Limité sur appareils mobiles"
    ],
    couleur: "from-yellow-600 to-orange-700"
  },
  {
    id: "screen-time",
    nom: "Screen Time (iOS)",
    description: "Fonction native d'Apple pour contrôler et limiter l'utilisation des appareils iOS et macOS.",
    plateformes: ["iOS", "macOS"],
    prix: "Gratuit (natif)",
    note: 4.0,
    caracteristiques: [
      "Temps d'écran par app",
      "Restrictions de contenu",
      "Communication limitée",
      "Pause d'utilisation",
      "Partage familial"
    ],
    avantages: [
      "Natif et gratuit",
      "Interface Apple cohérente",
      "Intégration parfaite iOS",
      "Données privées locales"
    ],
    inconvenients: [
      "Seulement écosystème Apple",
      "Fonctionnalités limitées",
      "Facile à contourner"
    ],
    couleur: "from-purple-600 to-purple-800"
  },
  {
    id: "circle-home-plus",
    nom: "Circle Home Plus",
    description: "Dispositif physique qui contrôle tout le trafic internet du foyer, sans installation d'apps.",
    plateformes: ["Tous appareils", "Router-level"],
    prix: "99€ + 10€/mois",
    note: 4.4,
    caracteristiques: [
      "Contrôle au niveau du routeur",
      "Aucune app à installer",
      "Filtrage en temps réel",
      "Pause internet instantanée",
      "Historique détaillé"
    ],
    avantages: [
      "Contrôle tous les appareils",
      "Impossible à contourner",
      "Installation simple",
      "Pause internet globale"
    ],
    inconvenients: [
      "Coût élevé à long terme",
      "Nécessite dispositif physique",
      "Abonnement mensuel obligatoire"
    ],
    couleur: "from-indigo-600 to-indigo-800"
  }
];

export const OutilsProtection: React.FC = () => {
  const [selectedTool, setSelectedTool] = useState<Outil | null>(null);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

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
      { threshold: 0.2 }
    );

    const items = document.querySelectorAll('.tool-item');
    items.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const renderStars = (note: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(note) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`}
      />
    ));
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-black to-red-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Outils de Protection
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl text-red-200 font-light max-w-4xl mx-auto">
            Solutions pratiques pour protéger vos enfants en ligne
          </p>
        </div>

        {/* Introduction */}
        <div 
          className={`tool-item bg-gradient-to-r from-red-900 to-red-800 p-8 rounded-2xl border border-red-700 mb-12 transform transition-all duration-1000 ${
            visibleItems.includes(0) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          data-index="0"
        >
          <div className="text-center">
            <Shield className="w-16 h-16 text-red-300 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-4">
              Pourquoi utiliser des outils de contrôle parental ?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-red-800 bg-opacity-50 p-6 rounded-xl">
                <Clock className="w-8 h-8 text-red-300 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">Gestion du temps</h4>
                <p className="text-red-200 text-sm">Limitez le temps d'écran et établissez des horaires sains</p>
              </div>
              <div className="bg-red-800 bg-opacity-50 p-6 rounded-xl">
                <Filter className="w-8 h-8 text-red-300 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">Filtrage de contenu</h4>
                <p className="text-red-200 text-sm">Bloquez automatiquement les contenus inappropriés</p>
              </div>
              <div className="bg-red-800 bg-opacity-50 p-6 rounded-xl">
                <Eye className="w-8 h-8 text-red-300 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">Surveillance</h4>
                <p className="text-red-200 text-sm">Suivez l'activité en ligne en temps réel</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {outilsProtection.map((outil, index) => (
            <div
              key={outil.id}
              className={`tool-item bg-gradient-to-br from-red-900 to-black p-6 rounded-2xl border border-red-700 cursor-pointer transform transition-all duration-1000 hover:scale-105 ${
                visibleItems.includes(index + 1) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              data-index={index + 1}
              onClick={() => setSelectedTool(outil)}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${outil.couleur}`}>
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div className="text-right">
                  <div className="flex items-center">
                    {renderStars(outil.note)}
                    <span className="text-white ml-2 text-sm">{outil.note}</span>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{outil.nom}</h3>
              <p className="text-gray-300 text-sm mb-4 line-clamp-2">{outil.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {outil.plateformes.slice(0, 2).map((plateforme, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-red-800 bg-opacity-50 text-red-200 text-xs rounded-full"
                  >
                    {plateforme}
                  </span>
                ))}
                {outil.plateformes.length > 2 && (
                  <span className="px-2 py-1 bg-red-800 bg-opacity-50 text-red-200 text-xs rounded-full">
                    +{outil.plateformes.length - 2}
                  </span>
                )}
              </div>

              <div className="flex items-center justify-between">
                <span className={`font-semibold ${outil.prix === 'Gratuit' ? 'text-green-400' : 'text-yellow-400'}`}>
                  {outil.prix}
                </span>
                <ArrowRight className="w-5 h-5 text-red-400" />
              </div>
            </div>
          ))}
        </div>

        {/* Quick Setup Guide */}
        <div 
          className={`tool-item bg-gradient-to-r from-red-800 to-red-900 p-8 rounded-2xl border border-red-600 mb-12 transform transition-all duration-1000 ${
            visibleItems.includes(10) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          data-index="10"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Guide de Configuration Rapide
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-red-700 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                1
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Choisir l'outil</h4>
              <p className="text-red-200 text-sm">Sélectionnez selon vos besoins et budget</p>
            </div>
            <div className="text-center">
              <div className="bg-red-700 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                2
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Installation</h4>
              <p className="text-red-200 text-sm">Téléchargez et installez sur tous les appareils</p>
            </div>
            <div className="text-center">
              <div className="bg-red-700 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                3
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Configuration</h4>
              <p className="text-red-200 text-sm">Définissez les règles et limitations</p>
            </div>
            <div className="text-center">
              <div className="bg-red-700 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                4
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Suivi</h4>
              <p className="text-red-200 text-sm">Surveillez et ajustez régulièrement</p>
            </div>
          </div>
        </div>

        {/* Demo Section */}
        <div 
          className={`tool-item bg-gradient-to-br from-red-900 to-black p-8 rounded-2xl border border-red-700 transform transition-all duration-1000 ${
            visibleItems.includes(11) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          data-index="11"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Fonctionnalités Essentielles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-red-800 bg-opacity-50 p-6 rounded-xl border border-red-600">
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 text-red-300 mr-3" />
                <h4 className="text-xl font-bold text-white">Limites de Temps</h4>
              </div>
              <ul className="space-y-2 text-red-200">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  <span>Horaires d'utilisation définis</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  <span>Temps quotidien/hebdomadaire</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  <span>Pause forcée automatique</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  <span>Récompenses temps bonus</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-800 bg-opacity-50 p-6 rounded-xl border border-red-600">
              <div className="flex items-center mb-4">
                <Filter className="w-6 h-6 text-red-300 mr-3" />
                <h4 className="text-xl font-bold text-white">Filtrage de Contenu</h4>
              </div>
              <ul className="space-y-2 text-red-200">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  <span>Blocage par catégories</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  <span>Liste blanche/noire sites</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  <span>SafeSearch forcé</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  <span>Surveillance réseaux sociaux</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Tool Detail Modal */}
      {selectedTool && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <div className="bg-gradient-to-b from-red-950 to-black rounded-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto border border-red-600">
            <div className="sticky top-0 bg-gradient-to-r from-red-800 to-red-900 p-6 rounded-t-2xl border-b border-red-600">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${selectedTool.couleur} mr-4`}>
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{selectedTool.nom}</h3>
                    <div className="flex items-center mt-1">
                      {renderStars(selectedTool.note)}
                      <span className="text-red-200 ml-2">{selectedTool.note}/5</span>
                      <span className={`ml-4 px-3 py-1 rounded-full text-sm font-semibold ${
                        selectedTool.prix === 'Gratuit' ? 'bg-green-600 text-white' : 'bg-yellow-600 text-black'
                      }`}>
                        {selectedTool.prix}
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedTool(null)}
                  className="text-white hover:text-red-300 transition-colors"
                >
                  <X className="w-8 h-8" />
                </button>
              </div>
            </div>

            <div className="p-6">
              <p className="text-red-200 text-lg mb-6">{selectedTool.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-xl font-bold text-white mb-4">Plateformes supportées</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedTool.plateformes.map((plateforme, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-red-800 bg-opacity-50 text-red-200 rounded-full"
                      >
                        {plateforme}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white mb-4">Caractéristiques</h4>
                  <ul className="space-y-2">
                    {selectedTool.caracteristiques.map((caracteristique, idx) => (
                      <li key={idx} className="flex items-center text-red-200">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span className="text-sm">{caracteristique}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-900 bg-opacity-30 p-4 rounded-xl border border-green-700">
                  <h4 className="text-lg font-bold text-green-300 mb-3">✅ Avantages</h4>
                  <ul className="space-y-2">
                    {selectedTool.avantages.map((avantage, idx) => (
                      <li key={idx} className="text-green-200 text-sm">• {avantage}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-red-900 bg-opacity-30 p-4 rounded-xl border border-red-700">
                  <h4 className="text-lg font-bold text-red-300 mb-3">⚠️ Inconvénients</h4>
                  <ul className="space-y-2">
                    {selectedTool.inconvenients.map((inconvenient, idx) => (
                      <li key={idx} className="text-red-200 text-sm">• {inconvenient}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 text-center">
                <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-8 py-3 rounded-xl text-white font-semibold transition-all duration-300 flex items-center mx-auto">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  En savoir plus
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
