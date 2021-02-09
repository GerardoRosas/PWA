//Cuando se instala el service worker
//Este metodo install solo se ejecuta una sola vez
self.addEventListener('install', e => {
    console.log('Instalando el service worker');
    console.log(e);
})



//Activar el service worker
self.addEventListener('activate', e => {
    console.log('Service Worker Activado');

    console.log(e);
})


//Evento fetch para descargar archivos estaticos
self.addEventListener('fetch', e => {
    console.log('Fetch', e);
})