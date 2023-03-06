const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const readStream = fs.createReadStream("./main.txt");
  readStream.on("data", (chunk) => {
    res.write(chunk);
    res.end();
  });
});

server.listen(3000, "localhost", (err) => {
  console.log("server running in port 3000");
});
