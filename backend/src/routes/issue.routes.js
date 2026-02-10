const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/auth.middleware");
const authorizeRoles = require("../middlewares/role.middleware");
const {
  createIssue,
  getAllIssues,
  updateIssueStatus,
} = require("../controllers/issue.controller");

router.post("/", authMiddleware, authorizeRoles("user"), createIssue);
router.get("/", authMiddleware, authorizeRoles("admin"), getAllIssues);
router.patch(
  "/:id/status",
  authMiddleware,
  authorizeRoles("admin"),
  updateIssueStatus,
);

module.exports = router;
