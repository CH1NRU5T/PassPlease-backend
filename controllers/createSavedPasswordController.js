const User = require("../models/user");
const SavedPassword = require("../models/savedPasswords");
var CryptoJS = require("crypto-js");
async function createSavedPassword(req, res) {
  const { createdBy, password, name } = req.body;
  let user = await User.findById(createdBy);
  if (!user) {
    return res.status(400).json({ error: "User does not exist" });
  }
  let savedPassword = await SavedPassword.findOne({ name, createdBy });
  if (savedPassword) {
    return res.status(400).json({ error: "Password already exists" });
  }
  const encryptedPassword = encrypt(password, user.encryptedPassword);
  savedPassword = new SavedPassword({
    name,
    createdBy,
    encryptedPassword,
  });
  try {
    await savedPassword.save();
    res
      .status(200)
      .json({ ...savedPassword._doc, encryptedPassword: undefined });
  } catch (error) {
    res.status(500).json({ error });
  }
}

function encrypt(plainPassword, userPassword) {
  var encrypted = CryptoJS.AES.encrypt(plainPassword, userPassword).toString();
  console.log(`encrypted: ${encrypted}`);
  return encrypted;
}
module.exports = createSavedPassword;
