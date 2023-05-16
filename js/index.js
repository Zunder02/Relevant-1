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

/*menu*/
var fixedDiv = document.getElementById("cabe");

window.addEventListener("scroll", function() {
  var scrollPosition = window.scrollY;

  if (scrollPosition > 100) {
    fixedDiv.style.backgroundColor = "black";
    fixedDiv.style.transition ="1s"
  } else {
    fixedDiv.style.backgroundColor = "transparent";
  }
});

