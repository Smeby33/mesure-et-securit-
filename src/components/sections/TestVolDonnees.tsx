import React, { useState, useEffect } from 'react';
import { Search, User, AlertTriangle, Eye, EyeOff, Shield, Calendar, MapPin, Mail, Phone, Briefcase, GraduationCap } from 'lucide-react';

interface ProfilUtilisateur {
  id: string;
  nom: string;
  prenom: string;
  dateNaissance: string;
  quartier: string;
  email: string;
  telephone: string;
  profession: string;
  education: string[];
  situationsMaritales?: string;
  photo?: string;
  donneesPersonnelles: string[];
  donneesPrivees: string[];
}

// Données d'exemple - vous pourrez remplacer par vos vraies données
const profilsExemples: ProfilUtilisateur[] = [
  {
    id: "1",
    nom: "AVIKA",
    prenom: "Jamal",
    dateNaissance: "15/03/1985",
    quartier: "Carrefour trois Métisses",
    email: "jamal.avika@gmail.com",
    telephone: "+241 077811595",
    profession: "Mannequin - Modèle photo - Acteur - Entrepreneur",
    education: ["Lycée Thuriaf Bantsasa ", "Lycée Joseph Ambourouet Avaro"],
    situationsMaritales: "Parentalité",
    photo: "/personne/jamal.jpg",
    donneesPersonnelles: ["Photos de famille", "Localisation GPS(Port-Gentil)", "Contacts téléphoniques"],
    donneesPrivees: ["Messages privés", "Historique de navigation", "Données bancaires"]
  },
  {
    id: "2",
    nom: "SAMOUELA",
    prenom: "Wilfrid",
    dateNaissance: "22/08/1990",
    quartier: "Port-Gentil",
    email: "samouela.wilfrid@yahoo.fr",
    telephone: "+241 077367836",
    profession: "Informaticien",
    education: ["Lycée Technique JFO Port-Gentil", "UOB", "Institut Supérieur de Technologie"],
    situationsMaritales: "Parentalité",
    photo: "/personne/Wilfrid.jpg",
    donneesPersonnelles: ["Réseaux sociaux", "Photos personnelles", "Géolocalisation"],
    donneesPrivees: ["Mots de passe", "Données de carte bancaire", "Conversations privées"]
  },
  {
    id: "3",
    nom: "ASSOUKANA EYEGHE",
    prenom: "Anouchka",
    dateNaissance: "28/02/xxxx",
    quartier: "Côte d’Azur Port-Gentil",
    email: "eyegheanicette@gmail.com",
    telephone: "+241 066772597",
    profession: "Community Manager",
    education: ["LJAA", "Raponda Walker", "JBA"],
    situationsMaritales: "Parentalité",
    photo: "/personne/anouchka.jpg",
    donneesPersonnelles: ["Réseaux sociaux", "Photos personnelles", "Géolocalisation"],
    donneesPrivees: ["Mots de passe", "Données de carte bancaire", "Conversations privées"]
  },
  {
    id: "4",
    nom: "LIBIYOU SOBI ",
    prenom: "Stephane Benito",
    dateNaissance: "15/03/1985",
    quartier: "Côte d’Azur Port-Gentil",
    email: "stephanosoby900@gmail.com",
    telephone: "+241 066772597",
    profession: "Non defini ",
    education: ["Non defini"],
    situationsMaritales: "Parentalité",
    photo: "/personne/stephane.jpg",
    donneesPersonnelles: ["Réseaux sociaux", "Photos personnelles(mère)", "Géolocalisation"],
    donneesPrivees: ["Mots de passe", "Données de carte bancaire", "Conversations privées"]
  },
  {
    id: "5",
    nom: "YENOT MBINI ",
    prenom: "Yonel Junior",
    dateNaissance: "21/02/xxxx",
    quartier: "Port-Gentil",
    email: "nondefini@gmail.com",
    telephone: "+241 074374726",
    profession: "Non defini ",
    education: ["Raponda Walker","Institut Ucac-Icam"],
    situationsMaritales: "Parentalité",
    photo: "/personne/yonel.jpeg",
    donneesPersonnelles: ["Réseaux sociaux", "Photos personnelles(soeur Elvina Yenot Mackayat)", "Géolocalisation"],
    donneesPrivees: ["Mots de passe", "Données de carte bancaire", "Conversations privées"]
  },
  {
    id: "6",
    nom: "MATAGNE MOTEYO",
    prenom: "Michelle",
    dateNaissance: "15/03/1985",
    quartier: "Clinique AYILE  Port-Gentil",
    email: "nondefini@gmail.com",
    telephone: "+241 065045264",
    profession: "Educateur(trice)",
    education: ["Non defini"],
    situationsMaritales: "Parentalité",
    photo: "/personne/defaut.jpg", // Image par défaut
    donneesPersonnelles: ["Réseaux sociaux", "Photos personnelles", "Géolocalisation"],
    donneesPrivees: ["Mots de passe", "Données de carte bancaire", "Conversations privées"]
  }
  ,
  {
    id: "7",
    nom: "Armélia ",
    prenom: " Charlène",
    dateNaissance: "15/03/1985",
    quartier: "Bac Aviation  Port-Gentil",
    email: "Charlene06.msv@gmail.com",
    telephone: "+241 065045264",
    profession: "Educateur(trice)",
    education: ["Non defini"],
    situationsMaritales: "Parentalité",
    photo: "/personne/defaut.jpg", // Image par défaut
    donneesPersonnelles: ["Réseaux sociaux", "Photos personnelles", "Géolocalisation"],
    donneesPrivees: ["Mots de passe", "Données de carte bancaire", "Conversations privées"]
  }
];

export const TestVolDonnees: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [foundProfile, setFoundProfile] = useState<ProfilUtilisateur | null>(null);
  const [showDetails, setShowDetails] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  // Logs pour debug
  console.log("🚀 Composant TestVolDonnees chargé");
  console.log("📋 Profils disponibles:", profilsExemples.map(p => `${p.prenom} ${p.nom}`));
  console.log("🔍 Terme de recherche actuel:", searchTerm);
  console.log("👤 Profil trouvé:", foundProfile?.prenom, foundProfile?.nom);

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
      { threshold: 0.1 }
    );

    const items = document.querySelectorAll('.test-vol-item');
    items.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const handleSearch = () => {
    if (!searchTerm.trim()) return;

    console.log("🔍 Début de la recherche avec le terme:", searchTerm);
    console.log("📊 Nombre de profils disponibles:", profilsExemples.length);
    
    setIsSearching(true);
    
    // Simulation de recherche
    setTimeout(() => {
      console.log("🔎 Recherche en cours...");
      
      const found = profilsExemples.find(profil => {
        const searchLower = searchTerm.toLowerCase();
        console.log(`🧪 Test du profil: ${profil.prenom} ${profil.nom}`);
        
        const matchNom = profil.nom.toLowerCase().includes(searchLower);
        const matchPrenom = profil.prenom.toLowerCase().includes(searchLower);
        const matchDate = profil.dateNaissance.includes(searchTerm);
        const matchQuartier = profil.quartier.toLowerCase().includes(searchLower);
        const matchEmail = profil.email.toLowerCase().includes(searchLower);
        const matchTelephone = profil.telephone.includes(searchTerm);
        const matchProfession = profil.profession.toLowerCase().includes(searchLower);
        const matchEducation = profil.education.some(edu => edu.toLowerCase().includes(searchLower));
        
        console.log(`  - Nom: ${matchNom} (${profil.nom})`);
        console.log(`  - Prénom: ${matchPrenom} (${profil.prenom})`);
        console.log(`  - Date: ${matchDate} (${profil.dateNaissance})`);
        console.log(`  - Quartier: ${matchQuartier} (${profil.quartier})`);
        console.log(`  - Email: ${matchEmail} (${profil.email})`);
        console.log(`  - Téléphone: ${matchTelephone} (${profil.telephone})`);
        console.log(`  - Profession: ${matchProfession} (${profil.profession})`);
        console.log(`  - Éducation: ${matchEducation} (${profil.education.join(', ')})`);
        
        const isMatch = matchNom || matchPrenom || matchDate || matchQuartier || 
                       matchEmail || matchTelephone || matchProfession || matchEducation;
        
        console.log(`  ✅ Résultat: ${isMatch ? 'TROUVÉ' : 'Non trouvé'}`);
        
        return isMatch;
      });
      
      console.log("🎯 Profil trouvé:", found ? `${found.prenom} ${found.nom}` : "Aucun");
      console.log("🔄 État foundProfile sera mis à jour:", found || null);
      
      setFoundProfile(found || null);
      setIsSearching(false);
      setShowDetails(false);
      
      console.log("✅ États mis à jour - foundProfile:", found ? `${found.prenom} ${found.nom}` : "null");
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-black to-red-950">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div 
          className={`test-vol-item text-center mb-16 transform transition-all duration-1000 ${
            visibleItems.includes(0) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          data-index="0"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Test de Vol de Données
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl text-red-200 font-light max-w-4xl mx-auto">
            Découvrez à quel point vos données personnelles peuvent être facilement trouvées
          </p>
        </div>

        {/* Warning */}
        <div 
          className={`test-vol-item bg-gradient-to-r from-red-800 to-red-900 p-8 rounded-2xl border border-red-600 mb-12 transform transition-all duration-1000 ${
            visibleItems.includes(1) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          data-index="1"
        >
          <div className="flex items-center justify-center mb-4">
            <AlertTriangle className="w-12 h-12 text-red-300 mr-4" />
            <h3 className="text-2xl font-bold text-white">Attention - Démonstration Éducative</h3>
          </div>
          <p className="text-red-200 text-center max-w-4xl mx-auto">
            Cet outil simule comment vos données peuvent être collectées et utilisées. 
            Les profils présentés sont fictifs et servent uniquement à sensibiliser aux risques.
          </p>
        </div>

        {/* Search Interface */}
        <div 
          className={`test-vol-item bg-gradient-to-br from-red-900 to-black p-8 rounded-2xl border border-red-700 mb-12 transform transition-all duration-1000 ${
            visibleItems.includes(2) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          data-index="2"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">Testez une Recherche</h3>
            <p className="text-red-200 mb-6">
              Entrez une information (nom, quartier, date de naissance, email, téléphone, profession, éducation)
            </p>
          </div>

          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ex: Jamal, Port-Gentil, 15/03/1985, informaticien, Omar Bongo..."
                className="w-full p-4 pr-12 rounded-xl bg-red-800 bg-opacity-50 border border-red-600 text-white placeholder-red-300 focus:outline-none focus:border-red-400"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-red-300 w-5 h-5" />
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={handleSearch}
              disabled={isSearching || !searchTerm.trim()}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 disabled:from-gray-600 disabled:to-gray-700 px-8 py-4 rounded-xl text-white font-semibold transition-all duration-300 disabled:cursor-not-allowed"
            >
              {isSearching ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                  Recherche en cours...
                </div>
              ) : (
                'Lancer la recherche'
              )}
            </button>
          </div>
        </div>

        {/* Results */}
        {foundProfile && (
          <div 
            className="test-vol-item bg-gradient-to-br from-red-800 to-black p-8 rounded-2xl border border-red-600 mb-12 transform transition-all duration-1000 translate-y-0 opacity-100"
            data-index="3"
          >
            <div className="text-center mb-8">
              <AlertTriangle className="w-16 h-16 text-red-400 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-white mb-2">Profil Trouvé !</h3>
              <p className="text-red-200">Voici les informations collectées sur cette personne</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Photo et informations de base */}
              <div className="bg-red-900 bg-opacity-50 p-6 rounded-xl border border-red-600">
                <div className="flex items-center mb-4">
                  <User className="w-6 h-6 text-red-300 mr-3" />
                  <h4 className="text-xl font-bold text-white">Identité</h4>
                </div>
                
                {/* Photo */}
                {foundProfile.photo && (
                  <div className="text-center mb-6">
                    <img
                      src={foundProfile.photo}
                      alt={`${foundProfile.prenom} ${foundProfile.nom}`}
                      className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-red-400"
                    />
                  </div>
                )}
                
                <div className="space-y-3">
                  <div className="flex items-center text-gray-300">
                    <User className="w-4 h-4 mr-3 text-red-400" />
                    <span>{foundProfile.prenom} {foundProfile.nom}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Calendar className="w-4 h-4 mr-3 text-red-400" />
                    <span>{foundProfile.dateNaissance}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MapPin className="w-4 h-4 mr-3 text-red-400" />
                    <span>{foundProfile.quartier}</span>
                  </div>
                </div>
              </div>

              {/* Contact et profession */}
              <div className="bg-red-900 bg-opacity-50 p-6 rounded-xl border border-red-600">
                <div className="flex items-center mb-4">
                  <Phone className="w-6 h-6 text-red-300 mr-3" />
                  <h4 className="text-xl font-bold text-white">Contact & Profession</h4>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-300">
                    <Mail className="w-4 h-4 mr-3 text-red-400" />
                    <span className="text-sm">{foundProfile.email}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Phone className="w-4 h-4 mr-3 text-red-400" />
                    <span>{foundProfile.telephone}</span>
                  </div>
                  <div className="flex items-start text-gray-300">
                    <Briefcase className="w-4 h-4 mr-3 text-red-400 mt-0.5" />
                    <span className="text-sm">{foundProfile.profession}</span>
                  </div>
                  
                  {/* Éducation */}
                  <div className="mt-4">
                    <div className="flex items-center text-red-300 mb-2">
                      <GraduationCap className="w-4 h-4 mr-2" />
                      <span className="font-semibold text-sm">Parcours scolaire:</span>
                    </div>
                    <ul className="space-y-1">
                      {foundProfile.education.map((edu, index) => (
                        <li key={index} className="text-gray-300 text-xs flex items-center">
                          <div className="w-1.5 h-1.5 bg-red-400 rounded-full mr-2"></div>
                          {edu}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Données collectées */}
              <div className="bg-red-900 bg-opacity-50 p-6 rounded-xl border border-red-600">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Shield className="w-6 h-6 text-red-300 mr-3" />
                    <h4 className="text-xl font-bold text-white">Données Sensibles</h4>
                  </div>
                  <button
                    onClick={() => setShowDetails(!showDetails)}
                    className="flex items-center text-red-300 hover:text-white transition-colors"
                  >
                    {showDetails ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>

                {showDetails ? (
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-red-300 mb-2">Données Personnelles:</h5>
                      <ul className="space-y-1">
                        {foundProfile.donneesPersonnelles.map((donnee, index) => (
                          <li key={index} className="text-gray-300 text-sm flex items-center">
                            <div className="w-2 h-2 bg-red-400 rounded-full mr-2"></div>
                            {donnee}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-red-300 mb-2">Données Privées:</h5>
                      <ul className="space-y-1">
                        {foundProfile.donneesPrivees.map((donnee, index) => (
                          <li key={index} className="text-gray-300 text-sm flex items-center">
                            <div className="w-2 h-2 bg-red-400 rounded-full mr-2"></div>
                            {donnee}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Eye className="w-12 h-12 text-red-400 mx-auto mb-4" />
                    <p className="text-red-300">Cliquez sur l'œil pour révéler les données collectées</p>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-8 p-6 bg-red-800 bg-opacity-30 rounded-xl border border-red-600">
              <h4 className="text-xl font-bold text-white mb-4 text-center">Comment protéger vos données ?</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="text-red-200">
                  <Shield className="w-8 h-8 mx-auto mb-2 text-red-400" />
                  <p className="text-sm">Paramètres de confidentialité</p>
                </div>
                <div className="text-red-200">
                  <Eye className="w-8 h-8 mx-auto mb-2 text-red-400" />
                  <p className="text-sm">Vérifiez vos publications</p>
                </div>
                <div className="text-red-200">
                  <AlertTriangle className="w-8 h-8 mx-auto mb-2 text-red-400" />
                  <p className="text-sm">Limitez les informations partagées</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {foundProfile === null && searchTerm && !isSearching && (
          <div 
            className="test-vol-item bg-gradient-to-br from-green-800 to-green-900 p-8 rounded-2xl border border-green-600 mb-12 transform transition-all duration-1000 translate-y-0 opacity-100"
            data-index="4"
          >
            <div className="text-center">
              <Shield className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-white mb-2">Aucun Profil Trouvé</h3>
              <p className="text-green-200">
                Bonne nouvelle ! Cette information ne figure pas dans notre base de données de démonstration.
                Cependant, restez vigilant car d'autres sources pourraient contenir vos informations.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
