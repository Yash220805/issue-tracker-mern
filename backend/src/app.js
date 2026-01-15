const express = require("express");
const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    message: "server is healthy",
  });
});

module.exports = app;
