const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const flipCointMiddleWare = require('./middlewares/flipcoin.js');

app.use(bodyParser.json());

const listsRouter = require('./routes/lists.js');
const usersRouter = require('./routes/users');

app.use('/lists', flipCointMiddleWare,listsRouter);
app.use('/users', flipCointMiddleWare, usersRouter);

app.listen(8080, () => { console.log('Levanto en 8080!')});

