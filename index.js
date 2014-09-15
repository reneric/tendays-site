var express = require('express');
var config = require('./config');
var fs = require('fs');

var app = express();
var defaultPath = config.servePath ? config.servePath : '';

app.get('*', function(req, res) {
	var path = defaultPath + req.params['0'];

	if (path[path.length - 1] === '/') {
		path += 'index.html';
	}

	res.sendfile(path, function(err) {

		if (!err) {
			return;
		}
		
		var NotFoundPage = defaultPath + '/404.html';

		fs.exists(NotFoundPage, function(exists) {
			if (exists) { 
				res.status(404).sendfile(NotFoundPage);
			} else {
				res.status(404).send('404 - Not Found');
			}
		});
	});
});

app.listen(process.env.PORT || 5000);