var fs = require("fs");
console.log("Starting");
var content = JSON.parse(fs.readFileSync("config.json"));
console.log("Content of the file : ", content);
console.log("Carry On Executing");
