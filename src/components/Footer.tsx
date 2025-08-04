import React from 'react';
import { Heart, Code2, Github, Linkedin, Mail, } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/diaz135', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/abdou-ouattara-6ab57b236/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:ouattaraabdou1517@gmail.com', label: 'Email' }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <Code2 className="w-8 h-8 text-blue-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Ouattara abdou
              </span>
            </div>
            <p className="text-gray-400 text-sm max-w-md">
              Développeur Full Stack passionné, créant des expériences numériques 
              exceptionnelles avec les technologies modernes.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="p-3 bg-gray-800 hover:bg-blue-600 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25 group"
              >
                <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
              </a>
            ))}
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-right">
            <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                À propos
              </button>
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                Projets
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                Contact
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm flex items-center">
              Fait par Ouattara abdou
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              © {currentYear} Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
      
      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-40"
        aria-label="Retour en haut"
      >
        <Code2 className="w-6 h-6 text-white" />
      </button>
    </footer>
  );
};

export default Footer;