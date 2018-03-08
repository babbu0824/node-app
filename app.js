var express = require('express');

var app = express();
var argv = require('optimist');

app.get('/about', function(req,res){
	res.send('<h1>About Us</h1>');
});

app.get('/about/:title',function (req,res){
	res.send('<h1>'+req.params.title+'</h1>');
});

app.get('/*',function(req,res){
	res.send('<h1>Welcome!</h1>');
});

console.log('server started on port 80');
app.listen(80, argv.fe_ip);
