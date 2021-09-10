const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const indexRoutes = require("./routes/index");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use("/api", indexRoutes);

module.exports = app;
