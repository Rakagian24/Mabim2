'use client'

import { motion } from 'framer-motion'
// import { Sparkles, Zap } from 'lucide-react'
import dynamic from 'next/dynamic'

// Dynamic import Silk to avoid SSR issues
const Silk = dynamic(() => import('@/components/Silk'), { ssr: false })

export default function HeroSection() {

//   const scrollToNext = () => {
//     const aboutSection = document.getElementById('about')
//     aboutSection?.scrollIntoView({ behavior: 'smooth', block: 'start' })
//   }

  return (
    <section 
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Silk Background */}
      <div className="absolute inset-0 w-full h-full">
        <Silk
            speed={5}
            scale={1}
            color="#6366f1"
            noiseIntensity={1.5}
            rotation={0}
        />
      </div>

      {/* Gradient Overlays untuk blend dengan silk */}
      <div className="absolute inset-0 bg-linear-to-b from-slate-900/50 via-transparent to-slate-900/70" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-transparent via-purple-900/30 to-slate-900/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-8 max-w-6xl">
        
        {/* Floating Badge */}
        {/* <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block mb-8"
        >
          <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg">
            <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
            <span className="text-sm font-medium text-white">
              Seminar Mahasiswa Baru 2025
            </span>
            <Zap className="w-4 h-4 text-blue-400 animate-pulse" />
          </div>
        </motion.div> */}

        {/* Main Title with Stagger Animation */}
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
            <span className="block text-white">
              Optimize Your
            </span>
            <span className="block bg-linear-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Campus Life ✨
            </span>
          </motion.h1>
        </motion.div>

        {/* Subtitle with Blur In Effect */}
        <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-xl md:text-2xl text-blue-100 mb-12 font-medium max-w-2xl mx-auto leading-relaxed text-center"
      >
        <span className="text-cyan-300 font-semibold">Menyadari</span>, <span className="text-cyan-300 font-semibold">Memilih</span>, dan <span className="text-cyan-300 font-semibold">Membangun dirimu</span> selama kuliah!
      </motion.p>

        {/* CTA Buttons */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-wrap gap-4 justify-center items-center"
        >
          <motion.button
            onClick={scrollToNext}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-linear-to-r from-blue-500 to-purple-600 rounded-full font-semibold text-white shadow-xl shadow-purple-500/50 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Mulai Perjalanan
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
            <motion.div
              className="absolute inset-0 bg-linear-to-r from-purple-600 to-pink-600"
              initial={{ x: '100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 rounded-full font-semibold text-white hover:bg-white/20 transition-all duration-300 shadow-lg"
          >
            Lihat Materi
          </motion.button>
        </motion.div> */}

        {/* Stats/Info Cards */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-16 grid grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          {[
            { label: 'Sesi', value: '3', icon: '📚' },
            { label: 'Topik', value: '19', icon: '💡' },
            { label: 'Menit', value: '90', icon: '⏱️' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-200">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div> */}

        {/* Scroll Indicator */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToNext}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-gray-200 hover:text-white transition-colors group"
          >
            <ChevronDown className="w-8 h-8 group-hover:text-purple-300 transition-colors" />
            <span className="text-sm drop-shadow-lg">Scroll atau tekan ↓</span>
          </motion.button>
        </motion.div> */}
      </div>

      {/* Bottom gradient untuk smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-slate-900 to-transparent pointer-events-none" />
    </section>
  )
}