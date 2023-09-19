const express = require("express");
const login = require("../controllers/login");
const router = express.Router();
router.post("/login", (req, res) => {
  console.log("/login");
  login(req, res);
});
module.exports = router;
