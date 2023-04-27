'use strict'
// 'use strict' nos ayuda a no dejar pasar ningun error

// creamos una variable para contar las veces que pinta
var contador=0;

// creamos un array para el tablero
var tablero = ['0','0','0','0','0','0','0','0','0'];

// pintamos el tablero de la matriz con los seleccionados
function pintarTablero(identificador) {
    tablero[identificador]='1';
}

// comprobamos el tablero de la matriz que sean tres en raya
function comprobarTablero() {
    if ((tablero[0,0]=='1')&&(tablero[0,1]=='1')&&(tablero[0,2]=='1')) {
        alert("Has pintado TRES EN RAYA!!!")
    }
}

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
        comprobarTablero();
    }
}

// creamos una funcion que pinta el cuadro con un hover (inactivo)
function hoverinoff(identificador) {
    let id="c"+identificador;
    let cuadro=document.getElementById(id);
    cuadro.style.backgroundColor='rgb(0, 218, 218)';
}

function compruebaMatriz() {
    for (var i=0;i<3;i++) {
        for (var j=0;j<3;j++) {
            if ((tablero[i,j]==1)&&(tablero[i,j+1])&&(tablero[i,j+2])) {
                alert("Has puesto TRES EN RAYA !!!!!")
            }
        }
    }
}
