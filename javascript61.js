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

// creamos una funcion para cada cuadro que se seleccione
function saludarc1() {
    let cuadro=document.getElementById("c1");
    cuadro.style.color=color;
    cuadro.innerHTML="HOLA";
}
function saludarc2() {
    let cuadro=document.getElementById("c2");
    cuadro.style.color=color;
    cuadro.innerHTML="HOLA";
}
function saludarc3() {
    let cuadro=document.getElementById("c3");
    cuadro.style.color=color;
    cuadro.innerHTML="HOLA";
}
function saludarc4() {
    let cuadro=document.getElementById("c4");
    cuadro.style.color=color;
    cuadro.innerHTML="HOLA";
}
function saludarc5() {
    let cuadro=document.getElementById("c5");
    cuadro.style.color=color;
    cuadro.innerHTML="HOLA";
}

eligeColor();


