import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { motion } from 'motion/react';

export default function RSVP() {
  const [formData, setFormData] = useState({
    name: '',
    attending: 'yes',
    hasCompanion: 'no',
    companionName: '',
    dietary: '',
    transport: 'no',
    song: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert('¡Gracias por confirmar tu asistencia! Hemos recibido tus datos.');
    setFormData({
      name: '',
      attending: 'yes',
      hasCompanion: 'no',
      companionName: '',
      dietary: '',
      transport: 'no',
      song: '',
    });
  };

  return (
    <section id="asistencia" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-text mb-4">Confirmar Asistencia</h2>
          <div className="w-24 h-[1px] bg-accent mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg">
            Por favor, confírmanos tu asistencia antes del 1 de marzo de 2027 para que podamos organizar todo a la perfección.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-secondary/50 p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-text mb-2">Nombre y Apellidos</label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Ej. María García"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text mb-3">¿Podrás acompañarnos?</label>
              <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-3 sm:space-y-0">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="attending"
                    value="yes"
                    checked={formData.attending === 'yes'}
                    onChange={(e) => setFormData({ ...formData, attending: e.target.value })}
                    className="w-5 h-5 text-primary focus:ring-primary border-gray-300"
                  />
                  <span className="ml-3 text-gray-700">¡Allí estaré!</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="attending"
                    value="no"
                    checked={formData.attending === 'no'}
                    onChange={(e) => setFormData({ ...formData, attending: e.target.value })}
                    className="w-5 h-5 text-primary focus:ring-primary border-gray-300"
                  />
                  <span className="ml-3 text-gray-700">Lo siento, me es imposible</span>
                </label>
              </div>
            </div>

            {formData.attending === 'yes' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="space-y-6 pt-2"
              >
                <div>
                  <label className="block text-sm font-medium text-text mb-3">¿Vendrás con acompañante?</label>
                  <div className="flex space-x-6">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="hasCompanion"
                        value="yes"
                        checked={formData.hasCompanion === 'yes'}
                        onChange={(e) => setFormData({ ...formData, hasCompanion: e.target.value })}
                        className="w-5 h-5 text-primary focus:ring-primary border-gray-300"
                      />
                      <span className="ml-3 text-gray-700">Sí</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="hasCompanion"
                        value="no"
                        checked={formData.hasCompanion === 'no'}
                        onChange={(e) => setFormData({ ...formData, hasCompanion: e.target.value })}
                        className="w-5 h-5 text-primary focus:ring-primary border-gray-300"
                      />
                      <span className="ml-3 text-gray-700">No</span>
                    </label>
                  </div>
                </div>

                {formData.hasCompanion === 'yes' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                  >
                    <label htmlFor="companionName" className="block text-sm font-medium text-text mb-2">Nombre y Apellidos del Acompañante</label>
                    <input
                      type="text"
                      id="companionName"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white"
                      value={formData.companionName}
                      onChange={(e) => setFormData({ ...formData, companionName: e.target.value })}
                      placeholder="Ej. Juan Pérez"
                    />
                  </motion.div>
                )}

                <div>
                  <label htmlFor="dietary" className="block text-sm font-medium text-text mb-2">Restricciones Alimentarias</label>
                  <textarea
                    id="dietary"
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white resize-none"
                    value={formData.dietary}
                    onChange={(e) => setFormData({ ...formData, dietary: e.target.value })}
                    placeholder="Alergias, intolerancias (celiacos, lactosa), vegetarianos/veganos... (Déjalo en blanco si no tienes ninguna)"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text mb-3">¿Necesitarás plaza en el autobús?</label>
                  <div className="flex space-x-6">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="transport"
                        value="yes"
                        checked={formData.transport === 'yes'}
                        onChange={(e) => setFormData({ ...formData, transport: e.target.value })}
                        className="w-5 h-5 text-primary focus:ring-primary border-gray-300"
                      />
                      <span className="ml-3 text-gray-700">Sí</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="transport"
                        value="no"
                        checked={formData.transport === 'no'}
                        onChange={(e) => setFormData({ ...formData, transport: e.target.value })}
                        className="w-5 h-5 text-primary focus:ring-primary border-gray-300"
                      />
                      <span className="ml-3 text-gray-700">No</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label htmlFor="song" className="block text-sm font-medium text-text mb-2">La canción "imprescindible"</label>
                  <p className="text-xs text-gray-500 mb-2">¿Qué canción te haría saltar a la pista de baile?</p>
                  <input
                    type="text"
                    id="song"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white"
                    value={formData.song}
                    onChange={(e) => setFormData({ ...formData, song: e.target.value })}
                    placeholder="Ej. Danza Kuduro - Don Omar"
                  />
                </div>
              </motion.div>
            )}

            <button
              type="submit"
              className="w-full mt-8 bg-primary hover:bg-primary-light text-white font-medium py-4 px-8 rounded-full transition-colors flex items-center justify-center text-lg"
            >
              <Send size={20} className="mr-2" />
              Enviar Confirmación
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
