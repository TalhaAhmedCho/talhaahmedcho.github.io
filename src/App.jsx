import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <nav className="fixed w-full backdrop-blur-lg bg-white/30 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
            >
              Portfolio
            </motion.div>
            <div className="flex space-x-8">
              {['About', 'Projects', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ scale: 1.1 }}
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="bg-white/30 backdrop-blur-lg py-8">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <p className="text-gray-600">© 2023 Portfolio. All rights reserved.</p>
            <div className="flex space-x-6">
              {[FaGithub, FaLinkedin, FaTwitter].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.2 }}
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;