import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Code, Database, Palette } from 'lucide-react';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "Iggys Inn Inventory System",
      role: "Full-Stack Developer",
      type: "Internship",
      technologies: ["React", "Node.js", "MySQL", "Tailwind CSS"],
      description: "Comprehensive inventory system with user access control, CRUD operations, and reusable components designed for efficient restaurant management.",
      icon: <Database className="w-8 h-8" />,
      gradient: "from-pink-500 to-purple-600"
    },
    {
      title: "Divine Wars",
      role: "Asset Creator",
      type: "University Game Project",
      technologies: ["Game Design", "Asset Creation", "Philippine Mythology"],
      description: "Designed and developed game assets highlighting Philippine Mythology, creating immersive visual experiences that celebrate Filipino cultural heritage.",
      icon: <Palette className="w-8 h-8" />,
      gradient: "from-purple-500 to-indigo-600"
    },
    {
      title: "Sakura Cafe",
      role: "Full-Stack Developer",
      type: "Personal Project",
      technologies: ["Node.js", "PHP", "MySQL", "HTML"],
      description: "Complete inventory and ordering system with user access management, CRUD functionality, and reusable components for efficient cafe operations.",
      icon: <Code className="w-8 h-8" />,
      gradient: "from-pink-500 to-rose-600"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${project.gradient} text-white group-hover:scale-110 transition-transform duration-300`}>
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-purple-600 font-medium">
                      {project.role} • {project.type}
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-pink-100 to-purple-100 text-purple-700 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 text-sm font-medium">
                    <ExternalLink size={16} />
                    View Project
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;