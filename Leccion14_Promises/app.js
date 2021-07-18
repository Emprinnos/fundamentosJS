/*********************************/
/*CONCEPTO#1 ==> CODIGO SINCRONO*/
/********************************/

//Tradicionalmente, JavaScript es single-threaded (de un solo hilo)
//thread(hilo ) --> proceso que la aplicacion puede usar para completar tareas)
//En JavaScript sincrono, las tareas se ejecutan en secuencia (1, 2, 3, 4, etc.)

//Ejemplo de JavaScript sincrono

// let numeroFinal = 0;
// for (let i = 0; i < 500000000; i++) {
//   numeroFinal += 5;
// }

// console.log(numeroFinal);
// document.body.style.background = 'red';
// console.log('ultima tarea');

/*********************************/
/*CONCEPTO#2 ==> CODIGO ASINCRONO*/
/*********************************/

//JavaScript asincrono nos permite ejecutar tareas simultaneamente
//Hay tres tecnicas para implementar JavaScript asincrono:

//a)async callbacks
//b)promises
//c)async await

/***************************/
/*CONCEPTO#3 ==> CALLBACKS*/
/**************************/

//callbacks son funciones que se pasan como parametro adentro de otras funciones
//y se invocan adentro de la funcion principal para completar alguna tarea

//A) synchronous callbacks (se ejecutan inmediatamente y son bloqueadoras)

// const generaNumero = () => {
//   return Math.floor(Math.random() * 10);
// };

// const imprimeNumero = (callback) => {
//   let numero = callback();
//   console.log(numero);
// };

// imprimeNumero(generaNumero);

//B) asynchronous callbacks (se ejecutan cuando algo pasa)

// const bajaVideo = (url, callback) => {
//   console.log(`Bajando video de ... ${url} `);
//   setTimeout(() => {
//     console.log(`Video de ${url} descargado`);
//     callback(url);
//   }, 0);
// };

// const procesaVideo = (url) => {
//   console.log(`Procesando video de ${url}`);
// };

// let url = 'https://youtu.be/gisEHxRQIto';
// bajaVideo(url);
// procesaVideo(url);
// bajaVideo(url, procesaVideo);

/**************************/
/*CONCEPTO#4 ==> PROMISES*/
/*************************/

// 4.1 Promises son Objetos que representan el resultado eventual de una operacion asincrona

// El objeto PROMISE puede tener 3 estados:
// a) PENDING (pendiente) --> la promesa todavia no se cumplio
// b) RESOLVED (resuelta) --> la promesa se cumplio
// c) REJECTED (rechazada) ---> la promesa no se cumplio

//4.2 Construccion de una PROMESA
// let teHasPortadoBien = false;

// const siMePortoBien = new Promise((resolve, reject) => {
//   if (teHasPortadoBien) {
//     const telefono = {
//       modelo: 'iPhone12',
//       capacidad: '128GB',
//       color: 'rojo',
//     };
//     resolve(telefono);
//   } else {
//     reject('te has portado mal');
//   }
// });
//4.3 Uso (consumo) de PROMISES

//Antes de usar la promesa hay que definir dos funciones callback (handlers)
// success handler --> implementa la logica si es que la promesa se cumplio
// failure handler --> implementa la logica si es que la promesa no se cumplio

// const promesaCumplida = (resolvedValue) => {
//   console.log(`Te regalo tu nuevo ${resolvedValue.modelo}`);
// };
// const promesaRota = (rejectedValue) => {
//   console.log(`No te compro nada porque ${rejectedValue}`);
// };

// siMePortoBien.then(promesaCumplida, promesaRota);

// const pideRegalo = () => {
//   siMePortoBien.then(promesaCumplida).catch(promesaRota);
// };

// pideRegalo();
//4.4  CHAINING DE PROMISES

// const chequeaComportamiento = (comportamiento) => {
//   return new Promise((resolve, reject) => {
//     if (comportamiento) {
//       const telefono = {
//         modelo: 'iPhone12',
//         capacidad: '128GB',
//         color: 'rojo',
//       };
//       resolve(telefono);
//     } else {
//       reject('te has portado mal');
//     }
//   });
// };

// const grabaVideo = (telefono) => {
//   const mensaje = `Grabo video para TicToc con mi ${telefono.modelo} nuevo`;
//   return Promise.resolve(mensaje);
// };

// let comportamiento = true;
// chequeaComportamiento(comportamiento)
//   .then((resolvedValue) => {
//     return grabaVideo(resolvedValue);
//   })
//   .then((resolvedValue) => {
//     console.log(resolvedValue);
//   })
//   .catch((errorMensaje) => {
//     console.log(errorMensaje);
//   });
//4.5  PROMISE ALL
//A. Promise.all() toma como argumento un array de promesas y retorna UNA SOLA PROMESA
//B. si hay una promesa que no se cumple, Promise.all se rechaza con la razon especificada
//C. si todas las promesas se cumplen, Promise.all se resuelve con
//   un array que contiene los valores especificados en resolve de cada promesa
//D. Promise.all() se usa cuando el orden de las promesas no importa

const chequeaComportamiento = (comportamiento) => {
  return new Promise((resolve, reject) => {
    if (comportamiento) {
      const telefono = {
        modelo: 'iPhone12',
        capacidad: '128GB',
        color: 'rojo',
      };
      resolve(telefono);
    } else {
      reject('te has portado mal');
    }
  });
};

const chequeaCalificacion = (calificacion) => {
  return new Promise((resolve, reject) => {
    if (calificacion > 85) {
      resolve('Buen trabajo');
    } else {
      reject('Tienes que estudiar mejor');
    }
  });
};

// const mePorteBien = chequeaComportamiento(true);
// const estudieBien = chequeaCalificacion(90);
// const promesas = [mePorteBien, estudieBien];

// Promise.all(promesas)
//   .then((values) => {
//     console.log(values[0].modelo);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

/****************************/
/*CONCEPTO#5 ==> async await*/
/****************************/

//async await es azucar sintactico para trabajar mas facil con promises

async function pideTelefonoNuevo(comportamiento, calificacion) {
  try {
    const promesas = await Promise.all([
      chequeaComportamiento(comportamiento),
      chequeaCalificacion(calificacion),
    ]);
    console.log(promesas[0].modelo);
  } catch (error) {
    console.log(error);
  }
}

pideTelefonoNuevo(true, 75);
