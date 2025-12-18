'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

const Prism = dynamic(() => import('@/components/Prism'), { ssr: false })

export default function ClosingSection() {
  return (
    <section 
      id="closing"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950"
    >
      {/* Prism Background */}
      <div className="absolute inset-0 w-full h-full">
        <Prism
          animationSpeed={0.5}
          colorShift={true}
        />
      </div>

      {/* Stronger dark overlay untuk better contrast */}
      <div className="absolute inset-0 bg-slate-950/70" />
      <div className="absolute inset-0 bg-linear-to-b from-slate-950/60 via-slate-950/40 to-slate-950/70" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(2,6,23,0.7)_100%)]" />

      {/* Content - Compact Version */}
      <div className="relative z-10 text-center px-6 max-w-6xl w-full">
        
        {/* Thank You - Compact */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="block bg-linear-to-r from-purple-300 via-pink-300 to-rose-300 bg-clip-text text-transparent drop-shadow-[0_2px_30px_rgba(0,0,0,0.9)]">
              Terima Kasih
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-white/90 drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)]"
          >
            Sampai jumpa di kesempatan berikutnya
          </motion.p>
        </motion.div>

        {/* Wake Up Call - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="inline-block px-6 py-4 bg-slate-900/80 backdrop-blur-md border-2 border-purple-400/50 rounded-2xl shadow-2xl mb-6">
            <p className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-snug">
              Jangan Sia-siakan
              <span className="block text-transparent bg-linear-to-r from-purple-300 via-pink-300 to-rose-300 bg-clip-text">
                Kesempatanmu di Kampus
              </span>
            </p>
          </div>
          
          {/* <p className="text-base md:text-lg text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)]">
            Entah kamu semester 1 atau sudah senior,
            <span className="text-pink-300 font-semibold"> masih ada waktu </span>
            untuk memulai, memperbaiki, dan 
            <span className="text-rose-300 font-semibold"> memaksimalkan </span>
            perjalananmu
          </p> */}
        </motion.div>

        {/* Call to Action Points - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto"
        >
          {[
            {
              icon: '🎯',
              title: 'Mulai Sekarang',
              desc: 'Tidak ada kata terlambat untuk memulai',
            },
            {
              icon: '🚀',
              title: 'Ambil Aksi',
              desc: 'Pengetahuan tanpa aksi hanya teori',
            },
            {
              icon: '💪',
              title: 'Konsisten',
              desc: 'Progress kecil lebih baik dari diam',
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-4 bg-linear-to-br from-purple-600/40 to-slate-900/80 backdrop-blur-md border border-purple-400/40 rounded-xl shadow-xl"
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <h3 className="text-base font-bold text-white mb-1 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">{item.title}</h3>
              <p className="text-xs text-white/80 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Final Message - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <p className="text-lg md:text-xl font-semibold text-white drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)]">
            Waktumu <span className="text-transparent bg-linear-to-r from-purple-300 to-pink-300 bg-clip-text font-bold">terbatas</span>. 
            Masa kuliahmu <span className="text-transparent bg-linear-to-r from-pink-300 to-rose-300 bg-clip-text font-bold">berharga</span>.
          </p>
          
          <div className="pt-4 border-t border-white/20">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.6 }}
              viewport={{ once: true }}
              className="text-white/70 text-xs md:text-sm drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
            >
              Program Studi Informatika • Universitas Langlangbuana
            </motion.p>
          </div>
        </motion.div>

      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-slate-950 to-transparent pointer-events-none" />
    </section>
  )
}