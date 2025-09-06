import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, MapPin, Phone, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <footer id="contact" className="bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-200">
            Let's Connect
          </h2>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's build something amazing together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {/* Contact Info */}
          <div className="text-center">
            <div className="mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-purple-200">Baguio City, Benguet, Philippines</p>
            </div>
          </div>

          <div className="text-center">
            <div className="mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <a href="tel:+639392600930" className="text-purple-200 hover:text-pink-300 transition-colors duration-300">
                +63 9392600930
              </a>
            </div>
          </div>

          <div className="text-center">
            <div className="mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <a href="mailto:shreynlingayo@gmail.com" className="text-purple-200 hover:text-pink-300 transition-colors duration-300">
                shreynlingayo@gmail.com
              </a>
            </div>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center gap-6 mb-12"
        >
          <a
            href="https://github.com/Yuiara"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            <Github className="w-6 h-6" />
            <span>GitHub</span>
          </a>
          <a
            href="https://drive.google.com/file/d/1gB7oiNFmlwyMYI7ZjGpJ54lN837Ds9-g/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            <ExternalLink className="w-6 h-6" />
            <span>Resume</span>
          </a>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center pt-8 border-t border-purple-700"
        >
          <p className="text-purple-200 flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-pink-400 fill-current" /> by Joshua Millard B. Lingayo
          </p>
          <p className="text-purple-300 text-sm mt-2">
            © 2025 All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;