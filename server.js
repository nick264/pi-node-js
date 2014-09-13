var io = require('socket.io');
var express = require('express');
var bodyParser = require('body-parser');

var app = express()
  , server = require('http').createServer(app)
  , io = io.listen(server)
  , port = process.env.PORT || 5000;

server.listen(port);

console.log('http server listening on %d', port);

app.use(bodyParser);

app.post('/twilio-sms-handler', function(req, res) {
	io.sockets.emit('door-buzzer');
	res.send('OK');
} )

io.sockets.on('connection', function (socket) {
  console.log('new socket client connected')
});