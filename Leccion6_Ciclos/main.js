/*CICLOS IMPLEMENTADOS CON FOR */
// for (let i = 1; i <=4; i++) {
//     console.log(`iteracion ${i}`);
// }
// console.log('Fin del ciclo');


/*CICLOS AL REVES*/
// for (let i = 4; i >= 1; i--) {
//     console.log(`iteracion ${i}`);
// }
// console.log('Fin del ciclo');


/*CICLOS ANIDADOS*/
// for (let i = 1; i <= 4; i++) {
//     console.log(`Empieza iteracion ${i}`);
//     for (let j = 0; j < 4; j++) {
//         console.log(j);
//     }
// }
// console.log('Fin del ciclo');

/* WHILE*/

let x = 1;
while (x <= 4) {
    console.log(`Iteracion ${x}`);
    x++;
}
console.log('Fin de While');


/*DO WHILE*/

let y = 5;

do {
    console.log(`Iteracion ${y}`);
    y++;

} while (y <= 4);

const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

// modifier = (array, element) => {
//     let newArray = [...array];
//     newArray.push(element);
//     return newArray;
// }


// console.log('la nueva');
// console.log(modifier(artists, "xxx"));

// console.log('vieja');
// console.log(artists);

let newArray = [... artists];
console.log(newArray);
newArray.push(5);
console.log(newArray);
console.log(artists);