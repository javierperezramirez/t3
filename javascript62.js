'use strict'
// 'use strict' nos ayuda a no dejar pasar ningun error

// definimos las variables globales
var color='white';

// creamos una funcion y pedimos solamente el color
function eligeColor() {
    color = prompt("Diga de que color quiere el saludo (azul, rojo, verde)","");
    switch (color) {
        case 'azul':
            color='blue';
            break;
        case 'rojo':
            color='red';
            break;
        case 'verde':
            color='green';
            break;
        default:
            color='black'; // lo ponemos en negro cuando no se elija ninguna opción
            break;
    }
}

// creamos una funcion generica para cada cuadro que se seleccione
function saludar(identificador) {
    let id="c"+identificador;
    let cuadro=document.getElementById(id);
    cuadro.style.color=color;
    cuadro.innerHTML="HOLA";
}

eligeColor();