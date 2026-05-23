import { MessageCircle, Repeat2, AlertCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function FenomenaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12 text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-100">
            Fenomena Sosial Digital
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Pahami dinamika media sosial yang menciptakan hoaks dan ujaran kebencian
          </p>
        </div>

        {/* Echo Chamber Section */}
        <section className="mb-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-slate-100">
                Ruang Gema (Echo Chamber)
              </h2>
              <p className="text-slate-300 leading-relaxed">
                Di media sosial, algoritma memprioritaskan konten yang sesuai dengan preferensi kita. 
                Ini menciptakan &quot;ruang gema&quot; di mana kita hanya melihat opini yang sejalan dengan pandangan kita.
              </p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex gap-3">
                  <span className="text-red-500 font-bold">•</span>
                  <span>Kita tidak terekspos pada perspektif berbeda</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-500 font-bold">•</span>
                  <span>Keyakinan kita diperkuat terus-menerus</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-500 font-bold">•</span>
                  <span>Muncul polarisasi dan intoleransi terhadap pihak lain</span>
                </li>
              </ul>
            </div>

            <Card className="bg-slate-900 border-slate-800">
              <CardHeader className="bg-slate-800">
                <CardTitle className="flex items-center gap-2 text-slate-100">
                  <MessageCircle className="w-5 h-5 text-red-500" />
                  Simulasi Ruang Gema
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4 space-y-3">
                <div className="bg-white dark:bg-slate-950 rounded-lg p-4 border-l-4 border-red-500">
                  <p className="text-sm font-semibold text-red-400">Anda menyukai post ini</p>
                  <p className="text-slate-300 text-sm mt-1">Jadwal Pilkada tidak adil...</p>
                  <p className="text-xs text-slate-500 mt-2">❤️ 5.2K • 💬 892 • 🔄 1.2K</p>
                </div>
                <div className="text-xs text-slate-400 text-center">⬇️</div>
                <div className="bg-white dark:bg-slate-950 rounded-lg p-4 border-l-4 border-red-500">
                  <p className="text-sm font-semibold text-red-400">Rekomendasi serupa</p>
                  <p className="text-slate-300 text-sm mt-1">Alasan tersembunyi di balik...</p>
                  <p className="text-xs text-slate-500 mt-2">❤️ 8.9K • 💬 1.2K • 🔄 3.1K</p>
                </div>
                <div className="text-xs text-slate-400 text-center">⬇️</div>
                <div className="bg-red-950/30 rounded-lg p-4 border-l-4 border-amber-500">
                  <p className="text-sm font-semibold text-amber-400">Terus diperkuat</p>
                  <p className="text-slate-300 text-sm mt-1">Penipuan sistematis yang...</p>
                  <p className="text-xs text-slate-500 mt-2">❤️ 15K • 💬 3.2K • 🔄 8.5K</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Cyber Bullying Section */}
        <section className="mb-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <Card className="bg-slate-900 border-slate-800 lg:order-2">
              <CardHeader className="bg-slate-800">
                <CardTitle className="flex items-center gap-2 text-slate-100">
                  <AlertCircle className="w-5 h-5 text-orange-500" />
                  Contoh Perdebatan Sengit
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4 space-y-3">
                <div className="bg-white dark:bg-slate-950 rounded-lg p-3 border-l-4 border-blue-500">
                  <p className="text-xs font-semibold text-blue-400">@netizen123</p>
                  <p className="text-slate-300 text-sm mt-1">Saya tidak setuju dengan...</p>
                </div>

                <div className="bg-white dark:bg-slate-950 rounded-lg p-3 border-l-4 border-red-500">
                  <p className="text-xs font-semibold text-red-400">@counter_view</p>
                  <p className="text-slate-300 text-sm mt-1">Kalau tidak setuju berarti kamu...</p>
                </div>

                <div className="bg-red-950/30 rounded-lg p-3 border-l-4 border-red-500">
                  <p className="text-xs font-semibold text-red-400">@netizen123</p>
                  <p className="text-slate-300 text-sm mt-1">Aku kena serangan massal...</p>
                  <p className="text-xs text-orange-400 mt-1">Dilike 12K orang 😞</p>
                </div>
              </CardContent>
            </Card>

            <div className="lg:order-1 space-y-4">
              <h2 className="text-3xl font-bold text-slate-100">
                Perdebatan Tanpa Fakta
              </h2>
              <p className="text-slate-300 leading-relaxed">
                Ketika seseorang mengungkapkan pendapat di media sosial, sering kali mereka mendapat serangan 
                dari kelompok yang berbeda pandangan. Perdebatan berubah menjadi saling hujat tanpa dasar faktual.
              </p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex gap-3">
                  <span className="text-orange-500 font-bold">•</span>
                  <span>Argumentasi diganti dengan ejekan dan ancaman</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500 font-bold">•</span>
                  <span>Orang yang berbeda pendapat dikelompokkan sebagai musuh</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500 font-bold">•</span>
                  <span>Hoaks dipercaya karena sejalan dengan emosi kita</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Viral Spread Section */}
        <section className="mb-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-100 text-center">
              Penyebaran Hoaks Berantai
            </h2>
            <Card className="bg-slate-900 border-slate-800">
              <CardHeader className="bg-slate-800">
                <CardTitle className="flex items-center gap-2 text-slate-100">
                  <Repeat2 className="w-5 h-5 text-amber-500" />
                  Siklus Penyebaran Hoaks
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {[
                    {
                      step: '1',
                      title: 'Konten Diproduksi',
                      desc: 'Hoaks dibuat untuk mendapat engagement atau profit dari iklan',
                      color: 'border-red-500 bg-red-950/20',
                    },
                    {
                      step: '2',
                      title: 'Viral ke Grup Komunitas',
                      desc: 'Dibagikan di grup WhatsApp/Telegram tanpa verifikasi',
                      color: 'border-orange-500 bg-orange-950/20',
                    },
                    {
                      step: '3',
                      title: 'Orang Tua & Keluarga',
                      desc: 'Menyebar ke generasi lebih tua yang kurang kritis',
                      color: 'border-amber-500 bg-amber-950/20',
                    },
                    {
                      step: '4',
                      title: 'Kembali ke Media Sosial',
                      desc: 'Orang lain menangkap dan membagikan lagi di platform publik',
                      color: 'border-yellow-500 bg-yellow-950/20',
                    },
                    {
                      step: '5',
                      title: 'Percaya & Berbagi Lagi',
                      desc: 'Jutaan orang percaya dan membagikan tanpa verifikasi',
                      color: 'border-red-600 bg-red-950/30',
                    },
                  ].map((item, idx) => (
                    <div key={idx}>
                      <div className={`border-l-4 rounded-r-lg p-4 ${item.color}`}>
                        <div className="flex items-start gap-4">
                          <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 text-sm font-bold text-slate-100">
                            {item.step}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-slate-100">{item.title}</h4>
                            <p className="text-slate-300 text-sm mt-1">{item.desc}</p>
                          </div>
                        </div>
                      </div>
                      {idx < 4 && <div className="text-center text-slate-500 py-2">⬇️</div>}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Dampak Nyata Section */}
        <section>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-100 text-center mb-6">
              Dari Dunia Digital ke Dunia Nyata
            </h2>
            <p className="text-slate-300 leading-relaxed text-center max-w-3xl mx-auto mb-8">
              Hoaks yang beredar di media sosial tidak hanya menyebabkan kerusakan digital. 
              Informasi palsu telah memicu kekerasan antar komunitas, merusak kepercayaan publik terhadap lembaga, 
              dan menciptakan polarisasi yang sulit dipulihkan. Berikut adalah contoh nyata dampak hoaks:
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-slate-900 border-slate-800 hover:border-red-500 transition-all">
                <CardHeader>
                  <CardTitle className="text-slate-100 flex items-center gap-2">
                    <span className="text-2xl">⚠️</span> Kekerasan Komunitas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Hoaks tentang penistaan agama telah memicu serangan massal terhadap individu atau kelompok tertentu, 
                    menyebabkan luka, hilangnya nyawa, dan trauma berkepanjangan dalam komunitas.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-900 border-slate-800 hover:border-amber-500 transition-all">
                <CardHeader>
                  <CardTitle className="text-slate-100 flex items-center gap-2">
                    <span className="text-2xl">🏛️</span> Krisis Kepercayaan
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Hoaks tentang institusi pemerintah atau kesehatan telah merusak kepercayaan publik. 
                    Masyarakat menjadi ragu terhadap vaksinasi, program pemerintah, dan informasi resmi lainnya.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-900 border-slate-800 hover:border-orange-500 transition-all">
                <CardHeader>
                  <CardTitle className="text-slate-100 flex items-center gap-2">
                    <span className="text-2xl">💔</span> Disintegrasi Sosial
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Polarisasi akibat hoaks menciptakan perpecahan dalam keluarga, persahabatan, dan komunitas. 
                    Orang yang dahulu bersatu kini saling curiga dan menjadi musuh karena percaya informasi berbeda.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-red-950/40 to-slate-900/40 border border-red-500/30 rounded-lg p-6 mt-8">
              <h3 className="text-xl font-bold text-slate-100 mb-3">Komitmen Kita Bersama</h3>
              <p className="text-slate-300 leading-relaxed">
                Dampak hoaks bukan sekadar masalah individu, melainkan ancaman terhadap persatuan Indonesia. 
                Oleh karena itu, setiap langkah kecil untuk memverifikasi informasi, mengedukasi orang lain, 
                dan berbicara dengan santun adalah kontribusi nyata untuk menjaga persatuan bangsa kita.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
