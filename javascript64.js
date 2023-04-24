'use strict'
// 'use strict' nos ayuda a no dejar pasar ningun error

// definimos las variables globales
var color='white';

// trabajamos con arrays
var colorFr = [
    'rgb(255, 0, 0)',
    'rgb(3, 255, 45)',
    'rgb(0, 102, 255)',
    'rgb(255, 0, 200)',
    'rgb(255, 251, 0)'
];

var colorFn = [
    'white',
    'blue',
    'black',
    'yellow',
    'red'
];

function pinturaInicial() {
    for (var i=0;i<5;i++) {
        let identificador="c"+(i+1);
        let elemento=document.getElementById(identificador);
        elemento.style.backgroundColor=colorFn[i];
        elemento.style.color=colorFr[i];
    }

}

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

pinturaInicial();