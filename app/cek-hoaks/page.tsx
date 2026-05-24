'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import ResultCard from '@/components/result-card'
import { Loader2, Search } from 'lucide-react'

interface CheckNewsResponse {
  status: 'HOAKS' | 'FAKTA' | 'MERAGUKAN'
  skor_kepercayaan: number
  kesimpulan: string
  sumber_valid: Array<{ judul_sumber: string; url_sumber: string }>
}

export default function CekHoaksPage() {
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<CheckNewsResponse | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleCheck = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!input.trim()) {
      setError('Mohon masukkan berita atau URL untuk diperiksa')
      return
    }

    setLoading(true)
    setError(null)
    setResult(null)

    try {
      const response = await fetch('/api/check-news', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ inputUser: input }),
      })

      if (!response.ok) {
        throw new Error('Terjadi kesalahan saat memproses permintaan')
      }

      const data = await response.json()
      
      if (data.error) {
        setError(data.error)
      } else {
        setResult(data)
      }
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Terjadi kesalahan yang tidak terduga. Silakan coba lagi.'
      )
    } finally {
      setLoading(false)
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
            Cek Berita & Hoaks
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Masukkan URL atau teks klaim yang ingin Anda verifikasi
          </p>
        </motion.div>

        {/* Input Form */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          <Card className="bg-white border-slate-200 shadow-sm dark:bg-slate-900 dark:border-slate-800 dark:shadow-none overflow-hidden">
            <CardHeader className="border-b border-slate-200 dark:border-slate-800">
              <CardTitle className="flex items-center gap-2 text-slate-900 dark:text-slate-100">
                <Search className="w-5 h-5 text-red-500" />
                Pemeriksaan Hoaks AI
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleCheck} className="space-y-4">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Contoh: 'Vaksin mengandung microchip' atau masukkan URL berita"
                  className="w-full h-32 px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none transition-colors"
                  disabled={loading}
                />

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    type="submit"
                    disabled={loading}
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sedang Memeriksa...
                      </>
                    ) : (
                      <>
                        <Search className="w-4 h-4" />
                        Periksa Sekarang
                      </>
                    )}
                  </Button>
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400">
                  💡 Tips: Semakin detail informasi yang Anda berikan, semakin akurat hasil pemeriksaan.
                </p>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        {/* Error Message */}
        {error && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.3 }}
            className="mb-8"
          >
            <Card className="bg-red-50 border-red-200 dark:bg-red-950/20 dark:border-red-500/50">
              <CardContent>
                <p className="text-red-600 dark:text-red-300">⚠️ {error}</p>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Result */}
        {result && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            className="space-y-6 mb-12"
          >
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">Hasil Pemeriksaan</h2>
              {/* Result Card Fallback Wrapper */}
              <div className="rounded-xl overflow-hidden">
                <ResultCard {...result} />
              </div>
            </div>

            {/* Additional Info */}
            <Card className="bg-white border-slate-200 shadow-sm dark:bg-slate-900 dark:border-slate-800 dark:shadow-none">
              <CardHeader className="border-b border-slate-200 dark:border-slate-800">
                <CardTitle className="text-slate-900 dark:text-slate-100">Rekomendasi Anda</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {result.status === 'HOAKS' && (
                  <>
                    <p className="text-slate-700 dark:text-slate-300">
                      ❌ <span className="font-semibold">Jangan bagikan informasi ini!</span>
                    </p>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">
                      Jika Anda sudah membagikannya, lebih baik hapus atau buat postingan koreksi. 
                      Edukasi teman Anda tentang bahaya hoaks.
                    </p>
                  </>
                )}
                {result.status === 'FAKTA' && (
                  <>
                    <p className="text-slate-700 dark:text-slate-300">
                      ✅ <span className="font-semibold">Informasi ini terbukti akurat.</span>
                    </p>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">
                      Anda boleh membagikan informasi ini, namun tetap sertakan sumber yang kredibel 
                      agar pembaca dapat memverifikasi sendiri.
                    </p>
                  </>
                )}
                {result.status === 'MERAGUKAN' && (
                  <>
                    <p className="text-slate-700 dark:text-slate-300">
                      ❓ <span className="font-semibold">Status informasi tidak jelas.</span>
                    </p>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">
                      Sebaiknya tunggu verifikasi resmi dari lembaga terkait sebelum membagikan. 
                      Hindari menyebarkan spekulasi.
                    </p>
                  </>
                )}
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Empty State */}
        {!result && !loading && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-white border-slate-200 shadow-sm dark:bg-slate-900 dark:border-slate-800 dark:shadow-none text-center">
              <CardContent className="pt-12 pb-12">
                <Search className="w-12 h-12 text-slate-400 dark:text-slate-500 mx-auto mb-4" />
                <p className="text-slate-600 dark:text-slate-300 mb-2">Belum ada pemeriksaan</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                  Masukkan berita atau URL di atas untuk memulai pemeriksaan
                </p>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Info Section */}
        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full bg-white border-slate-200 shadow-sm dark:bg-slate-900 dark:border-slate-800 dark:shadow-none">
              <CardHeader>
                <CardTitle className="text-slate-900 dark:text-slate-100">Bagaimana Sistem Bekerja?</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600 dark:text-slate-300 text-sm space-y-2">
                <p>
                  🤖 Sistem ini menggunakan AI Gemini 3.5 Flash dengan penelusuran web untuk menganalisis klaim.
                </p>
                <p>
                  🔍 Kami memeriksa sumber yang kredibel dan mengevaluasi konsistensi informasi.
                </p>
                <p>
                  📊 Hasil diberikan dalam format skor kepercayaan 0-100 untuk kemudahan pemahaman.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="h-full bg-white border-slate-200 shadow-sm dark:bg-slate-900 dark:border-slate-800 dark:shadow-none">
              <CardHeader>
                <CardTitle className="text-slate-900 dark:text-slate-100">Keterbatasan Sistem</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600 dark:text-slate-300 text-sm space-y-2">
                <p>
                  ⚠️ Hasil pemeriksaan bukan keputusan hukum, hanya referensi analisis.
                </p>
                <p>
                  🌐 Akurasi bergantung pada ketersediaan data dan sumber online.
                </p>
                <p>
                  👥 Untuk klaim kompleks, sebaiknya cek dengan ahli atau lembaga resmi.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}