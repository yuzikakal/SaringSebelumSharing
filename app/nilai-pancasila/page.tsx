/* eslint-disable @next/next/no-img-element */
'use client'

import { motion } from 'framer-motion'
import { 
  Star, Users, Handshake, Shield, Globe, 
  Flame, MessageSquare, Ear, Swords, ShieldCheck 
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export default function NilaiPancasilaPage() {
  const principles = [
    {
      icon: Star,
      title: 'Sila 1: Ketuhanan Yang Maha Esa',
      description: 'Menghormati keberagaman agama dan kepercayaan dengan berbicara santun di media sosial.',
      digital: 'Jangan gunakan agama untuk menyerang orang lain online.',
      image: 'https://cdns.klimg.com/resized/646x323/p/headline/nama-agama-dan-tempat-iba-ca15b37f1bcc.jpg',
    },
    {
      icon: Users,
      title: 'Sila 2: Kemanusiaan Yang Adil dan Beradab',
      description: 'Memperlakukan setiap individu dengan martabat dan menghindari ujaran kebencian.',
      digital: 'Hormati hak asasi setiap netizen tanpa terkecuali.',
      image: 'https://asset.kompas.com/crops/fGt13_v0Xm4dyv5qGwPrZBjQeRQ=/0x47:1440x1007/750x500/data/photo/2022/10/10/6344013333a57.png',
    },
    {
      icon: Globe,
      title: 'Sila 3: Persatuan Indonesia',
      description: 'Menjaga persatuan bangsa melalui informasi yang akurat dan berbicara yang bijak. Sila ini menjadi fondasi utama melawan hoaks.',
      digital: 'Cek hoaks agar tidak memecah belah bangsa kita.',
      image: 'https://cdn1-production-images-kly.akamaized.net/HheW7VbZluLsa4aGaD28F60kXZ8=/1280x720/smart/filters:quality(75):strip_icc()/kly-media-production/medias/5149330/original/092314500_1740985159-1740981585697_contoh-makna-sila-ke-3.jpg',
      featured: true,
    },
    {
      icon: Handshake,
      title: 'Sila 4: Kerakyatan Dipimpin Bijaksana',
      description: 'Mengutamakan musyawarah dan memberikan ruang suara untuk semua dengan menghargai perbedaan.',
      digital: 'Dengarkan pendapat berbeda, jangan langsung serang.',
      image: 'https://images.hukumonline.com/frontend/lt66fb9f5891944/lt66fba36af2d53.jpg',
    },
    {
      icon: Shield,
      title: 'Sila 5: Keadilan Sosial',
      description: 'Membagikan informasi yang adil dan tidak merugikan kelompok sosial tertentu.',
      digital: 'Waspada konten yang membeda-bedakan status atau golongan.',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop&q=80',
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

  const threats = [
    { icon: <Flame className="w-6 h-6 text-red-500" />, title: 'Hoaks Pemecah Belah', desc: 'Informasi palsu yang menargetkan kelompok tertentu menciptakan ketegangan dan menghancurkan kepercayaan antar komunitas.' },
    { icon: <MessageSquare className="w-6 h-6 text-orange-500" />, title: 'Ujaran Kebencian', desc: 'Komentar yang menyerang agama, etnis, atau kelompok tertentu secara langsung melawan nilai persatuan yang inklusif.' },
    { icon: <Ear className="w-6 h-6 text-amber-500" />, title: 'Ruang Gema (Echo Chamber)', desc: 'Algoritma menciptakan "ruang gema" di mana orang hanya berinteraksi dengan pandangan sama, menganggap kelompok berbeda sebagai musuh.' },
    { icon: <Swords className="w-6 h-6 text-rose-500" />, title: 'Permusuhan Tanpa Dasar', desc: 'Saling serang dengan emosi tinggi tanpa bukti faktual, merusak persatuan demi kemenangan argumen digital yang tidak bermakna.' }
  ]

  const sila3Actions = [
    { title: 'Verifikasi Sebelum Berbagi', desc: 'Jangan langsung share tanpa cek fakta. Tanyakan pada diri sendiri: "Apakah ini benar? Siapa sumbernya?" Setiap kali Anda verifikasi, Anda menjaga persatuan.' },
    { title: 'Hindari Ujaran Kebencian & SARA', desc: 'Jangan tulis atau bagikan konten yang menyerang kelompok lain. Setiap ujaran kebencian adalah pukulan terhadap persatuan.' },
    { title: 'Hormati Perspektif Berbeda', desc: 'Saat tidak setuju, jangan langsung serang. Coba pahami mengapa mereka berpikir demikian. Diskusi santun adalah komitmen pada persatuan sejati.' },
    { title: 'Keluar dari "Ruang Gema"', desc: 'Sengaja ikuti akun dengan pandangan berbeda. Baca perspektif yang berlawanan untuk memperkaya pemahaman sebagai wujud menghormati keberagaman.' },
    { title: 'Edukasi dengan Hati', desc: 'Saat melihat orang berbagi hoaks, jangan hanya marahi. Edukasi dengan santun: "Kak, konten ini hoaks menurut situs verifikasi..." jauh lebih efektif daripada menyerang.' },
    { title: 'Laporkan Konten Berbahaya', desc: 'Laporkan hoaks masif atau ujaran kebencian ke platform. Ini adalah tindakan positif menjaga lingkungan digital yang aman dan bersatu.' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header - Inline Animations */}
        <div className="mb-12 sm:mb-16 text-center space-y-4">
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold text-red-600 dark:text-red-400 uppercase tracking-widest"
          >
            Pendidikan Pancasila
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100"
          >
            Nilai-Nilai di Era Digital
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            Pancasila bukan sekadar filosofi masa lalu. Ini adalah kompas moral kita di lautan digital.
          </motion.p>
        </div>

        {/* Cinematic Sila Grid - Stagger via delay: idx * 0.1 */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {principles.map((principle, idx) => {
              const Icon = principle.icon
              const isFeatured = principle.featured
              
              return (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 30 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`${isFeatured ? 'md:col-span-2' : ''} relative rounded-2xl overflow-hidden group cursor-default h-[350px] sm:h-[400px] md:h-[450px]`}
                >
                  <img 
                    src={principle.image} 
                    alt={principle.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10 dark:from-black dark:via-black/60 dark:to-black/10 ${isFeatured ? 'md:bg-gradient-to-r md:from-black/90 md:via-black/50 md:to-transparent dark:md:from-black dark:md:via-black/60 dark:md:to-transparent' : ''}`} />
                  
                  <div className={`absolute inset-0 p-5 sm:p-6 md:p-8 flex flex-col justify-end z-10 ${isFeatured ? 'md:justify-center md:max-w-xl' : ''}`}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-red-600/20 backdrop-blur-md border border-red-500/30 rounded-lg text-red-400">
                        <Icon className="w-5 h-5" />
                      </div>
                      {isFeatured && (
                        <span className="text-[10px] font-bold uppercase tracking-widest bg-white text-black px-2.5 py-1 rounded-full shadow-lg">
                          Fokus Utama
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-md">{principle.title}</h3>
                    <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-4 drop-shadow-sm">{principle.description}</p>
                    
                    <div className="bg-white/20 dark:bg-white/10 backdrop-blur-md border border-white/30 dark:border-white/20 p-4 rounded-xl max-w-md shadow-lg">
                      <p className="text-[10px] uppercase tracking-widest text-red-200 dark:text-red-300 font-semibold mb-1">Penerapan Digital</p>
                      <p className="text-white text-sm drop-shadow-sm">{principle.digital}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </section>

        {/* Digital Behavior Section */}
        <section className="mb-20">
          <div className="space-y-8">
            <div className="text-center">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2"
              >
                Butir-Butir Pengamalan Digital
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-slate-600 dark:text-slate-300"
              >
                Komitmen praktis sebagai netizen Pancasila yang bijak
              </motion.p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {digitalBehaviors.map((behavior, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-4 hover:border-red-500/50 transition-colors group"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-950 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-red-500 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-red-500 group-hover:bg-white transition-colors" />
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 text-sm">{behavior}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Sila 3 Detailed Explanation */}
        <section className="mb-20">
          <div className="space-y-10">
            <div className="text-center">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold text-slate-900 dark:text-slate-100"
              >
                Pendalaman: Sila ke-3
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl mx-auto mt-4"
              >
                Di era digital, nilai &quot;Persatuan Indonesia&quot; menjadi lebih penting dari sebelumnya. Mari kita pahami ancaman dan cara pengamalan sila ini di dunia maya.
              </motion.p>
            </div>

            {/* Definisi */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-red-50 to-slate-50 border border-red-200 dark:from-red-950/50 dark:to-slate-900 dark:border-red-500/30 rounded-lg p-6 text-center max-w-3xl mx-auto"
            >
              <h3 className="text-sm font-semibold text-red-600 dark:text-red-400 uppercase tracking-wider mb-2">Definisi Sila ke-3</h3>
              <p className="text-slate-800 dark:text-slate-200 leading-relaxed">
                &quot;Persatuan Indonesia&quot; bukan hanya sekadar slogan politik. Ini adalah komitmen untuk mempertahankan kesatuan bangsa di tengah keberagaman. Persatuan bukan berarti keseragaman, melainkan kemampuan menghormati perbedaan sambil tetap bersatu dalam tujuan bersama: kemajuan Indonesia.
              </p>
            </motion.div>

            {/* Ancaman Persatuan (4 Cards) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-6 text-center">Ancaman Persatuan di Era Digital</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {threats.map((threat, idx) => (
                  <Card key={idx} className="bg-white border-slate-200 dark:bg-slate-900 dark:border-slate-800 hover:border-red-500/50 transition-all">
                    <CardContent className="p-5 flex gap-4 items-start">
                      <div className="mt-1">{threat.icon}</div>
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">{threat.title}</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{threat.desc}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Butir Pengamalan (Timeline) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-8 text-center">Butir Pengamalan Sila ke-3 di Media Sosial</h3>
              <div className="relative border-l-2 border-red-200 dark:border-red-900/50 ml-3 sm:ml-6 space-y-8">
                {sila3Actions.map((action, idx) => (
                  <motion.div 
                    key={idx} 
                    className="relative flex gap-6 items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                  >
                    <div className="absolute -left-[1.55rem] sm:-left-[1.85rem] top-0 w-8 h-8 rounded-full bg-red-600 dark:bg-red-700 flex items-center justify-center text-white text-sm font-bold shadow-md ring-4 ring-white dark:ring-slate-950">
                      {idx + 1}
                    </div>
                    <div className="ml-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-lg shadow-sm w-full hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-2">{action.title}</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{action.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </section>

        {/* Commitment Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="bg-slate-100 border-t border-slate-200 dark:bg-slate-900/50 dark:border-slate-800 rounded-lg p-8 text-center"
        >
          <div className="space-y-4 max-w-2xl mx-auto">
            <div className="mx-auto w-fit p-3 bg-red-100 dark:bg-red-950 rounded-full">
              <ShieldCheck className="w-8 h-8 text-red-600 dark:text-red-400" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              Komitmen Netizen Bijak
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Dengan memahami nilai-nilai Pancasila, khususnya Sila ke-3, kita dapat menciptakan lingkungan digital yang lebih sehat. Setiap klik, komentar, dan pembagian adalah bentuk tanggung jawab kita terhadap persatuan bangsa.
            </p>
            <p className="text-slate-500 dark:text-slate-400 italic pt-2 text-sm">
              &quot;Berbicara bijak hari ini, untuk masa depan yang lebih bersatu esok hari.&quot;
            </p>
          </div>
        </motion.section>

      </div>
    </div>
  )
}