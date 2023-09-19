const express = require("express");
const createUser = require("../controllers/createUserController");
const router = express.Router();
router.post("/createUser", (req, res) => {
  console.log("/createUser");
  createUser(req, res);
});
module.exports = router;
