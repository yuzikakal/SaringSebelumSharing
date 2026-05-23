import { GoogleGenerativeAI } from '@google/generative-ai'
import { NextRequest, NextResponse } from 'next/server'

interface CheckNewsResponse {
  status: 'HOAKS' | 'FAKTA' | 'MERAGUKAN'
  skor_kepercayaan: number
  kesimpulan: string
  sumber_valid: Array<{ judul_sumber: string; url_sumber: string }>
}

// Fallback pattern matching for when API is unavailable
const hoaxPatterns = [
  { regex: /garam.*covid|salt.*cure/i, score: 5, type: 'hoaks' as const },
  { regex: /microchip.*vaksin|vaccine.*tracking/i, score: 10, type: 'hoaks' as const },
  { regex: /5g.*covid|5g.*virus/i, score: 8, type: 'hoaks' as const },
  { regex: /urin.*covid|urine.*cure/i, score: 9, type: 'hoaks' as const },
  { regex: /sinar uv.*covid|ultraviolet.*kill.*virus/i, score: 7, type: 'hoaks' as const },
  { regex: /obat.*covid.*gratis|cure.*all.*covid/i, score: 6, type: 'hoaks' as const },
]

function analyzeTextFallback(text: string): CheckNewsResponse {
  const lowerText = text.toLowerCase()
  let maxHoaksScore = 0

  for (const pattern of hoaxPatterns) {
    if (pattern.regex.test(text)) {
      maxHoaksScore = Math.max(maxHoaksScore, pattern.score)
    }
  }

  let status: 'HOAKS' | 'FAKTA' | 'MERAGUKAN' = 'MERAGUKAN'
  let skor_kepercayaan = 50
  let kesimpulan = ''
  let sumber_valid: Array<{ judul_sumber: string; url_sumber: string }> = []

  if (maxHoaksScore > 5) {
    status = 'HOAKS'
    skor_kepercayaan = Math.max(10, 30 - maxHoaksScore * 2)
    kesimpulan = `Klaim ini terdeteksi sebagai HOAKS. Informasi yang Anda bagikan tidak berdasarkan bukti ilmiah yang valid dan dapat menyesatkan masyarakat.`
    sumber_valid = [
      { judul_sumber: 'Kementerian Kesehatan RI', url_sumber: 'www.kemkes.go.id' },
      { judul_sumber: 'Fact Checking Indonesia', url_sumber: 'turnbackhoax.id' },
    ]
  } else {
    kesimpulan = `Klaim ini memerlukan verifikasi lebih lanjut. Silakan cari sumber kredibel tambahan sebelum berbagi.`
    sumber_valid = [
      { judul_sumber: 'Fact Checking Indonesia', url_sumber: 'turnbackhoax.id' },
      { judul_sumber: 'Cek Fakta Kompas', url_sumber: 'cekfakta.com' },
    ]
  }

  return {
    status,
    skor_kepercayaan: Math.min(100, Math.max(0, skor_kepercayaan)),
    kesimpulan,
    sumber_valid,
  }
}

async function analyzeWithGemini(inputUser: string): Promise<CheckNewsResponse> {
  const apiKey = process.env.GOOGLE_API_KEY
  if (!apiKey) {
    throw new Error('API key not configured')
  }

  const client = new GoogleGenerativeAI(apiKey)
  const model = client.getGenerativeModel({
    model: 'gemini-3.5-flash',
  })

  const prompt = `Anda adalah ahli verifikasi fakta dan deteksi hoaks dari Indonesia. Analisis klaim berikut dengan cermat.

Klaim yang akan dianalisis:
"${inputUser}"

Tentukan apakah klaim ini adalah:
1. HOAKS - Informasi yang salah atau menyesatkan
2. FAKTA - Informasi yang benar dan dapat diverifikasi
3. MERAGUKAN - Informasi yang memerlukan verifikasi lebih lanjut

Berikan respons HANYA dalam format JSON yang valid (tanpa teks tambahan):
{
  "status": "HOAKS" atau "FAKTA" atau "MERAGUKAN",
  "skor_kepercayaan": angka antara 0-100,
  "kesimpulan": "Penjelasan singkat 2-3 kalimat dalam bahasa Indonesia",
  "sumber_valid": [
    {"judul_sumber": "Nama sumber", "url_sumber": "URL atau organisasi"}
  ]
}`

  const result = await model.generateContent(prompt)
  const responseText = result.response.text()

  // Extract JSON from response
  const jsonMatch = responseText.match(/\{[\s\S]*\}/)
  if (!jsonMatch) {
    throw new Error('Invalid response format from API')
  }

  const parsed = JSON.parse(jsonMatch[0])
  
  // Validate response
  if (!['HOAKS', 'FAKTA', 'MERAGUKAN'].includes(parsed.status)) {
    throw new Error('Invalid status in response')
  }

  return {
    status: parsed.status,
    skor_kepercayaan: Math.min(100, Math.max(0, parsed.skor_kepercayaan)),
    kesimpulan: parsed.kesimpulan,
    sumber_valid: parsed.sumber_valid || [{ judul_sumber: 'Analisis Gemini', url_sumber: 'Google AI' }],
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { inputUser } = body

    if (!inputUser || typeof inputUser !== 'string' || inputUser.trim().length === 0) {
      return NextResponse.json(
        { error: 'Silakan masukkan teks atau URL untuk diverifikasi' },
        { status: 400 }
      )
    }

    // Try to use Gemini API first, fallback to pattern matching
    try {
      const result = await analyzeWithGemini(inputUser)
      return NextResponse.json(result)
    } catch (apiError) {
      console.log('[v0] Gemini API error, using fallback:', apiError)
      const fallbackResult = analyzeTextFallback(inputUser)
      return NextResponse.json(fallbackResult)
    }
  } catch (error) {
    console.error('Error in check-news API:', error)
    return NextResponse.json(
      { error: 'Terjadi kesalahan saat memproses permintaan' },
      { status: 500 }
    )
  }
}
