var twilio        = require('twilio')
var twilio_client = new twilio.RestClient(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

exports.send = function(to,body) {
	twilio_client.sms.messages.create({
	    to: to, // sms_from, // respond back to the user who sent the original text
	    from: process.env.TWILIO_PHONE_NUMBER,
	    body: body
	}, function(error, message) {
		if(!error) {
			console.log("Sent sms\nto: " + to, "\nfrom: " + process.env.TWILIO_PHONE_NUMBER + "\nbody: " + body);
		} else {
			console.log('Error sending sms to ' + to);
			console.log(error);
		}
	} );
}