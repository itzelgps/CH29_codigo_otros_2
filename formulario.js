var formulario = document.querySelector(".formulario")

/* 
  Se cambio e.prevent a e.preventDefault();
  Se elemino cóigo repetido
  Se le agrago a todas las varables ; 

*/

formulario.onsubmit = function (e) {

  e.preventDefault();
  
  var n = formulario.elements[0];
  var e = formulario.elements[1];
  var na = formulario.elements[2];

  var nombre = n.value;
  var edad = e.value;

  var i = na.selectedIndex;
  var nacionalidad = na.options[i].value;
  console.log(nombre, edad);
  console.log(nacionalidad);

  if (nombre.length === 0) {
    n.classList.add("error");
  }
  if (edad < 18 || edad > 120) {
    e.classList.add("error");
  }

  // Se cambio la condicional edad > 18 && edad < 120 a edad >= 18 && edad <= 100
  if (nombre.length > 0
    && (edad >= 18
      && edad <= 100)) {
    agregarInvitado(nombre, edad, nacionalidad);
  }
};

  var botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
  botonBorrar.style.display = "none";
  document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina";
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana";
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana";
  }

  var lista = document.getElementById("lista-de-invitados");

  var elementoLista = document.createElement("div");
  elementoLista.classList.add("elemento-lista"); // Se cambio .added a .add
  lista.appendChild(elementoLista);

  var spanNombre = document.createElement("span");
  var inputNombre = document.createElement("input");
  var espacio = document.createElement("br");
  spanNombre.textContent = "Nombre: ";
  inputNombre.value = nombre;
  // Lineas duplicada 
// elementoLista.appendChild(spanNombre)
// elementoLista.appendChild(inputNombre)
  elementoLista.appendChild(espacio);

function crearElemento(descripcion, valor) {
  var spanNombre = document.createElement("span");
  var inputNombre = document.createElement("input");
  var espacio = document.createElement("br");
  spanNombre.textContent = descripcion + ": ";
  inputNombre.value = valor;
  elementoLista.appendChild(spanNombre);
  elementoLista.appendChild(inputNombre);
  elementoLista.appendChild(espacio);
}

  crearElemento("Nombre", nombre);
  crearElemento("Edad", edad);
  crearElemento("Nacionalidad", nacionalidad);


  var botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Eliminar invitado";
  botonBorrar.id = "boton-borrar";
  var corteLinea = document.createElement("br");
  document.body.appendChild(corteLinea);
  document.body.appendChild(botonBorrar);


 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
   
   botonBorrar.parentNode.remove();
  }
}