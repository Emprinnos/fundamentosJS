const frases = [
  'Donde una puerta se cierra, otra se abre',
  'El arte de vencer se aprende en las derrotas',
  'Intenta y falla, pero nunca falles en intentarlo',
  'La vida no es un problema a ser resuelto, sino una realidad a experimentar',
  'Si te caíste ayer, levántate hoy',
  'La forma más efectiva de hacerlo, es hacerlo',
];

const muestraFrase = (elementoDom) => {
  let frase = frases[Math.floor(Math.random() * 6)];
  elementoDom.innerHTML = `<p> "${frase}" </p>`;
};

const cambiaColor = (elementoDom) => {
  elementoDom.style.background = '#766df4';
};

// export { muestraFrase };

/*Export as default */

/*
Cada módulo también tiene la opción de exportar un solo valor para representar el módulo completo 
llamado "DEFAULT EXPORT". 
un objeto que contiene el set completo de funciones, datos del módulo. */

const recursos = {
  muestraFrase,
  cambiaColor,
};

// export { recursos as default };
export default recursos;
