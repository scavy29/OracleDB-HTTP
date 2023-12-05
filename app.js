const oracleConnection = require("./database");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.get("/query", (req, res) => {
  const query = req.body.query;
  oracleConnection.then((connect) => {
    connect.execute(query).then((data) => {
      console.log(data.rows);
      res.send(JSON.stringify(data.rows[0]));
    });
  });
});

app.post("/query", (req, res) => {
  const query = req.body.query;
  console.log(JSON.stringify(req.body));
  oracleConnection.then((connect) => {
    connect.execute(query).then((data) => {
      console.log(data.rows);
      res.send(JSON.stringify(data.rows));
    });
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(5001, () => {
  console.log("server is running on port 5001");
});
