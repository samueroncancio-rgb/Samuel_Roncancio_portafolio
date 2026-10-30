import React, { useState } from 'react'
import { Activity, Layers, TrendingUp, Cpu, Code2, Database } from 'lucide-react'

interface ProjectImageProps {
  src: string
  alt: string
  iconName?: 'database' | 'cpu' | 'trending-up' | 'code-2' | 'activity' | 'layers'
  accentGradient?: string
  className?: string
}

export const ProjectImage: React.FC<ProjectImageProps> = ({
  src,
  alt,
  iconName = 'code-2',
  accentGradient = 'from-blue-600/30 via-slate-800 to-slate-900',
  className = '',
}) => {
  const [hasError, setHasError] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  const renderIcon = () => {
    const iconProps = { className: 'w-10 h-10 text-blue-400 group-hover:scale-110 transition-transform duration-300' }
    switch (iconName) {
      case 'activity':
        return <Activity {...iconProps} />
      case 'layers':
        return <Layers {...iconProps} />
      case 'trending-up':
        return <TrendingUp {...iconProps} />
      case 'cpu':
        return <Cpu {...iconProps} />
      case 'database':
        return <Database {...iconProps} />
      case 'code-2':
      default:
        return <Code2 {...iconProps} />
    }
  }

  return (
    <div className={`relative overflow-hidden w-full h-48 sm:h-52 bg-slate-900/90 border-b border-slate-800/80 ${className}`}>
      {!hasError && (
        <img
          src={src}
          alt={alt}
          onError={() => setHasError(true)}
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading="lazy"
        />
      )}

      {/* Tech Fallback (shown if image errors or before loaded) */}
      {(hasError || !isLoaded) && (
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center p-6 bg-gradient-to-br ${accentGradient} transition-opacity duration-300`}
        >
          {/* Tech decorative background pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

          {/* Central Icon with glowing badge */}
          <div className="relative z-10 flex flex-col items-center gap-3">
            <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-700/60 shadow-xl backdrop-blur-md">
              {renderIcon()}
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/70 border border-slate-700/50 text-[11px] font-mono text-slate-300 tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>{alt.length > 28 ? `${alt.substring(0, 26)}...` : alt}</span>
            </div>
          </div>
        </div>
      )}

      {/* Subtle bottom shadow vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
    </div>
  )
}
