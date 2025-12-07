import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MoveRight, AudioWaveform, Mic2, Users, Mail, BookOpen, Music4 } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-200 font-sans selection:bg-teal-500/30">
      
      {/* NAV BAR */}
      <nav className="fixed top-0 w-full z-50 border-b border-neutral-800 bg-[#0a0a0a]/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* LOGO + NOMBRE */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-30 h-30"> 
               <Image 
                 src="/imagenes/pprof-logo-blanco.png"       // Asegúrate de que coincida con el nombre en la carpeta public
                 alt="Logo Punto de Encuentro"
                 fill                  // Esto hace que la imagen llene el contenedor div padre
                 className="object-contain group-hover:scale-105 transition-transform" // object-contain evita que se deforme
                 priority              // Carga prioritaria para el logo
               />
            </div>


          </a>
          <div className="hidden md:flex gap-8 text-sm font-medium text-neutral-400">
            <a href="#proyecto" className="hover:text-teal-400 transition-colors">Proyecto</a>
            <a href="#lineas" className="hover:text-teal-400 transition-colors">Investigación</a>
            <a href="#equipo" className="hover:text-teal-400 transition-colors">Equipo</a>
            <Link href="/contacto" className="hover:text-teal-400 transition-colors">Contacto</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        
        {/* HERO SECTION */}
        <section className="py-20 md:py-32 flex flex-col items-start gap-6 border-b border-neutral-800">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900 text-xs text-teal-400 uppercase tracking-widest font-semibold">
            Investigación Universitaria
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white max-w-4xl">
            Punto de Encuentro <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-600">
              Música Contemporanea
            </span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl leading-relaxed">
              Punto de Encuentro es un Proyecto de Investigación Orientado
              a la Práctica Profesional de la Escuela Universitaria de Artes de la Universidad Nacional de Quilmes 
              dirigido por Marcos Franciosi y co-dirigido por Agustina Crespo
          </p>
          <br>
          </br>
          <p className="text-xl text-neutral-400 max-w-2xl leading-relaxed">
            Nuevos abordajes para el trabajo en colaboración entre compositores e intérpretes en el ámbito universitario.
          </p>
          <div className="flex gap-4 mt-4">
            <a 
              href="#proyecto" 
              className="group flex items-center gap-2 bg-neutral-100 text-black px-6 py-3 rounded-md font-medium hover:bg-teal-400 transition-all duration-300"
            >
              Leer Propuesta <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/>
            </a>
            <Link 
              href="/contacto" 
              className="flex items-center gap-2 px-6 py-3 rounded-md font-medium border border-neutral-700 hover:border-teal-400 hover:text-teal-400 transition-all"
            >
              Contactar
            </Link>
          </div>
        </section>

        {/* SECTION: PROYECTO */}
        <section id="proyecto" className="py-24 grid md:grid-cols-2 gap-16 items-center border-b border-neutral-800">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <BookOpen className="text-teal-400" /> Sobre el Proyecto
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed">
              <strong>Punto de Encuentro:</strong> Somos un grupo de estudio formado por estudiantes, docentes y egresados de la carrera de Composición con Medios Electroacústicos.
            </p>
            <p className="text-neutral-400 text-lg leading-relaxed">
                Nuestro objetivo es abordar los mecanismos de aprendizaje y producción de la composición musical a 
                partir del trabajo colaborativo entre intérpretes y compositores en el campo de la música contemporánea.
            </p>

            <div className="pt-4">
              <Link 
                href="/proyecto" 
                className="inline-flex items-center gap-2 text-teal-400 font-medium hover:text-white transition-colors group"
              >
                Ver más sobre el proyecto
                <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
          </div>
          
          {/* Visual abstracta (simulando código o espectrograma) */}
          <div className="relative h-64 md:h-80 w-full bg-neutral-900 rounded-lg border border-neutral-800 overflow-hidden flex items-center justify-center group">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
            <div className="z-10 text-center space-y-2 p-6">
               <Music4 className="w-16 h-16 mx-auto text-neutral-700 group-hover:text-teal-400 transition-colors duration-500" />
               <p className="text-sm text-neutral-600 font-mono">freq: 440hz // amp: 0.8</p>
               <p className="text-xs text-neutral-700 font-mono">render_audio_stream()</p>
            </div>
          </div>
        </section>

        {/* SECTION: LÍNEAS DE INVESTIGACIÓN */}
        <section id="lineas" className="py-24 border-b border-neutral-800">
          <h2 className="text-3xl font-bold text-white mb-12">Líneas de Investigación</h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="p-8 rounded-xl bg-neutral-900/50 border border-neutral-800 hover:border-teal-500/50 transition-colors duration-300">
              <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center mb-6 text-teal-400">
                <AudioWaveform className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Sintaxis Sonora</h3>
              <p className="text-neutral-400">Análisis morfológico de obras mixtas y acusmáticas argentinas del siglo XXI.</p>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-xl bg-neutral-900/50 border border-neutral-800 hover:border-teal-500/50 transition-colors duration-300">
              <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center mb-6 text-teal-400">
                <Mic2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Tecnología y Medios</h3>
              <p className="text-neutral-400">Desarrollo de instrumentos digitales y programación en entornos como SuperCollider y Max/MSP.</p>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-xl bg-neutral-900/50 border border-neutral-800 hover:border-teal-500/50 transition-colors duration-300">
              <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center mb-6 text-teal-400">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Archivo Histórico</h3>
              <p className="text-neutral-400">Recuperación y digitalización de cintas y soportes analógicos de compositores locales.</p>
            </div>

          </div>
        </section>

        {/* SECTION: EQUIPO (Minimalista estilo lista) */}
        <section id="equipo" className="py-24 border-b border-neutral-800">
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
             <Users className="text-teal-400"/> Equipo de Investigación
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex items-center gap-4 p-4 rounded-lg hover:bg-neutral-900 transition-colors border border-transparent hover:border-neutral-800">
                <div className="w-12 h-12 rounded-full bg-neutral-800 border border-neutral-700"></div>
                <div>
                  <h4 className="text-white font-medium">Investigador {item}</h4>
                  <p className="text-sm text-neutral-500">Rol Académico / Especialidad</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer id="contacto" className="pt-20 pb-10 text-center space-y-8">
          <h3 className="text-2xl font-bold text-white">¿Te interesa colaborar?</h3>
          <p className="text-neutral-400">
            Proyecto radicado en la Universidad Nacional de las Artes (Ejemplo)
          </p>
          <div className="flex justify-center items-center gap-2 text-teal-400 font-mono">
            <Mail className="w-4 h-4" /> contacto@puntodeencuentro.edu.ar
          </div>
          <div className="pt-10 border-t border-neutral-800 text-xs text-neutral-600">
            &copy; {new Date().getFullYear()} Punto de Encuentro. Investigación Musical.
          </div>
        </footer>

      </main>
    </div>
  );
}