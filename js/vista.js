//Cantidades
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






//Vistas

// Imagenes y circulos
const mainImage = document.querySelector('.central .producto img');
const circleImages = document.querySelectorAll('.central .circulos img');

// Controlador de eventos
circleImages.forEach((circle, index) => {
  circle.addEventListener('click', () => {
    if (index === 1) {
      // Si se hace clic en el segundo círculo, cambiar la imagen a "prueba01.webp"
      mainImage.setAttribute('src', 'imagenes/prueba01.webp');
    } else if (index === 2) {
      // Si se hace clic en el tercer círculo, cambiar la imagen a "prueba02.webp"
      mainImage.setAttribute('src', 'imagenes/prueba02.webp');
    } else {
      // Si se hace clic en cualquier otro círculo, cambiar la imagen a "short.jpg"
      mainImage.setAttribute('src', 'imagenes/short.jpg');
    }

    // Remover la clase "active" de todos los círculos
    circleImages.forEach((circle) => {
      circle.classList.remove('active');
    });

    // Agregar la clase "active" al círculo seleccionado
    circle.classList.add('active');
  });
});

//Para que las iamagenes de la division derecha se plasma en la imagen de division central
const circulos= document.querySelectorAll('.central .circulos img');
const circuloSrc= [];
circulos.forEach((circulo)=>{
  circuloSrc.push(circulo.getAttribute('src'));
});

circulos.forEach((circulo,index)=>{
  circulo.addEventListener('click',()=>{
    if(index === 0){
      const temp = circulos[circulos.length-1].getAttribute('src');
    circulos[circulos.length-1].setAttribute('src',circuloSrc[index]);
    circulo.setAttribute('src', temp);
      } else {
        const temp = circulos[index-1].getAttribute('src');
        circulos[index-1].setAttribute('src',circuloSrc[index])
        circulo.setAttribute('src',temp);
      }
  })
})

const circulo1 = circulos[0]; // Obtener la primera imagen del círculo

circulo1.addEventListener('click', () => {
  // Restaurar las imágenes originales de los círculos
  circulos.forEach((circulo, index) => {
    circulo.setAttribute('src', circuloSrc[index]);
  });

  // Restaurar la imagen original en el área principal
  mainImage.setAttribute('src', 'imagenes/short.jpg');

  // Remover la clase "active" de todos los círculos
  circleImages.forEach((circle) => {
    circle.classList.remove('active');
  });

  // Agregar la clase "active" al primer círculo
  circulo1.classList.add('active');
});



document.addEventListener('DOMContentLoaded', function () {
  const descuentoTexto = document.getElementById('descuentoTexto');
  const dialogo = document.getElementById('registro');

  if (descuentoTexto) {
    descuentoTexto.addEventListener('click', () => {
      dialogo.showModal();
    });
  }
});




//CUADRO DE DIALOGO DONDE ESTA EL DESCUENTO ADICIONAL
const dialog = document.getElementById("registro");
const closeBtn = document.getElementById("closebtn");
const acceptBtn = document.getElementById("sibtn");

// Función para cerrar el diálogo
function closeDialog() {
  dialog.close();
}

// Función para validar el formulario
function validateForm(event) {
  event.preventDefault(); // Evitar que se envíe el formulario

  const emailInput = document.querySelector('input[name="correo"]');
  const passwordInput = document.querySelector('input[name="contraseña"]');

  // Validar el correo
  if (emailInput.value.trim() === "" || !emailInput.value.includes("@") || !emailInput.value.includes(".com")) {
    alert("Por favor, ingrese un correo válido.");
    return;
  }


  // Cerrar el diálogo
  closeDialog();

}

// ...

//botón de cierre
closeBtn.addEventListener("click", closeDialog);

//botón de aceptar
acceptBtn.addEventListener("click", validateForm);
