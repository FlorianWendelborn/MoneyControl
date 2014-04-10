// require area

var express = require("express");
var resource = require('express-resource');
var fs = require('fs');
var https = require('https');
var colog = require('colog');

// setting up ssl

var privateKey  = fs.readFileSync('./ssl/key.pem', 'utf8');
var certificate = fs.readFileSync('./ssl/crt.pem', 'utf8');

// loading config

var config = JSON.parse(fs.readFileSync('./config.json', 'utf8'));

// setting up express

var app = express();
	app.use(express.bodyParser());

var credentials = {key: privateKey, cert: certificate};

// setting up controllers

app.use('/', express.static(__dirname + '/static', {maxAge:86400000}));

var item = app.resource('item', require('./controllers/item'));
var login = app.resource('login', require('./controllers/login'));

// starting server

var	httpsServer = https.createServer(credentials, app);
	httpsServer.listen(config.port);

console.log('================================');
console.log('MoneyControl running on port ' + colog.colorYellow(config.port));
console.log('================================');