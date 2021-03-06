require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const port = process.env.SERVER_PORT;

app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/upload", express.static("./upload"));
const router = require("./src/router/index.js");
app.use("/api/v1", router);

app.listen(port, () => {
  console.log(`\n App Listen port ${port}`);
});
let allow = {
  origin: "*",
  optionSuccessStatus: 200,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE"
  // preflightContinue: false,
  // optionsSuccessStatus: 200
};
app.use(cors(allow));
