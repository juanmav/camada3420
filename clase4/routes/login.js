const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const secret = '56asiyuhdjkbasdhtiy8ou192e';

router.post('/', function (req, res) {
    let data = req.body; // { username: 'nana', password: '12234'}
    User
        .findOne(
            {
                username: data.username,
                password: data.password
            }
        )
        .then(user => {
            if( user ){
                let toSign = { username: user.username, email: user.email};
                let token = jwt.sign(toSign, secret);
                res.status(200).json(token);
            } else {
                res.status(401).json({ message: 'Credenciales invalidas'});
            }
        })
});

module.exports = router;