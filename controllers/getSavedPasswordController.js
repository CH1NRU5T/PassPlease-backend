const User = require("../models/user");
const SavedPassword = require("../models/savedPasswords");
var CryptoJS = require("crypto-js");
async function getSavedPasswords(req, res) {
  const { createdBy } = req.body;
  let user = await User.findById(createdBy);
  if (!user) {
    return res.status(400).json({ error: "User does not exist" });
  }
  let savedPasswords = await SavedPassword.find({ createdBy });
  if (!savedPasswords) {
    return res.status(400).json({ error: "No Saved Passwords" });
  }
  return res.status(200).json(savedPasswords);
}

module.exports = getSavedPasswords;
