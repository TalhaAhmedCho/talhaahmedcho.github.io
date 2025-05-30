import React from 'react';
import { motion } from 'framer-motion';

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

const blogPosts = [
  {
    title: "The Future of Web Design: Glassmorphism & Beyond",
    excerpt: "A quick dive into the rising trend of glassmorphism in UI design and how it can be effectively implemented to create stunning user interfaces...",
    image: "https://via.placeholder.com/600x400.png?text=Glassmorphism+Blog",
    date: "October 26, 2023",
    link: "#", // Added link property
  },
  {
    title: "Optimizing React Performance: Tips & Tricks",
    excerpt: "Discover key techniques for boosting the performance of your React applications, from component rendering to state management.",
    image: "https://via.placeholder.com/600x400.png?text=React+Performance",
    date: "November 5, 2023",
    link: "#", // Added link property
  },
];

function Blog() {
  return (
    <section id="blog" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-2xl sm:text-3xl font-bold text-center mb-12 md:mb-16 text-gray-900 dark:text-white"
        >
          Latest Articles
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {blogPosts.map((post) => ( // Removed index
            <motion.article
              key={post.title} // Changed key to post.title
              variants={itemVariants}
              className="glass-effect bg-neutralGlass-100 overflow-hidden rounded-xl"
              whileHover={{ y: -5, scale: 1.03, transition: { type: "spring", stiffness: 300 } }}
            >
              <img
                src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="text-sm text-gray-300 dark:text-gray-400">{post.date}</span> {/* Text color */}
                  <h3 className="text-lg sm:text-xl font-semibold mt-2 mb-3 text-white dark:text-primary-50">{post.title}</h3> {/* Text color */}
                  <p className="text-sm sm:text-base text-gray-200 dark:text-gray-300 mb-4">{post.excerpt}</p> {/* Text color */}
                  <a
                    href={post.link} // Use post.link
                    className="text-accent-400 dark:text-accent-300 font-medium hover:text-accent-500 dark:hover:text-accent-200"
                  >
                    Read More →
                  </a>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
  );
}