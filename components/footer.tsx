import Link from 'next/link'

export default function Footer() {
  return (
    // Light: bg putih pucat & border terang. Dark: bg gelap & border gelap.
    <footer className="bg-slate-50 border-t border-slate-200 dark:bg-slate-950 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        
        {/* Grid standar 3 kolom, lebih rapi dari [1fr_auto_1fr] */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Saring Sebelum Sharing</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Platform edukasi digital yang mengajarkan pentingnya literasi informasi dan nilai-nilai Pancasila dalam era digital.
            </p>
          </div>

          {/* Quick Links - Ganti <a> jadi <Link> */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Menu</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-slate-600 hover:text-red-600 dark:text-slate-400 dark:hover:text-red-400 transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/fenomena" className="text-slate-600 hover:text-red-600 dark:text-slate-400 dark:hover:text-red-400 transition-colors">
                  Fenomena Digital
                </Link>
              </li>
              <li>
                <Link href="/nilai-pancasila" className="text-slate-600 hover:text-red-600 dark:text-slate-400 dark:hover:text-red-400 transition-colors">
                  Nilai Pancasila
                </Link>
              </li>
              <li>
                <Link href="/cek-hoaks" className="text-slate-600 hover:text-red-600 dark:text-slate-400 dark:hover:text-red-400 transition-colors">
                  Cek Hoaks
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Informasi</h3>
            <div className="text-sm space-y-2 text-slate-600 dark:text-slate-400">
              <p className="font-semibold text-slate-800 dark:text-slate-200">Dikembangkan oleh: Walady Yuzika Kal Zamzami</p>
              <p>Program Studi: Teknologi Rekayasa Perangkat Lunak (TRPL)</p>
              <p>Kampus: Politeknik Negeri Medan (POLMED)</p>
              <p>Tugas Mata Kuliah: Pendidikan Pancasila - Era Digital</p>
            </div>
          </div>
        </div>

        {/* Copyright - Div kosong yang tidak berguna sudah dihapus */}
        <div className="border-t border-slate-200 dark:border-slate-800 pt-8">
          <p className="text-center text-sm text-slate-500 dark:text-slate-500">
            &copy; {new Date().getFullYear()} Saring Sebelum Sharing. Semua hak dilindungi.
          </p>
        </div>
      </div>
    </footer>
  )
}