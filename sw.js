const CACHE_NAME = 'pl-date-v1193';
const urlsToCache = [
    './',
    './index.html',
    './styles.css',
    './app.js',
    './audio.js',
    './events.js',
    './ui-renderer.js',
    './rules.js',
    './color-utils.js',
    './namedays.js',
    './phonetics.js',
    './holiday.js',
    './namedays.json'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
