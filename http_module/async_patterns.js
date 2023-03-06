//! async patterns
const { readFile, writeFile } = require("fs");
const util = require("util");
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const run = async () => {
  try {
    const first = await readFilePromise("./main.txt", "utf-8");
    const second = await writeFilePromise("./main2.txt", "This is awesome", {
      flag: "a",
    });
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};
run();

/*
const getFile = (path) => {
  return new Promise((rslv, rej) => {
    readFile(path, "utf-8", (err, data) => {
      if (err) {
        rej(err);
      } else {
        rslv(data);
      }
    });
  });
};
const setFile = (path, payload) => {
  return new Promise((reslv, reject) => {
    writeFile(path, payload, (err) => {
      if (err) {
        reject(err);
      } else {
        reslv("File written done !");
      }
    });
  });
};
getFile("./main.txt")
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
*/
