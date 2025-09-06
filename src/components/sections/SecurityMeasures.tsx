import React, { useState, useEffect } from 'react';
import { 
  Users, 
  UserCheck, 
  Shield, 
  Lock, 
  Eye, 
  MessageCircle, 
  Settings,
  BookOpen,
  CheckCircle,
  Target,
  ExternalLink
} from 'lucide-react';
import { OutilsProtection } from './OutilsProtection';
import { VigilanceSecurity } from './VigilanceSecurity';
import { PasswordSecurity } from './PasswordSecurity';

export const SecurityMeasures: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'children' | 'parents'>('children');
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [showOutilsProtection, setShowOutilsProtection] = useState(false);
  const [showVigilanceSecurity, setShowVigilanceSecurity] = useState(false);
  const [showPasswordSecurity, setShowPasswordSecurity] = useState(false);

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

    const elements = document.querySelectorAll('.security-item');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const childrenAdvice = [
    {
      icon: UserCheck,
      title: "Gérer son identité et sa confidentialité",
      color: "from-blue-600 to-blue-800",
      tips: [
        "Choisir des pseudonymes anonymes",
        "Ne jamais utiliser de vraies informations personnelles",
        "Réfléchir avant de poster des photos/vidéos",
        "Demander permission avant de publier des photos d'amis",
        "Utiliser un cache-caméra pour protéger sa vie privée",
        "Ne pas stocker d'infos sur ordinateurs publics"
      ]
    },
    {
      icon: Lock,
      title: "Sécurité des mots de passe",
      color: "from-green-600 to-green-800",
      tips: [
        "Créer des mots de passe forts et sécurisés",
        "Combiner caractères, chiffres et symboles",
        "Mettre à jour régulièrement",
        "Utiliser un gestionnaire de mots de passe",
        "Ne jamais partager ses mots de passe",
        "Activer la double authentification"
      ],
      hasDetailedView: true,
      detailType: 'password'
    },
    {
      icon: MessageCircle,
      title: "Interactions en ligne responsables",
      color: "from-purple-600 to-purple-800",
      tips: [
        "N'accepter que les amis connus dans la vraie vie",
        "Éviter les salons de discussion non validés",
        "Ne jamais rencontrer d'amis en ligne sans permission",
        "Bloquer et signaler les utilisateurs abusifs",
        "Appliquer la 'netiquette' : respect et gentillesse",
        "Ne pas laisser d'amis utiliser son appareil"
      ]
    },
    {
      icon: Eye,
      title: "Vigilance et réflexes de sécurité",
      color: "from-red-600 to-red-800",
      tips: [
        "Ne jamais cliquer sur des liens suspects",
        "Ne pas ouvrir de pièces jointes d'inconnus",
        "Se méfier des offres trop alléchantes",
        "Privilégier la 3G/4G/5G aux Wi-Fi publics",
        "Vérifier l'authenticité des sites",
        "Signaler immédiatement tout problème"
      ],
      hasDetailedView: true,
      detailType: 'vigilance'
    }
  ];

  const parentsAdvice = [
    {
      icon: MessageCircle,
      title: "Dialogue ouvert et éducatif",
      color: "from-orange-600 to-orange-800",
      tips: [
        "Maintenir une communication ouverte et régulière",
        "Encourager à signaler les situations dangereuses",
        "Éduquer à la cybersécurité avec un langage adapté",
        "Discuter des règles d'usage des appareils",
        "Informer sur l'impact du cyberharcèlement",
        "Créer un environnement sans jugement"
      ]
    },
    {
      icon: Eye,
      title: "Supervision des environnements en ligne",
      color: "from-teal-600 to-teal-800",
      tips: [
        "Se familiariser avec les sites adaptés à l'âge",
        "Surveiller l'activité en ligne",
        "Fixer des limites de temps d'écran",
        "Appliquer la règle 'PAS d'écran' (matin, repas, chambre, coucher)",
        "Repérer les signes d'alerte",
        "Encourager les activités hors ligne"
      ]
    },
    {
      icon: Shield,
      title: "Outils de protection",
      color: "from-indigo-600 to-indigo-800",
      tips: [
        "Installer et configurer le contrôle parental",
        "Activer les paramètres de confidentialité", 
        "Maintenir SafeSearch activé",
        "Mettre en favori des sites sûrs",
        "Bloquer les pop-ups dangereux",
        "Garder les appareils hors des chambres"
      ],
      hasDetailedView: true
    },
    {
      icon: Settings,
      title: "Maintenance et sécurité technique",
      color: "from-pink-600 to-pink-800",
      tips: [
        "Faire les mises à jour de sécurité",
        "Utiliser un antivirus sur tous équipements",
        "Sécuriser les objets connectés",
        "Changer les mots de passe par défaut",
        "Être prudents lors des achats en ligne",
        "Attention au 'sharenting' responsable"
      ]
    }
  ];

  const currentAdvice = activeSection === 'children' ? childrenAdvice : parentsAdvice;

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-red-950 to-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Stratégies et Mesures de Sécurité
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl text-red-200 font-light">
            Agir ensemble : enfants, adolescents et parents
          </p>
        </div>

        {/* Section Selector */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveSection('children')}
            className={`px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-3 ${
              activeSection === 'children'
                ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg border-2 border-red-500'
                : 'bg-red-900 bg-opacity-30 text-red-300 hover:bg-red-800 hover:bg-opacity-50 border-2 border-red-700'
            }`}
          >
            <Target className="w-6 h-6" />
            <span className="font-semibold text-lg">Enfants et Adolescents</span>
          </button>
          
          <button
            onClick={() => setActiveSection('parents')}
            className={`px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-3 ${
              activeSection === 'parents'
                ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg border-2 border-red-500'
                : 'bg-red-900 bg-opacity-30 text-red-300 hover:bg-red-800 hover:bg-opacity-50 border-2 border-red-700'
            }`}
          >
            <Users className="w-6 h-6" />
            <span className="font-semibold text-lg">Parents et Éducateurs</span>
          </button>
        </div>

        {/* Advice Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {currentAdvice.map((advice, index) => (
            <div
              key={index}
              className={`security-item bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-2xl border border-red-700 transform transition-all duration-1000 ${
                visibleItems.includes(index) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              data-index={index}
            >
              <div className="flex items-center mb-6">
                <div className={`p-4 rounded-xl bg-gradient-to-br ${advice.color} mr-4`}>
                  {React.createElement(advice.icon, { className: "w-8 h-8 text-white" })}
                </div>
                <h3 className="text-2xl font-bold text-white">{advice.title}</h3>
              </div>

              <ul className="space-y-3">
                {advice.tips.map((tip, tipIndex) => (
                  <li key={tipIndex} className="flex items-start text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>

              {/* Button for detailed tools view */}
              {(advice as any).hasDetailedView && (
                <div className="mt-6">
                  <button
                    onClick={() => {
                      if ((advice as any).detailType === 'vigilance') {
                        setShowVigilanceSecurity(true);
                      } else if ((advice as any).detailType === 'password') {
                        setShowPasswordSecurity(true);
                      } else {
                        setShowOutilsProtection(true);
                      }
                    }}
                    className="bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 px-6 py-3 rounded-xl text-white font-semibold transition-all duration-300 flex items-center"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    {(advice as any).detailType === 'vigilance' ? 'Outils de vigilance' : 
                     (advice as any).detailType === 'password' ? 'Testeur de mots de passe' : 'Découvrir les outils'}
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Legislation Highlight */}
        <div 
          className={`security-item bg-gradient-to-r from-red-800 to-red-900 p-8 rounded-2xl border border-red-600 transform transition-all duration-1000 ${
            visibleItems.includes(10) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          data-index="10"
        >
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-red-700 p-4 rounded-full">
                <BookOpen className="w-12 h-12 text-white" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-white mb-6">
              Cadre Législatif de Protection
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="bg-red-800 bg-opacity-50 p-6 rounded-xl border border-red-600">
                <h4 className="text-xl font-semibold text-red-200 mb-4">Loi Studer (2022)</h4>
                <p className="text-gray-300 leading-relaxed">
                  Contrôle parental pré-installé et activé gratuitement sur tous les nouveaux appareils connectés 
                  dès la première mise en service.
                </p>
              </div>
              <div className="bg-red-800 bg-opacity-50 p-6 rounded-xl border border-red-600">
                <h4 className="text-xl font-semibold text-red-200 mb-4">Majorité Numérique (2023)</h4>
                <p className="text-gray-300 leading-relaxed">
                  Autorisation parentale obligatoire pour les moins de 15 ans souhaitant s'inscrire 
                  sur les réseaux sociaux.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal pour les Outils de Protection */}
        {showOutilsProtection && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
            <div className="bg-gradient-to-b from-red-950 to-black rounded-2xl max-w-7xl w-full mx-4 max-h-[90vh] overflow-y-auto border border-red-600">
              <div className="sticky top-0 bg-gradient-to-r from-red-800 to-red-900 p-4 rounded-t-2xl border-b border-red-600">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold text-white">Outils de Protection Détaillés</h3>
                  <button
                    onClick={() => setShowOutilsProtection(false)}
                    className="text-white hover:text-red-300 transition-colors text-3xl font-bold"
                  >
                    ×
                  </button>
                </div>
              </div>
              <div className="p-0">
                <OutilsProtection />
              </div>
            </div>
          </div>
        )}

        {/* Modal pour Vigilance et Sécurité */}
        {showVigilanceSecurity && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
            <div className="bg-gradient-to-b from-black to-red-950 rounded-2xl max-w-7xl w-full mx-4 max-h-[90vh] overflow-y-auto border border-red-600">
              <div className="sticky top-0 bg-gradient-to-r from-red-800 to-red-900 p-4 rounded-t-2xl border-b border-red-600">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold text-white">Vigilance et Réflexes de Sécurité</h3>
                  <button
                    onClick={() => setShowVigilanceSecurity(false)}
                    className="text-white hover:text-red-300 transition-colors text-3xl font-bold"
                  >
                    ×
                  </button>
                </div>
              </div>
              <div className="p-0">
                <VigilanceSecurity />
              </div>
            </div>
          </div>
        )}

        {/* Modal pour Sécurité des Mots de Passe */}
        {showPasswordSecurity && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
            <div className="bg-gradient-to-b from-black to-red-950 rounded-2xl max-w-7xl w-full mx-4 max-h-[90vh] overflow-y-auto border border-red-600">
              <div className="sticky top-0 bg-gradient-to-r from-blue-800 to-blue-900 p-4 rounded-t-2xl border-b border-blue-600">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold text-white">Sécurité des Mots de Passe</h3>
                  <button
                    onClick={() => setShowPasswordSecurity(false)}
                    className="text-white hover:text-blue-300 transition-colors text-3xl font-bold"
                  >
                    ×
                  </button>
                </div>
              </div>
              <div className="p-0">
                <PasswordSecurity />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
