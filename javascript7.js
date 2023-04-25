'use strict'
// 'use strict' nos ayuda a no dejar pasar ningun error

// creamos una variable para contar las veces que pinta
var contador=0;

// creamos un array para el tablero
var tablero= [3,3];

// creamos una funcion que pinte el cuadro con un hover (activo)
function hoverino(identificador) {
    let id="c"+identificador;
    let cuadro=document.getElementById(id);
    cuadro.style.backgroundColor='rgb(0, 150, 150)';
}

// creamos una funcion generica para dibujar el simbolo
function pintar(identificador) {

    // ponemos un if para limitar a 3 los dibujos
    if (contador<3) {
        let id="c"+identificador;
        let cuadro=document.getElementById(id);
        cuadro.style.color='black';
        cuadro.innerHTML="*";
        contador+=1;
    } else {
        alert("El juego ha terminado, reinicia la partida!!!");
    }
}

// creamos una funcion que pinta el cuadro con un hover (inactivo)
function hoverinoff(identificador) {
    let id="c"+identificador;
    let cuadro=document.getElementById(id);
    cuadro.style.backgroundColor='rgb(0, 218, 218)';
}
