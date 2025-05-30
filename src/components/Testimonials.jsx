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

const testimonials = [
  {
    name: "Jane Doe",
    role: "Project Manager, Innovate Corp",
    image: "https://via.placeholder.com/150/cccccc/808080?text=JD", // Placeholder image
    quote: "Working with Alex Chroma was a fantastic experience. Their attention to detail and commitment to quality resulted in a product that exceeded our expectations. Highly recommended!",
  },
  {
    name: "Mark Stellar",
    role: "CEO, TechForward Solutions",
    image: "https://via.placeholder.com/150/bbbbbb/808080?text=MS", // Placeholder image
    quote: "Alex is a highly skilled developer with a great eye for design. They were able to quickly understand our vision and translate it into a beautiful and functional website.",
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-2xl sm:text-3xl font-bold text-center mb-12 md:mb-16 text-white"
        >
          What People Say
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => ( // Removed index
            <motion.div
              key={testimonial.name} // Changed key to testimonial.name
              variants={itemVariants}
              className="glass-effect bg-neutralGlass-200 p-6 shadow-lg rounded-xl"
              whileHover={{ y: -5, scale: 1.03, transition: { type: "spring", stiffness: 300 } }}
            >
              <div className="flex items-center mb-4">
                <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4 border border-white/20" // Added subtle border
                  />
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg text-white dark:text-primary-50">{testimonial.name}</h3> {/* Text color */}
                    <p className="text-gray-200 dark:text-gray-300 text-sm">{testimonial.role}</p> {/* Text color */}
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-100 dark:text-gray-200 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
  );
}