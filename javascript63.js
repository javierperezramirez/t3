'use strict'
// 'use strict' nos ayuda a no dejar pasar ningun error

// definimos las variables globales
var color='white';

// creamos una funcion con doble click para obtener el color del cuadro
function obtieneColor(identificador) {
    let id="c"+identificador;
    let cuadro=document.getElementById(id);
    color=getComputedStyle(cuadro).backgroundColor;
    cuadro.style.color=color;
}

// creamos una funcion generica para cada cuadro que se seleccione
function saludar(identificador) {
    let id="c"+identificador;
    let cuadro=document.getElementById(id);
    cuadro.style.color='black';
    cuadro.innerHTML="HOLA";
}

eligeColor();