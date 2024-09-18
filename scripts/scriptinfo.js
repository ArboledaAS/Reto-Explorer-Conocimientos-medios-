let imagen = document.getElementById('items');
let informacion = document.getElementById('texto');
let boton = document.getElementById("btnVolver");

let personaje = JSON.parse(localStorage.getItem("clash")) || []


cargarInformacion();

boton.addEventListener('click',function(){
    location.href = "../index.html";
    localStorage.setItem('pos', personaje.posi)


})

function cargarInformacion(){
    

    imagen.innerHTML = `<img src=${personaje.img} id="idimagen">`;
    informacion.innerText = `${personaje.desc}`;
}


