import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}
export const Navigation: React.FC<NavigationProps> = ({
  activeSection,
  setActiveSection
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navItems = [{
    id: 'home',
    label: 'ACCUEIL'
  }, {
    id: 'introduction',
    label: 'INTRODUCTION'
  }, {
    id: 'dangers',
    label: 'DANGERS'
  }, {
    id: 'security',
    label: 'SÉCURITÉ'
  }, {
    id: 'statistics',
    label: 'STATISTIQUES'
  }, {
    id: 'legislation',
    label: 'LÉGISLATION'
  }, {
    id: 'resources',
    label: 'RESSOURCES'
  }, {
    id: 'conclusion',
    label: 'CONCLUSION'
  }];
  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return <header className="sticky top-0 z-50 bg-gradient-to-r from-black to-red-950 bg-opacity-95 shadow-md border-b border-red-800">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-xl font-light tracking-widest text-red-400 " style={{ fontFamily: 'Playfair Display, serif' }}>
          <span>CYBERSÉCURITÉ</span>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map(item => <li key={item.id}>
                <button onClick={() => handleNavClick(item.id)} className={`text-xs tracking-wider hover:text-red-300 transition-colors ${activeSection === item.id ? 'text-red-400 font-semibold' : 'text-white'}`}>
                  {item.label}
                </button>
              </li>)}
          </ul>
        </nav>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-red-400" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {mobileMenuOpen && <div className="md:hidden bg-gradient-to-r from-black to-red-950 bg-opacity-95 border-t border-red-800">
          <ul className="flex flex-col items-center py-4">
            {navItems.map(item => <li key={item.id} className="py-2">
                <button onClick={() => handleNavClick(item.id)} className={`text-sm tracking-wider hover:text-red-300 transition-colors ${activeSection === item.id ? 'text-red-400 font-semibold' : 'text-white'} font-light`}>
                  {item.label}
                </button>
              </li>)}
          </ul>
        </div>}
    </header>;
};