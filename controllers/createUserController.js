const { default: hashPassword } = require("../constants/encrypt");

async function createUser(req, res) {
  const { name, email, password } = req.body;
  const User = require("../models/user");
  let user = await User.findOne({ email });
  if (user) {
    return res.status(400).json({ error: "User already exists" });
  }
  const hashedPassword = hashPassword(email, password);
  user = new User({
    email,
    name,
    hashedPassword,
  });

  try {
    await user.save();
    return res.status(200).json({ ...user._doc, hashedPassword: undefined });
  } catch (error) {
    return res.status(500).json({ error });
  }
}
module.exports = createUser;
