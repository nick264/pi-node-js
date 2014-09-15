var gpio = require('rpi-gpio');

// Dummy gpio write for testing
// gpio.write = function(pin,val,callback) {
// 	console.log("Dummy-set pin " + pin + " to value " + val);
// 	callback();
// }

exports.buzzWithGpioPin = function(pin,durationInMs) {

	function onAndOff() {
		gpio.write(pin, true, function() {
			setTimeout(off, durationInMs);
		} )
	}

	function off() {
		gpio.write(pin, false, close)
	}

	function close() {
		gpio.destroy( function() { 
			console.log("Closed all pins");
		})
	}

	gpio.setup(pin,gpio.DIR_OUT, onAndOff);
};