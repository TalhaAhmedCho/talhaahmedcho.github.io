import React from 'react'; 
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

// Animation Variants
const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const contentVariants = { // For the main content block (form area)
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } }, // Slight delay
};


function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> {/* Added text-center for title alignment */}
        <motion.h2
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-2xl sm:text-3xl font-bold text-center mb-12 md:mb-16 text-white"
        >
          Get in Touch
        </motion.h2>
        <motion.div
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }} // Trigger sooner for larger block
          className="max-w-3xl mx-auto glass-effect bg-neutralGlass-100 p-6 md:p-10 rounded-xl text-left" // Added text-left for form content
        >
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-100 dark:text-gray-50">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="mt-1 block w-full rounded-md bg-white/5 border-white/20 text-white placeholder-gray-300 shadow-sm focus:ring-primary-300 focus:border-primary-300" // Glassy input
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-100 dark:text-gray-50"> {/* Text color change */}
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="mt-1 block w-full rounded-md bg-white/5 border-white/20 text-white placeholder-gray-300 shadow-sm focus:ring-primary-300 focus:border-primary-300" // Glassy input
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-100 dark:text-gray-50"> {/* Text color change */}
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Your Message"
                  className="mt-1 block w-full rounded-md bg-white/5 border-white/20 text-white placeholder-gray-300 shadow-sm focus:ring-primary-300 focus:border-primary-300" // Glassy textarea
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full gradient-bg text-white px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity" // Button stands out
                >
                  Send Message
                </button>
              </div>
            </form>

            <div className="mt-12 flex justify-center space-x-6">
              <a
                href="#"
                className="text-gray-100 dark:text-gray-200 hover:text-primary-300 dark:hover:text-primary-200"
              >
                <FiGithub className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-100 dark:text-gray-200 hover:text-primary-300 dark:hover:text-primary-200"
              >
                <FiLinkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:alex.chroma@example.com" // Updated placeholder email
                className="text-gray-100 dark:text-gray-200 hover:text-primary-300 dark:hover:text-primary-200"
              >
                <FiMail className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
  );
}