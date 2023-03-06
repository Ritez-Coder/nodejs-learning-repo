const express = require("express");
const app = express();

let data = [
  { id: "1", name: "Riteswar", role: "Web3 Developer" },
  { id: "2", name: "Simanta", role: "Web3 Developer" },
  { id: "3", name: "Ambrish", role: "Data Scientist" },
  { id: "4", name: "Felicia", role: "Web2 Developer" },
];

//! bodyParser
app.use(express.json());

//! htmlFormParser
// app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.send("<h1>Users</h1>");
});

// CRUD Operation;

// READ
app.get("/users", (req, res) => {
  res.json(data);
});

// Read single data
app.get("/users/:id", (req, res) => {
  const singleData = data.filter((el) => {
    return el.id === req.params.id;
  });
  res.json(singleData);
});

// CREATE
app.post("/users", (req, res) => {
  console.log(req.body);
  if (req.body) {
    data = [...data, req.body];
    res.status(201).send("data added succesfully!");
  } else {
  }
});

// UPDATE
app.put("/users/:id", (req, res) => {
  const id = req.params.id;
  if (req.body) {
    data[id - 1] = { ...data[id - 1], ...req.body };
    res.send("Data updated");
  }
});

// DELETE
app.delete("/users/:id", (req, res) => {
  const id = req.params.id;
  if (req.params) {
    data = data.filter((el) => {
      return el.id !== id;
    });
    res.send("data deleted");
  }
});

app.listen(4000);
