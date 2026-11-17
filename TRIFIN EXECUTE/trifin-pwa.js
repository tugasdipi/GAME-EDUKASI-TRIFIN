/* TRIFIN PWA — installation guide + service worker. Local, relative, GitHub Pages-compatible. */
(() => {
  'use strict';
  let pendingInstall = null;
  const installButtons = [...document.querySelectorAll('[data-trifin-install]')];
  const standalone = () => window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;

  function modal(title, body) {
    const shade = document.createElement('div');
    shade.className = 'trifin-pwa-shade';
    shade.innerHTML = '<div class="trifin-pwa-dialog" role="dialog" aria-modal="true" aria-label="Panduan memasang TRIFIN"><div class="trifin-pwa-dialog-title"></div><p class="trifin-pwa-dialog-body"></p><button type="button" class="trifin-pwa-close">Mengerti</button></div>';
    shade.querySelector('.trifin-pwa-dialog-title').textContent = title;
    shade.querySelector('.trifin-pwa-dialog-body').textContent = body;
    const close = () => {shade.remove(); document.removeEventListener('keydown', esc);};
    const esc = ev => {if (ev.key === 'Escape') close();};
    shade.querySelector('button').addEventListener('click', close);
    shade.addEventListener('click', ev => {if(ev.target === shade) close();});
    document.addEventListener('keydown', esc);
    document.body.appendChild(shade);
    shade.querySelector('button').focus();
  }
  const style = document.createElement('style');
  style.textContent = `.trifin-pwa-shade{position:fixed;inset:0;z-index:2147483646;display:grid;place-items:center;padding:20px;background:rgba(1,10,23,.78);backdrop-filter:blur(9px)}.trifin-pwa-dialog{max-width:420px;width:100%;background:#0b2040;color:#f4f9ff;border:1px solid #426b97;border-radius:18px;box-shadow:0 30px 70px #0009;padding:24px;font:500 14px/1.7 'Poppins',sans-serif}.trifin-pwa-dialog-title{font-weight:800;font-size:19px;color:#ffe5ab;margin-bottom:12px}.trifin-pwa-dialog-body{white-space:pre-line;margin:0 0 20px}.trifin-pwa-close{width:100%;padding:12px;background:linear-gradient(120deg,#d6af57,#f6db98);border:0;border-radius:11px;color:#15223d;font:800 13px 'Poppins',sans-serif;cursor:pointer}`;
  document.head.appendChild(style);

  window.addEventListener('beforeinstallprompt', event => {
    event.preventDefault();
    pendingInstall = event;
  });
  window.addEventListener('appinstalled', () => {
    pendingInstall = null;
    installButtons.forEach(button => {button.textContent = '✓ TRIFIN sudah terpasang'; button.disabled = true;});
  });
  installButtons.forEach(button => button.addEventListener('click', async () => {
    if (standalone()) {modal('TRIFIN sudah terpasang', 'Anda sedang membuka TRIFIN sebagai aplikasi di perangkat ini.'); return;}
    if (pendingInstall) {
      const event = pendingInstall;
      pendingInstall = null;
      try {await event.prompt(); await event.userChoice;} catch (_) {showManual();}
      return;
    }
    showManual();
  }));

  function showManual() {
    const ua = navigator.userAgent;
    if (/iPhone|iPad|iPod/i.test(ua)) {
      modal('Pasang TRIFIN di iPhone / iPad', '1. Buka situs ini melalui Safari.\n2. Ketuk tombol Bagikan (kotak dengan panah).\n3. Pilih Tambahkan ke Layar Utama.\n4. Ketuk Tambah.');
    } else if (/Android/i.test(ua)) {
      modal('Pasang TRIFIN di Android', '1. Buka situs ini melalui Chrome.\n2. Ketuk menu ⋮ di pojok browser.\n3. Pilih Instal aplikasi atau Tambahkan ke layar utama.\n4. Konfirmasikan pemasangan.\n\nJika opsi belum muncul, muat ulang situs setelah koneksi internet aktif.');
    } else {
      modal('Pasang TRIFIN di perangkat', 'Buka situs ini dengan Chrome atau Edge. Klik ikon instal di sebelah kanan bilah alamat, atau buka menu browser lalu pilih Instal aplikasi / Install page as app.\n\nDi HP, gunakan menu browser Tambahkan ke layar utama.');
    }
  }

  if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost' || location.hostname === '127.0.0.1')) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js', {scope:'./'}).catch(err => {
        console.warn('TRIFIN: mode offline belum tersedia.', err);
      });
    });
  }
})();
