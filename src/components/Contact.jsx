import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Get in Touch
          </h2>
          <p className="text-gray-600">
            Have a project in mind? Let's work together!
          </p>
        </motion.div>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 backdrop-blur-lg bg-white/30 p-8 rounded-xl"
        >
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-white/50 border border-gray-200 focus:outline-none focus:border-blue-600"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-white/50 border border-gray-200 focus:outline-none focus:border-blue-600"
            />
          </div>
          <div>
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-lg bg-white/50 border border-gray-200 focus:outline-none focus:border-blue-600"
            ></textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}