const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/auth.middleware");
const authorizeRoles = require("../middlewares/role.middleware");
const {
  createIssue,
  getAllIssues,
} = require("../controllers/issue.controller");

router.post("/", authMiddleware, authorizeRoles("user"), createIssue);
router.get("/", authMiddleware, authorizeRoles("admin"), getAllIssues);

module.exports = router;
