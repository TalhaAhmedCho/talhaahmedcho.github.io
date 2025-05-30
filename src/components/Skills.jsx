import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDocker } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiPostgresql, SiTailwindcss, SiGit } from 'react-icons/si';

// Animation Variants (assuming similar definitions as in Projects.jsx or defined globally)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }, // Adjusted stagger timing
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }, // Adjusted duration
};

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML5", icon: SiTailwindcss }, // Placeholder icon, ideally specific
      { name: "CSS3", icon: SiTailwindcss }, // Placeholder icon
      { name: "JavaScript (ES6+)", icon: SiTypescript }, // Placeholder icon
      { name: "React", icon: FaReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Framer Motion", icon: FaReact }, // Placeholder icon
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: FaNodeJs }, // Placeholder icon
      { name: "Python", icon: SiMongodb }, // Placeholder icon, ideally Python
      { name: "Django", icon: SiMongodb }, // Placeholder icon
      { name: "REST APIs", icon: SiPostgresql }, // Placeholder icon
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git & GitHub", icon: SiGit },
      { name: "VS Code", icon: SiGit }, // Placeholder icon
      { name: "Figma", icon: FaDocker }, // Placeholder icon
      { name: "Responsive Design", icon: SiTailwindcss }, // Placeholder icon
      { name: "Agile Methodologies", icon: FaDocker }, // Placeholder icon
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-2xl sm:text-3xl font-bold text-center mb-12 md:mb-16 text-gray-900 dark:text-white"
        >
          Technical Skills
        </motion.h2>
        <motion.div
          variants={containerVariants} // For staggering category cards
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants} // Category card entrance
              className="bg-gray-50/70 dark:bg-gray-700/70 p-6 rounded-xl backdrop-blur-sm" // Changed to rounded-xl
            >
              <motion.h3 
                // variants={itemVariants} // Optionally animate category title separately or let it be part of card animation
                className="text-xl sm:text-2xl font-semibold mb-6 text-center text-gray-800 dark:text-white"
              >
                {category.title}
              </motion.h3>
              <motion.div
                variants={containerVariants} // For staggering skill items within this category
                // initial="hidden" // Not needed if parent (category card) controls visibility
                // whileInView="visible" // Not needed if parent (category card) controls visibility
                className="space-y-4"
              >
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants} // Skill item entrance
                    className="glass-effect bg-neutralGlass-100 flex items-center p-3 hover:shadow-md transition-shadow rounded-xl" // Added rounded-xl
                    whileHover={{ scale: 1.03, y: -2, transition: { type: "spring", stiffness: 300 } }}
                  >
                    <skill.icon className="w-6 h-6 text-primary-400 dark:text-primary-300 mr-3" />
                    <span className="text-sm sm:text-base text-gray-700 dark:text-gray-100">{skill.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}