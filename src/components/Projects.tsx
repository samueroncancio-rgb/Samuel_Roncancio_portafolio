import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Terminal, GitFork, Star } from 'lucide-react'
import { Github } from './Icons'
import { projects } from '../data/portfolioData'
import { ProjectImage } from './ProjectImage'

export const Projects: React.FC = () => {
  return (
    <section id="proyectos" className="relative py-20 md:py-28 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 mb-3">
              <Terminal className="w-3.5 h-3.5" />
              <span>// PORTAFOLIO DE CÓDIGO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Proyectos Destacados
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base">
              Soluciones de backend, pipelines de datos y plataformas colaborativas orientadas a rendimiento e impacto medible.
            </p>
          </div>

          <a
            href="https://github.com/samueroncancio-rgb?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono text-blue-400 hover:text-blue-300 transition-colors"
          >
            <span>Ver todos los repositorios en GitHub</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col justify-between group border border-slate-800"
            >
              <div>
                {/* Visual Image with tech fallback */}
                <ProjectImage
                  src={project.image}
                  alt={project.title}
                  iconName={project.iconName}
                />

                {/* Content body */}
                <div className="p-6 sm:p-7">
                  {/* Category & Status */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono font-medium text-emerald-400 uppercase tracking-wider">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-[10px] font-mono text-blue-300">
                        <Star className="w-3 h-3 text-blue-400 fill-blue-400" /> Destacado
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors mb-3 leading-snug">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-[11px] font-mono text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="px-6 py-4 bg-slate-950/60 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <GitFork className="w-3.5 h-3.5 text-slate-400" />
                  <span>Open Source</span>
                </div>

                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-slate-900 hover:bg-blue-600 border border-slate-700/80 hover:border-blue-500 transition-all shadow-sm group/btn"
                >
                  <Github className="w-3.5 h-3.5 text-slate-300 group-hover/btn:text-white" />
                  <span>Ver Repositorio</span>
                  <ExternalLink className="w-3 h-3 opacity-70 group-hover/btn:opacity-100" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
