console.log("Hello World");
var http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello Node!!!");
  })
  .listen(3000);

console.log("serveur demarre ...");

var fs = require("fs");

fs.readFile("welcome.txt", function (err, data) {
  if (err) return console.error(err);
  console.log(data.toString());
});

console.log("Program Ended");
