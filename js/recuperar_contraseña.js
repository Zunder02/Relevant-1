const form = document.getElementById('recuperarForm');
const dialogoEnvio = document.getElementById('envio');
const botonAceptar = document.getElementById('sibtn');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevenir el envío del formulario

  const correo = form.correo.value;

  // Validar el correo
  if (correo.length > 0 && correo.includes('@') && correo.includes('.com')) {
    // Mostrar el diálogo de envío
    dialogoEnvio.showModal();
  } else {
    // Mostrar mensaje de error o realizar otra acción
    alert('Por favor, ingrese un correo válido');
  }
});

botonAceptar.addEventListener('click', function() {
  // Redirigir al usuario a otra página después de procesar la recuperación de contraseña
  window.location.href = 'ini_sesion.html';
});

// Ocultar el anuncio al cargar la página
window.addEventListener('load', function() {
  const anuncio = document.getElementById('anuncio');
  anuncio.close();
});

window.onload = function() {
  var dialog = document.getElementById("anuncio");
  var closeBtn = document.getElementById("closebtn");

  dialog.showModal();

  closeBtn.onclick = function() {
    dialog.classList.add("closing");
    setTimeout(function() {
      dialog.close();
    }, 500);
  };
};
