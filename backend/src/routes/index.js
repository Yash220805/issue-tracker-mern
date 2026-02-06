const express = require("express");
const indexRouter = express.Router();

const healthRouter = require("./health.routes");
const authRouter = require("./auth.routes");
const issueRouter = require("./issue.routes");

indexRouter.use("/health", healthRouter);
indexRouter.use("/auth", authRouter);
indexRouter.use("/issues", issueRouter);

module.exports = indexRouter;
