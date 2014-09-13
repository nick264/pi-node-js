var twilio = require('twilio')
var twilio_client = new twilio.RestClient('ACd0685cd20e63088109989ee24c8bcf1a', '1b6818b3e8a81c152d108749c3ffc017');

exports.phone_number = '+19729759211'

exports.send = function(to,body) {
	twilio_client.sms.messages.create({
	    to: to, // sms_from, // respond back to the user who sent the original text
	    from: exports.phone_number,
	    body: body
	}, function(error, message) {
		if(!error) {
			console.log("Sent sms\nto: " + to, "\nfrom: " + exports.phone_number + "\nbody: " + body);
		} else {
			console.log('Error sending sms to ' + to);
			console.log(error);
		}
	} );
}