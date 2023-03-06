const express = require("express");
const app = express();

app.listen(5000, () => {
  console.log("app starting in port 5000");
});

app.get("/", (req, res) => {
  res.status(200).send("<h1>Hello World</h1>");
});

app.get("/about", (req, res) => {
  res.status(200);
  res.send("<h1>About Page</h1>");
});
