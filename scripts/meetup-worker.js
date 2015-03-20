self.addEventListener('install', function(event) {
  console.log("Installation: ", event);
});


self.addEventListener('activate', function(event) {
  console.log("Activation: ", event);
});
