import React, { useState } from 'react';
import { 
  Shield, 
  Eye, 
  Clock, 
  Users, 
  AlertCircle, 
  Zap, 
  Brain,
  Heart,
  ChevronLeft,
  ChevronRight 
} from 'lucide-react';

export const DigitalChallenges: React.FC = () => {
  const [currentChallenge, setCurrentChallenge] = useState(0);

  const challenges = [
    {
      icon: <Eye className="text-red-400" size={48} />,
      title: "Exposition à des contenus inappropriés",
      description: "Violence, contenus sexuels, fake news",
      stats: "73% des parents s'inquiètent",
      impact: "Peut affecter le développement psychologique",
      solutions: ["Contrôle parental", "Communication ouverte", "Éducation aux médias"]
    },
    {
      icon: <Users className="text-orange-400" size={48} />,
      title: "Cyberharcèlement",
      description: "Harcèlement en ligne, exclusion sociale",
      stats: "34% des jeunes en sont victimes",
      impact: "Problèmes d'estime de soi, dépression",
      solutions: ["Signalement", "Soutien psychologique", "Prévention active"]
    },
    {
      icon: <Clock className="text-yellow-400" size={48} />,
      title: "Addiction aux écrans",
      description: "Usage excessif, perte de contrôle",
      stats: "Moyenne de 7h/jour chez les ados",
      impact: "Troubles du sommeil, isolement social",
      solutions: ["Limites temporelles", "Activités alternatives", "Accompagnement"]
    },
    {
      icon: <Shield className="text-blue-400" size={48} />,
      title: "Protection des données personnelles",
      description: "Collecte de données, vie privée",
      stats: "89% des apps collectent des données",
      impact: "Risques pour la vie privée future",
      solutions: ["Paramètres de confidentialité", "Sensibilisation", "Alternatives sécurisées"]
    },
    {
      icon: <Brain className="text-purple-400" size={48} />,
      title: "Impact sur le développement cognitif",
      description: "Attention, concentration, apprentissage",
      stats: "Baisse de 25% de l'attention soutenue",
      impact: "Difficultés scolaires, troubles cognitifs",
      solutions: ["Pauses régulières", "Activités cognitives", "Équilibre numérique/analogique"]
    }
  ];

  const nextChallenge = () => {
    setCurrentChallenge((prev) => (prev + 1) % challenges.length);
  };

  const prevChallenge = () => {
    setCurrentChallenge((prev) => (prev - 1 + challenges.length) % challenges.length);
  };

  return (
    <section className="py-20 px-4 md:px-8 min-h-screen bg-gradient-to-b from-blue-900 to-indigo-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
            LES DÉFIS NUMÉRIQUES
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-400 to-orange-300 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Identifier et comprendre les principaux risques auxquels nos enfants font face dans l'environnement numérique
          </p>
        </div>

        {/* Interactive Challenge Slider */}
        <div className="relative mb-16">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-gray-600">
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={prevChallenge}
                className="p-3 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-300"
              >
                <ChevronLeft className="text-white" size={24} />
              </button>
              
              <div className="text-center flex-1">
                <div className="flex justify-center mb-4">
                  {challenges[currentChallenge].icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {challenges[currentChallenge].title}
                </h3>
                <div className="flex justify-center space-x-2 mb-4">
                  {challenges.map((_, index) => (
                    <div
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentChallenge ? 'bg-cyan-400' : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              <button
                onClick={nextChallenge}
                className="p-3 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-300"
              >
                <ChevronRight className="text-white" size={24} />
              </button>
            </div>

            {/* Challenge Details */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="space-y-6">
                  <div className="p-4 bg-red-600 bg-opacity-20 rounded-lg border border-red-400">
                    <h4 className="text-lg font-semibold text-red-300 mb-2 flex items-center">
                      <AlertCircle className="mr-2" size={20} />
                      Le problème
                    </h4>
                    <p className="text-gray-300">{challenges[currentChallenge].description}</p>
                  </div>

                  <div className="p-4 bg-orange-600 bg-opacity-20 rounded-lg border border-orange-400">
                    <h4 className="text-lg font-semibold text-orange-300 mb-2 flex items-center">
                      <Zap className="mr-2" size={20} />
                      Statistiques
                    </h4>
                    <p className="text-gray-300">{challenges[currentChallenge].stats}</p>
                  </div>

                  <div className="p-4 bg-purple-600 bg-opacity-20 rounded-lg border border-purple-400">
                    <h4 className="text-lg font-semibold text-purple-300 mb-2 flex items-center">
                      <Heart className="mr-2" size={20} />
                      Impact sur l'enfant
                    </h4>
                    <p className="text-gray-300">{challenges[currentChallenge].impact}</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="p-4 bg-green-600 bg-opacity-20 rounded-lg border border-green-400">
                  <h4 className="text-lg font-semibold text-green-300 mb-4 flex items-center">
                    <Shield className="mr-2" size={20} />
                    Solutions possibles
                  </h4>
                  <ul className="space-y-2">
                    {challenges[currentChallenge].solutions.map((solution, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-300 text-sm">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Warning Signs */}
        <div className="bg-gradient-to-r from-yellow-600 to-red-600 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center justify-center">
            <AlertCircle className="mr-3" size={32} />
            Signaux d'alerte à surveiller
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-white bg-opacity-20 rounded-lg">
              <div className="text-sm text-white font-medium">Comportement</div>
              <div className="text-xs text-gray-200 mt-1">Irritabilité, isolement</div>
            </div>
            <div className="p-4 bg-white bg-opacity-20 rounded-lg">
              <div className="text-sm text-white font-medium">Sommeil</div>
              <div className="text-xs text-gray-200 mt-1">Troubles, fatigue</div>
            </div>
            <div className="p-4 bg-white bg-opacity-20 rounded-lg">
              <div className="text-sm text-white font-medium">Scolaire</div>
              <div className="text-xs text-gray-200 mt-1">Baisse des résultats</div>
            </div>
            <div className="p-4 bg-white bg-opacity-20 rounded-lg">
              <div className="text-sm text-white font-medium">Social</div>
              <div className="text-xs text-gray-200 mt-1">Perte d'intérêt</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
