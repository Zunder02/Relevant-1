function decrementarCantidad() {
    var cantidadInput = document.getElementById('cantidad');
    var cantidad = parseInt(cantidadInput.value);

    if (cantidad > 1) {
        cantidad--;
        cantidadInput.value = cantidad;
    }
}

function incrementarCantidad() {
    var cantidadInput = document.getElementById('cantidad');
    var cantidad = parseInt(cantidadInput.value);

    cantidad++;
    cantidadInput.value = cantidad;
}