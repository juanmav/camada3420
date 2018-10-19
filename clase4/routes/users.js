const express = require('express');
const router = express.Router();

const User = require('../models/User');

router.get('/', function(req, res) {
    User
        .find({})
        .then(users => res.json (users));
});

router.get('/:userId', function(req, res){
    let userId = req.params.userId;

    User.findById(userId)
        .then(user => {
            if (user){
                res.json (user)
            } else {
                res.status(404).json({ message: 'not found!'})
            }
        });
});

router.post('/', function (req, res) {
    let data = req.body;
    let user = new User(data);

    user
        .save()
        .then(result => res.status(201).json(result))
        .catch(err => res.status(503).json(err));
});

router.put('/:userId', function (req, res) {
    let data = req.body;
    let userId = req.params.userId;


    User.findByIdAndUpdate(userId, data)
        .then(result => res.status(202).json(result));

    /*User
        .findById(userId)
        .then( user => {
            user.name = 'harcoder!';

            return user.save();
        })
        .then(resultSave => {
            res.status(202).json(resultSave);
        })*/

});

router.delete('/:userId', function (req, res) {
    let userId = req.params.userId;

    User.findByIdAndDelete(userId)
        .then( result => res.status(204).json({ messsage: 'deleted!'}))
        .catch( err => res.status(503).json(err));
});

module.exports = router;
