let pantallaActual = "0"; // current display content variable
let pantallaContenido = false; // track if the result is displayed variable

// function to add the button value to the display
function mostrarEnPantalla(value) {
  if (pantallaActual === "0" || pantallaContenido) {
    // si el valora actual es 0 o el valor ya esta en la pantalla, se reemplaza con el nuevo valor
    pantallaActual = value;
  } else {
    // si no, concatenar/agregar el nuevo valor a la pantalla actual
  }

  // reiniciar el contenido a falso cuando el ususario ingrese un nuevo valor
  pantallaContenido = false;

  // actualiza la pantalla de la calculadora para mostrar el contenido nuevo
  pantallaActualizada();
}

// function to update the content display with current content
function pantallaActualizada() {
  const mostarElemento = document.getElementById("pantalla");
  mostrarElemento.textContent = pantallaActual;
}

// function to calculate the result
function calcularResultado() {
  try {
    // con la funcion eval() se evalua la expresion matematica
    const resultado = eval(pantallaActual);

    // agregamos el resultado a la pantalla actual luego de un signo igual (=)
    pantallaActual += "\n=" + resultado.toString();

    // actuliza la pantalla a el resultado actual
    pantallaActualizada();
  } catch (error) {
    // si hay un error en la expresion, mostrar un mensaje
    pantallaActual += "\nError";

    // actualiza la pantalla para mostrar el mensaje
    pantallaActualizada();
  }

  // que muestre el resultado como verdadreo para indicar el resultado en pantalla
  pantallaContenido = true;
}

// function to clear the last value/element from the display
function borrarUltimoValor() {
  // eliminaremos el ultimo caracter de la pantalla usando el metodo slice()
  pantallaActual = pantallaActual.slice(0, -1);

  // si la pantalla actual esta vacia, convertirlo de nuevo a "0"
  if (pantallaActual === "") {
    pantallaActual = "0";
  }

  // actuliza la pantalla para reflejar cambios
  pantallaActualizada();
}

// function to clear the entire display
function limpiarPantalla() {
  pantallaActual = "0"; // reiniciar la pantalla a "0"
  pantallaContenido = false; // reiniciar el contenido a falso

  // actualiza la pantalla de la calculadora
  pantallaActualizada();
}