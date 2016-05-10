var http = require('http');
var express = require('express');
var app = express();
app.set('PORT', 3000);
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

app.get('/',function(request, response){
  
  response.status(200).send(tomb[2]);
})

server.listen(app.get('PORT'));
console.log("server is running");
console.log("Server Port: " + app.get('PORT'));