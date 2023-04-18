'use strict'
// 'use strict' nos ayuda a no dejar pasar ningun error

// pedimos el numero donde escribir HOLA
let cuadro = prompt("Diga en qué cuadro quiere saludar (1 a 5)","");
cuadro = parseInt(cuadro);
// 'cuadro' será una variable numérica entre 1 y 5

var color = prompt("Diga de que color quiere la piramide (a=Blue, b=Red, c=Green)","");

if ((cuadro<1)||(cuadro>5)||isNaN(cuadro)) {
    alert("El numero introducido NO es valido!!!")
} else {
    if (color=='a') {
        let selector = "c"+cuadro;
        let estecuadro = document.getElementById(selector);
        estecuadro.innerHTML="--o--"+'<br>'+"-ooo-"+'<br>'+"ooooo";
        estecuadro.style.color="blue";
    } else if (color=='b') {
        let selector = "c"+cuadro;
        let estecuadro = document.getElementById(selector);
        estecuadro.innerHTML="--o--"+'<br>'+"-ooo-"+'<br>'+"ooooo";
        estecuadro.style.color="red";
    } else if (color=='c') {
        let selector = "c"+cuadro;
        let estecuadro = document.getElementById(selector);
        estecuadro.innerHTML="--o--"+'<br>'+"-ooo-"+'<br>'+"ooooo";
        estecuadro.style.color="green";
    } else {
        alert("El color introducido no es valido")
    }
}
