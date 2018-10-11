const express = require('express');

const app = express();

app.get('/', function(req, res){
    res.json({ message: 'hola'});
});

app.get('/films', function(req, res){
    res.json({ message: 'listado'});
});

app.post('/', function (req, res) {
    res.json({message: 'chau'})
});

app.listen(8080);