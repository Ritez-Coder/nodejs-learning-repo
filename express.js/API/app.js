const express = require("express");
const app = express();
const data = require("./data");
console.log(data);

app.listen(2000, () => {
  console.log("server listening on port 2000");
});

app.get("/", (req, res) => {
  res.send(`<h1> <a href="/places" >Places</a>  </h1> `);
});

app.get("/places", (req, res) => {
  res.json(data);
});

app.get("/places/:id", (req, res) => {
  const { id } = req.params;
  const singleProduct = data.filter((val) => {
    return val.id === Number(id);
  });
  if (singleProduct.length == 0) {
    res.status(404).send("doesnot exist");
    return;
  }
  return res.json(singleProduct);
});

app.get("/places/:id/review/:any", (req, res) => {
  res.send("Hello Guys this is review section");
});

app.get("/api/v1/query", (req, res) => {
  console.log(req.query);
  res.send("Namaste World!!!");
});

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
