// Buscar el elemento que tiene el atributo data-widget-name
const widget = document.querySelector('[data-widget-name]');

// Leer su valor (dos formas equivalentes)
const nombre = widget.getAttribute('data-widget-name');

console.log(nombre); // "menu"
