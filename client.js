var forever = require('forever-monitor');
var path    = require('path');
var child   = new (forever.Monitor)('listener.js', { sourceDir: path.resolve(__dirname) } );

child.on('exit', function() {
	console.log('client.js has exited after 3 restarts');
} );

child.start();