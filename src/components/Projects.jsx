import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const projects = [
  {
    title: "Portfolio Website Template",
    description: "A responsive and animated portfolio template built with React, Tailwind CSS, and Framer Motion, showcasing a modern glassy design.",
    image: "https://via.placeholder.com/600x400.png?text=Portfolio+Template",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    github: "#",
    demo: "#",
  },
  {
    title: "Interactive Data Dashboard",
    description: "A conceptual project for a data dashboard that allows users to visualize complex datasets with interactive charts and filters.",
    image: "https://via.placeholder.com/600x400.png?text=Data+Dashboard",
    tech: ["React", "D3.js", "Node.js", "PostgreSQL"],
    github: "#",
    demo: "#",
  },
  {
    title: "Glassmorphism UI Kit",
    description: "A UI kit focusing on glassmorphism effects, providing ready-to-use components for modern web interfaces.",
    image: "https://via.placeholder.com/600x400.png?text=Glassmorphism+UI+Kit",
    tech: ["React", "Styled-Components", "Figma"],
    github: "#",
    demo: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-2xl sm:text-3xl font-bold text-center mb-12 md:mb-16 text-white dark:text-white" // Ensure title is visible
        >
          Featured Projects
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => ( // Removed index from map params
            <motion.div
              key={project.title} // Changed key to project.title
              variants={itemVariants}
              className="glass-effect bg-neutralGlass-300 overflow-hidden shadow-lg rounded-xl" 
              whileHover={{ y: -5, scale: 1.03, transition: { type: "spring", stiffness: 300 } }}
            >
              {/* Removed explicit transition from here, hover transition is now part of whileHover */}
              <img
                src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover" // Image remains as is
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white dark:text-primary-50">{project.title}</h3> {/* Text color change */}
                  <p className="text-sm sm:text-base text-gray-200 dark:text-gray-300 mb-4">{project.description}</p> {/* Text color change */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((techItem) => ( // Renamed tech to techItem for clarity
                      <span
                        key={techItem} // Changed key to techItem
                        className="px-3 py-1 bg-primary-500/30 text-white text-sm rounded-full" 
                      >
                        {techItem}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-end space-x-4">
                    <a
                      href={project.github}
                      className="text-gray-100 dark:text-gray-200 hover:text-primary-300 dark:hover:text-primary-200" // Icon color change
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiGithub className="w-6 h-6" />
                    </a>
                    <a
                      href={project.demo}
                      className="text-gray-100 dark:text-gray-200 hover:text-primary-300 dark:hover:text-primary-200" // Icon color change
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiExternalLink className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
      </motion.div>
    </div>
  </section>
  );
}