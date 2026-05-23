'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Heart, Send, Users } from 'lucide-react'

export default function KesimpulanPage() {
  const [pledgeName, setPledgeName] = useState('')
  const [pledges, setPledges] = useState<string[]>([])
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const STORAGE_KEY = 'saringNetizanPledges'

  // Load pledges from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        setPledges(JSON.parse(stored))
      }
    } catch (error) {
      console.error('Error loading pledges:', error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!pledgeName.trim()) {
      alert('Mohon masukkan nama Anda')
      return
    }

    const newPledges = [...pledges, pledgeName.trim()]
    setPledges(newPledges)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newPledges))
    setPledgeName('')
    setSubmitted(true)

    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12 text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-100">
            Kesimpulan & Komitmen
          </h1>
          <p className="text-lg text-slate-300">
            Bergabunglah dengan jutaan netizen bijak Indonesia
          </p>
        </div>

        {/* Main Message */}
        <Card className="bg-gradient-to-r from-slate-800 to-slate-900 border border-red-500/30 mb-12">
          <CardContent className="pt-8 space-y-6">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold text-slate-100">
                Apa Yang Telah Kita Pelajari?
              </h2>
              <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
                <p>
                  Media sosial adalah alat komunikasi yang powerful, namun juga penuh dengan tantangan. 
                  Algoritma menciptakan ruang gema yang memperkuat bias kita.
                </p>
                <p>
                  Hoaks menyebar lebih cepat daripada kebenaran karena menyentuh emosi. 
                  Kita yang memiliki kekuatan untuk menghentikan penyebarannya.
                </p>
                <p>
                  Persatuan Indonesia bergantung pada kesantunan digital kita. 
                  Setiap klik adalah pilihan untuk membangun atau merusak.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              {[
                { number: '80%', label: 'Hoaks menyebar 6x lebih cepat' },
                { number: '67%', label: 'Orang berbagi tanpa verifikasi' },
                { number: '1M+', label: 'Dampak dari 1 hoaks' },
              ].map((stat, idx) => (
                <div key={idx} className="text-center p-4 bg-slate-900/50 rounded-lg border border-slate-700">
                  <div className="text-2xl font-bold text-red-400">{stat.number}</div>
                  <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Pledge Section */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Pledge Form */}
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="bg-slate-800">
              <CardTitle className="flex items-center gap-2 text-slate-100">
                <Heart className="w-5 h-5 text-red-500" />
                Deklarasi Netizen Bijak
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-200 mb-2">
                    Nama Anda
                  </label>
                  <Input
                    type="text"
                    value={pledgeName}
                    onChange={(e) => setPledgeName(e.target.value)}
                    placeholder="Masukkan nama Anda"
                    className="bg-white dark:bg-slate-950 border-slate-700 text-slate-100 placeholder-slate-500 focus:border-red-500"
                  />
                </div>

                <div className="bg-white dark:bg-slate-950 rounded-lg p-4 border-l-4 border-red-500 space-y-3">
                  <p className="text-sm font-semibold text-slate-200">Saya berkomitmen untuk:</p>
                  <ul className="text-sm text-slate-300 space-y-1">
                    <li>✓ Memeriksa kebenaran sebelum membagikan informasi</li>
                    <li>✓ Berbicara dengan santun di media sosial</li>
                    <li>✓ Menghormati pendapat yang berbeda</li>
                    <li>✓ Menjaga persatuan Indonesia di ruang digital</li>
                  </ul>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Saya Berkomitmen
                </Button>

                {submitted && (
                  <div className="bg-green-950/30 border border-green-500/50 rounded-lg p-3 text-center">
                    <p className="text-green-400 text-sm font-semibold">
                      ✓ Terima kasih! Komitmen Anda telah tercatat.
                    </p>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>

          {/* Pledge List */}
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="bg-slate-800">
              <CardTitle className="flex items-center gap-2 text-slate-100">
                <Users className="w-5 h-5 text-red-500" />
                Netizen Bijak Kami ({pledges.length})
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              {isLoading ? (
                <div className="text-center py-8 text-slate-400">
                  <p>Memuat data...</p>
                </div>
              ) : pledges.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-slate-400">Jadilah yang pertama berkomitmen</p>
                </div>
              ) : (
                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {pledges.map((name, idx) => (
                    <div
                      key={idx}
                      className="bg-white dark:bg-slate-950 rounded-lg p-3 border border-slate-800 hover:border-red-500/30 transition-colors flex items-center gap-2"
                    >
                      <Heart className="w-4 h-4 text-red-500 flex-shrink-0" />
                      <span className="text-slate-200 text-sm">{name}</span>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Final Message */}
        <div className="mt-12 bg-slate-900 border border-slate-800 rounded-lg p-8 text-center space-y-4">
          <h3 className="text-2xl font-bold text-slate-100">
            Masa Depan Digital Ada di Tangan Kita
          </h3>
          <p className="text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Setiap keputusan untuk memeriksa informasi, setiap pilihan untuk berbicara santun, 
            dan setiap komitmen untuk jujur—itu membuat perbedaan. Bersama kita bisa membangun 
            Indonesia digital yang lebih sehat, lebih bijak, dan lebih persatuan.
          </p>
          <p className="text-red-400 font-semibold italic pt-4">
            &quot;Saring Sebelum Sharing - Untuk Indonesia yang Lebih Baik&quot;
          </p>
        </div>

        {/* Resources */}
        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader>
              <CardTitle className="text-slate-100">Lanjutkan Belajar</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-300 text-sm space-y-2">
              <p>📚 Pelajari fenomena digital lebih dalam</p>
              <p>📖 Pahami nilai-nilai Pancasila dalam kehidupan sehari-hari</p>
              <p>🔍 Praktik cek hoaks secara rutin</p>
              <p>👥 Ajari orang terdekat tentang literasi digital</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader>
              <CardTitle className="text-slate-100">Sumber Terpercaya</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-300 text-sm space-y-2">
              <p>✓ Turnbackhoax.id - Fact-checking Indonesia</p>
              <p>✓ Mafindo - Masyarakat Anti Fitnah Indonesia</p>
              <p>✓ Kominfo RI - Edukasi Digital</p>
              <p>✓ Kemendikbudristek - Program Literasi</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
