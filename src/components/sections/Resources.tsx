import React, { useEffect, useState } from 'react';
import { Phone, Globe, Users, Shield, BookOpen, AlertTriangle, ExternalLink, Heart } from 'lucide-react';

export const Resources: React.FC = () => {
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

    const elements = document.querySelectorAll('.resource-item');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const emergencyNumbers = [
    {
      number: "3018",
      name: "Numéro contre le harcèlement",
      description: "Numéro gratuit et confidentiel pour les jeunes victimes de harcèlement et de violences numériques",
      features: [
        "Signalement et suppression de contenus en quelques heures",
        "Conseils personnalisés",
        "Accompagnement des victimes",
        "Service gratuit et confidentiel"
      ],
      color: "from-red-600 to-red-800",
      icon: Phone
    },
    {
      number: "116 006",
      name: "France Victimes",
      description: "Aide aux victimes de tous types d'infractions",
      features: [
        "Accompagnement psychologique",
        "Aide juridique",
        "Orientation vers les services spécialisés",
        "Soutien dans les démarches"
      ],
      color: "from-blue-600 to-blue-800",
      icon: Heart
    },
    {
      number: "3020",
      name: "Non au harcèlement",
      description: "Numéro national d'information pour lutter contre le harcèlement scolaire",
      features: [
        "Écoute et conseils",
        "Orientation vers les interlocuteurs locaux",
        "Accompagnement des familles",
        "Prévention du harcèlement"
      ],
      color: "from-green-600 to-green-800",
      icon: Shield
    }
  ];

  const onlineResources = [
    {
      name: "internet-signalement.gouv.fr",
      description: "Plateforme officielle de signalement de contenus illicites sur Internet",
      features: [
        "Signalement anonyme et gratuit",
        "Traitement par les forces de l'ordre",
        "Tous types de contenus illégaux",
        "Réponse rapide"
      ],
      color: "from-purple-600 to-purple-800",
      icon: Globe
    },
    {
      name: "cybermalveillance.gouv.fr",
      description: "Guide de bonnes pratiques et ressources pédagogiques",
      features: [
        "Conseils de prévention",
        "Assistance en cas d'incident",
        "Ressources éducatives",
        "Sensibilisation du grand public"
      ],
      color: "from-orange-600 to-orange-800",
      icon: Shield
    },
    {
      name: "CNIL - Vie privée",
      description: "Ressources ludiques pour protéger sa vie privée en ligne",
      features: [
        "Guides pratiques",
        "Outils pédagogiques",
        "Quiz et jeux éducatifs",
        "Fiches conseils"
      ],
      color: "from-indigo-600 to-indigo-800",
      icon: BookOpen
    }
  ];

  const organizations = [
    {
      name: "Association e-Enfance / 3018",
      description: "Pionnière dans la protection de l'enfance sur Internet et l'éducation à la citoyenneté numérique",
      activities: [
        "Ateliers de sensibilisation",
        "Accompagnement des victimes",
        "Formation des professionnels",
        "Recherche et études"
      ],
      color: "from-pink-600 to-pink-800"
    },
    {
      name: "Comité Syndical Européen de l'Éducation",
      description: "Travaille activement à la prévention et à la lutte contre le cyberharcèlement en milieu éducatif",
      activities: [
        "Programmes de prévention",
        "Formation des enseignants",
        "Politiques éducatives",
        "Coopération européenne"
      ],
      color: "from-teal-600 to-teal-800"
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-black to-red-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Ressources et Organismes d'Aide
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl text-red-200 font-light">
            Des contacts et outils pour vous accompagner
          </p>
        </div>

        {/* Emergency Numbers */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-8">Numéros d'Urgence</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {emergencyNumbers.map((resource, index) => (
              <div 
                key={resource.number}
                className={`resource-item bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-2xl border border-red-700 text-center transform transition-all duration-1000 hover:scale-105 ${
                  visibleItems.includes(index) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                data-index={index}
              >
                <div className="flex justify-center mb-6">
                  <div className={`bg-gradient-to-br ${resource.color} p-4 rounded-full`}>
                    {React.createElement(resource.icon, { className: "w-8 h-8 text-white" })}
                  </div>
                </div>
                
                <div className="text-4xl font-bold text-white mb-2">{resource.number}</div>
                <h4 className="text-xl font-semibold text-red-200 mb-4">{resource.name}</h4>
                <p className="text-gray-300 mb-6 leading-relaxed">{resource.description}</p>
                
                <ul className="text-left space-y-2">
                  {resource.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-gray-300 text-sm">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Online Resources */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-8">Plateformes de Signalement</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {onlineResources.map((resource, index) => (
              <div 
                key={resource.name}
                className={`resource-item bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-2xl border border-red-700 transform transition-all duration-1000 hover:scale-105 ${
                  visibleItems.includes(index + 3) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                data-index={index + 3}
              >
                <div className="flex items-center mb-6">
                  <div className={`bg-gradient-to-br ${resource.color} p-3 rounded-xl mr-4`}>
                    {React.createElement(resource.icon, { className: "w-6 h-6 text-white" })}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{resource.name}</h4>
                    <ExternalLink className="w-4 h-4 text-red-300" />
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">{resource.description}</p>
                
                <ul className="space-y-2">
                  {resource.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-gray-300 text-sm">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Organizations */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-8">Organisations de Sensibilisation</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {organizations.map((org, index) => (
              <div 
                key={org.name}
                className={`resource-item bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-2xl border border-red-700 transform transition-all duration-1000 ${
                  visibleItems.includes(index + 6) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                data-index={index + 6}
              >
                <div className="flex items-center mb-6">
                  <div className={`bg-gradient-to-br ${org.color} p-4 rounded-xl mr-4`}>
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-white">{org.name}</h4>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">{org.description}</p>
                
                <div>
                  <h5 className="text-lg font-semibold text-red-200 mb-4">Activités principales :</h5>
                  <ul className="space-y-2">
                    {org.activities.map((activity, activityIndex) => (
                      <li key={activityIndex} className="flex items-start text-gray-300">
                        <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Call to Action */}
        <div 
          className={`resource-item bg-gradient-to-r from-red-800 to-red-900 p-12 rounded-2xl border border-red-600 text-center transform transition-all duration-1000 ${
            visibleItems.includes(8) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          data-index="8"
        >
          <AlertTriangle className="w-16 h-16 text-red-300 mx-auto mb-6" />
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            En Cas d'Urgence
          </h3>
          <p className="text-xl text-red-200 max-w-4xl mx-auto leading-relaxed mb-8">
            N'hésitez jamais à demander de l'aide. Ces ressources sont là pour vous accompagner 
            et protéger vos enfants. La sensibilisation et l'accompagnement sont essentiels 
            pour créer un environnement numérique sûr.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-red-700 px-8 py-4 rounded-full border border-red-500">
              <span className="text-white font-bold text-xl">3018</span>
              <span className="text-red-200 ml-2">Harcèlement</span>
            </div>
            <div className="bg-red-700 px-8 py-4 rounded-full border border-red-500">
              <span className="text-white font-bold text-xl">116 006</span>
              <span className="text-red-200 ml-2">Victimes</span>
            </div>
            <div className="bg-red-700 px-8 py-4 rounded-full border border-red-500">
              <span className="text-white font-bold text-xl">3020</span>
              <span className="text-red-200 ml-2">Non au harcèlement</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
