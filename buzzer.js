var gpio = require('rpi-gpio');

// Dummy gpio write for testing
// gpio.write = function(pin,val,callback) {
// 	console.log("Dummy-set pin " + pin + " to value " + val);
// 	callback();
// }

// typical relays allow you to set up a circuit to be either open or closed by default, depending on which connections you use
// here we assume that:
// (1) the relay is connected such that the circuit is open when there's no power to the relay board, such as when the pi is powered off
// (2) when the pi is on, the GPIO pin outputs HIGH by default
// (3) with the way we've connected the relay, HIGH input = open circuit, LOW input = closed circuit
// this ensures that the circuit is only closed when the pi is powered on AND we've explicitly set the GPIO pin to LOW output
exports.buzzWithGpioPin = function(pin,durationInMs) {

	function onAndOff() {
		gpio.write(pin, false, function() {
			setTimeout(off, durationInMs);
		} )
	}

	function off() {
		gpio.write(pin, true, close)
	}

	function close() {
		gpio.destroy( function() { 
			console.log("Closed all pins");
		})
	}

	gpio.setup(pin,gpio.DIR_OUT, onAndOff);
};

exports.relayTest = function(pin) {
	var stdin = process.openStdin();
	
}

// exports.ensureBuzzerIsOff = function(pin) {
// 	gpio.setup(pin,gpio.DIR_OUT, function() {
// 		offValue = false;
// 		gpio.write(pin, offValue, function() {
// 			console.log("Wrote pin " + pin + " to " + offValue ".  No current should flow.");
// 		} );
// 	} );
// };