// Obtener referencias a los elementos del DOM
var modal = document.getElementById('modal');
var modalLink = document.getElementById('modal-link');
var closeBtn = document.getElementsByClassName('close')[0];

// Abrir la ventana modal al hacer clic en el enlace
modalLink.onclick = function(event) {
  event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
  modal.style.display = 'block';
}

// Cerrar la ventana modal al hacer clic en el botón de cerrar
closeBtn.onclick = function() {
  modal.style.display = 'none';
}

// Cerrar la ventana modal al hacer clic fuera de ella
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}