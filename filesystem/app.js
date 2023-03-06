const fs = require("fs");
fs.writeFileSync("./mynote.txt", "welcome to the node js hahah");
fs.appendFileSync("./mynote.txt", " Additional text");
const res = fs.readFileSync("./mynote.txt");
console.log(res.toLocaleString());

fs.writeFile("./mynote2.txt", "This is my another note", (error) =>
  console.log(error)
);
fs.appendFile("./mynote2.txt", " additoonal data", () =>
  console.log("file appended")
);
fs.readFile("./mynote2.txt", "utf-8", (err, res) => {
  if (err) throw new err();
  else console.log(res);
});

console.log("hello")

