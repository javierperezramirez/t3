'use strict'
// Codigo para manejar el modo dia/noche

var modo=leerModoActual();
if (modo=="dia") {
    ponerModoDia();
} else {
    ponerModoNoche();
}

function leerModoActual() {
    // Devolvera modo DIA si no hay modo guardado
    let modo=window.localStorage.getItem("modoGuardado");
    console.log('Modo Pantalla: '+modo);
    if (!modo) {
        // Devolvera modo DIA si no hay modo guardado
        modo="dia";
    }
    return modo;
}

function ponerModoDia() {

    // Ponemos letra oscura sobre fondo blanco
    let todo=document.getElementById("todo");
    // todo.style.color="black";
    // todo.style.backgroundColor="white";
    todo.style.backgroundImage="url('Imagenes/bajoblanco1.jpg')";
    window.localStorage.setItem("modoGuardado","dia");
    // Ocultamos el sol
    let iconoDia=document.getElementById("dia");
    iconoDia.style.display="none";
    // Mostramos la luna
    let iconoNoche=document.getElementById("noche");
    iconoNoche.style.display="block";
}

function ponerModoNoche() {

    // Ponemos letra blanco sobre fondo negro
    let todo=document.getElementById("todo");
    // todo.style.color="white";
    // todo.style.backgroundColor="black";
    todo.style.backgroundImage="url('Imagenes/bajonegro.jpg')";
    window.localStorage.setItem("modoGuardado","noche");
    // Mostramos el sol
    let iconoDia=document.getElementById("dia");
    iconoDia.style.display="block";
    // Ocultamos la luna
    let iconoNoche=document.getElementById("noche");
    iconoNoche.style.display="none";
}
