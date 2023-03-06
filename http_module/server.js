const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("This is home page");
  }
  if (req.url === "/about") {
    res.end("This is about page");
  }
  if (req.url === "/contact") {
    res.end("This is contact page");
  }
  res.end(`404 Not Found`);
});

server.listen(2000);
