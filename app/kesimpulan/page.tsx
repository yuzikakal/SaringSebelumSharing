'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { supabase } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Heart, Send, Users, Loader2 } from 'lucide-react'

export default function KesimpulanPage() {
  const [pledgeName, setPledgeName] = useState('')
  const [pledges, setPledges] = useState<string[]>([])
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    fetchPledges()
  }, [])

  const fetchPledges = async () => {
    setIsLoading(true)
    try {
      const { data, error } = await supabase
        .from('komitmen')
        .select('nama')
        .order('created_at', { ascending: false })

      if (error) throw error

      if (data) {
        setPledges(data.map((item) => item.nama))
      }
    } catch (error) {
      console.error('Error fetching pledges:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!pledgeName.trim()) {
      alert('Mohon masukkan nama Anda')
      return
    }

    setIsSubmitting(true)

    try {
      // Tambahkan .select() agar Supabase merespon dengan data atau error yang detail
      const { error } = await supabase
        .from('komitmen')
        .insert([{ nama: pledgeName.trim() }])
        .select()

      if (error) {
        // Log error detail dari Supabase
        console.error('Supabase Error Details:', error.message, error.details, error.hint)
        throw error
      }

      // Update UI locally
      setPledges([pledgeName.trim(), ...pledges])
      setPledgeName('')
      setSubmitted(true)

      setTimeout(() => setSubmitted(false), 3000)
    } catch (error: any) {
      console.error('Error submitting pledge:', error)
      // Tampilkan pesan error asli dari Supabase ke user
      alert(`Terjadi kesalahan: ${error?.message || 'Silakan coba lagi.'}`)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Header */}
        <motion.div
          className="mb-12 text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-slate-100">
            Kesimpulan & Komitmen
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Bergabunglah dengan jutaan netizen bijak Indonesia
          </p>
        </motion.div>

        {/* Main Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <Card className="bg-gradient-to-r from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-red-500/30 shadow-sm dark:shadow-none">
            <CardContent className="pt-8 space-y-6">
              <div className="space-y-4 text-center">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
                  Apa Yang Telah Kita Pelajari?
                </h2>
                <div className="space-y-4 text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
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
                  <div key={idx} className="text-center p-4 bg-white dark:bg-slate-900/50 rounded-lg border border-slate-200 dark:border-slate-700">
                    <div className="text-2xl font-bold text-red-600 dark:text-red-400">{stat.number}</div>
                    <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Pledge Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid lg:grid-cols-2 gap-8 mb-12"
        >
          {/* Pledge Form */}
          <Card className="bg-white border-slate-200 shadow-sm dark:bg-slate-900 dark:border-slate-800 dark:shadow-none overflow-hidden">
            <CardHeader className="border-b border-slate-200 dark:border-slate-800">
              <CardTitle className="flex items-center gap-2 text-slate-900 dark:text-slate-100">
                <Heart className="w-5 h-5 text-red-500" />
                Deklarasi Netizen Bijak
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Nama Anda
                  </label>
                  <Input
                    type="text"
                    value={pledgeName}
                    onChange={(e) => setPledgeName(e.target.value)}
                    placeholder="Masukkan nama Anda"
                    className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 border-slate-300 dark:border-slate-700 placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:border-red-500 focus:ring-red-500"
                    disabled={isSubmitting}
                  />
                </div>

                <div className="bg-slate-50 dark:bg-slate-950 rounded-lg p-4 border border-slate-200 dark:border-slate-800 border-l-4 border-l-red-500 space-y-3">
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-200">Saya berkomitmen untuk:</p>
                  <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                    <li>✓ Memeriksa kebenaran sebelum membagikan informasi</li>
                    <li>✓ Berbicara dengan santun di media sosial</li>
                    <li>✓ Menghormati pendapat yang berbeda</li>
                    <li>✓ Menjaga persatuan Indonesia di ruang digital</li>
                  </ul>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Menyimpan...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Saya Berkomitmen
                    </>
                  )}
                </Button>

                {submitted && (
                  <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-500/50 rounded-lg p-3 text-center">
                    <p className="text-emerald-700 dark:text-emerald-300 text-sm font-semibold">
                      ✓ Terima kasih! Komitmen Anda telah tercatat.
                    </p>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>

          {/* Pledge List */}
          <Card className="bg-white border-slate-200 shadow-sm dark:bg-slate-900 dark:border-slate-800 dark:shadow-none overflow-hidden">
            <CardHeader className="border-b border-slate-200 dark:border-slate-800">
              <CardTitle className="flex items-center gap-2 text-slate-900 dark:text-slate-100">
                <Users className="w-5 h-5 text-red-500" />
                Netizen Bijak Kami ({pledges.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="text-center py-8 text-slate-500 dark:text-slate-400">
                  <Loader2 className="w-6 h-6 animate-spin mx-auto mb-2" />
                  <p>Memuat data...</p>
                </div>
              ) : pledges.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-slate-500 dark:text-slate-400">Jadilah yang pertama berkomitmen</p>
                </div>
              ) : (
                <div className="space-y-2 max-h-80 overflow-y-auto scrollbar-minimal pr-1">
                  {pledges.map((name, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-50 dark:bg-slate-950 rounded-lg p-3 border border-slate-200 dark:border-slate-800 hover:border-red-500/50 dark:hover:border-red-500/30 transition-colors flex items-center gap-2"
                    >
                      <Heart className="w-4 h-4 text-red-500 flex-shrink-0" />
                      <span className="text-slate-800 dark:text-slate-200 text-sm">{name}</span>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Final Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-12"
        >
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-8 text-center space-y-4 shadow-sm dark:shadow-none">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              Masa Depan Digital Ada di Tangan Kita
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Setiap keputusan untuk memeriksa informasi, setiap pilihan untuk berbicara santun,
              dan setiap komitmen untuk jujur—itu membuat perbedaan. Bersama kita bisa membangun
              Indonesia digital yang lebih sehat, lebih bijak, dan lebih persatuan.
            </p>
            <p className="text-red-600 dark:text-red-400 font-semibold italic pt-4">
              &quot;Saring Sebelum Sharing - Untuk Indonesia yang Lebih Baik&quot;
            </p>
          </div>
        </motion.div>

        {/* Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid sm:grid-cols-2 gap-6"
        >
          <Card className="bg-white border-slate-200 shadow-sm dark:bg-slate-900 dark:border-slate-800 dark:shadow-none">
            <CardHeader>
              <CardTitle className="text-slate-900 dark:text-slate-100">Lanjutkan Belajar</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-600 dark:text-slate-300 text-sm space-y-2">
              <p>📚 Pelajari fenomena digital lebih dalam</p>
              <p>📖 Pahami nilai-nilai Pancasila dalam kehidupan sehari-hari</p>
              <p>🔍 Praktik cek hoaks secara rutin</p>
              <p>👥 Ajari orang terdekat tentang literasi digital</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-slate-200 shadow-sm dark:bg-slate-900 dark:border-slate-800 dark:shadow-none">
            <CardHeader>
              <CardTitle className="text-slate-900 dark:text-slate-100">Sumber Terpercaya</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-600 dark:text-slate-300 text-sm space-y-2">
              <p>✓ Turnbackhoax.id - Fact-checking Indonesia</p>
              <p>✓ Mafindo - Masyarakat Anti Fitnah Indonesia</p>
              <p>✓ Kominfo RI - Edukasi Digital</p>
              <p>✓ Kemendikbudristek - Program Literasi</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}