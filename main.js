window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var navbar = document.getElementById("mainNav");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    navbar.classList.add("bg-opacity-100");
  } else {
    navbar.classList.remove("bg-opacity-100");
  }
}

document.addEventListener("DOMContentLoaded", function() {
  // Inicializa el carrusel de Bootstrap
  $('#carouselExampleIndicators').carousel();
});

function validarFormulario() {
  var nombre = document.getElementById("nombre").value;
  var email = document.getElementById("email").value;
  var mensaje = document.getElementById("mensaje").value;

  if (nombre === "" || email === "" || mensaje === "") {
      alert("Por favor, complete todos los campos del formulario.");
  } else {
      var mensajeAlerta = "Nombre: " + nombre + "\n";
      mensajeAlerta += "Correo Electrónico: " + email + "\n";
      mensajeAlerta += "Mensaje: " + mensaje;

      alert(mensajeAlerta);

      document.getElementById("contactForm").reset(); // Para limpiar el formulario después de enviarlo
  }
}