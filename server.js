var http = require("http");
var fs = require("fs");
var file = JSON.parse(fs.readFileSync("config.json"));
var host = file.host;
var port = file.port;

console.log("Start");
var server = http.createServer(function (req, res){
	console.log("Requested" + req.url);
	fs.readFile("/home/haseeb/Desktop" + req.url, function(error, data){
		if (error){
			res.writeHead(404, {"Content-type": "text/html"});
			res.end("Sorry the page you requested was not found... :(");
		}
		else{
			res.writeHead(200, {"Content-type": "text/html"});
			res.end(data);	
		}
	});
	
});

server.listen(port, host, function(){
	console.log("Listening to : " + host + " " + port);
});

fs.watchFile("config.json", function(){
	file = JSON.parse(fs.readFileSync("config.json"));
	host = file.host;
	port = file.port;
	server.close();
	console.log("Server Closed");
	console.log("Listening to New Server: ");
	server.listen(port, host, function(){
		console.log("Now Listening to : " + host + " " + port);
	});
});
