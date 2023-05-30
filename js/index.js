/*BANNER*/
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

window.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;

  if (scrollPosition > 100) {
    fixedDiv.style.backgroundColor = "black";
    fixedDiv.style.transition = "1s"
  } else {
    fixedDiv.style.backgroundColor = "transparent";
  }
});
/*MODAL*/
window.onload = function () {
  var dialog = document.getElementById("modal");
  var closeBtn = document.getElementById("closebtn");

  dialog.showModal();

  closeBtn.onclick = function () {
    dialog.classList.add("closing");
    setTimeout(function () {
      dialog.close();
    }, 500);
  };
};

/*RESPONSIVE BANNER*/
window.addEventListener("DOMContentLoaded", function () {
  var imagenes = document.querySelectorAll("#banner2 img");
  var indice = 0;

  function mostrarImagenSiguiente() {
    imagenes[indice].classList.remove("activo");
    indice = (indice + 1) % imagenes.length;
    imagenes[indice].classList.add("activo");
  }

  setInterval(mostrarImagenSiguiente, 3000);
});
/*Menu responsive*/
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
var fixedDiv = document.getElementById("cabe2");

window.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;

  if (scrollPosition > 100) {
    fixedDiv.style.backgroundColor = "black";
    fixedDiv.style.transition = "1s"
  } else {
    fixedDiv.style.backgroundColor = "transparent";
  }
});

