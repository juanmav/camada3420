const test = require('tape');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/camada3420');
const User = require('../models/user');

test('Creo un usuario', function (t) {

    let data = {
        "username": "juanctio",
        "email": "jjjjj@aaa.com",
        "password": "12345a",
        "age": 20
    };

    let user = new User(data);

    t.ok(user);

    user
        .save()
        .then( result => {
            t.ok(result);
            t.end();
        })
        .catch(err => t.fail(err))
});


test('No le paso el username y falla correctamente', function (t) {
    let data = {
        "email": "jjjjj@aaa.com",
        "password": "12345a",
        "age": 20
    };

    let user = new User(data);

    t.ok(user);

    user
        .save()
        .then( result => {
            t.fail(result);
        })
        .catch(err => {
            t.ok(err, 'fallo correctamente.');
            t.end();
        })
});


test.onFinish(function () {
    mongoose.connection.close()
});