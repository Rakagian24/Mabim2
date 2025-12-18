'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

const Particles = dynamic(() => import('@/components/Particles'), { ssr: false })

export default function Sesi3Section() {
  return (
    <section 
      id="sesi3"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-slate-900"
    >
      {/* Particles Background */}
      <div className="absolute inset-0 w-full h-full">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Elegant overlays untuk particles - lebih clean dan sophisticated */}
      <div className="absolute inset-0 bg-linear-to-b from-slate-900/70 via-slate-900/30 to-slate-900/80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(15,23,42,0.7)_100%)]" />
      
      {/* Soft ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.15)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.1)_0%,transparent_50%)]" />

      {/* Content dengan clean, professional styling */}
      <div className="relative z-10 text-center px-8 max-w-6xl">
        
        {/* Main Title dengan elegant feel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="block text-white drop-shadow-[0_4px_20px_rgba(255,255,255,0.15)]">
              Soft Skill & 
            </span>
            <span className="block bg-linear-to-r from-cyan-300 via-blue-400 to-indigo-500 bg-clip-text text-transparent drop-shadow-[0_4px_30px_rgba(59,130,246,0.4)]">
              Personal Branding
            </span>
          </motion.h1>
        </motion.div>

        {/* Subtitle dengan refined styling */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-xl md:text-2xl text-blue-50/90 mb-12 font-medium max-w-2xl mx-auto leading-relaxed text-center"
        >
          sebagai 
          <span className="text-cyan-300 font-semibold drop-shadow-[0_2px_15px_rgba(34,211,238,0.3)]"> Pondasi Karakter </span>
          dan 
          <span className="text-cyan-300 font-semibold drop-shadow-[0_2px_15px_rgba(34,211,238,0.3)]"> Karier</span>
        </motion.p>

      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-slate-900 to-transparent pointer-events-none" />
    </section>
  )
}