/* Funcion -->  instrucciones que realizan una tarea o calculan un valor*/
 
 /*Declaracion de una funcion sin return*/
 
 function imprimeMensaje() {
    console.log('Hola soy una funcion!');
}

imprimeMensaje();

/*Declaracion de una funcion con return*/

function calculaPromedioDeTresNumeros(num1, num2, num3){
    let promedio = (num1 + num2 +num3)/3;
    //  return 'El promedio es: ' + promedio + ' dolares';
    return `El promedio es: ${promedio} dolares`;
   }
   console.log(calculaPromedioDeTresNumeros(35, 10, 9));
   


   /* Asignar la funcion a una variable */
const calcula = calculaPromedioDeTresNumeros;
console.log(calcula(45, 35, 62));
   
   /*Expresion de una funcion */
   // const calculaArea = function(ancho, alto) {
   //     const area = ancho * alto;
   //     return area;
   // }

   // console.log(calculaArea(25, 10));

       
   /*Funciones de tipo Flecha*/
       const calculaArea = (ancho, alto) =>{
           const area = ancho * alto;
           return area;
       }

       console.log(calculaArea(25, 10));
       
   /*Funciones flecha con un solo parametro y sola expresion */
       
       const multiplicaNumero = x => x ** 3;
       console.log(multiplicaNumero(10));
       
   /*Funcion como Parametro */
   
   const avisaUsuario = (fun, x) =>{
       alert(fun(x));
   }
   
   const saludaUsuario = (nombre = 'Amigo') => {
       return `Hola ${nombre}`;
   }
   
   avisaUsuario(saludaUsuario, 'Sergio');

   /*El concepto de hoisting


   Al ejecutar un fragmento de código, el motor de JavaScript crea el contexto de ejecución global.
   El contexto tiene 2 fases: creación y ejecución.

   Durante la fase de creación, el motor de JavaScript mueve las declaraciones de variable y función a la parte superior de su contexto (scope).

   En JavaScript  el hoisting funciona solamente con las declaraciones*/

