import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Bot,
  Server,
  Layout,
  Cloud,
  Users,
  Code2,
  Terminal,
  Zap,
  Sparkles
} from 'lucide-react'
import { skillCategories } from '../data/portfolioData'

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'bot':
        return <Bot className="w-5 h-5 text-blue-400" />
      case 'server':
        return <Server className="w-5 h-5 text-emerald-400" />
      case 'layout':
        return <Layout className="w-5 h-5 text-cyan-400" />
      case 'cloud':
        return <Cloud className="w-5 h-5 text-indigo-400" />
      case 'users':
        return <Users className="w-5 h-5 text-amber-400" />
      default:
        return <Code2 className="w-5 h-5 text-blue-400" />
    }
  }

  const filteredCategories =
    selectedCategory === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === selectedCategory)

  return (
    <section id="stack" className="relative py-20 md:py-28 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 mb-3">
              <Terminal className="w-3.5 h-3.5" />
              <span>// TECH STACK & COMPETENCIAS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Habilidades Técnicas & Humanas
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-xl">
              Conjunto de herramientas seleccionadas para crear productos estables, escalables y potenciados por IA.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                selectedCategory === 'all'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 font-semibold'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              Todos ({skillCategories.reduce((acc, c) => acc + c.skills.length, 0)})
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 font-semibold'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, index) => {
            const isFeatured = category.id === 'ai-automation' || category.id === 'backend-core'

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col justify-between ${
                  isFeatured && selectedCategory === 'all'
                    ? 'border-blue-500/30 shadow-lg shadow-blue-950/10'
                    : ''
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                        {getCategoryIcon(category.iconName)}
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-base sm:text-lg">
                          {category.title}
                        </h3>
                        {category.description && (
                          <p className="text-[12px] text-slate-400 line-clamp-1">
                            {category.description}
                          </p>
                        )}
                      </div>
                    </div>
                    {isFeatured && (
                      <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-[10px] font-mono text-blue-300">
                        <Sparkles className="w-2.5 h-2.5 text-blue-400" /> Core
                      </span>
                    )}
                  </div>

                  {/* Skills Badges Grid */}
                  <div className="flex flex-wrap gap-2 pt-3">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                          skill.highlight
                            ? 'bg-blue-600/15 border border-blue-500/40 text-blue-200 font-semibold shadow-sm shadow-blue-500/10'
                            : 'bg-slate-900/90 border border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'
                        }`}
                      >
                        {skill.highlight && <Zap className="w-3 h-3 text-blue-400 shrink-0" />}
                        <span>{skill.name}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom category meta note */}
                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>{category.skills.length} competencias</span>
                  <span className="text-slate-400">Production Ready</span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
