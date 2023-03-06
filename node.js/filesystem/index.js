const fs = require("fs");

// read file
fs.readFile("../text.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data.toLocaleString());
});

// write file
fs.writeFile("../text1.txt", "This is my  text brother", (err) => {
  if (err) {
    console.log(err);
  }
  console.log("done");
});

// make directory
fs.mkdir("../newDir", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("folder created....");
});

if (fs.existsSync("../newDir1")) {
  fs.rmdir("../newDir", (err) => {
    console.log("folder deleted");
  });
} else {
  fs.writeFile("../newDir1", "Hello World", (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("writing file done !!!");
  });
}

// delete files
if (fs.existsSync("../text2.txt")) {
  fs.unlink("../text1.txt", (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("file deleted");
  });
} else {
  console.log("file doesnot exist...");
}
