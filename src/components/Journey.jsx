import React from 'react';
import { motion } from 'framer-motion';

// Animation Variants
const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
// itemVariants and containerVariants could be defined if switching from manual delay

const timeline = [
  {
    year: "Jan 2021 - Present",
    title: "Lead Developer - Creative Solutions Inc.",
    company: "Creative Solutions Inc.", // Company name can be part of title or separate
    description: "Leading the development of innovative web solutions for diverse clients. Responsible for full-stack development, team collaboration, and project management using Agile practices.",
  },
  {
    year: "June 2019 - Dec 2020",
    title: "Junior Web Developer - Tech Starters LLC",
    company: "Tech Starters LLC",
    description: "Contributed to building and maintaining client websites. Gained experience in frontend technologies and worked closely with senior developers and designers.",
  },
  {
    year: "2018 - 2019",
    title: "Web Development Intern - Innovatech",
    company: "Innovatech",
    description: "Assisted senior developers in various stages of web development projects, focusing on frontend tasks and learning backend basics.",
  },
];

function Journey() {
  return (
    <section id="journey" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-2xl sm:text-3xl font-bold text-center mb-12 md:mb-16 text-gray-900 dark:text-white"
        >
          My Journey
        </motion.h2>
        <div className="relative max-w-3xl mx-auto"> 
          {timeline.map((item, index) => ( // index is still needed for the custom delay calculation
            <motion.div
              key={item.title} // Changed key to item.title
              className="mb-12 ml-8 relative timeline-dot timeline-line" 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }} // Existing custom stagger
              viewport={{ once: true }}
            >
              <motion.div 
                className="glass-effect bg-neutralGlass-100 p-6 rounded-xl" // Changed to rounded-xl
                whileHover={{ y: -3, scale: 1.01, transition: { type: "spring", stiffness: 300 } }}
              >
                <span className="text-sm font-semibold text-secondary-400 dark:text-secondary-300">
                  {item.year}
                </span>
                  <h3 className="text-lg sm:text-xl font-semibold mt-1 text-white dark:text-primary-50">{item.title}</h3> {/* Text color change */}
                  <p className="text-sm sm:text-base text-gray-200 dark:text-gray-300">{item.company}</p> {/* Text color change */}
                  <p className="text-sm sm:text-base text-gray-300 dark:text-gray-400 mt-2">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  );
}