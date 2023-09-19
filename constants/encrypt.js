const pbkdf2 = require("pbkdf2");
function hashPassword(email, password) {
  const derivedKey = pbkdf2.pbkdf2Sync(
    password,
    Buffer.from(generateSalt(email)),
    100000,
    32,
    "sha256"
  );
  return derivedKey.toString("hex");
}

function generateSalt(email) {
  let salt = [];
  const separatedEmail = email.split("@");
  for (let i = 0; i < separatedEmail[0].length; i++) {
    salt.push(separatedEmail[0].charCodeAt(i));
  }
  return salt;
}
exports.default = hashPassword;
