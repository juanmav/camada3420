const express = require('express');
const router = express.Router({ mergeParams: true });
const { findById } = require('../helpers');
let lists = require('../data/mocklist');

router.get('/', function(req, res){
    let id = req.params.listId;
    let list = findById(lists,id);
    res.json(list.tasks);
});

router.post('/', function (req, res) {
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




module.exports = router;