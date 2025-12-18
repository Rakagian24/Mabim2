'use client'

import { motion } from 'framer-motion'
import { Sparkles, Target, Award, Zap, Brain, XCircle, CheckCircle, Compass, Activity, TrendingUp, AlertCircle } from 'lucide-react'
import dynamic from 'next/dynamic'

// Dynamic imports untuk semua backgrounds
const DotGrid = dynamic(() => import('@/components/DotGrid'), { ssr: false })

// ====================
// SLIDE 17: Kenapa Informatika Luas?
// ====================
export function Slide1KenapaInformatikaLuas() {
  return (
    <section
      id="sesi2-luas"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
        <DotGrid
          dotSize={10}
          gap={15}
          baseColor="#271e37"
          activeColor="#5227FF"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-slate-900/60 via-transparent to-slate-900/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Compass className="w-16 h-16 mx-auto mb-6 text-purple-400" />

          <h2 className="text-6xl font-black mb-8 text-white drop-shadow-2xl">
            Kenapa Informatika Luas?
          </h2>

          <p className="text-2xl text-gray-200 mb-12">
            Perbedaan: CS, SI, IF
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { title: 'Computer Science (CS)', desc: 'Teori & algoritma mendalam', color: 'from-blue-500 to-blue-600' },
              { title: 'Sistem Informasi (SI)', desc: 'Bisnis & implementasi sistem', color: 'from-purple-500 to-purple-600' },
              { title: 'Informatika (IF)', desc: 'Praktis & aplikasi langsung', color: 'from-pink-500 to-pink-600' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className={`p-6 bg-linear-to-br ${item.color} bg-opacity-20 backdrop-blur-md border border-white/20 rounded-2xl`}
              >
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-lg text-gray-200">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ====================
// SLIDE 18: Gambaran Besar IF = SDLC
// ====================
export function Slide2GambaranBesarSDLC() {
  return (
    <section
      id="sesi2-sdlc"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
        <DotGrid
          dotSize={10}
          gap={15}
          baseColor="#271e37"
          activeColor="#5227FF"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <TrendingUp className="w-20 h-20 mx-auto mb-8 text-blue-400" />

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-6xl md:text-7xl font-black mb-6 text-white"
          >
            Gambaran Besar IF
            <span className="block bg-linear-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              = SDLC
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl text-gray-300 mt-8 mb-12 italic"
          >
            Bukan untuk jadi spesialis, tapi mengerti ekosistem
          </motion.p>

          <div className="grid md:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {[
              { num: '1', label: 'Plan', icon: '📋' },
              { num: '2', label: 'Design', icon: '🎨' },
              { num: '3', label: 'Develop', icon: '💻' },
              { num: '4', label: 'Test', icon: '🧪' },
              { num: '5', label: 'Deploy', icon: '🚀' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl"
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="text-sm text-gray-300 mb-2">{item.label}</p>
                <div className="w-8 h-8 bg-blue-500/30 rounded-full flex items-center justify-center mx-auto text-white font-bold">
                  {item.num}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ====================
// SLIDE 19: Perkenalan Bidang-Bidang Informatika
// ====================
export function Slide3BidangInformatika() {
  return (
    <section
      id="sesi2-bidang"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950"
    >
      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
        <DotGrid
          dotSize={10}
          gap={15}
          baseColor="#271e37"
          activeColor="#5227FF"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Sparkles className="w-16 h-16 mx-auto mb-6 text-yellow-400" />

          <h2 className="text-6xl font-black mb-12 text-white">
            Bidang-Bidang Informatika
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { icon: '💻', title: 'Programming', desc: 'Membuat aplikasi & software' },
              { icon: '📊', title: 'Data', desc: 'Analisis & machine learning' },
              { icon: '🎨', title: 'Design', desc: 'UI/UX & visual' },
              { icon: '⚙️', title: 'Infrastruktur', desc: 'DevOps & cloud' },
              { icon: '🔒', title: 'Keamanan', desc: 'Cybersecurity & protection' },
              { icon: '🌐', title: 'Lainnya', desc: 'Game dev, IoT, AI, dll' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ====================
// SLIDE 20: Cocokan Dirimu
// ====================
export function Slide4CocokanDirimu() {
  return (
    <section
      id="sesi2-cocokan"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-slate-900"
    >
      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
        <DotGrid
          dotSize={10}
          gap={15}
          baseColor="#271e37"
          activeColor="#5227FF"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      <div className="absolute inset-0 bg-linear-to-b from-slate-900/70 via-slate-900/40 to-slate-900/80" />

      {/* Content */}
      <div className="relative z-10 text-center px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Target className="w-16 h-16 mx-auto mb-6 text-cyan-400 animate-pulse" />

          <h2 className="text-6xl font-black mb-6 bg-linear-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
            Cocokan Dirimu
          </h2>

          <p className="text-2xl text-white mb-12 max-w-3xl mx-auto">
            Mapping sifat → jurusan/bidang
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { sifat: '🔍 Teliti & Detail', bidang: 'QA, Testing, Security' },
              { sifat: '🚀 Suka Eksplorasi', bidang: 'Development, Research' },
              { sifat: '🎨 Kreatif & Visual', bidang: 'UI/UX, Design, Frontend' },
              { sifat: '📊 Analitis & Logis', bidang: 'Data, Backend, Infra' },
              { sifat: '💬 Komunikatif', bidang: 'PM, Leadership, DevRel' },
              { sifat: '🔧 Problem Solver', bidang: 'DevOps, System Design' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl"
              >
                <p className="text-2xl font-bold text-white mb-2">{item.sifat}</p>
                <p className="text-lg text-cyan-200">→ {item.bidang}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ====================
// SLIDE 5: Contoh Pemetaan
// ====================
export function Slide5ContohPemetaan() {
  return (
    <section
      id="sesi1-wadah"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950"
    >
      {/* Aurora Background */}
      <div className="absolute inset-0 w-full h-full">
        <DotGrid
          dotSize={10}
          gap={15}
          baseColor="#271e37"
          activeColor="#5227FF"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      <div className="absolute inset-0 bg-linear-to-b from-slate-950/60 via-transparent to-slate-950/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Target className="w-16 h-16 mx-auto mb-6 text-purple-400" />

          <h2 className="text-6xl font-black mb-8 text-white">
            Kuliah sebagai Wadah
            <span className="block bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Pengembangan Potensi
            </span>
          </h2>

          <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
            Ruang bermain yang lebih luas untuk eksplor kemampuan diri
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Akademik', items: ['Riset', 'Tugas Akhir', 'Publikasi'] },
              { title: 'Non-Akademik', items: ['Organisasi', 'Kompetisi', 'Volunteer'] },
              { title: 'Networking', items: ['Dosen', 'Alumni', 'Industri'] }
            ].map((col, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl"
              >
                <h3 className="text-2xl font-bold text-purple-300 mb-4">{col.title}</h3>
                <ul className="space-y-2 text-gray-200">
                  {col.items.map((item, i) => (
                    <li key={i} className="text-lg">• {item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ====================
// SLIDE 22: T-Shaped Talent
// ====================
export function Slide6TShaped() {
  return (
    <section
      id="sesi2-tshaped"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
        <DotGrid
          dotSize={10}
          gap={15}
          baseColor="#271e37"
          activeColor="#5227FF"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      <div className="absolute inset-0 bg-slate-900/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Award className="w-16 h-16 mx-auto mb-6 text-green-400" />

          <h2 className="text-6xl font-black mb-12 text-white">
            T-Shaped Talent
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
            {/* Visualisasi T */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center gap-6"
            >
              <div className="w-full h-16 bg-linear-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <p className="text-white font-bold text-lg">Keluasan (Horizontal)</p>
              </div>
              <div className="w-2 h-32 bg-linear-to-b from-blue-500 to-green-500 rounded-full"></div>
              <div className="w-32 h-16 bg-linear-to-b from-green-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <p className="text-white font-bold">Kedalaman</p>
              </div>
            </motion.div>

            {/* Penjelasan */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-left space-y-6"
            >
              <div className="p-6 bg-blue-500/20 border border-blue-500/30 rounded-xl">
                <h3 className="text-2xl font-bold text-blue-300 mb-2">Horizontal (Keluasan)</h3>
                <p className="text-gray-200">Pahami banyak bidang: Programming, Data, Design, Infra, Security</p>
              </div>
              <div className="p-6 bg-green-500/20 border border-green-500/30 rounded-xl">
                <h3 className="text-2xl font-bold text-green-300 mb-2">Vertical (Kedalaman)</h3>
                <p className="text-gray-200">Kuasai satu bidang dengan mendalam: menjadi expert</p>
              </div>
              <div className="p-6 bg-purple-500/20 border border-purple-500/30 rounded-xl">
                <h3 className="text-2xl font-bold text-purple-300 mb-2">Tujuan</h3>
                <p className="text-gray-200">Pahami banyak, kuasai satu → valuable & flexible</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ====================
// SLIDE 23: Explore First, Specialize Later
// ====================
export function Slide7ExplorFirst() {
  return (
    <section
      id="sesi2-explor-first"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-slate-900"
    >
      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
        <DotGrid
          dotSize={10}
          gap={15}
          baseColor="#271e37"
          activeColor="#5227FF"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      <div className="absolute inset-0 bg-linear-to-b from-slate-900/70 via-slate-900/40 to-slate-900/80" />

      {/* Content */}
      <div className="relative z-10 text-center px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Compass className="w-16 h-16 mx-auto mb-6 text-pink-400" />

          <h2 className="text-6xl font-black mb-6 bg-linear-to-r from-pink-300 to-orange-300 bg-clip-text text-transparent">
            Explore First, Specialize Later
          </h2>

          <p className="text-2xl text-white mb-12">
            Jangan terburu-buru memilih
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                phase: '📚 Fase 1-2: Eksplorasi',
                items: ['Coba berbagai bidang', 'Ikut workshop & seminar', 'Buat mini project', 'Networking dengan senior']
              },
              {
                phase: '🎯 Fase 3-4: Spesialisasi',
                items: ['Pilih bidang favorit', 'Dalami dengan mendalam', 'Build portfolio', 'Siap kerja/lanjut studi']
              }
            ].map((col, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl"
              >
                <h3 className="text-3xl font-bold text-pink-300 mb-6">{col.phase}</h3>
                <ul className="space-y-3 text-left">
                  {col.items.map((item, i) => (
                    <li key={i} className="text-lg text-gray-200 flex items-start gap-2">
                      <span className="text-pink-400">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ====================
// SLIDE 24: Cara Eksplorasi Selama Kuliah
// ====================
export function Slide8CaraEksplorasi() {
  return (
    <section
      id="sesi2-cara-eksplorasi"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
        <DotGrid
          dotSize={10}
          gap={15}
          baseColor="#271e37"
          activeColor="#5227FF"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Activity className="w-16 h-16 mx-auto mb-6 text-green-400" />

          <h2 className="text-5xl font-black mb-12 text-white">
            Cara Eksplorasi Selama Kuliah
            <span className="block text-3xl text-green-300 mt-2">Roadmap Praktis</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { icon: '�', title: 'Coba Mini Project', desc: 'Buat project kecil di setiap bidang yang menarik' },
              { icon: '�', title: 'Ikut Workshop', desc: 'Hadiri workshop, seminar, dan talk dari praktisi' },
              { icon: '👥', title: 'Networking', desc: 'Tanya senior, mentor, dan profesional di bidang itu' },
              { icon: '�', title: 'Baca & Belajar', desc: 'Ikuti tutorial online, blog, dokumentasi' },
              { icon: '🏆', title: 'Ikut Kompetisi', desc: 'Hackathon, contest, atau challenge di bidang tertentu' },
              { icon: '💼', title: 'Magang/Freelance', desc: 'Dapatkan pengalaman nyata di industri' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 p-6 bg-green-500/10 border border-green-500/30 rounded-xl max-w-3xl mx-auto"
          >
            <p className="text-lg text-white">
              <span className="text-green-300 font-bold">Ingat:</span> Eksplorasi itu proses, bukan tujuan akhir. Setiap percobaan adalah data untuk menemukan passion sejatimu!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// ====================
// SLIDE 9: Contoh Peluang Besar
// ====================
export function Slide9PeluangBesar() {
  return (
    <section
      id="sesi1-peluang"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950"
    >
      {/* DotGrid Background */}
      <div className="absolute inset-0 w-full h-full">
        <DotGrid
          dotSize={10}
          gap={15}
          baseColor="#271e37"
          activeColor="#5227FF"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Award className="w-16 h-16 mx-auto mb-6 text-yellow-400" />

          <h2 className="text-6xl font-black mb-12 text-white">
            Peluang Besar di Kampus
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'PKM',
                subtitle: 'Program Kreativitas Mahasiswa',
                points: ['Pendanaan hingga 20 juta', 'Publikasi ilmiah', 'PIMNAS']
              },
              {
                title: 'Beasiswa',
                subtitle: 'Dalam & Luar Negeri',
                points: ['S1 ke luar negeri', 'Exchange program', 'Research funding']
              },
              {
                title: 'Event Nasional',
                subtitle: 'Kompetisi & Konferensi',
                points: ['Hackathon', 'Business plan', 'Scientific conference']
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="p-8 bg-linear-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-2xl"
              >
                <h3 className="text-3xl font-bold text-purple-300 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{item.subtitle}</p>
                <ul className="space-y-2 text-left">
                  {item.points.map((point, i) => (
                    <li key={i} className="text-white flex items-start gap-2">
                      <Zap className="w-4 h-4 text-yellow-400 shrink-0 mt-1" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ====================
// SLIDE 10: Growth Mindset vs Fixed Mindset
// ====================
export function Slide10GrowthMindset() {
  return (
    <section
      id="sesi1-mindset"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950"
    >
      {/* Squares Background */}
      <div className="absolute inset-0 w-full h-full">
        <DotGrid
          dotSize={10}
          gap={15}
          baseColor="#271e37"
          activeColor="#5227FF"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-8 max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Brain className="w-16 h-16 mx-auto mb-6 text-purple-400" />

          <h2 className="text-6xl font-black mb-4 text-white">
            Growth Mindset
            <span className="text-purple-400"> vs </span>
            Fixed Mindset
          </h2>

          <p className="text-xl text-gray-300 mb-12">
            Cara berpikir yang menentukan kesuksesanmu
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Fixed Mindset */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 bg-red-500/10 border-2 border-red-500/30 rounded-2xl"
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <XCircle className="w-8 h-8 text-red-400" />
                <h3 className="text-3xl font-bold text-red-300">Fixed Mindset</h3>
              </div>

              <div className="space-y-4 text-left">
                {[
                  '"Saya bodoh di ini"',
                  '"Saya tidak berbakat"',
                  '"Saya menyerah"',
                  '"Ini terlalu sulit"',
                  '"Saya takut gagal"'
                ].map((text, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="flex items-start gap-3 p-4 bg-red-500/5 rounded-lg"
                  >
                    <span className="text-red-400 text-xl">✗</span>
                    <p className="text-gray-200 text-lg">{text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Growth Mindset */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 bg-green-500/10 border-2 border-green-500/30 rounded-2xl"
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <CheckCircle className="w-8 h-8 text-green-400" />
                <h3 className="text-3xl font-bold text-green-300">Growth Mindset</h3>
              </div>

              <div className="space-y-4 text-left">
                {[
                  '"Saya belum bisa, tapi bisa dipelajari"',
                  '"Saya bisa berkembang dengan usaha"',
                  '"Ini tantangan untuk belajar"',
                  '"Kesalahan adalah bagian dari proses"',
                  '"Saya terus mencoba sampai berhasil"'
                ].map((text, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="flex items-start gap-3 p-4 bg-green-500/5 rounded-lg"
                  >
                    <span className="text-green-400 text-xl">✓</span>
                    <p className="text-gray-200 text-lg">{text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 p-6 bg-purple-500/10 border border-purple-500/30 rounded-xl"
          >
            <p className="text-xl text-white">
              <span className="text-purple-300 font-bold">Semester 1:</span> Waktunya <span className="text-green-300 font-semibold">mencoba, salah, dan belajar lagi</span> — bukan untuk menjadi sempurna!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// ====================
// SLIDE 11: Mitos & Kesalahpahaman
// ====================
export function Slide11Mitos() {
  const mitos = [
    {
      myth: 'IPK adalah segalanya',
      truth: 'IPK penting, tapi bukan satu-satunya. Skill, pengalaman, dan networking juga krusial.'
    },
    {
      myth: 'Harus langsung tahu minat sejak awal',
      truth: 'Eksplorasi itu normal! Semester 1-2 adalah waktu untuk mencoba berbagai hal.'
    },
    {
      myth: 'Organisasi menggangu kuliah',
      truth: 'Organisasi mengajarkan soft skill yang tidak didapat di kelas: leadership, teamwork, problem solving.'
    },
    {
      myth: 'Magang hanya untuk mahasiswa senior',
      truth: 'Magang bisa dimulai kapan saja. Semakin cepat, semakin banyak pengalaman.'
    },
    {
      myth: 'Sukses harus seperti orang lain',
      truth: 'Setiap orang punya jalur berbeda. Fokus pada progresmu sendiri.'
    }
  ]

  return (
    <section
      id="sesi1-mitos"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* LiquidEther Background - Variant */}
      <div className="absolute inset-0 w-full h-full">
        <DotGrid
          dotSize={10}
          gap={15}
          baseColor="#271e37"
          activeColor="#5227FF"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-slate-900/70 via-slate-900/40 to-slate-900/80" />

      {/* Content */}
      <div className="relative z-10 px-8 max-w-6xl w-full py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <AlertCircle className="w-16 h-16 mx-auto mb-6 text-yellow-400 animate-pulse" />

            <h2 className="text-6xl font-black mb-4 text-white">
              Mitos & Kesalahpahaman
            </h2>

            <p className="text-xl text-gray-200">
              Jangan termakan mitos yang salah!
            </p>
          </div>

          <div className="space-y-6">
            {mitos.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden"
              >
                <div className="grid md:grid-cols-2 divide-x divide-white/10">
                  {/* Mitos */}
                  <div className="p-6 bg-red-500/10">
                    <div className="flex items-start gap-3">
                      <div className="shrink-0 w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center">
                        <XCircle className="w-6 h-6 text-red-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-bold text-red-300 mb-2">MITOS</h3>
                        <p className="text-lg text-white font-semibold">{item.myth}</p>
                      </div>
                    </div>
                  </div>

                  {/* Fakta */}
                  <div className="p-6 bg-green-500/10">
                    <div className="flex items-start gap-3">
                      <div className="shrink-0 w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-green-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-bold text-green-300 mb-2">FAKTA</h3>
                        <p className="text-lg text-white">{item.truth}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 text-center"
          >
            <div className="inline-block p-6 bg-linear-to-r from-purple-500/20 to-pink-500/20 border-2 border-purple-500/40 rounded-2xl">
              <p className="text-2xl font-bold text-white">
                💡 Fokus pada <span className="text-purple-300">proses belajar</span>, bukan hanya <span className="text-pink-300">hasil akhir</span>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// ====================
// Export All Slides
// ====================
export default function Sesi2AllSlides() {
  return (
    <>
      <Slide1KenapaInformatikaLuas />
      <Slide2GambaranBesarSDLC />
      <Slide3BidangInformatika />
      <Slide4CocokanDirimu />
      <Slide5ContohPemetaan />
      <Slide6TShaped />
      <Slide7ExplorFirst />
      <Slide8CaraEksplorasi />
      <Slide9PeluangBesar />
      <Slide10GrowthMindset />
      <Slide11Mitos />
    </>
  )
}