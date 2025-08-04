import React from 'react';
import { Code, Lightbulb, Users, Target } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { number: '3+', label: 'Années d\'expérience' },
    { number: '30+', label: 'Projets réalisés' },
    { number: '10+', label: 'Technologies maîtrisées' },
    { number: '100%', label: 'Satisfaction client' }
  ];

  const values = [
    {
      icon: Code,
      title: 'Code Propre',
      description: 'J\'écris du code maintenable, testé et documenté suivant les meilleures pratiques.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Toujours à l\'affût des dernières technologies pour créer des solutions modernes.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Excellent travail en équipe avec une communication claire et efficace.'
    },
    {
      icon: Target,
      title: 'Résultats',
      description: 'Focalisé sur la livraison de solutions qui dépassent les attentes client.'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              À propos de moi
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Développeur passionné avec une expertise approfondie en technologies web modernes
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Développeur Full Stack avec plus de 3 ans d'expérience, je me spécialise dans la création
              d'applications web performantes et d'expériences utilisateur exceptionnelles. Ma passion
              pour la technologie m'amène constamment à explorer de nouveaux outils et frameworks.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Fort d'une expertise en pyhton, React, Node.js, TypeScript et des technologies cloud modernes,
              j'aide les entreprises à transformer leurs idées en solutions numériques robustes et évolutives.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Quand je ne code pas, vous me trouverez en train de contribuer à des projets open source,
              d'apprendre de nouvelles technologies ou de partager mes connaissances avec la communauté développeur.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 text-center border border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm sm:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                <value.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{value.title}</h3>
              <p className="text-gray-400 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;