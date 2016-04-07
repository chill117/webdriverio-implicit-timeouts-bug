var express = require('express');
var serveStatic = require('serve-static');
var webdriverio = require('webdriverio');

var app = express();

app.use('/', serveStatic(__dirname + '/public'));
app.listen(3000, 'localhost');

var client = webdriverio.remote({
	desiredCapabilities: {
		browserName: 'chrome'
	}
});

var implicitTimeoutValue = 340;

var done = function(error) {

	if (error) {
		console.error(error);
		return process.exit(1);
	}

	console.log('Yay! Everything worked as expected.')
	process.exit(0);
};

client.init()
	// Setting the global implicit timeout value.
	.timeouts('implicit', implicitTimeoutValue)
	.url('http://localhost:3000/index.html')
	// Must specify the exact same timeout value as above.
	// This works as expected when setting a different value here than the one above.
	.waitForExist('#does-not-exist', implicitTimeoutValue, true)
	.end()
	.then(function() {
		done();
	})
	.catch(done);
