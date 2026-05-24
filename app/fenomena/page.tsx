'use client'

import { motion } from 'framer-motion'
import { 
  MessageCircle, AlertCircle, Repeat2, Brain, Zap, Users, ShieldAlert, 
  Flame, Landmark, HeartCrack, Heart, Share2, Bookmark, MoreHorizontal,
  ThumbsUp, CornerDownRight
} from 'lucide-react'
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
            Bhinneka Tunggal Ika seharusnya memperkaya, bukan memecah belah. Mari pahami bagaimana algoritma dan krisis etika mengubah perbedaan menjadi radikalisme digital yang mengancam Persatuan Indonesia.
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
                Algoritma media sosial dirancang membuat kita betah berlama-lama dengan terus menyuapi konten yang sesuai dengan bias kita. Lambat laun, kita terisolasi dalam &quot;filter bubble&quot; dan kehilangan empati terhadap kelompok lain.
              </p>
              <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                <li className="flex gap-3 items-start">
                  <Zap className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Bias konfirmasi dimanipulasi, sehingga kita hanya percaya pada apa yang ingin kita percaya</span>
                </li>
                <li className="flex gap-3 items-start">
                  <Zap className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Kehilangan empati, membuat kelompok lain dianggap musuh, bukan saudara sebangsa</span>
                </li>
                <li className="flex gap-3 items-start">
                  <Zap className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Radikalisme digital, di mana pandangan moderat tenggelam oleh suara ekstrem yang paling keras</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6 }}
            >
              {/* UI Media Sosial: Timeline Feed */}
              <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg border border-slate-200 dark:border-slate-800 overflow-hidden">
                {/* Post 1: Bias Awal */}
                <div className="p-4 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-sm font-bold text-blue-600 dark:text-blue-300">A</div>
                    <div className="flex-1">
                      <p className="font-semibold text-sm text-slate-900 dark:text-slate-100">akun_netizen</p>
                      <p className="text-xs text-slate-500">2 jam lalu</p>
                    </div>
                    <MoreHorizontal className="w-5 h-5 text-slate-400" />
                  </div>
                  <p className="text-sm text-slate-800 dark:text-slate-200 mb-3">Kebijakan baru pemerintah ini benar-benar merugikan rakyat kecil... 🤦‍♂️</p>
                  <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs pt-2 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-1 text-red-500 font-semibold">
                      <Heart className="w-4 h-4 fill-current" /> <span>5.2K</span>
                    </div>
                    <div className="flex items-center gap-1"><MessageCircle className="w-4 h-4" /> 892</div>
                    <div className="flex items-center gap-1"><Share2 className="w-4 h-4" /> 1.2K</div>
                    <Bookmark className="w-4 h-4" />
                  </div>
                </div>

                {/* Divider Algoritma */}
                <div className="px-4 py-2 bg-slate-50 dark:bg-slate-800/50 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800">
                  <AlertCircle className="w-3.5 h-3.5 text-blue-500" /> 
                  <span>Rekomendasi untuk Anda karena Anda menyukai postingan serupa</span>
                </div>

                {/* Post 2: Provokasi */}
                <div className="p-4 bg-red-50/50 dark:bg-red-950/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center text-sm font-bold text-red-600 dark:text-red-300">P</div>
                    <div className="flex-1">
                      <p className="font-semibold text-sm text-slate-900 dark:text-slate-100">provokator_elit</p>
                      <p className="text-xs text-slate-500">Sponsored • 1 jam lalu</p>
                    </div>
                    <MoreHorizontal className="w-5 h-5 text-slate-400" />
                  </div>
                  <p className="text-sm text-slate-800 dark:text-slate-200 mb-3 font-semibold">SKANDAL! Alasan Tersembunyi di Balik Kebijakan Ini Bukan Untuk Rakyat! 🚨🚨🚨</p>
                  <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs pt-2 border-t border-red-100 dark:border-red-900/50">
                    <div className="flex items-center gap-1 text-red-500 font-semibold">
                      <Heart className="w-4 h-4 fill-current" /> <span>15K</span>
                    </div>
                    <div className="flex items-center gap-1"><MessageCircle className="w-4 h-4" /> 3.2K</div>
                    <div className="flex items-center gap-1"><Share2 className="w-4 h-4" /> 8.5K</div>
                    <Bookmark className="w-4 h-4" />
                  </div>
                </div>
              </div>
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
                Perbedaan pendapat adalah hal wajar dalam demokrasi. Sayangnya, ketika ego dan amarah mengambil alih, ruang diskusi sering kali berubah menjadi arena saling hujat yang merusak nilai kemanusiaan kita.
              </p>
              <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                <li className="flex gap-3 items-start">
                  <ShieldAlert className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Ad Hominem:</strong> Menyerang karakter pribadi alih-alih membahas substansi argumen</span>
                </li>
                <li className="flex gap-3 items-start">
                  <ShieldAlert className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Doxxing & Cancel Culture:</strong> Membongkar privasi dan menghakimi massa secara sepihak</span>
                </li>
                <li className="flex gap-3 items-start">
                  <ShieldAlert className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Toleransi Semu:</strong> Hanya toleran pada yang sependapat, memusuhi yang berbeda</span>
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
              {/* UI Media Sosial: Comment Section */}
              <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg border border-slate-200 dark:border-slate-800 overflow-hidden">
                {/* Original Post Summary */}
                <div className="p-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-600 dark:text-slate-300">I</div>
                    <div>
                      <p className="text-sm text-slate-800 dark:text-slate-200"><span className="font-semibold">info_terkini</span> Kasus bullying di sekolah X harus dituntaskan secara hukum, bukan cuma minta maaf di video.</p>
                      <p className="text-xs text-slate-500 mt-1">1 jam lalu • 24 Komentar</p>
                    </div>
                  </div>
                </div>

                {/* Comments Thread */}
                <div className="p-4 space-y-4">
                  {/* Comment 1: Bijak */}
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-xs font-bold text-blue-600 dark:text-blue-300">W</div>
                    <div className="flex-1">
                      <div className="bg-slate-100 dark:bg-slate-800 rounded-xl p-3">
                        <p className="font-semibold text-xs text-slate-900 dark:text-slate-100">warga_bijak</p>
                        <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">Setuju, korban berhak mendapat keadilan hukum. Ini bukan masalah yang bisa diselesaikan dengan permintaan maaf saja.</p>
                      </div>
                      <div className="flex gap-4 mt-1.5 text-xs text-slate-500 dark:text-slate-400 px-1">
                        <span>45 mnt</span>
                        <span className="font-semibold flex items-center gap-1"><ThumbsUp className="w-3 h-3" /> 120</span>
                        <span className="font-semibold">Balas</span>
                      </div>
                    </div>
                  </div>

                  {/* Comment 2: Toksik (Reply) */}
                  <div className="flex gap-3 pl-8 border-l-2 border-red-200 dark:border-red-900/50 ml-4">
                    <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center text-xs font-bold text-red-600 dark:text-red-300">P</div>
                    <div className="flex-1">
                      <div className="bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/50 rounded-xl p-3">
                        <div className="flex justify-between items-start">
                          <p className="font-semibold text-xs text-red-600 dark:text-red-400">@provokator_x</p>
                          <span className="text-[10px] bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 px-1.5 py-0.5 rounded font-semibold">Ujaran Kebencian</span>
                        </div>
                        <p className="text-sm text-slate-800 dark:text-slate-200 mt-1">Halah sok suci lu! Paling lu juga di kampus sering ngebully orang kan? Muka lu aja muka pembantu! 🤮</p>
                      </div>
                      <div className="flex gap-4 mt-1.5 text-xs text-slate-500 dark:text-slate-400 px-1">
                        <span>30 mnt</span>
                        <span className="font-semibold flex items-center gap-1 text-red-500"><Heart className="w-3 h-3 fill-current" /> 12K</span>
                        <span className="font-semibold">Balas</span>
                      </div>
                    </div>
                  </div>

                  {/* Comment 3: Korban Terpojok */}
                  <div className="flex gap-3 pl-12 ml-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-xs font-bold text-blue-600 dark:text-blue-300">W</div>
                    <div className="flex-1">
                      <div className="bg-slate-100 dark:bg-slate-800 rounded-xl p-3">
                        <p className="font-semibold text-xs text-slate-900 dark:text-slate-100">warga_bijak <CornerDownRight className="w-3 h-3 inline text-slate-400" /> <span className="text-red-500">@provokator_x</span></p>
                        <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">Saya kena serangan massal dan di-tag sebagai &quot;antek&quot; padahal cuma kasih data objektif... 😞</p>
                      </div>
                      <div className="flex gap-4 mt-1.5 text-xs text-slate-500 dark:text-slate-400 px-1">
                        <span>15 mnt</span>
                        <span className="font-semibold flex items-center gap-1"><ThumbsUp className="w-3 h-3" /> 45</span>
                        <span className="font-semibold">Balas</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-orange-500 to-rose-700 dark:from-red-900 dark:via-orange-900 dark:to-rose-950 -translate-y-1/2 z-0 rounded-full"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                {[
                  {
                    step: '01',
                    icon: <Repeat2 className="w-7 h-7" />,
                    title: 'Fabrikasi & Modus',
                    desc: 'Hoaks sengaja diciptakan dengan muatan SARA atau emosi marah. Motifnya jelas, yakni profit iklan (clickbait) atau kepentingan politik pemecah belah.',
                    color: 'text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-950 border-red-500'
                  },
                  {
                    step: '02',
                    icon: <Users className="w-7 h-7" />,
                    title: 'Amplifikasi Buzzer',
                    desc: 'Disuntikkan ke grup WhatsApp dan Telegram massa. Menggunakan akun bot atau buzzer untuk menciptakan ilusi &quot;banyak orang setuju&quot; (Social Proof).',
                    color: 'text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-950 border-orange-500'
                  },
                  {
                    step: '03',
                    icon: <Brain className="w-7 h-7" />,
                    title: 'Emosi Membutakan',
                    desc: 'Rasa takut atau marah memicu &quot;System 1 Thinking&quot; di otak. Korban membagikannya tanpa membaca selengkapnya karena emosi sudah tertular (Emotional Contagion).',
                    color: 'text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-950 border-amber-500'
                  },
                  {
                    step: '04',
                    icon: <ShieldAlert className="w-7 h-7" />,
                    title: 'Disrupsi Persatuan',
                    desc: 'Berujung pada polarisasi akut, saling curiga antarkelompok masyarakat, hingga aksi kekerasan nyata. Sila ke-3 bisa runtuh dalam sekejap.',
                    color: 'text-rose-600 dark:text-rose-400 bg-rose-100 dark:bg-rose-950 border-rose-500'
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
              Tidak semua perilaku buruk di internet berujung pada sanksi hukum, namun hampir semua meninggalkan luka bagi kemanusiaan. Hoaks telah memicu kekerasan, merusak kepercayaan, dan menciptakan perpecahan yang bertentangan dengan nilai Persatuan Indonesia.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: <Flame className="w-8 h-8 text-red-500 mb-3" />, title: 'Kekerasan Komunitas', desc: 'Hoaks berbasis SARA memicu serangan massal di dunia nyata, menyebabkan luka fisik dan trauma berkepanjangan yang merusak kerukunan.', border: 'hover:border-red-500' },
                { icon: <Landmark className="w-8 h-8 text-amber-500 mb-3" />, title: 'Krisis Kepercayaan', desc: 'Hoaks tentang institusi merusak kepercayaan publik pada vaksinasi atau bantuan sosial, membuat masyarakat rentan terhadap bahaya nyata.', border: 'hover:border-amber-500' },
                { icon: <HeartCrack className="w-8 h-8 text-orange-500 mb-3" />, title: 'Disintegrasi Sosial', desc: 'Polarisasi memecah keluarga dan komunitas. Sahabat dan kerabat bisa saling curiga hanya karena terjebak narasi hoaks yang berbeda.', border: 'hover:border-orange-500' }
              ].map((item, idx) => (
                <Card key={idx} className={`bg-white border-slate-200 shadow-sm dark:bg-slate-900 dark:border-slate-800 dark:shadow-none transition-all h-full ${item.border}`}>
                  <CardHeader>
                    <CardTitle className="text-slate-900 dark:text-slate-100 flex flex-col items-start gap-1">
                      {item.icon}
                      {item.title}
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
                Dampak hoaks adalah bukti nyata bahwa pelanggaran etika digital sama berbahayanya dengan pelanggaran hukum. Menjaga Persatuan Indonesia di era modern bermula dari tanggung jawab moral kita sebelum menekan tombol &quot;Bagikan&quot;. Membaca fenomena ini adalah langkah pertama, mengubah kebiasaan adalah langkah selanjutnya.
              </p>
            </div>
          </motion.div>
        </section>

      </div>
    </div>
  )
}