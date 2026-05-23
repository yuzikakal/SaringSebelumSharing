'use client'

import { motion } from 'framer-motion'
import { MessageCircle, AlertCircle, Repeat2, Brain, Zap, Users, ShieldAlert } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function FenomenaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <div className="mb-16 text-center space-y-4">
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold text-red-600 dark:text-red-400 uppercase tracking-widest"
          >
            Psikologi & Algoritma
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-slate-100"
          >
            Fenomena Sosial Digital
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto"
          >
            Bhinneka Tunggal Ika seharusnya memperkaya, bukan memecah belah. Pahami bagaimana algoritma dan krisis etika mengubah perbedaan menjadi radikalisme digital yang mengancam Persatuan Indonesia.
          </motion.p>
        </div>

        {/* Echo Chamber Section */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6 }}
              className="space-y-5"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-red-100 dark:bg-red-950 rounded-lg">
                  <Brain className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
                  Ruang Gema (Echo Chamber)
                </h2>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Algoritma media sosial dirancang untuk membuat kita betah berlama-lama dengan menyuapi konten yang sesuai dengan bias kita. Lambat laun, kita terisolasi dalam &quot;filter bubble&quot; dan kehilangan empati terhadap kelompok lain.
              </p>
              <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                <li className="flex gap-3 items-start">
                  <Zap className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Bias konfirmasi dimanipulasi: kita hanya percaya apa yang ingin kita percaya</span>
                </li>
                <li className="flex gap-3 items-start">
                  <Zap className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Kehilangan empati: kelompok lain dianggap musuh, bukan saudara sebangsa</span>
                </li>
                <li className="flex gap-3 items-start">
                  <Zap className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Radikalisme digital: pandangan moderat tenggelam oleh suara ekstrem yang paling keras</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-white border-slate-200 shadow-lg dark:bg-slate-900 dark:border-slate-800 dark:shadow-none overflow-hidden">
                <CardHeader className="border-b border-slate-200 dark:border-slate-800">
                  <CardTitle className="flex items-center gap-2 text-slate-900 dark:text-slate-100 text-base">
                    <MessageCircle className="w-5 h-5 text-red-500" />
                    Simulasi Algoritma di Timeline Anda
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4 space-y-3 p-6">
                  <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border border-slate-200 dark:border-slate-700 shadow-sm">
                    <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-1">Anda menyukai post ini</p>
                    <p className="text-slate-700 dark:text-slate-300 text-sm">Kebijakan pemerintah ini merugikan rakyat kecil...</p>
                    <p className="text-xs text-slate-400 mt-2">❤️ 5.2K • 💬 892</p>
                  </div>
                  <div className="border-l-2 border-dashed border-slate-300 dark:border-slate-700 ml-4 h-4"></div>
                  {/* Kartu provokatif tanpa animasi pulse, cuma warna merah menyala */}
                  <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border-2 border-red-500 dark:border-red-500 shadow-md">
                    <p className="text-xs font-semibold text-red-600 dark:text-red-400 mb-1">🔥 Rekomendasi Algoritma (Lebih Provokatif)</p>
                    <p className="text-slate-700 dark:text-slate-300 text-sm">Skandal alasan tersembunyi di balik kebijakan...</p>
                    <p className="text-xs text-slate-400 mt-2">❤️ 15K • 💬 3.2K</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Comment War Section */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: 50 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6 }}
              className="lg:order-2 space-y-5"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-orange-100 dark:bg-orange-950 rounded-lg">
                  <AlertCircle className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
                  Perdebatan Tanpa Etika
                </h2>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Perbedaan pandangan adalah wajah demokrasi. Namun, ketika ego mengambil alih dan etika ditinggalkan, perdebatan berubah menjadi ujaran kebencian. Ini adalah kegagalan total dalam menerapkan nilai kemanusiaan dan persatuan.
              </p>
              <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                <li className="flex gap-3 items-start">
                  <ShieldAlert className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Ad Hominem:</strong> Menyerang karakter pribadi, bukan substansi argumen</span>
                </li>
                <li className="flex gap-3 items-start">
                  <ShieldAlert className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Doxxing & Cancel Culture:</strong> Membongkar privasi dan menghakimi massa secara sepihak</span>
                </li>
                <li className="flex gap-3 items-start">
                  <ShieldAlert className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Toleransi Semu:</strong> Hanya toleran pada yang sependapat, memusuji yang berbeda</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -50 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6 }}
              className="lg:order-1"
            >
              <Card className="bg-white border-slate-200 shadow-lg dark:bg-slate-900 dark:border-slate-800 dark:shadow-none overflow-hidden">
                <CardHeader className="border-b border-slate-200 dark:border-slate-800">
                  <CardTitle className="flex items-center gap-2 text-slate-900 dark:text-slate-100 text-base">
                    <Users className="w-5 h-5 text-orange-500" />
                    Pola Perdebatan Toksik
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4 space-y-3 p-6">
                  <div className="bg-white dark:bg-slate-900 rounded-lg p-3 border border-slate-200 dark:border-slate-700">
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">@warga_bijak</p>
                    <p className="text-slate-700 dark:text-slate-300 text-sm mt-1">Kasus bullying kemarin seharusnya diselesaikan lewat jalur hukum, bukan sekadar minta maaf di video...</p>
                  </div>
                  <div className="bg-white dark:bg-slate-900 rounded-lg p-3 border border-red-200 dark:border-red-900">
                    <p className="text-xs font-semibold text-red-500 dark:text-red-400">@provokator_x</p>
                    <p className="text-slate-700 dark:text-slate-300 text-sm mt-1">Halah sok suci lu! Paling lu juga di kampus sering ngebully orang kan? Muka lu aja muka pembantu!</p>
                  </div>
                  <div className="bg-red-50 dark:bg-red-950/40 rounded-lg p-3 border border-red-300 dark:border-red-800">
                    <p className="text-xs font-semibold text-red-600 dark:text-red-400">@warga_bijak</p>
                    <p className="text-slate-700 dark:text-slate-300 text-sm mt-1">Saya kena serangan massal dan di-tag sebagai &quot;antek&quot; padahal cuma kasih data...</p>
                    <p className="text-xs text-orange-600 dark:text-orange-400 mt-1 font-semibold">🔥 12K orang membenarkan serangan ini</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Siklus Penyebaran Hoaks */}
        <section className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                Anatomi Penyebaran Hoaks
              </h2>
              <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                Hoaks bukan kesalahan tunggal. Ia adalah virus yang memanfaatkan algoritma, emosi manusia, dan jaringan komunitas untuk menginfeksi persatuan bangsa.
              </p>
            </div>

            <div className="relative">
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-orange-500 to-red-700 dark:from-red-900 dark:via-orange-900 dark:to-red-950 -translate-y-1/2 z-0 rounded-full"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                {[
                  {
                    step: '01',
                    icon: <Repeat2 className="w-7 h-7" />,
                    title: 'Fabrikasi & Modus',
                    desc: 'Hoaks diciptakan dengan muatan SARA atau emosi marah. Motifnya jelas: profit iklan (clickbait) atau kepentingan politik pemecah belah.',
                    color: 'text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-950 border-red-500'
                  },
                  {
                    step: '02',
                    icon: <Users className="w-7 h-7" />,
                    title: 'Amplifikasi Buzzer',
                    desc: 'Disuntikkan ke grup WhatsApp/Telegram massa. Menggunakan akun bot atau buzzer untuk menciptakan ilusi "banyak orang setuju" (Social Proof).',
                    color: 'text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-950 border-red-500'
                  },
                  {
                    step: '03',
                    icon: <Brain className="w-7 h-7" />,
                    title: 'Emosi Membutakan',
                    desc: 'Rasa takut atau marah memicu "System 1 Thinking" di otak. Korban membagikan tanpa baca selengkapnya karena emosi sudah ditulari (Emotional Contagion).',
                    color: 'text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-950 border-red-500'
                  },
                  {
                    step: '04',
                    icon: <ShieldAlert className="w-7 h-7" />,
                    title: 'Disrupsi Persatuan',
                    desc: 'Berujung pada polarisasi akut, saling curiga antar-kelompok masyarakat, hingga aksi kekerasan nyata. Sila ke-3 runtuh dalam sekejap.',
                    color: 'text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-950 border-red-500'
                  }
                ].map((item, idx) => (
                  <div key={idx}>
                    <div className={`bg-white dark:bg-slate-900 border-2 ${item.color.split(' ').pop()} shadow-lg dark:shadow-none rounded-xl p-6 h-full flex flex-col items-center text-center space-y-3 transition-transform hover:scale-105 duration-300`}>
                      <div className={`w-14 h-14 rounded-full ${item.color} flex items-center justify-center border-2 border-white dark:border-slate-900 shadow-md`}>
                        {item.icon}
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">{item.title}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Dampak Nyata Section */}
        <section>
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 text-center mb-2">
              Dari Layar Kaca ke Luka Nyata
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-center max-w-3xl mx-auto mb-8">
              Tidak semua perilaku buruk di internet berujung pada penjara, namun hampir semua meninggalkan luka bagi kemanusiaan. Hoaks telah memicu kekerasan, merusak kepercayaan, dan menciptakan perpecahan yang bertentangan dengan nilai Persatuan Indonesia.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { emoji: '⚠️', title: 'Kekerasan Komunitas', desc: 'Hoaks SARA memicu serangan massal di dunia nyata, menyebabkan luka fisik dan trauma berkepanjangan yang merusak kerukunan.', border: 'hover:border-red-500' },
                { emoji: '🏛️', title: 'Krisis Kepercayaan', desc: 'Hoaks institusional merusak kepercayaan publik pada vaksinasi atau bantuan sosial, membuat masyarakat rentan terhadap bahaya nyata.', border: 'hover:border-amber-500' },
                { emoji: '💔', title: 'Disintegrasi Sosial', desc: 'Polarisasi memecah keluarga dan komunitas. Sahabat dan kerabat saling curiga hanya karena terjebak narasi hoaks yang berbeda.', border: 'hover:border-orange-500' }
              ].map((item, idx) => (
                <Card key={idx} className={`bg-white border-slate-200 shadow-sm dark:bg-slate-900 dark:border-slate-800 dark:shadow-none transition-all h-full ${item.border}`}>
                  <CardHeader>
                    <CardTitle className="text-slate-900 dark:text-slate-100 flex items-center gap-2">
                      <span className="text-2xl">{item.emoji}</span> {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-gradient-to-r from-red-50 to-slate-50 border border-red-200 dark:from-red-950/40 dark:to-slate-900/40 dark:border-red-500/30 rounded-lg p-6 mt-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">Refleksi Sila ke-3</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Dampak hoaks adalah bukti nyata bahwa pelanggaran etika digital sama berbahayanya dengan pelanggaran hukum. Menjaga Persatuan Indonesia di era modern bermula dari tanggung jawab moral kita sebelum menekan tombol &quot;Bagikan&quot;. Membaca fenomena ini adalah langkah pertama; mengubah kebiasaan adalah langkah selanjutnya.
              </p>
            </div>
          </motion.div>
        </section>

      </div>
    </div>
  )
}