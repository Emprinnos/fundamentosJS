
/* Concepto #1 Truthy ---> Todos los valores son verdaderos al menos que se definan como falso ( excepto false, 0, "", null, undefined, y NaN */

// let x = 1;
// x = true;
// x = [];
// x ={};
// x = Infinity;
// x = 2n;
// x = NaN;
// x = 0;

/* Concepto #2 If else statement */

// if(x){
//     console.log('VERDADERO');
// }else{
//     console.log('FALSO');
// }

/* Concepto #3 Operador Ternario */
let edad = 16;
let trago = '';

// if(edad >=18){
//     trago = 'Cerveza';
// }else{
//     trago = 'Jugo de Manzana';
// }

// trago = (edad >=18) ? 'Cerveza' : 'Jugo de Manzana';
// console.log(trago);


/* Concepto #4 SWITCH*/

// let nivelDeSatisfaccion = 4;

// switch(nivelDeSatisfaccion){
//     case 1:
//         console.log('Muy Descontento');
//         break;
//     case 2:
//         console.log('No muy contento');
//         break;
//     case 3:
//         console.log('Contento');
//         break;
//     case 4:
//         console.log('Muy contento');
//         break;
//     default:
//         console.log('Muy descontento');
// }

/* Concepto #5 La expresion else if ...*/

const cat1A = 2500; //16-25 años, hombre
const cat1B = 2350; //16-25 años, mujer
const cat2A = 2000; // 26-39 años hombre
const cat2B = 1850; // 26-39 años mujer
const cat3A = 1500; // 40-85 años  hombre
const cat3B = 1250; // 40-85 pero menos de 86 años  mujer

const generaCuota = (genero, edad) => {
    
    //Declaramos las variables
    genero = document.getElementById('genero').value;
    edad = document.getElementById('edad').value;
    let msj = '';
    let precio = 0;

    //Chequeamos si se coloco el valor de la edad

    if(edad === ''){
        msj = 'Necesitamos su EDAD para generar una CUOTA';
    }

    //Generamos el mensaje para menores de 16 años

    else if(edad < 16){
        msj = 'Todavia no puede comprar seguro de auto';
    }
 

    //Generamos la cuota para mayores a 16 pero menores a 26;    
    
    else if((edad < 26) && (genero === 'hombre')){
        msj ='El precio de su poliza es: ';
        precio = cat1A;
    }else if((edad < 26) && (genero === 'mujer')){
        msj ='El precio de su poliza es: ';
        precio = cat1B;

    //Generamos la cuota para mayores de 25 pero menores a 40
    
    } else if((edad < 40) && (genero === 'hombre')){
        msj ='El precio de su poliza es: ';
        precio = cat2A;
    } else if((edad < 40) && (genero === 'mujer')){
        msj ='El precio de su poliza es: ';
        precio = cat2B;
    }
 
    //Generamos la cuota para mujeres y hombres entre 40 y 85 años
     else if(edad >=40 && edad <=85 && genero === 'hombre'){
         msj = 'El precio de su poliza es: ';
         precio = cat3A;
     }else if(edad >=40 && edad <=85 && genero === 'mujer'){
        msj = 'El precio de su poliza es: ';
        precio = cat3B;
    } 
  
    //Generamos el mensaje para el resto de los casos
    else {
        msj = 'Lo sentimos no tenemos poliza disponible';
    }
   
    
    //Declaramos la variable para tener acceso al div del mensaje

    const cuota = document.getElementById('cuota');

    //Mostramos el precio y el mensaje si es que el precio no es 0;
   
    if(precio !== 0){
        cuota.innerHTML = `
        <div>
            <span>${msj}</span>
            <span>${precio}</span>
        </div>
        `;
    } 
    //Mostramos solamente el mensaje cuando el precio es 0;
    else {
        cuota.innerHTML = `
        <div>
            <span>${msj}</span>
        </div>
        `;
    }
}

