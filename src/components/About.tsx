import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-pink-100">
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              I'm a passionate Computer Science graduate with a deep love for full-stack development, 
              problem-solving, and building efficient systems. My journey in technology has been driven 
              by curiosity and a desire to create meaningful solutions that make a difference.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              With experience in modern web technologies like React, Node.js, and various databases, 
              I enjoy tackling complex challenges and turning ideas into reality. I believe in writing 
              clean, maintainable code and constantly learning new technologies to stay ahead in this 
              ever-evolving field.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              When I'm not coding, you'll find me exploring new frameworks, contributing to open-source 
              projects, or brainstorming the next big idea. I'm always eager to collaborate with 
              like-minded individuals and contribute to projects that push the boundaries of what's possible.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;