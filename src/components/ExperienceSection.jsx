import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, Sparkles, Heart } from 'lucide-react';
import { cafeConfig } from '../config/cafe';

export default function ExperienceSection() {
  const [isDesktop, setIsDesktop] = React.useState(false);
  React.useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 768);
    check();
    window.addEventListener('resize', check, { passive: true });
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <section className="py-8 sm:py-16 bg-coffee-950/90 relative overflow-hidden border-t border-coffee-800/50">
      
      {/* Soft Ambient Warm Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] sm:w-[500px] h-[260px] sm:h-[500px] bg-caramel-500/10 rounded-full blur-xl sm:blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-center">
          
          {/* Left Column: One Beautiful Cinematic Café Photo */}
          <motion.div
            initial={{ opacity: 0, x: isDesktop ? -16 : 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: isDesktop ? 0.5 : 0.3 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-caramel-500/25 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80"
                srcSet="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=640&q=80 640w, https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80 1200w"
                sizes="(max-width: 768px) 100vw, 600px"
                alt="Leaf & Lush Café Atmosphere"
                className="w-full h-64 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-950/90 via-coffee-950/20 to-transparent pointer-events-none" />
              
              {/* Corner Badge */}
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 glass-card px-3 py-1.5 rounded-xl flex items-center gap-1.5 text-xs text-cream-100 border border-leaf-500/30">
                <Sprout className="w-3.5 h-3.5 text-leaf-400" />
                <span className="font-serif font-bold">The Reading Sanctuary</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Atmospheric Description */}
          <motion.div
            initial={{ opacity: 0, x: isDesktop ? 16 : 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: isDesktop ? 0.5 : 0.3, delay: isDesktop ? 0.1 : 0 }}
            className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-coffee-900 border border-leaf-500/30 text-leaf-400 text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-3 h-3 text-leaf-400" />
              <span>Café Atmosphere</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-cream-50 leading-tight mb-3">
              A little escape in every cup.
            </h2>

            <p className="text-xs sm:text-base text-cream-200/90 font-light leading-relaxed mb-5 max-w-lg">
              Warm lights, fresh brews, good conversations and a little space to slow down. Leaf & Lush is made for easy mornings, relaxed evenings and everything in between.
            </p>

            <div className="grid grid-cols-2 gap-3 w-full max-w-md pt-2 border-t border-coffee-800">
              <div className="text-left">
                <span className="text-[10px] uppercase font-bold text-leaf-400 tracking-wider">Aroma & Ambiance</span>
                <p className="text-xs text-cream-200 mt-0.5">Vinyl acoustics, lush greenery & freshly ground Chikmagalur roast.</p>
              </div>
              <div className="text-left">
                <span className="text-[10px] uppercase font-bold text-caramel-400 tracking-wider">Wholesome Living</span>
                <p className="text-xs text-cream-200 mt-0.5">Hand-cut seasonal fruits & signature fruit chaats made fresh to order.</p>
              </div>
            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}
