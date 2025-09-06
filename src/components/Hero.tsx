import React, { useEffect, useState } from 'react';
import { Shield, Smartphone, Monitor, AlertTriangle } from 'lucide-react';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ setActiveSection }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950 to-red-900">
        <div className="absolute inset-0">
          {/* Animated particles */}
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-red-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden">
        <Shield 
          className="absolute text-red-400 opacity-20 animate-bounce" 
          size={60}
          style={{ top: '10%', left: '15%', animationDelay: '0s' }}
        />
        <Smartphone 
          className="absolute text-red-300 opacity-30 animate-bounce" 
          size={40}
          style={{ top: '20%', right: '20%', animationDelay: '1s' }}
        />
        <Monitor 
          className="absolute text-red-500 opacity-25 animate-bounce" 
          size={50}
          style={{ bottom: '30%', left: '10%', animationDelay: '2s' }}
        />
        <AlertTriangle 
          className="absolute text-red-400 opacity-20 animate-bounce" 
          size={45}
          style={{ bottom: '20%', right: '15%', animationDelay: '1.5s' }}
        />
      </div>

      {/* Main Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <div className={`transition-all duration-2000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-red-400">LE NUMÉRIQUE</span>
            <br />
            <span className="text-white">ET VOS</span>
            <br />
            <span className="text-red-500">ENFANTS</span>
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto my-8 rounded-full"></div>
          
          <h2 className="text-2xl md:text-4xl font-light mb-8 text-red-200">
            Mesures et Sécurité
          </h2>
          
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed text-gray-300">
            Une présentation interactive sur les enjeux de sécurité numérique 
            pour protéger nos enfants dans l'ère digitale
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button 
              onClick={() => setActiveSection('introduction')}
              className="group px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border-2 border-red-500"
            >
              <span className="flex items-center justify-center gap-2">
                Commencer la présentation
                <Shield className="w-5 h-5 group-hover:animate-pulse" />
              </span>
            </button>
            
            <button 
              onClick={() => setActiveSection('statistics')}
              className="px-8 py-4 bg-transparent hover:bg-red-900 text-white font-semibold rounded-full transition-all duration-300 border-2 border-red-400 hover:border-red-300"
            >
              Voir les statistiques
            </button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-red-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-red-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Decorative grid overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(239, 68, 68, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(239, 68, 68, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
    </div>
  );
};
