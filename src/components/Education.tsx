import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Languages, Calendar, BookOpen, Terminal } from 'lucide-react'
import { educations, languages } from '../data/portfolioData'

export const Education: React.FC = () => {
  return (
    <section id="educacion" className="relative py-20 md:py-28 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>// FORMACIÓN & IDIOMAS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Educación & Comunicación Global
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base">
            Fundamentos teóricos en ingeniería, entrenamiento acelerado en IA y competencias lingüísticas para equipos internacionales.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Education Items (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2.5 mb-2 text-slate-200 font-semibold text-lg">
              <GraduationCap className="w-5 h-5 text-blue-400" />
              <span>Formación Académica & Bootcamps</span>
            </div>

            {educations.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-panel glass-panel-hover p-6 rounded-2xl border border-slate-800 relative group"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-bold text-white text-lg group-hover:text-blue-400 transition-colors">
                      {item.degree}
                    </h3>
                    <p className="text-blue-400 text-sm font-medium mt-0.5">
                      {item.institution}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    {item.badge && (
                      <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-[10px] font-mono text-blue-300">
                        {item.badge}
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1 text-xs font-mono text-slate-400 bg-slate-900 px-2.5 py-0.5 rounded-md border border-slate-800">
                      <Calendar className="w-3 h-3 text-slate-400" />
                      {item.period}
                    </span>
                  </div>
                </div>

                {item.details && (
                  <p className="text-sm text-slate-400 leading-relaxed mt-2">
                    {item.details}
                  </p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Right Column: Languages & Global Communication (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2.5 mb-2 text-slate-200 font-semibold text-lg">
              <Languages className="w-5 h-5 text-emerald-400" />
              <span>Competencia en Idiomas</span>
            </div>

            <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-slate-800 space-y-6">
              {languages.map((lang, index) => (
                <div
                  key={lang.language}
                  className={`space-y-3 ${
                    index !== languages.length - 1 ? 'pb-6 border-b border-slate-800/80' : ''
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-white text-base">
                        {lang.language}
                      </h4>
                      <p className="text-xs text-slate-400 mt-0.5 font-mono">
                        Nivel {lang.level} — {lang.proficiency}
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono font-semibold text-emerald-400">
                      {lang.level}
                    </span>
                  </div>

                  {/* Progress bar visual */}
                  <div className="w-full bg-slate-900 rounded-full h-1.5 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        lang.level === 'C2'
                          ? 'w-full bg-emerald-500'
                          : 'w-3/5 bg-gradient-to-r from-blue-500 to-emerald-400'
                      }`}
                    />
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {lang.note}
                  </p>
                </div>
              ))}

              {/* Global Remote Badge */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 flex items-start gap-3">
                <BookOpen className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <p>
                  Capacidad para colaborar de forma asíncrona y en tiempo real con equipos internacionales, escribir documentación técnica en inglés y diseñar prompts complejos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
