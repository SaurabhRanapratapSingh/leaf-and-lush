import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sprout, Sparkles, Heart } from 'lucide-react';
import Story3DStage from '../components/3d/Story3DStage';
import StorySection from '../components/StorySection';
import BrewMoment from '../components/BrewMoment';
import ExperienceSection from '../components/ExperienceSection';
import Testimonials from '../components/Testimonials';

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-16 sm:pt-24 bg-coffee-950 text-cream-100 relative overflow-hidden">
      
      {/* Unique 3D Experience: "Where coffee meets freshness." */}
      <section className="py-4 sm:py-8 px-3 sm:px-6">
        <Story3DStage />
      </section>

      {/* Editorial Story Section */}
      <StorySection />

      {/* Extraction & Sourcing Philosophy Metrics */}
      <BrewMoment />

      {/* Café Ambiance & Architecture */}
      <ExperienceSection />

      {/* Customer Testimonials */}
      <Testimonials />

      {/* Bottom Call to Action */}
      <section className="py-10 sm:py-16 bg-gradient-to-b from-coffee-900 to-coffee-950 text-center border-t border-coffee-800/80">
        <div className="max-w-md mx-auto px-4">
          <div className="w-10 h-10 rounded-full bg-leaf-500/20 border border-leaf-500/30 flex items-center justify-center mx-auto mb-2 text-leaf-400">
            <Sparkles className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-xl sm:text-3xl font-bold text-cream-50 mb-2">
            Experience it yourself.
          </h3>
          <p className="text-xs text-cream-300 mb-4 leading-relaxed font-light">
            Order fresh single-origin coffee or crisp fruit bowls directly via WhatsApp.
          </p>
          <Link
            to="/menu"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto py-3.5 px-8 rounded-full bg-gradient-to-r from-caramel-500 via-caramel-400 to-leaf-500 text-coffee-950 font-bold text-sm sm:text-base shadow-glow hover:shadow-glow-leaf transition-all active:scale-95"
          >
            <span>ORDER NOW ☕</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </main>
  );
}
