var io     = require('socket.io-client');
var play   = require('play');
var buzzer = require ('./buzzer.js')

var socket = io.connect('http://nrs-pi-server.herokuapp.com');
// var socket = io.connect('http://localhost:5000');

socket.on('door-buzzer', function() {
	console.log("BUZZING THE DOOR!")

	// instructions for raspberry pi go here
	buzzer.buzzWithGpioPin(22,5000);

} );

socket.on('connect', function () { 
  console.log("Connected to server");
});
