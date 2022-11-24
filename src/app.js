const express = require('express');
const { playersRouter } = require('./routers');

const app = express();

app.use(express.json());

app.use('/players', playersRouter);

module.exports = app;
