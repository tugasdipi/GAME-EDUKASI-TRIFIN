# TRIFIN — Trivia Finance Challenge

**Paket website siap deploy ke GitHub Pages (visual lengkap, diverifikasi 2 November 2026).**

## Struktur

- `index.html` — halaman Login, Mission Setup, Mission Dashboard, World Map, serta Pos 1–9 (aktivitas tertanam).
- `assets/img/` — 77 file WebP untuk ilustrasi, logo, icon pulau, dan visual aktivitas pos.
- `dashboard_luno_bg.webp` & `dashboard_luno_mobile_cutout.webp` — background Dashboard dan Luno.
- `guru/index.html` — Dashboard & Handbook Guru.
- `.nojekyll` — memastikan GitHub Pages menyajikan berkas apa adanya.
- `VERIFIKASI_ASET.txt` — ringkasan pemeriksaan dan daftar gambar.

## Cara deploy pada repository `GAME-EDUKASI-TRIFIN`

1. Ekstrak ZIP ini terlebih dahulu.
2. Masuk ke repository GitHub `GAME-EDUKASI-TRIFIN`.
3. Upload **seluruh isi hasil ekstraksi** ke root repository, terutama `index.html`, folder `assets/`, folder `guru/`, dan dua gambar WebP Dashboard. **Jangan upload hanya `index.html`** dan jangan unggah ZIP sebagai pengganti isi website.
4. Pastikan GitHub Pages menggunakan branch `main` dan folder `/(root)` melalui Settings → Pages.
5. Buka `https://tugasdipi.github.io/GAME-EDUKASI-TRIFIN/` dan lakukan hard refresh (`Ctrl + Shift + R`) jika browser masih menyimpan cache.

> Jangan campur paket ini dengan repository QR kode pos yang terpisah (`trifin-kode-akses`), agar QR yang sudah dicetak tidak terganggu.

## Pemeriksaan

- **79 file gambar WebP valid**: 77 di `assets/img` + 2 di root.
- Semua referensi `assets/img/` di `index.html` dan konten Pos 1–9 mengarah ke file yang ada dalam paket.
- Pemuatan gambar diperiksa menggunakan browser pada Login, Mission Brief, Dashboard, World Map, dan halaman pembuka sembilan pos. Tidak ditemukan elemen gambar rusak pada tampilan yang diperiksa.
- Duplikat gambar tanpa sumber pada latar Pos 1 telah dihilangkan.
- URL fallback World Map lama yang merujuk ke file tidak tersedia telah diarahkan ke `index.html`.

### Batas pemeriksaan

Pengujian browser dilakukan dengan aset lokal yang disajikan melalui intersepsi permintaan, bukan deployment publik di GitHub. Seluruh alur permainan serta koneksi pihak ketiga belum diuji ulang menyeluruh. Google Fonts, Font Awesome, video YouTube, dan link Google Drive tetap membutuhkan akses internet.
