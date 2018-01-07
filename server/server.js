'use strict';
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({extended: true}));
require('./app/routes')(app);
app.listen(port, () => {
});




//https://firebase.google.com/docs/admin/setup?authuser=0