const carros = [
  {
    modelo: 'Ford Mustang',
    millaje: 25000,
    motor: 5.0,
    produccion: 2017,
    precio: 25000,
  },

  { modelo: 'Honda Accord', millaje: 10000, produccion: 2021, precio: 20000 },

  { modelo: 'Mini Cooper', millaje: 15000, produccion: 2005, precio: 5000 },
];

/* 1. Metodo Map*/

/*El metodo ejecuta una funcion para cada elemento del array creando un nuevo array con los resultados*/

// const modelos = carros.map((carro) => carro.modelo);
// console.log(modelos);

// const preciosEuro = carros.map((carro) => carro.precio * 0.85);
// console.log(preciosEuro);

//no se debe usar map en los siguientes casos:

//A.  no hace falta crear un nuevo array
//B. la callback no retorna nada

/* 2. Metodo Filter*/

//El metodo filter al igual que map
//crea un nuevo array colocando los elementos
//que pasan algun criterio

// const carrosNuevos = carros.filter(
//   (carro) => carro.produccion > 2010 && carro.millaje < 30000
// );

// console.log(carrosNuevos);

/* 3. Metodo Reduce*/

/*El metodo reduce ejecuta una funcion(reducer)
sobre cada elemento del array
devolviendo un solo valor*/

const num = [0, 1, 2, 3, 4];

// const suma = num.reduce((total, valorCorriente) => {
//   console.log(`Total: ${total}`);
//   console.log(`valorCorriente: ${valorCorriente}`);
//   return total + valorCorriente;
// }, 0);

// console.log(suma);

const funcionReductora = (millajeInicial, valorCorriente) =>
  millajeInicial + valorCorriente.millaje;

let x = carros.reduce(funcionReductora, 0);
console.log(x);
