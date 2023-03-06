const { readFile } = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  function sendPage(path) {
    readFile(path, "utf-8", (err, data) => {
      if (err) {
        return;
      }
      res.end(data);
    });
  }

  const url = req.url;
  console.log(url);
  if (url === "/") {
    //* Home page
    res.writeHead(200, { "Content-Type": "text/html" });
    sendPage("./pages/home.html");
  }
  if (url === "/about") {
    //* About page
    res.writeHead(200, { "Content-Type": "text/html" });
    sendPage("./pages/about.html");
  } else {
    //* 404 Page
    res.writeHead(404, "error happened", { "Content-Type": "text/html" });
    sendPage("./pages/404.html");
  }
});

server.listen(2100, "localhost", (err) => {
  console.log("server listening in port 2100");
});
