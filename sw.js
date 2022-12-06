self.addEventListener('install', e => {
    caches.open('cache-v1')
        .then( cache => cache.addAll ([
            'index.html',
            'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css',
            'css/index.css',
            'js/app.js',
            'images/carru1.jpg'
        ]));
        e.waitUntil(caccheProm);
});
self.addEventListener('fetch', e => {
    const respuesta = caches.match( e.request )
        .then ( res => {
            if ( res ) return res;
            //no existe el archivo
            //tengo que ir a la web
            console.log('No existe', e.request.url);
            return fetch( e.request ).then ( newResp => {
                caches.open('cache-v1')
                    .then( cache => {
                        cache.put( e.request, newResp);
                    }

                    )
                return newResp.clone;
            });
        });
        e.respondWith(respuesta);
    //only cache

})