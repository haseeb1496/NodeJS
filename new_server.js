var fs = require("fs");
var file = JSON.parse(fs.readFileSync("config.json"));
var host = process.env.HOST || file.host;
var port = process.env.PORT || file.port;

var mongo = require('mongodb');

var mongo_client = mongo.MongoClient;

var url = 'mongodb://localhost:27017/';

var x = require("express");

var server = x();

var router = x.Router();

server.use(x.static(__dirname));

bookRouter = require('./routes/BookRoutes')();

server.use('/api/books', bookRouter);

server.get("/", function(req, res){

	res.send("Hello World");
});

server.get("/hello/:text", function(req, res){

	res.send("Hello " + req.params.text);
});

var users = JSON.parse(fs.readFileSync("users.json"));

server.get("/users/:id", function(req, res){
	var user = users[req.params.id]
	if(user)
	{
		res.send("Hello " + user.name);
	}
	else
	{
		res.send("Sorry we can not find the user :( ", 404);
	}
	 
});

server.listen(port, host, function(){

	console.log('Listening to: ' + host + ':' + port);

});
