/* #1 Cambios en el Estilo*/

/* 1a) El atributo style*/

// const seccion = document.querySelector('#principal');
// seccion.style.border = '3px solid red';
// seccion.style.backgroundColor = '#f3f3f3';

/* 2b) el metodo setProperty()*/

// const primerDiv = seccion.firstElementChild;
// primerDiv.style.setProperty('background-color', 'red'); 

/* 3c) La propiedad classList*/

// primerDiv.classList.add('activado');
// primerDiv.classList.remove('activado');

// const toggleClass = () => {
//   primerDiv.classList.toggle('activado');
// }

/* #2 Cambios en el marcado*/

/* 2a) La Propiedad innerText*/

// primerDiv.innerText = 'cambio de Texto';


/* 2b) La propiedad innerHTML*/

// const valor = 251;

// primerDiv.innerHTML = 
// `<ul class="lista">
// <li>Precio: ${valor}</li>
// <li>Cantitad:</li>
// <li>Monto Total:</li>
// </ul>`;

/* #3 createElement(), appendChild(), removeChild() */

// const ultimoDiv = document.createElement('div');
 
// ultimoDiv.id = 'caja'; 
 
// ultimoDiv.innerHTML = 'Ultimo Div';
 
// seccion.appendChild(ultimoDiv);

// seccion.removeChild(ultimoDiv);