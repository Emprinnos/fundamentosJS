

const btn = document.querySelector('#btn');
const formulario = document.querySelector('#formulario');
const respuesta = document.querySelector('#respuesta');

/*Funcion para sacar los datos del Formulario con FormData (ve la leccion anterior)*/

const getData = () => {
  const datos = new FormData(formulario);
  const datosProcesados = Object.fromEntries(datos.entries());
  formulario.reset();
  return datosProcesados;
}



/*Funcion para colocar los datos en el Servidor */

const postData = async () => {
 
  /*Crea un objeto con la informacion del formulario*/
   const newUser = getData();

   try{
    const response = await fetch('http://localhost:3000/users', {
    /*especifica el metodo que se va a usar*/
    method: 'POST',
    /*especifica el tipo de informacion (JSON)*/
    headers: {'Content-Type': 'application/json'},
    /*coloca la informacion en el formato JSON */
    body: JSON.stringify(newUser)
    });
    

    if(response.ok){
        const jsonResponse = await response.json();

        /* Codigo a ejecutarse con la respuesta*/

        const {email, nombre, telefono} = jsonResponse;

        respuesta.innerHTML = 
        `<ul> 
           ¡Exito! Se guardó la siguiente información:
          <li>${email}</li> 
          <li>${nombre}</li> 
          <li>${telefono}</li>
        </ul>`
       
    }
   
   }catch(error){
     console.log(error);
   }
   
}




btn.addEventListener('click', (event) => {
  event.preventDefault();
  postData();
  
})