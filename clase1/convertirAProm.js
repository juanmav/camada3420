const request = require('request');

function request_promise (url){
    return new Promise(function (resolve, reject) {
        request(url, function(err, data){
            if(err){
                reject(err)
            } else {
                resolve(data);
            }
        })
    });
}

request_promise('https://swapi.co/api/films/?format=json')
    .then( r => console.log(r))
    .catch( r => console.log(r + ' por error'));