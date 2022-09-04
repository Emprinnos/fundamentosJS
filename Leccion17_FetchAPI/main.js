
// Informacion del REST COUNTRIES API

const url = 'https://restcountries.com/v2/name/';


//Variables para seleccionar los elementos de la pagina

const busqueda = document.querySelector('#input');
const envio = document.querySelector('#submit');
const respuesta = document.querySelector('#respuesta');



//Funcion para mostrar el resultado

const muestraResultados = (res) => {    
const capital = res[0].capital;
respuesta.innerHTML = `<p>${capital}</p>`;

}


//Funcion para async GET Request

const recibeInfo = async () => {

    const buscaPais = busqueda.value;
    const endpoint = `${url}${buscaPais}`;

    try {
        const response = await fetch(endpoint, {cache: 'no-cache'});
        if(response.ok){
            const jsonResponse = await response.json();

            //funcion para mostrar la informacion
            muestraResultados(jsonResponse);
        }

    } catch (error) {
        console.log(error);
    }
}

envio.addEventListener('click', recibeInfo);