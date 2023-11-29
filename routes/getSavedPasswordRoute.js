const express = require("express");
const getSavedPasswords = require("../controllers/getSavedPasswordController");
const router = express.Router();
router.post("/getSavedPasswords", (req, res) => {
  console.log("/getSavedPasswords");
  getSavedPasswords(req, res);
});
module.exports = router;
