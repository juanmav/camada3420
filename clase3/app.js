const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.json());

const listsRouter = require('./routes/lists.js');
const usersRouter = require('./routes/users');

app.use('/lists', listsRouter);
app.use('/users', usersRouter);

app.listen(8080, () => { console.log('Levanto en 8080!')});

