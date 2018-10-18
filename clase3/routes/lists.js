const express = require('express');
const router = express.Router();
const { findById } = require('../helpers');
let lists = require('../data/mocklist');

const taskRouter = require('./tasks');

router.get('/', function(req, res){

    let query = req.query;

    if (query.name){
        let filtered = lists.filter( l => l.name.includes(query.name));
        res.json(filtered);
    } else{
        res.json(lists);
    }
});

router.get('/:id', function(req, res){
    let id = req.params.id;
    console.log(id);
    let list = lists.find( item => item.id == id );

    if(list){
        res.json(list);
    } else {
        res.status(404).json({ message: 'not found!'})
    }
});

router.post('/', function (req, res) {
    let newList = req.body;

    newList.id = lists.length + 1;
    newList.tasks = [];

    lists.push(newList);

    res.status(201).json(newList);
});

router.delete('/:id', function (req, res) {
    let id = req.params.id;

    let toDelete = lists.find( l => l.id == id);

    if (toDelete){
        lists = lists.filter( l => l.id != id);
        res.status(200).json({message : 'deleted'});
    } else {
        res.status(404).json({ message: 'not fouund!'});
    }
});

router.use('/:listId/tasks', taskRouter);

module.exports = router;

