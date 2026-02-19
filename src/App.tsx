import { motion } from 'framer-motion';
import { Heart, Zap, Brain, BarChart3, Shield, Smartphone } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Features from './components/Features';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Products />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}
