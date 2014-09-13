var forever = require('forever-monitor');

var child = new (forever.Monitor)('listener.js');

child.on('exit', function() {
	console.log('client.js has exited after 3 restarts');
} );

child.start();