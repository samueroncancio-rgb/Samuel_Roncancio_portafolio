import React, { useState } from 'react'
import { Sparkles, Bot, Code2 } from 'lucide-react'

interface ProfileImageProps {
  src: string
  alt: string
  className?: string
}

export const ProfileImage: React.FC<ProfileImageProps> = ({ src, alt, className = '' }) => {
  const [hasError, setHasError] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className={`relative flex items-center justify-center ${className}`}>

      {/* Outer rotating gradient ring */}
      <div className="absolute w-[300px] h-[300px] sm:w-[340px] sm:h-[340px] md:w-[380px] md:h-[380px] rounded-full"
        style={{
          background: 'conic-gradient(from 0deg, #2563EB, #10B981, #6366F1, #2563EB)',
          padding: '2px',
          animation: 'spin 8s linear infinite',
        }}
      >
        <div className="w-full h-full rounded-full bg-[#0B0F17]" />
      </div>

      {/* Second static soft glow ring */}
      <div className="absolute w-[290px] h-[290px] sm:w-[330px] sm:h-[330px] md:w-[370px] md:h-[370px] rounded-full border border-slate-700/40 bg-transparent" />

      {/* Ambient glow behind */}
      <div className="absolute w-[260px] h-[260px] sm:w-[290px] sm:h-[290px] rounded-full bg-blue-600/20 blur-3xl pointer-events-none" />

      {/* Photo frame — circle */}
      <div className="relative w-[260px] h-[260px] sm:w-[296px] sm:h-[296px] md:w-[332px] md:h-[332px] rounded-full overflow-hidden border-2 border-slate-700/60 shadow-2xl z-10 bg-slate-900">
        {!hasError && (
          <img
            src={src}
            alt={alt}
            onError={() => setHasError(true)}
            onLoad={() => setIsLoaded(true)}
            className={`w-full h-full object-cover object-top transition-all duration-500 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Fallback */}
        {(hasError || !isLoaded) && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950">
            <div className="absolute inset-0 bg-grid-pattern opacity-20" />
            <div className="relative z-10 flex flex-col items-center gap-3">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-blue-600/30 to-emerald-500/20 border border-blue-500/40 flex items-center justify-center">
                <span className="font-mono text-2xl font-extrabold text-white">
                  SR<span className="text-emerald-400">.</span>
                </span>
              </div>
              <p className="text-[11px] font-mono text-slate-400 text-center px-4">
                <span className="text-blue-400">/assets/images/profile.jpg</span>
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Floating badge — top right */}
      <div className="absolute top-4 -right-2 sm:right-0 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/95 border border-emerald-500/40 shadow-lg shadow-emerald-950/30 backdrop-blur-md">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        <span className="text-[11px] font-mono font-semibold text-emerald-300">Disponible</span>
      </div>

      {/* Floating badge — bottom left */}
      <div className="absolute bottom-6 -left-4 sm:left-0 z-20 flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900/95 border border-blue-500/30 shadow-lg backdrop-blur-md">
        <div className="p-1 rounded-md bg-blue-600/20">
          <Bot className="w-3.5 h-3.5 text-blue-400" />
        </div>
        <span className="text-[11px] font-mono text-slate-200">GenAI · MCP · Python</span>
      </div>

      {/* Floating badge — bottom right */}
      <div className="absolute bottom-10 -right-2 sm:right-0 z-20 flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900/95 border border-indigo-500/30 shadow-lg backdrop-blur-md">
        <div className="p-1 rounded-md bg-indigo-600/20">
          <Code2 className="w-3.5 h-3.5 text-indigo-400" />
        </div>
        <span className="text-[11px] font-mono text-slate-200">FastAPI · React</span>
      </div>

      {/* Floating sparkle icon — top left */}
      <div className="absolute top-8 -left-3 sm:left-0 z-20 p-2 rounded-xl bg-slate-900/95 border border-slate-700 shadow-lg backdrop-blur-md">
        <Sparkles className="w-4 h-4 text-blue-400" />
      </div>

      {/* CSS spin animation */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}
