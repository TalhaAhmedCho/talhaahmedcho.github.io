import React from 'react';
import { motion } from 'framer-motion';

const timeline = [
  {
    year: '2023',
    title: 'Senior Full-Stack Developer',
    company: 'Tech Corp',
    description: 'Leading development of enterprise applications',
  },
  {
    year: '2021',
    title: 'Full-Stack Developer',
    company: 'Startup Inc',
    description: 'Built and scaled multiple web applications',
  },
  {
    year: '2020',
    title: 'Frontend Developer',
    company: 'Digital Agency',
    description: 'Created responsive web interfaces',
  },
  {
    year: '2019',
    title: 'Freelance Developer',
    company: 'Self-employed',
    description: 'Worked with various clients on web projects',
  },
];

function Journey() {
  return (
    <section id="journey" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-16">My Journey</h2>
          <div className="relative max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className="mb-12 ml-8 relative timeline-dot timeline-line"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                  {item.year}
                </span>
                <h3 className="text-xl font-semibold mt-1">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.company}</p>
                <p className="text-gray-500 dark:text-gray-400 mt-2">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}