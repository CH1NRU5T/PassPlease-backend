const User = require("../models/user");
const SavedPassword = require("../models/savedPasswords");
var CryptoJS = require("crypto-js");
async function createSavedPassword(req, res) {
  const { createdBy, encryptedPassword, name, url, iv } = req.body;
  let user = await User.findById(createdBy);
  if (!user) {
    return res.status(400).json({ error: "User does not exist" });
  }
  let savedPassword = await SavedPassword.findOne({ name, createdBy });
  if (savedPassword) {
    return res.status(400).json({ error: "Password already exists" });
  }
  savedPassword = new SavedPassword({
    name,
    createdBy,
    encryptedPassword,
    iv,
    url,
  });
  try {
    await savedPassword.save();
    res.status(200).json({
      ...savedPassword._doc,
      encryptedPassword: undefined,
      iv: undefined,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
}
