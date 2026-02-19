import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 bg-gradient-to-br from-white via-cyan-50 to-blue-50">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-4xl"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 bg-clip-text text-transparent"
        >
          Empower Your Business with{' '}
          <span className="bg-gray-900 text-white px-4 py-4 rounded-lg">
            Smart Software
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl text-gray-700 mb-8 leading-relaxed"
        >
          Transeffex Ltd provides cutting-edge business software solutions including
          inventory management, payment processing, and AI-powered algorithms to
          transform your operations.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex gap-4 justify-center flex-wrap"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="gradient-primary text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-2 group glow-bright"
          >
            Start Free Trial
            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-cyan-500 text-cyan-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-cyan-50 transition-colors"
          >
            Watch Demo
          </motion.button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <motion.p
            className="text-lg text-slate-600 max-w-2xl mx-auto"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            ✨ Trusted by businesses across Africa
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}
