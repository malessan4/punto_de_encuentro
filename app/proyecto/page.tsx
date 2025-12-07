import React from 'react';
import Link from 'next/link';
import { MoveLeft, Target, Lightbulb, GitMerge, FileText } from 'lucide-react';

export default function ProyectoPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-200 font-sans selection:bg-teal-500/30 p-6 md:p-12">
      
      <div className="max-w-4xl mx-auto">
        {/* NAV: VOLVER */}
        <nav className="mb-12 flex justify-between items-center">
          <Link 
            href="/#proyecto" 
            className="inline-flex items-center gap-2 text-neutral-400 hover:text-teal-400 transition-colors group"
          >
            <MoveLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
            Volver al resumen
          </Link>
        </nav>

        {/* HEADER DE LA PÁGINA */}
        <header className="mb-16 border-b border-neutral-800 pb-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Punto de <span className="text-teal-500">Encuentro</span>
          </h1>
          <p className="text-xl text-neutral-400 leading-relaxed max-w-2xl">
            Profundización en la dinámica colaborativa entre compositores e intérpretes en el marco de la música contemporánea académica.
          </p>
        </header>

        {/* CONTENIDO PRINCIPAL */}
        <div className="space-y-16">
          
          {/* SECCIÓN 1: EL PROBLEMA */}
          <section className="grid md:grid-cols-[1fr_2fr] gap-8">
            <div>
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Lightbulb className="text-teal-500 w-5 h-5" /> Origen
              </h2>
            </div>
            <div className="space-y-4 text-neutral-400 leading-relaxed">
              <p>
                Históricamente, la enseñanza de la composición y la interpretación instrumental han transcurrido por carriles separados dentro de la academia. El compositor escribe en soledad; el intérprete ejecuta lo escrito.
              </p>
              <p>
                <strong className="text-white">Punto de Encuentro</strong> nace de la necesidad de romper esa barrera. Identificamos que las obras más ricas surgen cuando el intérprete participa activamente en la génesis de la obra, aportando su conocimiento técnico del instrumento al proceso creativo del compositor.
              </p>
            </div>
          </section>

          {/* SECCIÓN 2: METODOLOGÍA */}
          <section className="grid md:grid-cols-[1fr_2fr] gap-8 border-t border-neutral-800 pt-16">
            <div>
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <GitMerge className="text-teal-500 w-5 h-5" /> Metodología
              </h2>
            </div>
            <div className="space-y-6 text-neutral-400 leading-relaxed">
              <p>
                El proyecto se estructura en ciclos de trabajo cuatrimestrales bajo la modalidad de <em>Laboratorio Abierto</em>:
              </p>
              <ul className="space-y-4">
                <li className="bg-neutral-900/50 p-4 rounded-lg border border-neutral-800">
                  <strong className="text-teal-400 block mb-1">Fase 1: Bocetado</strong>
                  Los compositores presentan ideas crudas y gestos sonoros, no partituras terminadas.
                </li>
                <li className="bg-neutral-900/50 p-4 rounded-lg border border-neutral-800">
                  <strong className="text-teal-400 block mb-1">Fase 2: Experimentación</strong>
                  Los intérpretes prueban la viabilidad técnica y proponen tímbricas alternativas (técnicas extendidas).
                </li>
                <li className="bg-neutral-900/50 p-4 rounded-lg border border-neutral-800">
                  <strong className="text-teal-400 block mb-1">Fase 3: Consolidación</strong>
                  Fijación de la obra en soporte escrito (partitura) y tecnológico (patch/electrónica).
                </li>
              </ul>
            </div>
          </section>

          {/* SECCIÓN 3: OBJETIVOS */}
          <section className="grid md:grid-cols-[1fr_2fr] gap-8 border-t border-neutral-800 pt-16">
            <div>
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Target className="text-teal-500 w-5 h-5" /> Objetivos
              </h2>
            </div>
            <div className="text-neutral-400 leading-relaxed">
              <ul className="list-disc list-inside space-y-2 marker:text-teal-500">
                <li>Fomentar la creación de un repertorio nuevo y original.</li>
                <li>Documentar el proceso creativo para futuras investigaciones musicológicas.</li>
                <li>Generar un espacio de intercambio horizontal entre estudiantes de distintas carreras.</li>
                <li>Publicar las obras resultantes en conciertos y grabaciones de alta calidad.</li>
              </ul>
            </div>
          </section>

        </div>

        {/* FOOTER CTA */}
        <div className="mt-20 p-8 bg-neutral-900 border border-neutral-800 rounded-xl text-center">
          <h3 className="text-white text-xl font-bold mb-2">¿Te interesa la investigación?</h3>
          <p className="text-neutral-400 mb-6">Puedes descargar el PDF completo del proyecto aprobado por la universidad.</p>
          <button className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-black font-semibold px-6 py-3 rounded-lg transition-all">
            <FileText className="w-4 h-4" /> Descargar Proyecto Completo (PDF)
          </button>
        </div>

      </div>
    </div>
  );
}