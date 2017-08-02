// load the http module
var http = require('http');

// configure our HTTP server
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello getintodevops.com\n");
});

// listen on localhost:8000
server.listen(8000);
console.log("Server listening at http://http://azcrig000-master.westeurope.cloudapp.azure.com:8000/");
