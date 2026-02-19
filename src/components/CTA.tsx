import { motion } from 'framer-motion';
import { Phone, MapPin } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto relative"
      >
        <div className="absolute -inset-20 gradient-bright-cyan blur-3xl opacity-30 rounded-full"></div>
        <div className="relative z-10 gradient-dark-bright rounded-3xl p-12 md:p-16 text-white">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Contact Us
            </h2>
            <p className="text-lg opacity-95 leading-relaxed">
              Get in touch with our team. We're here to help your business succeed.
            </p>
          </div>

          {/* Contact Information */}
          <motion.div
            className="flex gap-8 justify-center flex-wrap mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {/* Phone */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center gap-3 bg-white/15 backdrop-blur-sm rounded-2xl p-6 border border-white/25"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center"
              >
                <Phone className="w-6 h-6 text-white" />
              </motion.div>
              <h3 className="text-lg font-bold">Phone</h3>
              <p className="text-sm opacity-90">+250 781 290 496</p>
            </motion.div>

            {/* Location */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center gap-3 bg-white/15 backdrop-blur-sm rounded-2xl p-6 border border-white/25"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center"
              >
                <MapPin className="w-6 h-6 text-white" />
              </motion.div>
              <h3 className="text-lg font-bold">Location</h3>
              <p className="text-sm opacity-90 text-center">
                Kigali City<br />
                Kinyinya Sector, Rwanda
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
