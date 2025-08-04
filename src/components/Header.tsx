import React, { useState, useCallback } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

const navItems = [
  { id: 'home', label: 'Accueil' },
  { id: 'about', label: 'À propos' },
  { id: 'skills', label: 'Compétences' },
  { id: 'projects', label: 'Projets' },
  { id: 'experience', label: 'Expérience' },
  { id: 'contact', label: 'Contact' },
];

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo & Title */}
          <div className="flex items-center gap-2">
            <Code2 className="w-8 h-8 text-blue-500" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Entreprise de solutions numériques
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`relative transition-colors duration-300 font-medium hover:text-blue-400 ${
                  activeSection === id ? 'text-blue-400' : 'text-gray-300'
                }`}
              >
                {label}
                {activeSection === id && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400 rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden text-gray-300 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav
            className="md:hidden border-t border-gray-800 py-4 space-y-2"
            role="navigation"
          >
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`block w-full text-left py-2 px-2 rounded transition-colors duration-300 hover:text-blue-400 ${
                  activeSection === id ? 'text-blue-400' : 'text-gray-300'
                }`}
              >
                {label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
