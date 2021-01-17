


/*Tipo de Datos en JavaScript*/

/*1 number -(2^53 − 1) and (2^53 − 1)*/

let velocidad = 98.5;
console.log(typeof velocidad);

//2 string

let userName = 'Sergio';
console.log(typeof userName);

//3 boolean

let isActive = true;
console.log(typeof isActive);

//undefined, una variable cuyo valor aun no ha sido definido

let nombre;
console.log(typeof nombre);

//null, el valor de nada 

let edad = null;
console.log(typeof edad);

//BigInt (numeros muy grandes)

let z = 3n ** 55n;
console.log(typeof z);


//Symbol--representa un identificador unico

let clave = Symbol('Sym');
console.log(typeof clave);

//4 array (matrices)

let carros = ['Ford Mustang', 500, true];
console.log(typeof (carros));

//5 object
let carro = { modelo: 'Ford Mustang', potencia: 300, velocidad: 200 };
console.log(typeof carro);




/*Copiado por referencia*/

let x = [2, 4];

let y = x;

y.push(5);

console.log(x);
console.log(y);

