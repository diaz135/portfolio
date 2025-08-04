import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Plateforme e-commerce complète avec panier, paiements et gestion des commandes',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'fullstack',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Application de gestion de tâches collaborative avec temps réel',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'frontend',
      technologies: ['React', 'TypeScript', 'Socket.io', 'Tailwind'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'API Gateway',
      description: 'Passerelle API haute performance avec authentification et rate limiting',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'backend',
      technologies: ['Node.js', 'Express', 'Redis', 'JWT'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'Portfolio Designer',
      description: 'Générateur de portfolios personnalisables avec templates modernes',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'frontend',
      technologies: ['Vue.js', 'Nuxt.js', 'Sass', 'Figma API'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'Mobile Banking App',
      description: 'Application bancaire mobile sécurisée avec biométrie et notifications',
      image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'mobile',
      technologies: ['React Native', 'Firebase', 'Biometric Auth', 'Push Notifications'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'Cloud Infrastructure',
      description: 'Infrastructure cloud automatisée avec monitoring et auto-scaling',
      image: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'devops',
      technologies: ['AWS', 'Terraform', 'Docker', 'Kubernetes'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  const filters = [
    { id: 'all', label: 'Tous les projets' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'devops', label: 'DevOps' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Mes Projets
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Une sélection de projets qui démontrent mes compétences et ma passion pour l'innovation
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50 border border-gray-700'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-gray-800/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.liveUrl}
                    className="p-2 bg-blue-500 hover:bg-blue-600 rounded-full transition-colors duration-300"
                  >
                    <ExternalLink className="w-4 h-4 text-white" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="p-2 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors duration-300"
                  >
                    <Github className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/diaz135"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
          >
            <Github className="w-5 h-5 mr-2" />
            Voir plus sur GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;