/* ARRAYS*/

const ejemploArray = [25, 'Ford Mustang', true, [1, 0]];

/*CAMBIAR ARRAYS*/

ejemploArray[1] = 'Charger';
console.log(ejemploArray);

// ejemploArray = [];


/* ACCEDER ELEMENTOS*/

// let x = ejemploArray[3][0];
// console.log(x);

/*RECORRER LOS ARRAYS*/

const carros = ['honda accord', 'ford mustang', 'toyota corolla', 'fiat 500'];


/* METODO #1 */

for (let i = 0; i < carros.length; i++) {
    console.log(carros[i]);
}

/*METODO 2*/

// for (let carro of carros) {
//     console.log(carro);
// }

/*METODO 3 forEach*/

// let cambiaLetra = (string) => {
//     let letraModificada = string.toUpperCase();
//     console.log (letraModificada);
// }

// carros.forEach(cambiaLetra);

carros.forEach ((carro) => {
     console.log(carro.toUpperCase());    
});




/*METODOS PRINCIPALES*/

/*pop() saca el ultimo elemento*/

console.log(carros.pop());

/* shift() saca el primer elemento*/
console.log(carros.shift());

/* push() agrega un elemento al final*/

carros.push('ford explorer');
console.log(carros);

/*unshift() agrega un elemento al principio de la matriz*/
carros.unshift('camaro');
console.log(carros);


/*splice() borra o agrega un elemento de acuerdo con el indice especificado*/

carros.splice(0, 0, 'ford focus');
console.log(carros);

