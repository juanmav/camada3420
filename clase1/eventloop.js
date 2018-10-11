const request = require('request');

// Event Loop y Callback Hell!

console.log('1');

request('https://swapi.co/api/films/?format=json', function (err, data) {
    console.log('2');
    // find pelicula con algun titulo... es la 1
    request('https://swapi.co/api/films/1?format=json', function (err, data) {
        // find del personaje que esta primero en la lista de personas
        // y quiero saber en que otras peliculas esta.
        request('https://swapi.co/api/characters/10?format=json', function (err, data) {
            console.log(data.charater.films);
        });
    });
});