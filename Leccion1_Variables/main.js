// A. Uso de var let y const

// 1. var y let se pueden declarar sin iniciar;
// var gato;
// let carro;
// console.log(gato);
// console.log(carro);




// 2. var se puede re declarar

// var gato = 'Felix';
// console.log(gato);
// var gato = 'Bobby';
// console.log(gato);

// 3. let no se puede declarar de nuevo;

let perro = 'Tobby';
// let perro = 'Bobby';
console.log(perro);

perro = 'Bobby';
console.log(perro);

// 4 const no se puede declarar sin iniciar


// const direccion;
const direccion = 'avenida Paseos';
console.log(direccion);

//5 const no se puede reasignar

// direccion = 'avenida Principal';
// console.log(direccion);

//6 scope (alcance)


// var es visible en la funcion donde se declaro o global
//let y const son visibles en el bloque donde se declararon o globales




// B. Reglas para nombrar Variables

//1. No se puede usar palabras reservadas (function, var, for, while, etc.)

//2. No pueden empezar con un dígito 
// let 2x = 6;

//3. Pueden empezar con una letra, guión bajo o $
let $car = 'ford mustang';
console.log($car);

//4. Para nombres complejos se usa notación de camello: 
// let userName = 'Juan';



//C Tipo de Datos en JavaScript



//1 number
let velocidad = 98.5;
console.log(typeof velocidad);

//2 string

let userName = 'Sergio';
console.log(typeof userName);

//3 boolean

let isActive = true;
console.log(typeof isActive);

//4 array (matrices)
let carros = ['Ford Mustang', 'Toyota Corolla', 'Honda Accord'];
console.log(typeof (carros));

//5 object
let carro = { modelo: 'Ford Mustang', potencia: 300, velocidad: 200 };
console.log(typeof carro);

//undefined
let nombre;
console.log(typeof nombre);

//null 

let edad = null;
console.log(typeof edad);

const array = [1, 2, 3, 4, 5];
    
const sum = array.reduce(function(a, b){
     return a + b;
 }, 0);  
 console.log(sum); 

