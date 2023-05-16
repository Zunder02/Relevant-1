window.addEventListener("DOMContentLoaded", function () {
  var imagenes = document.querySelectorAll("#banner img");
  var indice = 0;

  function mostrarImagenSiguiente() {
    imagenes[indice].classList.remove("activo");
    indice = (indice + 1) % imagenes.length;
    imagenes[indice].classList.add("activo");
  }

  setInterval(mostrarImagenSiguiente, 3000);
});
