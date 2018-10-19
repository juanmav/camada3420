const express = require('express');
const bodyParser = require('body-parser');
const usersRouter = require('./routes/users');
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/camada3420');

app.use(bodyParser.json());
app.use('/v1/users', usersRouter);
// Lists
// Task

module.exports = app;
