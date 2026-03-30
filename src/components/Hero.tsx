import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('April 3, 2027 12:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* REEMPLAZAR CON TU FOTO: Sube tu foto a la carpeta public y cambia el src a "/tu-foto.jpg" */}
        <img
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80"
          alt="Esther y Carlos"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h2 className="text-sm md:text-lg tracking-[0.3em] uppercase mb-4 font-light">Nos Casamos</h2>
          <h1 className="text-6xl md:text-8xl lg:text-9xl mb-6 font-serif font-medium drop-shadow-lg">
            Esther & Carlos
          </h1>
          <p className="text-xl md:text-2xl font-light tracking-widest mb-12">
            3 DE ABRIL DE 2027 <span className="mx-2">|</span> TOLEDO
          </p>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex justify-center gap-4 md:gap-8"
        >
          {[
            { label: 'Días', value: timeLeft.days },
            { label: 'Horas', value: timeLeft.hours },
            { label: 'Minutos', value: timeLeft.minutes },
            { label: 'Segundos', value: timeLeft.seconds },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-3xl md:text-5xl font-serif mb-2">{item.value.toString().padStart(2, '0')}</span>
              <span className="text-xs md:text-sm tracking-widest uppercase font-light">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
