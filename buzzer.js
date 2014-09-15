var gpio = require('rpi-gpio');

// Dummy gpio write for testing
// gpio.write = function(pin,val,callback) {
// 	console.log("Dummy-set pin " + pin + " to value " + val);
// 	callback();
// }

// relay turns on when pin is set to 0, turns off when pin is set to 1
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

// exports.ensureBuzzerIsOff = function(pin) {
// 	gpio.setup(pin,gpio.DIR_OUT, function() {
// 		offValue = false;
// 		gpio.write(pin, offValue, function() {
// 			console.log("Wrote pin " + pin + " to " + offValue ".  No current should flow.");
// 		} );
// 	} );
// };