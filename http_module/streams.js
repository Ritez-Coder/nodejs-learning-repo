const fs = require("fs");
const { readFile, writeFile, createReadStream, createWriteStream } = fs;

const stream = createReadStream("./main.txt", { highWaterMark: 50000 });

stream.on("data", (chunk) => console.log(chunk));
