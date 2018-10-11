const rp = require('request-promise');

let responseG;

rp('https://swapi.co/api/films/?format=json')
    .then(response => {
        console.log(response);
        responseG = response;
        // find pelicula con algun titulo... es la 1
        return rp('https://swapi.co/api/films/1?format=json')
    })
    .then(response2 => {
        // find del personaje que esta primero en la lista de personas
        // y quiero saber en que otras peliculas esta.
        let add = sumar(3, 5);
        return rp('https://swapi.co/api/characters/10?format=json')
    })
    .then( response3 => {
        console.log(resonse3.data.charater.films);

        // quiero comprar response con response3.
        // evaluas response3 contra responseG (response)

    });


function sumar(a,b){
    return a + b;
}