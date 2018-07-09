var fs = require("fs");
console.log("Starting");
var content = JSON.parse(fs.readFileSync("config.json"));
console.log("Content of the file : ", content);

fs.watchFile ("config.json", function(cur, pre) {
	console.log("Config Changed");
	config = JSON.parse(fs.readFileSync("config.json"));
	console.log("New Contents are: ", config);
});
