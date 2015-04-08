var CACHE_VERSION = 1;
var CURRENT_CACHES = {
    'meetup-data': 'meetup-cache-v' + CACHE_VERSION
};
var API_ORIGIN = 'https://api.meetup.com';

self.addEventListener('install', function(event) {
  console.log("Installation: ", event);
                      
  var urlsToPrefetch = [
    API_ORIGIN + '/dashboard'
  ];
});


self.addEventListener('activate', function(event) {
  console.log("Activation: ", event);
});

self.addEventListener('fetch', function(event) {
  console.log("fetch: ", event);
});