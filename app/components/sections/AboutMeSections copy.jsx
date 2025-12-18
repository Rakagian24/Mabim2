'use client'

import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Github, Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'
import dynamic from 'next/dynamic'

const LightRays = dynamic(() => import('@/components/LightRays'), { ssr: false })

export default function AboutMeSection() {
  
  return (
    <section 
      id="about"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Light Rays Background */}
      <div className="absolute inset-0 w-full h-full">
        <LightRays 
          raysOrigin="top-center"
          raysColor="#8b5cf6"
          raysSpeed={1.5}
          lightSpread={1.2}
          rayLength={2}
          pulsating={true}
          fadeDistance={1.2}
          saturation={1}
          followMouse={true}
          mouseInfluence={0.15}
          noiseAmount={0.1}
          distortion={0.1}
        />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-linear-to-b from-slate-900/80 via-purple-900/50 to-slate-900/80" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 h-full flex flex-col justify-center py-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-center mb-4"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Tentang Saya
            </h2>
            <div className="w-16 h-1 bg-linear-to-r from-purple-500 to-pink-500 rounded-full" />
          </div>
          <div className="text-right">
            <p className="text-lg md:text-xl text-purple-300 font-semibold">Day 1 jadi pemateri</p>
          </div>
        </motion.div>

        {/* Hero Introduction with Profile Photo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center gap-6 mb-5"
        >
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-32 h-32 md:w-40 md:h-40">
              {/* Glowing Ring */}
              <div className="absolute inset-0 rounded-full bg-linear-to-r from-purple-500 via-pink-500 to-purple-500 animate-spin-slow blur-md opacity-75" />
              
              {/* Photo Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 bg-linear-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm">
                {/* Placeholder - Replace with your photo */}
                <Image
                  src="/images/profile-new.jpg"
                  alt="Raka Gian Aditya Asbath"
                  fill
                  sizes="(max-width: 768px) 8rem, 10rem"
                  className="object-none scale-120"
                  style={{ objectPosition: '10% 60%' }} // angka bisa kamu ubah-ubah
                  priority
                />
                {/* Fallback gradient if image not loaded */}
                {/* <div className="absolute inset-0 bg-linear-to-br from-purple-600/30 to-pink-600/30 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white/50">RG</span>
                </div> */}
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">Raka Gian Aditya Asbath</h3>
            <p className="text-lg text-purple-300 mb-2">Software Developer | Fullstack Engineer</p>
            <p className="text-sm text-gray-300 max-w-2xl">
              Developer yang berfokus pada <span className="text-purple-400 font-semibold">Fullstack Web Development</span> dan <span className="text-pink-400 font-semibold">Machine Learning</span>
            </p>
            
            {/* Contact Buttons - Compact */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-3">
              <a 
                href="mailto:rakagian107@gmail.com"
                className="flex items-center gap-2 px-4 py-1.5 bg-purple-500/20 hover:bg-purple-500/40 border border-purple-500/50 rounded-lg text-white transition-all hover:scale-105 text-xs"
              >
                <Mail className="w-3 h-3" />
                <span>rakagian107@gmail.com</span>
              </a>
              <a 
                href="https://linkedin.com/in/rakagiann/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-1.5 bg-blue-500/20 hover:bg-blue-500/40 border border-blue-500/50 rounded-lg text-white transition-all hover:scale-105 text-xs"
              >
                <Linkedin className="w-3 h-3" />
                <span>linkedin.com/in/rakagiann/</span>
              </a>
              <a 
                href="https://github.com/rakagiann"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-1.5 bg-gray-500/20 hover:bg-gray-500/40 border border-gray-500/50 rounded-lg text-white transition-all hover:scale-105 text-xs"
              >
                <Github className="w-3 h-3" />
                <span>github.com/Rakagian24</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Main Content Grid - Experience & Organization */}
        <div className="grid md:grid-cols-2 gap-4">
          
          {/* Left: Experience */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4"
          >
            <h3 className="text-lg font-bold text-white text-center mb-3 flex items-center justify-center gap-2">
              <Briefcase className="w-4 h-4" />
              Pengalaman
            </h3>
            <div className="space-y-2 max-h-[320px] overflow-y-auto pr-2 custom-scrollbar">
              <div className="bg-white/5 border border-white/10 rounded-lg p-3 hover:bg-white/10 transition-all">
                <h4 className="text-xs font-bold text-purple-300 mb-0.5">Fullstack Developer</h4>
                <p className="text-xs text-blue-300 mb-1">PT Singa Global Tekstil</p>
                <p className="text-xs text-gray-400 mb-1">Jul 2025 - Sekarang</p>
                <p className="text-xs text-gray-300">Mengembangkan SEFTI (Sistem Elektronik Finance Terintegrasi) dengan fitur approval OTP/Fingerprint.</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-lg p-3 hover:bg-white/10 transition-all">
                <h4 className="text-xs font-bold text-purple-300 mb-0.5">Fullstack Web Developer Trainee</h4>
                <p className="text-xs text-blue-300 mb-1">Luar Sekolah Bootcamp</p>
                <p className="text-xs text-gray-400 mb-1">Feb 2025 - Jun 2025</p>
                <p className="text-xs text-gray-300">Pelatihan intensif pengembangan web fullstack menggunakan Next.js, Node.js, dan MySQL.</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-lg p-3 hover:bg-white/10 transition-all">
                <h4 className="text-xs font-bold text-purple-300 mb-0.5">IT Programmer Freelance</h4>
                <p className="text-xs text-blue-300 mb-1">PT Maha Kreasi Indonesia</p>
                <p className="text-xs text-gray-400 mb-1">Jul 2024 - Feb 2025</p>
                <p className="text-xs text-gray-300">Menjaga stabilitas sistem dan troubleshooting selama event berlangsung.</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-lg p-3 hover:bg-white/10 transition-all">
                <h4 className="text-xs font-bold text-purple-300 mb-0.5">Web Developer Intern</h4>
                <p className="text-xs text-blue-300 mb-1">Dinas Perumahan dan Kawasan Permukiman</p>
                <p className="text-xs text-gray-400 mb-1">Mei 2024 - Agu 2024</p>
                <p className="text-xs text-gray-300">Analisis sistem dan perancangan aplikasi pengelolaan anggaran dengan metode Agile Scrum.</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-lg p-3 hover:bg-white/10 transition-all">
                <h4 className="text-xs font-bold text-purple-300 mb-0.5">Machine Learning Path Cohort</h4>
                <p className="text-xs text-blue-300 mb-1">Bangkit Academy 2023</p>
                <p className="text-xs text-gray-400 mb-1">Agu 2023 - Jan 2024</p>
                <p className="text-xs text-gray-300">Pelatihan 6 bulan Machine Learning dengan TensorFlow, CNN, dan Transfer Learning.</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Organization */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4"
          >
            <h3 className="text-lg font-bold text-white text-center mb-3 flex items-center justify-center gap-2">
              <GraduationCap className="w-4 h-4" />
              Organisasi
            </h3>
            <div className="space-y-3">
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all">
                <div className="flex items-start gap-2 mb-2">
                  <div className="text-2xl">🏛️</div>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-purple-300 mb-0.5">Ketua Umum</h4>
                    <p className="text-xs text-blue-300 mb-0.5">Dewan Perwakilan Mahasiswa Fakultas Teknik</p>
                    <p className="text-xs text-gray-400 mb-1">2023 - 2024</p>
                  </div>
                </div>
                <ul className="text-xs text-gray-300 space-y-0.5 list-disc list-inside ml-1">
                  <li>Memimpin fungsi legislatif dan pengambilan keputusan strategis fakultas</li>
                  <li>Mengkoordinasikan pertemuan antar anggota DPM dan fakultas</li>
                  <li>Meningkatkan transparansi pengelolaan anggaran dengan pelaporan rutin</li>
                  <li>Menyelenggarakan dengar pendapat untuk kualitas pembelajaran mahasiswa</li>
                </ul>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all">
                <div className="flex items-start gap-2 mb-2">
                  <div className="text-2xl">👥</div>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-purple-300 mb-0.5">Anggota PSDM</h4>
                    <p className="text-xs text-blue-300 mb-0.5">Himpunan Mahasiswa Jurusan Informatika</p>
                    <p className="text-xs text-gray-400 mb-1">2022 - 2023</p>
                  </div>
                </div>
                <ul className="text-xs text-gray-300 space-y-0.5 list-disc list-inside ml-1">
                  <li>Merancang dan mengembangkan program pelatihan untuk mahasiswa</li>
                  <li>Mengelola SDM termasuk rekrutmen, pelatihan, dan evaluasi kinerja</li>
                  <li>Menyelenggarakan kegiatan pengembangan soft skills (kepemimpinan, kerja sama tim)</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-slate-900 to-transparent pointer-events-none" />

      {/* Custom Scrollbar Styles */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(139, 92, 246, 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(139, 92, 246, 0.7);
        }
      `}</style>
    </section>
  )
}