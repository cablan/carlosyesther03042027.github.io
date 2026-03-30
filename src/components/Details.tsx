import React from 'react';
import { MapPin, Clock } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons in leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const churchIconHtml = `<div style="color: #4a5d4e; background: white; padding: 6px; border-radius: 50%; border: 2px solid #4a5d4e; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 4px rgba(0,0,0,0.2);"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 7 4 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9l4-2"/><path d="M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4"/><path d="M18 22V5l-6-3-6 3v17"/><path d="M12 7v5"/><path d="M10 9h4"/></svg></div>`;
const confettiIconHtml = `<div style="color: #b5a397; background: white; padding: 6px; border-radius: 50%; border: 2px solid #b5a397; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 4px rgba(0,0,0,0.2);"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5.8 11.3 2 22l10.7-3.79"/><path d="M4 3h.01"/><path d="M22 8h.01"/><path d="M15 2h.01"/><path d="M22 20h.01"/><path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12v0c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"/><path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11v0c-.11.7-.72 1.22-1.43 1.22H17"/><path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98v0C9.52 4.91 9 5.52 9 6.23V7"/><path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"/></svg></div>`;

const churchIcon = L.divIcon({
  html: churchIconHtml,
  className: '',
  iconSize: [36, 36],
  iconAnchor: [18, 18],
  popupAnchor: [0, -18],
});

const confettiIcon = L.divIcon({
  html: confettiIconHtml,
  className: '',
  iconSize: [36, 36],
  iconAnchor: [18, 18],
  popupAnchor: [0, -18],
});

export default function Details() {
  const centerPosition: [number, number] = [39.852, -4.039];
  const churchPosition: [number, number] = [39.8581, -4.0314];
  const banquetPosition: [number, number] = [39.8465, -4.0469];

  return (
    <section id="detalles" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-text mb-4">Dónde y Cuándo</h2>
          <div className="w-24 h-[1px] bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          {/* Ceremony */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
              <Clock size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-serif text-text mb-2">La Ceremonia</h3>
            <p className="text-lg font-medium text-text mb-4">Iglesia de San Juan de los Reyes</p>
            <p className="text-gray-600 mb-6 max-w-sm">
              Nos daremos el "sí, quiero" en uno de los lugares más mágicos e históricos de Toledo.
            </p>
            <div className="flex items-center text-gray-500 mb-2">
              <Clock size={18} className="mr-2" />
              <span>12:00 PM</span>
            </div>
            <div className="flex items-center text-gray-500">
              <MapPin size={18} className="mr-2" />
              <span>C. de los Reyes Católicos, 17, 45002 Toledo</span>
            </div>
          </div>

          {/* Banquet */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
              <MapPin size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-serif text-text mb-2">El Banquete</h3>
            <p className="text-lg font-medium text-text mb-4">Cigarral de las Mercedes</p>
            <p className="text-gray-600 mb-6 max-w-sm">
              Tras la ceremonia, celebraremos juntos con unas vistas espectaculares de la ciudad imperial.
            </p>
            <div className="flex items-center text-gray-500 mb-2">
              <Clock size={18} className="mr-2" />
              <span>14:00 PM</span>
            </div>
            <div className="flex items-center text-gray-500">
              <MapPin size={18} className="mr-2" />
              <span>Ctra. Piedrabuena, 72, 45004 Toledo</span>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-20 w-full h-[400px] rounded-2xl overflow-hidden shadow-lg border border-gray-200 z-0 relative">
          <MapContainer center={centerPosition} zoom={13} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={churchPosition} icon={churchIcon}>
              <Popup>
                <div className="text-center">
                  <strong className="font-serif text-primary">La Ceremonia</strong><br/>
                  Iglesia de San Juan de los Reyes
                </div>
              </Popup>
            </Marker>
            <Marker position={banquetPosition} icon={confettiIcon}>
              <Popup>
                <div className="text-center">
                  <strong className="font-serif text-accent">El Banquete</strong><br/>
                  Cigarral de las Mercedes
                </div>
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </section>
  );
}
