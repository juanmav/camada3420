const express = require('express');
const bodyParser = require('body-parser');
const users = require('./routes/users');
const app = express();

app.use(bodyParser.json());
app.use('/v1/users', users);

module.exports = app;
