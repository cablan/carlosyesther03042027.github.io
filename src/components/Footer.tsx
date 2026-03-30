import React from 'react';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-text text-white py-12 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif mb-6 tracking-widest">E & C</h2>
        <div className="flex justify-center items-center space-x-2 text-gray-400 mb-8">
          <span>Hecho con</span>
          <Heart size={16} className="text-accent fill-accent" />
          <span>para nuestro gran día</span>
        </div>
        <p className="text-sm text-gray-500 uppercase tracking-widest">
          3 de Abril de 2027 | Toledo, España
        </p>
      </div>
    </footer>
  );
}
