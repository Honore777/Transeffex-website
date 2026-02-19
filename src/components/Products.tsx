import { motion } from 'framer-motion';
import { BarChart3, CreditCard, Brain } from 'lucide-react';

export default function Products() {
  const products = [
    {
      icon: BarChart3,
      title: 'Inventory Management',
      description: 'Real-time inventory tracking and optimization. Monitor stock levels, automate reordering, and reduce waste with AI-powered forecasting.',
      color: 'from-cyan-500 to-cyan-600',
      glow: 'glow-bright',
    },
    {
      icon: CreditCard,
      title: 'Payment Management',
      description: 'Secure, seamless payment processing. Support multiple payment methods, instant reconciliation, and fraud detection for peace of mind.',
      color: 'from-blue-600 to-blue-700',
      glow: 'glow-blue',
    },
    {
      icon: Brain,
      title: 'AI & Algorithms',
      description: 'Machine learning integration for predictive analytics. Optimize operations, identify trends, and make data-driven decisions faster.',
      color: 'from-cyan-600 to-cyan-700',
      glow: 'glow-cyan',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="products" className="py-20 px-6 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-4">
            Our Products
          </h2>
          <p className="text-xl text-gray-700">
            Enterprise-grade solutions designed for modern businesses
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                className={`card-hover glass-light rounded-2xl p-8 border border-cyan-300 ${product.glow}`}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-6 ${product.glow}`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {product.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {product.description}
                </p>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="mt-6 text-cyan-600 font-semibold flex items-center gap-2 hover:text-cyan-700 transition-colors"
                >
                  Learn More →
                </motion.button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
