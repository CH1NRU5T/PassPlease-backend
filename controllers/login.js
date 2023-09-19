const { default: hashPassword } = require("../constants/encrypt");
const User = require("../models/user");

async function login(req, res) {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "User does not exist!" });
    }
    const hashedPassword = hashPassword(email, password);
    if (hashedPassword !== user.hashedPassword) {
      return res.status(400).json({ error: "Incorrect password!" });
    }
    return res.status(200).json({ ...user._doc, hashedPassword: undefined });
  } catch (error) {
    return res.status(500).json({ error });
  }
}
module.exports = login;
