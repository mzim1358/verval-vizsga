var http = require('http');
var express = require('express');
var app = express();
app.set('PORT', process.env.PORT || 3000);
var tomb = [ "Anna",
			"Brigitta",
			"Cecília",
			"Dalma",
			"Emma",
			"Éva",
			"Fanni",
			"Gabriella",
			"Helga",
			"Iringó",
			"Johanna",
			"Katalin",
			"Linda",
			"Nóra",
			"Orsolya"];

var server = http.createServer(app);
app.use(express.static(__dirname));

app.get('/name',function(request, response){
  var index = Math.floor(Math.random() * tomb.length);
  response.status(200).send(tomb[index]);
})

server.listen(app.get('PORT'));
console.log("server is running");
console.log("Server Port: " + app.get('PORT'));