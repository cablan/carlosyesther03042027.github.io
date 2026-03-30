import React from 'react';
import { Gift, Shirt, Heart } from 'lucide-react';

export default function ExtraInfo() {
  return (
    <section id="info-extra" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-text mb-4">Información Extra</h2>
          <div className="w-24 h-[1px] bg-accent mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          {/* Dress Code */}
          <div className="flex flex-col items-center text-center p-8 bg-white rounded-3xl shadow-sm border border-gray-100">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
              <Shirt size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-serif text-text mb-4">Código de Vestimenta</h3>
            <p className="text-gray-600 mb-4 text-lg">
              <strong>Formal / Elegante</strong>
            </p>
            <p className="text-gray-600 leading-relaxed max-w-sm">
              Queremos que os sintáis guapísimos y cómodos. Para los hombres, traje oscuro. Para las mujeres, vestido largo o de cóctel elegante. ¡Y muchas ganas de bailar!
            </p>
          </div>

          {/* Gifts */}
          <div className="flex flex-col items-center text-center p-8 bg-white rounded-3xl shadow-sm border border-gray-100">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
              <Gift size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-serif text-text mb-4">Regalos</h3>
            <p className="text-gray-600 leading-relaxed max-w-sm mb-6">
              Vuestra presencia es el mejor regalo que nos podéis hacer. Si además deseáis tener un detalle con nosotros para ayudarnos a construir nuestro futuro y nuestra luna de miel, podéis hacerlo en la siguiente cuenta:
            </p>
            <div className="bg-secondary/50 px-6 py-4 rounded-xl border border-gray-200 w-full max-w-sm">
              <p className="font-mono text-sm text-gray-800 tracking-wider mb-2">ES12 3456 7890 1234 5678 9012</p>
              <p className="text-xs text-gray-500 uppercase tracking-widest">Titulares: Esther y Carlos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
