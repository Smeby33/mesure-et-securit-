import React, { useEffect, useState } from 'react';
import { Scale, Shield, Users, Globe, BookOpen, CheckCircle, AlertTriangle, Gavel } from 'lucide-react';

export const Legislation: React.FC = () => {
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

    const elements = document.querySelectorAll('.legislation-item');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const platforms = [
    {
      name: "TikTok",
      measures: [
        "Comptes privés par défaut pour les 13-15 ans",
        "Messagerie directe désactivée par défaut pour les 16-17 ans",
        "Limitation des fonctionnalités Duos et Collages pour les -16 ans",
        "Rappels de temps d'écran",
        "Mode 'Connexion Famille' pour les parents"
      ],
      color: "from-pink-600 to-pink-800"
    },
    {
      name: "Instagram",
      measures: [
        "Comptes privés par défaut pour les moins de 16 ans",
        "Restriction des messages privés d'adultes non suivis",
        "Alertes en cas de comportement 'suspect' d'adultes",
        "Limitation du ciblage publicitaire pour les mineurs"
      ],
      color: "from-purple-600 to-purple-800"
    },
    {
      name: "YouTube",
      measures: [
        "Vidéos des 13-17 ans par défaut en mode privé",
        "Rappels de pause/heure du coucher",
        "Fonction de lecture automatique désactivée pour les mineurs",
        "Suppression de contenus trop commerciaux sur YouTube Kids",
        "Suppression du nombre de 'je n'aime pas' visibles"
      ],
      color: "from-red-600 to-red-800"
    }
  ];

  const childrenRights = [
    {
      icon: Globe,
      title: "Accès à l'information exacte et pertinente",
      description: "Droit à des contenus adaptés à l'âge et vérifiés"
    },
    {
      icon: Users,
      title: "Liberté d'expression sans nuire aux autres",
      description: "S'exprimer tout en respectant autrui"
    },
    {
      icon: BookOpen,
      title: "Liberté de pensée sans manipulation",
      description: "Protection contre la désinformation et la manipulation"
    },
    {
      icon: Shield,
      title: "Droit à la vie privée",
      description: "Protection des données personnelles et de l'intimité"
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-red-950 to-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Cadre Législatif et Plateformes
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl text-red-200 font-light">
            Actions des plateformes et droits de l'enfant dans le numérique
          </p>
        </div>

        {/* Detailed Gabonese Laws */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Législation Gabonaise - Protection des Enfants</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Loi n°025/2023 - Protection des données */}
            <div 
              className={`legislation-item bg-gradient-to-br from-red-900 to-black p-8 rounded-2xl border border-red-700 transform transition-all duration-1000 ${
                visibleItems.includes(0) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              data-index="0"
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-red-600 to-red-800 p-4 rounded-xl mr-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Loi n°025/2023</h4>
                  <p className="text-red-200 text-sm">Protection des données personnelles</p>
                  <p className="text-red-400 text-xs">12 juillet 2023</p>
                </div>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Consentement parental obligatoire</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Interdiction du profilage des enfants</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Protection contre l'ingérence</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Nullité des contrats préjudiciables</span>
                </li>
              </ul>
            </div>

            {/* Loi n°027/2023 - Cybersécurité */}
            <div 
              className={`legislation-item bg-gradient-to-br from-red-900 to-black p-8 rounded-2xl border border-red-700 transform transition-all duration-1000 ${
                visibleItems.includes(1) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              data-index="1"
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-black to-red-700 p-4 rounded-xl mr-4">
                  <AlertTriangle className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Loi n°027/2023</h4>
                  <p className="text-red-200 text-sm">Cybersécurité</p>
                  <p className="text-red-400 text-xs">12 juillet 2023</p>
                </div>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Sanctions: 10 ans + 100M FCFA</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Contrôle parental obligatoire</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Anti-usurpation d'identité</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Filtres de protection</span>
                </li>
              </ul>
            </div>

            {/* Loi n°025/2021 - Transactions électroniques */}
            <div 
              className={`legislation-item bg-gradient-to-br from-red-900 to-black p-8 rounded-2xl border border-red-700 transform transition-all duration-1000 ${
                visibleItems.includes(2) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              data-index="2"
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-red-700 to-black p-4 rounded-xl mr-4">
                  <Gavel className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Loi n°025/2021</h4>
                  <p className="text-red-200 text-sm">Transactions électroniques</p>
                  <p className="text-red-400 text-xs">28 décembre 2021</p>
                </div>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Protection des mineurs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Anti-incitation à la haine</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Contenus illicites encadrés</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Obligations des prestataires</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Detailed provisions */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-8">Dispositions Spécifiques</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div 
              className={`legislation-item bg-gradient-to-br from-red-800 to-black p-8 rounded-2xl border border-red-600 transform transition-all duration-1000 ${
                visibleItems.includes(3) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              data-index="3"
            >
              <div className="mb-6">
                <div className="bg-gradient-to-br from-red-600 to-red-800 p-4 rounded-xl mb-4 inline-block">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">Protection des Mineurs</h4>
                <p className="text-red-200">Définition: moins de 18 ans</p>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Informations en termes compréhensibles</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Distinction claire publicité/contenu</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Interdiction d'incitation à l'achat</span>
                </li>
              </ul>
            </div>

            <div 
              className={`legislation-item bg-gradient-to-br from-red-800 to-black p-8 rounded-2xl border border-red-600 transform transition-all duration-1000 ${
                visibleItems.includes(4) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              data-index="4"
            >
              <div className="mb-6">
                <div className="bg-gradient-to-br from-black to-red-700 p-4 rounded-xl mb-4 inline-block">
                  <Scale className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">Sanctions Pénales</h4>
                <p className="text-red-200">Lutte contre la cybercriminalité</p>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Pornographie enfantine: 10 ans + 100M FCFA</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Acquisition/détention: 5 ans + 20M FCFA</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Proposition de rencontre: 2 ans + 20M FCFA</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Platform Actions */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-8">Actions des Plateformes</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <div 
                key={platform.name}
                className={`legislation-item bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-2xl border border-red-700 transform transition-all duration-1000 ${
                  visibleItems.includes(index + 2) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                data-index={index + 2}
              >
                <div className="text-center mb-6">
                  <div className={`inline-block bg-gradient-to-br ${platform.color} p-4 rounded-xl mb-4`}>
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-white">{platform.name}</h4>
                </div>
                <ul className="space-y-3">
                  {platform.measures.map((measure, measureIndex) => (
                    <li key={measureIndex} className="flex items-start text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0 mt-1" />
                      <span className="text-sm leading-relaxed">{measure}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

          {/* Gabonese Legislation */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-white text-center mb-8">Législation au Gabon</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Loi n° 001/2011 sur la protection des données à caractère personnel */}
              <div className={`legislation-item bg-gradient-to-br from-red-900 to-black p-8 rounded-2xl border border-red-700 transform transition-all duration-1000 ${visibleItems.includes(10) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} data-index="10">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-red-700 to-black p-4 rounded-xl mr-4">
                    <Gavel className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white">Loi n° 001/2011</h4>
                    <p className="text-red-200">Protection des données personnelles</p>
                    <p className="text-red-400 text-xs">2011</p>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" /><span>Encadrement de la collecte, du traitement et de la conservation des données personnelles.</span></li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" /><span>Droit d'accès, de rectification et d'opposition pour les citoyens.</span></li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" /><span>Obligation de sécurité et de confidentialité pour les responsables de traitement.</span></li>
                </ul>
              </div>

              {/* Loi n° 009/2011 sur la cybercriminalité */}
              <div className={`legislation-item bg-gradient-to-br from-red-900 to-black p-8 rounded-2xl border border-red-700 transform transition-all duration-1000 ${visibleItems.includes(11) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} data-index="11">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-black to-red-700 p-4 rounded-xl mr-4">
                    <AlertTriangle className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white">Loi n° 009/2011</h4>
                    <p className="text-red-200">Lutte contre la cybercriminalité</p>
                    <p className="text-red-400 text-xs">2011</p>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" /><span>Sanctions contre l'accès frauduleux, l'altération ou la suppression de données informatiques.</span></li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" /><span>Répression de la diffusion de contenus illicites ou dangereux pour les mineurs.</span></li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" /><span>Responsabilité des parents et des éducateurs dans la prévention des risques numériques.</span></li>
                </ul>
              </div>

              {/* Loi n° 010/2011 sur la société de l'information */}
              <div className={`legislation-item bg-gradient-to-br from-red-900 to-black p-8 rounded-2xl border border-red-700 transform transition-all duration-1000 ${visibleItems.includes(12) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} data-index="12">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-red-700 to-black p-4 rounded-xl mr-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white">Loi n° 010/2011</h4>
                    <p className="text-red-200">Société de l'information</p>
                    <p className="text-red-400 text-xs">2011</p>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" /><span>Promotion de l'accès sécurisé à Internet pour tous, y compris les enfants.</span></li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" /><span>Encouragement de l'éducation au numérique et à la citoyenneté digitale.</span></li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" /><span>Développement de contenus adaptés et sécurisés pour la jeunesse.</span></li>
                </ul>
              </div>
            </div>
          </div>

        {/* Children's Rights */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-8">Droits de l'Enfant dans le Numérique</h3>
          <div 
            className={`legislation-item bg-gradient-to-r from-red-800 to-red-900 p-8 rounded-2xl border border-red-600 mb-8 transform transition-all duration-1000 ${
              visibleItems.includes(5) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            data-index="5"
          >
            <div className="text-center mb-8">
              <Scale className="w-16 h-16 text-red-300 mx-auto mb-4" />
              <h4 className="text-2xl font-bold text-white mb-4">
                Convention des Nations Unies - Observation générale No.25 (2021)
              </h4>
              <p className="text-red-200 text-lg">
                Adaptation de la Convention relative aux droits de l'enfant (1989) au monde numérique
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {childrenRights.map((right, index) => (
                <div key={index} className="bg-red-800 bg-opacity-50 p-6 rounded-xl border border-red-600">
                  <div className="text-center mb-4">
                    {React.createElement(right.icon, { className: "w-8 h-8 text-red-300 mx-auto mb-2" })}
                    <h5 className="font-semibold text-white text-sm">{right.title}</h5>
                  </div>
                  <p className="text-gray-300 text-xs leading-relaxed">{right.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Warning */}
        <div 
          className={`legislation-item bg-gradient-to-r from-red-800 to-red-900 p-8 rounded-2xl border border-red-600 text-center transform transition-all duration-1000 ${
            visibleItems.includes(6) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          data-index="6"
        >
          <AlertTriangle className="w-16 h-16 text-red-300 mx-auto mb-6" />
          <h3 className="text-3xl font-bold text-white mb-4">
            Rappel Important
          </h3>
          <p className="text-xl text-red-200 max-w-4xl mx-auto leading-relaxed">
            L'anonymat absolu n'existe pas sur Internet. Les auteurs de propos illicites 
            peuvent être identifiés et encourir des peines sévères. La responsabilité 
            est partagée entre gouvernements, entreprises, parents et enfants.
          </p>
        </div>
      </div>
    </section>
  );
};
