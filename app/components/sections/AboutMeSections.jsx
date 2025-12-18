'use client'

import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Github, Linkedin, Mail } from 'lucide-react'
import dynamic from 'next/dynamic'
import Image from 'next/image'

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
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 h-full flex items-center py-8">
        
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Left Side: Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glowing Background Effect */}
              <div className="absolute inset-0 bg-linear-to-br from-purple-500/30 via-pink-500/30 to-purple-500/30 blur-3xl" />
              
              {/* Photo Container */}
              <div className="relative w-64 h-80 md:w-72 md:h-96 lg:w-80 lg:h-112">
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-purple-500 via-pink-500 to-purple-600 animate-gradient-shift p-1">
                  <div className="w-full h-full bg-slate-900 rounded-3xl overflow-hidden">
                    {/* Your Half Body Photo - PNG with transparent background */}
                    <Image 
                      src="/images/profile-half.png" 
                      alt="Raka Gian Aditya Asbath"
                      fill
                      sizes="16rem"
                      className="object-cover object-top"
                      priority
                    />
                  </div>
                </div>
                
                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="absolute -bottom-4 -right-4 bg-linear-to-br from-purple-500 to-pink-500 rounded-2xl px-4 py-2 shadow-lg"
                >
                  <p className="text-white font-bold text-sm">Day 1 jadi pemateri</p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <div className="lg:col-span-8 space-y-4">
            
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Tentang Saya
              </h2>
              <div className="w-20 h-1 bg-linear-to-r from-purple-500 to-pink-500 rounded-full mb-3" />
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                Raka Gian Aditya Asbath
              </h3>
              <p className="text-lg text-purple-300 mb-2">
                Software Developer | Fullstack Engineer
              </p>
              <p className="text-sm text-gray-300 max-w-2xl">
                Developer yang berfokus pada <span className="text-purple-400 font-semibold">Fullstack Web Development</span> dan <span className="text-pink-400 font-semibold">Machine Learning</span>
              </p>
              
              {/* Contact Buttons */}
              <div className="flex flex-wrap gap-2 mt-3">
                <a 
                  href="mailto:rakagian107@gmail.com"
                  className="flex items-center gap-2 px-3 py-1.5 bg-purple-500/20 hover:bg-purple-500/40 border border-purple-500/50 rounded-lg text-white transition-all hover:scale-105 text-xs"
                >
                  <Mail className="w-3 h-3" />
                  <span>rakagian107@gmail.com</span>
                </a>
                <a 
                  href="https://linkedin.com/in/rakagiann/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 bg-blue-500/20 hover:bg-blue-500/40 border border-blue-500/50 rounded-lg text-white transition-all hover:scale-105 text-xs"
                >
                  <Linkedin className="w-3 h-3" />
                  <span>linkedin.com/in/rakagiann/</span>
                </a>
                <a 
                  href="https://github.com/rakagiann"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 bg-gray-500/20 hover:bg-gray-500/40 border border-gray-500/50 rounded-lg text-white transition-all hover:scale-105 text-xs"
                >
                  <Github className="w-3 h-3" />
                  <span>github.com/Rakagian24</span>
                </a>
              </div>
            </motion.div>

            {/* Experience & Organization Grid */}
            <div className="grid md:grid-cols-2 gap-3">
              
              {/* Experience */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-3"
              >
                <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-purple-400" />
                  Pengalaman
                </h3>
                <div className="space-y-2 max-h-[260px] overflow-y-auto pr-2 custom-scrollbar">
                  <div className="bg-white/5 border border-white/10 rounded-lg p-2.5 hover:bg-white/10 transition-all">
                    <h4 className="text-xs font-bold text-purple-300">Fullstack Web Developer</h4>
                    <p className="text-xs text-blue-300">PT Singa Global Tekstil</p>
                    <p className="text-xs text-gray-400">Jul 2025 - Sekarang</p>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-lg p-2.5 hover:bg-white/10 transition-all">
                    <h4 className="text-xs font-bold text-purple-300">Fullstack Web Developer Trainee</h4>
                    <p className="text-xs text-blue-300">Luar Sekolah Bootcamp</p>
                    <p className="text-xs text-gray-400">Feb 2025 - Jun 2025</p>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-lg p-2.5 hover:bg-white/10 transition-all">
                    <h4 className="text-xs font-bold text-purple-300">IT Programmer Freelance</h4>
                    <p className="text-xs text-blue-300">PT Maha Kreasi Indonesia</p>
                    <p className="text-xs text-gray-400">Jul 2024 - Feb 2025</p>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-lg p-2.5 hover:bg-white/10 transition-all">
                    <h4 className="text-xs font-bold text-purple-300">Web Developer Intern</h4>
                    <p className="text-xs text-blue-300">Dinas Perumahan dan Kawasan Permukiman</p>
                    <p className="text-xs text-gray-400">Mei 2024 - Agu 2024</p>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-lg p-2.5 hover:bg-white/10 transition-all">
                    <h4 className="text-xs font-bold text-purple-300">Machine Learning Path Cohort</h4>
                    <p className="text-xs text-blue-300">Bangkit Academy 2023</p>
                    <p className="text-xs text-gray-400">Agu 2023 - Jan 2024</p>
                  </div>
                </div>
              </motion.div>

              {/* Organization */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-3"
              >
                <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-pink-400" />
                  Organisasi
                </h3>
                <div className="space-y-2 max-h-[260px] overflow-y-auto pr-2 custom-scrollbar">
                  <div className="bg-white/5 border border-white/10 rounded-lg p-2.5 hover:bg-white/10 transition-all">
                    <div className="flex items-start gap-2 mb-1">
                      <div className="text-xl">🏛️</div>
                      <div className="flex-1">
                        <h4 className="text-xs font-bold text-purple-300">Ketua Umum</h4>
                        <p className="text-xs text-blue-300">Dewan Perwakilan Mahasiswa Fakultas Teknik</p>
                        <p className="text-xs text-gray-400">2023 - 2024</p>
                      </div>
                    </div>
                    <ul className="text-xs text-gray-300 space-y-0.5 list-disc list-inside ml-1">
                      <li>Memimpin fungsi legislatif dan pengambilan keputusan</li>
                      <li>Meningkatkan transparansi pengelolaan anggaran</li>
                    </ul>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-lg p-2.5 hover:bg-white/10 transition-all">
                    <div className="flex items-start gap-2 mb-1">
                      <div className="text-xl">👥</div>
                      <div className="flex-1">
                        <h4 className="text-xs font-bold text-purple-300">Anggota PSDM</h4>
                        <p className="text-xs text-blue-300">Himpunan Mahasiswa Jurusan Informatika</p>
                        <p className="text-xs text-gray-400">2022 - 2023</p>
                      </div>
                    </div>
                    <ul className="text-xs text-gray-300 space-y-0.5 list-disc list-inside ml-1">
                      <li>Merancang program pelatihan mahasiswa</li>
                      <li>Mengelola SDM dan evaluasi kinerja</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-slate-900 to-transparent pointer-events-none" />

      {/* Custom Styles */}
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
        
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 4s ease infinite;
        }
      `}</style>
    </section>
  )
}