'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Spinner } from '@/components/ui/spinner'
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
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12 text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-100">
            Cek Berita & Hoaks
          </h1>
          <p className="text-lg text-slate-300">
            Masukkan URL atau teks klaim yang ingin Anda verifikasi
          </p>
        </div>

        {/* Input Form */}
        <Card className="bg-slate-900 border-slate-800 mb-8">
          <CardHeader className="bg-slate-800">
            <CardTitle className="flex items-center gap-2 text-slate-100">
              <Search className="w-5 h-5 text-red-500" />
              Pemeriksaan Hoaks AI
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={handleCheck} className="space-y-4">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Contoh: 'Vaksin mengandung microchip' atau masukkan URL berita"
                className="w-full h-32 px-4 py-3 bg-white dark:bg-slate-950 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
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

              <p className="text-xs text-slate-400">
                💡 Tips: Semakin detail informasi yang Anda berikan, semakin akurat hasil pemeriksaan.
              </p>
            </form>
          </CardContent>
        </Card>

        {/* Error Message */}
        {error && (
          <Card className="bg-red-950/20 border-red-500/50 mb-8">
            <CardContent className="pt-6">
              <p className="text-red-300">⚠️ {error}</p>
            </CardContent>
          </Card>
        )}

        {/* Result */}
        {result && (
          <div className="space-y-6 mb-12">
            <div>
              <h2 className="text-2xl font-bold text-slate-100 mb-4">Hasil Pemeriksaan</h2>
              <ResultCard {...result} />
            </div>

            {/* Additional Info */}
            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <CardTitle className="text-slate-100">Rekomendasi Anda</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {result.status === 'HOAKS' && (
                  <>
                    <p className="text-slate-300">
                      ❌ <span className="font-semibold">Jangan bagikan informasi ini!</span>
                    </p>
                    <p className="text-slate-400 text-sm">
                      Jika Anda sudah membagikannya, lebih baik hapus atau buat postingan koreksi. 
                      Edukasi teman Anda tentang bahaya hoaks.
                    </p>
                  </>
                )}
                {result.status === 'FAKTA' && (
                  <>
                    <p className="text-slate-300">
                      ✅ <span className="font-semibold">Informasi ini terbukti akurat.</span>
                    </p>
                    <p className="text-slate-400 text-sm">
                      Anda boleh membagikan informasi ini, namun tetap sertakan sumber yang kredibel 
                      agar pembaca dapat memverifikasi sendiri.
                    </p>
                  </>
                )}
                {result.status === 'MERAGUKAN' && (
                  <>
                    <p className="text-slate-300">
                      ❓ <span className="font-semibold">Status informasi tidak jelas.</span>
                    </p>
                    <p className="text-slate-400 text-sm">
                      Sebaiknya tunggu verifikasi resmi dari lembaga terkait sebelum membagikan. 
                      Hindari menyebarkan spekulasi.
                    </p>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        )}

        {/* Empty State */}
        {!result && !loading && (
          <Card className="bg-slate-900 border-slate-800 text-center">
            <CardContent className="pt-12 pb-12">
              <Search className="w-12 h-12 text-slate-500 mx-auto mb-4" />
              <p className="text-slate-300 mb-2">Belum ada pemeriksaan</p>
              <p className="text-slate-400 text-sm">
                Masukkan berita atau URL di atas untuk memulai pemeriksaan
              </p>
            </CardContent>
          </Card>
        )}

        {/* Info Section */}
        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader>
              <CardTitle className="text-slate-100">Bagaimana Sistem Bekerja?</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-300 text-sm space-y-2">
              <p>
                🤖 Sistem ini menggunakan AI Gemini 1.5 Flash dengan penelusuran web untuk menganalisis klaim.
              </p>
              <p>
                🔍 Kami memeriksa sumber yang kredibel dan mengevaluasi konsistensi informasi.
              </p>
              <p>
                📊 Hasil diberikan dalam format skor kepercayaan 0-100 untuk kemudahan pemahaman.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader>
              <CardTitle className="text-slate-100">Keterbatasan Sistem</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-300 text-sm space-y-2">
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
        </div>
      </div>
    </div>
  )
}
