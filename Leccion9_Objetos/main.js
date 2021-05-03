// Casi todo en JavaScript es un objeto (salvo los valores primitivos)

// Un objeto  es una coleccion de clave-valor
// edad:26
// id: 0001



/*1. Crear un objeto (Constructor)*/

// let carro = new Object();
// console.log(typeof(carro));

/*2. Evita crear objetos de tipo String, Boolean, Number */

let frase = new String('Objetos');
console.log(typeof(frase));
frase2 = 'Objetos';
frase === frase2 ? console.log('son iguales') : console.log('no lo son'); 

/*3. Crear un objeto con Object Literal(valores declarados literalmente en el codigo)*/

const car = {
    nombre: 'Ford',
    modelo: 'Mondeo',
    color: 'blanco',
    potencia: 0,
    produccion: 2014,
    

    /* Setter*/
    set cambiaPotencia(nuevaPotencia){
        if (typeof nuevaPotencia === 'number'){
          this.potencia = nuevaPotencia;
        } else {
          console.log('Potencia es un numero');
        }
      },
    
    /*Getters */
    get getPotencia() {
    if(this.potencia){
        return this.potencia;
    }else {
        return 'No tenemos informacion.';
    }
    },

    /*Metodos*/

    calculaAntiguedad() {
       let year = new Date().getFullYear();
       return  year - this.produccion;
    }


};

/*4 Acceder las propiedades un objeto */

console.log(car.nombre);
console.log(car['nombre'])

/*5 Cambiar los valores de las propiedades*/

 car.nombre = 'Fiat';
 console.log(car.nombre);

 console.log(car.calculaAntiguedad());

 /*6 Usando el setter y el getter*/

//  car.cambiaPotencia = 500;
 console.log(car.getPotencia);

 /*7 Destructured assignment */
// let x = car.color;
// console.log(x);
//  let {color} = car;
//  console.log(color);


 /*8 Factory Functions */

 const estudianteFactory = (nombre, edad) => {
    return { 
      nombre: nombre,
      edad: edad, 
      imprimeNombre() {
        console.log(nombre);
      } 
    }
  };

  const estudiante_01 = estudianteFactory('Jose', 25);
  console.log(typeof(estudiante_01));
  estudiante_01.imprimeNombre();


