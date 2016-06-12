var express = require('express');
var app = express();
var server = require('http').Server(app);

//Configurations
var port = 3000;

app.use(express.static(__dirname + '/../Client'));

server.listen(port);

console.log('Server up on ' + port);

module.exports = app;
