// import { muestraFrase as } from './funciones.js';

import funciones from './funciones.js';

const { muestraFrase, cambiaColor } = funciones;

const button = document.querySelector('.btn');
const contenedor = document.querySelector('#contenedor');

button.addEventListener('click', () => {
  muestraFrase(contenedor);
  cambiaColor(button);
  //   x(contenedor);
});
