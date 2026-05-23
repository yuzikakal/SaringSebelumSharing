import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AlertTriangle, Share2, Users, ShieldCheck, PenTool } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center space-y-6">
          <p className="text-sm font-semibold text-red-600 dark:text-red-400 uppercase tracking-widest">
            Bhinneka Tunggal Ika di Balik Layar Kaca
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-800 dark:from-red-500 dark:via-red-400 dark:to-red-200 bg-clip-text text-transparent">
              Saring Sebelum Sharing
            </span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Perbedaan opini adalah wajah demokrasi, namun hoaks dan ujaran kebencian adalah racun persatuan. 
            Kendalikan ego dan ibu jari Anda—jadilah netizen yang menjaga <span className="font-semibold text-slate-900 dark:text-white">Persatuan Indonesia</span> di era digital.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link href="/cek-hoaks">
              <Button size="lg" className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-semibold gap-2">
                <ShieldCheck className="w-5 h-5" />
                Uji Berita dengan AI
              </Button>
            </Link>
            <Link href="/kesimpulan"> {/* Arahkan ke halaman deklarasi/kesimpulan */}
              <Button 
                size="lg" 
                variant="outline"
                className="w-full sm:w-auto border-slate-300 text-slate-900 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-100 dark:hover:bg-slate-800 gap-2"
              >
                <PenTool className="w-5 h-5" />
                Deklarasi Netizen Bijak
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Urgency Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-8 text-center">
          Ancaman Etika Digital
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {/* Card 1 */}
          <Card className="bg-white border-slate-200 hover:border-red-500 shadow-sm dark:bg-slate-900 dark:border-slate-800 dark:hover:border-red-500 dark:shadow-none transition-all group">
            <CardHeader>
              <AlertTriangle className="w-8 h-8 text-red-500 mb-2 group-hover:scale-110 transition-transform" />
              <CardTitle className="text-lg text-slate-900 dark:text-slate-100">Fanatisme & Ujaran Kebencian</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Perbedaan pandang yang dibakar emosi sering memicu kebencian, mengubah ruang diskusi menjadi medan perang yang merusak harmoni.
              </p>
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card className="bg-white border-slate-200 hover:border-amber-500 shadow-sm dark:bg-slate-900 dark:border-slate-800 dark:hover:border-amber-500 dark:shadow-none transition-all group">
            <CardHeader>
              <Share2 className="w-8 h-8 text-amber-500 mb-2 group-hover:scale-110 transition-transform" />
              <CardTitle className="text-lg text-slate-900 dark:text-slate-100">Ruang Gema (Echo Chamber)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Algoritma menjebak kita dalam lingkaran informasi seragam, memperkuat bias, dan menutup pintu empati terhadap kelompok lain.
              </p>
            </CardContent>
          </Card>

          {/* Card 3 */}
          <Card className="bg-white border-slate-200 hover:border-orange-500 shadow-sm dark:bg-slate-900 dark:border-slate-800 dark:hover:border-orange-500 dark:shadow-none transition-all group">
            <CardHeader>
              <Users className="w-8 h-8 text-orange-500 mb-2 group-hover:scale-110 transition-transform" />
              <CardTitle className="text-lg text-slate-900 dark:text-slate-100">Krisis Kesantunan Digital</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Berkata benar tanpa santun sama merusaknya dengan berbohong. Krisis etika ini memecah belah persatuan bangsa dari dalam.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pancasila Quote Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-red-50 to-slate-50 border border-red-200 dark:from-red-950/50 dark:to-slate-900 dark:border-red-500/30 rounded-lg p-8 text-center space-y-4">
          <h3 className="text-sm font-semibold text-red-600 dark:text-red-400 uppercase tracking-wider">Nilai Moral & Etika di Era Modern</h3>
          <p className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
            &quot;Persatuan Indonesia&quot;
          </p>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Sila ke-3 bukan sekadar tentang wilayah, melainkan komitmen untuk tidak merusak persatuan melalui layar kaca. 
            Menyebarkan informasi tanpa verifikasi adalah bentuk keserakahan digital yang mengkhwatirkan, 
            sementara menahan diri untuk menyebar hoaks adalah wujud nyata pengamalan Pancasila.
          </p>
        </div>
      </section>

      {/* Impact Statistics Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-12 text-center">
          Dampak Hoaks Terhadap Persatuan
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-white border-slate-200 hover:border-red-500 shadow-sm dark:bg-slate-900 dark:border-slate-800 dark:hover:border-red-500 dark:shadow-none transition-all">
            <CardHeader>
              <CardTitle className="text-lg text-slate-900 dark:text-slate-100">Indeks Literasi Digital</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="text-4xl font-bold text-red-500">3,54</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Skala 5.00. Masyarakat Indonesia masih di level "sedang" dalam evaluasi informasi, membuat kita rentan manipulasi opini. <span className="italic">(Sumber: Kominfo)</span>
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-slate-200 hover:border-amber-500 shadow-sm dark:bg-slate-900 dark:border-slate-800 dark:hover:border-amber-500 dark:shadow-none transition-all">
            <CardHeader>
              <CardTitle className="text-lg text-slate-900 dark:text-slate-100">Temuan Hoaks Tahunan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="text-4xl font-bold text-amber-500">2.000+</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Ribuan konten manipulatif diproduksi setiap tahunnya untuk mengadu domba dan mengancam kohesi sosial bangsa. <span className="italic">(Sumber: MAFINDO)</span>
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-slate-200 hover:border-orange-500 shadow-sm dark:bg-slate-900 dark:border-slate-800 dark:hover:border-orange-500 dark:shadow-none transition-all">
            <CardHeader>
              <CardTitle className="text-lg text-slate-900 dark:text-slate-100">Efek Echo Chamber</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="text-4xl font-bold text-orange-500">Masif</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Algoritma media sosial mengurung pengguna dalam ruang gema opini, memperlebar kesenjangan dan menghilangkan empati.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-slate-200 hover:border-rose-500 shadow-sm dark:bg-slate-900 dark:border-slate-800 dark:hover:border-rose-500 dark:shadow-none transition-all">
            <CardHeader>
              <CardTitle className="text-lg text-slate-900 dark:text-slate-100">Krisis Kesantunan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="text-4xl font-bold text-rose-500">#29</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Indonesia sempat menduduki peringkat 29 dari 32 negara dalam kesopanan berinternet akibat tingginya ujaran kebencian. <span className="italic">(Sumber: Microsoft DCI)</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Konten Esai Akademik */}
        <div className="mt-10 bg-gradient-to-r from-red-50 to-slate-50 border border-red-200 dark:from-red-950/40 dark:to-slate-900/40 dark:border-red-500/30 rounded-lg p-8 space-y-4">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Realitas Krisis Digital & Moral</h3>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            Tidak semua perilaku buruk di internet memiliki sanksi hukum yang tegas, namun setiap tindakan—seperti ikut menyebar hoaks—memiliki <span className="font-semibold text-slate-900 dark:text-slate-100">dampak kemanusiaan yang merusak persatuan</span>. Hoaks meracuni persepsi dan mengadu domba sesama anak bangsa:
          </p>
          <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 leading-relaxed space-y-2 ml-2">
            <li><span className="font-semibold text-slate-900 dark:text-slate-100">Polarisasi sosial</span> yang dipicu oleh algoritma ruang gema (echo chamber), mempertajam radikalisme digital.</li>
            <li>Erosi empati yang mengubah <span className="font-semibold text-slate-900 dark:text-slate-100">Bhinneka Tunggal Ika</span> dari sebuah kebanggaan menjadi klaim belaka di dunia nyata.</li>
          </ul>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed pt-2">
            Ini adalah bentuk pelanggaran terhadap nilai <span className="font-bold text-red-600 dark:text-red-400">Sila ke-3 Pancasila</span>. 
            Mempertahankan persatuan di era digital bermula dari hal kecil: menahan ibu jari dari tombol "share" sebelum memastikan kebenarannya. 
            Tanggung jawab moral kita adalah <span className="font-bold text-emerald-600 dark:text-emerald-400">memverifikasi informasi</span>, 
            merangkul perbedaan dengan santun, dan mengalahkan ego untuk kepentingan yang lebih besar: Indonesia.
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-emerald-50 border-t border-emerald-200 dark:bg-emerald-950/20 dark:border-emerald-500/20 mt-16 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
            Wujudkan Persatuan di Dunia Digital
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-lg">
            Jangan biarkan hoaks dan ujaran kebencian bercokol di timeline. Cek kebenaran berita dengan AI dan ikuti deklarasi netizen bijak.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Link href="/cek-hoaks">
              <Button size="lg" className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-semibold gap-2">
                <ShieldCheck className="w-5 h-5" />
                Cek Hoaks dengan AI
              </Button>
            </Link>
            <Link href="/kesimpulan">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-emerald-300 text-emerald-800 hover:bg-emerald-100 dark:border-emerald-700 dark:text-emerald-400 dark:hover:bg-emerald-950 font-semibold gap-2">
                <PenTool className="w-5 h-5" />
                Baca Deklarasi Netizen
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}