const express = require("express");
const indexRouter = express.Router();

const healthRouter = require("./health.routes");
const authRouter = require("./auth.routes");

indexRouter.use("/health", healthRouter);
indexRouter.use("/auth", authRouter);

module.exports = indexRouter;
