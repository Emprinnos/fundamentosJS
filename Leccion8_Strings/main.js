//Variable para acceder el elemento input
const newPassword = document.getElementById('newPassword');
newPassword.addEventListener('keyup', checkPassword);
  
// Helper
function toggleClass(element, condition){
  if(condition){
    element.classList.add('valid');
  }else {
    element.classList.remove('valid');
    element.classList.add('invalid');
  }
}


//Funcion Principal
function checkPassword(){
// Condicion#1 La contraseña tiene 6 caracteres

const element1 = document.getElementById('length');
let isLengthValid = false;
if(newPassword.value.length > 5){
  isLengthValid = true;
}
toggleClass(element1, isLengthValid);

// Condicion#2 La contraseña tiene al menos un digito

const element2 = document.getElementById('digit');
let hasOneDigit = false;
let digitos = /[0-9]/;

if(newPassword.value.match(digitos)){
  hasOneDigit = true;
}
toggleClass(element2, hasOneDigit);

 
// Condicion#3 La primera letra es mayuscula
const element3 = document.getElementById('uppercase');
let isUpperCase = false;
let letras = /[A-Za-z]/;

if(newPassword.value.match(letras) && (newPassword.value.charAt(0)=== newPassword.value.charAt(0).toUpperCase())){
  isUpperCase = true;
}

toggleClass(element3, isUpperCase);


  // Condicion#4 Los primeros y los ultimos tres caracteres no se repiten
   const element4 = document.getElementById('pattern');
   let isPatternValid = false;

   if(newPassword.value.substr(0, 3) !== newPassword.value.substr(newPassword.value.length - 3)){
     isPatternValid = true;
   }

   toggleClass(element4, isPatternValid);


// Condicion#5 La contraseña no tiene espacios
const element5 = document.getElementById('space');
let hasNoSpace = false;

if(newPassword.value.replace(' ', '') === newPassword.value) {
  hasNoSpace = true;
}

toggleClass(element5, hasNoSpace);
 

// Condicion#6 La contraseña  tiene un caracter especial

const element6 = document.getElementById('character');
let hasSpecialCharacter = false;
let caracteres = /[!?@#&]/;

if(newPassword.value.match(caracteres)){
  hasSpecialCharacter = true;
}
toggleClass(element6, hasSpecialCharacter);

}