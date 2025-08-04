import React from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      position: 'Lead Developer',
      company: 'TechCorp Solutions',
      location: 'Abidjan, cote d\'ivoire',
      period: '2022 - Présent',
      description: 'Direction technique d\'une équipe de 8 développeurs sur des projets d\'envergure. Architecture et développement d\'applications web complexes avec React, Node.js et AWS.',
      achievements: [
        'Réduction de 40% du temps de développement grâce à l\'implémentation de composants réutilisables',
        'Migration réussie de 5 applications legacy vers des architectures modernes',
        'Mise en place de processus CI/CD augmentant la fréquence de déploiement de 300%'
      ]
    },
    {
      position: 'Full Stack Developer',
      company: 'StartupInnovante',
      location: 'Abidjan, cote d\'ivoire',
      period: '2020 - 2022',
      description: 'Développement complet d\'une plateforme SaaS de gestion de projets utilisée par plus de 10,000 utilisateurs actifs. Stack technique : React, TypeScript, Node.js, PostgreSQL.',
      achievements: [
        'Développement de 0 à 1 d\'une application web complète',
        'Optimisation des performances permettant de supporter 10x plus d\'utilisateurs',
        'Implémentation d\'un système de facturation automatisé avec Stripe'
      ]
    },
    {
      position: 'Frontend Developer',
      company: 'WebAgency Pro',
      location: 'Abidjan, cote d\'ivoire',
      period: '2019 - 2020',
      description: 'Création d\'interfaces utilisateur modernes et responsives pour des clients variés. Spécialisation en React, Vue.js et optimisation des performances web.',
      achievements: [
        'Livraison de 15+ sites web avec un taux de satisfaction client de 98%',
        'Amélioration moyenne de 60% des scores Lighthouse des sites clients',
        'Formation de l\'équipe junior aux bonnes pratiques du développement frontend'
      ]
    },
    {
      position: 'Junior Developer',
      company: 'DevStudio',
      location: 'Abidjan, cote d\'ivoire',
      period: '2018 - 2019',
      description: 'Premier poste en développement web. Apprentissage intensif des technologies modernes et contribution à divers projets clients sous supervision senior.',
      achievements: [
        'Montée en compétences rapide sur React, Node.js et les outils modernes',
        'Contribution significative à 8 projets clients',
        'Certification AWS Solutions Architect Associate'
      ]
    }
  ];

  const certifications = [
    {
      title: 'cisco',
      issuer: '',
      year: 'in progress'
    },
    {
      title: 'CERTIFICATION EN FIBRE OPTIQUE',
      issuer: 'Awide technology',
      year: '2024'
    },
    
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Mon Parcours
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Une progression constante à travers des défis techniques stimulants
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Experience Timeline */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative flex items-start">
                    {/* Timeline Dot */}
                    <div className="absolute left-4 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-gray-900"></div>
                    
                    <div className="ml-16 bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 w-full">
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <h3 className="text-xl font-semibold text-white">{exp.position}</h3>
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm border border-blue-500/30">
                          {exp.company}
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-4 mb-4 text-gray-400 text-sm">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {exp.description}
                      </p>
                      
                      <div className="space-y-2">
                        <h4 className="font-semibold text-white">Réalisations clés :</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="text-gray-400 text-sm flex items-start">
                              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications & Skills */}
          <div className="space-y-8">
            <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
              <div className="flex items-center mb-6">
                <Award className="w-6 h-6 text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Certifications</h3>
              </div>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="p-4 bg-gray-700/30 rounded-lg border border-gray-600">
                    <h4 className="font-semibold text-white mb-1">{cert.title}</h4>
                    <p className="text-blue-400 text-sm mb-1">{cert.issuer}</p>
                    <p className="text-gray-400 text-xs">{cert.year}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-6">Éducation</h3>
              
              <div className="space-y-4">
                <div className="p-4 bg-gray-700/30 rounded-lg border border-gray-600">
                  <h4 className="font-semibold text-white mb-1">licence en reseau et telecommunication </h4>
                  <p className="text-blue-400 text-sm mb-1">Institut Ivoirien de Technologie  </p>
                  <p className="text-gray-400 text-xs">2024 - 2025</p>
                </div>
                
                <div className="p-4 bg-gray-700/30 rounded-lg border border-gray-600">
                  <h4 className="font-semibold text-white mb-1">BTS en reseau et telecommunication</h4>
                  <p className="text-blue-400 text-sm mb-1">HEGES </p>
                  <p className="text-gray-400 text-xs">2022 - 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;