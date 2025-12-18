'use client'

// import { motion } from 'framer-motion'
import { Sparkles, Award, Heart, Layers, Globe } from 'lucide-react'

// ====================
// SLIDE 1: Title
// ====================
// export function Slide1Title() {
//   return (
//     <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-linear-to-br from-slate-950 via-indigo-950 to-slate-950">
//       <div className="absolute inset-0 opacity-20">
//         <div className="absolute inset-0" style={{
//           backgroundImage: 'radial-gradient(circle, rgba(99, 102, 241, 0.3) 1px, transparent 1px)',
//           backgroundSize: '30px 30px'
//         }} />
//       </div>

//       <div className="relative z-10 text-center px-8 max-w-5xl">
//         <Compass className="w-20 h-20 mx-auto mb-6 text-indigo-400" />
//         <h1 className="text-7xl font-black mb-4 text-white leading-tight">
//           Informatika itu Luas
//         </h1>
//         <div className="h-1 w-48 bg-linear-to-r from-indigo-500 to-purple-500 mx-auto mb-6"></div>
//         <p className="text-2xl text-indigo-300 font-semibold">Temukan Arah & Passionmu</p>
//       </div>
//     </section>
//   )
// }

// ====================
// SLIDE 2: Bidang-Bidang Informatika
// ====================
export function Slide1BidangInformatika() {
  return (
    <section
      id="sesi2-bidang-informatika"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-linear-to-br from-slate-950 via-purple-950 to-slate-950"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(168, 85, 247, 0.5) 35px, rgba(168, 85, 247, 0.5) 70px)',
        }} />
      </div>

      <div className="relative z-10 px-8 max-w-6xl">
        <Sparkles className="w-14 h-14 mx-auto mb-4 text-purple-400" />
        <h2 className="text-5xl font-black mb-4 text-white text-center">Bidang-Bidang di Informatika</h2>
        <p className="text-2xl text-center text-purple-300 font-bold mb-6">&ldquo;Informatika Bukan Hanya Coding!</p>

        <div className="grid grid-cols-4 gap-3 mb-4">
          {[
            { icon: '💻', title: 'Software Dev', desc: 'Frontend, Backend, Mobile' },
            { icon: '🎨', title: 'UI/UX Design', desc: 'User Interface' },
            { icon: '📊', title: 'Data', desc: 'Analyst, Scientist' },
            { icon: '☁️', title: 'Cloud & DevOps', desc: 'Infrastructure' },
            { icon: '🤖', title: 'AI & ML', desc: 'Artificial Intelligence' },
            { icon: '🔐', title: 'Cybersecurity', desc: 'Security & Hacking' },
            { icon: '🎮', title: 'Game Dev', desc: 'Game & Multimedia' },
            { icon: '📋', title: 'PM', desc: 'Project Manager' },
            { icon: '💼', title: 'Business Analyst', desc: 'Process Analysis' },
            { icon: '🧪', title: 'QA', desc: 'Testing & Quality' },
            { icon: '📱', title: 'Mobile Dev', desc: 'iOS, Android' },
            { icon: '🌐', title: 'Dan lainnya', desc: 'IoT, Blockchain' }
          ].map((item, idx) => (
            <div key={idx} className="p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-center">
              <div className="text-3xl mb-1">{item.icon}</div>
              <h3 className="text-sm font-bold text-white mb-0.5">{item.title}</h3>
              <p className="text-gray-300 text-xs">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="p-4 bg-linear-to-r from-purple-500/20 to-pink-500/20 border-2 border-purple-500/40 rounded-xl text-center">
          <p className="text-xl text-white font-bold">
            🚪 Ini bukan pilihan jurusan → <span className="text-yellow-300">dunia dengan banyak pintu!</span>
          </p>
        </div>
      </div>
    </section>
  )
}

// ====================
// SLIDE 3: Kampus Mengajarkan Dasar
// ====================
export function Slide2KampusMengajarkanDasar() {
  return (
    <section
      id="sesi2-kampus-mengajarkan-dasar"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-linear-to-br from-slate-950 via-blue-950 to-slate-950"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.4) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="relative z-10 px-8 max-w-6xl">
        <Award className="w-14 h-14 mx-auto mb-4 text-blue-300" />
        <h2 className="text-5xl font-black mb-4 text-white text-center">Kampus Mengajarkan Dasar</h2>
        <p className="text-2xl text-center text-blue-300 font-bold mb-6">&ldquo;Kuliah = Pondasi, Bukan Spesialisasi</p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-linear-to-br from-blue-500/20 to-cyan-500/20 border-2 border-blue-500/40 rounded-xl">
            <h3 className="text-2xl font-bold text-blue-300 mb-4">Yang Kampus Ajarkan:</h3>
            <ul className="space-y-2">
              {['Algoritma & Logika', 'Pemrograman Dasar', 'Struktur Data', 'Basis Data', 'Networking', 'Analisis Sistem'].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-white">
                  <span className="text-blue-400 shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 p-3 bg-blue-500/20 rounded-lg">
              <p className="text-gray-200 text-xs italic">
                <strong>Tujuan:</strong> Mengenalkan konsep, bukan langsung mahir
              </p>
            </div>
          </div>

          <div className="p-6 bg-linear-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-500/40 rounded-xl">
            <h3 className="text-2xl font-bold text-purple-300 mb-4">Spesialisasi Datang Dari:</h3>
            <div className="space-y-3">
              {[
                { icon: '🔥', title: 'Proyek Pribadi', desc: 'Build your own' },
                { icon: '👥', title: 'Komunitas', desc: 'Join & collaborate' },
                { icon: '📚', title: 'Online Course', desc: 'Deepdive learning' },
                { icon: '💡', title: 'Rasa Ingin Tahu', desc: 'Keep exploring' }
              ].map((item, idx) => (
                <div key={idx} className="p-3 bg-white/10 border border-white/20 rounded-lg flex items-center gap-3">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h4 className="text-sm font-bold text-white">{item.title}</h4>
                    <p className="text-xs text-gray-300">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 p-4 bg-linear-to-r from-yellow-500/20 to-orange-500/20 border-2 border-yellow-500/40 rounded-xl text-center">
          <p className="text-lg text-white font-bold">
            🗺️ Kampus kasih <span className="text-yellow-300">PETA</span>, kamu tentukan <span className="text-green-300">DESTINASI</span>!
          </p>
        </div>
      </div>
    </section>
  )
}

// ====================
// SLIDE 4: T-Shaped Skill
// ====================
export function Slide3TShaped() {
  return (
    <section
      id="sesi2-t-shaped"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-linear-to-br from-slate-900 via-green-900 to-slate-900"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(34, 197, 94, 0.3) 1px, transparent 1px)',
          backgroundSize: '25px 25px'
        }} />
      </div>

      <div className="relative z-10 px-8 max-w-6xl">
        <Layers className="w-14 h-14 mx-auto mb-4 text-green-400" />
        <h2 className="text-5xl font-black mb-4 text-white text-center">T-Shaped Skill</h2>
        <p className="text-2xl text-center text-green-300 font-bold mb-6">&ldquo;Mengerti Banyak, Ahli Minimal Satu&rdquo;</p>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col items-center gap-4">
            <div className="w-full h-16 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
              <p className="text-white font-bold text-lg">━━━ Horizontal (Luas) ━━━</p>
            </div>
            <div className="w-2 h-32 bg-linear-to-b from-blue-500 via-green-500 to-cyan-500 rounded-full"></div>
            <div className="w-32 h-24 bg-linear-to-b from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
              <p className="text-white font-bold text-center text-sm">║<br/>Vertical<br/>(Dalam)</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-linear-to-br from-blue-500/20 to-purple-500/20 border-2 border-blue-500/40 rounded-xl">
              <h3 className="text-xl font-bold text-blue-300 mb-2">Horizontal (━)</h3>
              <p className="text-sm text-gray-200 mb-2">→ Wawasan luas banyak bidang</p>
              <ul className="text-xs text-gray-300 space-y-1">
                <li>• Mengerti dasar teknologi</li>
                <li>• Komunikasi lintas tim</li>
              </ul>
            </div>

            <div className="p-4 bg-linear-to-br from-green-500/20 to-emerald-500/20 border-2 border-green-500/40 rounded-xl">
              <h3 className="text-xl font-bold text-green-300 mb-2">Vertical (║)</h3>
              <p className="text-sm text-gray-200 mb-2">→ Satu bidang didalami</p>
              <ul className="text-xs text-gray-300 space-y-1">
                <li>• Expert di domain spesifik</li>
                <li>• Value tinggi di pasar</li>
              </ul>
            </div>

            <div className="p-4 bg-linear-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-500/40 rounded-xl">
              <h3 className="text-lg font-bold text-purple-300 mb-2">Dunia Kerja Cari:</h3>
              <p className="text-sm text-white">
                <strong className="text-yellow-300">&ldquo;Mengerti banyak&rdquo;</strong> tapi <strong className="text-green-300">&ldquo;ahli minimal satu&rdquo;</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3">
          {[
            { role: 'Backend Engineer', skill: 'paham UI/UX', benefit: 'kolaborasi baik' },
            { role: 'Data Scientist', skill: 'paham Business', benefit: 'solusi relevan' },
            { role: 'Frontend Dev', skill: 'paham Backend', benefit: 'bikin end-to-end' }
          ].map((item, idx) => (
            <div key={idx} className="p-3 bg-white/10 border border-white/20 rounded-lg text-center">
              <p className="text-xs text-white">
                <strong className="text-green-300">{item.role}</strong><br/>
                <span className="text-gray-300">{item.skill}</span><br/>
                <span className="text-yellow-300">→ {item.benefit}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ====================
// SLIDE 5: Menemukan Passion
// ====================
export function Slide4MenemukanPassion() {
  return (
    <section
      id="sesi2-menemukan-passion"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-linear-to-br from-black via-pink-900 to-black"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(236, 72, 153, 0.5) 1px, transparent 0)',
          backgroundSize: '45px 45px',
        }} />
      </div>

      <div className="relative z-10 px-8 max-w-6xl">
        <Heart className="w-14 h-14 mx-auto mb-4 text-pink-400" />
        <h2 className="text-5xl font-black mb-4 text-white text-center">Menemukan Passion</h2>
        <p className="text-2xl text-center text-pink-300 font-bold mb-6">&ldquo;Passion Bukan Ditemukan, tapi Dibangun!&rdquo;</p>

        <div className="grid grid-cols-5 gap-3 mb-6">
          {[
            { num: '1', title: 'MENCOBA', icon: '🔍' },
            { num: '2', title: 'BISA', icon: '💪' },
            { num: '3', title: 'SUKA', icon: '❤️' },
            { num: '4', title: 'KONSISTEN', icon: '🔥' },
            { num: '5', title: 'BERARTI', icon: '✨' }
          ].map((item, idx) => (
            <div key={idx} className="p-4 bg-linear-to-br from-pink-500/20 to-purple-500/20 border-2 border-pink-500/40 rounded-xl text-center">
              <div className="text-3xl mb-2">{item.icon}</div>
              <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-2 mx-auto">
                {item.num}
              </div>
              <h3 className="text-sm font-bold text-pink-300">{item.title}</h3>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="p-5 bg-linear-to-br from-red-500/20 to-orange-500/20 border-2 border-red-500/40 rounded-xl">
            <h3 className="text-2xl font-bold text-red-300 mb-3">❌ BUKAN dari:</h3>
            <ul className="space-y-2 text-sm text-white">
              {['Test kepribadian online', 'Ikut-ikutan teman', 'Tren viral', 'Pilihan orang tua'].map((item, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="text-red-400 shrink-0">✗</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-5 bg-linear-to-br from-green-500/20 to-emerald-500/20 border-2 border-green-500/40 rounded-xl">
            <h3 className="text-2xl font-bold text-green-300 mb-3">✅ ADALAH dari:</h3>
            <ul className="space-y-2 text-sm text-white">
              {['Pengalaman nyata', 'Trial & error', 'Refleksi diri', 'Konsistensi'].map((item, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="text-green-400 shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="p-5 bg-linear-to-br from-purple-500/20 to-blue-500/20 border-2 border-purple-500/40 rounded-xl">
          <h3 className="text-lg font-bold text-purple-300 mb-3 text-center">Cocokkan dengan Karakter:</h3>
          <div className="grid grid-cols-4 gap-2 text-xs">
            {[
              { char: '🎯 Detail', bidang: 'QA/Tester' },
              { char: '🧠 Analitis', bidang: 'BA/Data' },
              { char: '🎨 Kreatif', bidang: 'UI/UX' },
              { char: '🧩 Puzzle', bidang: 'Backend' },
              { char: '📊 Data', bidang: 'Data Sci' },
              { char: '🔐 Security', bidang: 'Cybersec' },
              { char: '👥 Koordinasi', bidang: 'PM' }
            ].map((item, idx) => (
              <div key={idx} className="p-2 bg-white/10 rounded-lg text-center">
                <p className="text-white"><strong className="text-purple-300">{item.char}</strong></p>
                <p className="text-gray-300 text-xs">→ {item.bidang}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ====================
// SLIDE 6: English
// ====================
export function Slide5English() {
  return (
    <section
      id="sesi2-english"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-linear-to-br from-slate-900 via-teal-900 to-slate-900"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(20, 184, 166, 0.5) 35px, rgba(20, 184, 166, 0.5) 70px)',
        }} />
      </div>

      <div className="relative z-10 px-8 max-w-6xl">
        <Globe className="w-14 h-14 mx-auto mb-4 text-teal-300" />
        <h2 className="text-5xl font-black mb-4 text-white text-center">English</h2>
        <p className="text-2xl text-center text-teal-300 font-bold mb-6">&ldquo;English = Kunci Akses Dunia IT&rdquo;</p>

        <div className="grid md:grid-cols-2 gap-4 mb-4">
          {[
            { icon: '📚', title: 'Dokumentasi', desc: '90% dokumentasi teknologi → English' },
            { icon: '💻', title: 'Coding', desc: 'Syntax, error message, library → English' },
            { icon: '🌍', title: 'Networking', desc: 'Open source, remote work → English' },
            { icon: '💼', title: 'Karier', desc: 'Interview global, gaji lebih tinggi' }
          ].map((item, idx) => (
            <div key={idx} className="p-4 bg-linear-to-br from-teal-500/20 to-cyan-500/20 border-2 border-teal-500/40 rounded-xl">
              <div className="text-3xl mb-2">{item.icon}</div>
              <h3 className="text-lg font-bold text-teal-200 mb-1">{item.title}</h3>
              <p className="text-gray-100 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="p-5 bg-linear-to-br from-blue-500/20 to-purple-500/20 border-2 border-blue-500/40 rounded-xl mb-4">
          <h3 className="text-2xl font-bold text-blue-300 mb-4 text-center">Tips Improve English:</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: '📱', title: 'Setting → English', desc: 'Phone, laptop, browser' },
              { icon: '🎥', title: 'Konsumsi konten', desc: 'YouTube, blogs, docs' },
              { icon: '💬', title: 'Practice', desc: 'GitHub, Stack Overflow' },
              { icon: '📖', title: 'Tech vocab', desc: 'Istilah teknis' }
            ].map((item, idx) => (
              <div key={idx} className="p-3 bg-white/10 border border-white/20 rounded-lg flex items-center gap-3">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <h4 className="text-sm font-bold text-white">{item.title}</h4>
                  <p className="text-xs text-gray-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-3">
          <div className="p-4 bg-linear-to-br from-red-500/20 to-orange-500/20 border border-red-500/40 rounded-lg">
            <h3 className="text-lg font-bold text-red-300 mb-2">❌ Mindset Salah:</h3>
            <p className="text-sm text-white">&ldquo;Nanti aja&rdquo; • &ldquo;Malu salah&rdquo;</p>
          </div>

          <div className="p-4 bg-linear-to-br from-green-500/20 to-emerald-500/20 border border-green-500/40 rounded-lg">
            <h3 className="text-lg font-bold text-green-300 mb-2">✅ Mindset Benar:</h3>
            <p className="text-sm text-white">&ldquo;Mulai sekarang&rdquo; • &ldquo;Practice makes perfect&rdquo;</p>
          </div>
        </div>
      </div>
    </section>
  )
}

// ====================
// Export All Slides
// ====================
export default function Sesi2AllSlides() {
  return (
    <div className="bg-black">
      {/* <Slide1Title /> */}
      <Slide1BidangInformatika />
      <Slide2KampusMengajarkanDasar />
      <Slide3TShaped />
      <Slide4MenemukanPassion />
      <Slide5English />
    </div>
  )
}