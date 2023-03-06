require("dotenv").config();
const express = require("express");
const app = express();
const fs = require("fs");
const morgan = require("morgan");

console.log(process.env.PUBLIC_DIR);
//! static middleware...
app.use(express.static(process.env.PUBLIC_DIR));

// !
app.use(morgan("dev"));

//! custom middleware (application level)
app.use((req, res, next) => {
  const ip = req.ip;
  const hostname = req.hostname;
  const baseurl = req.baseUrl;
  const userAgent = req.get("User-Agent");
  const host = req.get("Host");

  const json = JSON.stringify({ ip, hostname, baseurl, userAgent, host });
  fs.appendFile("./server-log.log", `${json},\n`, () => {});
  //   res.send("<h1>middleware running </h1>");
  next();
});

//! body parser middleware
app.use(express.json());

// ! urlencoded
// app.use(express.urlencoded());

//! auth middleware (route level)
const auth = (req, res, next) => {
  console.log(req.query);
  console.log(req.body.password);
  if (req.query.password === "0123" || req.body.password === "0000") {
    next();
  } else {
    res.sendStatus(401);
  }
};

app.get("/", auth, (req, res) => {
  res.send("<h1> Hello </h1>");
});

app.post("/", (req, res) => {
  res.send("post hello");
});

app.use(auth);

app.listen(3000);
