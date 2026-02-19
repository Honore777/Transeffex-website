import { motion } from 'framer-motion';
import { Shield, Zap, Cloud, Lock, BarChart3, Users } from 'lucide-react';

export default function Features() {
  const features = [
    { icon: Shield, title: 'Enterprise Security', description: 'Bank-level encryption and compliance' },
    { icon: Zap, title: 'Lightning Fast', description: 'Optimized performance for high-volume operations' },
    { icon: Cloud, title: 'Cloud Native', description: 'Scalable infrastructure that grows with you' },
    { icon: Lock, title: 'Data Privacy', description: 'GDPR compliant with advanced privacy controls' },
    { icon: BarChart3, title: 'Advanced Analytics', description: 'Real-time insights and comprehensive reporting' },
    { icon: Users, title: '24/7 Support', description: 'Dedicated team ready to help anytime' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section id="features" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent mb-4">
            Why Choose Transeffex
          </h2>
          <p className="text-xl text-gray-700">
            Powerful features built for business efficiency
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={featureVariants}
                whileHover={{ scale: 1.05 }}
                className="glass-light rounded-xl p-6 border border-cyan-300 glow-bright"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4"
                >
                  <Icon className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-700">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
