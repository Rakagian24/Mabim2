'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

const Orb = dynamic(() => import('@/components/Orb'), { ssr: false })

export default function Sesi1Section() {
  return (
    <section 
      id="sesi1"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950"
    >
      {/* Orb Background */}
      <div className="absolute inset-0 w-full h-full">
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
      </div>

      {/* Sophisticated Overlays - lebih subtle untuk Orb */}
      <div className="absolute inset-0 bg-linear-to-b from-slate-950/30 via-transparent to-slate-950/60" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(15,23,42,0.4)_100%)]" />

      {/* Content dengan glow effect yang cocok dengan Orb */}
      <div className="relative z-10 text-center px-8 max-w-6xl">
        
        {/* Main Title dengan soft glow */}
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
            <span className="block text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
              Untuk Apa
            </span>
            <span className="block bg-linear-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent drop-shadow-[0_0_50px_rgba(251,146,60,0.5)]">
              Kamu Kuliah?
            </span>
          </motion.h1>
        </motion.div>

      </div>

      {/* Bottom gradient untuk smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-slate-950 to-transparent pointer-events-none" />
    </section>
  )
}