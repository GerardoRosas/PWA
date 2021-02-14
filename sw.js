const nombre_cache = 'apv_v1';
const archivos = [
    '/',
    '/index.html',
    '/css/bootstrap.css',
    '/css/styles.css',
    '/js/app.js',
    '/js/apb.js',
    '/error.html'
]

//Cuando se instala el service worker
//Este metodo install solo se ejecuta una sola vez
self.addEventListener('install', e => {
    console.log('Instalando el service worker');

    e.waitUnitil(
        caches.open(nombre_cache)
            .then(cache => {
                console.log('cacheando');
                cache.addAll(archivos);
            })
    )
})



//Activar el service worker
self.addEventListener('activate', e => {
    console.log('Service Worker Activado');

    console.log(e);
})


//Evento fetch para descargar archivos estaticos
self.addEventListener('fetch', e => {
    console.log('Fetch', e);

    e.respondWith(
        caches.match(e.request)
            .then(respuestaCache => {
                return respuestaCache
            })
            .catch(() => caches.match('/error.html'))
    )
})