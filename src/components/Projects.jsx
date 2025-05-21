import React from 'react';
import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      title: 'Project 1',
      description: 'A modern web application built with React and Node.js',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg'
    },
    {
      title: 'Project 2',
      description: 'Mobile-first e-commerce platform',
      image: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg'
    },
    {
      title: 'Project 3',
      description: 'Real-time chat application',
      image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-white/30 backdrop-blur-lg">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="rounded-xl overflow-hidden backdrop-blur-lg bg-white/30"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}