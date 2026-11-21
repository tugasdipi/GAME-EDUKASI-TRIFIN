TRIFIN — TRIVIA FINANCE CHALLENGE
PAKET PWA UNTUK GITHUB PAGES — 16 NOVEMBER 2026

ISI PAKET
- index.html                : Website siswa (login → briefing → dashboard → world map → Pos 1–9)
- teacher-dashboard.html    : Teacher Dashboard (handbook, PIN, rute, kode QR, dekoder)
- 79 file .webp             : Gambar permainan, SELURUHNYA di folder UTAMA, bukan assets/img
- manifest.webmanifest      : Identitas aplikasi untuk dipasang di HP/tablet
- sw.js                     : Cache/offline untuk aplikasi
- trifin-pwa.js             : Tombol instal aplikasi + layanan PWA
- icon-192.png, icon-512.png, icon-maskable-512.png, apple-touch-icon.png
- offline.html              : Halaman cadangan saat offline
- .nojekyll                 : Konfigurasi GitHub Pages

PENTING: TIDAK ADA FOLDER ASSETS/IMG LAGI!
Semua gambar diletakkan di root agar BISA DIUPLOAD MELALUI PEMILIHAN FILE (Ctrl+A)
tanpa harus mengunggah folder di GitHub yang pernah bermasalah.

CARA UPLOAD VIA WEB GITHUB (TANPA GITHUB DESKTOP)
1. Ekstrak file ZIP di PC (Klik kanan > Extract All / Ekstrak Semua).
2. Buka https://github.com/tugasdipi/GAME-EDUKASI-TRIFIN
3. Pastikan branch main terpilih, lalu pilih Add file > Upload files.
4. Buka folder TRIFIN_PWA_SIAP_UPLOAD_GITHUB hasil ekstraksi di File Explorer.
5. Tekan Ctrl+A untuk memilih semua file di DALAM folder (BUKAN ZIP-nya).
   Jika .nojekyll tersembunyi, tidak masalah; file lain tetap bisa berjalan.
6. DRAG semua file terpilih ke area Upload files di GitHub,
   ATAU klik 'choose your files' dan pilih semua file dengan Ctrl+A.
7. Pastikan index.html, teacher-dashboard.html, manifest.webmanifest,
   sw.js, trifin-pwa.js, dan semua .webp muncul dalam daftar unggahan.
8. Klik Commit changes. Jangan unggah ZIP itu sendiri ke repository.
9. Buka https://tugasdipi.github.io/GAME-EDUKASI-TRIFIN/
   Setelah update, refresh sekali. Terkadang pembaruan GitHub Pages tidak langsung terlihat.

ALAMAT HALAMAN
Siswa  : https://tugasdipi.github.io/GAME-EDUKASI-TRIFIN/
Guru   : https://tugasdipi.github.io/GAME-EDUKASI-TRIFIN/teacher-dashboard.html

TOMBOL TEACHER DASHBOARD
Pada beranda klik '🎓 Guru' untuk langsung membuka halaman guru.
Di halaman guru ada 'Kembali ke Portal TRIFIN'. Login siswa tetap berjalan seperti sebelumnya.

CARA PASANG KE HP ANDROID / REDMI PAD SE
1. Buka URL TRIFIN via Chrome menggunakan https:// (bukan file HTML lokal).
2. Klik tombol '📲 Pasang Aplikasi TRIFIN' di beranda.
3. Jika Chrome menampilkan konfirmasi, ketuk Instal.
4. Jika tidak muncul, ketuk menu ⋮ di Chrome > Instal aplikasi / Tambahkan ke layar utama.
5. Ikon TRIFIN akan muncul di layar utama/perpustakaan aplikasi, lalu bisa dibuka tanpa bilah URL.

IPHONE / IPAD
Safari > Bagikan > Tambahkan ke Layar Utama.

CATATAN
- Ini PWA, bukan APK. Fitur instal memerlukan HTTPS. GitHub Pages mendukung HTTPS.
- Kunjungi aplikasi saat ONLINE terlebih dahulu untuk menyimpan aset. 79 gambar ikut disiapkan untuk cache.
- Sumber luar seperti YouTube, Google Form, Google Drive, dan Google Fonts masih perlu internet.
- Data permainan tersimpan di browser/perangkat, belum tersinkron lintas perangkat.
- Teacher Dashboard pada GitHub Pages bersifat publik bagi siapa pun yang mengetahui URL.
  PIN dan kunci di HTML tidak dianggap sebagai rahasia aman; perlu backend/autentikasi
  terpisah jika ingin dashboard hanya dapat diakses guru.
- Hindari menghapus data situs saat pembelajaran berlangsung karena progres lokal bisa hilang.
- Versi paket ini merapikan arah halaman dan instalasi. Gameplay inti Pos 1–9 tidak diubah.
