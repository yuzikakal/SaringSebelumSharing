import { Heart, Users, Handshake, Shield, Globe } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function NilaiPancasilaPage() {
  const principles = [
    {
      icon: Heart,
      title: 'Sila 1: Ketuhanan Yang Maha Esa',
      description: 'Menghormati keberagaman agama dan kepercayaan dengan berbicara santun di media sosial',
      digital: '🙏 Jangan gunakan agama untuk menyerang orang lain online',
      color: 'border-purple-500 bg-purple-950/20',
    },
    {
      icon: Users,
      title: 'Sila 2: Kemanusiaan Yang Adil dan Beradab',
      description: 'Memperlakukan setiap individu dengan martabat dan menghindari ujaran kebencian',
      digital: '✨ Hormati hak asasi setiap netizen tanpa terkecuali',
      color: 'border-blue-500 bg-blue-950/20',
    },
    {
      icon: Globe,
      title: 'Sila 3: Persatuan Indonesia',
      description: 'Menjaga persatuan bangsa melalui informasi yang akurat dan berbicara yang bijak',
      digital: '🤝 Cek hoaks agar tidak memecah belah bangsa kita',
      color: 'border-red-500 bg-red-950/20',
    },
    {
      icon: Handshake,
      title: 'Sila 4: Kerakyatan Dipimpin Bijaksana',
      description: 'Mengutamakan musyawarah dan memberikan ruang suara untuk semua dengan menghargai perbedaan',
      digital: '💬 Dengarkan pendapat berbeda, jangan langsung serang',
      color: 'border-green-500 bg-green-950/20',
    },
    {
      icon: Shield,
      title: 'Sila 5: Keadilan Sosial Bagi Seluruh Rakyat Indonesia',
      description: 'Membagikan informasi yang adil dan tidak merugikan kelompok sosial tertentu',
      digital: '⚖️ Waspada konten yang membeda-bedakan status atau golongan',
      color: 'border-yellow-500 bg-yellow-950/20',
    },
  ]

  const digitalBehaviors = [
    'Verifikasi informasi sebelum membagikan (cek sumbernya)',
    'Hindari ujaran kebencian, SARA, dan diskriminasi',
    'Hormati privasi dan keamanan data pribadi seseorang',
    'Berbicara dengan santun meski tidak setuju',
    'Berikan kredit pada pembuat konten asli',
    'Laporkan konten yang merugikan dan berbahaya',
    'Edukasi orang lain tentang literasi digital',
    'Gunakan media sosial untuk membangun, bukan merusak',
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12 text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-100">
            Nilai-Nilai Pancasila di Era Digital
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Pancasila bukan hanya filosofi masa lalu. Nilai-nilainya harus kita terapkan dalam setiap interaksi digital.
          </p>
        </div>

        {/* Pancasila Principles */}
        <section className="mb-16">
          <div className="grid gap-6">
            {principles.map((principle) => {
              const Icon = principle.icon
              return (
                <Card key={principle.title} className={`bg-slate-900 border-2 ${principle.color} hover:border-opacity-100 transition-all`}>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <Icon className="w-8 h-8 text-slate-100 flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <CardTitle className="text-slate-100 text-xl">{principle.title}</CardTitle>
                        <p className="text-slate-300 text-sm mt-2">{principle.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-white dark:bg-slate-950/50 rounded-lg p-4 border-l-4 border-slate-600">
                      <p className="text-sm font-semibold text-slate-200">Penerapan Digital:</p>
                      <p className="text-slate-300 text-sm mt-2">{principle.digital}</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Digital Behavior Section */}
        <section className="mb-12">
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-slate-100 mb-2">
                Butir-Butir Pengamalan Digital
              </h2>
              <p className="text-slate-300">
                Komitmen praktis sebagai netizen Pancasila yang bijak
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {digitalBehaviors.map((behavior, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900 border border-slate-800 rounded-lg p-4 hover:border-red-500/50 transition-colors group"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-red-500/40 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-red-500" />
                    </div>
                    <p className="text-slate-200 text-sm">{behavior}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sila 3 Detailed Explanation */}
        <section className="mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-100 text-center">
              Pendalaman: Sila ke-3 Persatuan Indonesia
            </h2>
            <p className="text-slate-300 leading-relaxed text-center max-w-3xl mx-auto">
              Sila ke-3 Pancasila mengandung pesan mendalam tentang pentingnya persatuan dalam keberagaman. 
              Di era digital, nilai ini menjadi lebih penting daripada sebelumnya. Mari kita pahami bagaimana sila ini 
              harus diterapkan dalam setiap interaksi online kita.
            </p>

            <Card className="bg-slate-900 border-2 border-red-500 bg-red-950/10">
              <CardHeader>
                <CardTitle className="text-xl text-slate-100">Makna Persatuan Indonesia</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-100 mb-2">Definisi Sila ke-3:</h4>
                  <p className="text-slate-300 leading-relaxed">
                    "Persatuan Indonesia" bukan hanya sekadar slogan politik. Ini adalah komitmen untuk mempertahankan 
                    kesatuan bangsa di tengah keberagaman agama, etnis, budaya, dan ideologi. Persatuan bukan berarti keseragaman, 
                    melainkan kemampuan untuk menghormati perbedaan sambil tetap bersatu dalam tujuan bersama: kemajuan Indonesia.
                  </p>
                </div>

                <div className="border-t border-slate-700 pt-4">
                  <h4 className="font-semibold text-slate-100 mb-2">Ancaman Persatuan di Era Digital:</h4>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li className="flex gap-3">
                      <span className="text-red-500 font-bold flex-shrink-0">•</span>
                      <span>
                        <strong>Hoaks yang memecah belah:</strong> Informasi palsu yang menargetkan kelompok tertentu 
                        menciptakan ketegangan dan menghancurkan kepercayaan antar komunitas.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-red-500 font-bold flex-shrink-0">•</span>
                      <span>
                        <strong>Ujaran kebencian (Hate Speech):</strong> Komentar yang menyerang agama, etnis, atau kelompok 
                        tertentu secara langsung melawan nilai persatuan yang inklusif.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-red-500 font-bold flex-shrink-0">•</span>
                      <span>
                        <strong>Polarisasi dan Echo Chamber:</strong> Media sosial menciptakan "ruang gema" di mana orang 
                        hanya berinteraksi dengan pandangan yang sama, menganggap kelompok berbeda sebagai musuh.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-red-500 font-bold flex-shrink-0">•</span>
                      <span>
                        <strong>Permusuhan tanpa dasar:</strong> Orang saling serang dengan emosi tinggi tanpa bukti faktual, 
                        merusak persatuan demi kemenangan argumen digital yang tidak bermakna.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="border-t border-slate-700 pt-4">
                  <h4 className="font-semibold text-slate-100 mb-2">Butir Pengamalan Sila ke-3 di Media Sosial:</h4>
                  <ul className="space-y-3 text-slate-300 text-sm">
                    <li className="flex gap-3">
                      <span className="text-red-500 font-bold flex-shrink-0">1.</span>
                      <span>
                        <strong>Verifikasi sebelum berbagi:</strong> Jangan langsung share hoaks tanpa cek fakta. 
                        Tanyakan pada diri sendiri: "Apakah ini benar? Siapa sumbernya? Apakah saya ingin turut menyebarkan 
                        informasi palsu yang memecah belah?" Setiap kali Anda verifikasi, Anda menjaga persatuan.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-red-500 font-bold flex-shrink-0">2.</span>
                      <span>
                        <strong>Hindari ujaran kebencian dan SARA:</strong> Jangan menulis atau membagikan konten yang 
                        menyerang agama, ras, atau etnis kelompok lain. Setiap ujaran kebencian adalah pukulan terhadap persatuan. 
                        Ingat: orang berbeda dari Anda tetap adalah saudara sebangsa yang patut dihormati.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-red-500 font-bold flex-shrink-0">3.</span>
                      <span>
                        <strong>Hormati perspektif berbeda:</strong> Ketika Anda tidak setuju dengan seseorang, 
                        jangan langsung serang. Coba pahami mengapa mereka berpikir demikian. Diskusi santun adalah bentuk 
                        penghormatan terhadap kemanusiaan mereka dan komitmen pada persatuan yang sejati.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-red-500 font-bold flex-shrink-0">4.</span>
                      <span>
                        <strong>Keluar dari "ruang gema":</strong> Sengaja ikuti akun dengan pandangan berbeda (selama mereka 
                        tidak menyebarkan kebencian). Baca perspektif yang berlawanan untuk memperkaya pemahaman Anda. 
                        Ini adalah cara digital untuk menjaga persatuan dengan tetap menghormati keberagaman.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-red-500 font-bold flex-shrink-0">5.</span>
                      <span>
                        <strong>Edukasi dengan hati:</strong> Ketika Anda melihat orang lain berbagi hoaks atau ujaran kebencian, 
                        jangan hanya marahi mereka. Cobalah mengedukasi dengan santun. "Kak, konten ini hoaks menurut situs 
                        verifikasi. Kalau ingin tahu lebih lanjut, silakan cek di..." adalah cara lebih efektif daripada 
                        menyerang mereka.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-red-500 font-bold flex-shrink-0">6.</span>
                      <span>
                        <strong>Laporkan konten berbahaya:</strong> Jika Anda melihat hoaks masif atau ujaran kebencian yang 
                        membahayakan kelompok tertentu, laporkan ke platform media sosial. Ini adalah tindakan positif untuk 
                        menjaga lingkungan digital yang aman dan bersatu.
                      </span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="bg-gradient-to-r from-slate-800 to-slate-900 border border-red-500/30 rounded-lg p-8">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-100">
              Komitmen Netizen Bijak
            </h3>
            <p className="text-slate-300 leading-relaxed">
              Dengan memahami nilai-nilai Pancasila, khususnya Sila ke-3 tentang Persatuan Indonesia, kita dapat menciptakan 
              lingkungan digital yang lebih sehat. Setiap klik, setiap komentar, setiap bagian adalah bentuk tanggung jawab 
              kita terhadap persatuan dan kesantunan bangsa. Tindakan kecil Anda hari ini adalah investasi untuk masa depan 
              Indonesia yang lebih bersatu, damai, dan sejahtera.
            </p>
            <p className="text-slate-400 italic pt-4">
              &quot;Berbicara bijak hari ini, untuk masa depan yang lebih baik esok hari&quot;
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
