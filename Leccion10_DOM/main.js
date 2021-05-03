
function cambiaColor(element){
  element.style.backgroundColor = 'red';
}


// #1 Metodo getElementById

// const seccion = document.getElementById('principal');
// cambiaColor(seccion);


// #2 Metodo getElementByClassName

// const cajas = Array.from(document.getElementsByClassName('caja'));
// console.log(cajas);
// cajas.forEach(cambiaColor);


// #3 Metodo QuerySelectorAll
// const  cajas = document.querySelectorAll(' .caja');
// console.log(cajas);
// cajas.forEach(cambiaColor);


// #4 Metodo QuerySelector
const caja = document.querySelector('#body .titulo');
// console.log(caja);
cambiaColor(caja);

//Uso de parentElement

// let elementoBody = caja.parentElement.parentElement;
// cambiaColor(elementoBody);

//Uso del metodo closest()

// let seccion = caja.closest('#body');
// cambiaColor(seccion);

