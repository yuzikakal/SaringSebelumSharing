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
      color: 'border-red-500 bg-red-950/20',
      badge: 'bg-red-500 text-white',
      icon: AlertTriangle,
      label: '⚠️ HOAKS',
    },
    FAKTA: {
      color: 'border-green-500 bg-green-950/20',
      badge: 'bg-green-500 text-white',
      icon: Check,
      label: '✓ FAKTA',
    },
    MERAGUKAN: {
      color: 'border-amber-500 bg-amber-950/20',
      badge: 'bg-amber-500 text-white',
      icon: HelpCircle,
      label: '❓ MERAGUKAN',
    },
  }

  const config = statusConfig[status]
  const Icon = config.icon

  return (
    <Card className={`border-2 ${config.color}`}>
      <CardHeader>
        <div className="flex items-center justify-between gap-4">
          <CardTitle className="flex items-center gap-2">
            <Icon className="w-5 h-5" />
            {config.label}
          </CardTitle>
          <div className="text-right">
            <div className="text-sm text-slate-400">Skor Kepercayaan</div>
            <div className="text-2xl font-bold">{skor_kepercayaan}%</div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="font-semibold text-slate-100 mb-2">Kesimpulan</h3>
          <p className="text-slate-300 leading-relaxed">{kesimpulan}</p>
        </div>

        {sumber_valid && sumber_valid.length > 0 && (
          <div>
            <h3 className="font-semibold text-slate-100 mb-2">Sumber Referensi</h3>
            <div className="space-y-2">
              {sumber_valid.map((sumber, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 p-2 rounded-md bg-slate-800/50 hover:bg-slate-800 transition-colors"
                >
                  <ExternalLink className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-100 break-words">
                      {sumber.judul_sumber}
                    </p>
                    {sumber.url_sumber !== 'Berdasarkan analisis' && (
                      <a
                        href={sumber.url_sumber}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-red-400 hover:text-red-300 break-all"
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
