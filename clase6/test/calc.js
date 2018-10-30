const test = require('tape');
const calc = require('../helper/calc');
const fetch = require('node-fetch');


test('Quiero probar la suma', function (t) {
    let result = calc.sum(4,10);
    t.ok(result === 14, 'SUMA 4 + 10');
    t.ok(calc.sum(3,3) === 6, '3 +3');
    t.end();
});

test('Testing Resta', function (t) {
    t.plan(1);
    t.ok(calc.resta(10, 5) === 5, ' 10 -5 ');
    t.end();
});

test('Pruebo llamar afuera', function (t) {
    t.plan(1);
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then( users => {
            t.ok(users.length);
            t.end();
        });
});