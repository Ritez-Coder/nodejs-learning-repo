// console.log(global);
let ii = 0;
const i = global.setTimeout(() => {
  console.log("hello");
}, 1000);
clearTimeout(i);

const interval = global.setInterval(() => {
  ii++;
  console.log(ii);
  if (ii > 2) {
    clearInterval(interval);
  }
}, 1000);

console.log(__dirname);
console.log(__filename);

// const my_module = require("../my_module.js");
// console.log(my_module.names, my_module.string);
const { names, string } = require("../my_module.js");
console.log(names, string);
