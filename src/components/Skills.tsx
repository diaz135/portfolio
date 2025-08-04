import React from 'react';
import { Code2, Database, Palette, Server, Smartphone, Cloud } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Frontend',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React/Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Vue.js', level: 85 },
        { name: 'JavaScript ES6+', level: 95 }
      ]
    },
    {
      icon: Server,
      title: 'Backend',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Python/Django', level: 85 },
        { name: 'PHP/Laravel', level: 80 },
        { name: 'REST/GraphQL', level: 90 }
      ]
    },
    {
      icon: Database,
      title: 'Base de données',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'PostgreSQL', level: 90 },
        { name: 'MongoDB', level: 85 },
        { name: 'Redis', level: 80 },
        { name: 'MySQL', level: 85 }
      ]
    },
    {
      icon: Cloud,
      title: 'DevOps & Cloud',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'AWS/Azure', level: 85 },
        { name: 'Docker', level: 90 },
        { name: 'Kubernetes', level: 75 },
        { name: 'CI/CD', level: 85 }
      ]
    },
    {
      icon: Smartphone,
      title: 'Mobile',
      color: 'from-indigo-500 to-blue-500',
      skills: [
        { name: 'React Native', level: 85 },
        { name: 'Flutter', level: 80 },
        { name: 'Progressive Web Apps', level: 90 },
        { name: 'Expo', level: 85 }
      ]
    },
    {
      icon: Palette,
      title: 'Design & UX',
      color: 'from-pink-500 to-rose-500',
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'UI/UX Design', level: 80 },
        { name: 'Design Systems', level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Mes Compétences
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Un éventail complet de technologies modernes pour créer des solutions innovantes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mr-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-blue-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className={`bg-gradient-to-r ${category.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8 text-white">Autres Compétences</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Git/GitHub', 'Agile/Scrum', 'Test-Driven Development', 'Microservices',
              'WebSocket', 'PWA', 'SEO', 'Performance Optimization', 'Security Best Practices',
              'API Design', 'Code Review', 'Mentoring', 'Technical Leadership'
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-700/50 rounded-full text-gray-300 border border-gray-600 hover:border-blue-500/50 hover:text-blue-400 transition-all duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;