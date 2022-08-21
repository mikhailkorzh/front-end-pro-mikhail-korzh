const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 8081;

app.get("/api/test", (req, res) => {
  res.send(JSON.stringify({ text: "Hello world" }));
});

app.post("/api/test", (req, res) => {
  console.log(req);
  console.log("body is ====================>", req.body);
  res.send(req.body);
});

app.use(express.static("src"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
