import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Eye, 
  EyeOff, 
  CheckCircle, 
  XCircle, 
  AlertTriangle,
  Lock,
  Key,
  Timer,
  Zap,
  Info,
  Copy,
  RefreshCw
} from 'lucide-react';

interface PasswordStrength {
  score: number;
  level: 'Très faible' | 'Faible' | 'Moyen' | 'Fort' | 'Très fort';
  color: string;
  timeToHack: string;
  feedback: string[];
}

export const PasswordSecurity: React.FC = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [strength, setStrength] = useState<PasswordStrength | null>(null);
  const [generatedPassword, setGeneratedPassword] = useState('');

  // Fonction pour évaluer la force du mot de passe
  const evaluatePassword = (pwd: string): PasswordStrength => {
    let score = 0;
    const feedback: string[] = [];

    // Critères de base
    if (pwd.length >= 8) {
      score += 1;
    } else {
      feedback.push("Utilisez au moins 8 caractères");
    }

    if (pwd.length >= 12) {
      score += 1;
    } else if (pwd.length >= 8) {
      feedback.push("12 caractères ou plus recommandés");
    }

    // Lettres minuscules
    if (/[a-z]/.test(pwd)) {
      score += 1;
    } else {
      feedback.push("Ajoutez des lettres minuscules");
    }

    // Lettres majuscules
    if (/[A-Z]/.test(pwd)) {
      score += 1;
    } else {
      feedback.push("Ajoutez des lettres majuscules");
    }

    // Chiffres
    if (/[0-9]/.test(pwd)) {
      score += 1;
    } else {
      feedback.push("Ajoutez des chiffres");
    }

    // Caractères spéciaux
    if (/[^a-zA-Z0-9]/.test(pwd)) {
      score += 1;
    } else {
      feedback.push("Ajoutez des caractères spéciaux (!@#$%^&*)");
    }

    // Pas de séquences communes
    const commonPatterns = ['123', 'abc', 'qwerty', 'password', 'azerty'];
    const hasCommonPattern = commonPatterns.some(pattern => 
      pwd.toLowerCase().includes(pattern)
    );

    if (!hasCommonPattern && pwd.length > 0) {
      score += 1;
    } else if (hasCommonPattern) {
      feedback.push("Évitez les séquences communes (123, abc, qwerty...)");
    }

    // Pas de répétitions
    if (!/(.)\1{2,}/.test(pwd) && pwd.length > 0) {
      score += 1;
    } else if (/(.)\1{2,}/.test(pwd)) {
      feedback.push("Évitez les répétitions (aaa, 111...)");
    }

    // Déterminer le niveau et le temps estimé pour le hacker
    let level: PasswordStrength['level'];
    let color: string;
    let timeToHack: string;

    if (score <= 2) {
      level = 'Très faible';
      color = 'from-red-600 to-red-700';
      timeToHack = 'Quelques secondes';
    } else if (score <= 4) {
      level = 'Faible';
      color = 'from-orange-600 to-orange-700';
      timeToHack = 'Quelques minutes';
    } else if (score <= 5) {
      level = 'Moyen';
      color = 'from-yellow-600 to-yellow-700';
      timeToHack = 'Quelques heures';
    } else if (score <= 6) {
      level = 'Fort';
      color = 'from-blue-600 to-blue-700';
      timeToHack = 'Plusieurs années';
    } else {
      level = 'Très fort';
      color = 'from-green-600 to-green-700';
      timeToHack = 'Des siècles';
    }

    return { score, level, color, timeToHack, feedback };
  };

  // Générer un mot de passe sécurisé
  const generateSecurePassword = () => {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    
    const allChars = lowercase + uppercase + numbers + symbols;
    let password = '';
    
    // S'assurer qu'on a au moins un caractère de chaque type
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];
    
    // Compléter avec des caractères aléatoires
    for (let i = 4; i < 16; i++) {
      password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    
    // Mélanger le mot de passe
    return password.split('').sort(() => Math.random() - 0.5).join('');
  };

  const handleGeneratePassword = () => {
    const newPassword = generateSecurePassword();
    setGeneratedPassword(newPassword);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  useEffect(() => {
    if (password) {
      setStrength(evaluatePassword(password));
    } else {
      setStrength(null);
    }
  }, [password]);

  const passwordTips = [
    {
      icon: Lock,
      title: "Longueur recommandée",
      description: "Utilisez au minimum 12 caractères. Plus c'est long, plus c'est sûr !"
    },
    {
      icon: Key,
      title: "Mélange de caractères",
      description: "Combinez majuscules, minuscules, chiffres et symboles (!@#$%^&*)"
    },
    {
      icon: Shield,
      title: "Évitez les informations personnelles",
      description: "Pas de nom, date de naissance, ou informations facilement trouvables"
    },
    {
      icon: RefreshCw,
      title: "Changez régulièrement",
      description: "Mettez à jour vos mots de passe importants tous les 3-6 mois"
    }
  ];

  const commonMistakes = [
    "123456789",
    "password",
    "qwerty",
    "azerty123",
    "motdepasse",
    "admin",
    "12345678"
  ];

  return (
    <div className="p-8 bg-gradient-to-b from-black to-red-950">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 rounded-full">
              <Lock className="w-12 h-12 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Sécurité des Mots de Passe
          </h2>
          <p className="text-xl text-gray-300">
            Testez et apprenez à créer des mots de passe sécurisés
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Testeur de mot de passe */}
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-2xl border border-red-600">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Shield className="w-6 h-6 mr-3 text-blue-400" />
              Testez votre mot de passe
            </h3>
            
            <div className="space-y-6">
              {/* Input du mot de passe */}
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Tapez votre mot de passe ici..."
                  className="w-full px-4 py-3 bg-red-800 bg-opacity-50 border border-red-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 pr-12"
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>

              {/* Indicateur de force */}
              {strength && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-semibold">Force du mot de passe:</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r ${strength.color} text-white`}>
                      {strength.level}
                    </span>
                  </div>
                  
                  {/* Barre de progression */}
                  <div className="w-full bg-red-800 bg-opacity-50 rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full bg-gradient-to-r ${strength.color} transition-all duration-500`}
                      style={{ width: `${(strength.score / 8) * 100}%` }}
                    ></div>
                  </div>

                  {/* Temps estimé pour hacker */}
                  <div className="bg-red-800 bg-opacity-50 p-4 rounded-xl border border-red-600">
                    <div className="flex items-center text-yellow-300 mb-2">
                      <Timer className="w-5 h-5 mr-2" />
                      <span className="font-semibold">Temps estimé pour hacker:</span>
                    </div>
                    <span className="text-white text-lg font-bold">{strength.timeToHack}</span>
                  </div>

                  {/* Feedback */}
                  {strength.feedback.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="text-white font-semibold flex items-center">
                        <Info className="w-5 h-5 mr-2 text-blue-400" />
                        Améliorations suggérées:
                      </h4>
                      {strength.feedback.map((tip, index) => (
                        <div key={index} className="flex items-start text-gray-300">
                          <AlertTriangle className="w-4 h-4 text-orange-400 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{tip}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Générateur de mot de passe */}
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-2xl border border-red-600">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Zap className="w-6 h-6 mr-3 text-green-400" />
              Générateur sécurisé
            </h3>
            
            <div className="space-y-6">
              <button
                onClick={handleGeneratePassword}
                className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 px-6 py-3 rounded-xl text-white font-semibold transition-all duration-300 flex items-center justify-center"
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                Générer un mot de passe sécurisé
              </button>

              {generatedPassword && (
                <div className="space-y-4">
                  <div className="bg-red-800 bg-opacity-50 p-4 rounded-xl border border-red-600">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-mono text-lg break-all">{generatedPassword}</span>
                      <button
                        onClick={() => copyToClipboard(generatedPassword)}
                        className="ml-2 p-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition-colors"
                        title="Copier"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="text-sm text-gray-300">
                    <div className="flex items-center mb-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      Force: <span className="text-green-400 font-semibold ml-1">Très fort</span>
                    </div>
                    <div className="flex items-center">
                      <Timer className="w-4 h-4 text-blue-400 mr-2" />
                      Temps estimé pour hacker: <span className="text-blue-400 font-semibold ml-1">Des siècles</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Conseils et bonnes pratiques */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Tips */}
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-2xl border border-red-600">
            <h3 className="text-2xl font-bold text-white mb-6">
              📚 Conseils pour un mot de passe fort
            </h3>
            <div className="space-y-4">
              {passwordTips.map((tip, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-blue-600 p-2 rounded-lg flex-shrink-0">
                    {React.createElement(tip.icon, { className: "w-5 h-5 text-white" })}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{tip.title}</h4>
                    <p className="text-gray-300 text-sm">{tip.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mots de passe à éviter */}
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-2xl border border-red-600">
            <h3 className="text-2xl font-bold text-white mb-6">
              ⚠️ Exemples à éviter absolument
            </h3>
            <div className="space-y-3">
              {commonMistakes.map((mistake, index) => (
                <div key={index} className="flex items-center justify-between bg-red-800 bg-opacity-50 p-3 rounded-lg border border-red-600">
                  <span className="text-white font-mono">{mistake}</span>
                  <XCircle className="w-5 h-5 text-red-400" />
                </div>
              ))}
            </div>
            <div className="mt-6 bg-orange-900 bg-opacity-50 p-4 rounded-xl border border-orange-600">
              <div className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-orange-200 text-sm">
                  Ces mots de passe sont dans les listes des hackers et peuvent être cassés en quelques secondes !
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Gestionnaires de mots de passe */}
        <div className="mt-12 bg-gradient-to-br from-indigo-900 to-indigo-800 p-8 rounded-2xl border border-indigo-600">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            🔐 Gestionnaires de mots de passe recommandés
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Bitwarden", desc: "Gratuit et open source", icon: "🔒" },
              { name: "1Password", desc: "Très sécurisé, payant", icon: "🗝️" },
              { name: "LastPass", desc: "Version gratuite disponible", icon: "🔐" }
            ].map((manager, index) => (
              <div key={index} className="bg-indigo-800 bg-opacity-50 p-6 rounded-xl border border-indigo-600 text-center">
                <div className="text-4xl mb-3">{manager.icon}</div>
                <h4 className="text-white font-semibold text-lg mb-2">{manager.name}</h4>
                <p className="text-indigo-200 text-sm">{manager.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <p className="text-indigo-200">
              💡 <strong>Astuce:</strong> Un gestionnaire de mots de passe génère et stocke des mots de passe uniques pour chaque site !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
