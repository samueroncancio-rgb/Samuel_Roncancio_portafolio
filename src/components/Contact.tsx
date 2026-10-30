import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  MessageSquare,
  MapPin,
  Copy,
  Check,
  Terminal,
  ArrowUpRight,
  Send
} from 'lucide-react'
import { Github, Linkedin } from './Icons'
import { personalInfo } from '../data/portfolioData'
import { Toast } from './Toast'

export const Contact: React.FC = () => {
  const [copiedType, setCopiedType] = useState<string | null>(null)
  const [toastMessage, setToastMessage] = useState<string | null>(null)

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedType(label)
      setToastMessage(`${label} copiado al portapapeles`)
      setTimeout(() => {
        setCopiedType(null)
        setToastMessage(null)
      }, 3000)
    })
  }

  return (
    <section id="contacto" className="relative py-20 md:py-28 border-t border-slate-800/80">
      {/* Toast Notification */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />

      {/* Decorative ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-72 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-center mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>// DISPONIBILIDAD & CONTACTO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            ¿Listo para construir el siguiente nivel de software e IA?
          </h2>
          <p className="mt-3 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Abierto a oportunidades como Software Engineer, integraciones de IA Generativa con MCP y desarrollo backend escalable.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-6 rounded-2xl flex flex-col justify-between border border-slate-800 group hover:border-blue-500/40 transition-all"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-105 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Correo Electrónico
              </span>
              <p className="text-base sm:text-lg font-semibold text-white mt-1 break-all select-all">
                {personalInfo.email}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white transition-all shadow-md shadow-blue-600/20"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Escribir Email</span>
              </a>
              <button
                onClick={() => copyToClipboard(personalInfo.email, 'Email')}
                className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-300 hover:text-white transition-all"
                title="Copiar email"
                aria-label="Copiar email"
              >
                {copiedType === 'Email' ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </motion.div>

          {/* WhatsApp / Phone Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-panel p-6 rounded-2xl flex flex-col justify-between border border-slate-800 group hover:border-emerald-500/40 transition-all"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-105 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Teléfono & WhatsApp
              </span>
              <p className="text-base sm:text-lg font-semibold text-white mt-1">
                {personalInfo.phone}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2">
              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs font-semibold text-white transition-all shadow-md shadow-emerald-600/20"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chat WhatsApp</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <button
                onClick={() => copyToClipboard(personalInfo.phone, 'Teléfono')}
                className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-300 hover:text-white transition-all"
                title="Copiar teléfono"
                aria-label="Copiar teléfono"
              >
                {copiedType === 'Teléfono' ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </motion.div>

          {/* Location & Social Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-panel p-6 rounded-2xl flex flex-col justify-between border border-slate-800 group hover:border-indigo-500/40 transition-all md:col-span-2 lg:col-span-1"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-4 group-hover:scale-105 transition-transform">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Ubicación & Modalidad
              </span>
              <p className="text-sm sm:text-base font-semibold text-white mt-1 leading-snug">
                {personalInfo.location}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2">
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-medium text-slate-200 hover:text-blue-400 transition-all"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-medium text-slate-200 hover:text-white transition-all"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
