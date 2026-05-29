# Saring Sebelum Sharing

Sebuah platform edukasi digital interaktif bertema **"Pancasila sebagai Nilai Moral dan Etika di Era Modern"**. Proyek ini berfokus pada pengamalan Sila ke-3 (Persatuan Indonesia) dengan menyoroti bahaya Hoaks, *Echo Chamber*, dan Ujaran Kebencian yang dapat memecah belah bangsa di ruang digital.

Website ini tidak hanya menyajikan materi edukasi, tetapi juga dilengkapi dengan alat pendeteksi hoaks berbasis AI dan ruang interaksi sosial yang dimoderasi.

---

## ✨ Fitur Utama (Pages)

1. **🏠 Home** - *Hero section* sinematik, statistik dampak hoaks, dan pengantar nilai Pancasila.
2. **📱 Fenomena Sosial** - Visualisasi *Echo Chamber* dan simulasi perdebatan toksik (*comment war*) yang realistis, serta anatomi siklus penyebaran hoaks.
3. **📖 Nilai Pancasila** - Eksplorasi 5 Sila menggunakan layout *bento grid*, dengan *deep-dive* khusus pada Sila ke-3 dan langkah konkret pengamalannya.
4. **🤖 Cek Hoaks (AI)** - Alat pendeteksi berita palsu menggunakan **Gemini 1.5 Flash API**. Pengguna dapat memasukkan URL/teks, lalu AI akan memberikan Skor Kepercayaan, Status, Kesimpulan, dan Sumber referensi.
5. **📢 Suara Netizen** - Ruang berbagi kisah dan video edukasi dari pengunjung. Menggunakan sistem *User-Generated Content* (UGC) dengan moderasi Admin (*approval system*).
6. **🤝 Kesimpulan & Komitmen** - Halaman deklarasi "Netizen Bijak" di mana nama pengguna yang berkomitmen akan tersimpan dan tertampil secara *real-time*.

---

## 💻 Tech Stack

Proyek ini dibangun menggunakan teknologi web modern:
* **Framework:** [Next.js (App Router)](https://nextjs.org/)
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
* **Animations:** [Framer Motion](https://www.framer.com/motion/)
* **Database & Auth:** [Supabase](https://supabase.com/) (PostgreSQL + RLS)
* **AI Integration:** [@google/genai](https://ai.google.dev/) (Gemini 3.5 Flash)
* **Icons:** [Lucide React](https://lucide.dev/)
* **Deployment:** Vercel

---

## 🚀 Cara Instalasi & Menjalankan Proyek

### 1. Clone Repository
```bash
git clone [https://github.com/yuzikakal/SaringSebelumSharing.git](https://github.com/yuzikakal/SaringSebelumSharing.git)
cd SaringSebelumSharing

```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Buat file `.env.local` di root folder proyek dan masukkan kredensial berikut:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY==your_supabase_publishable_key

# Google Gemini API
GOOGLE_API_KEY=your_google_ai_studio_api_key

```

### 4. Jalankan Development Server

```bash
npm run dev
```

Buka [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) di browser untuk melihat hasilnya.

---

## 🗄️ Database Schema (Supabase)

Proyek ini menggunakan Supabase. Jalankan *query* SQL berikut di SQL Editor Supabase Anda untuk mengatur tabel:

```sql
-- 1. Tabel Komitmen
CREATE TABLE public.komitmen (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  nama text NOT NULL,
  CONSTRAINT komitmen_pkey PRIMARY KEY (id)
);

-- 2. Tabel Suara Netizen
CREATE TABLE public.suara_netizen (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  nama text NOT NULL,
  tipe_konten text NOT NULL,
  konten text NOT NULL,
  is_approved boolean NOT NULL DEFAULT false,
  CONSTRAINT suara_netizen_pkey PRIMARY KEY (id)
);

-- Note: Row Level Security (RLS) diatur agar anon dapat melakukan INSERT.
-- Untuk tabel `suara_netizen`, anon hanya dapat melakukan SELECT jika `is_approved = true`.

```

---

## 🎓 Credit

Proyek ini dikembangkan sebagai pemenuhan Tugas Akhir Mata Kuliah Pendidikan Pancasila.

* **Dikembangkan oleh:** Walady Yuzika Kal Zamzami
* **Program Studi:** Teknologi Rekayasa Perangkat Lunak (TRPL)
* **Institusi:** Politeknik Negeri Medan (POLMED)

> *"Tidak semua perilaku buruk memiliki sanksi hukum, tetapi setiap tindakan tetap memiliki nilai moral dan dampak kemanusiaan."*
