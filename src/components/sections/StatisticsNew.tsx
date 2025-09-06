import React, { useEffect, useState } from 'react';
import { TrendingUp, Users, Clock, AlertTriangle, Eye, MessageSquare, Shield, Target } from 'lucide-react';

export const Statistics: React.FC = () => {
  const [visibleStats, setVisibleStats] = useState<number[]>([]);
  const [animatedValues, setAnimatedValues] = useState<Record<string, number>>({});

  const statistics = [
    {
      icon: Users,
      value: 95,
      suffix: '%',
      label: 'des adolescents ont un smartphone',
      color: 'from-blue-500 to-blue-700',
      description: 'Une adoption massive qui nécessite un accompagnement'
    },
    {
      icon: Clock,
      value: 7,
      suffix: 'h',
      label: 'temps d\'écran quotidien en moyenne',
      color: 'from-orange-500 to-orange-700',
      description: 'Un temps qui dépasse souvent les recommandations'
    },
    {
      icon: MessageSquare,
      value: 12,
      suffix: '%',
      label: 'des 8-18 ans victimes de cyberharcèlement',
      color: 'from-red-500 to-red-700',
      description: 'Une réalité qui touche de nombreux jeunes'
    },
    {
      icon: Eye,
      value: 78,
      suffix: '%',
      label: 'exposés à des contenus inappropriés',
      color: 'from-purple-500 to-purple-700',
      description: 'Une exposition souvent involontaire mais traumatisante'
    },
    {
      icon: Shield,
      value: 23,
      suffix: '%',
      label: 'ciblés par des tentatives d\'escroquerie',
      color: 'from-yellow-500 to-yellow-700',
      description: 'Les jeunes, cibles privilégiées des arnaqueurs'
    },
    {
      icon: Target,
      value: 89,
      suffix: '%',
      label: 'contactés par des inconnus en ligne',
      color: 'from-green-500 to-green-700',
      description: 'Un risque permanent de sollicitations malveillantes'
    },
    {
      icon: TrendingUp,
      value: 5,
      suffix: '×',
      label: 'augmentation de la consommation internet en 10 ans',
      color: 'from-indigo-500 to-indigo-700',
      description: 'Une croissance exponentielle de l\'usage numérique'
    },
    {
      icon: AlertTriangle,
      value: 41,
      suffix: '%',
      label: 'passent plus de 4h par jour sur les écrans',
      color: 'from-pink-500 to-pink-700',
      description: 'Un temps qui peut impacter le développement'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            if (!visibleStats.includes(index)) {
              setVisibleStats(prev => [...prev, index]);
              
              // Animate the number
              const stat = statistics[index];
              let currentValue = 0;
              const increment = stat.value / 30; // Animation en 30 étapes
              
              const timer = setInterval(() => {
                currentValue += increment;
                if (currentValue >= stat.value) {
                  currentValue = stat.value;
                  clearInterval(timer);
                }
                setAnimatedValues(prev => ({
                  ...prev,
                  [index]: Math.floor(currentValue)
                }));
              }, 50);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    const elements = document.querySelectorAll('.stat-item');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [visibleStats, statistics]);

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-black to-red-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Statistiques Clés
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl text-red-200 font-light">
            Les chiffres révélateurs de l'usage numérique des jeunes
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <div
              key={index}
              className={`stat-item group cursor-pointer transform transition-all duration-1000 hover:scale-105 ${
                visibleStats.includes(index) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              data-index={index}
            >
              <div className="relative bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-2xl border border-red-700 overflow-hidden">
                {/* Background animation */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className="relative z-10 flex justify-center mb-6">
                  <div className={`p-4 rounded-full bg-gradient-to-br ${stat.color}`}>
                    {React.createElement(stat.icon, { className: "w-8 h-8 text-white" })}
                  </div>
                </div>

                {/* Animated Number */}
                <div className="relative z-10 text-center mb-4">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {animatedValues[index] || 0}{stat.suffix}
                  </div>
                  <div className="text-red-200 font-medium text-sm md:text-base leading-tight">
                    {stat.label}
                  </div>
                </div>

                {/* Description */}
                <div className="relative z-10 text-center">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {stat.description}
                  </p>
                </div>

                {/* Progress bar */}
                <div className="relative z-10 mt-6">
                  <div className="w-full bg-red-800 rounded-full h-2">
                    <div 
                      className={`bg-gradient-to-r ${stat.color} h-2 rounded-full transition-all duration-2000 ease-out`}
                      style={{ 
                        width: visibleStats.includes(index) ? 
                          `${stat.suffix === '%' ? stat.value : Math.min(stat.value * 10, 100)}%` : 
                          '0%' 
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Card */}
        <div className="mt-16 bg-gradient-to-r from-red-800 to-red-900 p-12 rounded-2xl border border-red-600 text-center">
          <AlertTriangle className="w-16 h-16 text-red-300 mx-auto mb-6" />
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ces chiffres montrent l'urgence d'agir
          </h3>
          <p className="text-xl text-red-200 max-w-4xl mx-auto leading-relaxed mb-8">
            Face à ces statistiques alarmantes, il devient crucial de mettre en place 
            des mesures préventives et éducatives pour protéger nos enfants dans l'environnement numérique.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-red-700 p-4 rounded-lg border border-red-500">
              <div className="text-2xl font-bold text-white">1 enfant sur 8</div>
              <div className="text-red-200">victime de cyberharcèlement</div>
            </div>
            <div className="bg-red-700 p-4 rounded-lg border border-red-500">
              <div className="text-2xl font-bold text-white">Quasi-totalité</div>
              <div className="text-red-200">des ados équipés</div>
            </div>
            <div className="bg-red-700 p-4 rounded-lg border border-red-500">
              <div className="text-2xl font-bold text-white">7h par jour</div>
              <div className="text-red-200">devant un écran</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
