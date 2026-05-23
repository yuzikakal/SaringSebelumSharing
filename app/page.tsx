import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AlertTriangle, Share2, Users, ShieldCheck } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            {/* Light mode: Merah gelap ke hitam. Dark mode: Merah terang ke putih pucat */}
            <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-800 dark:from-red-500 dark:via-red-400 dark:to-red-200 bg-clip-text text-transparent">
              Saring Sebelum Sharing
            </span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Jadilah netizen bijak dengan memeriksa kebenaran informasi sebelum membagikannya. 
            Cegah penyebaran hoaks dan ciptakan ruang digital yang lebih sehat.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link href="/cek-hoaks">
              <Button size="lg" className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-semibold gap-2">
                <ShieldCheck className="w-5 h-5" />
                Uji Berita Sekarang
              </Button>
            </Link>
            <Link href="/fenomena">
              <Button 
                size="lg" 
                variant="outline"
                className="w-full sm:w-auto border-slate-300 text-slate-900 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-100 dark:hover:bg-slate-800"
              >
                Pelajari Fenomena
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Urgency Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-8 text-center">
          Ancaman Literasi Digital
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {/* Card 1 */}
          <Card className="bg-white border-slate-200 hover:border-red-500 shadow-sm dark:bg-slate-900 dark:border-slate-800 dark:hover:border-red-500 dark:shadow-none transition-all group">
            <CardHeader>
              <AlertTriangle className="w-8 h-8 text-red-500 mb-2 group-hover:scale-110 transition-transform" />
              <CardTitle className="text-lg text-slate-900 dark:text-slate-100">Ujaran Kebencian</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Konten yang memicu kebencian dan permusuhan dapat merusak harmoni di media sosial dan masyarakat real.
              </p>
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card className="bg-white border-slate-200 hover:border-amber-500 shadow-sm dark:bg-slate-900 dark:border-slate-800 dark:hover:border-amber-500 dark:shadow-none transition-all group">
            <CardHeader>
              <Share2 className="w-8 h-8 text-amber-500 mb-2 group-hover:scale-110 transition-transform" />
              <CardTitle className="text-lg text-slate-900 dark:text-slate-100">Hoaks Berantai</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Informasi palsu yang dibagikan berulang kali menciptakan kepercayaan palsu dan mengecoh jutaan orang.
              </p>
            </CardContent>
          </Card>

          {/* Card 3 */}
          <Card className="bg-white border-slate-200 hover:border-orange-500 shadow-sm dark:bg-slate-900 dark:border-slate-800 dark:hover:border-orange-500 dark:shadow-none transition-all group">
            <CardHeader>
              <Users className="w-8 h-8 text-orange-500 mb-2 group-hover:scale-110 transition-transform" />
              <CardTitle className="text-lg text-slate-900 dark:text-slate-100">Krisis Kesantunan</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Perdebatan sengit tanpa dasar faktual menciptakan polarisasi dan menghilangkan kesantunan berbicara.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pancasila Quote Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-red-50 to-slate-50 border border-red-200 dark:from-red-950/50 dark:to-slate-900 dark:border-red-500/30 rounded-lg p-8 text-center space-y-4">
          <h3 className="text-sm font-semibold text-red-600 dark:text-red-400 uppercase tracking-wider">Sila ke-3 Pancasila</h3>
          <p className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
            &quot;Persatuan Indonesia&quot;
          </p>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Persatuan nasional tidak dapat dibangun jika kita terus menyebarkan informasi palsu dan menghina sesama. 
            Sebagai netizen, kita memiliki tanggung jawab untuk menjaga persatuan melalui kesantunan dan kejujuran digital.
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
              <CardTitle className="text-lg text-slate-900 dark:text-slate-100">Tingkat Literasi Digital</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="text-4xl font-bold text-red-500">42%</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Masyarakat Indonesia masih memiliki literasi digital rendah dan mudah percaya hoaks tanpa verifikasi.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-slate-200 hover:border-amber-500 shadow-sm dark:bg-slate-900 dark:border-slate-800 dark:hover:border-amber-500 dark:shadow-none transition-all">
            <CardHeader>
              <CardTitle className="text-lg text-slate-900 dark:text-slate-100">Hoaks Dibagikan Setiap Hari</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="text-4xl font-bold text-amber-500">1000+</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Konten hoaks baru beredar di media sosial dan grup WhatsApp setiap harinya di Indonesia.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-slate-200 hover:border-orange-500 shadow-sm dark:bg-slate-900 dark:border-slate-800 dark:hover:border-orange-500 dark:shadow-none transition-all">
            <CardHeader>
              <CardTitle className="text-lg text-slate-900 dark:text-slate-100">Polarisasi Masyarakat</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="text-4xl font-bold text-orange-500">73%</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Meningkatnya polarisasi di media sosial menyebabkan kehilangan empati antar kelompok masyarakat.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-slate-200 hover:border-emerald-500 shadow-sm dark:bg-slate-900 dark:border-slate-800 dark:hover:border-emerald-500 dark:shadow-none transition-all">
            <CardHeader>
              <CardTitle className="text-lg text-slate-900 dark:text-slate-100">Ujaran Kebencian Online</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="text-4xl font-bold text-emerald-500">68%</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Pengguna media sosial pernah mengalami atau menyaksikan ujaran kebencian di platform digital.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Revisi Dinding Teks */}
        <div className="mt-10 bg-gradient-to-r from-red-50 to-slate-50 border border-red-200 dark:from-red-950/40 dark:to-slate-900/40 dark:border-red-500/30 rounded-lg p-8 space-y-4">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Realitas Krisis Digital</h3>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            Indonesia menghadapi krisis literasi digital yang serius. Hoaks tidak hanya menyebarkan informasi palsu, 
            tetapi juga memicu dampak nyata:
          </p>
          <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 leading-relaxed space-y-2 ml-2">
            <li><span className="font-semibold text-slate-900 dark:text-slate-100">Polarisasi sosial</span> dan ujaran kebencian yang berujung kekerasan di dunia nyata.</li>
            <li>Terbentuknya <span className="font-semibold text-slate-900 dark:text-slate-100">&quot;ruang gema&quot; (echo chamber)</span> yang memperkuat keyakinan salah sambil mengasingkan perspektif berbeda.</li>
          </ul>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed pt-2">
            Ini langsung bertentangan dengan nilai <span className="font-bold text-red-600 dark:text-red-400">Sila ke-3 Pancasila: Persatuan Indonesia</span>. 
            Persatuan tidak dapat berdiri kokoh jika masyarakat tercerai-berai oleh informasi palsu dan saling mencurigai. 
            Sebagai netizen, tanggung jawab kita adalah <span className="font-bold text-emerald-600 dark:text-emerald-400">memverifikasi informasi</span>, 
            menghormati perspektif berbeda, dan berbicara dengan santun meskipun tidak setuju.
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-emerald-50 border-t border-emerald-200 dark:bg-emerald-950/20 dark:border-emerald-500/20 mt-16 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
            Mulai Sekarang
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-lg">
            Cek kebenaran berita, pahami fenomena digital, dan bergabunglah dengan netizen bijak Indonesia.
          </p>
          <Link href="/cek-hoaks">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-semibold">
              Cek Hoaks Gratis
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}