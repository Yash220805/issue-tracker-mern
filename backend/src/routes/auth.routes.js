const express = require("express");
const router = express.Router();
const {
  test,
  registerUser,
  loginUser,
  getMe,
} = require("../controllers/auth.controller");
const authMiddleware = require("../middlewares/auth.middleware");

router.get("/test", (req, res) => {
  test(req, res);
});

router.get("/me", authMiddleware, getMe);
router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
