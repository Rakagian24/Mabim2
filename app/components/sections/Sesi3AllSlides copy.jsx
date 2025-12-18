'use client'

import { motion } from 'framer-motion'
import { Sparkles, Brain, TrendingUp, Users, Heart, Briefcase, Star } from 'lucide-react'
import dynamic from 'next/dynamic'

// Dynamic imports untuk semua backgrounds
const Threads = dynamic(() => import('@/components/Threads'), { ssr: false })

// ====================
// SLIDE 25: Kenapa Soft Skill itu Pondasi?
// ====================
export function Slide1KenaPaSoftSkill() {
  return (
    <section
      id="sesi3-kenapa-soft-skill"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
        <Threads
    amplitude={1}
    distance={0}
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
          <Heart className="w-16 h-16 mx-auto mb-6 text-red-400" />

          <h2 className="text-6xl font-black mb-8 text-white drop-shadow-2xl">
            Kenapa Soft Skill itu Pondasi?
          </h2>

          <p className="text-2xl text-gray-200 mb-12">
            Lebih penting dari yang kamu kira
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { emoji: '🤝', text: 'Hubungan & Networking', desc: 'Bangun koneksi yang bermakna' },
              { emoji: '💼', text: 'Karir & Profesional', desc: 'Naik level lebih cepat' },
              { emoji: '🧠', text: 'Kepemimpinan', desc: 'Pengaruh & dampak positif' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl"
              >
                <div className="text-5xl mb-4">{item.emoji}</div>
                <p className="text-xl text-white font-semibold mb-2">{item.text}</p>
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
// SLIDE 26: Hard Skill Tanpa Soft Skill = Tidak Cukup
// ====================
export function Slide2HardVsSoft() {
  return (
    <section
      id="sesi3-hard-vs-soft"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
        <Threads
    amplitude={1}
    distance={0}
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
          <Brain className="w-16 h-16 mx-auto mb-6 text-purple-400" />

          <h2 className="text-6xl font-black mb-6 text-white">
            Hard Skill Tanpa Soft Skill
            <span className="block text-red-400">= Tidak Cukup</span>
          </h2>

          <p className="text-2xl text-gray-300 mb-12">
            Keduanya harus berjalan beriringan
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: '❌ Hard Skill Only',
                items: ['Bisa coding tapi tidak bisa komunikasi', 'Ahli tapi sulit bekerja tim', 'Skill tinggi tapi sering konflik', 'Sulit naik ke posisi leadership']
              },
              {
                title: '✅ Hard + Soft Skill',
                items: ['Bisa coding + bisa jelaskan ke orang lain', 'Ahli dan mudah bekerja tim', 'Skill tinggi + profesional', 'Siap untuk leadership']
              }
            ].map((col, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`p-8 rounded-2xl border-2 ${idx === 0 ? 'bg-red-500/10 border-red-500/30' : 'bg-green-500/10 border-green-500/30'}`}
              >
                <h3 className={`text-3xl font-bold mb-6 ${idx === 0 ? 'text-red-300' : 'text-green-300'}`}>
                  {col.title}
                </h3>
                <ul className="space-y-3 text-left">
                  {col.items.map((item, i) => (
                    <li key={i} className="text-lg text-gray-200 flex items-start gap-2">
                      <span className={idx === 0 ? 'text-red-400' : 'text-green-400'}>→</span>
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
// SLIDE 27: Soft Skill yang Krusial
// ====================
export function Slide3SoftSkillKrusial() {
  return (
    <section
      id="sesi3-soft-skill-krusial"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950"
    >
      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
        <Threads
    amplitude={1}
    distance={0}
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
            Soft Skill yang Krusial
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { icon: '💬', title: 'Komunikasi', desc: 'Jelaskan ide dengan jelas & dengarkan orang lain' },
              { icon: '🎯', title: 'Decision Making', desc: 'Ambil keputusan cepat & bertanggung jawab' },
              { icon: '🤝', title: 'Teamwork', desc: 'Kolaborasi efektif & saling mendukung' },
              { icon: '🧠', title: 'Critical Thinking', desc: 'Analisis masalah & cari solusi kreatif' },
              { icon: '⏰', title: 'Time Management', desc: 'Kelola waktu & prioritas dengan baik' },
              { icon: '🎭', title: 'Adaptasi', desc: 'Fleksibel & cepat belajar hal baru' }
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
// SLIDE 28: Soft Skill yang Bisa Diupgrade Selama Kuliah
// ====================
export function Slide4UpgradeSelama() {
  return (
    <section
      id="sesi3-upgrade-selama"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-slate-900"
    >
      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
        <Threads
    amplitude={1}
    distance={0}
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
          <TrendingUp className="w-16 h-16 mx-auto mb-6 text-blue-400" />

          <h2 className="text-6xl font-black mb-12 text-white">
            Soft Skill yang Bisa Diupgrade
            <span className="block text-blue-300 text-3xl mt-2">Selama Kuliah</span>
          </h2>

          <div className="space-y-6 max-w-4xl mx-auto">
            {[
              { num: '1', activity: 'Organisasi Kampus', skills: 'Leadership, teamwork, decision making' },
              { num: '2', activity: 'Presentasi & Seminar', skills: 'Public speaking, komunikasi' },
              { num: '3', activity: 'Kerja Kelompok', skills: 'Kolaborasi, problem solving' },
              { num: '4', activity: 'Magang/Freelance', skills: 'Profesionalisme, time management' },
              { num: '5', activity: 'Volunteer', skills: 'Empati, tanggung jawab sosial' },
              { num: '6', activity: 'Networking Events', skills: 'Komunikasi, relationship building' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex items-start gap-4 p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl"
              >
                <div className="shrink-0 w-12 h-12 bg-linear-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {item.num}
                </div>
                <div className="text-left flex-1">
                  <p className="text-xl text-white font-bold mb-1">{item.activity}</p>
                  <p className="text-gray-300">{item.skills}</p>
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
// SLIDE 29: Karakter & Etika
// ====================
export function Slide5KarakterEtika() {
  return (
    <section
      id="sesi3-karakter-etika"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950"
    >
      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
        <Threads
    amplitude={1}
    distance={0}
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
          <Heart className="w-16 h-16 mx-auto mb-6 text-pink-400" />

          <h2 className="text-6xl font-black mb-12 text-white">
            Karakter & Etika
          </h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: '🎯 Attitude',
                items: ['Positif & growth mindset', 'Proaktif & inisiatif', 'Humble & mau belajar']
              },
              {
                title: '📋 Tanggung Jawab',
                items: ['Tepat waktu', 'Selesaikan apa yang dijanjikan', 'Akuntabel atas tindakan']
              },
              {
                title: '⚖️ Etika',
                items: ['Jujur & integritas', 'Hormati orang lain', 'Berbuat baik']
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
                <h3 className="text-3xl font-bold text-pink-300 mb-6">{col.title}</h3>
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 p-6 bg-pink-500/10 border border-pink-500/30 rounded-xl max-w-3xl mx-auto"
          >
            <p className="text-lg text-white">
              <span className="text-pink-300 font-bold">Ingat:</span> Karakter & etika adalah fondasi kepercayaan. Orang akan ingat bagaimana kamu memperlakukan mereka, bukan hanya skill kamu.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// ====================
// SLIDE 30: Personal Branding = Kredibilitas
// ====================
export function Slide6PersonalBranding() {
  return (
    <section
      id="sesi3-personal-branding"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
        <Threads
    amplitude={1}
    distance={0}
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
          <Star className="w-16 h-16 mx-auto mb-6 text-yellow-400" />

          <h2 className="text-6xl font-black mb-12 text-white">
            Personal Branding = Kredibilitas
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-left space-y-6"
            >
              <div className="p-6 bg-yellow-500/20 border border-yellow-500/30 rounded-xl">
                <h3 className="text-2xl font-bold text-yellow-300 mb-2">Bukan Pamer</h3>
                <p className="text-gray-200">Personal branding bukan tentang pamer atau narsis. Ini tentang konsistensi, karakter, dan kontribusi nyata.</p>
              </div>
              <div className="p-6 bg-orange-500/20 border border-orange-500/30 rounded-xl">
                <h3 className="text-2xl font-bold text-orange-300 mb-2">Tentang Reputasi</h3>
                <p className="text-gray-200">Apa yang orang ingat tentang dirimu? Bagaimana mereka menceritakan tentang kamu ke orang lain?</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {[
                { emoji: '🎯', text: 'Konsistensi' },
                { emoji: '💼', text: 'Profesionalisme' },
                { emoji: '🤝', text: 'Keandalan' },
                { emoji: '✨', text: 'Kualitas Kerja' }
              ].map((item, idx) => (
                <div key={idx} className="p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg">
                  <p className="text-2xl font-bold text-white">
                    <span className="text-3xl mr-3">{item.emoji}</span>
                    {item.text}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ====================
// SLIDE 31: Bagaimana Membangun Personal Branding
// ====================
export function Slide7MembangunBranding() {
  return (
    <section
      id="sesi3-membangun-branding"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
        <Threads
    amplitude={1}
    distance={0}
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
          <Briefcase className="w-16 h-16 mx-auto mb-6 text-green-400" />

          <h2 className="text-6xl font-black mb-12 text-white">
            Bagaimana Membangun Personal Branding
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { icon: '📝', title: 'Track Record', desc: 'Dokumentasikan pencapaian & project yang kamu buat' },
              { icon: '🎁', title: 'Kontribusi', desc: 'Bantu orang lain, share ilmu, volunteer' },
              { icon: '🎤', title: 'Visibility', desc: 'Tampil di event, share di media sosial, networking' },
              { icon: '⏰', title: 'Konsistensi', desc: 'Lakukan hal baik secara terus-menerus' },
              { icon: '🤝', title: 'Relationship', desc: 'Bangun hubungan baik dengan banyak orang' },
              { icon: '💡', title: 'Value', desc: 'Berikan nilai & manfaat ke orang lain' }
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
// SLIDE 32: Kerja Kelompok = Cerminan Karakter
// ====================
export function Slide8KerjaKelompok() {
  return (
    <section
      id="sesi3-kerja-kelompok"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950"
    >
      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
        <Threads
    amplitude={1}
    distance={0}
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
          <Users className="w-16 h-16 mx-auto mb-6 text-cyan-400" />

          <h2 className="text-6xl font-black mb-12 text-white">
            Kerja Kelompok = Cerminan Karakter
          </h2>

          <p className="text-2xl text-gray-300 mb-12">
            Di sini terlihat siapa kamu sebenarnya
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: '❌ Yang Terlihat Buruk',
                items: ['Tidak ikut berkontribusi', 'Menyalahkan orang lain', 'Tidak mendengarkan pendapat', 'Kabur saat ada masalah', 'Ambil kredit sendiri']
              },
              {
                title: '✅ Yang Terlihat Baik',
                items: ['Aktif berkontribusi', 'Ambil tanggung jawab', 'Dengarkan & hormati pendapat', 'Hadapi masalah bersama', 'Apresiasi kerja tim']
              }
            ].map((col, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className={`p-8 rounded-2xl border-2 ${idx === 0 ? 'bg-red-500/10 border-red-500/30' : 'bg-green-500/10 border-green-500/30'}`}
              >
                <h3 className={`text-3xl font-bold mb-6 ${idx === 0 ? 'text-red-300' : 'text-green-300'}`}>
                  {col.title}
                </h3>
                <ul className="space-y-3 text-left">
                  {col.items.map((item, i) => (
                    <li key={i} className="text-lg text-gray-200 flex items-start gap-2">
                      <span className={idx === 0 ? 'text-red-400' : 'text-green-400'}>→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 p-6 bg-cyan-500/10 border border-cyan-500/30 rounded-xl max-w-3xl mx-auto"
          >
            <p className="text-lg text-white">
              <span className="text-cyan-300 font-bold">Penting:</span> Kerja kelompok adalah kesempatan untuk menunjukkan karakter sejatimu. Orang akan mengenal dirimu dari sini.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// ====================
// Export All Slides
// ====================
export default function Sesi3AllSlides() {
  return (
    <>
      <Slide1KenaPaSoftSkill />
      <Slide2HardVsSoft />
      <Slide3SoftSkillKrusial />
      <Slide4UpgradeSelama />
      <Slide5KarakterEtika />
      <Slide6PersonalBranding />
      <Slide7MembangunBranding />
      <Slide8KerjaKelompok />
    </>
  )
}
