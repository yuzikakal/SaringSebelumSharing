export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 mt-16">
      <div className="max-w-screen mx-auto py-12">
        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-32 mb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-100">Saring Sebelum Sharing</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Platform edukasi digital yang mengajarkan pentingnya literasi informasi dan nilai-nilai Pancasila dalam era digital.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-100">Menu</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-slate-400 hover:text-red-500 transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="/fenomena" className="text-slate-400 hover:text-red-500 transition-colors">
                  Fenomena Digital
                </a>
              </li>
              <li>
                <a href="/nilai-pancasila" className="text-slate-400 hover:text-red-500 transition-colors">
                  Nilai Pancasila
                </a>
              </li>
              <li>
                <a href="/cek-hoaks" className="text-slate-400 hover:text-red-500 transition-colors">
                  Cek Hoaks
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-100">Informasi</h3>
            <div className="text-sm space-y-2 text-slate-400">
              <p className="font-semibold text-slate-300">Dikembangkan oleh: Walady Yuzika Kal Zamzami</p>
            <p>Program Studi: Teknologi Rekayasa Perangkat Lunak (TRPL)</p>
            <p>Kampus: Politeknik Negeri Medan (POLMED)</p>
            <p>Tugas Mata Kuliah: Pendidikan Pancasila - Era Digital</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 my-8" />

        {/* Credits */}
        <div className="space-y-4 text-center md:text-left">
          <div className="space-y-2 text-sm text-slate-400">
            
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 mt-8 pt-8">
          <p className="text-center text-sm text-slate-500">
            &copy; 2026 Saring Sebelum Sharing. Semua hak dilindungi.
          </p>
        </div>
      </div>
    </footer>
  )
}
