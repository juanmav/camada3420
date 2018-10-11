const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const lists = require('./mocklist');


app.get('/lists', function(req, res){
    res.json(lists);
});

app.get('/lists/:id', function(req, res){
    let id = req.params.id;
    console.log(id);
    let list = lists.find( item => item.id == id );

    if(list){
        res.json(list);
    } else {
        res.status(404).json({ message: 'not found!'})
    }
});

app.post('/lists', function (req, res) {
    let newList = req.body;

    newList.id = lists.length + 1;
    newList.tasks = [];

    lists.push(newList);

    res.status(201).json(newList);
});

app.delete('/list/:id', function (req, res) {
    let id = req.params.id;



});


app.listen(8080, () => { console.log('Levanto en 8080!')});

