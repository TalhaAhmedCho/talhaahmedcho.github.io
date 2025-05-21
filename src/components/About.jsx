import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            About Me
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            I'm a passionate developer with expertise in modern web technologies.
            I love creating beautiful and functional applications that solve real-world problems.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Frontend', 'Backend', 'Design'].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="p-6 rounded-xl backdrop-blur-lg bg-white/30"
              >
                <h3 className="text-xl font-semibold mb-2">{skill}</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}