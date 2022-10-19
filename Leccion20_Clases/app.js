/*#1 El Concepto de las Clases*/

/*En JavaScript Las clases son una plantilla general para crear objetos.*/

let estudiante_01 = {
    name: 'Sergio',
    nivel: 2,
    carrera: 'programacion',
}


/*En Lugar de crear miles de objetos que representen diferentes estudiantes, uno podria definir una clase generica Estudiante */

/* Las clases son una HERRAMIENTA para crear objetos similares*/


/*#2 Declaracion de una clase */

class Estudiante {
    #llave;
    constructor(nombre, carrera) {
        this._nombre = nombre;
        this._carrera = carrera;
        this.#llave = 1230001;
    }
      generaID(){
        return Math.floor(Math.random()*10*this.#llave);
      }

    get nombre(){
        return this._nombre;
    }

    set nombre(valor) {
        this._nombre = valor;
    }
    
    
}

/*#3 Instanciar una clase*/

const estudiante01 = new Estudiante ('Sergio',  'programacion');
// console.log(estudiante01.generaID());
console.log(estudiante01.nombre);
console.log(estudiante01.nombre = 'Miguel');
const estudiante02 = new Estudiante ('Adrian', 'administracion de sistemas');




/*#4 Invocar los Metodos*/
// estudiante_01.name = 'Miguel';

// console.log(estudiante01.generaID());


/*#5 Herencia*/

/*Se puede crear una clase generica (superclass)*/
/* Y despues crear clases mas especificas(subclases)
que van a heredar las propiedades y los metodos*/

class EstudianteParcial extends Estudiante {
    constructor(nombre, carrera, tiempo) {
        super(nombre, carrera);
        this._tiempo = tiempo;
    }

    get tiempo (){
        return this._tiempo;
    }

 
    set tiempo (valor) {
         this._tiempo = valor;
    }
}

const estudiante03 = new EstudianteParcial('Miguel', 'medicina', 'parcial');


console.table(estudiante03);

/*Metodos Estaticos */

/*Metodos no disponibles en instancias de clases
se invocan directamente desde la clase principal */
console.log(estudiante01.generaID());


// estudiante_03.tiempo = 'parcial';
// console.log(estudiante_03.tiempo)





 






