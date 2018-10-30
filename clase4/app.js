const express = require('express');
const bodyParser = require('body-parser');
const usersRouter = require('./routes/users');
const loginRouter = require('./routes/login');
const authValidator = require('./routes/middlewares/authValidator');
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/camada3420');

app.use(bodyParser.json());
app.use('/v1/users', authValidator, usersRouter);
// app.use('/v1/lists', authValidator, listsRouter);
app.use('/v1/login', loginRouter);
// Lists
// Task

module.exports = app;
