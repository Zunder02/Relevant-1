function buscarProducto() {
    var input, filter, productos, producto, nombre, i, txtValue;
    input = document.getElementById("busqueda");
    filter = input.value.toUpperCase();
    productos = document.getElementsByClassName("ropa");

    // Recorrer todos los productos y ocultar los que no coincidan con la búsqueda
    for (i = 0; i < productos.length; i++) {
      producto = productos[i];
      nombre = producto.getElementsByClassName("nombre")[0];
      txtValue = nombre.textContent || nombre.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        producto.style.display = "";
      } else {
        producto.style.display = "none";
      }
    }
  }
