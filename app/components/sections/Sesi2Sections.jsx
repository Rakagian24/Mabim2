'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

const LetterGlitch = dynamic(() => import('@/components/LetterGlitch'), { ssr: false })

export default function Sesi2Section() {
  return (
    <section 
      id="sesi2"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black"
    >
      {/* LetterGlitch Background */}
      <div className="absolute inset-0 w-full h-full">
        <LetterGlitch
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
        />
      </div>

      {/* Very subtle overlays - biar LetterGlitch tetap keliatan */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-slate-900/40" />
      
      {/* Cyber grid effect - very subtle */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      {/* Content dengan cyber/tech styling */}
      <div className="relative z-10 text-center px-8 max-w-6xl">
        
        {/* Main Title dengan sharp, digital feel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="block text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.5)] font-mono [text-shadow:0_0_60px_rgba(255,255,255,0.3)]">
              Informatika itu 
            </span>
            <span className="block bg-linear-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent drop-shadow-[0_0_50px_rgba(59,130,246,0.8)] [text-shadow:0_0_100px_rgba(59,130,246,0.5)]">
              Luas
            </span>
          </motion.h1>
        </motion.div>

        {/* Subtitle dengan glitch-inspired styling */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-xl md:text-2xl text-white/95 mb-12 font-medium max-w-2xl mx-auto leading-relaxed text-center"
        >
          <span className="text-cyan-400 font-bold tracking-wide drop-shadow-[0_0_20px_rgba(34,211,238,0.8)] [text-shadow:0_0_40px_rgba(34,211,238,0.5)]">Temukan </span>
          <span className="text-cyan-400 font-bold tracking-wide drop-shadow-[0_0_20px_rgba(34,211,238,0.8)] [text-shadow:0_0_40px_rgba(34,211,238,0.5)]">Arah </span>
          & 
          <span className="text-cyan-400 font-bold tracking-wide drop-shadow-[0_0_20px_rgba(34,211,238,0.8)] [text-shadow:0_0_40px_rgba(34,211,238,0.5)]"> Passionmu</span>
        </motion.p>

      </div>

      {/* Bottom gradient - sangat subtle */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black/60 to-transparent pointer-events-none" />
    </section>
  )
}