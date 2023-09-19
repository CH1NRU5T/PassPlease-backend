const express = require("express");
const createSavedPassword = require("../controllers/createSavedPasswordController");
const router = express.Router();
router.post("/createSavedPassword", (req, res) => {
  console.log("/createSavedPassword");
  createSavedPassword(req, res);
});
module.exports = router;
