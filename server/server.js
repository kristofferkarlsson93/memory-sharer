'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const multerFileUpload = require('./app/configs/multerConfig');


const app = express();
const port = 8000;

app.use(bodyParser.json({extended: true}));
require('./app/routes')(app, multerFileUpload);
app.listen(port, () => {
  console.log('Running server');
});




//https://firebase.google.com/docs/admin/setup?authuser=0