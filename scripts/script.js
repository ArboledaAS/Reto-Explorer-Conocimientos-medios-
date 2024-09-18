import { data } from "../data/data.js"

document.addEventListener('DOMContentLoaded', function(){
    let posicion = JSON.parse(localStorage.getItem("pos")) || 0

    let sizeData = data.length;
    
    let items = document.getElementById('items');
    let info;
    //let boton = document.getElementById('nombreElemento')
    let boton = document.getElementById('pestana');
    let btnAdelante = document.querySelector("#btnAdelante");
    let btnAtras = document.querySelector("#btnAtras");
    
    
    capturarDecrementar();
    capturarIncrementar();
    actualizar();
    
    
    
    
    
    
    
    
    
    function capturarDecrementar(){
        //let elbotonatras = document.getElementById('btnAtras')
        btnAtras.addEventListener('click',Decrementar);
    }
    
    function capturarIncrementar(){
        //let elbotonadelante = document.getElementById('btnAdelante')
        btnAdelante.addEventListener('click',Incrementar);
    }
    
    function Incrementar(){
        
        if(posicion < (sizeData-1)){
            btnAtras.disabled = false
            posicion = posicion + 1;
            actualizar();
        }else{
            btnAdelante.disabled = true
        }
        
    }
    
    function Decrementar(){
        if(posicion > 0){
            btnAdelante.disabled = false
            posicion = posicion - 1;
            actualizar();
        }else{
            
            btnAtras.disabled = true
        }
    }
    
    function actualizar(){

        
        
        info = data[posicion]

        let objeto ={
            nnom: info.nombre,
            desc: info.descripcion,
            img: info.img,
            posi: posicion,
        }

        localStorage.setItem("clash", JSON.stringify(objeto));
    
        items.innerHTML = ``
    
        boton.innerText = `${info.nombre}`
    
        items.innerHTML = `<img src=${info.img} id="idimagen">`
    //     localStorage.setItem('nombre', info.nombre);
    //     localStorage.setItem('descrip', info.descripcion);
    //     localStorage.setItem('img', info.img);
    //     localStorage.setItem('posicion', posicion);
    // 
    } 
    
    
    // function presente(){
    //     actualizar
    //     localStorage.setItem('nombre', info.nombre);
    //     localStorage.setItem('descrip', info.descripcion);
    //     localStorage.setItem('img', info.img);
    //     localStorage.setItem('posicion', posicion);
    
    //     cargar;
    // }
    
    
    
})

