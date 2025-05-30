import React from 'react'; 
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.5, 
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Removed the duplicated, incorrect Hero function
function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="glass-effect bg-neutralGlass-500 p-6 md:p-10 rounded-xl"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <img // Standard img, parent motion.div handles animation
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-primary-100/50"
            />
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            Hi, I'm Alex Chroma - Passionate Web Developer & Creative Thinker 👋
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg sm:text-xl md:text-2xl text-gray-200 dark:text-gray-200 mb-6">
            I build modern, responsive, and user-friendly web applications. 
            Currently seeking opportunities to leverage my skills in frontend frameworks and UI/UX design to create impactful digital experiences.
          </motion.p>
          <motion.p variants={itemVariants} className="text-base sm:text-lg text-gray-300 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            With a keen eye for detail and a drive for excellence, I transform ideas into elegant and efficient code, 
            focusing on performance and maintainability.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="projects" // Changed target to projects for "View My Work"
              smooth={true}
              className="gradient-bg text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity" 
            >
              View My Work
            </Link>
            <Link
              to="contact"  // Changed target to contact for "Get In Touch"
              smooth={true}
              className="bg-white/10 backdrop-blur-md text-white px-8 py-3 rounded-full font-medium border border-white/30 hover:bg-white/20 transition-colors" 
            >
              Get In Touch
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}