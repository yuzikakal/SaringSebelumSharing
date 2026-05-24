import { Check, AlertTriangle, HelpCircle, ExternalLink } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface ResultCardProps {
  status: 'HOAKS' | 'FAKTA' | 'MERAGUKAN'
  skor_kepercayaan: number
  kesimpulan: string
  sumber_valid: Array<{ judul_sumber: string; url_sumber: string }>
}

export default function ResultCard({
  status,
  skor_kepercayaan,
  kesimpulan,
  sumber_valid,
}: ResultCardProps) {
  const statusConfig = {
    HOAKS: {
      // Tambahkan warna light mode (bg-red-50) dan dark mode (bg-red-950/20)
      color: 'border-red-500 bg-red-50 dark:bg-red-950/40',
      badge: 'bg-red-600 text-white',
      icon: AlertTriangle,
      label: 'HOAKS',
      textColor: 'text-red-700 dark:text-red-400'
    },
    FAKTA: {
      // Ganti green jadi emerald agar lebih premium selaras dengan tema
      color: 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/20',
      badge: 'bg-emerald-600 text-white',
      icon: Check,
      label: 'FAKTA',
      textColor: 'text-emerald-700 dark:text-emerald-400'
    },
    MERAGUKAN: {
      color: 'border-amber-500 bg-amber-50 dark:bg-amber-950/20',
      badge: 'bg-amber-500 text-white',
      icon: HelpCircle,
      label: 'MERAGUKAN',
      textColor: 'text-amber-700 dark:text-amber-400'
    },
  }

  const config = statusConfig[status]
  const Icon = config.icon

  return (
    <Card className={`border-2 ${config.color} shadow-sm dark:shadow-none overflow-hidden`}>
      <CardHeader className="border-b border-slate-800/50 dark:border-slate-200/50">
        <div className="flex items-center justify-between gap-4">
          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${config.badge} shadow-sm`}>
            <Icon className="w-4 h-4" />
            <CardTitle className="text-sm font-bold">{config.label}</CardTitle>
          </div>
          
          <div className="text-right">
            <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Skor Kepercayaan</div>
            <div className={`text-2xl font-bold ${config.textColor}`}>{skor_kepercayaan}%</div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-5">
        <div>
          <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Kesimpulan</h3>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">{kesimpulan}</p>
        </div>

        {sumber_valid && sumber_valid.length > 0 && (
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Sumber Referensi</h3>
            <div className="space-y-2">
              {sumber_valid.map((sumber, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-red-500/50 dark:hover:border-red-500/30 transition-colors"
                >
                  <ExternalLink className="w-4 h-4 text-slate-400 dark:text-slate-500 flex-shrink-0 mt-0.5" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-800 dark:text-slate-200 break-words">
                      {sumber.judul_sumber}
                    </p>
                    {sumber.url_sumber !== 'Berdasarkan analisis' && (
                      <a
                        href={sumber.url_sumber}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 break-all transition-colors"
                      >
                        {sumber.url_sumber}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}