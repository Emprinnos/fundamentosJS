
const actualizador = setInterval(function(){

//Definimos el tiempo de inicio en milisegundos

const inicioClase = new Date('March 1, 2021 10:00:00').getTime();
console.log(inicioClase);

//Definimos el tiempo de ahora en milisegundos

const tiempoActual = new Date().getTime();
console.log(tiempoActual);

//Calculamos la diferencia entre el inicio y el tiempo actual;

let tiempoRestante = inicioClase - tiempoActual;
console.log(tiempoRestante);
//Convertimos los milisegundos en segundos 1s = 1000 ms;

tiempoRestante /=1000;
console.log(tiempoRestante);
//Calculamos los dias restantes

const dias = Math.floor(tiempoRestante/(60*60*24));
console.log(dias);

//Calculamos las horas restantes

const horas = Math.floor((tiempoRestante%(60*60*24))/(60*60));
console.log(horas);


//Calculamos los minutos restantes

const minutos = Math.floor((tiempoRestante%(60*60))/(60));
console.log(minutos);
//Calculamos los segundos restantes

const segundos = Math.floor(tiempoRestante%(60));
console.log(segundos);

const contador = document.getElementById('contador');


//Agregamos los elementos HTML con el valor del tiempo al contenedor con el id contador

contador.innerHTML = `
<div>
    <span>${dias}</span>
    <span class="texto">Dias</span>
</div> 
<div>
    <span>${horas}</span>
    <span class="texto">Horas</span>
</div>
<div>
    <span>${minutos}</span>
    <span class="texto">Minutos</span>
</div>
<div>
    <span>${segundos}</span>
    <span class="texto">Segundos</span>
</div>
`;
}, 1000);


console.log('test');