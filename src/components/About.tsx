import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Server, Workflow, CheckCircle, Terminal, Bot } from 'lucide-react'
import { personalInfo, specialties } from '../data/portfolioData'

export const About: React.FC = () => {
  const getSpecialtyIcon = (iconName: string) => {
    switch (iconName) {
      case 'sparkles':
        return <Bot className="w-6 h-6 text-blue-400" />
      case 'server':
        return <Server className="w-6 h-6 text-emerald-400" />
      case 'workflow':
        return <Workflow className="w-6 h-6 text-indigo-400" />
      default:
        return <Sparkles className="w-6 h-6 text-blue-400" />
    }
  }

  return (
    <section id="sobre-mi" className="relative py-20 md:py-28 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>// SOBRE MÍ & PROPUESTA DE VALOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Ingeniería de backend robusta combinada con el potencial de la{' '}
            <span className="text-blue-500">Inteligencia Artificial</span>
          </h2>
        </div>

        {/* Narrative & Value Statement */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-10 items-start">
            <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center shrink-0 text-blue-400">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg">
              <p>{personalInfo.aboutText}</p>
            </div>
          </div>

          {/* Quick value indicators */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
              <span className="text-sm font-mono text-slate-300">Arquitecturas MCP & GenAI</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-blue-400 shrink-0" />
              <span className="text-sm font-mono text-slate-300">FastAPI & Python Escalable</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-indigo-400 shrink-0" />
              <span className="text-sm font-mono text-slate-300">Automatización de Pipelines</span>
            </div>
          </div>
        </div>

        {/* 3 Specialty Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {specialties.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel glass-panel-hover p-6 sm:p-7 rounded-2xl flex flex-col justify-between group"
            >
              <div>
                {/* Icon & Heading */}
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center mb-5 group-hover:border-blue-500/50 group-hover:scale-105 transition-all">
                  {getSpecialtyIcon(item.iconName)}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Highlight Tags */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                {item.highlightTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded bg-slate-900/90 border border-slate-800 text-[11px] font-mono text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
