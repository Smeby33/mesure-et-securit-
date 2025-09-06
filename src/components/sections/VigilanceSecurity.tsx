import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Lock, 
  Eye, 
  Wifi, 
  Smartphone, 
  CheckCircle, 
  XCircle, 
  AlertTriangle, 
  ExternalLink, 
  Globe, 
  Search, 
  Settings, 
  Router,
  Award,
  Info,
  Zap,
  Target,
  BookOpen
} from 'lucide-react';

export const VigilanceSecurity: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dns' | 'verification' | 'tutorial'>('dns');
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [selectedDevice, setSelectedDevice] = useState<'router' | 'android' | 'iphone'>('router');
  const [demoUrl, setDemoUrl] = useState('');
  const [urlAnalysis, setUrlAnalysis] = useState<'safe' | 'suspicious' | 'danger' | null>(null);

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

    const elements = document.querySelectorAll('.vigilance-item');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const analyzeUrl = (url: string) => {
    if (!url) {
      setUrlAnalysis(null);
      return;
    }

    // Simulation de l'analyse d'URL pour la démonstration
    const suspiciousPatterns = [
      'faceb00k', 'g00gle', 'amazom', 'payp4l', 'microsft', 'bankfriance',
      '.tk', '.ml', '.ga', 'bit.ly', 'tinyurl'
    ];
    
    const dangerousPatterns = [
      'virus', 'hack', 'crack', 'free-money', 'win-now', 'urgent-security'
    ];

    const lowerUrl = url.toLowerCase();
    
    if (dangerousPatterns.some(pattern => lowerUrl.includes(pattern))) {
      setUrlAnalysis('danger');
    } else if (suspiciousPatterns.some(pattern => lowerUrl.includes(pattern))) {
      setUrlAnalysis('suspicious');
    } else if (lowerUrl.startsWith('https://') && (
      lowerUrl.includes('google.com') || 
      lowerUrl.includes('facebook.com') || 
      lowerUrl.includes('amazon.fr') ||
      lowerUrl.includes('education.gouv.fr')
    )) {
      setUrlAnalysis('safe');
    } else {
      setUrlAnalysis('suspicious');
    }
  };

  const dnsProviders = [
    {
      name: "CleanBrowsing Family",
      primary: "185.228.168.168",
      secondary: "185.228.169.168",
      description: "Bloque adultes, phishing et malwares",
      features: ["Protection familiale", "Anti-malware", "Filtrage contenu"],
      color: "from-blue-600 to-blue-800",
      rating: 4.8
    },
    {
      name: "OpenDNS FamilyShield",
      primary: "208.67.222.123",
      secondary: "208.67.220.123",
      description: "Filtre automatique les contenus adultes",
      features: ["Filtrage automatique", "Protection phishing", "Rapide"],
      color: "from-green-600 to-green-800",
      rating: 4.7
    },
    {
      name: "Cloudflare Family",
      primary: "1.1.1.3",
      secondary: "1.0.0.3",
      description: "Bloque malwares et contenus adultes",
      features: ["Ultra-rapide", "Anti-malware", "Confidentialité"],
      color: "from-purple-600 to-purple-800",
      rating: 4.9
    }
  ];

  const verificationTools = [
    {
      name: "Google Transparency Report",
      url: "transparencyreport.google.com",
      description: "Vérifiez si Google considère le site comme sûr",
      icon: Search,
      color: "from-blue-600 to-blue-700"
    },
    {
      name: "VirusTotal",
      url: "virustotal.com",
      description: "Analyse complète de l'URL par 70+ antivirus",
      icon: Shield,
      color: "from-red-600 to-red-700"
    },
    {
      name: "ScamAdviser",
      url: "scamadviser.com",
      description: "Score de confiance et réputation du site",
      icon: Award,
      color: "from-green-600 to-green-700"
    },
    {
      name: "Whois Lookup",
      url: "whois.net",
      description: "Informations sur le propriétaire du site",
      icon: Info,
      color: "from-purple-600 to-purple-700"
    }
  ];

  const tutorialSteps = {
    router: [
      {
        step: 1,
        title: "Accéder à l'interface",
        content: "Ouvrez un navigateur et tapez : 192.168.0.1 ou 192.168.1.1",
        icon: Globe
      },
      {
        step: 2,
        title: "Connexion",
        content: "Connectez-vous avec les identifiants (souvent sous la box)",
        icon: Lock
      },
      {
        step: 3,
        title: "Paramètres DNS",
        content: "Cherchez 'Paramètres réseau' ou 'DNS' dans les menus",
        icon: Settings
      },
      {
        step: 4,
        title: "Configuration",
        content: "Remplacez les DNS par ceux choisis ci-dessus",
        icon: Target
      },
      {
        step: 5,
        title: "Validation",
        content: "Sauvegardez et redémarrez la box",
        icon: CheckCircle
      }
    ],
    android: [
      {
        step: 1,
        title: "Paramètres",
        content: "Ouvrez Paramètres → Réseau et Internet",
        icon: Settings
      },
      {
        step: 2,
        title: "Wi-Fi",
        content: "Sélectionnez Wi-Fi, appui long sur le réseau → Modifier",
        icon: Wifi
      },
      {
        step: 3,
        title: "Options avancées",
        content: "Cochez 'Options avancées' → IP : statique",
        icon: Target
      },
      {
        step: 4,
        title: "DNS",
        content: "Dans DNS 1 et DNS 2, entrez les adresses choisies",
        icon: Globe
      },
      {
        step: 5,
        title: "Sauvegarde",
        content: "Validez et reconnectez-vous au Wi-Fi",
        icon: CheckCircle
      }
    ],
    iphone: [
      {
        step: 1,
        title: "Réglages",
        content: "Ouvrez Réglages → Wi-Fi",
        icon: Settings
      },
      {
        step: 2,
        title: "Réseau",
        content: "Appuyez sur le 'i' à côté du réseau connecté",
        icon: Info
      },
      {
        step: 3,
        title: "Configuration DNS",
        content: "Descendez jusqu'à 'Configurer DNS' → Manuel",
        icon: Target
      },
      {
        step: 4,
        title: "Nouveaux DNS",
        content: "Supprimez les anciens, ajoutez les nouveaux DNS",
        icon: Globe
      },
      {
        step: 5,
        title: "Validation",
        content: "Enregistrez les modifications",
        icon: CheckCircle
      }
    ]
  };

  return (
    <div className="py-20 px-4 md:px-8 bg-gradient-to-b from-black to-red-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Vigilance et Réflexes de Sécurité
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl text-red-200 font-light">
            Outils pratiques et techniques avancées de protection
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('dns')}
            className={`px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 ${
              activeTab === 'dns'
                ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg'
                : 'bg-red-900 bg-opacity-30 text-red-300 hover:bg-red-800 hover:bg-opacity-50'
            }`}
          >
            <Shield className="w-5 h-5" />
            DNS Sécurisés
          </button>
          
          <button
            onClick={() => setActiveTab('verification')}
            className={`px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 ${
              activeTab === 'verification'
                ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg'
                : 'bg-red-900 bg-opacity-30 text-red-300 hover:bg-red-800 hover:bg-opacity-50'
            }`}
          >
            <Eye className="w-5 h-5" />
            Vérification Sites
          </button>

          <button
            onClick={() => setActiveTab('tutorial')}
            className={`px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 ${
              activeTab === 'tutorial'
                ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg'
                : 'bg-red-900 bg-opacity-30 text-red-300 hover:bg-red-800 hover:bg-opacity-50'
            }`}
          >
            <BookOpen className="w-5 h-5" />
            Tutoriels
          </button>
        </div>

        {/* DNS Sécurisés Tab */}
        {activeTab === 'dns' && (
          <div className="space-y-8">
            <div 
              className="vigilance-item bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-2xl border border-red-700"
              data-index="0"
            >
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Pourquoi utiliser des DNS sécurisés ?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-red-800 bg-opacity-50 p-4 rounded-xl">
                    <Shield className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                    <h4 className="font-semibold text-white mb-2">Filtrage contenu</h4>
                    <p className="text-red-200 text-sm">Bloque automatiquement sites adultes et violents</p>
                  </div>
                  <div className="bg-red-800 bg-opacity-50 p-4 rounded-xl">
                    <Lock className="w-8 h-8 text-green-400 mx-auto mb-2" />
                    <h4 className="font-semibold text-white mb-2">Anti-phishing</h4>
                    <p className="text-red-200 text-sm">Protection contre les sites frauduleux</p>
                  </div>
                  <div className="bg-red-800 bg-opacity-50 p-4 rounded-xl">
                    <Router className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                    <h4 className="font-semibold text-white mb-2">Protection globale</h4>
                    <p className="text-red-200 text-sm">Tous les appareils de la maison protégés</p>
                  </div>
                  <div className="bg-red-800 bg-opacity-50 p-4 rounded-xl">
                    <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                    <h4 className="font-semibold text-white mb-2">Gratuit</h4>
                    <p className="text-red-200 text-sm">Fonctionne en arrière-plan invisiblement</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {dnsProviders.map((provider, index) => (
                <div
                  key={index}
                  className={`vigilance-item bg-gradient-to-br ${provider.color} p-6 rounded-2xl border border-red-700 transform transition-all duration-1000 ${
                    visibleItems.includes(index + 1) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  data-index={index + 1}
                >
                  <div className="text-center mb-4">
                    <h4 className="text-xl font-bold text-white mb-2">{provider.name}</h4>
                    <div className="flex justify-center items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(provider.rating) ? 'text-yellow-400' : 'text-gray-400'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="text-white ml-2 text-sm">{provider.rating}</span>
                    </div>
                  </div>

                  <div className="bg-white bg-opacity-10 p-4 rounded-xl mb-4">
                    <div className="text-center">
                      <p className="text-white font-mono text-lg mb-1">{provider.primary}</p>
                      <p className="text-white font-mono text-lg">{provider.secondary}</p>
                    </div>
                  </div>

                  <p className="text-white text-center mb-4">{provider.description}</p>

                  <div className="space-y-2">
                    {provider.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center text-white">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Vérification Sites Tab */}
        {activeTab === 'verification' && (
          <div className="space-y-8">
            {/* Demo URL Checker */}
            <div 
              className="vigilance-item bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-2xl border border-red-700"
              data-index="0"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Testez la sécurité d'une URL
              </h3>
              
              <div className="max-w-2xl mx-auto">
                <div className="flex gap-4 mb-6">
                  <input
                    type="text"
                    value={demoUrl}
                    onChange={(e) => {
                      setDemoUrl(e.target.value);
                      analyzeUrl(e.target.value);
                    }}
                    placeholder="Entrez une URL pour l'analyser (ex: https://google.com)"
                    className="flex-1 px-4 py-3 rounded-xl bg-red-800 bg-opacity-50 text-white placeholder-red-300 border border-red-600 focus:border-red-400 focus:outline-none"
                  />
                  <button
                    onClick={() => analyzeUrl(demoUrl)}
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all"
                  >
                    <Search className="w-5 h-5" />
                  </button>
                </div>

                {urlAnalysis && (
                  <div className={`p-6 rounded-xl border ${
                    urlAnalysis === 'safe' ? 'bg-green-900 bg-opacity-50 border-green-600' :
                    urlAnalysis === 'suspicious' ? 'bg-yellow-900 bg-opacity-50 border-yellow-600' :
                    'bg-red-900 bg-opacity-70 border-red-500'
                  }`}>
                    <div className="flex items-center mb-4">
                      {urlAnalysis === 'safe' && <CheckCircle className="w-8 h-8 text-green-400 mr-3" />}
                      {urlAnalysis === 'suspicious' && <AlertTriangle className="w-8 h-8 text-yellow-400 mr-3" />}
                      {urlAnalysis === 'danger' && <XCircle className="w-8 h-8 text-red-400 mr-3" />}
                      
                      <div>
                        <h4 className="text-xl font-bold text-white">
                          {urlAnalysis === 'safe' && 'Site probablement sûr'}
                          {urlAnalysis === 'suspicious' && 'Site suspect - Prudence'}
                          {urlAnalysis === 'danger' && 'Site dangereux - À éviter'}
                        </h4>
                        <p className="text-gray-300">
                          {urlAnalysis === 'safe' && 'Cette URL semble légitime et sécurisée.'}
                          {urlAnalysis === 'suspicious' && 'Cette URL présente des caractéristiques suspectes.'}
                          {urlAnalysis === 'danger' && 'Cette URL contient des éléments dangereux.'}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Verification Tools */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {verificationTools.map((tool, index) => (
                <div
                  key={index}
                  className={`vigilance-item bg-gradient-to-br ${tool.color} p-6 rounded-2xl border border-red-700 transform transition-all duration-1000 ${
                    visibleItems.includes(index + 1) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  data-index={index + 1}
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-white bg-opacity-20 p-3 rounded-xl mr-4">
                      {React.createElement(tool.icon, { className: "w-8 h-8 text-white" })}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">{tool.name}</h4>
                      <p className="text-gray-200 text-sm">{tool.url}</p>
                    </div>
                  </div>
                  <p className="text-white mb-4">{tool.description}</p>
                  <button className="bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-xl text-white transition-all flex items-center">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Accéder à l'outil
                  </button>
                </div>
              ))}
            </div>

            {/* Security Checklist */}
            <div 
              className="vigilance-item bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-2xl border border-red-700"
              data-index="5"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Liste de vérification rapide
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-red-200">✅ Signes de sécurité</h4>
                  <div className="space-y-2">
                    <div className="flex items-center text-green-300">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      <span>URL commence par https://</span>
                    </div>
                    <div className="flex items-center text-green-300">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      <span>Cadenas 🔒 visible dans la barre</span>
                    </div>
                    <div className="flex items-center text-green-300">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      <span>Nom de domaine correct</span>
                    </div>
                    <div className="flex items-center text-green-300">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      <span>Design professionnel</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-red-200">⚠️ Signaux d'alerte</h4>
                  <div className="space-y-2">
                    <div className="flex items-center text-red-300">
                      <XCircle className="w-4 h-4 mr-2" />
                      <span>Fautes d'orthographe dans l'URL</span>
                    </div>
                    <div className="flex items-center text-red-300">
                      <XCircle className="w-4 h-4 mr-2" />
                      <span>Liens raccourcis suspects</span>
                    </div>
                    <div className="flex items-center text-red-300">
                      <XCircle className="w-4 h-4 mr-2" />
                      <span>Offres trop alléchantes</span>
                    </div>
                    <div className="flex items-center text-red-300">
                      <XCircle className="w-4 h-4 mr-2" />
                      <span>Demandes d'infos personnelles</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tutoriels Tab */}
        {activeTab === 'tutorial' && (
          <div className="space-y-8">
            {/* Device Selection */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button
                onClick={() => setSelectedDevice('router')}
                className={`px-6 py-3 rounded-xl transition-all duration-300 flex items-center gap-2 ${
                  selectedDevice === 'router'
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                    : 'bg-red-900 bg-opacity-30 text-red-300 hover:bg-red-800 hover:bg-opacity-50'
                }`}
              >
                <Router className="w-5 h-5" />
                Box/Routeur Wi-Fi
              </button>
              
              <button
                onClick={() => setSelectedDevice('android')}
                className={`px-6 py-3 rounded-xl transition-all duration-300 flex items-center gap-2 ${
                  selectedDevice === 'android'
                    ? 'bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg'
                    : 'bg-red-900 bg-opacity-30 text-red-300 hover:bg-red-800 hover:bg-opacity-50'
                }`}
              >
                <Smartphone className="w-5 h-5" />
                Android
              </button>

              <button
                onClick={() => setSelectedDevice('iphone')}
                className={`px-6 py-3 rounded-xl transition-all duration-300 flex items-center gap-2 ${
                  selectedDevice === 'iphone'
                    ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg'
                    : 'bg-red-900 bg-opacity-30 text-red-300 hover:bg-red-800 hover:bg-opacity-50'
                }`}
              >
                <Smartphone className="w-5 h-5" />
                iPhone/iPad
              </button>
            </div>

            {/* Tutorial Steps */}
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-white text-center mb-8">
                Configuration {
                  selectedDevice === 'router' ? 'Box/Routeur Wi-Fi' :
                  selectedDevice === 'android' ? 'Android' : 'iPhone/iPad'
                }
              </h3>

              <div className="space-y-6">
                {tutorialSteps[selectedDevice].map((step, index) => (
                  <div
                    key={index}
                    className={`vigilance-item bg-gradient-to-br from-red-900 to-red-800 p-6 rounded-2xl border border-red-700 transform transition-all duration-1000 ${
                      visibleItems.includes(index) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
                    data-index={index}
                  >
                    <div className="flex items-start">
                      <div className="bg-red-700 p-3 rounded-xl mr-4 flex-shrink-0">
                        {React.createElement(step.icon, { className: "w-6 h-6 text-white" })}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">
                            Étape {step.step}
                          </span>
                          <h4 className="text-xl font-bold text-white">{step.title}</h4>
                        </div>
                        <p className="text-red-200 leading-relaxed">{step.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Benefits Reminder */}
              <div 
                className="vigilance-item bg-gradient-to-br from-green-900 to-green-800 p-8 rounded-2xl border border-green-700 mt-8"
                data-index="10"
              >
                <div className="text-center">
                  <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-white mb-4">
                    Configuration terminée !
                  </h4>
                  <p className="text-green-200 text-lg">
                    {selectedDevice === 'router' 
                      ? 'Tous les appareils de votre maison sont maintenant protégés automatiquement.'
                      : 'Cet appareil est maintenant protégé, même en dehors de la maison.'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
