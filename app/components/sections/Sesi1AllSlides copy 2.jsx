import { motion } from 'framer-motion'
import { Users, MessageCircleQuestion, GraduationCap, Sparkles, Target, TrendingUp, Activity, Award, Zap, AlertCircle, Brain, XCircle, CheckCircle } from 'lucide-react'

// CSS Background Component
const AnimatedBackground = ({ variant = 'default' }) => {
  const backgrounds = {
    default: 'bg-linear-to-br from-slate-900 via-purple-900 to-slate-900',
    purple: 'bg-linear-to-br from-purple-900 via-pink-900 to-slate-900',
    blue: 'bg-linear-to-br from-blue-900 via-slate-900 to-purple-900',
    dark: 'bg-linear-to-br from-black via-slate-900 to-black'
  }
  
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className={`absolute inset-0 ${backgrounds[variant]}`} />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDuration: '7s' }} />
        <div className="absolute top-1/3 -right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '4s' }} />
      </div>
    </div>
  )
}

// ====================
// SLIDE 1: Realita Mahasiswa Baru
// ====================
export function Slide1RealitaMahasiswaBaru() {
  return (
    <section
      id="sesi1-realita"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      <AnimatedBackground variant="default" />
      <div className="absolute inset-0 bg-linear-to-b from-slate-900/60 via-transparent to-slate-900/70" />

      <div className="relative z-10 text-center px-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Users className="w-16 h-16 mx-auto mb-6 text-purple-400" />
          <h2 className="text-6xl font-black mb-8 text-white drop-shadow-2xl">
            Realita Mahasiswa Baru
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { emoji: '😵‍💫', text: 'Bingung mau ngapain' },
              { emoji: '🤷‍♂️', text: 'Lost & Ikut Arus' },
              { emoji: '❓', text: 'Tidak ada arah jelas' }
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
                <p className="text-xl text-white font-semibold">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ====================
// SLIDE 2: Untuk Apa Kamu Kuliah?
// ====================
export function Slide2UntukApaKuliahStatement() {
  return (
    <section
      id="sesi1-untuk-apa"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black"
    >
      <AnimatedBackground variant="dark" />

      <div className="relative z-10 text-center px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <MessageCircleQuestion className="w-20 h-20 mx-auto mb-8 text-purple-400 animate-pulse" />

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-7xl md:text-8xl font-black mb-6"
          >
            <span className="block text-white mb-4">Untuk Apa</span>
            <span className="block bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Kamu Kuliah?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl text-gray-300 mt-8 italic"
          >
            Pertanyaan fundamental yang harus kamu jawab...
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

// ====================
// SLIDE 3: Kuliah itu Penting nggak?
// ====================
export function Slide3KuliahPenting() {
  return (
    <section
      id="sesi1-penting"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950"
    >
      <AnimatedBackground variant="blue" />

      <div className="relative z-10 text-center px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <GraduationCap className="w-16 h-16 mx-auto mb-6 text-blue-400" />

          <h2 className="text-6xl font-black mb-12 text-white">
            Kuliah itu Penting nggak?
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 bg-red-500/20 border-2 border-red-500/50 rounded-2xl"
            >
              <h3 className="text-3xl font-bold text-red-300 mb-4">BUKAN tentang:</h3>
              <ul className="text-left text-gray-200 space-y-2 text-lg">
                <li>❌ Hadir di kelas</li>
                <li>❌ Mengerjakan tugas</li>
                <li>❌ Mengejar nilai</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 bg-green-500/20 border-2 border-green-500/50 rounded-2xl"
            >
              <h3 className="text-3xl font-bold text-green-300 mb-4">TAPI tentang:</h3>
              <ul className="text-left text-gray-200 space-y-2 text-lg">
                <li>✅ Akses & Kesempatan</li>
                <li>✅ Komunitas & Jaringan</li>
                <li>✅ Fasilitas & Mentor</li>
                <li>✅ Ruang Berkembang</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ====================
// SLIDE 4: Kuliah sebagai Privilege
// ====================
export function Slide4Privilege() {
  return (
    <section
      id="sesi1-privilege"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-slate-900"
    >
      <AnimatedBackground variant="purple" />
      <div className="absolute inset-0 bg-linear-to-b from-slate-900/70 via-slate-900/40 to-slate-900/80" />

      <div className="relative z-10 text-center px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Sparkles className="w-16 h-16 mx-auto mb-6 text-yellow-400 animate-pulse" />

          <h2 className="text-6xl font-black mb-6 bg-linear-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">
            Kuliah = Privilege
          </h2>

          <p className="text-2xl text-white mb-12 max-w-3xl mx-auto">
            Tidak semua orang mendapat kesempatan ini
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: '🎯', text: 'Akses Ilmu' },
              { icon: '🤝', text: 'Networking' },
              { icon: '🏆', text: 'Reputasi' },
              { icon: '🚀', text: 'Peluang Besar' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <p className="text-white font-semibold">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ====================
// SLIDE 5: Kuliah sebagai Wadah Pengembangan
// ====================
export function Slide5WadahPengembangan() {
  return (
    <section
      id="sesi1-wadah"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950"
    >
      <AnimatedBackground variant="default" />
      <div className="absolute inset-0 bg-linear-to-b from-slate-950/60 via-transparent to-slate-950/70" />

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
// SLIDE 6: Tujuan Perguruan Tinggi
// ====================
export function Slide6TujuanPerguruanTinggi() {
  return (
    <section
      id="sesi1-tujuan-pt"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      <AnimatedBackground variant="blue" />
      <div className="absolute inset-0 bg-slate-900/50" />

      <div className="relative z-10 text-center px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <TrendingUp className="w-16 h-16 mx-auto mb-6 text-blue-400" />

          <h2 className="text-6xl font-black mb-12 text-white">
            Tujuan Perguruan Tinggi
          </h2>

          <div className="space-y-6 max-w-4xl mx-auto">
            {[
              { num: '1', text: 'Mengembangkan kemampuan berpikir kritis & analitis' },
              { num: '2', text: 'Mempersiapkan profesional yang kompeten' },
              { num: '3', text: 'Membangun karakter & etika' },
              { num: '4', text: 'Menciptakan inovasi untuk masyarakat' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="flex items-start gap-4 p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl"
              >
                <div className="shrink-0 w-12 h-12 bg-linear-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {item.num}
                </div>
                <p className="text-left text-xl text-white font-medium flex-1">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ====================
// SLIDE 7: Self Awareness
// ====================
export function Slide7SelfAwareness() {
  return (
    <section
      id="sesi1-self-awareness"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-slate-900"
    >
      <AnimatedBackground variant="purple" />
      <div className="absolute inset-0 bg-linear-to-b from-slate-900/70 via-slate-900/40 to-slate-900/80" />

      <div className="relative z-10 text-center px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Brain className="w-16 h-16 mx-auto mb-6 text-purple-400" />

          <h2 className="text-6xl font-black mb-6 bg-linear-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
            Self Awareness
          </h2>

          <p className="text-2xl text-white mb-12">
            Kenali Potensi Dirimu
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Kekuatan',
                items: ['Apa yang kamu kuasai?', 'Apa yang kamu sukai?', 'Apa yang bikin kamu excited?']
              },
              {
                title: 'Area Pengembangan',
                items: ['Apa yang belum kamu pahami?', 'Skill apa yang perlu ditingkatkan?', 'Apa yang ingin kamu pelajari?']
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
                <h3 className="text-3xl font-bold text-purple-300 mb-6">{col.title}</h3>
                <ul className="space-y-3 text-left">
                  {col.items.map((item, i) => (
                    <li key={i} className="text-lg text-gray-200 flex items-start gap-2">
                      <span className="text-purple-400">→</span>
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
// SLIDE 8: Aktivitas yang Harus Dilakukan
// ====================
export function Slide8Aktivitas() {
  return (
    <section
      id="sesi1-aktivitas"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black"
    >
      <AnimatedBackground variant="dark" />

      <div className="relative z-10 text-center px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Activity className="w-16 h-16 mx-auto mb-6 text-blue-400" />

          <h2 className="text-5xl font-black mb-12 text-white">
            Aktivitas yang Harus Dilakukan
            <span className="block text-3xl text-purple-300 mt-2">Selama Kuliah</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { icon: '📚', title: 'Akademik', desc: 'Belajar konsisten, riset, tugas akhir berkualitas' },
              { icon: '🎯', title: 'Organisasi', desc: 'Leadership, teamwork, problem solving' },
              { icon: '🏆', title: 'Kompetisi', desc: 'PKM, lomba, hackathon, olimpiade' },
              { icon: '💼', title: 'Magang', desc: 'Pengalaman industri, networking profesional' },
              { icon: '🚀', title: 'Project', desc: 'Portfolio, side project, open source' },
              { icon: '🤝', title: 'Networking', desc: 'Alumni, dosen, komunitas, mentor' }
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
      <AnimatedBackground variant="default" />

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
      <AnimatedBackground variant="purple" />

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
      <AnimatedBackground variant="default" />
      <div className="absolute inset-0 bg-linear-to-b from-slate-900/70 via-slate-900/40 to-slate-900/80" />

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
export default function Sesi1AllSlides() {
  return (
    <>
      <Slide1RealitaMahasiswaBaru />
      <Slide2UntukApaKuliahStatement />
      <Slide3KuliahPenting />
      <Slide4Privilege />
      <Slide5WadahPengembangan />
      <Slide6TujuanPerguruanTinggi />
      <Slide7SelfAwareness />
      <Slide8Aktivitas />
      <Slide9PeluangBesar />
      <Slide10GrowthMindset />
      <Slide11Mitos />
    </>
  )
}