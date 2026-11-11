import { GoogleGenAI } from '@google/genai'
import { NextRequest, NextResponse } from 'next/server'

interface CheckNewsResponse {
  status: 'HOAKS' | 'FAKTA' | 'MERAGUKAN'
  skor_kepercayaan: number
  kesimpulan: string
  sumber_valid: Array<{ judul_sumber: string; url_sumber: string }>
}

async function analyzeWithGemini(inputUser: string): Promise<CheckNewsResponse> {
  const apiKey = process.env.GEMINI_API_KEY
  if (!apiKey) {
    throw new Error('API key not configured')
  }

  const ai = new GoogleGenAI({
    apiKey,
    httpOptions: { apiVersion: 'v1beta', timeout: 30_000 },
  })

  const prompt = `Anda adalah ahli verifikasi fakta dan deteksi hoaks dari Indonesia. Analisis klaim berikut:
Klaim: "${inputUser}"

Tentukan apakah klaim HOAKS, FAKTA, atau MERAGUKAN. Jangan mengarang sumber atau URL; gunakan sumber kredibel yang benar-benar relevan. Berikan kesimpulan singkat dalam bahasa Indonesia.`

  const interaction = await ai.interactions.create({
    model: 'gemini-3.8-flash',
    input: prompt,
    response_format: {
      type: 'text',
      mime_type: 'application/json',
      schema: {
        type: 'object',
        properties: {
          status: { type: 'string', enum: ['HOAKS', 'FAKTA', 'MERAGUKAN'] },
          skor_kepercayaan: { type: 'integer', minimum: 0, maximum: 100 },
          kesimpulan: { type: 'string' },
          sumber_valid: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                judul_sumber: { type: 'string' },
                url_sumber: { type: 'string' },
              },
              required: ['judul_sumber', 'url_sumber'],
            },
          },
        },
        required: ['status', 'skor_kepercayaan', 'kesimpulan', 'sumber_valid'],
      },
    },
  }, {
    timeout_ms: 30_000,
    retries: { strategy: 'none' },
  })

  if (!interaction.output_text) {
    throw new Error('Gemini mengembalikan respons kosong')
  }

  const parsed: unknown = JSON.parse(interaction.output_text)
  if (typeof parsed !== 'object' || parsed === null) {
    throw new Error('Respons Gemini bukan objek JSON')
  }

  const data = parsed as Record<string, unknown>
  if (
    !['HOAKS', 'FAKTA', 'MERAGUKAN'].includes(data.status as string) ||
    typeof data.skor_kepercayaan !== 'number' ||
    !Number.isFinite(data.skor_kepercayaan) ||
    typeof data.kesimpulan !== 'string' ||
    !Array.isArray(data.sumber_valid)
  ) {
    throw new Error('Struktur respons Gemini tidak sesuai')
  }

  const sumber_valid = data.sumber_valid.filter(
    (source): source is { judul_sumber: string; url_sumber: string } =>
      typeof source === 'object' &&
      source !== null &&
      typeof (source as Record<string, unknown>).judul_sumber === 'string' &&
      typeof (source as Record<string, unknown>).url_sumber === 'string',
  )

  return {
    status: data.status as CheckNewsResponse['status'],
    skor_kepercayaan: Math.min(100, Math.max(0, data.skor_kepercayaan)),
    kesimpulan: data.kesimpulan,
    sumber_valid,
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

    try {
      const result = await analyzeWithGemini(inputUser)
      return NextResponse.json(result)
    } catch (apiError) {
      const statusCode =
        typeof apiError === 'object' && apiError !== null && 'statusCode' in apiError
          ? apiError.statusCode
          : undefined
      const headers =
        typeof apiError === 'object' && apiError !== null && 'headers' in apiError
          ? apiError.headers
          : undefined

      if (statusCode === 429) {
        const retryAfter = headers instanceof Headers ? headers.get('retry-after') : null
        const retryAfterSeconds = retryAfter ? Number.parseInt(retryAfter, 10) : NaN
        const waitMessage = Number.isFinite(retryAfterSeconds)
          ? ` Coba lagi dalam sekitar ${Math.ceil(retryAfterSeconds / 60)} menit.`
          : ' Silakan coba lagi nanti.'

        console.warn('Gemini rate limit reached', { retryAfterSeconds })
        return NextResponse.json(
          { error: `Kuota Gemini sedang habis.${waitMessage}` },
          {
            status: 429,
            ...(Number.isFinite(retryAfterSeconds)
              ? { headers: { 'Retry-After': String(retryAfterSeconds) } }
              : {}),
          },
        )
      }

      console.error(
        'Gemini API request failed:',
        apiError instanceof Error ? apiError.message : 'Unknown error',
      )
      return NextResponse.json(
        { error: 'Layanan verifikasi sedang bermasalah. Silakan coba lagi sebentar.' },
        { status: 502 },
      )
    }
  } catch (error) {
    console.error('Error in check-news API:', error)
    return NextResponse.json(
      { error: 'Terjadi kesalahan saat memproses permintaan' },
      { status: 500 }
    )
  }
}
