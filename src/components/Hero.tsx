import React, { useState, useEffect } from "react";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import persoImage from './perso.jpg';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const roles = [
    "Développeur Full Stack",
    "Django, Flask (backend)",
    "Expert React/Node.js",
    "Architecte Logiciel",
    "PostgreSQL, MySQL",
    "Passionné de Tech",
  ];

  // Effet machine à écrire
  useEffect(() => {
    if (isTyping) {
      if (displayText.length < roles[currentIndex].length) {
        const timeout = setTimeout(() => {
          setDisplayText(roles[currentIndex].slice(0, displayText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setIsTyping(false), 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setCurrentIndex((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }
  }, [displayText, currentIndex, isTyping, roles]);

  // Scroll vers la section suivante
  const scrollToNext = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 sm:pt-32"
    >
      {/* Background animé */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Avatar + Nom */}
        <div className="mb-8 animate-fade-in-up">
          <div className="w-32 h-32 mx-auto mb-8 relative">
            <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-spin-slow"></div>
            <div className="absolute inset-2 bg-gray-900 rounded-full flex items-center justify-center overflow-hidden">
              <img
                src={persoImage}
                alt="Photo de profil"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Nom */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
            Ouattara Abdou
          </span>
        </h1>

        {/* Texte animé */}
        <div className="text-2xl sm:text-3xl lg:text-4xl text-gray-300 mb-8 h-12 flex items-center justify-center">
          <span className="border-r-2 border-blue-500 animate-pulse pr-1">
            {displayText}
          </span>
        </div>

        {/* Description */}
        <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Passionné par la création d&apos;expériences numériques exceptionnelles
          avec plus de 3 ans d&apos;expertise en développement web moderne et
          architecture logicielle.
        </p>

        {/* Liens sociaux */}
        <div className="flex justify-center space-x-6 mb-12 animate-fade-in-up delay-500">
          <a
            href="https://github.com/diaz135"
            className="p-3 bg-gray-800 hover:bg-blue-600 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/abdou-ouattara-6ab57b236/"
            className="p-3 bg-gray-800 hover:bg-blue-600 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:ouattaraabdou1517@gmail.com"
            className="p-3 bg-gray-800 hover:bg-orange-600 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-orange-500/25"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        {/* Boutons CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up delay-700">
          <button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
          >
            Voir mes projets
          </button>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-4 border-2 border-gray-600 hover:border-blue-500 rounded-full font-semibold transition-all duration-300 hover:bg-blue-500/10"
          >
            Me contacter
          </button>
        </div>

        {/* Indicateur scroll */}
        <div className="animate-bounce cursor-pointer" onClick={scrollToNext}>
          <ChevronDown className="w-8 h-8 mx-auto text-gray-400 hover:text-blue-400 transition-colors duration-300" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
