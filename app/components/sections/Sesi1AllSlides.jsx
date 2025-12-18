import {Users, Target, Brain, Lightbulb, CheckCircle, XCircle, BookOpen } from 'lucide-react';

const AnimatedBackground = ({ variant = 'default' }) => {
  const backgrounds = {
    default: 'from-slate-900 via-purple-900 to-slate-900',
    purple: 'from-purple-900 via-pink-900 to-slate-900',
    blue: 'from-blue-900 via-slate-900 to-purple-900',
    dark: 'from-black via-slate-900 to-black'
  };

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className={`absolute inset-0 bg-linear-to-br ${backgrounds[variant]}`} />

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute top-1/3 -right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>
    </div>
  );
};

export function Slide1KuliahUntukApa() {
  return (
    <section id="sesi1-kuliah-untuk-apa" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      <AnimatedBackground variant="purple" />
      <div className="relative z-10 px-8 max-w-6xl">
        <h2 className="text-6xl font-black mb-12 text-white text-center">
          Kuliah itu untuk apa?
        </h2>
        
        <div className="p-8 bg-linear-to-r from-yellow-500/20 to-orange-500/20 border-2 border-yellow-500/40 rounded-2xl mb-8">
          <p className="text-3xl text-white font-bold text-center mb-4">
            &ldquo;;Kuliah itu OPSI,<br/>yang WAJIB itu BELAJAR&rdquo;
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl">
            <h3 className="text-2xl font-bold text-purple-300 mb-4">Kuliah bukan jaminan sukses, tapi:</h3>
            <ul className="space-y-3 text-gray-200">
              <li className="flex items-start gap-3">
                <span className="text-green-400 text-xl shrink-0">✓</span>
                <span>Membuat kamu <strong>pintar & berwawasan luas</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 text-xl shrink-0">✓</span>
                <span><strong>Meluaskan kesempatan</strong> untuk sukses</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 text-xl shrink-0">✓</span>
                <span>Mendapatkan <strong>komunitas</strong> yang mengejar impian sama</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 text-xl shrink-0">✓</span>
                <span>Lingkungan & koneksi yang berbeda</span>
              </li>
            </ul>
          </div>

          <div className="p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex flex-col justify-center">
            <p className="text-xl text-gray-300 mb-4 italic">
              &ldquo;Education is the most powerful weapon to change everything in the world&rdquo;
            </p>
            <div className="h-px bg-linear-to-r from-transparent via-purple-500 to-transparent my-4"></div>
            <p className="text-lg text-yellow-300 font-semibold text-center">
              ⚠️ Bekerja dan sukses TIDAK HARUS kuliah dulu!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Slide2ApaItuPendidikan() {
  return (
    <section id="sesi1-apa-itu-pendidikan" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      <AnimatedBackground variant="default" />
      <div className="relative z-10 px-8 max-w-6xl">
        <BookOpen className="w-16 h-16 mx-auto mb-6 text-blue-400" />
        <h2 className="text-6xl font-black mb-8 text-white text-center">
          Apa Itu Pendidikan?
        </h2>
        
        <div className="p-6 bg-blue-500/20 border border-blue-500/30 rounded-xl mb-8">
          <p className="text-xl text-gray-200 text-center">
            <strong className="text-blue-300">Definisi:</strong> Proses mengajar dan memperoleh pengetahuan, keterampilan, atau makna dari apa yang kita pelajari
          </p>
        </div>

        <p className="text-2xl text-center text-purple-300 mb-8 font-semibold">
          Tujuan Akhir Pendidikan:
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="p-8 bg-linear-to-br from-blue-500/20 to-cyan-500/20 border-2 border-blue-500/40 rounded-2xl">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-3xl mb-4">
              1
            </div>
            <h3 className="text-3xl font-bold text-blue-300 mb-4">Kompetensi Sosial</h3>
            <p className="text-xl text-gray-200">
              Kemampuan untuk <strong>menyelesaikan masalah</strong> di sekitar kita
            </p>
          </div>
          
          <div className="p-8 bg-linear-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-500/40 rounded-2xl">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-3xl mb-4">
              2
            </div>
            <h3 className="text-3xl font-bold text-purple-300 mb-4">Personal Growth</h3>
            <p className="text-xl text-gray-200">
              Bertumbuh menjadi <strong>versi terbaik/optimal</strong> diri kita
            </p>
          </div>
        </div>

        <div className="p-6 bg-yellow-500/20 border-2 border-yellow-500/40 rounded-xl">
          <p className="text-lg text-white text-center">
            <span className="text-yellow-300 font-bold">⚠️ Yang perlu dipahami:</span><br/>
            Nilai akademik PENTING, tapi <strong className="text-green-300">BUKAN tujuan akhir</strong>
            <br/>
            <span className="text-sm text-gray-300 mt-2 block">
              Ada hal yang jauh lebih krusial: kemampuan, tanggung jawab, networks, literasi
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export function Slide3KenapaKuliahPenting() {
  return (
    <section id="sesi1-kenapa-kuliah-penting" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      <AnimatedBackground variant="blue" />
      <div className="relative z-10 px-8 max-w-6xl">
        <Brain className="w-16 h-16 mx-auto mb-6 text-purple-400" />
        <h2 className="text-6xl font-black mb-8 text-white text-center">
          Kenapa Kuliah Itu Penting?
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 bg-linear-to-br from-purple-500/20 to-blue-500/20 border-2 border-purple-500/40 rounded-xl">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-4">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-purple-300 mb-3">1. Struktur Berpikir</h3>
            <p className="text-gray-200 mb-4">
              Pengetahuan bisa didapat dimana saja, yang penting: <strong>cara berpikir dalam menyelesaikan masalah</strong>
            </p>
            <div className="p-3 bg-black/30 rounded-lg">
              <p className="text-sm text-gray-300">
                📝 <strong>Contoh:</strong> Skripsi melatih kita (latar belakang → analisa → solusi)
              </p>
            </div>
          </div>

          <div className="p-6 bg-linear-to-br from-pink-500/20 to-orange-500/20 border-2 border-pink-500/40 rounded-xl">
            <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mb-4">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-pink-300 mb-3">2. Mindset</h3>
            <p className="text-gray-200 mb-4">
              <strong>Being open minded</strong> - Bertemu teman dari berbagai latar belakang, ide baru & tantangan baru
            </p>
            <div className="p-3 bg-black/30 rounded-lg">
              <p className="text-sm text-gray-300 italic">
                &ldquo;Menggantikan pikiran kosong menjadi lebih terbuka&rdquo;
              </p>
            </div>
          </div>

          <div className="p-6 bg-linear-to-br from-green-500/20 to-teal-500/20 border-2 border-green-500/40 rounded-xl">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-green-300 mb-3">3. Social Change</h3>
            <p className="text-gray-200 mb-4">
              Bukan hanya pengetahuan, tapi <strong>take action!</strong> Merangsang inovasi, pertumbuhan ekonomi, partisipasi sosial
            </p>
            <div className="p-3 bg-black/30 rounded-lg">
              <p className="text-sm text-gray-300">
                🇯🇵 Jepang pasca bom atom → profesi pertama dicari: <strong>GURU</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 bg-linear-to-r from-purple-500/20 to-pink-500/20 border-2 border-purple-500/40 rounded-xl">
          <p className="text-xl text-white italic text-center">
            &ldquo;Apalah arti berpikir jika tidak menyelesaikan masalah yang ada di sekitar&rdquo;
          </p>
          <p className="text-sm text-gray-400 mt-2 text-center">- W.S. Rendra</p>
        </div>
      </div>
    </section>
  );
}

export function Slide4GrowthVsFixed() {
  return (
    <section id="sesi1-growth-vs-fixed" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      <AnimatedBackground variant="default" />
      <div className="relative z-10 px-8 max-w-7xl w-full">
        <h2 className="text-6xl font-black mb-12 text-white text-center">
          Growth Mindset vs Fixed Mindset
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="p-8 bg-linear-to-br from-green-500/20 to-emerald-500/20 border-2 border-green-500/40 rounded-2xl">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="w-12 h-12 text-green-400" />
              <h3 className="text-4xl font-bold text-green-300">Growth Mindset</h3>
            </div>
            <ul className="space-y-4">
              {[
                'Kemampuan bisa dikembangkan dengan usaha',
                'Melihat kegagalan sebagai pembelajaran',
                'Terus mencoba dan tidak mudah menyerah',
                'Terbuka pada feedback & kritik',
                'Inspirasi dari kesuksesan orang lain'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-lg text-white">
                  <span className="text-green-400 text-2xl shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-green-500/20 rounded-lg">
              <p className="text-sm text-gray-200">
                <strong className="text-green-300">Contoh:</strong> Gagal coding → cari tutorial → bertanya mentor → coba lagi → <strong>BERHASIL!</strong>
              </p>
            </div>
          </div>
          
          <div className="p-8 bg-linear-to-br from-red-500/20 to-orange-500/20 border-2 border-red-500/40 rounded-2xl">
            <div className="flex items-center gap-3 mb-6">
              <XCircle className="w-12 h-12 text-red-400" />
              <h3 className="text-4xl font-bold text-red-300">Fixed Mindset</h3>
            </div>
            <ul className="space-y-4">
              {[
                'Kemampuan sudah tetap sejak lahir',
                'Menghindari tantangan',
                'Mudah menyerah saat kesulitan',
                'Merasa terancam oleh kesuksesan orang lain',
                'Takut gagal = takut mencoba'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-lg text-white">
                  <span className="text-red-400 text-2xl shrink-0">✗</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-red-500/20 rounded-lg">
              <p className="text-sm text-gray-200">
                <strong className="text-red-300">Contoh:</strong> Gagal coding → &ldquo;Ini bukan bidangku&rdquo; → <strong>BERHENTI</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 bg-linear-to-r from-purple-500/20 to-pink-500/20 border-2 border-purple-500/40 rounded-xl text-center">
          <p className="text-2xl text-white font-bold">
            🎓 &ldquo;Being open minded = Keep trying, keep growing&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}

export function Slide5AgarTidakSiaSia() {
  return (
    <section id="sesi1-agar-tidak-sia-sia" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      <AnimatedBackground variant="purple" />
      <div className="relative z-10 px-8 max-w-6xl">
        <Target className="w-16 h-16 mx-auto mb-6 text-purple-400" />
        <h2 className="text-6xl font-black mb-4 text-white text-center">
          Agar Kuliah Tidak Sia-sia
        </h2>
        <p className="text-2xl text-purple-300 text-center mb-12">4 Hal Kunci yang Harus Kamu Perhatikan</p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-linear-to-br from-blue-500/20 to-cyan-500/20 border-2 border-blue-500/40 rounded-xl">
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-14 h-14 bg-linear-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-blue-300 mb-2">PURPOSES</h3>
                <p className="text-gray-200 mb-2">Tentukan tujuan & goals</p>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• 10 tahun ke depan, kamu ingin jadi siapa?</li>
                  <li>• Bidang apa yang ingin kamu geluti?</li>
                  <li>• Skill apa yang dibutuhkan?</li>
                </ul>
                <p className="text-xs text-yellow-300 mt-2 italic">&ldquo;Without a goal, there is no productivity&rdquo;</p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-linear-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-500/40 rounded-xl">
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-14 h-14 bg-linear-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-purple-300 mb-2">NETWORKING</h3>
                <p className="text-gray-200 mb-2">Harta karun yang sangat berharga</p>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Networking saat kuliah = <strong>apa adanya, bukan ada apanya</strong></li>
                  <li>• Tulus, bukan berdasarkan kepentingan</li>
                  <li>• Organisasi & komunitas sangat penting</li>
                </ul>
                <p className="text-xs text-yellow-300 mt-2 italic">Keluar dari zona nyaman!</p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-linear-to-br from-green-500/20 to-emerald-500/20 border-2 border-green-500/40 rounded-xl">
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-14 h-14 bg-linear-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-green-300 mb-2">SKILLS</h3>
                <p className="text-gray-200 mb-2">Bargaining position & daya tawar</p>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Saat punya skill → bisa <strong>create something</strong></li>
                  <li>• Power ada di tangan kita</li>
                  <li>• Bukan hanya jadi &ldquo;robot industri&rdquo;</li>
                </ul>
                <p className="text-xs text-yellow-300 mt-2 italic">Mereka yang punya skill menciptakan kesempatan!</p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-linear-to-br from-orange-500/20 to-red-500/20 border-2 border-orange-500/40 rounded-xl">
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-14 h-14 bg-linear-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                4
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-orange-300 mb-2">STAY UP TO DATE</h3>
                <p className="text-gray-200 mb-2">Adaptif dengan perkembangan zaman</p>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Era disruption: perubahan sangat cepat</li>
                  <li>• Kuliah = belajar berenang di kolam (terukur)</li>
                  <li>• Dunia kerja = lautan bebas (tidak terukur)</li>
                </ul>
                <p className="text-xs text-yellow-300 mt-2 italic">&ldquo;If we are finished changing, then we are finished&rdquo;</p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="mt-8 p-6 bg-linear-to-r from-yellow-500/20 to-orange-500/20 border-2 border-yellow-500/40 rounded-xl">
          <p className="text-center text-white">
            <span className="text-2xl font-bold">📊 Bonus Insight:</span><br/>
            <span className="text-xl">Hanya <strong className="text-yellow-300">10,2%</strong> masyarakat Indonesia lulus perguruan tinggi (BPS)</span><br/>
            <span className="text-lg text-gray-300">→ Kuliah meningkatkan VALUE mu & membuka peluang lebih luas!</span>
          </p>
        </div> */}
      </div>
    </section>
  );
}

export default function Sesi1AllSlides() {
  return (
    <div className="bg-black">
      <Slide1KuliahUntukApa />
      <Slide2ApaItuPendidikan />
      <Slide3KenapaKuliahPenting />
      <Slide4GrowthVsFixed />
      <Slide5AgarTidakSiaSia />
    </div>
  );
}