if('serviceWorker' in navigator){
    navigator.serviceWorker.register('./sw.js')
    .then(registrado => {
        return console.log('Se registró correctamente', registrado);

    })
    .catch(error => console.log('Fallo la instalación', error))
}else{  
    console.log('Service Workers no soportados');
}