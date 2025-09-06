import React, { useEffect, useState } from 'react';
import { Globe, Smartphone, Users, TrendingUp, BookOpen, MessageCircle, Phone, AlertCircle } from 'lucide-react';

export const Introduction: React.FC = () => {
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
      { threshold: 0.3 }
    );

    const elements = document.querySelectorAll('.intro-item');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const opportunities = [
    {
      icon: BookOpen,
      title: "Accès à l'information",
      description: "Accès rapide et illimité aux connaissances du monde entier"
    },
    {
      icon: Users,
      title: "Socialisation",
      description: "Nouvelles possibilités de connexion et d'interaction sociale"
    },
    {
      icon: MessageCircle,
      title: "Applications éducatives",
      description: "Outils d'apprentissage interactifs et innovants"
    },
    {
      icon: Phone,
      title: "Contact d'urgence",
      description: "Moyen de communication rapide en cas de besoin"
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-red-950 to-black">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            L'Ère Numérique
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl text-red-200 font-light">
            Défis et opportunités pour les enfants
          </p>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Présence omniprésente */}
          <div 
            className={`intro-item bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-2xl border border-red-700 transform transition-all duration-1000 ${
              visibleItems.includes(0) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            data-index="0"
          >
            <div className="flex items-center mb-6">
              <Globe className="w-12 h-12 text-red-400 mr-4" />
              <h3 className="text-2xl font-bold text-white">Présence Omniprésente</h3>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Internet et les smartphones sont devenus une partie intégrante de la vie quotidienne des enfants et des familles.
            </p>
            <div className="bg-red-800 rounded-lg p-4 border border-red-600">
              <div className="flex items-center">
                <TrendingUp className="w-8 h-8 text-red-300 mr-3" />
                <div>
                  <div className="text-3xl font-bold text-red-300">×5</div>
                  <div className="text-sm text-gray-300">Consommation d'Internet en 10 ans</div>
                </div>
              </div>
            </div>
          </div>

          {/* Opportunités */}
          <div 
            className={`intro-item bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-2xl border border-red-700 transform transition-all duration-1000 ${
              visibleItems.includes(1) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            data-index="1"
          >
            <div className="flex items-center mb-6">
              <Smartphone className="w-12 h-12 text-red-400 mr-4" />
              <h3 className="text-2xl font-bold text-white">Opportunités Indéniables</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Le numérique offre des opportunités éducatives et sociales sans précédent.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {opportunities.map((item, index) => (
                <div key={index} className="flex items-center text-sm text-gray-300">
                  <item.icon className="w-4 h-4 text-red-400 mr-2 flex-shrink-0" />
                  <span>{item.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Préoccupations */}
          <div 
            className={`intro-item bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-2xl border border-red-700 transform transition-all duration-1000 ${
              visibleItems.includes(2) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            data-index="2"
          >
            <div className="flex items-center mb-6">
              <AlertCircle className="w-12 h-12 text-red-400 mr-4" />
              <h3 className="text-2xl font-bold text-white">Préoccupation Majeure</h3>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              La sécurité en ligne des enfants est une préoccupation majeure pour les parents et les enseignants.
            </p>
            <div className="bg-red-800 rounded-lg p-4 border border-red-600">
              <p className="text-red-300 font-semibold text-center">
                "L'autoroute de l'information est un espace très public comportant de nombreux risques"
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div 
          className={`intro-item text-center bg-gradient-to-r from-red-800 to-red-900 p-12 rounded-2xl border border-red-600 transform transition-all duration-1000 ${
            visibleItems.includes(3) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          data-index="3"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Une Responsabilité Collective
          </h3>
          <p className="text-xl text-red-200 mb-8 max-w-4xl mx-auto leading-relaxed">
            La cybersécurité est l'affaire de tous, et les familles sont des cibles particulièrement exposées. 
            Il est crucial d'enseigner proactivement la cybersécurité aux enfants.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-red-700 px-6 py-3 rounded-full border border-red-500">
              <span className="text-white font-semibold">Parents</span>
            </div>
            <div className="bg-red-700 px-6 py-3 rounded-full border border-red-500">
              <span className="text-white font-semibold">Éducateurs</span>
            </div>
            <div className="bg-red-700 px-6 py-3 rounded-full border border-red-500">
              <span className="text-white font-semibold">Enfants</span>
            </div>
            <div className="bg-red-700 px-6 py-3 rounded-full border border-red-500">
              <span className="text-white font-semibold">Société</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
