import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface EnvelopeProps {
  onOpen: () => void;
}

export default function Envelope({ onOpen }: EnvelopeProps) {
  const [isPeeling, setIsPeeling] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isZooming, setIsZooming] = useState(false);

  const handleSealClick = () => {
    if (isPeeling || isOpen) return;
    setIsPeeling(true);
    
    // Sequence:
    // 1. Seal peels off (0.6s)
    setTimeout(() => {
      setIsOpen(true); // Flap opens and seal fades
      
      // 2. Zoom in and fade out (1.2s)
      setTimeout(() => {
        setIsZooming(true);
        setTimeout(() => {
          onOpen();
        }, 1000); // Wait for zoom/fade to finish
      }, 1000); // Wait for flap to open
    }, 600); // Wait for peel animation
  };

  // SVG Noise filter for realistic rough paper texture
  const paperTexture = "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.06'/%3E%3C/svg%3E\")";

  return (
    <AnimatePresence>
      {!isZooming && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden perspective-[2000px]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 3 }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Rustic Wood Background */}
          <div 
            className="absolute inset-0 bg-[#5c4a3d]"
            style={{ 
              backgroundImage: 'url("https://images.unsplash.com/photo-1550684376-efcbd6e3f031?q=80&w=2000&auto=format&fit=crop")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(0.8) contrast(1.1)'
            }}
          />

          {/* Import Script Font */}
          <style>
            {`@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');`}
          </style>

          {/* Envelope Container - Realistic Proportions */}
          <div 
            className="relative w-[90vw] max-w-4xl aspect-[1.58] shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-sm" 
          >
            {/* Background / Inside of envelope */}
            <div 
              className="absolute inset-0 bg-[#e8e4d9] rounded-sm overflow-hidden"
              style={{ backgroundImage: paperTexture }}
            >
              {/* Inner shadow for depth */}
              <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.2)]" />
              
              {/* Inside letter peek */}
              <div className="absolute bottom-0 left-[5%] right-[5%] md:left-[10%] md:right-[10%] h-[95%] bg-[#fffdf8] rounded-t-sm shadow-[0_-5px_20px_rgba(0,0,0,0.15)] flex flex-col items-center pt-16 px-8" style={{ backgroundImage: paperTexture }}>
                <div className="w-16 h-[1px] bg-[#6b8e76] mb-6 opacity-50"></div>
                <h2 className="text-3xl md:text-5xl font-serif text-gray-800 mb-4 tracking-wide" style={{ fontFamily: "'Great Vibes', cursive" }}>Esther & Carlos</h2>
                <p className="text-gray-500 font-serif italic text-lg">03 . 04 . 2027</p>
              </div>
            </div>

            {/* Left Flap */}
            <div className="absolute inset-0 z-10" style={{ filter: 'drop-shadow(2px 0 8px rgba(0,0,0,0.08))' }}>
              <div 
                className="w-full h-full bg-[#f0ece1] rounded-l-sm" 
                style={{ clipPath: 'polygon(0 0, 52% 50%, 0 100%)', backgroundImage: paperTexture }} 
              />
            </div>

            {/* Right Flap */}
            <div className="absolute inset-0 z-10" style={{ filter: 'drop-shadow(-2px 0 8px rgba(0,0,0,0.08))' }}>
              <div 
                className="w-full h-full bg-[#f0ece1] rounded-r-sm" 
                style={{ clipPath: 'polygon(100% 0, 48% 50%, 100% 100%)', backgroundImage: paperTexture }} 
              />
            </div>

            {/* Bottom Flap */}
            <div className="absolute inset-0 z-20" style={{ filter: 'drop-shadow(0 -4px 12px rgba(0,0,0,0.1))' }}>
              <div 
                className="w-full h-full bg-[#f4f1ea] rounded-b-sm" 
                style={{ clipPath: 'polygon(0 100%, 50% 48%, 100% 100%)', backgroundImage: paperTexture }} 
              />
            </div>

            {/* Top Flap (Animated) */}
            <motion.div
              className="absolute inset-0 z-30 origin-top"
              style={{ filter: isOpen ? 'none' : 'drop-shadow(0 4px 15px rgba(0,0,0,0.15))' }}
              initial={{ rotateX: 0 }}
              animate={{ rotateX: isOpen ? 180 : 0 }}
              transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
            >
              <div 
                className="w-full h-full bg-[#f8f5ee] rounded-t-sm" 
                style={{ clipPath: 'polygon(0 0, 50% 52%, 100% 0)', backgroundImage: paperTexture }} 
              >
                {/* Subtle edge highlight */}
                <div className="absolute bottom-[48%] left-0 w-full h-[1px] bg-white/50" />
              </div>
            </motion.div>

            {/* Wax Seal */}
            <AnimatePresence>
              {!isOpen && (
                <motion.div
                  className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 w-28 h-28 sm:w-36 sm:h-36 flex items-center justify-center cursor-pointer"
                  onClick={handleSealClick}
                  initial={{ scale: 1, opacity: 1, rotate: 0 }}
                  animate={
                    isPeeling 
                      ? { 
                          scale: 1.1, 
                          x: 15, 
                          y: 15, 
                          rotate: 12, 
                          filter: 'drop-shadow(-10px -10px 15px rgba(0,0,0,0.3))' 
                        } 
                      : { 
                          scale: 1, 
                          x: 0,
                          y: 0, 
                          rotate: 0,
                          filter: 'drop-shadow(0px 6px 8px rgba(0,0,0,0.3))'
                        }
                  }
                  exit={{ scale: 1.3, opacity: 0, filter: 'blur(5px)' }}
                  transition={
                    isPeeling 
                      ? { duration: 0.6, ease: "easeInOut" } 
                      : { duration: 0.4 }
                  }
                >
                  {/* Wax Seal Base */}
                  <div 
                    className="absolute inset-0 shadow-[inset_0_3px_8px_rgba(255,255,255,0.3),inset_0_-3px_8px_rgba(0,0,0,0.4)]"
                    style={{
                      background: '#6b8e76',
                      borderRadius: '48% 52% 50% 50% / 51% 49% 51% 49%', // Organic shape
                    }}
                  />
                  
                  {/* Inner Seal Ring (Stamped effect) */}
                  <div 
                    className="relative w-[85%] h-[85%] flex items-center justify-center rounded-full shadow-[inset_0_2px_5px_rgba(0,0,0,0.3),0_1px_2px_rgba(255,255,255,0.2)]"
                    style={{ background: '#63846d' }}
                  >
                    {/* Wreath SVG */}
                    <svg viewBox="0 0 120 120" className="absolute inset-0 w-full h-full opacity-80">
                      <defs>
                        <filter id="emboss-wreath">
                          <feDropShadow dx="0.5" dy="0.5" stdDeviation="0.5" floodColor="#ffffff" floodOpacity="0.2"/>
                          <feDropShadow dx="-0.5" dy="-0.5" stdDeviation="0.5" floodColor="#000000" floodOpacity="0.4"/>
                        </filter>
                      </defs>
                      <g filter="url(#emboss-wreath)" fill="none" stroke="#5a7863" strokeWidth="1.5" strokeLinecap="round">
                        {/* Outer Ring */}
                        <circle cx="60" cy="60" r="52" strokeWidth="1" />
                        <circle cx="60" cy="60" r="48" strokeWidth="0.5" />
                        
                        {/* Left branch */}
                        <path d="M 60 105 C 15 105 15 40 40 20" />
                        {/* Right branch */}
                        <path d="M 60 105 C 105 105 105 40 80 20" />
                        
                        {/* Leaves left */}
                        <path d="M 45 100 Q 35 95 40 90 Q 48 92 45 100" fill="#5a7863"/>
                        <path d="M 32 85 Q 22 80 27 75 Q 35 77 32 85" fill="#5a7863"/>
                        <path d="M 22 65 Q 12 60 17 55 Q 25 57 22 65" fill="#5a7863"/>
                        <path d="M 21 45 Q 11 40 16 35 Q 24 37 21 45" fill="#5a7863"/>
                        <path d="M 30 28 Q 25 20 32 18 Q 36 24 30 28" fill="#5a7863"/>
                        
                        {/* Leaves right */}
                        <path d="M 75 100 Q 85 95 80 90 Q 72 92 75 100" fill="#5a7863"/>
                        <path d="M 88 85 Q 98 80 93 75 Q 85 77 88 85" fill="#5a7863"/>
                        <path d="M 98 65 Q 108 60 103 55 Q 95 57 98 65" fill="#5a7863"/>
                        <path d="M 99 45 Q 109 40 104 35 Q 96 37 99 45" fill="#5a7863"/>
                        <path d="M 90 28 Q 95 20 88 18 Q 84 24 90 28" fill="#5a7863"/>
                      </g>
                    </svg>

                    {/* Stamped Text */}
                    <span 
                      className="text-[#5a7863] text-4xl sm:text-5xl pr-1 pb-1"
                      style={{ 
                        fontFamily: "'Great Vibes', cursive",
                        textShadow: '1px 1px 1px rgba(255,255,255,0.2), -1px -1px 2px rgba(0,0,0,0.5)'
                      }}
                    >
                      E&C
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
