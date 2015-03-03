
var CACHE_VERSION = 1;
var CURRENT_CACHES = {
  meetup-data: 'meetup-cache-v' + CACHE_VERSION
};

self.addeventlistener('install', function(event) {
  var urlsToPrefetch = [
    'someurl',
    'otherurl'
  ]
  
  event.waitUntil(
    caches.open('my-image-cache-v1')
      .then(function(cache) {
        return cache.addAll(urlsToPrefetch);
      });
    )
  )
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
   caches.match(event.request);
  );
});


self.addEventListener('activate', function(event) {
  var expectedCacheNames = Object.keys(CURRENT_CACHES).map(function(key) {
    return CURRENT_CACHES[key];
  });

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (expectedCacheNames.indexOf(cacheName) == -1) {
            console.log('Deleting out of date cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
