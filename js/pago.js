var acc = document.getElementsByClassName("acordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    var isActive = this.classList.contains("active");

    // Cerrar todos los paneles desplegados
    closeAllPanels();

    // Si el panel no estaba activo, abrirlo
    if (!isActive) {
      this.classList.add("active");
      var panel = this.nextElementSibling;
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

function closeAllPanels() {
  var panels = document.getElementsByClassName("panel");
  for (var j = 0; j < panels.length; j++) {
    panels[j].style.maxHeight = null;
    acc[j].classList.remove("active");
  }
}
/*activando el primer acordion */
acc[0].classList.add("active");
var panel = acc[0].nextElementSibling;
panel.style.maxHeight = panel.scrollHeight + "px";