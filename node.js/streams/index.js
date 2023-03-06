const fs = require("fs");
let II = 0;
const readStream = fs.createReadStream("./docs/doc1.txt", {
  encoding: "utf-8",
});

const writeStream = fs.createWriteStream("./docs/doc2.txt");

// readStream.on("data", (chunk) => {
//   II++;
//   console.log("_________new chunk _________", II);
//   writeStream.write("\n New Chunk \n");
//   writeStream.write(chunk);
//   console.log(chunk);
// });
//! or
//* Piping...
readStream.pipe(writeStream);
