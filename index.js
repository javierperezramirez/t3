'use strict'

// CODIGO PARA MANEJAR EL MODO DIA/NOCHE
var modo = leerModoActual();
if (modo == "dia") {
    ponerModoDia();
} else {
    ponerModoNoche();
}

// FUNCION LEER MODO ACTUAL
function leerModoActual() {
    // Devolvera modo DIA si no hay modo guardado
    let modo = window.localStorage.getItem("modoGuardado");
    console.log('Modo Pantalla: ' + modo);
    if (!modo) {
        // Devolvera modo DIA si no hay modo guardado
        modo = "dia";
    }
    return modo;
}

// FUNCION PORNER EN MODO DIA
function ponerModoDia() {
    // Ponemos letra oscura sobre fondo blanco
    let todo = document.getElementById("todo");
    // todo.style.color="black";
    // todo.style.backgroundColor="white";
    todo.style.backgroundImage = "url('Imagenes/bajoblanco1.jpg')";
    window.localStorage.setItem("modoGuardado", "dia");
    // Ocultamos el sol
    let iconoDia = document.getElementById("dia");
    iconoDia.style.display = "none";
    // Mostramos la luna
    let iconoNoche = document.getElementById("noche");
    iconoNoche.style.display = "block";
}

// FUNCION PONER EN MODO NOCHE
function ponerModoNoche() {
    // Ponemos letra blanco sobre fondo negro
    let todo = document.getElementById("todo");
    // todo.style.color="white";
    // todo.style.backgroundColor="black";
    todo.style.backgroundImage = "url('Imagenes/bajonegro.jpg')";
    window.localStorage.setItem("modoGuardado", "noche");
    // Mostramos el sol
    let iconoDia = document.getElementById("dia");
    iconoDia.style.display = "block";
    // Ocultamos la luna
    let iconoNoche = document.getElementById("noche");
    iconoNoche.style.display = "none";
}

// CODIGO PARA APLICAR EL COLOR Y TAMAÑO GUARDADOS EN LOCALSTORAGE
var color = leerColorActual()
document.documentElement.style.setProperty("--colorNormal", color);
var tamelegido = leerTamActual()
document.documentElement.style.fontSize = parseFloat(tamelegido) + "rem";

// FUNCION PARA LEER EL COLOR GUARDADO
function leerColorActual() {
    // Devolvera el color guardado en localstorage
    let color = window.localStorage.getItem("colorElegido");
    console.log('Color Leido: ' + color);
    if ('colorElegido' == null) {
        // Devolvera el color por rojo por defecto
        color = '#ff0000';
    }
    return color;
}

// FUNCION PARA LEER EL TAMAÑO GUARDADO
function leerTamActual() {
    // Devolvera el tamaño guardado en localstorage
    let tamelegido = window.localStorage.getItem("tamGuardado");
    console.log('Tamaño Leido: ' + tamelegido);
    if ('tamGuardado' == null) {
        // Devolvera el tamaño normal por defecto
        tamelegido = 1;
    }
    return tamelegido;
}

// FUNCION PARA APLICAR LOS CAMBIOS DE TAMAÑO/COLOR ELEGIDOS
function aplicarCambios() {
    let color = document.getElementsByName('colorElegido')[0];
    console.log('Color Elegido: ' + color.value);
    // Guardamos el color en localStorage
    window.localStorage.setItem("colorElegido", color.value);

    let tam = document.getElementsByName('tamFuente')[0];
    let tamelegido = tam[tam.selectedIndex].value;
    // Guardamos el tamaño en localStorage
    window.localStorage.setItem("tamGuardado", tam[tam.selectedIndex].value);

    document.documentElement.style.fontSize = parseFloat(tamelegido) + "rem";
    document.documentElement.style.setProperty("--colorNormal", color.value);
    // document.getElementById('mensaje').innerHTML = "APLICADO";
}
