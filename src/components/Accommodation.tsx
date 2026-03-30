import React from 'react';
import { Bed, ExternalLink } from 'lucide-react';

export default function Accommodation() {
  const hotels = [
    { 
      name: 'Hotel San Juan de los Reyes', 
      desc: 'A pocos pasos de la ceremonia, ideal para la máxima comodidad.',
      link: 'https://www.booking.com/searchresults.es.html?ss=Hotel+San+Juan+de+los+Reyes+Toledo'
    },
    { 
      name: 'Hotel Pintor El Greco Toledo', 
      desc: 'Elegancia clásica en el corazón del barrio judío.',
      link: 'https://www.booking.com/searchresults.es.html?ss=Hotel+Pintor+El+Greco+Toledo'
    },
    { 
      name: 'Hotel Casa del Armiño', 
      desc: 'Mansión histórica de la familia del Greco, una experiencia única.',
      link: 'https://www.booking.com/searchresults.es.html?ss=Hotel+Casa+del+Armiño+Toledo'
    },
    { 
      name: 'Grecorooms', 
      desc: 'Alojamiento boutique moderno y acogedor en el centro.',
      link: 'https://www.booking.com/searchresults.es.html?ss=Grecorooms+Toledo'
    },
    { 
      name: 'El Secreto del Ángel', 
      desc: 'Encanto toledano con vistas y un ambiente romántico.',
      link: 'https://www.booking.com/searchresults.es.html?ss=El+Secreto+del+Ángel+Toledo'
    },
    { 
      name: 'YIT Puerta Bisagra', 
      desc: 'Excelente ubicación junto a una de las entradas principales de la ciudad.',
      link: 'https://www.booking.com/searchresults.es.html?ss=YIT+Puerta+Bisagra+Toledo'
    },
  ];

  return (
    <section id="alojamiento" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-text mb-4">Alojamiento</h2>
          <div className="w-24 h-[1px] bg-accent mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Para facilitar vuestra estancia en Toledo, hemos seleccionado algunos de nuestros hoteles favoritos. Os recomendamos reservar con antelación.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotels.map((hotel, index) => (
            <div key={index} className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow bg-secondary/30 flex flex-col h-full">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6 text-accent">
                <Bed size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-serif text-text mb-3">{hotel.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-grow">{hotel.desc}</p>
              <a 
                href={hotel.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center text-sm font-medium text-primary hover:text-primary-light transition-colors"
              >
                Ver en Booking <ExternalLink size={16} className="ml-2" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
