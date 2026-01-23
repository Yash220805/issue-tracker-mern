const express = require("express");
const router = express.Router();
const { test, registerUser } = require("../controllers/auth.controller");

router.get("/test", (req, res) => {
  test(req, res);
});

module.exports = router;
