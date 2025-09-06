import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  Server, 
  GitBranch, 
  Palette,
  Brain,
  Users,
  Target,
  MessageCircle,
  Lightbulb
} from 'lucide-react';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React.js", icon: <Code2 className="w-6 h-6" /> },
        { name: "React Native", icon: <Smartphone className="w-6 h-6" /> },
        { name: "HTML", icon: <Globe className="w-6 h-6" /> },
        { name: "CSS", icon: <Palette className="w-6 h-6" /> },
        { name: "Bootstrap", icon: <Palette className="w-6 h-6" /> },
        { name: "TailwindCSS", icon: <Palette className="w-6 h-6" /> }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <Server className="w-6 h-6" /> },
        { name: "Laravel", icon: <Server className="w-6 h-6" /> },
        { name: "PHP", icon: <Code2 className="w-6 h-6" /> },
        { name: "Python", icon: <Code2 className="w-6 h-6" /> }
      ]
    },
    {
      title: "Database",
      skills: [
        { name: "MySQL", icon: <Database className="w-6 h-6" /> }
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: <GitBranch className="w-6 h-6" /> },
        { name: "GitHub", icon: <GitBranch className="w-6 h-6" /> },
        { name: "VSCode", icon: <Code2 className="w-6 h-6" /> },
        { name: "XAMPP", icon: <Server className="w-6 h-6" /> },
        { name: "AI tools", icon: <Brain className="w-6 h-6" /> },
        { name: "Sublime", icon: <Code2 className="w-6 h-6" /> }
      ]
    },
    {
      title: "Languages",
      skills: [
        { name: "JavaScript", icon: <Code2 className="w-6 h-6" /> },
        { name: "PHP", icon: <Code2 className="w-6 h-6" /> },
        { name: "Python", icon: <Code2 className="w-6 h-6" /> },
        { name: "Java", icon: <Code2 className="w-6 h-6" /> }
      ]
    }
  ];

  const softSkills = [
    { name: "Problem Solving", icon: <Brain className="w-5 h-5" /> },
    { name: "Communication", icon: <MessageCircle className="w-5 h-5" /> },
    { name: "Adaptability", icon: <Target className="w-5 h-5" /> },
    { name: "Teamwork", icon: <Users className="w-5 h-5" /> },
    { name: "Initiative", icon: <Lightbulb className="w-5 h-5" /> },
    { name: "Willingness to Learn", icon: <Brain className="w-5 h-5" /> }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
        </motion.div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-12 text-gray-800">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 shadow-lg border border-pink-100"
              >
                <h4 className="text-xl font-bold mb-4 text-center bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  {category.title}
                </h4>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center gap-3 p-3 bg-white/80 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300"
                    >
                      <div className="text-purple-600">
                        {skill.icon}
                      </div>
                      <span className="font-medium text-gray-800">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                {skill.icon}
                <span className="font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;