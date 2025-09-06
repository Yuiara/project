import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, MapPin, Phone, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600"></div>
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
              Joshua Millard B. Lingayo
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl font-light mb-8 opacity-90">
              Full-Stack Developer
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 text-sm sm:text-base"
          >
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <span>Baguio City, Benguet, Philippines</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={18} />
              <span>+63 9392600930</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={18} />
              <span>shreynlingayo@gmail.com</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center gap-4"
          >
            <a
              href="https://github.com/Yuiara"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-105"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a
              href="https://drive.google.com/file/d/1gB7oiNFmlwyMYI7ZjGpJ54lN837Ds9-g/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-105"
            >
              <ExternalLink size={20} />
              <span>Resume</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;