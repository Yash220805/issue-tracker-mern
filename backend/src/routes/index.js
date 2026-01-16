const express = require("express");
const indexRouter = express.Router();

const healthRouter = require("./health.routes");

indexRouter.use("/health", healthRouter);

module.exports = indexRouter;
