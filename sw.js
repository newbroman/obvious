const CACHE_NAME = 'pl-date-v1322';
const ASSETS = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './help.js',
  './events.js',
  './ui-renderer.js',
  './phonetics.js',
  './numbers.js',
  './audio.js',
  './holiday.js',
  './cultural.js',
  './rules.js',
  './color-utils.js',
  './namedays.js',
  './namedays.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
