
const http = require('http');

const server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Hello Http');
  console.log("HTTP works!");
});

server.listen(8080);