'use client'

// import { motion } from 'framer-motion'
import { Sparkles, Brain, Heart, Star } from 'lucide-react'

// ====================
// SLIDE 1: Title
// ====================
// export function Slide1Title() {
//   return (
//     <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-linear-to-br from-slate-950 via-orange-950 to-slate-950">
//       <div className="absolute inset-0 opacity-20">
//         <div className="absolute inset-0" style={{
//           backgroundImage: 'radial-gradient(circle, rgba(249, 115, 22, 0.3) 1px, transparent 1px)',
//           backgroundSize: '30px 30px'
//         }} />
//       </div>

//       <div className="relative z-10 text-center px-8 max-w-5xl">
//         <Users className="w-20 h-20 mx-auto mb-6 text-orange-400" />
//         <h1 className="text-7xl font-black mb-4 text-white leading-tight">
//           Soft Skill &<br/>Personal Branding
//         </h1>
//         <div className="h-1 w-48 bg-linear-to-r from-orange-500 to-red-500 mx-auto mb-6"></div>
//         <p className="text-2xl text-orange-300 font-semibold">Pondasi Karakter dan Karier</p>
//       </div>
//     </section>
//   )
// }

// ====================
// SLIDE 2: Definisi dan Pentingnya
// ====================
export function Slide1DefinisiDanPentingnya() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-linear-to-br from-slate-900 via-red-900 to-slate-900">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(239, 68, 68, 0.3) 50px, rgba(239, 68, 68, 0.3) 100px)',
        }} />
      </div>

      <div className="relative z-10 px-8 max-w-6xl">
        <Heart className="w-14 h-14 mx-auto mb-4 text-red-400" />
        <h2 className="text-5xl font-black mb-6 text-white text-center">Apa Itu Soft Skill?</h2>

        <div className="grid grid-cols-4 gap-3 mb-6">
          {[
            { icon: '💬', title: 'Komunikasi' },
            { icon: '🤝', title: 'Kerja Sama' },
            { icon: '👑', title: 'Leadership' },
            { icon: '⏰', title: 'Time Mgmt' },
            { icon: '🧩', title: 'Problem Solving' },
            { icon: '😌', title: 'Atur Emosi' },
            { icon: '🔄', title: 'Adaptasi' },
            { icon: '🧠', title: 'Berpikir Kritis' }
          ].map((item, idx) => (
            <div key={idx} className="p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-center">
              <div className="text-3xl mb-1">{item.icon}</div>
              <h3 className="text-sm font-bold text-white">{item.title}</h3>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-5 bg-linear-to-br from-blue-500/20 to-cyan-500/20 border-2 border-blue-500/40 rounded-xl">
            <h4 className="text-xl font-bold text-blue-300 mb-3">Kenapa Penting?</h4>
            <ul className="space-y-2">
              {['Bisa berkomunikasi?', 'Bisa dipercaya?', 'Punya etika kerja?', 'Bisa kerja tim?'].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-white">
                  <span className="text-green-400 shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-5 bg-linear-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-500/40 rounded-xl flex flex-col justify-center">
            <div className="space-y-3">
              <div className="p-3 bg-white/10 rounded-lg">
                <p className="text-2xl font-bold text-white">🚪 IPK = Buka Pintu</p>
              </div>
              <div className="p-3 bg-white/10 rounded-lg">
                <p className="text-2xl font-bold text-white">🚀 Soft Skill = Naik Level</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 p-3 bg-linear-to-r from-red-500/20 to-orange-500/20 border border-red-500/40 rounded-xl text-center">
          <p className="text-sm text-white">
            <strong className="text-yellow-300">Fakta:</strong> Perusahaan lebih sering memecat karena <strong className="text-red-300">soft skill</strong>
          </p>
        </div>
      </div>
    </section>
  )
}

// ====================
// SLIDE 3: Soft Skill Fundamental
// ====================
export function Slide2SoftSkillFundamental() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-linear-to-br from-slate-950 via-yellow-900 to-slate-950">
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(234, 179, 8, 0.4) 2px, transparent 2px)',
          backgroundSize: '45px 45px'
        }} />
      </div>

      <div className="relative z-10 px-8 max-w-6xl">
        <Sparkles className="w-14 h-14 mx-auto mb-4 text-yellow-400" />
        <h2 className="text-5xl font-black mb-6 text-white text-center">Soft Skill Fundamental</h2>

        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <h3 className="text-2xl font-bold text-yellow-300 mb-3 text-center">Basic (Sem 1-2)</h3>
            <div className="grid grid-cols-2 gap-2">
              {[
                { icon: '💬', title: 'Komunikasi' },
                { icon: '⏰', title: 'Time Mgmt' },
                { icon: '🤝', title: 'Kerja Tim' },
                { icon: '🎯', title: 'Tanggung Jawab' }
              ].map((item, idx) => (
                <div key={idx} className="p-3 bg-linear-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/40 rounded-lg text-center">
                  <div className="text-3xl mb-1">{item.icon}</div>
                  <h4 className="text-sm font-bold text-white">{item.title}</h4>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-purple-300 mb-3 text-center">Advanced (Sem 3+)</h3>
            <div className="grid grid-cols-2 gap-2">
              {[
                { icon: '🧠', title: 'Critical Think' },
                { icon: '🧩', title: 'Problem Solve' },
                { icon: '🎤', title: 'Public Speak' },
                { icon: '👑', title: 'Leadership' }
              ].map((item, idx) => (
                <div key={idx} className="p-3 bg-linear-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/40 rounded-lg text-center">
                  <div className="text-3xl mb-1">{item.icon}</div>
                  <h4 className="text-sm font-bold text-white">{item.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-4 bg-linear-to-br from-blue-500/20 to-cyan-500/20 border-2 border-blue-500/40 rounded-xl">
          <h3 className="text-xl font-bold text-blue-300 mb-3 text-center">Dimana Bisa Dikembangkan?</h3>
          <div className="grid grid-cols-4 gap-2">
            {[
              { icon: '📚', text: 'Kerja Kelompok' },
              { icon: '🏢', text: 'Organisasi' },
              { icon: '🎯', text: 'Panitia' },
              { icon: '🏆', text: 'Lomba/PKM' },
              { icon: '💼', text: 'Magang' },
              { icon: '🚀', text: 'Project' },
              { icon: '🤝', text: 'Kolaborasi' },
              { icon: '🎓', text: 'Volunteer' }
            ].map((item, idx) => (
              <div key={idx} className="p-2 bg-white/10 border border-white/20 rounded-lg text-center">
                <div className="text-2xl mb-1">{item.icon}</div>
                <p className="text-white font-semibold text-xs">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-yellow-300 mt-3 text-sm font-bold">
            💡 Soft skill dari praktik, bukan teori!
          </p>
        </div>
      </div>
    </section>
  )
}

// ====================
// SLIDE 4: Hard vs Soft
// ====================
export function Slide3HardVsSoft() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-linear-to-br from-black via-purple-950 to-black">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(168, 85, 247, 0.4) 30px, rgba(168, 85, 247, 0.4) 60px)',
        }} />
      </div>

      <div className="relative z-10 px-8 max-w-6xl">
        <Brain className="w-14 h-14 mx-auto mb-4 text-purple-400" />
        <h2 className="text-5xl font-black mb-6 text-white text-center">Hard Skill vs Soft Skill</h2>

        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="p-5 bg-linear-to-br from-blue-500/20 to-cyan-500/20 border-2 border-blue-500/40 rounded-xl">
            <h3 className="text-2xl font-bold text-blue-300 mb-3">💻 HARD SKILL</h3>
            <div className="space-y-2 text-sm text-gray-200">
              <p><strong>Contoh:</strong> Programming, Design, Data</p>
              <p><strong>Belajar:</strong> Course, tutorial, praktik</p>
              <p><strong>Ukur:</strong> Sertifikat, portfolio</p>
              <p><strong>Sifat:</strong> Spesifik pekerjaan</p>
            </div>
          </div>

          <div className="p-5 bg-linear-to-br from-green-500/20 to-emerald-500/20 border-2 border-green-500/40 rounded-xl">
            <h3 className="text-2xl font-bold text-green-300 mb-3">🤝 SOFT SKILL</h3>
            <div className="space-y-2 text-sm text-gray-200">
              <p><strong>Contoh:</strong> Komunikasi, Leadership</p>
              <p><strong>Belajar:</strong> Pengalaman, feedback</p>
              <p><strong>Ukur:</strong> Perilaku, reputasi</p>
              <p><strong>Sifat:</strong> Universal semua kerja</p>
            </div>
          </div>
        </div>

        <div className="p-4 bg-linear-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-500/40 rounded-xl mb-4">
          <h3 className="text-xl font-bold text-purple-300 mb-3 text-center">Perbandingan Karier</h3>
          <div className="grid grid-cols-3 gap-3 text-center">
            {[
              { level: 'Junior', hard: '70%', soft: '30%' },
              { level: 'Mid', hard: '50%', soft: '50%' },
              { level: 'Senior', hard: '30%', soft: '70%' }
            ].map((item, idx) => (
              <div key={idx} className="p-3 bg-white/10 rounded-lg">
                <h4 className="text-lg font-bold text-white mb-2">{item.level}</h4>
                <p className="text-sm text-gray-200">💻 {item.hard}</p>
                <p className="text-sm text-gray-200">🤝 {item.soft}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-3">
          <div className="p-4 bg-linear-to-br from-red-500/20 to-orange-500/20 border border-red-500/40 rounded-xl">
            <h3 className="text-lg font-bold text-red-300 mb-2">❌ Hard Only</h3>
            <ul className="space-y-1 text-xs text-gray-200">
              <li>→ Sulit komunikasi & bekerja tim</li>
              <li>→ Sulit naik ke leadership</li>
            </ul>
          </div>

          <div className="p-4 bg-linear-to-br from-green-500/20 to-emerald-500/20 border border-green-500/40 rounded-xl">
            <h3 className="text-lg font-bold text-green-300 mb-2">✅ Hard + Soft</h3>
            <ul className="space-y-1 text-xs text-gray-200">
              <li>→ Bisa jelaskan & kolaborasi</li>
              <li>→ Siap untuk leadership</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

// ====================
// SLIDE 5: Personal Branding
// ====================
export function Slide4PersonalBranding() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-linear-to-br from-slate-900 via-amber-900 to-slate-900">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(245, 158, 11, 0.5) 1px, transparent 1px)',
          backgroundSize: '35px 35px'
        }} />
      </div>

      <div className="relative z-10 px-8 max-w-6xl">
        <Star className="w-14 h-14 mx-auto mb-4 text-amber-400" />
        <h2 className="text-5xl font-black mb-4 text-white text-center">Personal Branding</h2>
        <p className="text-xl text-center text-amber-300 font-bold mb-6">&ldquo;Reputasi yang Tidak Bisa Dibeli&rdquo;</p>

        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="p-4 bg-linear-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/40 rounded-xl">
            <h4 className="text-lg font-bold text-red-300 mb-2">❌ Bukan tentang:</h4>
            <ul className="space-y-1 text-sm text-gray-200">
              <li>• Followers Instagram</li>
              <li>• Seberapa keren LinkedIn</li>
            </ul>
          </div>
          <div className="p-4 bg-linear-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/40 rounded-xl">
            <h4 className="text-lg font-bold text-green-300 mb-2">✅ Tapi tentang:</h4>
            <ul className="space-y-1 text-sm text-gray-200">
              <li>• Siapa kamu di mata orang</li>
              <li>• Apakah orang percaya kamu</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-4">
          {[
            { icon: '🎭', title: 'Sikap' },
            { icon: '🔁', title: 'Kebiasaan' },
            { icon: '🤝', title: 'Kontribusi' },
            { icon: '⚖️', title: 'Etika' },
            { icon: '🏆', title: 'Hasil Kerja' },
            { icon: '🔥', title: 'Konsistensi' }
          ].map((item, idx) => (
            <div key={idx} className="p-3 bg-white/10 border border-white/20 rounded-lg text-center">
              <div className="text-3xl mb-1">{item.icon}</div>
              <h4 className="text-sm font-bold text-amber-300">{item.title}</h4>
            </div>
          ))}
        </div>

        <div className="p-4 bg-linear-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-500/40 rounded-xl mb-4">
          <h3 className="text-lg font-bold text-purple-300 mb-2 text-center">📚 Kerja Kelompok = Cermin Karakter</h3>
          <div className="grid grid-cols-2 gap-2 text-xs">
            {[
              { icon: '✅', text: 'Bertanggung jawab' },
              { icon: '❌', text: 'Kabur saat deadline' },
              { icon: '✅', text: 'Bisa diandalkan' },
              { icon: '❌', text: 'Free rider' }
            ].map((item, idx) => (
              <div key={idx} className="p-2 bg-white/10 rounded flex items-center gap-2">
                <span className={idx % 2 === 0 ? 'text-green-400' : 'text-red-400'}>{item.icon}</span>
                <span className="text-white">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-3">
          <div className="p-3 bg-linear-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/40 rounded-lg text-center">
            <p className="text-sm text-white italic">&ldquo;It takes 20 years to build, 5 minutes to ruin&rdquo;</p>
            <p className="text-xs text-gray-400">- Warren Buffett</p>
          </div>
          <div className="p-3 bg-linear-to-br from-green-500/20 to-emerald-500/20 border border-green-500/40 rounded-lg text-center">
            <p className="text-sm text-white font-bold">
              Track record kecil hari ini = nilai jual besar nanti
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// ====================
// Export All Slides
// ====================
export default function Sesi3AllSlides() {
  return (
    <div className="bg-black">
      {/* <Slide1Title /> */}
      <Slide1DefinisiDanPentingnya />
      <Slide2SoftSkillFundamental />
      <Slide3HardVsSoft />
      <Slide4PersonalBranding />
    </div>
  )
}