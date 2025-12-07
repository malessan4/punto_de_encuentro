'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MoveLeft, Mail, MapPin, Phone, Send, Loader2 } from 'lucide-react';

export default function ContactoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Función simulada de envío
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // AQUÍ IRÍA TU LÓGICA DE BACKEND O SERVICIO (ej: Formspree, EmailJS)
    // Simulamos una espera de 2 segundos
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Mensaje enviado (Simulación). Para que funcione realmente necesitas un backend o servicio como Formspree.");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-200 font-sans selection:bg-teal-500/30 p-6 md:p-12">
      
      <div className="max-w-5xl mx-auto">
        {/* BOTÓN VOLVER */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-neutral-400 hover:text-teal-400 transition-colors mb-12 group"
        >
          <MoveLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
          Volver al inicio
        </Link>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          
          {/* COLUMNA IZQUIERDA: INFORMACIÓN */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Hablemos
              </h1>
              <p className="text-xl text-neutral-400 leading-relaxed">
                ¿Tienes preguntas sobre el Proyecto Punto de Encuentro? ¿Te interesa colaborar como intérprete o compositor?
              </p>
            </div>

            <div className="space-y-6 pt-8 border-t border-neutral-800">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 text-teal-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-medium">Email</h3>
                  <p className="text-neutral-400">contacto@puntodeencuentro.edu.ar</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 text-teal-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-medium">Ubicación</h3>
                  <p className="text-neutral-400">Universidad Nacional de Quilmes<br/>Escuela Universitaria de Artes</p>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: FORMULARIO */}
          <div className="bg-neutral-900/30 p-8 rounded-2xl border border-neutral-800 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="nombre" className="text-sm font-medium text-neutral-300">Nombre</label>
                  <input 
                    type="text" 
                    id="nombre" 
                    required
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500 transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="apellido" className="text-sm font-medium text-neutral-300">Apellido</label>
                  <input 
                    type="text" 
                    id="apellido" 
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500 transition-colors"
                    placeholder="Tu apellido"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-neutral-300">Email Académico / Personal</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500 transition-colors"
                  placeholder="ejemplo@email.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="mensaje" className="text-sm font-medium text-neutral-300">Mensaje</label>
                <textarea 
                  id="mensaje" 
                  rows={4}
                  required
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500 transition-colors resize-none"
                  placeholder="Escribe tu consulta aquí..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-teal-500 hover:bg-teal-400 text-black font-semibold py-4 rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" /> Enviando...
                  </>
                ) : (
                  <>
                    Enviar Mensaje <Send className="w-4 h-4" />
                  </>
                )}
              </button>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
}