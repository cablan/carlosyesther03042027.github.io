import React from 'react';
import { Camera, QrCode } from 'lucide-react';

export default function Gallery() {
  return (
    <section id="galeria" className="py-24 bg-secondary relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <Camera size={32} className="text-primary" strokeWidth={1.5} />
              <h2 className="text-4xl md:text-5xl font-serif text-text">Captura el Momento</h2>
            </div>
            <div className="w-24 h-[1px] bg-accent mb-8"></div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Queremos ver nuestra boda a través de vuestros ojos. Cada sonrisa, cada baile y cada momento especial que capturéis con vuestros móviles es un tesoro para nosotros.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Durante el banquete, encontraréis códigos QR en las mesas. Solo tendréis que escanearlos para subir vuestras fotos y vídeos directamente a nuestra galería colaborativa.
            </p>
            <div className="inline-flex items-center px-6 py-3 bg-white border border-gray-200 rounded-full shadow-sm text-primary font-medium">
              <QrCode size={20} className="mr-3" />
              ¡Buscad el QR en vuestra mesa!
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              {/* 
                ¡Hola! Como no puedo alojar directamente las fotos que subes al chat, 
                he puesto estas fotos de ejemplo. 
                
                Para poner VUESTRAS fotos:
                1. Abre la carpeta "public" en el explorador de archivos de la izquierda.
                2. Arrastra y suelta ahí vuestras 4 fotos (ej. foto1.jpg, foto2.jpg...).
                3. Cambia los enlaces de abajo (src="...") por el nombre de vuestras fotos (ej. src="/foto1.jpg").
              */}
              <img
                src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80"
                alt="Esther y Carlos sonriendo"
                className="w-full h-64 object-cover rounded-2xl shadow-md"
                referrerPolicy="no-referrer"
              />
              <img
                src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80"
                alt="Esther y Carlos en el mar"
                className="w-full h-48 object-cover rounded-2xl shadow-md"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-4 pt-12">
              <img
                src="https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80"
                alt="Esther y Carlos en la ciudad"
                className="w-full h-48 object-cover rounded-2xl shadow-md"
                referrerPolicy="no-referrer"
              />
              <img
                src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80"
                alt="Esther y Carlos elegantes"
                className="w-full h-64 object-cover rounded-2xl shadow-md"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
