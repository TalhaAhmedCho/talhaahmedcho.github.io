import React from 'react';
import { motion } from 'framer-motion'; // Import motion
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.1 }} // Trigger when 10% is in view
      className="glass-effect bg-neutralGlass-700 py-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm sm:text-base text-gray-200 dark:text-gray-300">
              © {new Date().getFullYear()} Alex Chroma. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-100 dark:text-gray-200 hover:text-primary-300 dark:hover:text-primary-200" // Icon color
            >
              <FiGithub className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-100 dark:text-gray-200 hover:text-primary-300 dark:hover:text-primary-200" // Icon color
            >
              <FiLinkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:alex.chroma@example.com" // Updated placeholder email
              className="text-gray-100 dark:text-gray-200 hover:text-primary-300 dark:hover:text-primary-200" 
            >
              <FiMail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}