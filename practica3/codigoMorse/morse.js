// Array asociativo que contiene el diccionario del código Morse
const MORSE = {
  'A': '.-',    'B': '-...',  'C': '-.-.',  'CH': '----', 'D': '-..',
  'E': '.',     'F': '..-.',  'G': '--.',   'H': '....',  'I': '..',
  'J': '.---',  'K': '-.-',   'L': '.-..',  'M': '--',    'N': '-.',
  'Ñ': '--.--', 'O': '---',   'P': '.--.',  'Q': '--.-',  'R': '.-.',
  'S': '...',   'T': '-',     'U': '..-',   'Ü': '..--',  'V': '...-',
  'W': '.--',   'X': '-..-',  'Y': '-.--',  'Z': '--..',
  '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-',
  '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
  '.': '.-.-.-', ',': '--..--', '?': '..--..', '"': '.-..-.', '/': '-..-.'
};

//Guardo el texto del input para poder traducirlo
let texto = document.getElementById("texto");

//Esta va a ser la funcion que se encargara de traducir el texto a morse
function traducirAMorse(texto) {
  texto = texto.toUpperCase();   // Paso el texto a mayusculas porque el diccionario de morse esta en maysuculas
  let resultado = [];

  for (let i = 0; i < texto.length; i++) {
    let letra = texto[i];

    // CH cuenta como una sola letra
    if (letra === 'C' && texto[i + 1] === 'H') {
      letra = 'CH';
      i++;   // nos saltamos la H porque ya la hemos usado
    }

    if (letra === ' ') {
      resultado.push('/');              // si hay un espacio ponemos un "/" para separar
    } else if (MORSE[letra]) {
      resultado.push(MORSE[letra]);     // si se encuentra la letra en el diccionario se guarda en el array
    }
  }

  return resultado.join(' ');   // junto todo con espacios
}

const formulario = document.getElementById('formulario'); // Guardo el formulario en una variable
const campoTexto = document.getElementById('texto'); //Guardo el texto que se quiere traducir
const parrafoResultado = document.getElementById('resultado'); //Guardo el resultado, que orignialmente empeiza vacio
 
formulario.addEventListener('submit', function (evento) {
  evento.preventDefault(); //Evito que se recargue la pagina al pulsar el boton de enviar
 
  parrafoResultado.textContent = traducirAMorse(campoTexto.value); //Cambio el resultado vacio por el texto traducido
});