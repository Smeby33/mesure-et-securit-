import React, { useEffect, useState } from 'react';
import { 
  Heart, 
  Shield, 
  Users, 
  BookOpen, 
  Globe, 
  Target, 
  CheckCircle, 
  ArrowRight,
  Lightbulb,
  HandHeart
} from 'lucide-react';

export const Conclusion: React.FC = () => {
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

    const elements = document.querySelectorAll('.conclusion-item');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const keyPoints = [
    {
      icon: Globe,
      title: "Internet : Un outil formidable",
      description: "Utilisé avec précaution, Internet peut être enrichissant et éducatif",
      color: "from-blue-600 to-blue-800"
    },
    {
      icon: Shield,
      title: "Protection essentielle",
      description: "La sensibilisation et l'éducation sont cruciales pour la sécurité",
      color: "from-green-600 to-green-800"
    },
    {
      icon: Users,
      title: "Effort collectif",
      description: "Tous les acteurs doivent collaborer pour protéger les jeunes",
      color: "from-purple-600 to-purple-800"
    },
    {
      icon: Target,
      title: "Avenir sûr",
      description: "Garantir un environnement numérique épanouissant pour tous",
      color: "from-red-600 to-red-800"
    }
  ];

  const actionItems = [
    {
      icon: BookOpen,
      title: "Sensibilisation continue",
      description: "Informer régulièrement sur les nouveaux risques et bonnes pratiques"
    },
    {
      icon: Heart,
      title: "Dialogue ouvert",
      description: "Maintenir une communication bienveillante avec les enfants"
    },
    {
      icon: Shield,
      title: "Outils de protection",
      description: "Utiliser et maintenir à jour les dispositifs de sécurité"
    },
    {
      icon: HandHeart,
      title: "Environnement bienveillant",
      description: "Créer un cadre numérique sûr et épanouissant"
    }
  ];

  const stakeholders = [
    { name: "Enfants", description: "Apprendre et appliquer les bonnes pratiques", color: "bg-blue-600" },
    { name: "Parents", description: "Accompagner et protéger avec bienveillance", color: "bg-green-600" },
    { name: "Éducateurs", description: "Former et sensibiliser les jeunes générations", color: "bg-purple-600" },
    { name: "Plateformes", description: "Développer des protections adaptées", color: "bg-orange-600" },
    { name: "Législateurs", description: "Créer un cadre juridique protecteur", color: "bg-red-600" }
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-red-950 to-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Vers un Avenir Numérique Sûr
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl text-red-200 font-light">
            et épanouissant pour nos enfants
          </p>
        </div>

        {/* Key Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {keyPoints.map((point, index) => (
            <div 
              key={point.title}
              className={`conclusion-item bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-2xl border border-red-700 text-center transform transition-all duration-1000 hover:scale-105 ${
                visibleItems.includes(index) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              data-index={index}
            >
              <div className="flex justify-center mb-6">
                <div className={`bg-gradient-to-br ${point.color} p-4 rounded-full`}>
                  {React.createElement(point.icon, { className: "w-8 h-8 text-white" })}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{point.title}</h3>
              <p className="text-gray-300 leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>

        {/* Main Message */}
        <div 
          className={`conclusion-item bg-gradient-to-r from-red-800 to-red-900 p-12 rounded-2xl border border-red-600 text-center mb-16 transform transition-all duration-1000 ${
            visibleItems.includes(4) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          data-index="4"
        >
          <Lightbulb className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            L'Internet est un outil formidable
          </h3>
          <p className="text-xl text-red-200 max-w-4xl mx-auto leading-relaxed mb-8">
            Utilisé avec précaution et accompagnement, le numérique peut être une source 
            d'enrichissement, d'apprentissage et d'épanouissement pour nos enfants. 
            La clé réside dans l'éducation, la prévention et la vigilance partagée.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {actionItems.map((action, index) => (
              <div key={action.title} className="bg-red-800 bg-opacity-50 p-6 rounded-xl border border-red-600">
                <div className="flex justify-center mb-4">
                  {React.createElement(action.icon, { className: "w-8 h-8 text-red-300" })}
                </div>
                <h4 className="font-semibold text-white mb-2 text-sm">{action.title}</h4>
                <p className="text-gray-300 text-xs leading-relaxed">{action.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stakeholders */}
        <div 
          className={`conclusion-item mb-16 transform transition-all duration-1000 ${
            visibleItems.includes(5) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          data-index="5"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-8">Un Effort Collectif Nécessaire</h3>
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-2xl border border-red-700">
            <div className="text-center mb-8">
              <Users className="w-12 h-12 text-red-300 mx-auto mb-4" />
              <p className="text-red-200 text-lg leading-relaxed">
                La protection des enfants dans l'environnement numérique nécessite la collaboration 
                de tous les acteurs de la société.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {stakeholders.map((stakeholder, index) => (
                <div key={stakeholder.name} className="text-center">
                  <div className={`${stakeholder.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3`}>
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">{stakeholder.name}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{stakeholder.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div 
          className={`conclusion-item bg-gradient-to-r from-red-800 to-red-900 p-12 rounded-2xl border border-red-600 text-center transform transition-all duration-1000 ${
            visibleItems.includes(6) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          data-index="6"
        >
          <Target className="w-16 h-16 text-red-300 mx-auto mb-6" />
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ensemble, Protégeons nos Enfants
          </h3>
          <p className="text-xl text-red-200 max-w-4xl mx-auto leading-relaxed mb-8">
            Chaque action compte. Chaque conversation, chaque mesure de protection, 
            chaque moment de sensibilisation contribue à créer un environnement numérique 
            plus sûr pour les générations futures.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center bg-red-700 px-6 py-3 rounded-full border border-red-500">
              <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
              <span className="text-white font-semibold">Sensibilisation</span>
            </div>
            <div className="flex items-center bg-red-700 px-6 py-3 rounded-full border border-red-500">
              <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
              <span className="text-white font-semibold">Éducation</span>
            </div>
            <div className="flex items-center bg-red-700 px-6 py-3 rounded-full border border-red-500">
              <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
              <span className="text-white font-semibold">Protection</span>
            </div>
            <div className="flex items-center bg-red-700 px-6 py-3 rounded-full border border-red-500">
              <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
              <span className="text-white font-semibold">Bienveillance</span>
            </div>
          </div>

          <div className="inline-flex items-center text-red-200 font-semibold">
            <span>Agissons dès maintenant</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </div>
        </div>
      </div>
    </section>
  );
};
