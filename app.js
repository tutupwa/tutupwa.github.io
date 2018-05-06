(function() {
if('serviceWorker' in navigator) {  
    navigator.serviceWorker  
        .register('tutupwa.github.io/service-worker.js')  
        .then(function() { console.log('Service Worker Registered'); });  
}
})();
