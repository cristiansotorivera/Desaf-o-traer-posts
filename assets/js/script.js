
// Definición de una función asíncrona llamada getPosts
const getPosts = async () => {
    
    // URL de la API de la cual se obtendrán los posts
    const url = 'https://jsonplaceholder.typicode.com/posts';

    // Bloque try/catch para manejar posibles errores en la ejecución del código
    try {
        // Realizar una solicitud GET a la URL utilizando el método fetch y esperar la respuesta
        const response = await fetch(url);

        // Convertir la respuesta a formato JSON y esperar el resultado
        const data = await response.json();

        // Seleccionar el elemento HTML con el id "post-data" y su lista desordenada (<ul>)
        let postList = document.querySelector('#post-data > ul');

        // Iterar sobre cada elemento del arreglo "data"
        data.forEach((element) => {
            // Agregar un nuevo elemento de lista (<li>) a la lista desordenada con información de cada post
            postList.innerHTML += `<li>
                                    <p><strong>${element.title}</strong></p> 
                                    <p>${element.body}</p> 
                                    </br> 
                              </li>`;
        });
    } 
    // Capturar cualquier error que pueda ocurrir durante la ejecución del código
    catch(err) {
        console.log(err); // Mostrar el error en la consola del navegador
    }
}
