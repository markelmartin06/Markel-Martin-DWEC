//Crep una constante de columnas para que no haya mas de 10 columnas 
const columnas = 10;

//Primero uso una funcion para comprobar si el numero es primo
function esPrimo(n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

document.getElementById('formulario').addEventListener('submit', function (evento) { 
  evento.preventDefault();   // evito que se recargue la pagina al pulsar el boton de enviar

  const numero = parseInt(document.getElementById('numero').value); //Cojo el valor numero del formulario
  const resultado = document.getElementById('resultado'); //Aqui guardo el resultado, que orignialmente llegara vacio
  const tabla = document.createElement('table'); //Aqui creo la tabla vacia que se ira rellenando
  let fila;
  let cantidad = 0;

  for (let i = 2; i <= numero; i++) {
    if (!esPrimo(i)) continue;
    if (cantidad % columnas === 0) fila = tabla.insertRow(); // Uso la constante de columnas para que cada vez que sean 10 se cree una nueva linea
    fila.insertCell().textContent = i; //Inserto una celada en la fila con el numero primo
    cantidad++;
  }

  // Si cantidad es 0 te indica que no existen primos entre el 1 y el numero seleccionado
  if (cantidad === 0) {
    resultado.textContent = 'No hay números primos entre 1 y ' + numero;
  } else {
    resultado.replaceChildren(tabla); //En caso de que la cantidad sea mayor que 0 cambiamos el resultado vacio por la tabla
  }
});
