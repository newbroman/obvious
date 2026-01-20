const CACHE_NAME = 'pl-date-v1209';
const ASSETS = [
  './',
  './index.html',
  './styles.css',
  './app.js',
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

// Install Event
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// Activate Event
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

// Fetch Event
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
