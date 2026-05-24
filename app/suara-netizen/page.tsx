/* eslint-disable @next/next/no-img-element */
'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { supabase } from '@/lib/supabase'
import { 
  MessageSquarePlus, Send, Loader2, CheckCircle, 
  Video, Play, ShieldCheck, Quote, BookOpen 
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

// Fungsi helper untuk ambil thumbnail YouTube
const getYouTubeId = (url: string) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
  const match = url.match(regExp)
  return (match && match[2].length === 11) ? match[2] : null
}

interface SuaraNetizen {
  id: string
  nama: string
  tipe_konten: string
  konten: string
  created_at: string
}

export default function SuaraNetizenPage() {
  const [formData, setFormData] = useState({ name: '', type: 'story', content: '' })
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  
  const [approvedItems, setApprovedItems] = useState<SuaraNetizen[]>([])
  const [isLoadingGallery, setIsLoadingGallery] = useState(true)

  useEffect(() => {
    fetchApprovedData()
  }, [])

  const fetchApprovedData = async () => {
    setIsLoadingGallery(true)
    try {
      // Kita pakai select('*'), policy RLS otomatis cuma ambil yang is_approved = true
      const { data, error } = await supabase
        .from('suara_netizen')
        .select('*')
        .order('created_at', { ascending: false })
      
      if (error) throw error

      // DEBUGGING: Cek di Inspect Element -> Console browser, data apa aja yang masuk
      console.log("DATA DARI SUPABASE:", data)

      if (data) setApprovedItems(data as SuaraNetizen[])
    } catch (error) {
      console.error('Error fetching gallery:', error)
    } finally {
      setIsLoadingGallery(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name.trim() || !formData.content.trim()) return alert('Mohon lengkapi nama dan konten Anda')

    setIsLoading(true)
    try {
      // TANPA .select() !! Ini rahasianya biar nggak error RLS
      const { error } = await supabase
        .from('suara_netizen')
        .insert([{ nama: formData.name, tipe_konten: formData.type, konten: formData.content }])

      if (error) throw error

      setIsSuccess(true)
      setFormData({ name: '', type: 'story', content: '' })
      setTimeout(() => setIsSuccess(false), 4000)
    } catch (error: any) {
      alert(`Gagal mengirim: ${error?.message || 'Terjadi kesalahan'}`)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Hero Section */}
        <motion.div className="mb-16 text-center space-y-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 bg-red-100 dark:bg-red-950 px-4 py-1.5 rounded-full border border-red-200 dark:border-red-800 mb-2">
            <MessageSquarePlus className="w-4 h-4 text-red-600 dark:text-red-400" />
            <span className="text-sm font-semibold text-red-700 dark:text-red-300">Forum Berbagi</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100">Suara Netizen</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Punya pengalaman menghadapi hoaks atau menemukan video edukasi? Bagikan di sini! 
            <span className="block mt-2 text-sm text-slate-500 italic">(Setiap kiriman akan ditinjau oleh Admin untuk menjaga ruang digital yang sehat).</span>
          </p>
        </motion.div>

        {/* Submission Form Section */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mb-24 max-w-3xl mx-auto">
          <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-lg dark:shadow-none overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-red-500 to-red-700" />
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-red-100 dark:bg-red-950 rounded-xl border border-red-200 dark:border-red-800">
                  <Send className="w-5 h-5 text-red-600 dark:text-red-400" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Kirim Kisah atau Edukasi</h2>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Isi form di bawah ini untuk berpartisipasi</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Nama Anda</label>
                    <Input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Nama Panggilan atau Anonim" className="bg-slate-50 dark:bg-slate-950 border-slate-300 dark:border-slate-700" disabled={isLoading} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Jenis Konten</label>
                    <select value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value, content: '' })} className="w-full h-10 px-3 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-md text-sm text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-red-500 focus:border-transparent" disabled={isLoading}>
                      <option value="story">Cerita Pengalaman</option>
                      <option value="video">Link Video Edukasi</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Konten Anda</label>
                  <textarea value={formData.content} onChange={(e) => setFormData({ ...formData, content: e.target.value })} placeholder={formData.type === 'video' ? 'Tempel URL video YouTube/TikTok yang bermanfaat di sini...' : 'Tuliskan pengalamanmu menghadapi hoaks atau ujaran kebencian di sini...'} className="w-full h-40 px-3 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-md text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none" disabled={isLoading} />
                </div>

                <Button type="submit" disabled={isLoading} className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 flex items-center justify-center gap-2 rounded-lg">
                  {isLoading ? <><Loader2 className="w-4 h-4 animate-spin" /> Mengirim...</> : <><Send className="w-4 h-4" /> Kirim untuk Ditinjau</>}
                </Button>

                {isSuccess && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-500/30 rounded-lg p-4 text-center flex items-center justify-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                    <p className="text-emerald-700 dark:text-emerald-300 text-sm font-semibold">Terima kasih! Konten Anda telah diterima dan sedang ditinjau oleh Admin.</p>
                  </motion.div>
                )}
              </form>
            </div>
          </div>
        </motion.div>

        {/* ==========================================
            GALERI SECTION
        ========================================== */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl font-bold text-slate-900 dark:text-slate-100">
              Galeri Suara Netizen
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-slate-600 dark:text-slate-400 mt-2">
              Kumpulan kisah nyata dan edukasi pilihan dari netizen bijak.
            </motion.p>
          </div>

          {isLoadingGallery ? (
            <div className="flex justify-center py-12"><Loader2 className="w-8 h-8 animate-spin text-red-500" /></div>
          ) : approvedItems.length === 0 ? (
            <div className="text-center py-12 bg-white dark:bg-slate-900 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700">
              <BookOpen className="w-12 h-12 text-slate-400 mx-auto mb-3" />
              <p className="text-slate-500 dark:text-slate-400 font-medium">Belum ada konten yang ditampilkan.</p>
              <p className="text-slate-400 dark:text-slate-500 text-sm">Jadilah yang pertama berbagi di atas!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {approvedItems.map((item, idx) => {
                const isVideo = item.tipe_konten?.trim().toLowerCase() === 'video'
                const ytId = isVideo ? getYouTubeId(item.konten) : null

                return (
                  <motion.div 
                    key={item.id} 
                    initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    // HAPUS className={`${isVideo ? 'md:col-span-2' : ''} group`, ganti jadi:
                    className="group"
                  >
                    {isVideo ? (
                      <a 
                        href={item.konten} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm dark:shadow-none hover:shadow-xl dark:hover:shadow-none hover:border-red-500/50 transition-all h-full flex flex-col group"
                      >
                        <div className="relative w-full aspect-video bg-slate-900 cursor-pointer flex-shrink-0 overflow-hidden">
                          <img 
                            src={ytId ? `https://img.youtube.com/vi/${ytId}/hqdefault.jpg` : 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=450&fit=crop&q=80'} 
                            alt="Video Thumbnail" 
                            // Hapus scale-105, ganti opacity hover biasa
                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300" 
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-center justify-center">
                            <div className="w-14 h-14 rounded-full bg-red-600/90 flex items-center justify-center shadow-lg backdrop-blur-sm">
                              <Play className="w-7 h-7 text-white fill-current ml-1" />
                            </div>
                          </div>
                          <div className="absolute top-3 left-3 bg-red-600 px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                            <Video className="w-3.5 h-3.5 text-white" />
                            <span className="text-xs text-white font-bold">Video</span>
                          </div>
                        </div>
                        <div className="p-5 flex-1 flex flex-col justify-center">
                          <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2 line-clamp-2">
                            Tonton Video Edukasi Ini
                          </h3>
                          <div className="flex items-center gap-3 mt-auto">
                            <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-950 flex items-center justify-center text-xs font-bold text-red-600 dark:text-red-400">
                              {item.nama.charAt(0).toUpperCase()}
                            </div>
                            <div>
                              <p className="font-semibold text-sm text-slate-900 dark:text-slate-100">{item.nama}</p>
                              <p className="text-xs text-slate-500 dark:text-slate-400">Klik untuk menonton</p>
                            </div>
                          </div>
                        </div>
                      </a>
                    ) : (
                      /* CARD CERITA PREMIUM */
                      <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm dark:shadow-none hover:shadow-xl dark:hover:shadow-none hover:border-red-500/50 transition-all h-full flex flex-col">
                        <Quote className="absolute top-6 right-6 w-12 h-12 text-red-100 dark:text-red-900/40" />
                        <div className="flex-1">
                          <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-base mb-6 relative z-10">
                            &quot;{item.konten}&quot;
                          </p>
                        </div>
                        <div className="border-t border-slate-100 dark:border-slate-800 pt-5 mt-4 flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-sm font-bold text-white shadow-sm">
                            {item.nama.charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <p className="font-semibold text-sm text-slate-900 dark:text-slate-100">{item.nama}</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400">Pengalaman Pribadi</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                )
              })}
            </div>
          )}
        </section>

        {/* Moderation Notice */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
          <div className="flex-shrink-0 p-4 bg-white dark:bg-red-900/50 rounded-full border border-red-200 dark:border-red-800 shadow-sm">
            <ShieldCheck className="w-8 h-8 text-red-600 dark:text-red-400" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-1 text-lg">Moderasi untuk Kenyamanan Bersama</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Semua kiriman ditinjau oleh Admin untuk memastikan tidak mengandung ujaran kebencian, hoaks, atau konten tidak pantas. Kami berkomitmen menjaga ruang ini tetap aman dan edukatif sesuai nilai Pancasila.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  )
}