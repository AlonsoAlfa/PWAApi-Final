if('serviceWorker' in navigator) {
    console.log('Puede usar los sw en tu navegador');
    navigator.serviceWorker.register('sw.js')
                            .then(res=>console.log("SW CARGADO CORRECTAMENTE",res))
                            .catch(err=>console.log("NO SE PUDO REGISTRAR",err));
}else {
    console.log('No Puede usar el sw en tu navegador');
}