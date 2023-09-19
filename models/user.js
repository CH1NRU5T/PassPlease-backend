const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
var pbkdf2 = require("pbkdf2");
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
    },
    hashedPassword: {
      type: String,
      min: 6,
      required: true,
    },
  },
  { timestamps: true }
);
// Virtual field for actual pasword.
// userSchema
//   .virtual("password")
//   .set(function (password) {
//     // this._password = password;
//     // this.salt = this.email;
//     this.encryptedPassword = this.securePassword(password);
//   })
//   .get(function () {
//     return this._password;
//   });

// userSchema.methods = {
//   // Authenticate by verifying password.
//   // authenticate: function (plainpassword) {
//   //   return bcrypt.compareSync(plainpassword, this.encryptedPassword);
//   // },

//   // Encrypt the plain password and store it in the
//   // encryptedPassword field.
//   // securePassword: function (plainpassword) {
//   //   if (!plainpassword) return "";
//   //   try {
//   //     // return bcrypt.hashSync(plainpassword, 8);
//   //     var derivedKey = pbkdf2.pbkdf2Sync(
//   //       "password",
//   //       [1, 2, 3],
//   //       10000,
//   //       256,
//   //       "sha256"
//   //     );
//   //     console.log(derivedKey);
//   //     return derivedKey.toString("utf8");
//   //   } catch (err) {
//   //     return "";
//   //   }
//   // },
// };
module.exports = mongoose.model("User", userSchema);
