var io = require('socket.io');
var express = require('express');
var bodyParser = require('body-parser');
var sms = require('./sms.js')

const PASSWORD = "letmein"

var app = express()
  , server = require('http').createServer(app)
  , io = io.listen(server)
  , port = process.env.PORT || 5000;

server.listen(port);

console.log('http server listening on %d', port);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/',function(req,res){
   res.send("I am working!\n");
});

app.post('/twilio-sms-handler', function(req, res) {
	sms_from = req.body.From
	sms_body = req.body.Body

	console.log("received sms: from=" + sms_from + ", body=" + sms_body)

	if( io.sockets.server.eio.clientsCount > 0 ) {
	 	if( sms_body == PASSWORD ) {
			io.sockets.emit('door-buzzer');
		  sms.send(sms_from,"Connected to RPi and buzzed you in.  Did that work?");
		 }
	 	else
	 		sms.send(sms_from,"That's not the correct password.");
	 }
	 else
	  sms.send(sms_from,"Oops! server not connected to RPi.");

	res.send('OK');
} );

io.sockets.on('connection', function (socket) {
  console.log('new socket client connected')
});