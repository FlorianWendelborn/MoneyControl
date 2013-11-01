// require area

var express = require("express");
var resource = require('express-resource');
var app = express();

var fs = require('fs');
var https = require('https');
var privateKey  = fs.readFileSync('./ssl/key.pem', 'utf8');
var certificate = fs.readFileSync('./ssl/crt.pem', 'utf8');

var config = JSON.parse(fs.readFileSync('./config.json', 'utf8'));

var credentials = {key: privateKey, cert: certificate};

app.use('/', express.static(__dirname + '/static', {maxAge:86400000}));

var item = app.resource('item', require('./controllers/item'));

var httpsServer = https.createServer(credentials, app);

httpsServer.listen(config.port);
console.log('MoneyControl running on port ' + config.port);