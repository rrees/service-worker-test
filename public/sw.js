this.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('v1').then((cache) => {
            return cache.addAll([
                '/',
                '/js/app.js',
                '/stylesheets/style.css'
            ]);
        }));
});

this.addEventListener('fetch', (event) => {
    //console.log(event);
   event.respondWith(
       caches.match(event.request)
   ); 
});
