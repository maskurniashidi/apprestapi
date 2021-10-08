const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//parse application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(3001, () => {
  console.log("server started on port");
});
