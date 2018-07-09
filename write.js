var fs = require("fs");
console.log("Start");
fs.writeFile("write_sync.txt", "Hello World! Asynchronous", function(error){
	console.log("Written");
});
console.log("End");
