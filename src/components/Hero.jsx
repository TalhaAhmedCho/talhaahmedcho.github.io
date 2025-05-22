import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8">
            <img
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-primary-300"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hey, I'm John Doe 👋
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
            Full-Stack Developer who builds modern and meaningful web experiences
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Passionate about creating elegant solutions to complex problems. 
            With expertise in both frontend and backend technologies, 
            I bring ideas to life through clean, efficient code.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="contact"
              smooth={true}
              className="gradient-bg text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Let's Talk
            </Link>
            <Link
              to="projects"
              smooth={true}
              className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-3 rounded-full font-medium border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 transition-colors"
            >
              See My Work
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}