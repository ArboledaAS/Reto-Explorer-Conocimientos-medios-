let imagen = document.getElementById('items');
let informacion = document.getElementById('texto');
let boton = document.querySelector("#btnVolver");



cargarInformacion();


function cargarInformacion(){

    imagen.innerHTML = `<img src=${localStorage.getItem('img')} id="idimagen">`;
    informacion.innerText = `${localStorage.getItem('descrip')}`;
}


