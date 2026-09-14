import React from 'react';
import { motion } from 'framer-motion';

export default function CoffeeParticles() {
  const particles = [
    { id: 1, x: '20%', y: '30%', size: 3, delay: 0, duration: 8, color: 'bg-leaf-400/40' },
    { id: 2, x: '75%', y: '25%', size: 4, delay: 1.5, duration: 9, color: 'bg-emerald-400/30' },
    { id: 3, x: '45%', y: '65%', size: 2.5, delay: 0.7, duration: 7.5, color: 'bg-cream-200/35' },
    { id: 4, x: '85%', y: '70%', size: 3.5, delay: 2.2, duration: 8.5, color: 'bg-caramel-300/40' },
  ];

  return (
    <div className="hidden sm:block absolute inset-0 pointer-events-none overflow-hidden z-10">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className={`absolute rounded-full transform-gpu ${p.color}`}
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [-10, -30, -10],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
}
