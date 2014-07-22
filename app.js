var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

var fileContents = fs.readFileSync('./public/data.txt', 'utf-8');
console.log(fileContents);

// Part II

fs.readFile('./public/data.txt', 'utf-8', function(err, fileContents) {
	app.get('/', function(req, res) {
		// res.render('index');
		res.header('Content-Type', 'text/html');
		res.send(fileContents);
	});
});

// app.get('/', function(req, res) {
// 	// res.render('index');
// 	res.header('Content-Type', 'text/html');
// 	res.send(fileContents);
// });

// Part I

// app.get('/data', function(req, res) {
// 	res.header('Content-Type', 'text/html');
// });

// Part III

app.get('/:filename', function(req, res) {
	var filename = req.params.filename;
	var fileData = fs.readFileSync('./public/' + filename, 'utf-8');
	res.header('Content-Type', 'text/html');
	res.send(fileData);
});


var server = app.listen(6883, function() {
	console.log('Express server listening on port ' + server.address().port);
});
