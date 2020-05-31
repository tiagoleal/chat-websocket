var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var { expressValidator } = require('express-validator')

var app = express();
app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(express.static('./src/public'));
app.use(bodyParser.urlencoded({extended: true}));

//carrega arquivos de forma automatica e joga em app
consign()
    .include('src/routes')
    //.then('src/config/dbConnection.js')
    .then('src/models')
    .then('src/controllers')
    .into(app);

module.exports = app;
