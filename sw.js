/* TRIFIN GitHub Pages PWA.  Change the version each time the package changes. */
const CACHE_NAME = 'trifin-pwa-2026-11-16-v1';
const CORE = [
  "./",
  "./index.html",
  "./teacher-dashboard.html",
  "./manifest.webmanifest",
  "./trifin-pwa.js",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-maskable-512.png",
  "./apple-touch-icon.png",
  "./offline.html"
];
const IMAGES = [
  "./06dd3c71fe13.webp",
  "./078cbd58295f.webp",
  "./0b2a9af8b399.webp",
  "./0dcd5fe85eeb.webp",
  "./10f2f0aa13f9.webp",
  "./1330d321fc2c.webp",
  "./187a75e10e8a.webp",
  "./22de93913d5e.webp",
  "./2351f39c28ca.webp",
  "./276d0e0f6990.webp",
  "./2c5aaa6ddeaa.webp",
  "./306e39253063.webp",
  "./34996944e9b2.webp",
  "./357722549506.webp",
  "./3de3259b0e4a.webp",
  "./442123b40616.webp",
  "./4520add68941.webp",
  "./461c280406cf.webp",
  "./4d48c7946149.webp",
  "./4f1e58babece.webp",
  "./4fa4704f0389.webp",
  "./513128fd1e9c.webp",
  "./543e4891635e.webp",
  "./59766f38b241.webp",
  "./5980602c4f45.webp",
  "./5c6a165024b9.webp",
  "./60bdf0d7cf62.webp",
  "./63e9d8ca4d3f.webp",
  "./657e4b9e39de.webp",
  "./6746b22f195f.webp",
  "./6a08e2d49de3.webp",
  "./6fdb8e7063d0.webp",
  "./7123e0e04dfa.webp",
  "./748684fbcdda.webp",
  "./7b37f9bafd4e.webp",
  "./7cc0916757a4.webp",
  "./7f946d5371c6.webp",
  "./820563aa5611.webp",
  "./8a6003f8c2ae.webp",
  "./8ba9756ec4f8.webp",
  "./920c3cce828b.webp",
  "./9797fb21b040.webp",
  "./9d40ba1bac5e.webp",
  "./9fbda087c934.webp",
  "./a541afc681a2.webp",
  "./a56e6e6a443e.webp",
  "./a5f3e0976190.webp",
  "./a66f7972ff93.webp",
  "./a802ea89d6be.webp",
  "./af1acf727b4d.webp",
  "./b7ce61d42b4f.webp",
  "./bf796b455e47.webp",
  "./bff3f5cf187f.webp",
  "./c0c4da9af8c2.webp",
  "./c277da8707f3.webp",
  "./ca65ae2dbbd1.webp",
  "./cb0ad7535ea7.webp",
  "./cef604d466c9.webp",
  "./d15a3853241c.webp",
  "./d376b50bba8f.webp",
  "./d7cc5919c096.webp",
  "./d8498c280d23.webp",
  "./dd596154e9ec.webp",
  "./dde61ba16967.webp",
  "./dee4e4250252.webp",
  "./dfaf85d80d99.webp",
  "./e0ba7c1c6c44.webp",
  "./e4bf877f4802.webp",
  "./e8524c42f964.webp",
  "./e8728a15ac15.webp",
  "./e872ffe8466f.webp",
  "./e87ca03c5036.webp",
  "./ec63e488ec5f.webp",
  "./f70d5fd64a97.webp",
  "./f8cf1a63aca5.webp",
  "./f910102ff9b8.webp",
  "./fdb6e6bb464b.webp",
  "./ffeefaece094.webp",
  "./fff9b4cd22ce.webp"
];

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll(CORE);
    // Optional image failures must not invalidate the entire PWA installation.
    // Cache the complete 79-image learning experience when online.
    await Promise.all(IMAGES.map(async url => {
      try {await cache.add(url);} catch (_) { /* retry on next online visit */ }
    }));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.filter(name => name.startsWith('trifin-pwa-') && name !== CACHE_NAME).map(name => caches.delete(name)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin || !url.href.startsWith(self.registration.scope)) return;

  if (req.mode === 'navigate' || req.destination === 'document') {
    event.respondWith((async () => {
      try {
        const response = await fetch(req);
        if (response.ok) {
          const cache = await caches.open(CACHE_NAME);
          await cache.put(req, response.clone());
        }
        return response;
      } catch (_) {
        return (await caches.match(req)) || (await caches.match('./index.html')) || (await caches.match('./offline.html'));
      }
    })());
    return;
  }

  event.respondWith((async () => {
    const cached = await caches.match(req);
    if (cached) {
      event.waitUntil(fetch(req).then(async response => {
        if (response.ok) (await caches.open(CACHE_NAME)).put(req, response.clone());
      }).catch(() => {}));
      return cached;
    }
    try {
      const response = await fetch(req);
      if (response.ok) {
        const cache = await caches.open(CACHE_NAME);
        event.waitUntil(cache.put(req, response.clone()));
      }
      return response;
    } catch (_) {
      return Response.error();
    }
  })());
});
