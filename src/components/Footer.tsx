import React from 'react';
import { Shield, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-black to-red-900 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-red-500 bg-opacity-50 w-20"></div>
            <Shield className="text-red-400 mx-6" size={32} />
            <div className="h-px bg-red-500 bg-opacity-50 w-20"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Le Numérique et Vos Enfants
          </h2>
          <p className="text-xl text-red-200">
            Mesure et Sécurité
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Contact */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start text-red-200">
                <Mail className="w-5 h-5 mr-3" />
                <span>conference@gabon-digital.ga</span>
              </div>
              <div className="flex items-center justify-center md:justify-start text-red-200">
                <Phone className="w-5 h-5 mr-3" />
                <span>+241 077095853</span>
              </div>
              <div className="flex items-center justify-center md:justify-start text-red-200">
                <MapPin className="w-5 h-5 mr-3" />
                <span>Port-gentil, Gabon</span>
              </div>
            </div>
          </div>

          {/* Resources */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-4">Ressources Utiles</h3>
            <div className="space-y-3">
              <a href="#" className="flex items-center justify-center md:justify-start text-red-200 hover:text-white transition-colors">
                <ExternalLink className="w-4 h-4 mr-2" />
                <span>Cybermalveillance.gouv.fr</span>
              </a>
              <a href="#" className="flex items-center justify-center md:justify-start text-red-200 hover:text-white transition-colors">
                <ExternalLink className="w-4 h-4 mr-2" />
                <span>Internet Sans Crainte</span>
              </a>
              <a href="#" className="flex items-center justify-center md:justify-start text-red-200 hover:text-white transition-colors">
                <ExternalLink className="w-4 h-4 mr-2" />
                <span>CNIL Jeunes</span>
              </a>
            </div>
          </div>

          {/* Legal */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-4">Cadre Légal</h3>
            <div className="space-y-3">
              <div className="text-red-200">
                <p className="text-sm">Loi n°025/2023</p>
                <p className="text-xs opacity-75">Protection des données</p>
              </div>
              <div className="text-red-200">
                <p className="text-sm">Loi n°027/2023</p>
                <p className="text-xs opacity-75">Cybersécurité</p>
              </div>
              <div className="text-red-200">
                <p className="text-sm">Convention ONU</p>
                <p className="text-xs opacity-75">Droits de l'enfant</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-red-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-red-200 text-sm">
                © 2025 Conférence Gabon Digital Security
              </p>
              <p className="text-red-400 text-xs mt-1">
                Ensemble pour un internet plus sûr pour nos enfants
              </p>
            </div>
            <div className="flex space-x-4">
              <span className="text-red-300 text-xs px-3 py-1 bg-red-900 bg-opacity-50 rounded-full">
                #DigitalSafety
              </span>
              <span className="text-red-300 text-xs px-3 py-1 bg-red-900 bg-opacity-50 rounded-full">
                #ParentalControl
              </span>
              <span className="text-red-300 text-xs px-3 py-1 bg-red-900 bg-opacity-50 rounded-full">
                #GabonTech
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};