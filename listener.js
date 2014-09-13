var listener = require('socket.io-client');
var play = require('play');

// var socket = io.connect('http://nsedlet-pi-server.herokuapp.com');
var socket = io.connect('http://localhost:5000');

socket.on('door-buzzer', function() {
	console.log("BUZZING THE DOOR!")
} );