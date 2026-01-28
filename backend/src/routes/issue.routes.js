const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/auth.middleware");
const authorizeRoles = require("../middlewares/role.middleware");
const createIssue = require("../controllers/issue.controller");

router.post("/", authMiddleware, authorizeRoles("user"), createIssue);

module.exports = router;
