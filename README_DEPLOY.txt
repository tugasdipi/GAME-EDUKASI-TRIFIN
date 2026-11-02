TRIFIN: TRIVIA FINANCE CHALLENGE
PAKET GITHUB PAGES - FORMAT SAMA DENGAN TRIFIN [1st Version].zip

STRUKTUR FOLDER:
GAME-EDUKASI-TRIFIN-main/
  index.html                 - Website TRIFIN terbaru (login, mission setup,
                               dashboard, world map, misi Pos 1-9 terintegrasi)
  assets/img/               - Seluruh aset gambar fisik yang diperlukan index.html
  guru/index.html           - Dashboard guru
  .nojekyll                 - Konfigurasi GitHub Pages
  DAFTAR_ASET.txt            - Daftar berkas gambar dan hasil validasi

CARA UPDATE REPOSITORY:
1. Ekstrak ZIP ini. Masuk ke folder GAME-EDUKASI-TRIFIN-main.
2. Buka repository GitHub: https://github.com/tugasdipi/GAME-EDUKASI-TRIFIN
3. Masuk ke branch yang dipakai GitHub Pages (umumnya main).
4. Pilih Add file > Upload files.
5. Unggah *ISI* folder GAME-EDUKASI-TRIFIN-main, BUKAN folder induknya:
   index.html, assets/ (beserta seluruh isinya), guru/, .nojekyll.
6. Pastikan path di repository persis:
   /index.html
   /assets/img/<nama>.webp
   /guru/index.html
7. Klik Commit changes. Tunggu GitHub Pages menyelesaikan publikasi.
8. Buka https://tugasdipi.github.io/GAME-EDUKASI-TRIFIN/ dan tekan
   Ctrl+Shift+R untuk menghindari cache versi sebelumnya.

PENTING:
- Jangan mengunggah file ZIP secara langsung.
- Jangan mengunggah folder GAME-EDUKASI-TRIFIN-main sebagai 1 folder di
  dalam repository (akan memindahkan index.html dari root).
- Jangan menghapus folder assets/img saat mengunggah index.html terbaru.
- Sebaiknya backup repository lama (Code > Download ZIP) terlebih dahulu.
- Jika GitHub punya aset lama lain, biarkan; upload file baru akan menambah
  aset dan mengganti index.html yang lama.
- Tidak perlu mengganti kode atau susunan 9 pos.

Dibuat dari versi standalone TRIFIN yang telah berisi perbaikan broken-image.
Gambar dipindahkan kembali menjadi aset terpisah untuk mengikuti format ZIP lama.
