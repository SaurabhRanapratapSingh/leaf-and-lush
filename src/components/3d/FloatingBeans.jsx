import React from 'react';
import { motion } from 'framer-motion';

function CoffeeBean({ size = 26, rotation = 0, opacity = 1 }) {
  return (
    <svg
      width={size}
      height={size * 1.35}
      viewBox="0 0 30 42"
      fill="none"
      className="drop-shadow-xl select-none"
      style={{ transform: `rotate(${rotation}deg)`, opacity }}
    >
      <defs>
        <radialGradient id={`beanGrad-${size}-${rotation}`} cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#6F4030" />
          <stop offset="55%" stopColor="#2A1712" />
          <stop offset="100%" stopColor="#0C0704" />
        </radialGradient>
      </defs>
      {/* Bean Outer Body */}
      <path
        d="M15 2 C24 2 28 10 28 21 C28 32 24 40 15 40 C6 40 2 32 2 21 C2 10 6 2 15 2 Z"
        fill={`url(#beanGrad-${size}-${rotation})`}
        stroke="#8A533C"
        strokeWidth="1.2"
      />
      {/* S-Curved Center Crease */}
      <path
        d="M15 5 Q11 15 17 21 Q21 28 15 37"
        stroke="#0C0704"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      {/* Specular Crease Highlight */}
      <path
        d="M15.5 6 Q12 15.5 17.5 21 Q21 27.5 15.5 36"
        stroke="#B97845"
        strokeWidth="0.85"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}

export default function FloatingBeans({ mousePosition = { x: 0, y: 0 }, layer = 'all' }) {
  const beans = [
    // Background beans (lower z-index, slightly blurred)
    { id: 1, top: "14%", left: "6%", size: 30, rot: 28, delay: 0, speed: 7.5, depth: 14, blur: "blur-[0.5px]", zIndex: 5, layer: 'back' },
    { id: 2, top: "28%", right: "10%", size: 26, rot: -38, delay: 1.2, speed: 8.8, depth: -18, blur: "blur-[0.8px]", zIndex: 5, layer: 'back' },
    // Foreground beans (crisp, in front of the cup)
    { id: 3, top: "72%", left: "8%", size: 34, rot: 55, delay: 0.6, speed: 7, depth: 22, blur: "filter-none", zIndex: 35, layer: 'front' },
    { id: 4, top: "82%", right: "6%", size: 36, rot: -18, delay: 2.1, speed: 9.2, depth: -25, blur: "filter-none", zIndex: 35, layer: 'front' },
    { id: 5, top: "48%", left: "14%", size: 22, rot: 80, delay: 1.5, speed: 6.2, depth: 12, blur: "filter-none", zIndex: 35, layer: 'front' },
  ];

  const filteredBeans = layer === 'all' ? beans : beans.filter(b => b.layer === layer);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {filteredBeans.map(bean => (
        <motion.div
          key={bean.id}
          className={`absolute ${bean.blur}`}
          style={{
            top: bean.top,
            left: bean.left,
            right: bean.right,
            zIndex: bean.zIndex,
          }}
          animate={{
            y: [0, -16, 0],
            rotate: [bean.rot, bean.rot + 10, bean.rot],
            x: mousePosition.x * bean.depth,
          }}
          transition={{
            y: {
              duration: bean.speed,
              repeat: Infinity,
              ease: "easeInOut",
              delay: bean.delay,
            },
            rotate: {
              duration: bean.speed * 1.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: bean.delay,
            },
            x: {
              type: "spring",
              damping: 28,
              stiffness: 85,
            }
          }}
        >
          <CoffeeBean size={bean.size} rotation={bean.rot} />
        </motion.div>
      ))}
    </div>
  );
}
