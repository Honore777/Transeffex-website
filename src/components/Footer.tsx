import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-b from-gray-900 to-black text-white py-12 px-6 border-t border-cyan-400/40"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.jpeg" alt="Transeffex" className="w-8 h-8 rounded" />
              <span className="text-xl font-bold">Transeffex</span>
            </div>
            <p className="text-gray-400 mb-4">
              Revolutionizing business operations with intelligent software solutions.
            </p>
            <div className="flex gap-3">
              {[Github, Linkedin, Twitter].map((Icon, i) => (
                <motion.a
                  key={i}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  href="#"
                  className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center glow-teal hover:opacity-80 transition-opacity"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-lg mb-4">Products</h4>
            <ul className="space-y-2 text-gray-400">
              {['Inventory Management', 'Payment Processing', 'AI Integration'].map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 5, color: '#0F766E' }}
                  className="cursor-pointer transition-colors hover:text-teal-400"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              {['About Us', 'Blog', 'Careers', 'Contact'].map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 5, color: '#0F766E' }}
                  className="cursor-pointer transition-colors hover:text-teal-400"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center gap-2 hover:text-emerald-400 cursor-pointer">
                <Mail className="w-5 h-5" />
                <span>info@transeffex.com</span>
              </div>
              <div className="flex items-center gap-2 hover:text-emerald-400 cursor-pointer">
                <Phone className="w-5 h-5" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start gap-2 hover:text-emerald-400 cursor-pointer">
                <MapPin className="w-5 h-5 mt-1" />
                <span>123 Tech Street, San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
          className="border-t border-cyan-400/40 origin-left"
        />

        <div className="mt-8 pt-8 text-center text-gray-400 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2026 Transeffex Ltd. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <motion.a
                key={item}
                whileHover={{ color: '#06B6D4' }}
                href="#"
                className="transition-colors hover:text-cyan-400"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
