import React from 'react'
import { motion } from 'framer-motion'
import {
  FileDown,
  ArrowRight,
  Sparkles,
  Bot,
  Database,
  Layers
} from 'lucide-react'
import { Github, Linkedin } from './Icons'
import { personalInfo } from '../data/portfolioData'
import { ProfileImage } from './ProfileImage'

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center overflow-hidden">
      {/* Background radial spotlights & subtle grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-blue-600/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Information & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Status Badge with Pulsing Emerald Dot */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-xs font-mono text-emerald-300 shadow-lg shadow-emerald-950/20 mb-6 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>{personalInfo.roleBadge}</span>
            </div>

            {/* Main Name */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-4">
              {personalInfo.name}
            </h1>

            {/* Dynamic / Highlight Subtitle */}
            <div className="mb-6 flex flex-wrap items-center gap-2">
              <span className="text-lg sm:text-xl md:text-2xl font-semibold bg-gradient-to-r from-blue-400 via-indigo-300 to-emerald-400 bg-clip-text text-transparent">
                {personalInfo.subtitle}
              </span>
            </div>

            {/* Short Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
              {personalInfo.shortDescription}
            </p>

            {/* Quick Tech Highlights Chips */}
            <div className="flex flex-wrap items-center gap-2 mb-9">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/25 text-xs font-mono text-blue-300">
                <Bot className="w-3.5 h-3.5 text-blue-400" /> Model Context Protocol (MCP)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/25 text-xs font-mono text-emerald-300">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" /> LLMs & GenAI
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-800 border border-slate-700 text-xs font-mono text-slate-200">
                <Database className="w-3.5 h-3.5 text-cyan-400" /> FastAPI & Python
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-800 border border-slate-700 text-xs font-mono text-slate-200">
                <Layers className="w-3.5 h-3.5 text-indigo-400" /> React + TypeScript
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
              {/* Primary CTA */}
              <a
                href="#proyectos"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 transition-all active:scale-95 group"
              >
                <span>Ver Proyectos</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Secondary CTA: Download CV */}
              <a
                href={personalInfo.resumeUrl}
                download="CV_Samuel_Roncancio.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 shadow-md transition-all active:scale-95"
              >
                <FileDown className="w-4 h-4 text-blue-400" />
                <span>Descargar CV</span>
              </a>

              {/* Social Icon Links */}
              <div className="flex items-center gap-2 ml-1">
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-all shadow-sm"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-blue-400 transition-all shadow-sm"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Profile Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <ProfileImage
              src={personalInfo.profileImage}
              alt={personalInfo.name}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
