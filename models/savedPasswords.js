const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
// const { v4: uuidv4 } = require("uuid");

const User = require("./user");
const savedPasswordSchema = new mongoose.Schema(
  {
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    encryptedPassword: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("SavedPassword", savedPasswordSchema);
