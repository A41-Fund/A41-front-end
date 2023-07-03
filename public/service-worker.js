

const CACHE_NAME = 'a41-front-end';

const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/index.js',
  // Add more URLs of static assets to cache
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
