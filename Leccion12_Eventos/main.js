/*EVENTOS EN JAVASCRIPT*/

/* Variables*/
const carro = document.querySelector('.carro');
const boton = document.querySelector('.boton');

/*handler Functions */

const achicar = () => {
  carro.style.transform = 'scale(0.6)';
};

const agrandar = () => {
  carro.style.transform = 'scale(1.2)';
};

const correr = () => {
  carro.style.left = '700px';
  achicar();
};

const retroceder = () => {
  carro.style.left = '0px';
  agrandar();
};
/* Agregar Eventos directamente al Elemento*/

// boton.onclick = achicar;
// carro.onmouseenter = achicar;
// carro.onmouseleave = agrandar;
/*metodo addEventListener*/

// boton.addEventListener("click", () => {
//   carro.style.left = "700px";
// });
// boton.addEventListener("mousedown", correr);
// boton.addEventListener("mouseup", retroceder);

document.addEventListener('keydown', correr);
document.addEventListener('keyup', retroceder);

/*Event Target (Todos los eventos en javaScript son objetos de tipo EVENT)*/

const cambiaColor = (event) => {
  event.target.style.backgroundColor = '#3f3f3f';
};

const seccion = document.querySelector('section');
seccion.addEventListener('mouseenter', cambiaColor);

seccion.removeEventListener('mousenter', cambiaColor);
