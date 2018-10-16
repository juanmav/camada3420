const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const { findById } = require('./helpers');

app.use(bodyParser.json());

let lists = require('./mocklist');


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

app.delete('/lists/:id', function (req, res) {
    let id = req.params.id;

    let toDelete = lists.find( l => l.id == id);

    if (toDelete){
        lists = lists.filter( l => l.id != id);
        res.status(200).json({message : 'deleted'});
    } else {
        res.status(404).json({ message: 'not fouund!'});
    }
});

app.get('/lists/:id/tasks', function(req, res){
    let id = req.params.id;
    let list = findById(lists,id);
    res.json(list.tasks);
});

app.post('/lists/:listId/tasks', function (req, res) {
    let listId = req.params.listId;
    let newTask = req.body;

    console.log(listId);
    console.log(newTask);

    let list = findById(lists,listId);

    newTask.id = list.tasks.length + 1;
    newTask.done = false;

    list.tasks.push(newTask);

    res.status(200).json(newTask);

});

// Mini desafio
// Task Post, mejorar la validacion si no esta.
// Task get listo
// task get por id
// task put modificar la task (description, done)
// task delete

app.listen(8080, () => { console.log('Levanto en 8080!')});

