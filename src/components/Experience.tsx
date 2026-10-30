import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Terminal, CheckCircle2 } from 'lucide-react'
import { experiences } from '../data/portfolioData'

export const Experience: React.FC = () => {
  return (
    <section id="experiencia" className="relative py-20 md:py-28 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>// TRAYECTORIA & CARRERA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Experiencia Profesional
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base">
            Trayectoria en desarrollo de soluciones de Inteligencia Artificial, arquitectura backend y trabajo ágil colaborativo.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 md:pl-10 border-l border-slate-800 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Timeline Glowing Node Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] md:-left-[47px] top-1.5 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-slate-900 border-2 border-blue-500 flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                </div>
              </div>

              {/* Experience Card */}
              <div className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-2xl border border-slate-800">
                {/* Header Information */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="font-semibold text-emerald-400 text-sm sm:text-base">
                        {exp.company}
                      </span>
                      <span className="text-slate-600">•</span>
                      <span className="text-xs font-mono text-slate-400">{exp.type}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-slate-300">
                      <Calendar className="w-3.5 h-3.5 text-blue-400" />
                      <span>{exp.period}</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                {/* Achievements List */}
                <ul className="mt-5 space-y-3">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills used */}
                {exp.skills && (
                  <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded bg-slate-900/90 border border-slate-800 text-[11px] font-mono text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
