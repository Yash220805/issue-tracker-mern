const express = require("express");
const app = express();
const healthRouter = require("./routes/health.routes");

app.use(express.json());
app.use("/health", healthRouter);

module.exports = app;
