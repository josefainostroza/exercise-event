// - Crea un botón con la etiqueta <button> en tu página HTML y añade un evento de click que muestre en la consola el texto que tenga botón al hacer click.
const buttonElement = document.getElementById('button');

const printName = (event) => {
  buttonElement.textContent = 'HOLA A TODO EL MUNDO';
};
buttonElement.addEventListener('click', printName);

// - Crea un h1 con el texto "Soy un título ", al ponerte con el ratón encima del h1, deberá cambiar al texto a "Quita de encima!!!" y al quitarte, deberá volver a poner "Soy un título"
const h1Element = document.getElementById('main-title');

const printHover = () => {
  h1Element.textContent = 'Quita de encima!!!';
};
const printOut = () => {
  h1Element.textContent = 'Soy un título';
};
h1Element.addEventListener('mouseover', printHover);
h1Element.addEventListener('mouseout', printOut);

// - Crea un p con el texto "esperando entrada de teclado..." al pulsar cualquier tecla deberá poner "has pulsado la tecla tal" y al soltarla el <p> volverá a tener el texto "esperando entrada de teclado...". Como reto extra puedes intentar añadir si se ha usado una combinación de teclas con alt, shift o control

const printPtext = document.getElementById('main-text');

const getKey = (event) => {
  printPtext.textContent = `has pulsado la tecla ${event.key}`;
};
const getKey2 = () => {
  printPtext.textContent = `esperando entrada de teclado...`;
};

document.addEventListener('keydown', getKey);
document.addEventListener('keyup', getKey2);

// - Crea un array con 5 palabras. Añade un h2 a tu HTML y ponle un id. Añade dos botones con el texto previus y next respectívamente. Haz que los botones cambien el texto del h2 con las palabras del array, cuando llegues a la última volverás a la primera si pulsas next y cuando estés en la primera podrás volver a la última dandole a previous.

const printSubtitle = document.getElementById('main-subtitle');
const buttonPrevious = document.getElementById('button-2');
const buttonNext = document.getElementById('button-3');

let counter = 0;

const array = ['saltar', 'correr', 'caminar', 'trotar', 'volar'];

const getPrevious = () => {
  if (counter === 0) {
    counter = 4;
  } else {
    counter--;
  }
  printSubtitle.textContent = array[counter];
  console.log(counter);
};

buttonPrevious.addEventListener('click', getPrevious);

const getNext = () => {
  if (counter === 4) {
    counter = 0;
  } else {
    counter++;
  }
  printSubtitle.textContent = array[counter];
  console.log(counter);
};

buttonNext.addEventListener('click', getNext);
