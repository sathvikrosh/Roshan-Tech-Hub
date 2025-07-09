self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('roshan-tech-cache').then(function(cache) {
      return cache.addAll([
        'prac1.html',
        'manifest.json',
        'sw.js',
        'brand logo.png',
        'webanner.png'
        // Add more if needed
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
