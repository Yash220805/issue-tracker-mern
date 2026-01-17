const express = require("express");
const router = express.Router();
const testController = require("../controllers/auth.controller");

router.get("/test", (req, res) => {
  testController(req, res);
});

module.exports = router;
