'use strict'
// 'use strict' nos ayuda a no dejar pasar ningun error

// creamos una funcion que pinte el cuadro con un hover
function hoverino(identificador) {
    let id="c"+identificador;
    let cuadro=document.getElementById(id);
    cuadro.style.backgroundColor='rgb(0, 150, 150)';
}

// creamos una funcion generica para dibujar el simbolo
function pintar(identificador) {
    let id="c"+identificador;
    let cuadro=document.getElementById(id);
    cuadro.style.color='black';
    cuadro.innerHTML="*";
}

function hoverinoff(identificador) {
    let id="c"+identificador;
    let cuadro=document.getElementById(id);
    cuadro.style.backgroundColor='rgb(0, 218, 218)';
}
