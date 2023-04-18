'use strict'
// 'use strict' nos ayuda a no dejar pasar ningun error

// pedimos el numero donde escribir HOLA
let cuadro = prompt("Diga en qué cuadro quiere saludar (1 a 5)","");
cuadro = parseInt(cuadro);
// 'cuadro' será una variable numérica entre 1 y 5

if ((cuadro<1)||(cuadro>5)||isNaN(cuadro)) {
    alert("El numero introducido NO es valido!!!")
} else {
    var selector = "c"+cuadro;
    var estecuadro = document.getElementById(selector);
    estecuadro.innerHTML="HOLA";
}
