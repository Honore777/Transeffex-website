import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full top-0 z-50 glass-light border-b border-cyan-300"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3"
        >
          <img src="/logo.jpeg" alt="Transeffex" className="w-10 h-10 rounded-lg" />
          <span className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
            Transeffex
          </span>
        </motion.div>
        
        <div className="hidden md:flex gap-8">
          {['Products', 'Features', 'About', 'Contact'].map((item) => (
            <motion.a 
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ color: '#0891B2' }}
              className="text-gray-700 font-medium transition-colors hover:text-cyan-600"
            >
              {item}
            </motion.a>
          ))}
        </div>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="gradient-primary text-white px-6 py-2 rounded-lg font-semibold glow-bright"
        >
          Get Started
        </motion.button>
      </div>
    </motion.nav>
  );
}
