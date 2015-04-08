function afterInstall(registration) {
  //Do something with the registration.
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/meetup-worker.js')
    .then(afterInstall)
    .catch(function(error) {
      //Corrective action.
      console.log("Installation and registration failed.", error);
    });
} else {
 //The current browser doesn't support service workers.
}
