var express = require('express');
var app = express();

var GalleryRoute = require('./galleryRoute');

app.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	next();
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/gallery/:page', GalleryRoute.handle);

app.listen(3000);