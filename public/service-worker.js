const CACHE_NAME = "static-cache-v2";
const DATA_CACHE_NAME = "data-cache-v1";

const FILES_TO_CACHE = [
      '/',
      '/index.html',
      '/styles.css',
      '/manifest.json',
      '/index.js',
      '/db.js',
      './icons/icon-192x192.png',
      './icons/icon-512x512.png'
];

// install
self.addEventListener("install", (evt) => {
      // pre cache transactions
      evt.waitUntil(
            caches.open(DATA_CACHE_NAME).then((cache) => cache.add("/api/transactions"))
      );

      // pre cache bulk transactions (may only need this or the above?)
      evt.waitUntil(
            caches.open(DATA_CACHE_NAME).then((cache) => cache.add("/api/transactions/bulk"))
      );

      // pre cache all static assets
      evt.waitUntil(
            caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
      );

      self.skipWaiting();
});

