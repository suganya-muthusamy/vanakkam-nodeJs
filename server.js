const http = require("node:http");

const server = http.createServer((req, res) => {
  if (req === "/home") {
    res.end("Hello World");
  } else {
    res.end(" home");
  }
});

server.listen(3000);
