import React from 'react';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    title: 'Building Scalable React Applications',
    excerpt: 'Learn the best practices for building large-scale React applications with proper architecture and state management.',
    image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg',
    date: 'Oct 15, 2023',
  },
  {
    title: 'Modern Backend Development with Node.js',
    excerpt: 'Explore advanced patterns and techniques for building robust backend services using Node.js and Express.',
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg',
    date: 'Oct 1, 2023',
  },
];

function Blog() {
  return (
    <section id="blog" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-16">Latest Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="text-sm text-gray-500 dark:text-gray-400">{post.date}</span>
                  <h3 className="text-xl font-semibold mt-2 mb-3">{post.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                  <a
                    href="#"
                    className="text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300"
                  >
                    Read More →
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}