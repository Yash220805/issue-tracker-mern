const express = require("express");
const cors = require("cors");
const app = express();
const indexRouter = require("./routes/index");

app.use(express.json());
app.use(cors());
app.use("/api", indexRouter);

module.exports = app;
